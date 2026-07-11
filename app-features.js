/* Learn with MK — study features */
(function () {
  'use strict';

  var STORAGE_KEY = 'lwm-study-v1';
  var searchMode = 'all'; // all | my | jp | en
  var currentDetailId = null;
  var quizState = null;

  var RELATED_GROUPS = [
    ['は', 'が', 'も'],
    ['を', 'に', 'で', 'へ'],
    ['の', 'と', 'から', 'まで'],
    ['です', 'ではありません', 'じゃありません', 'だ', 'だった'],
    ['ます', 'ました', 'ません', 'てください', 'ている'],
    ['たい', 'たくない', 'たがる'],
    ['ことができる', 'られる', 'れる'],
    ['そうだ', 'ようだ', 'らしい', 'みたい'],
    ['ば', 'たら', 'と', 'なら'],
    ['ても', 'のに', 'が', 'けど', 'けれど'],
    ['なければならない', 'なくてはいけない', 'べき'],
    ['てしまう', 'ておく', 'てみる', 'ていく', 'てくる'],
    ['ばかり', 'だけ', 'しか', 'ほど', 'くらい'],
    ['について', 'に対して', 'として', 'によって'],
    ['ために', 'ように', 'のに'],
  ];

  function loadStore() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { progress: {}, favorites: {}, notes: {}, srs: {} };
  }

  function saveStore(store) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (e) {}
  }

  var store = loadStore();

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function cardId(card) {
    return card && card.dataset ? card.dataset.id : null;
  }

  function getCardMeta(card) {
    if (!card) return null;
    var sec = card.closest('.level-section');
    return {
      id: card.dataset.id,
      level: sec ? sec.id.replace('sec-', '') : '',
      num: ($('.card-num', card) || {}).textContent || '',
      pattern: ($('.grammar-pattern', card) || {}).textContent || '',
      patternHtml: ($('.grammar-pattern', card) || {}).innerHTML || '',
      en: ($('.grammar-meaning', card) || {}).textContent || '',
      my: ($('.grammar-meaning-my', card) || {}).textContent || '',
      tags: card.getAttribute('data-tags') || '',
      structure: ($('.structure-box', card) || {}).textContent || '',
      examples: $all('.example-jp', card).map(function (el) {
        return el.textContent.trim();
      }),
      examplesMy: $all('.example-my', card).map(function (el) {
        return el.textContent.trim();
      }),
      card: card,
    };
  }

  function allCards() {
    return $all('.grammar-card');
  }

  function findCardById(id) {
    return allCards().find(function (c) {
      return c.dataset.id === id;
    });
  }

  /* ---------- init card ids + UI chrome ---------- */
  function initCards() {
    $all('.level-section').forEach(function (sec) {
      var level = sec.id.replace('sec-', '');
      $all('.grammar-card', sec).forEach(function (card) {
        var num = ($('.card-num', card) || {}).textContent.trim();
        card.dataset.id = level + '-' + num;
        decorateCard(card);
      });
      ensureLevelProgress(sec, level);
    });
  }

  function decorateCard(card) {
    var header = $('.card-header', card);
    if (!header || header.querySelector('.card-actions')) return;

    var toggle = $('.card-toggle', header);
    var actions = document.createElement('div');
    actions.className = 'card-actions';
    actions.innerHTML =
      '<button type="button" class="btn-fav" title="Favorite" aria-label="Favorite">♡</button>' +
      '<span class="card-status-dot" title="Status"></span>';
    actions.addEventListener('click', function (e) {
      e.stopPropagation();
      var btn = e.target.closest('button');
      if (btn && btn.classList.contains('btn-fav')) {
        toggleFavorite(card.dataset.id);
      }
    });
    if (toggle) header.insertBefore(actions, toggle);
    else header.appendChild(actions);
    refreshCardChrome(card);
  }

  function ensureLevelProgress(sec, level) {
    var banner = $('.level-banner', sec);
    if (!banner) return;
    var count = $('.level-count', banner);
    if (count) count.style.display = 'none';
    if (banner.querySelector('.level-progress')) return;
    var el = document.createElement('div');
    el.className = 'level-progress';
    el.innerHTML =
      '<div class="pct" id="prog-pct-' +
      level +
      '">0%</div><div class="bar"><span id="prog-bar-' +
      level +
      '"></span></div>';
    banner.appendChild(el);
  }

  function refreshCardChrome(card) {
    var id = card.dataset.id;
    var favBtn = $('.btn-fav', card);
    var dot = $('.card-status-dot', card);
    var st = (store.progress[id] || {}).status || '';
    card.classList.toggle('is-fav', !!store.favorites[id]);
    card.classList.remove('status-learning', 'status-mastered');
    if (st === 'learning') card.classList.add('status-learning');
    if (st === 'mastered') card.classList.add('status-mastered');
    if (favBtn) {
      favBtn.classList.toggle('on-fav', !!store.favorites[id]);
      favBtn.textContent = store.favorites[id] ? '♥' : '♡';
    }
    if (dot) {
      dot.className = 'card-status-dot' + (st ? ' ' + st : '');
    }
  }

  function refreshAllChrome() {
    allCards().forEach(refreshCardChrome);
    updateProgressUI();
    updateNavCounts();
  }

  /* ---------- header / panels ---------- */
  function injectHeaderNav() {
    var right = $('.header-right');
    if (!right || right.querySelector('.lwm-nav')) return;
    var nav = document.createElement('div');
    nav.className = 'lwm-nav';
    nav.innerHTML =
      '<button type="button" class="lwm-nav-btn has-badge" data-panel="progress" title="Progress"><span>📊</span><span class="lwm-label"> Progress</span></button>' +
      '<button type="button" class="lwm-nav-btn has-badge" data-panel="favorites" title="Favorites"><span>♥</span><span class="lwm-label"> Fav</span><span class="lwm-count" id="favCount">0</span></button>' +
      '<button type="button" class="lwm-nav-btn has-badge" data-panel="review" title="SRS Review"><span>🔁</span><span class="lwm-label"> Review</span><span class="lwm-count" id="reviewCount">0</span></button>' +
      '<button type="button" class="lwm-nav-btn" data-panel="quiz" title="Quiz"><span>✏️</span><span class="lwm-label"> Quiz</span></button>' +
      '<button type="button" class="lwm-nav-btn" id="printLevelBtn" title="Print level sheet"><span>🖨</span><span class="lwm-label"> Print</span></button>';
    right.insertBefore(nav, right.firstChild);
    nav.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-panel]');
      if (btn) openPanel(btn.getAttribute('data-panel'));
    });
    $('#printLevelBtn').addEventListener('click', function () {
      printLevelSheet(window.currentLevel || 'n5');
    });
  }

  function injectSearchTools() {
    var wrap = $('.search-wrap');
    if (!wrap || wrap.querySelector('.search-tools')) return;
    var tools = document.createElement('div');
    tools.className = 'search-tools';
    tools.innerHTML =
      '<div class="search-mode" id="searchMode">' +
      '<button type="button" data-mode="all" class="active">All</button>' +
      '<button type="button" data-mode="my">မြန်မာ</button>' +
      '<button type="button" data-mode="jp">日本語</button>' +
      '<button type="button" data-mode="en">EN</button>' +
      '</div>' +
      '<div class="progress-mini" id="progressMini">Mastered <strong>0</strong></div>';
    wrap.appendChild(tools);
    $('#searchMode').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-mode]');
      if (!b) return;
      searchMode = b.getAttribute('data-mode');
      $all('#searchMode button').forEach(function (x) {
        x.classList.toggle('active', x === b);
      });
      var q = ($('#searchInput') || {}).value || '';
      filterCardsEnhanced(q);
    });
    var input = $('#searchInput');
    if (input) {
      input.setAttribute(
        'placeholder',
        '文法を検索 · အဓိပ္ပာယ် / ဖော်မြူလာ ရှာဖွေပါ...'
      );
      input.oninput = function () {
        filterCardsEnhanced(this.value);
      };
    }
  }

  function injectPanels() {
    if ($('#lwmPanels')) return;
    var root = document.createElement('div');
    root.id = 'lwmPanels';
    root.innerHTML =
      panelHtml('progress', 'Progress · တိုးတက်မှု') +
      panelHtml('favorites', 'Favorites · အကြိုက်ဆုံး') +
      panelHtml('review', 'Review · ပြန်လည်လေ့ကျင့်') +
      panelHtml('quiz', 'Quiz · စမ်းမေးခွန်း');
    document.body.appendChild(root);

    var print = document.createElement('div');
    print.className = 'print-sheet';
    print.id = 'printSheet';
    document.body.appendChild(print);
  }

  function panelHtml(id, title) {
    return (
      '<div class="lwm-panel" id="panel-' +
      id +
      '" aria-hidden="true">' +
      '<div class="lwm-panel-header">' +
      '<div class="lwm-panel-title">' +
      title +
      '</div>' +
      '<button type="button" class="lwm-panel-close" data-close="' +
      id +
      '">ပိတ်ရန်</button>' +
      '</div>' +
      '<div class="lwm-panel-body" id="panel-body-' +
      id +
      '"></div></div>'
    );
  }

  function openPanel(id) {
    closeAllPanels();
    var p = $('#panel-' + id);
    if (!p) return;
    if (id === 'progress') renderProgress();
    if (id === 'favorites') renderFavorites();
    if (id === 'review') renderReview();
    if (id === 'quiz') renderQuizSetup();
    p.classList.add('open');
    p.setAttribute('aria-hidden', 'false');
    p.style.pointerEvents = 'auto';
    document.body.classList.add('lwm-panel-open');
  }

  function closePanel(id) {
    var p = $('#panel-' + id);
    if (!p) return;
    p.classList.remove('open');
    p.setAttribute('aria-hidden', 'true');
    p.style.pointerEvents = 'none';
    if (!$all('.lwm-panel.open').length) document.body.classList.remove('lwm-panel-open');
    unlockPageScroll();
  }

  function closeAllPanels() {
    $all('.lwm-panel.open').forEach(function (p) {
      p.classList.remove('open');
      p.setAttribute('aria-hidden', 'true');
      p.style.pointerEvents = 'none';
    });
    document.body.classList.remove('lwm-panel-open');
    unlockPageScroll();
  }

  document.addEventListener('click', function (e) {
    var c = e.target.closest('[data-close]');
    if (c) closePanel(c.getAttribute('data-close'));
  });

  /* ---------- progress / favorites / notes / SRS ---------- */
  function setProgress(id, status) {
    if (!id) return;
    if (!status) {
      delete store.progress[id];
    } else {
      store.progress[id] = {
        status: status,
        updatedAt: Date.now(),
      };
      ensureSrs(id, status);
    }
    saveStore(store);
    var card = findCardById(id);
    if (card) refreshCardChrome(card);
    updateProgressUI();
    updateNavCounts();
    if (currentDetailId === id) refreshDetailToolbar();
  }

  function toggleFavorite(id) {
    if (!id) return;
    if (store.favorites[id]) delete store.favorites[id];
    else store.favorites[id] = Date.now();
    saveStore(store);
    var card = findCardById(id);
    if (card) refreshCardChrome(card);
    updateNavCounts();
    if (currentDetailId === id) refreshDetailToolbar();
  }

  function saveNote(id, text) {
    if (!id) return;
    if (!text || !text.trim()) delete store.notes[id];
    else store.notes[id] = text.trim();
    saveStore(store);
  }

  function ensureSrs(id, status) {
    var now = Date.now();
    if (status === 'mastered') {
      store.srs[id] = {
        interval: 21,
        ease: 2.5,
        due: now + 21 * 86400000,
        reps: ((store.srs[id] || {}).reps || 0) + 1,
      };
    } else if (status === 'learning') {
      store.srs[id] = {
        interval: 1,
        ease: 2.3,
        due: now,
        reps: (store.srs[id] || {}).reps || 0,
      };
    }
  }

  function srsGrade(id, grade) {
    // grade: 0 again, 1 hard, 2 good, 3 easy
    var item = store.srs[id] || { interval: 0, ease: 2.5, reps: 0, due: Date.now() };
    var ease = item.ease || 2.5;
    if (grade === 0) {
      item.interval = 0;
      item.due = Date.now();
      setProgress(id, 'learning');
    } else {
      ease = Math.max(1.3, ease + (grade === 1 ? -0.15 : grade === 2 ? 0 : 0.15));
      var interval = item.interval || 0;
      if (interval <= 0) interval = grade === 1 ? 1 : grade === 2 ? 2 : 4;
      else interval = Math.round(interval * ease * (grade === 1 ? 0.8 : grade === 3 ? 1.3 : 1));
      item.interval = interval;
      item.ease = ease;
      item.reps = (item.reps || 0) + 1;
      item.due = Date.now() + interval * 86400000;
      if (interval >= 14) setProgress(id, 'mastered');
      else setProgress(id, 'learning');
    }
    store.srs[id] = item;
    saveStore(store);
    updateNavCounts();
  }

  function dueReviews() {
    var now = Date.now();
    return Object.keys(store.srs)
      .filter(function (id) {
        var s = store.srs[id];
        return s && s.due <= now && findCardById(id);
      })
      .sort(function (a, b) {
        return store.srs[a].due - store.srs[b].due;
      });
  }

  function updateProgressUI() {
    var levels = ['n5', 'n4', 'n3', 'n2', 'n1'];
    var masteredTotal = 0;
    var total = 0;
    levels.forEach(function (lv) {
      var cards = $all('#list-' + lv + ' .grammar-card');
      var mastered = 0;
      var learning = 0;
      cards.forEach(function (c) {
        var st = (store.progress[c.dataset.id] || {}).status;
        if (st === 'mastered') mastered++;
        if (st === 'learning') learning++;
      });
      total += cards.length;
      masteredTotal += mastered;
      var pct = cards.length ? Math.round((mastered / cards.length) * 100) : 0;
      var pctEl = $('#prog-pct-' + lv);
      var barEl = $('#prog-bar-' + lv);
      if (pctEl) pctEl.textContent = pct + '% · ' + mastered + '/' + cards.length;
      if (barEl) {
        barEl.style.width = pct + '%';
        barEl.style.background = 'var(--' + lv + ')';
      }
    });
    var mini = $('#progressMini');
    if (mini)
      mini.innerHTML =
        'Mastered <strong>' + masteredTotal + '</strong> / ' + total;
  }

  function updateNavCounts() {
    var favN = Object.keys(store.favorites).filter(function (id) {
      return !!findCardById(id);
    }).length;
    var revN = dueReviews().length;
    var fc = $('#favCount');
    var rc = $('#reviewCount');
    if (fc) fc.textContent = String(favN);
    if (rc) rc.textContent = String(revN);
  }

  function renderProgress() {
    var body = $('#panel-body-progress');
    var levels = ['n5', 'n4', 'n3', 'n2', 'n1'];
    var favN = Object.keys(store.favorites).length;
    var notesN = Object.keys(store.notes).length;
    var dueN = dueReviews().length;
    var learningN = 0;
    var masteredN = 0;
    Object.keys(store.progress).forEach(function (id) {
      var s = store.progress[id].status;
      if (s === 'learning') learningN++;
      if (s === 'mastered') masteredN++;
    });
    var html =
      '<div class="stat-row">' +
      '<div class="stat-pill">Mastered <b>' +
      masteredN +
      '</b></div>' +
      '<div class="stat-pill">Learning <b>' +
      learningN +
      '</b></div>' +
      '<div class="stat-pill">Favorites <b>' +
      favN +
      '</b></div>' +
      '<div class="stat-pill">Notes <b>' +
      notesN +
      '</b></div>' +
      '<div class="stat-pill">Due today <b>' +
      dueN +
      '</b></div>' +
      '</div><div class="prog-grid">';
    levels.forEach(function (lv) {
      var cards = $all('#list-' + lv + ' .grammar-card');
      var mastered = cards.filter(function (c) {
        return (store.progress[c.dataset.id] || {}).status === 'mastered';
      }).length;
      var pct = cards.length ? Math.round((mastered / cards.length) * 100) : 0;
      html +=
        '<div class="prog-card ' +
        lv +
        '"><div class="lv">' +
        lv.toUpperCase() +
        '</div><div class="nums">' +
        mastered +
        ' / ' +
        cards.length +
        ' mastered</div><div class="bar"><span style="width:' +
        pct +
        '%"></span></div></div>';
    });
    html += '</div>';
    html +=
      '<button type="button" class="lwm-secondary" id="resetProgressBtn">Reset all progress</button>';
    body.innerHTML = html;
    $('#resetProgressBtn').onclick = function () {
      if (!confirm('Reset progress, favorites, notes, and SRS?')) return;
      store = { progress: {}, favorites: {}, notes: {}, srs: {} };
      saveStore(store);
      refreshAllChrome();
      renderProgress();
    };
  }

  function renderFavorites() {
    var body = $('#panel-body-favorites');
    var ids = Object.keys(store.favorites).sort(function (a, b) {
      return store.favorites[b] - store.favorites[a];
    });
    if (!ids.length) {
      body.innerHTML =
        '<div class="lwm-empty">No favorites yet.<br>♥ ကို နှိပ်ပြီး သိမ်းပါ။</div>';
      return;
    }
    body.innerHTML = ids
      .map(function (id) {
        var card = findCardById(id);
        if (!card) return '';
        var m = getCardMeta(card);
        return (
          '<button type="button" class="fav-item" data-open="' +
          id +
          '"><span class="num">' +
          m.level.toUpperCase() +
          ' ' +
          m.num +
          '</span><div><div class="pat">' +
          escapeHtml(m.pattern) +
          '</div><div class="meta">' +
          escapeHtml(m.my || m.en) +
          '</div></div></button>'
        );
      })
      .join('');
    body.onclick = function (e) {
      var b = e.target.closest('[data-open]');
      if (!b) return;
      closeAllPanels();
      var card = findCardById(b.getAttribute('data-open'));
      if (card && window.openDetail) window.openDetail(card);
    };
  }

  function renderReview() {
    var body = $('#panel-body-review');
    var due = dueReviews();
    if (!due.length) {
      // seed learning items that have no due yet
      var learning = Object.keys(store.progress).filter(function (id) {
        return store.progress[id].status === 'learning' && findCardById(id);
      });
      if (!learning.length) {
        body.innerHTML =
          '<div class="lwm-empty">No reviews due.<br>Mark grammar as Learning to start SRS.</div>';
        return;
      }
      due = learning;
    }
    var html =
      '<p style="color:var(--muted);margin-bottom:12px;font-size:0.9rem">' +
      due.length +
      ' item(s) to review</p>';
    due.forEach(function (id) {
      var card = findCardById(id);
      if (!card) return;
      var m = getCardMeta(card);
      html +=
        '<div class="review-item" style="flex-direction:column;align-items:stretch;cursor:default">' +
        '<button type="button" class="fav-item" data-open="' +
        id +
        '" style="border:none;background:transparent;padding:0;margin:0">' +
        '<span class="num">' +
        m.level.toUpperCase() +
        ' ' +
        m.num +
        '</span><div><div class="pat">' +
        escapeHtml(m.pattern) +
        '</div><div class="meta">' +
        escapeHtml(m.my || m.en) +
        '</div></div></button>' +
        '<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">' +
        '<button type="button" class="lwm-secondary" data-grade="0" data-id="' +
        id +
        '">Again</button>' +
        '<button type="button" class="lwm-secondary" data-grade="1" data-id="' +
        id +
        '">Hard</button>' +
        '<button type="button" class="lwm-primary" data-grade="2" data-id="' +
        id +
        '">Good</button>' +
        '<button type="button" class="lwm-secondary" data-grade="3" data-id="' +
        id +
        '">Easy</button>' +
        '</div></div>';
    });
    body.innerHTML = html;
    body.onclick = function (e) {
      var open = e.target.closest('[data-open]');
      if (open) {
        closeAllPanels();
        var card = findCardById(open.getAttribute('data-open'));
        if (card && window.openDetail) window.openDetail(card);
        return;
      }
      var g = e.target.closest('[data-grade]');
      if (g) {
        srsGrade(g.getAttribute('data-id'), parseInt(g.getAttribute('data-grade'), 10));
        renderReview();
      }
    };
  }

  /* ---------- search (Myanmar-first modes) ---------- */
  function filterCardsEnhanced(query) {
    var q = (query || '').toLowerCase().trim();
    var level = window.currentLevel || 'n5';
    var list = $('#list-' + level);
    if (!list) return;
    var cards = $all('.grammar-card', list);
    var visible = 0;
    cards.forEach(function (card) {
      var hay = buildSearchHaystack(card);
      var ok = !q || hay.includes(q);
      card.style.display = ok ? '' : 'none';
      if (ok) visible++;
    });
    // soft rank: Myanmar matches first when mode is my
    if (q && searchMode === 'my') {
      cards
        .filter(function (c) {
          return c.style.display !== 'none';
        })
        .sort(function (a, b) {
          var am = (($('.grammar-meaning-my', a) || {}).textContent || '')
            .toLowerCase()
            .includes(q)
            ? 0
            : 1;
          var bm = (($('.grammar-meaning-my', b) || {}).textContent || '')
            .toLowerCase()
            .includes(q)
            ? 0
            : 1;
          return am - bm;
        })
        .forEach(function (c) {
          list.appendChild(c);
        });
    }
    var emptyEl = $('#empty-' + level);
    if (emptyEl) emptyEl.style.display = visible === 0 && cards.length > 0 ? 'block' : 'none';
  }

  function buildSearchHaystack(card) {
    var tags = (card.getAttribute('data-tags') || '').toLowerCase();
    var pat = (($('.grammar-pattern', card) || {}).textContent || '').toLowerCase();
    var en = (($('.grammar-meaning', card) || {}).textContent || '').toLowerCase();
    var my = (($('.grammar-meaning-my', card) || {}).textContent || '').toLowerCase();
    var body = (($('.card-body', card) || {}).textContent || '').toLowerCase();
    if (searchMode === 'my') return (my + ' ' + body).toLowerCase();
    if (searchMode === 'jp') return (pat + ' ' + body).toLowerCase();
    if (searchMode === 'en') return (en + ' ' + tags).toLowerCase();
    return (pat + ' ' + en + ' ' + my + ' ' + tags + ' ' + body).toLowerCase();
  }

  // override global filterCards used by switchTab
  window.filterCards = filterCardsEnhanced;

  /* ---------- detail enhancements ---------- */
  var _openDetail = null;

  function wrapOpenDetail() {
    if (!window.openDetail || window.openDetail._lwm) return;
    _openDetail = window.openDetail;
    window.openDetail = function (card) {
      var ov = $('#detailOverlay');
      if (ov) ov.style.pointerEvents = 'auto';
      _openDetail(card);
      currentDetailId = card.dataset.id;
      enhanceDetail(card);
    };
    window.openDetail._lwm = true;
  }

  function enhanceDetail(card) {
    var overlay = $('#detailOverlay');
    if (!overlay) return;
    // remove previous study UI
    $all('.detail-study-bar, .notes-box, .related-box', overlay).forEach(function (el) {
      el.remove();
    });

    var scroll = $('.detail-scroll', overlay);
    var hero = $('#detailHero');
    var body = $('#detailBody');
    if (!scroll || !hero) return;

    var bar = document.createElement('div');
    bar.className = 'detail-study-bar';
    bar.innerHTML =
      '<button type="button" id="dFav">♡ Favorite</button>' +
      '<button type="button" id="dLearn">Learning</button>' +
      '<button type="button" id="dMaster">Mastered</button>' +
      '<button type="button" id="dAudio">🔊 Pattern</button>' +
      '<button type="button" id="dPrintOne">🖨 Print</button>';
    scroll.insertBefore(bar, hero.nextSibling);

    var notes = document.createElement('div');
    notes.className = 'notes-box';
    notes.innerHTML =
      '<label>Notes · မှတ်ချက်</label><textarea id="dNotes" placeholder="Write your own note..."></textarea>';
    scroll.insertBefore(notes, body);

    var related = document.createElement('div');
    related.className = 'related-box';
    related.innerHTML = '<h4>Related / Often confused</h4><div class="related-list" id="dRelated"></div>';
    scroll.appendChild(related);

    // audio buttons on examples
    $all('.example-item', body).forEach(function (item) {
      var jp = $('.example-jp', item);
      if (!jp || item.querySelector('.audio-btn-inline')) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'audio-btn-inline';
      btn.textContent = '🔊';
      btn.title = 'Play audio';
      btn.onclick = function (e) {
        e.stopPropagation();
        speakJa(jp.textContent);
      };
      item.appendChild(btn);
    });

    refreshDetailToolbar();
    renderRelated(card);

    $('#dFav').onclick = function () {
      toggleFavorite(currentDetailId);
    };
    $('#dLearn').onclick = function () {
      var cur = (store.progress[currentDetailId] || {}).status;
      setProgress(currentDetailId, cur === 'learning' ? null : 'learning');
    };
    $('#dMaster').onclick = function () {
      var cur = (store.progress[currentDetailId] || {}).status;
      setProgress(currentDetailId, cur === 'mastered' ? null : 'mastered');
    };
    $('#dAudio').onclick = function () {
      var m = getCardMeta(card);
      speakJa(m.pattern.replace(/〜/g, ''));
    };
    $('#dPrintOne').onclick = function () {
      printOneGrammar(card);
    };
    var ta = $('#dNotes');
    ta.value = store.notes[currentDetailId] || '';
    ta.oninput = function () {
      saveNote(currentDetailId, ta.value);
    };
  }

  function refreshDetailToolbar() {
    var id = currentDetailId;
    if (!id) return;
    var fav = $('#dFav');
    var learn = $('#dLearn');
    var master = $('#dMaster');
    var st = (store.progress[id] || {}).status;
    if (fav) {
      fav.classList.toggle('active-fav', !!store.favorites[id]);
      fav.textContent = (store.favorites[id] ? '♥' : '♡') + ' Favorite';
    }
    if (learn) learn.classList.toggle('active-learn', st === 'learning');
    if (master) master.classList.toggle('active-master', st === 'mastered');
  }

  function renderRelated(card) {
    var box = $('#dRelated');
    if (!box) return;
    var meta = getCardMeta(card);
    var related = findRelated(meta).slice(0, 6);
    if (!related.length) {
      box.innerHTML = '<div class="lwm-empty" style="padding:12px">No close matches found.</div>';
      return;
    }
    box.innerHTML = related
      .map(function (m) {
        return (
          '<button type="button" class="related-item" data-open="' +
          m.id +
          '"><div><div class="rp">' +
          escapeHtml(m.pattern) +
          '</div><div class="rm">' +
          escapeHtml(m.level.toUpperCase() + ' · ' + (m.my || m.en)) +
          '</div></div></button>'
        );
      })
      .join('');
    box.onclick = function (e) {
      var b = e.target.closest('[data-open]');
      if (!b) return;
      var c = findCardById(b.getAttribute('data-open'));
      if (c && window.openDetail) window.openDetail(c);
    };
  }

  function findRelated(meta) {
    if (!meta) return [];
    var pat = meta.pattern;
    var tags = (meta.tags || '').toLowerCase();
    var groupHits = [];
    RELATED_GROUPS.forEach(function (group) {
      var hit = group.some(function (g) {
        return pat.indexOf(g) !== -1 || tags.indexOf(g) !== -1;
      });
      if (hit) groupHits = groupHits.concat(group);
    });
    // unique
    groupHits = groupHits.filter(function (g, i, a) {
      return a.indexOf(g) === i;
    });
    var scored = [];
    allCards().forEach(function (c) {
      if (c.dataset.id === meta.id) return;
      var m = getCardMeta(c);
      var score = 0;
      groupHits.forEach(function (g) {
        if (g.length === 1) {
          // single particles: only count if both share that particle prominently
          if (m.pattern.indexOf(g) !== -1 && pat.indexOf(g) !== -1) score += 2;
        } else if (m.pattern.indexOf(g) !== -1 || (m.tags || '').indexOf(g) !== -1) {
          score += 4;
        }
      });
      if (m.level === meta.level) score += 5;
      else score -= 2;
      var enWords = (meta.en || '').toLowerCase().split(/\W+/).filter(function (w) {
        return w.length > 4;
      });
      enWords.forEach(function (w) {
        if ((m.en || '').toLowerCase().indexOf(w) !== -1) score += 2;
      });
      if (score >= 6) scored.push({ score: score, meta: m });
    });
    scored.sort(function (a, b) {
      return b.score - a.score;
    });
    return scored.map(function (s) {
      return s.meta;
    });
  }

  /* ---------- audio (Web Speech API) ---------- */
  function speakJa(text) {
    if (!window.speechSynthesis || !text) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP';
    u.rate = 0.9;
    var voices = window.speechSynthesis.getVoices();
    var ja = voices.find(function (v) {
      return v.lang && v.lang.indexOf('ja') === 0;
    });
    if (ja) u.voice = ja;
    window.speechSynthesis.speak(u);
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = function () {};
  }

  /* ---------- quiz ---------- */
  function renderQuizSetup() {
    var body = $('#panel-body-quiz');
    var level = window.currentLevel || 'n5';
    body.innerHTML =
      '<div class="quiz-setup">' +
      '<h3>Quiz</h3>' +
      '<p>Test yourself with patterns from the selected level (or favorites).</p>' +
      '<div class="quiz-opts">' +
      '<label><input type="radio" name="qsrc" value="level" checked> Current level (' +
      level.toUpperCase() +
      ')</label>' +
      '<label><input type="radio" name="qsrc" value="favorites"> Favorites only</label>' +
      '<label><input type="radio" name="qsrc" value="learning"> Learning items</label>' +
      '</div>' +
      '<div class="quiz-opts">' +
      '<label><input type="radio" name="qtype" value="my2jp" checked> Myanmar → Japanese</label>' +
      '<label><input type="radio" name="qtype" value="jp2my"> Japanese → Myanmar / EN</label>' +
      '<label><input type="radio" name="qtype" value="blank"> Fill the blank (example)</label>' +
      '</div>' +
      '<div class="quiz-opts">' +
      '<label><input type="radio" name="qcount" value="5" checked> 5 questions</label>' +
      '<label><input type="radio" name="qcount" value="10"> 10 questions</label>' +
      '<label><input type="radio" name="qcount" value="15"> 15 questions</label>' +
      '</div>' +
      '<button type="button" class="lwm-primary" id="startQuizBtn">Start</button>' +
      '</div>';
    $('#startQuizBtn').onclick = startQuiz;
  }

  function quizPool(src) {
    var level = window.currentLevel || 'n5';
    var cards = allCards();
    if (src === 'level') cards = $all('#list-' + level + ' .grammar-card');
    else if (src === 'favorites')
      cards = cards.filter(function (c) {
        return !!store.favorites[c.dataset.id];
      });
    else if (src === 'learning')
      cards = cards.filter(function (c) {
        return (store.progress[c.dataset.id] || {}).status === 'learning';
      });
    return cards.map(getCardMeta).filter(function (m) {
      return m && m.pattern;
    });
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function startQuiz() {
    var src = ($('input[name="qsrc"]:checked') || {}).value || 'level';
    var type = ($('input[name="qtype"]:checked') || {}).value || 'my2jp';
    var count = parseInt(($('input[name="qcount"]:checked') || {}).value || '5', 10);
    var pool = quizPool(src);
    if (pool.length < 4) {
      alert('Need at least 4 grammar items in this pool.');
      return;
    }
    var questions = shuffle(pool).slice(0, Math.min(count, pool.length));
    quizState = { type: type, questions: questions, index: 0, score: 0, pool: pool };
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    var body = $('#panel-body-quiz');
    var q = quizState.questions[quizState.index];
    if (!q) {
      renderQuizResult();
      return;
    }
    var html =
      '<div class="quiz-play"><div class="quiz-progress">Q ' +
      (quizState.index + 1) +
      ' / ' +
      quizState.questions.length +
      ' · Score ' +
      quizState.score +
      '</div>';

    var choices;
    var prompt;
    var sub;
    var answer;

    if (quizState.type === 'my2jp') {
      prompt = q.my || q.en || q.pattern;
      sub = 'Choose the Japanese pattern';
      answer = q.pattern;
      choices = buildChoices(q, 'pattern');
    } else if (quizState.type === 'jp2my') {
      prompt = q.pattern;
      sub = 'Choose the meaning';
      answer = q.my || q.en;
      choices = buildChoices(q, 'meaning');
    } else {
      var ex = q.examples[0] || q.pattern;
      var blanked = blankExample(ex, q.pattern);
      prompt = blanked.text;
      sub = 'Choose what fits the blank · ' + (q.my || q.en);
      answer = blanked.answer;
      choices = buildBlankChoices(blanked.answer, q);
    }

    html +=
      '<div class="quiz-prompt">' +
      escapeHtml(prompt) +
      '</div><div class="quiz-sub">' +
      escapeHtml(sub) +
      '</div><div class="quiz-opts" id="quizChoices">';
    choices.forEach(function (c, i) {
      html +=
        '<button type="button" class="quiz-choice" data-i="' +
        i +
        '">' +
        escapeHtml(c) +
        '</button>';
    });
    html +=
      '</div><div class="quiz-feedback" id="quizFeedback"></div>' +
      '<button type="button" class="lwm-primary" id="quizNext" style="display:none;margin-top:12px">Next</button>' +
      '<button type="button" class="audio-btn-inline" id="quizAudio" style="margin-top:10px">🔊 Hear pattern</button></div>';
    body.innerHTML = html;

    var answered = false;
    $('#quizChoices').onclick = function (e) {
      var btn = e.target.closest('.quiz-choice');
      if (!btn || answered) return;
      answered = true;
      var pick = choices[parseInt(btn.getAttribute('data-i'), 10)];
      var ok = pick === answer;
      if (ok) quizState.score++;
      $all('.quiz-choice').forEach(function (b) {
        b.disabled = true;
        var t = choices[parseInt(b.getAttribute('data-i'), 10)];
        if (t === answer) b.classList.add('correct');
        if (b === btn && !ok) b.classList.add('wrong');
      });
      var fb = $('#quizFeedback');
      fb.className = 'quiz-feedback show ' + (ok ? 'ok' : 'bad');
      fb.textContent = ok ? 'Correct!' : 'Answer: ' + answer;
      // light SRS touch
      if (ok) srsGrade(q.id, 2);
      else {
        setProgress(q.id, 'learning');
        srsGrade(q.id, 0);
      }
      $('#quizNext').style.display = '';
    };
    $('#quizNext').onclick = function () {
      quizState.index++;
      renderQuizQuestion();
    };
    $('#quizAudio').onclick = function () {
      speakJa(q.pattern.replace(/〜/g, ''));
    };
  }

  function buildChoices(correctMeta, field) {
    var pool = quizState.pool.filter(function (m) {
      return m.id !== correctMeta.id;
    });
    var wrong = shuffle(pool)
      .slice(0, 3)
      .map(function (m) {
        return field === 'pattern' ? m.pattern : m.my || m.en;
      });
    var right = field === 'pattern' ? correctMeta.pattern : correctMeta.my || correctMeta.en;
    return shuffle([right].concat(wrong));
  }

  function blankExample(sentence, pattern) {
    var core = pattern.replace(/〜/g, '').replace(/\s+/g, '');
    // try highlight parts / common particles in sentence
    var candidates = ['ではありません', 'じゃありません', 'なければならない', 'について', 'に対して', 'ことができる'];
    var found = null;
    candidates.forEach(function (c) {
      if (!found && sentence.indexOf(c) !== -1) found = c;
    });
    if (!found) {
      var parts = core.match(/[はがをにでへとものもよりまでから]/g);
      if (parts) {
        for (var i = 0; i < parts.length; i++) {
          if (sentence.indexOf(parts[i]) !== -1) {
            found = parts[i];
            break;
          }
        }
      }
    }
    if (!found) {
      // fallback: blank last 2-4 chars of pattern present in sentence
      for (var len = Math.min(4, core.length); len >= 1; len--) {
        var slice = core.slice(-len);
        if (sentence.indexOf(slice) !== -1) {
          found = slice;
          break;
        }
      }
    }
    if (!found) return { text: sentence.replace(/。$/, '') + ' → ( ? )', answer: core || pattern };
    return {
      text: sentence.replace(found, '【　】'),
      answer: found,
    };
  }

  function buildBlankChoices(answer, meta) {
    var commons = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'の', 'も', 'から', 'まで', 'より', 'です', 'ます', 'て', 'た'];
    var wrong = shuffle(
      commons.filter(function (c) {
        return c !== answer;
      })
    ).slice(0, 3);
    if (wrong.length < 3) {
      wrong = wrong.concat(
        shuffle(
          quizState.pool
            .map(function (m) {
              return m.pattern.replace(/〜/g, '').slice(0, 2);
            })
            .filter(function (x) {
              return x && x !== answer;
            })
        )
      ).slice(0, 3);
    }
    return shuffle([answer].concat(wrong).slice(0, 4));
  }

  function renderQuizResult() {
    var body = $('#panel-body-quiz');
    var total = quizState.questions.length;
    var score = quizState.score;
    body.innerHTML =
      '<div class="quiz-result"><h3>Result</h3><p>You scored <b>' +
      score +
      ' / ' +
      total +
      '</b> (' +
      Math.round((score / total) * 100) +
      '%)</p>' +
      '<button type="button" class="lwm-primary" id="quizAgain">Try again</button> ' +
      '<button type="button" class="lwm-secondary" id="quizClose">Close</button></div>';
    $('#quizAgain').onclick = renderQuizSetup;
    $('#quizClose').onclick = function () {
      closePanel('quiz');
    };
  }

  /* ---------- print ---------- */
  function printLevelSheet(level) {
    var sheet = $('#printSheet');
    var cards = $all('#list-' + level + ' .grammar-card');
    var rows = cards
      .map(function (c) {
        var m = getCardMeta(c);
        return (
          '<div class="print-row"><div class="p-pat">' +
          escapeHtml(m.num + ' · ' + m.pattern) +
          '</div><div class="p-en">' +
          escapeHtml(m.en) +
          '</div><div class="p-my">' +
          escapeHtml(m.my) +
          '</div><div class="p-struct">' +
          escapeHtml((m.structure || '').trim()) +
          '</div></div>'
        );
      })
      .join('');
    sheet.innerHTML =
      '<h1>Learn with MK — ' +
      level.toUpperCase() +
      '</h1><div class="sub">Grammar study sheet · ' +
      cards.length +
      ' items · ' +
      new Date().toLocaleDateString() +
      '</div>' +
      rows;
    window.print();
  }

  function printOneGrammar(card) {
    var m = getCardMeta(card);
    var sheet = $('#printSheet');
    var examples = (m.examples || [])
      .map(function (ex, i) {
        return (
          '<div class="print-row"><div class="p-pat">' +
          escapeHtml(ex) +
          '</div><div class="p-my">' +
          escapeHtml(m.examplesMy[i] || '') +
          '</div></div>'
        );
      })
      .join('');
    sheet.innerHTML =
      '<h1>' +
      escapeHtml(m.pattern) +
      '</h1><div class="sub">' +
      escapeHtml(m.level.toUpperCase() + ' · ' + m.num + ' · ' + (m.en || '')) +
      '<br>' +
      escapeHtml(m.my) +
      '</div><div class="print-row"><div class="p-struct">' +
      escapeHtml((m.structure || '').trim()) +
      '</div></div>' +
      examples +
      (store.notes[m.id]
        ? '<div class="print-row"><div class="p-en">Notes</div><div class="p-my">' +
          escapeHtml(store.notes[m.id]) +
          '</div></div>'
        : '');
    window.print();
  }

  /* ---------- PWA ---------- */
  function registerPwa() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('./sw.js').catch(function () {});
  }

  /* ---------- utils ---------- */
  function escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------- boot ---------- */
  function boot() {
    initCards();
    injectHeaderNav();
    injectSearchTools();
    injectPanels();
    wrapOpenDetail();
    refreshAllChrome();
    registerPwa();
    unlockPageScroll();
    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', syncHeaderHeight);
    }
    // Re-measure after fonts/layout settle
    setTimeout(syncHeaderHeight, 100);
    setTimeout(syncHeaderHeight, 500);

    // keep detail toolbar in sync when closing
    var _hide = window.hideDetailPanel;
    if (_hide && !_hide._lwm) {
      window.hideDetailPanel = function () {
        currentDetailId = null;
        _hide();
        var ov = $('#detailOverlay');
        if (ov) ov.style.pointerEvents = 'none';
        unlockPageScroll();
      };
      window.hideDetailPanel._lwm = true;
    }
  }

  function syncHeaderHeight() {
    var header = $('.site-header');
    if (!header) return;
    var h = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--lwm-header-h', h + 'px');
  }

  function unlockPageScroll() {
    // Closed overlays must never capture touch on mobile
    var detail = $('#detailOverlay');
    if (detail && !detail.classList.contains('open')) {
      detail.style.pointerEvents = 'none';
    }
    $all('.lwm-panel').forEach(function (p) {
      if (!p.classList.contains('open')) p.style.pointerEvents = 'none';
      else p.style.pointerEvents = 'auto';
    });
    if (!document.body.classList.contains('detail-open') &&
        !document.body.classList.contains('lwm-panel-open')) {
      document.body.style.overflow = '';
      document.documentElement.style.overflowY = 'auto';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
