
import { StudyCardData } from '../types';

export const chapter2021Part1Data: StudyCardData[] = [
  {
    id: "2021-1",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>骨組<rt>ほねぐみ</rt></ruby>の<ruby>梁<rt>はり</rt></ruby>のB<ruby>点<rt>てん</rt></ruby>に<ruby>水平荷重<rt>すいへいかじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>すると、<ruby>左側<rt>ひだりがわ</rt></ruby>の<ruby>支点<rt>してん</rt></ruby>Aには<ruby>向<rt>む</rt></ruby>きが<ruby>左<rt>ひだり</rt></ruby>の<ruby>水平反力<rt>すいへいはんりょく</rt></ruby>と<ruby>下向<rt>したむ</rt></ruby>きの<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>が、<ruby>右側<rt>みぎがわ</rt></ruby>の<ruby>支点<rt>してん</rt></ruby>Eには<ruby>上向<rt>うえむ</rt></ruby>きの<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる。このとき、<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံတွင်ပြထားသည့်အတိုင်း ဘောင်အဆောက်အဦ၏ ကြားတန်း (Beam) ပေါ်ရှိ B အမှတ်၌ အလျားလိုက်ဝန် (Horizontal Load) P သက်ရောက်သောအခါ၊ ဘယ်ဘက်ရှိ ထောက်ကန်အမှတ် (Support) A တွင် ဘယ်ဘက်သို့ဦးတည်သော အလျားလိုက်တန်ပြန်သက်ရောက်မှု (Horizontal Reaction) နှင့် အောက်သို့ဦးတည်သော ဒေါင်လိုက်တန်ပြန်သက်ရောက်မှု (Vertical Reaction) တို့ ဖြစ်ပေါ်လာမည်ဖြစ်ပြီး၊ ညာဘက်ရှိ ထောက်ကန်အမှတ် E တွင် အပေါ်သို့ဦးတည်သော ဒေါင်လိုက်တန်ပြန်သက်ရောက်မှု ဖြစ်ပေါ်လာသည်။ ဤအခြေအနေ၌၊ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံး (မှားယွင်းဆုံး) ဖော်ပြချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "<ruby>外力<rt>がいりょく</rt></ruby>Pと<ruby>水平反力<rt>すいへいはんりょく</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさは<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "ပြင်ပဝန် P နှင့် အလျားလိုက်တန်ပြန်သက်ရောက်မှု၏ ပမာဏတို့သည် တူညီသည်။" },
      { id: 2, textJP: "<ruby>鉛直反力<rt>えんちょくはんりょく</rt></ruby>とV2の<ruby>大<rt>おお</rt></ruby>きさは<ruby>等<rt>ひと</rt></ruby>しい。", textMY: "ဒေါင်လိုက်တန်ပြန်သက်ရောက်မှု (Vertical Reaction) V₁ နှင့် V₂ တို့၏ ပမာဏတို့သည် တူညီသည်။" },
      { id: 3, textJP: "<ruby>柱梁接合部<rt>ちゅうはりせつごうぶ</rt></ruby>D<ruby>点<rt>てん</rt></ruby>は、<ruby>荷重<rt>かじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>することによって<ruby>右方向<rt>みぎほうこう</rt></ruby>に<ruby>移動<rt>いどう</rt></ruby>する。", textMY: "တိုင်-ကြားတန်း ဆက်စပ်အစိတ်အပိုင်း (Beam-Column Joint) D အမှတ်သည် ဝန် P သက်ရောက်ခြင်းကြောင့် ညာဘက်သို့ ရွေ့လျားသည်။" },
      { id: 4, textJP: "<ruby>支点<rt>してん</rt></ruby>Eは、<ruby>荷重<rt>かじゅう</rt></ruby>Pが<ruby>作用<rt>さよう</rt></ruby>することによって<ruby>右方向<rt>みぎほうこう</rt></ruby>に<ruby>移動<rt>いどう</rt></ruby>する。", textMY: "ထောက်ကန်အမှတ် E သည် ဝန် P သက်ရောက်ခြင်းကြောင့် ညာဘက်သို့ ရွေ့လျားသည်။" },
      { id: 5, textJP: "<ruby>曲<rt>ま</rt></ruby>げモーメントが<ruby>最<rt>もっと</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きくなるのはC<ruby>点<rt>てん</rt></ruby>である。", textMY: "ကွေးညွှတ်အား (Bending Moment) အကြီးဆုံး ဖြစ်ပေါ်သည့်အမှတ်မှာ C အမှတ်ဖြစ်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "ဤမေးခွန်းအတွက် ရှင်းလင်းချက် မထည့်သွင်းရသေးပါ။",
      memoryTipMY: "ကျေးဇူးပြု၍ ကိုယ်တိုင်လေ့လာပါ။"
    }
  },
  {
    id: "2021-2",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のようなトラス<ruby>骨組<rt>ほねぐみ</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける<ruby>等分布荷重<rt>とうぶんぷかじゅう</rt></ruby>について、ア、イ、ウの<ruby>各部材<rt>かくぶざい</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じる<ruby>軸力<rt>じくリョク</rt></ruby>の<ruby>組合<rt>くみあ</rt></ruby>わせのうち、<ruby>正<rt>ただ</rt></ruby>しいものはどれか。",
    questionMY: "ပုံတွင်ပြထားသော Truss Frame (တြပ်ဘောင်) ပေါ်သို့ သက်ရောက်သည့် တပြေးညီပျံ့နှံ့ဝန် (Uniformly Distributed Load) နှင့်ပတ်သက်၍၊ အ, ဣ, ဥ ဟူသော အစိတ်အပိုင်းများတွင် ဖြစ်ပေါ်လာသည့် ဝန်ရိုးအား (Axial Force) များ၏ ပေါင်းစပ်မှုအနက် မှန်ကန်သည့်အရာမှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "ア：<ruby>圧縮<rt>あっしゅく</rt></ruby> イ：0 ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "အ: ဖိအား (Compression) ဣ: 0 ဥ: ဆွဲအား (Tension)" },
      { id: 2, textJP: "ア：<ruby>圧縮<rt>あっしゅく</rt></ruby> イ：0 ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "အ: ဖိအား (Compression) ဣ: 0 ဥ: ဆွဲအား (Tension)" },
      { id: 3, textJP: "ア：<ruby>引張<rt>ひっぱり</rt></ruby> イ：0 ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "အ: ဆွဲအား (Tension) ဣ: 0 ဥ: ဆွဲအား (Tension)" },
      { id: 4, textJP: "ア：<ruby>圧縮<rt>あっしゅく</rt></ruby> イ：<ruby>圧縮<rt>あっしゅく</rt></ruby> ウ：<ruby>引張<rt>ひっぱり</rt></ruby>", textMY: "အ: ဖိအား (Compression) ဣ: ဖိအား (Compression) ဥ: ဆွဲအား (Tension)" },
      { id: 5, textJP: "ア：<ruby>圧縮<rt>あっしゅく</rt></ruby> イ：<ruby>圧縮<rt>あっしゅく</rt></ruby> ウ：<ruby>圧縮<rt>あっしゅく</rt></ruby>", textMY: "အ: ဖိအား (Compression) ဣ: ဖိအား (Compression) ဥ: ဖိအား (Compression)" }
    ],
    correctOptionId: 1,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "ဤမေးခွန်းအတွက် ရှင်းလင်းချက် မထည့်သွင်းရသေးပါ။",
      memoryTipMY: "ကျေးဇူးပြု၍ ကိုယ်တိုင်လေ့လာပါ။"
    }
  },
  {
    id: "2021-3",
    questionJP: "<ruby>構造設計<rt>こうぞうせっけい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "တည်ဆောက်ပုံဆိုင်ရာ ဒီဇိုင်း (Structural Design) နှင့်ပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံး (မှားယွင်းဆုံး) ဖော်ပြချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "<ruby>鉄骨構造<rt>てっこつこうぞう</rt></ruby>では<ruby>建物<rt>たてもの</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>だけでなく、<ruby>日常<rt>にちじょう</rt></ruby><rt>的<rt>てき</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>荷重<rt>かじゅう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>変形<rt>へんけい</rt></ruby>について<ruby>考慮<rt>こうりょ</rt></ruby>することも<ruby>重要<rt>じゅうよう</rt></ruby>である。", textMY: "သံမဏိဘောင်အဆောက်အဦများတွင် အဆောက်အဦ၏ ခံနိုင်ရည်အပြင် နေ့စဉ်သက်ရောက်သော ဝန်များကြောင့် ဖြစ်ပေါ်သည့် ပုံပျက်ခြင်းကိုလည်း ထည့်သွင်းစဉ်းစားရန် အရေးကြီးသည်။" },
      { id: 2, textJP: "鋼材は高い靭性を有しているため、座屈や脆性破壊が生じなければ大地震時においても優れた耐震性能を発揮する。", textMY: "သံမဏိသည် မြင့်မားသော Toughness ရှိသောကြောင့် Buckling သို့မဟုတ် Fracture မဖြစ်ပါက ပြင်းထန်သော ငလျင်ဒဏ်တွင်ပင် ကောင်းမွန်သော ငလျင်ဒဏ်ခံနိုင်ရည် စွမ်းဆောင်ရည် ရှိသည်။" },
      { id: 3, textJP: "許容応力度設計法は、建物に作用する外力に対し、骨組全体が弾性範囲に留まることを目標とする。", textMY: "Allowable Stress Design Method သည် အဆောက်အအုံပေါ် သက်ရောက်သော ပြင်ပဝန်များအတွက် ဖွဲ့စည်းပုံတစ်ခုလုံး Elastic Range တွင် ရှိစေရန် ရည်ရွယ်သည်။" },
      { id: 4, textJP: "鉄骨造の建物は鉄筋コンクリート造の建物に比べて自重が大きくなるため、地震時の設計荷重も大きくなる。", textMY: "သံမဏိအဆောက်အဦများသည် RC အဆောက်အဦများနှင့် နှိုင်းယှဉ်လျှင် ကိုယ်အလေးချိန် ပိုများပြီး ငလျင်ဒီဇိုင်းဝန်လည်း ပိုများသည်။" },
      { id: 5, textJP: "溶接接合部の品質は構造全体の安全性に大きく影響するため、設計段階から溶接の施工性を考慮することが重要である。", textMY: "ဂဟေဆက်နေရာများ၏ အရည်အသွေးသည် တည်ဆောက်ပုံတစ်ခုလုံး၏ ဘေးကင်းလုံခြုံမှုအပေါ် ကြီးမားစွာ သက်ရောက်မှုရှိသောကြောင့် ဒီဇိုင်းအဆင့်မှစ၍ ဂဟေဆက်နိုင်စွမ်းကို ထည့်သွင်းစဉ်းစားရန် အရေးကြီးသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
      titleMY: "ရှင်းလင်းချက်",
      reasonMY: "ဤမေးခွန်းအတွက် ရှင်းလင်းချက် မထည့်သွင်းရသေးပါ။",
      memoryTipMY: "ကျေးဇူးပြု၍ ကိုယ်တိုင်လေ့လာပါ။"
    }
  },
  {
    id: "2021-22",
    questionJP: "<ruby>図<rt>ず</rt></ruby>のような<ruby>骨組<rt>ほねぐみ</rt></ruby>の<ruby>柱脚<rt>ちゅうきゃく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ပုံတွင်ပြထားသည့်အတိုင်း ဘောင်အဆောက်အဦ၏ တိုင်ခြေ (Column Base) နှင့်ပတ်သက်၍ အောက်ပါဖော်ပြချက်များအနက် မသင့်လျော်ဆုံး (မှားယွင်းဆုံး) ဖော်ပြချက်မှာ အဘယ်နည်း။",
    options: [
      { id: 1, textJP: "<ruby>露出形式<rt>ろしゅつけいしき</rt></ruby>の<ruby>柱脚<rt>ちゅうきゃく</rt></ruby>である。", textMY: "ဤသည်မှာ Exposed Type Column Base ဖြစ်သည်။" },
      { id: 2, textJP: "<ruby>柱<rt>はしら</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>軸力<rt>じくりょく</rt></ruby>と<ruby>曲<rt>ま</rt></ruby>げモーメントは、ベースプレートを<ruby>通<rt>とお</rt></ruby>して<ruby>基礎<rt>きそ</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>される。", textMY: "တိုင်ပေါ်သို့ သက်ရောက်သော ဝန်ရိုးအားနှင့် ကွေးညွှတ်အားတို့ကို Base Plate မှတဆင့် Foundation သို့ သယ်ဆောင်သည်။" },
      { id: 3, textJP: "<ruby>柱<rt>はしら</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>するせん<ruby>断力<rt>だんりょく</rt></ruby>は、アンカーボルトで<ruby>基礎<rt>きそ</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>される。", textMY: "တိုင်ပေါ်သို့ သက်ရောက်သော Shear Force ကို Anchor Bolt များမှတဆင့် Foundation သို့ သယ်ဆောင်သည်။" },
      { id: 4, textJP: "<ruby>柱<rt>はしら</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>引張力<rt>ひっぱりりょく</rt></ruby>は、アンカーボルトで<ruby>基礎<rt>きそ</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>される。", textMY: "တိုင်ပေါ်သို့ သက်ရောက်သော ဆွဲအားကို Anchor Bolt များမှတဆင့် Foundation သို့ သယ်ဆောင်သည်။" }
    ],
    correctOptionId: 1,
    explanation: {
        titleMY: "ရှင်းလင်းချက်",
        reasonMY: "ဤမေးခွန်းအတွက် ရှင်းလင်းချက် မထည့်သွင်းရသေးပါ။",
        memoryTipMY: "ကျေးဇူးပြု၍ ကိုယ်တိုင်လေ့လာပါ။"
    }
  }
];
