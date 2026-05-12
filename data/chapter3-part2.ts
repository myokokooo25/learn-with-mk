import { StudyCardData } from '../types';

export const chapter3Part2Data: StudyCardData[] = [
  {
    id: "3-16",
    questionJP: "<ruby>高力<rt>こうりょく</rt></ruby>ボルトの<ruby>保管<rt>ほかん</rt></ruby>と<ruby>管理<rt>かんり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength bolt များ၏ သိုလှောင်ထိန်းသိမ်းမှုနှင့် စီမံခန့်ခွဲမှုဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) ボルト、ナット、座金は、製造業者によって1セットとして<ruby>品質<rt>ひんしつ</rt></ruby><ruby>管理<rt>かんり</rt></ruby>されており、<ruby>異<rt>こと</rt></ruby>なるセットのものを<ruby>混用<rt>こんよう</rt></ruby>してはならない。", textMY: "Bolt၊ nut နှင့် washer တို့ကို ထုတ်လုပ်သူက set တစ်ခုအဖြစ် အရည်အသွေးထိန်းချုပ်ထားပြီး၊ မတူညီသော set မှ အစိတ်အပိုင်းများကို ရောနှောအသုံးမပြုရ။" },
        { id: 2, textJP: "(2) <ruby>製品<rt>せいひん</rt></ruby>は<ruby>雨露<rt>うろ</rt></ruby>のかからない<ruby>乾燥<rt>かんそう</rt></ruby>した<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>保管<rt>ほかん</rt></ruby>し、<ruby>梱包<rt>こんぽう</rt></ruby>は<ruby>使用<rt>しよう</rt></ruby>する<ruby>直前<rt>ちょくぜん</rt></ruby>まで<ruby>開封<rt>かいふう</rt></ruby>しない。", textMY: "ထုတ်ကုန်များကို မိုးနှင့်နှင်း မထိတွေ့သော ခြောက်သွေ့သည့်နေရာတွင် သိုလှောင်ပြီး၊ အသုံးမပြုမီအထိ ထုပ်ပိုးမှုကို မဖွင့်ရ။" },
        { id: 3, textJP: "(3) トルシア<ruby>形<rt>がた</rt></ruby><ruby>高力<rt>こうりょく</rt></ruby>ボルトのピンテール<ruby>部<rt>ぶ</rt></ruby>に<ruby>錆<rt>さび</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>した<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>締付<rt>しめつ</rt></ruby>け<ruby>性能<rt>せいのう</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>するため<ruby>使用<rt>しよう</rt></ruby>してはならない。", textMY: "Torshear bolt ၏ pintail အပိုင်းတွင် သံချေးတက်ပါက၊ တပ်ဆင်မှုစွမ်းဆောင်ရည်ကို ထိခိုက်စေသောကြောင့် အသုံးမပြုရ။" },
        { id: 4, textJP: "(4) <ruby>現場<rt>げんば</rt></ruby>での<ruby>保管<rt>ほかん</rt></ruby><ruby>期間<rt>きかん</rt></ruby>が<ruby>長<rt>なが</rt></ruby>くなる<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>定期的<rt>ていきてき</rt></ruby>に<ruby>製品<rt>せいひん</rt></ruby>の<ruby>状態<rt>じょうたい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "လုပ်ငန်းခွင်တွင် သိုလှောင်သည့်ကာလ ကြာမြင့်ပါက၊ ထုတ်ကုန်၏အခြေအနေကို ပုံမှန်စစ်ဆေးရမည်။" },
        { id: 5, textJP: "(5) <ruby>一度<rt>いちど</rt></ruby><ruby>使用<rt>しよう</rt></ruby>した<ruby>高力<rt>こうりょく</rt></ruby>ボルトは、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>再使用<rt>さいしよう</rt></ruby>してはならない。", textMY: "တစ်ကြိမ်အသုံးပြုပြီးသော high-strength bolt များကို အခြေခံအားဖြင့် ပြန်လည်အသုံးမပြုရ။" }
    ],
    correctOptionId: 3,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (3) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Pintail သည် bolt ကို တင်းကျပ်စေရန် အသုံးပြုပြီးနောက် ကျိုးပြတ်သွားသော အစိတ်အပိုင်းဖြစ်သည်။ ၎င်း၏အပေါ်ယံတွင် သံချေးအနည်းငယ်တက်ခြင်းသည် bolt ၏ torque-tension ဆက်စပ်မှုကို မထိခိုက်ပါ။ အဓိကအရေးကြီးသည်မှာ ဝက်အူရစ် (thread) နှင့် nut/washer ထိတွေ့မျက်နှာပြင်များ ဖြစ်သည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Pintail က ဆွဲဖြုတ်လိုက်မဲ့ အပိုင်းမို့ နည်းနည်း သံချေးတက်တာ ပြဿနာမရှိဘူး။"
    }
  },
  {
    id: "3-17",
    questionJP: "<ruby>高力<rt>こうりょく</rt></ruby>ボルトの<ruby>締付<rt>しめつ</rt></ruby>けに<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "High-strength bolt တပ်ဆင်ခြင်းနှင့်ပတ်သက်၍ အသင့်လျော်ဆုံးအချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>締付<rt>しめつ</rt></ruby>けは、<ruby>本締<rt>ほんじ</rt></ruby>め、<ruby>仮締<rt>かりじ</rt></ruby>め、<ruby>一次<rt>いちじ</rt></ruby><ruby>締<rt>じ</rt></ruby>めの<ruby>順<rt>じゅん</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>う。", textMY: "တပ်ဆင်ခြင်းကို final tightening, temporary tightening, pre-tightening 순서အတိုင်း ပြုလုပ်သည်။" },
        { id: 2, textJP: "(2) 1つのボルト<ruby>群<rt>ぐん</rt></ruby>において、<ruby>締付<rt>しめつ</rt></ruby>けは<ruby>外周<rt>がいしゅう</rt></ruby>から<ruby>中央<rt>ちゅうおう</rt></ruby>に<ruby>向<rt>む</rt></ruby>かって<ruby>行<rt>おこな</rt></ruby>う。", textMY: "Bolt group တစ်ခုတွင်၊ တပ်ဆင်ခြင်းကို အပြင်ဘက်မှ အလယ်သို့ ပြုလုပ်သည်။" },
        { id: 3, textJP: "(3) <ruby>本締<rt>ほんじ</rt></ruby>めは、<ruby>一次<rt>いちじ</rt></ruby><ruby>締<rt>じ</rt></ruby>め<ruby>完了後<rt>かんりょうご</rt></ruby>、24<ruby>時間<rt>じかん</rt></ruby><ruby>以内<rt>いない</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>わなければならない。", textMY: "Final tightening ကို pre-tightening ပြီးဆုံးပြီးနောက် ၂၄ နာရီအတွင်း ပြုလုပ်ရမည်။" },
        { id: 4, textJP: "(4) トルクコントロール<ruby>法<rt>ほう</rt></ruby>では、ナットの<ruby>回転<rt>かいてん</rt></ruby><ruby>量<rt>りょう</rt></ruby>で<ruby>軸力<rt>じくりょく</rt></ruby>を<ruby>管理<rt>かんり</rt></ruby>する。", textMY: "Torque control method တွင်၊ nut ၏ လည်ပတ်သည့်ပမာဏဖြင့် axial force ကို ထိန်းချုပ်သည်။" },
        { id: 5, textJP: "(5) <ruby>共回<rt>ともまわ</rt></ruby>りは、ナットとボルトが<ruby>同時<rt>どうじ</rt></ruby>に<ruby>回転<rt>かいてん</rt></ruby>する<ruby>現象<rt>げんしょう</rt></ruby>で、<ruby>品質<rt>ひんしつ</rt></ruby><ruby>上<rt>じょう</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>はない。", textMY: "Co-rotation (共回り) သည် nut နှင့် bolt အတူတူလည်ပတ်ခြင်းဖြစ်ပြီး၊ အရည်အသွေးအတွက် ပြဿနာမရှိပါ။" }
    ],
    correctOptionId: 3,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (3) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှန်ကန်ရခြင်း အကြောင်းရင်း: JASS 6 အရ၊ pre-tightening (一次締め) ပြီးနောက်တွင် final tightening (本締め) ကို ထိုနေ့တွင်ပင် (原則としてその日のうちに) ပြီးအောင်လုပ်ရမည်။ ၎င်းကို ၂၄ နာရီအတွင်းဟု အဓိပ္ပါယ်ဖွင့်ဆိုနိုင်သည်။ (1) 순서သည် 仮締め→一次締め→本締め ဖြစ်သည်။ (2) အလယ်မှ အပြင်သို့ (中央から外周へ) တပ်ဆင်ရမည်။ (4) Torque control method သည် torque တန်ဖိုးဖြင့် ထိန်းချုပ်သည်။ (5) 共回り သည် မှန်ကန်သော axial force မရရှိစေနိုင်သောကြောင့် ချို့ယွင်းချက်ဖြစ်သည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Bolt တပ်ဆင်ခြင်း၏ အဆင့်များ (一次締め -> 本締め) ကို တစ်နေ့တည်း/၂၄ နာရီအတွင်း ပြီးအောင်လုပ်ရမည်။"
    }
  },
  {
    id: "3-18",
    questionJP: "<ruby>建方<rt>たてかた</rt></ruby><ruby>精度<rt>せいど</rt></ruby>の<ruby>管理<rt>かんり</rt></ruby><ruby>許容差<rt>きょようさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Erection accuracy ၏ ခွင့်ပြုလွဲချော်မှု (Tolerance) နှင့်ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>柱<rt>はしら</rt></ruby>の<ruby>倒<rt>たお</rt></ruby>れの<ruby>許容差<rt>きょようさ</rt></ruby>は、<ruby>柱<rt>はしら</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さの 1/1,000 かつ 10mm <ruby>以下<rt>いか</rt></ruby>である。", textMY: "Column ၏ ဒေါင်လိုက်မှန်ကန်မှု (Plumbness) အတွက် ခွင့်ပြုလွဲချော်မှုသည် Column အမြင့်၏ 1/1,000 နှင့် 10mm အောက် ဖြစ်ရမည်။" },
        { id: 2, textJP: "(2) <ruby>柱<rt>はしら</rt></ruby>の<ruby>通<rt>とお</rt></ruby>り<ruby>心<rt>しん</rt></ruby>からの<ruby>変位<rt>へんい</rt></ruby>の<ruby>許容差<rt>きょようさ</rt></ruby>は 5mm <ruby>以下<rt>いか</rt></ruby>である。", textMY: "Column ၏ grid line မှ ရွေ့လျားမှုအတွက် ခွင့်ပြုလွဲချော်မှုသည် 5mm အောက် ဖြစ်ရမည်။" },
        { id: 3, textJP: "(3) <ruby>梁<rt>はり</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さの<ruby>許容差<rt>きょようさ</rt></ruby>は、±5mm である。", textMY: "Beam ၏ အမြင့်အတွက် ခွင့်ပြုလွဲချော်မှုသည် ±5mm ဖြစ်သည်။" },
        { id: 4, textJP: "(4) アンカーボルトの<ruby>位置<rt>いち</rt></ruby>の<ruby>許容差<rt>きょようさ</rt></ruby>は、<ruby>柱心<rt>ちゅうしん</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して ±5mm である。", textMY: "Anchor bolt ၏ တည်နေရာအတွက် ခွင့်ပြုလွဲချော်မှုသည် Column center line နှင့် နှိုင်းယှဉ်ပါက ±5mm ဖြစ်သည်။" },
        { id: 5, textJP: "(5) <ruby>建方<rt>たてかた</rt></ruby><ruby>精度<rt>せいど</rt></ruby>の<ruby>測定<rt>そくてい</rt></ruby>は、<ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>自重<rt>じじゅう</rt></ruby>による<ruby>変形<rt>へんけい</rt></ruby>が<ruby>安定<rt>あんてい</rt></ruby>した<ruby>後<rt>あと</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う。", textMY: "Erection accuracy ကို တိုင်းတာခြင်းသည် သံမဏိ၏ ကိုယ်အလေးချိန်ကြောင့်ဖြစ်သော ပုံပျက်ခြင်း တည်ငြိမ်သွားပြီးနောက် ပြုလုပ်ရမည်။" }
    ],
    correctOptionId: 3,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (3) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: JASS 6 အရ၊ တည်ဆောက်ပြီးနောက် Beam ၏ အမြင့် (Level) အတွက် ခွင့်ပြုလွဲချော်မှုသည် ±10mm ဖြစ်သည်။ ±5mm သည် ပိုမိုတင်းကြပ်သော စံနှုန်းဖြစ်ပြီး၊ ပုံမှန်အားဖြင့် မလိုအပ်ပါ။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Site erection မှာ Beam level tolerance = ±10mm."
    }
  },
   {
    id: "3-19",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>自動<rt>じどう</rt></ruby><ruby>化<rt>か</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Welding Automation နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>溶接<rt>ようせつ</rt></ruby>ロボットは、<ruby>品質<rt>ひんしつ</rt></ruby>の<ruby>安定化<rt>あんていか</rt></ruby>と<ruby>生産性<rt>せいさんせい</rt></ruby>の<ruby>向上<rt>こうじょう</rt></ruby>に<ruby>貢献<rt>こうけん</rt></ruby>する。", textMY: "Welding robot များသည် အရည်အသွေး တည်ငြိမ်မှုနှင့် ထုတ်လုပ်မှု စွမ်းဆောင်ရည် တိုးတက်မှုကို အထောက်အကူပြုသည်။" },
        { id: 2, textJP: "(2) サブマージアーク<ruby>溶接<rt>ようせつ</rt></ruby>は、<ruby>厚板<rt>あついた</rt></ruby>の<ruby>突合<rt>つきあわ</rt></ruby>せ<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>適<rt>てき</rt></ruby>した<ruby>高能率<rt>こうのうりつ</rt></ruby>な<ruby>自動<rt>じどう</rt></ruby><ruby>溶接<rt>ようせつ</rt></ruby><ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Submerged Arc Welding (SAW) သည် အထူကြီးသော plate များ၏ butt welding အတွက် သင့်လျော်သော စွမ်းဆောင်ရည်မြင့် automatic welding နည်းလမ်းဖြစ်သည်။" },
        { id: 3, textJP: "(3) <ruby>自動<rt>じどう</rt></ruby><ruby>溶接<rt>ようせつ</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>すれば、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>技能者<rt>ぎのうしゃ</rt></ruby>の<ruby>資格<rt>しかく</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>となる。", textMY: "Automatic welding ကို အသုံးပြုပါက welder ၏ အရည်အချင်း (qualification) မလိုအပ်တော့ပါ။" },
        { id: 4, textJP: "(4) <ruby>溶接<rt>ようせつ</rt></ruby>ロボットのプログラミング(ティーチング)は、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>左右<rt>さゆう</rt></ruby>する<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>作業<rt>さぎょう</rt></ruby>である。", textMY: "Welding robot ၏ programming (teaching) သည် ဂဟေအရည်အသွေးကို ဆုံးဖြတ်ပေးသည့် အရေးကြီးသော လုပ်ငန်းစဉ်ဖြစ်သည်။" },
        { id: 5, textJP: "(5) エレクトロスラグ<ruby>溶接<rt>ようせつ</rt></ruby>は、ボックス<ruby>柱<rt>ばしら</rt></ruby>の<ruby>ダイアフラム<ruby>溶接<rt>ようせつ</rt></ruby>などに<ruby>用<rt>もち</rt></ruby>いられる<ruby>立向<rt>たてむ</rt></ruby>き<ruby>自動<rt>じどう</rt></ruby><ruby>溶接<rt>ようせつ</rt></ruby>である。", textMY: "Electroslag welding သည် box column ၏ diaphragm welding ကဲ့သို့သော vertical automatic welding တွင် အသုံးပြုသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (3) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Automatic welding သို့မဟုတ် robot welding ကို အသုံးပြုသည့်အခါတွင်ပင်၊ စက်ကို ထိန်းချုပ်ရန်၊ setting များကို ချိန်ညှိရန်၊ နှင့် အရည်အသွေးကို စစ်ဆေးရန်အတွက် အရည်အချင်းပြည့်မီသော welding operator သို့မဟုတ် နည်းပညာရှင် လိုအပ်သည်။ လုံးဝ အရည်အချင်းမလိုအပ်ဟု ဆိုခြင်းသည် မှားယွင်းသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: စက် (Robot) သုံးရင်တောင်၊ စက်ကို ထိန်းတဲ့လူ (Operator) က အရည်အချင်းရှိရမယ်။"
    }
  },
  {
    id: "3-20",
    questionJP: "<ruby>鉄骨<rt>てっこつ</rt></ruby><ruby>工事<rt>こうじ</rt></ruby>における<ruby>検査<rt>けんさ</rt></ruby>と<ruby>試験<rt>しけん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ရေးလုပ်ငန်းရှိ စစ်ဆေးခြင်း (Inspection) နှင့် စမ်းသပ်ခြင်း (Testing) ဆိုင်ရာ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>受入<rt>うけいれ</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>では、<ruby>納入<rt>のうにゅう</rt></ruby>された<ruby>材料<rt>ざいりょう</rt></ruby>が<ruby>発注<rt>はっちゅう</rt></ruby><ruby>仕様<rt>しよう</rt></ruby>と<ruby>一致<rt>いっち</rt></ruby>しているか、ミルシートと<ruby>照合<rt>しょうごう</rt></ruby>して<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "Receiving inspection တွင်၊ ရောက်ရှိလာသော ပစ္စည်းများသည် မှာကြားထားသည့် specification နှင့် ကိုက်ညီမှုရှိမရှိကို mill sheet ဖြင့် တိုက်ဆိုင်စစ်ဆေးရမည်။" },
        { id: 2, textJP: "(2) <ruby>製品<rt>せいひん</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>は、<ruby>鉄骨<rt>てっこつ</rt></ruby><ruby>製作<rt>せいさく</rt></ruby><ruby>工場<rt>こうじょう</rt></ruby>から<ruby>製品<rt>せいひん</rt></ruby>を<ruby>出荷<rt>しゅっか</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う<ruby>最終<rt>さいしゅう</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>である。", textMY: "Product inspection သည် သံမဏိထုတ်လုပ်ရေးစက်ရုံမှ ထုတ်ကုန်များကို မတင်ပို့မီ ပြုလုပ်သော နောက်ဆုံးစစ်ဆေးမှုဖြစ်သည်။" },
        { id: 3, textJP: "(3) <ruby>非破壊<rt>ひはかい</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>は、<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>するために<ruby>行<rt>おこな</rt></ruby>われ、<ruby>抜取<rt>ぬきとり</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>が<ruby>原則<rt>げんそく</rt></ruby>である。", textMY: "NDT သည် ဂဟေအရည်အသွေးကို အတည်ပြုရန် ပြုလုပ်ပြီး၊ sampling inspection ကို အခြေခံမူအဖြစ် ပြုလုပ်သည်။" },
        { id: 4, textJP: "(4) <ruby>高力<rt>こうりょく</rt></ruby>ボルトの<ruby>軸力<rt>じくりょく</rt></ruby><ruby>試験<rt>しけん</rt></ruby>は、<ruby>現場<rt>げんば</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>するロットごとに<ruby>行<rt>おこな</rt></ruby>い、<ruby>締付<rt>しめつ</rt></ruby>け<ruby>機械<rt>きかい</rt></ruby>の<ruby>性能<rt>せいのう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する。", textMY: "High-strength bolt ၏ axial force test ကို လုပ်ငန်းခွင်တွင် အသုံးပြုမည့် lot တိုင်းအတွက် ပြုလုပ်ပြီး၊ တပ်ဆင်သည့်စက်၏ စွမ်းဆောင်ရည်ကို အတည်ပြုရမည်။" },
        { id: 5, textJP: "(5) <ruby>柱<rt>はしら</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby><ruby>継手<rt>つぎて</rt></ruby>の<ruby>超音波<rt>ちょうおんぱ</rt></ruby><ruby>探傷<rt>たんしょう</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>は、<ruby>全数<rt>ぜんすう</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>とする<ruby>必要<rt>ひつよう</rt></ruby>はない。", textMY: "Column ၏ welding joint များအတွက် Ultrasonic Testing ကို 100% စစ်ဆေးရန် မလိုအပ်ပါ။" }
    ],
    correctOptionId: 5,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (5) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Column ၏ welding joint များသည် အဆောက်အဦ၏ တည်ငြိမ်မှုအတွက် အလွန်အရေးကြီးသော အစိတ်အပိုင်းများဖြစ်သည်။ ထို့ကြောင့် ဤနေရာများရှိ butt weld များအတွက် NDT (UT အပါအဝင်) ကို 100% (全数検査) ပြုလုပ်ရမည်ဟု JASS 6 တွင် သတ်မှတ်ထားသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Column splice weld = အလွန်အရေးကြီး (Very Important) = 100% Inspection."
    }
  },
  {
    id: "3-21",
    questionJP: "<ruby>鉄骨<rt>てっこつ</rt></ruby><ruby>製作<rt>せいさく</rt></ruby>における<ruby>マーキング<rt>まーきんぐ</rt></ruby>（<ruby>けがき<rt>けがき</rt></ruby>）に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိထုတ်လုပ်ခြင်းတွင် Marking (けがき) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) けがきは、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>切断<rt>せつだん</rt></ruby>、<ruby>孔<rt>あな</rt></ruby>あけ、<ruby>組立<rt>くみたて</rt></ruby>の<ruby>基準<rt>きじゅん</rt></ruby>となる<ruby>線<rt>せん</rt></ruby>や<ruby>印<rt>しるし</rt></ruby>を<ruby>付<rt>つ</rt></ruby>ける<ruby>作業<rt>さぎょう</rt></ruby>である。", textMY: "Marking (けがき) သည် သံမဏိကို ဖြတ်တောက်ရန်၊ အပေါက်ဖောက်ရန်၊ နှင့် တပ်ဆင်ရန်အတွက် အခြေခံမျဉ်းများနှင့် အမှတ်အသားများ ပြုလုပ်သည့် လုပ်ငန်းစဉ်ဖြစ်သည်။" },
        { id: 2, textJP: "(2) けがきに<ruby>用<rt>もち</rt></ruby>いる<ruby>工具<rt>こうぐ</rt></ruby>には、ポンチや<ruby>刻印<rt>こくいん</rt></ruby>があるが、<ruby>鋼材<rt>こうざい</rt></ruby><ruby>表面<rt>ひょうめん</rt></ruby>に<ruby>傷<rt>きず</rt></ruby>をつけないように<ruby>注意<rt>ちゅうい</rt></ruby>する。", textMY: "Marking အတွက် အသုံးပြုသည့် ကိရိယာများတွင် punch နှင့် stamp တို့ပါဝင်ပြီး၊ သံမဏိမျက်နှာပြင်ကို မထိခိုက်စေရန် သတိပြုရမည်။" },
        { id: 3, textJP: "(3) <ruby>主要<rt>しゅよう</rt></ruby>な<ruby>構造<rt>こうぞう</rt></ruby><ruby>部材<rt>ぶざい</rt></ruby>においては、<ruby>応力<rt>おうりょく</rt></ruby>の<ruby>集中<rt>しゅうちゅう</rt></ruby>を<ruby>避<rt>さ</rt></ruby>けるため、<ruby>切欠<rt>きりかき</rt></ruby>きとなるような<ruby>深<rt>ふか</rt></ruby>いポンチ<ruby>傷<rt>きず</rt></ruby>は<ruby>許容<rt>きょよう</rt></ruby>されない。", textMY: "အဓိက structural member များတွင်၊ stress concentration ကို ရှောင်ရှားရန်အတွက် notch ဖြစ်စေနိုင်သော နက်ရှိုင်းသည့် punch mark များကို ခွင့်မပြုပါ။" },
        { id: 4, textJP: "(4) <ruby>自動化<rt>じどうか</rt></ruby>された<ruby>機械<rt>きかい</rt></ruby>では、インクジェットやレーザーによるマーキングが<ruby>行<rt>おこな</rt></ruby>われる。", textMY: "Automated machinery များတွင်၊ inkjet သို့မဟုတ် laser ဖြင့် marking ပြုလုပ်သည်။" },
        { id: 5, textJP: "(5) <ruby>現場<rt>げんば</rt></ruby>での<ruby>組立<rt>くみたて</rt></ruby><ruby>後<rt>ご</rt></ruby>に<ruby>見<rt>み</rt></ruby>えなくなる<ruby>部分<rt>ぶぶん</rt></ruby>のけがき<ruby>線<rt>せん</rt></ruby>は、<ruby>消去<rt>しょうきょ</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "လုပ်ငန်းခွင်တွင် တပ်ဆင်ပြီးနောက် မမြင်ရတော့မည့် marking line များကို ဖျက်ပစ်ရန် လိုအပ်သည်။" }
    ],
    correctOptionId: 5,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (5) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Marking line များသည် တပ်ဆင်မှုနှင့် စစ်ဆေးမှုများအတွက် အရေးကြီးသော အညွှန်းများဖြစ်သည်။ တပ်ဆင်ပြီးနောက် မမြင်ရတော့더라도၊ ၎င်းတို့ကို ဖျက်ပစ်ရန် မလိုအပ်ပါ။ ၎င်းတို့ကို ချန်ထားခြင်းသည် နောက်ပိုင်းတွင် စစ်ဆေးမှုများပြုလုပ်ရန် (လိုအပ်ပါက) အထောက်အကူပြုနိုင်သည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Marking line တွေက အရေးကြီးတယ်။ ဖျက်စရာမလိုဘူး။"
    }
  },
  {
    id: "3-22",
    questionJP: "<ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>ガス<rt>がす</rt></ruby><ruby>切断<rt>せつだん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Gas cutting နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) ガス<ruby>切断<rt>せつだん</rt></ruby>は、<ruby>鋼材<rt>こうざい</rt></ruby>を<ruby>高温<rt>こうおん</rt></ruby>に<ruby>加熱<rt>かねつ</rt></ruby>し、<ruby>高圧<rt>こうあつ</rt></ruby>の<ruby>酸素<rt>さんそ</rt></ruby>を<ruby>吹<rt>ふ</rt></ruby>きつけて<ruby>酸化<rt>さんか</rt></ruby>させ、<ruby>溶融<rt>ようゆう</rt></ruby>した<ruby>酸化<rt>さんか</rt></ruby><ruby>鉄<rt>てつ</rt></ruby>を<ruby>吹<rt>ふ</rt></ruby>き<ruby>飛<rt>と</rt></ruby>ばして<ruby>切断<rt>せつだん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>である。", textMY: "Gas cutting သည် သံမဏိကို အပူချိန်မြင့်အောင် အပူပေးပြီး၊ high-pressure oxygen ဖြင့် မှုတ်ထုတ်၍ oxidize ဖြစ်စေကာ၊ အရည်ပျော်နေသော iron oxide ကို မှုတ်ထုတ်ဖယ်ရှားခြင်းဖြင့် ဖြတ်တောက်သောနည်းလမ်းဖြစ်သည်။" },
        { id: 2, textJP: "(2) <ruby>切断<rt>せつだん</rt></ruby><ruby>面<rt>めん</rt></ruby>の<ruby>粗<rt>あら</rt></ruby>さは、<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>に<ruby>影響<rt>えいきょう</rt></ruby>するため、<ruby>規定<rt>きてい</rt></ruby>の<ruby>許容値<rt>きょようち</rt></ruby><ruby>内<rt>ない</rt></ruby>に<ruby>収<rt>おさ</rt></ruby>める<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "ဖြတ်တောက်ထားသော မျက်နှာပြင်၏ ကြမ်းတမ်းမှုသည် ဂဟေအရည်အသွေးကို ထိခိုက်စေနိုင်သောကြောင့်၊ သတ်မှတ်ထားသော ခွင့်ပြုတန်ဖိုးအတွင်း ရှိရမည်။" },
        { id: 3, textJP: "(3) <ruby>切断<rt>せつだん</rt></ruby>による<ruby>熱<rt>ねつ</rt></ruby><ruby>影響<rt>えいきょう</rt></ruby>で<ruby>硬化<rt>こうか</rt></ruby>する<ruby>恐<rt>おそ</rt></ruby>れのある<ruby>鋼材<rt>こうざい</rt></ruby>は、<ruby>予熱<rt>よねつ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>って<ruby>切断<rt>せつだん</rt></ruby>することがある。", textMY: "ဖြတ်တောက်မှုကြောင့်ဖြစ်သော အပူကြောင့် မာကျောသွားနိုင်ခြေရှိသော သံမဏိများကို၊ preheating ပြုလုပ်ပြီးမှ ဖြတ်တောက်ရသည့် အခါများရှိသည်။" },
        { id: 4, textJP: "(4) ガス<ruby>切断<rt>せつだん</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>自由<rt>じゆう</rt></ruby><ruby>縁<rt>えん</rt></ruby>となる<ruby>切断<rt>せつだん</rt></ruby><ruby>面<rt>めん</rt></ruby>は、グラインダー<ruby>仕上<rt>しあ</rt></ruby>げを<ruby>行<rt>おこな</rt></ruby>う<ruby>必要<rt>ひつよう</rt></ruby>はない。", textMY: "Gas cutting ပြီးနောက် free edge ဖြစ်လာမည့် ဖြတ်တောက်ထားသော မျက်နှာပြင်များကို grinder ဖြင့် ချောမွေ့အောင် ပြုလုပ်ရန် မလိုအပ်ပါ။" },
        { id: 5, textJP: "(5) ノッチは<ruby>応力<rt>おうりょく</rt></ruby><ruby>集中<rt>しゅうちゅう</rt></ruby>の<ruby>原因<rt>げんいん</rt></ruby>となるため、<ruby>切断<rt>せつだん</rt></ruby><ruby>面<rt>めん</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じたノッチは<ruby>滑<rt>なめ</rt></ruby>らかに<ruby>除去<rt>じょきょ</rt></ruby>しなければならない。", textMY: "Notch သည် stress concentration ကို ဖြစ်စေသောကြောင့်၊ ဖြတ်တောက်ထားသော မျက်နှာပြင်ပေါ်တွင် ဖြစ်ပေါ်လာသော notch များကို ချောမွေ့အောင် ဖယ်ရှားရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (4) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Gas cutting မျက်နှာပြင်သည် ကြမ်းတမ်းပြီး၊ အပူကြောင့် မာကျောနေသော အလွှာ (Hardened layer) ရှိနေနိုင်သည်။ Free edge (ဥပမာ- beam ၏ flange အစွန်း) ဖြစ်လာမည့် နေရာများတွင်၊ အက်ကွဲကြောင်း (crack) စတင်နိုင်ခြေကို လျှော့ချရန်အတွက် grinder ဖြင့် ချောမွေ့အောင် ပြုလုပ်ရန် လိုအပ်သည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: ဖြတ်ထားတဲ့ အစွန်း (Free edge) က အက်ကွဲနိုင်ခြေများလို့ ချောမွေ့အောင် (Grinder) လုပ်ရမယ်။"
    }
  },
   {
    id: "3-23",
    questionJP: "<ruby>孔<rt>あな</rt></ruby>あけ<ruby>加工<rt>かこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "အပေါက်ဖောက်ခြင်း (Hole drilling) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>用<rt>よう</rt></ruby>の<ruby>孔<rt>あな</rt></ruby>は、ドリルあけを<ruby>原則<rt>げんそく</rt></ruby>とする。", textMY: "High-strength bolt အတွက် အပေါက်များကို drilling ဖြင့် ဖောက်ခြင်းကို အခြေခံမူအဖြစ် သတ်မှတ်သည်။" },
        { id: 2, textJP: "(2) せん断<ruby>孔<rt>あな</rt></ruby>あけは、<ruby>板<rt>いた</rt></ruby><ruby>厚<rt>あつ</rt></ruby>が13mm<ruby>以下<rt>いか</rt></ruby>の<ruby>二次<rt>にじ</rt></ruby><ruby>部材<rt>ぶざい</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>り<ruby>適用<rt>てきよう</rt></ruby>できる。", textMY: "Shear punching ဖြင့် အပေါက်ဖောက်ခြင်းကို အထူ 13mm သို့မဟုတ် ထို့ထက်နည်းသော secondary member များအတွက်သာ အသုံးပြုနိုင်သည်။" },
        { id: 3, textJP: "(3) <ruby>孔<rt>あな</rt></ruby>の<ruby>縁<rt>ふち</rt></ruby>に<ruby>生<rt>しょう</rt></ruby>じた「かえり」(<ruby>バリ<rt>ばり</rt></ruby>)は、<ruby>除去<rt>じょきょ</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "အပေါက်၏ အနားစောင်းတွင် ဖြစ်ပေါ်လာသော burr (かえり) များကို ဖယ်ရှားရန် လိုအပ်သည်။" },
        { id: 4, textJP: "(4) <ruby>組立<rt>くみたて</rt></ruby><ruby>時<rt>じ</rt></ruby>に<ruby>孔<rt>あな</rt></ruby><ruby>位置<rt>いち</rt></ruby>がずれた<ruby>場合<rt>ばあい</rt></ruby>は、ガス<ruby>切断<rt>せつだん</rt></ruby>で<ruby>孔<rt>あな</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げて<ruby>修正<rt>しゅうせい</rt></ruby>してよい。", textMY: "တပ်ဆင်သည့်အခါ အပေါက်နေရာ လွဲချော်ပါက၊ gas cutting ဖြင့် အပေါက်ကို ချဲ့၍ ပြင်ဆင်နိုင်သည်။" },
        { id: 5, textJP: "(5) <ruby>孔径<rt>こうけい</rt></ruby>の<ruby>許容差<rt>きょようさ</rt></ruby>は、<ruby>孔<rt>あな</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>（ボルト<ruby>用<rt>よう</rt></ruby>、リベット<ruby>用<rt>よう</rt></ruby>など）によって<ruby>異<rt>こと</rt></ruby>なる。", textMY: "အပေါက်အချင်း၏ ခွင့်ပြုလွဲချော်မှုသည် အပေါက်အမျိုးအစား (bolt hole, rivet hole etc.) အလိုက် ကွဲပြားသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (4) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: အပေါက်နေရာလွဲချော်ပါက gas cutting ဖြင့် ချဲ့ခြင်းကို လုံးဝခွင့်မပြုပါ။ ၎င်းသည် အပေါက်၏ ပုံသဏ္ဍာန်ကို ပျက်စီးစေပြီး၊ အပူကြောင့် မျက်နှာပြင်ကို မာကျောစေကာ၊ stress concentration ဖြစ်စေနိုင်သည်။ ပြင်ဆင်ရန်အတွက် reamer ဖြင့် ချဲ့ခြင်းကဲ့သို့သော စက်မှုနည်းလမ်းများကိုသာ အသုံးပြုရမည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: အပေါက်လွဲရင် မီးနဲ့မချဲ့ရဘူး (No gas cutting for hole correction)။ Reamer သုံးရမယ်။"
    }
  },
  {
    id: "3-24",
    questionJP: "<ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>曲<rt>ま</rt></ruby>げ<ruby>加工<rt>かこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိ ကွေးခြင်း (Bending) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>冷間<rt>れいかん</rt></ruby><ruby>曲<rt>ま</rt></ruby>げ<ruby>加工<rt>かこう</rt></ruby>は、<ruby>常温<rt>じょうおん</rt></ruby>でプレスやローラーを<ruby>用<rt>もち</rt></ruby>いて<ruby>行<rt>おこな</rt></ruby>う。", textMY: "Cold bending ကို အခန်းအပူချိန်တွင် press သို့မဟုတ် roller များ အသုံးပြု၍ ပြုလုပ်သည်။" },
        { id: 2, textJP: "(2) <ruby>熱間<rt>ねっかん</rt></ruby><ruby>曲<rt>ま</rt></ruby>げ<ruby>加工<rt>かこう</rt></ruby>は、<ruby>鋼材<rt>こうざい</rt></ruby>を<ruby>加熱<rt>かねつ</rt></ruby>して<ruby>行<rt>おこな</rt></ruby>うため、<ruby>加工<rt>かこう</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>材質<rt>ざいしつ</rt></ruby><ruby>変化<rt>へんか</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "Hot bending ကို သံမဏိကို အပူပေး၍ ပြုလုပ်သောကြောင့်၊ ပြုလုပ်ပြီးနောက် ပစ္စည်း၏ ဂုဏ်သတ္တိပြောင်းလဲမှုကို သတိပြုရန် လိုအပ်သည်။" },
        { id: 3, textJP: "(3) <ruby>曲<rt>ま</rt></ruby>げ<ruby>加工<rt>かこう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うと、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>伸<rt>の</rt></ruby>び<ruby>能力<rt>のうりょく</rt></ruby>が<ruby>低下<rt>ていか</rt></ruby>することがある。", textMY: "Bending ပြုလုပ်ခြင်းသည် သံမဏိ၏ elongation capacity ကို ကျဆင်းစေနိုင်သည်။" },
        { id: 4, textJP: "(4) <ruby>曲<rt>ま</rt></ruby>げ<ruby>加工部<rt>かこうぶ</rt></ruby>の<ruby>内側<rt>うちがわ</rt></ruby><ruby>半径<rt>はんけい</rt></ruby>は、<ruby>板<rt>いた</rt></ruby><ruby>厚<rt>あつ</rt></ruby>の2<ruby>倍<rt>ばい</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>とすることが<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: "ကွေးထားသော အစိတ်အပိုင်း၏ အတွင်းဘက် radius သည် plate အထူ၏ ၂ ဆ သို့မဟုတ် ထို့ထက်ပို بودن 것이 바람직하다." },
        { id: 5, textJP: "(5) <ruby>青熱<rt>せいねつ</rt></ruby>ぜい<ruby>性<rt>せい</rt></ruby><ruby>域<rt>いき</rt></ruby>(200～400℃)での<ruby>熱間<rt>ねっかん</rt></ruby><ruby>曲<rt>ま</rt></ruby>げ<ruby>加工<rt>かこう</rt></ruby>は、<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>靭性<rt>じんせい</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させるため<ruby>推奨<rt>すいしょう</rt></ruby>される。", textMY: "Blue brittleness range (200-400°C) တွင် hot bending ပြုလုပ်ခြင်းသည် သံမဏိ၏ toughness ကို တိုးတက်စေသောကြောင့် အကြံပြုသည်။" }
    ],
    correctOptionId: 5,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (5) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Blue brittleness range (青熱ぜい性域) သည် သံမဏိ၏ toughness အလွန်ကျဆင်းပြီး ကြွပ်ဆတ် (brittle) ဖြစ်သွားသော အပူချိန်အပိုင်းအခြားဖြစ်သည်။ ဤအပူချိန်တွင် bending ကဲ့သို့သော plastic deformation ပြုလုပ်ပါက အက်ကွဲကြောင်းများ ဖြစ်ပေါ်နိုင်သောကြောင့် တင်းကြပ်စွာ တားမြစ်ထားသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Blue Brittleness (青熱ぜい性) = ကြွပ်ဆတ် (Brittle) = Bending မလုပ်ရ။"
    }
  },
    {
    id: "3-25",
    questionJP: "<ruby>鉄骨<rt>てっこつ</rt></ruby><ruby>製品<rt>せいひん</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>監理者<rt>かんりしゃ</rt></ruby>が<ruby>立会<rt>たちあ</rt></ruby>いを<ruby>行<rt>おこな</rt></ruby>うことが<ruby>最<rt>もっと</rt></ruby>も<ruby>重要<rt>じゅうよう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိထုတ်ကုန်စစ်ဆေးခြင်းနှင့်ပတ်သက်၍ ကြီးကြပ်သူ (Supervisor) တက်ရောက်စစ်ဆေးရန် အရေးကြီးဆုံးအချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>受入<rt>うけいれ</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>", textMY: "ပစ္စည်းလက်ခံစစ်ဆေးခြင်း (Material receiving inspection)" },
        { id: 2, textJP: "(2) けがき<ruby>作業<rt>さぎょう</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>", textMY: "Marking လုပ်ငန်းစဉ်စစ်ဆေးခြင်း" },
        { id: 3, textJP: "(3) <ruby>組立<rt>くみたて</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>仮<rt>かり</rt></ruby><ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>", textMY: "တပ်ဆင်ပြီးနောက် tack weld စစ်ဆေးခြင်း" },
        { id: 4, textJP: "(4) <ruby>寸法<rt>すんぽう</rt></ruby>・<ruby>外観<rt>がいかん</rt></ruby>の<ruby>最終<rt>さいしゅう</rt></ruby><ruby>製品<rt>せいひん</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>", textMY: "အတိုင်းအတာနှင့် အမြင်ပိုင်းဆိုင်ရာ နောက်ဆုံးထုတ်ကုန်စစ်ဆေးခြင်း" },
        { id: 5, textJP: "(5) <ruby>塗装<rt>とそう</rt></ruby><ruby>前<rt>まえ</rt></ruby>の<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>", textMY: "ဆေးမသုတ်မီ မျက်နှာပြင်ပြင်ဆင်မှု စစ်ဆေးခြင်း" }
    ],
    correctOptionId: 4,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (4) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှန်ကန်ရခြင်း အကြောင်းရင်း: ကြီးကြပ်သူ၏ အဓိကတာဝန်မှာ ထုတ်ကုန်သည် ဒီဇိုင်းပုံစံနှင့် သတ်မှတ်ချက်များနှင့် ကိုက်ညီမှုရှိမရှိကို နောက်ဆုံးအတည်ပြုရန်ဖြစ်သည်။ ထို့ကြောင့်၊ စက်ရုံမှ မတင်ပို့မီပြုလုပ်သော နောက်ဆုံးအတိုင်းအတာနှင့် အမြင်ပိုင်းဆိုင်ရာ စစ်ဆေးခြင်း (最終製品検査) သည် ကြီးကြပ်သူ တက်ရောက်ရန် အရေးကြီးဆုံးဖြစ်သည်။ အခြားအဆင့်များသည် ထုတ်လုပ်သူ၏ ကိုယ်ပိုင်စစ်ဆေးမှုများ (自主検査) ဖြစ်သော်လည်း၊ နောက်ဆုံးစစ်ဆေးမှုသည် ပေးပို့မည့်ထုတ်ကုန်၏ အရည်အသွေးကို အတည်ပြုခြင်းဖြစ်သည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: ကြီးကြပ်သူ (Supervisor) က Final check လုပ်ရမယ်။"
    }
  },
   {
    id: "3-26",
    questionJP: "<ruby>鉄骨<rt>てっこつ</rt></ruby><ruby>工事<rt>こうじ</rt></ruby>の<ruby>錆止<rt>さびど</rt></ruby>め<ruby>塗装<rt>とそう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "သံမဏိတည်ဆောက်ရေးလုပ်ငန်းတွင် သံချေးကာဆေးသုတ်ခြင်း (Anti-rust painting) နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>塗装<rt>とそう</rt></ruby>に<ruby>先立<rt>さきだ</rt></ruby>ち、<ruby>鋼材<rt>こうざい</rt></ruby><ruby>表面<rt>ひょうめん</rt></ruby>の<ruby>黒皮<rt>くろかわ</rt></ruby>、<ruby>錆<rt>さび</rt></ruby>、<ruby>油<rt>あぶら</rt></ruby>などを<ruby>除去<rt>じょきょ</rt></ruby>する<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "ဆေးမသုတ်မီ၊ သံမဏိမျက်နှာပြင်ပေါ်ရှိ mill scale၊ သံချေး၊ ဆီ စသည်တို့ကို ဖယ်ရှားသည့် မျက်နှာပြင်ပြင်ဆင်မှု (素地調整) ပြုလုပ်ရမည်။" },
        { id: 2, textJP: "(2) <ruby>高力<rt>こうりょく</rt></ruby>ボルト<ruby>摩擦<rt>まさつ</rt></ruby><ruby>接合部<rt>せつごうぶ</rt></ruby>の<ruby>摩擦面<rt>まさつめん</rt></ruby>には、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>錆止<rt>さびど</rt></ruby>め<ruby>塗装<rt>とそう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>わない。", textMY: "High-strength bolt friction joint ၏ ပွတ်တိုက်မျက်နှာပြင်ပေါ်တွင် အခြေခံအားဖြင့် သံချေးကာဆေး မသုတ်ရ။" },
        { id: 3, textJP: "(3) コンクリートに<ruby>密着<rt>みっちゃく</rt></ruby>する<ruby>部分<rt>ぶぶん</rt></ruby>や<ruby>埋<rt>う</rt></ruby>め<ruby>込<rt>こ</rt></ruby>まれる<ruby>部分<rt>ぶぶん</rt></ruby>には、<ruby>錆止<rt>さびど</rt></ruby>め<ruby>塗装<rt>とそう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "ကွန်ကရစ်နှင့် ထိတွေ့မည့် သို့မဟုတ် ကွန်ကရစ်ထဲတွင် မြှုပ်နှံမည့် အစိတ်အပိုင်းများတွင် သံချေးကာဆေး သုတ်ရမည်။" },
        { id: 4, textJP: "(4) <ruby>現場<rt>げんば</rt></ruby><ruby>溶接<rt>ようせつ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>部分<rt>ぶぶん</rt></ruby>およびその<ruby>周辺<rt>しゅうへん</rt></ruby>100mmの<ruby>範囲<rt>はんい</rt></ruby>は、<ruby>錆止<rt>さびど</rt></ruby>め<ruby>塗装<rt>とそう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>わない。", textMY: "လုပ်ငန်းခွင်တွင် ဂဟေဆက်မည့်နေရာနှင့် ၎င်း၏ပတ်လည် 100mm အကွာအဝေးအတွင်း သံချေးကာဆေး မသုတ်ရ။" },
        { id: 5, textJP: "(5) <ruby>塗装<rt>とそう</rt></ruby><ruby>作業<rt>さぎょう</rt></ruby>は、<ruby>気温<rt>きおん</rt></ruby>5℃<ruby>以上<rt>いじょう</rt></ruby>、<ruby>湿度<rt>しつど</rt></ruby>85%<ruby>以下<rt>いか</rt></ruby>の<ruby>環境<rt>かんきょう</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>うことが<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: "ဆေးသုတ်ခြင်းလုပ်ငန်းကို အပူချိန် 5°C နှင့်အထက်၊ စိုထိုင်းဆ 85% နှင့်အောက် ပတ်ဝန်းကျင်တွင် ပြုလုပ်ရန် အကြံပြုသည်။" }
    ],
    correctOptionId: 3,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (3) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: ကွန်ကရစ်နှင့် ထိတွေ့မည့် သံမဏိမျက်နှာပြင်များတွင် သံချေးကာဆေးသုတ်ပါက သံမဏိနှင့် ကွန်ကရစ်ကြားရှိ ပေါင်းစပ်မှု (Bond) ကို အားနည်းစေနိုင်သည်။ ထို့ကြောင့်၊ ဤနေရာများတွင် အခြေခံအားဖြင့် ဆေးမသုတ်ရပါ။ (コンクリートに密着する部分・埋め込まれる部分は塗装しない).",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: ကွန်ကရစ်နဲ့ ထိမယ့်နေရာ ဆေးမသုတ်ရ (No paint where steel touches concrete)။"
    }
  },
  {
    id: "3-27",
    questionJP: "<ruby>アンカーボルト<rt>あんかーぼると</rt></ruby>の<ruby>設置<rt>せっち</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Anchor bolt တပ်ဆင်ခြင်းနှင့်ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) アンカーボルトは、<ruby>柱<rt>はしら</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>や<ruby>高<rt>たか</rt></ruby>さを<ruby>正確<rt>せいかく</rt></ruby>に<ruby>定<rt>さだ</rt></ruby>めるための<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>部材<rt>ぶざい</rt></ruby>である。", textMY: "Anchor bolt သည် column ၏ တည်နေရာနှင့် အမြင့်ကို တိကျစွာသတ်မှတ်ရန်အတွက် အရေးကြီးသော အစိတ်အပိုင်းဖြစ်သည်။" },
        { id: 2, textJP: "(2) <ruby>設置<rt>せっち</rt></ruby><ruby>精度<rt>せいど</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>するため、アンカーボルト<ruby>固定<rt>こてい</rt></ruby><ruby>用<rt>よう</rt></ruby>の<ruby>架台<rt>かだい</rt></ruby>(テンプレート)を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "တပ်ဆင်မှုတိကျမှုရရှိရန်၊ anchor bolt ကို ထိန်းထားရန်အတွက် template ကို အသုံးပြုသည်။" },
        { id: 3, textJP: "(3) アンカーボルトの<ruby>出<rt>で</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さは、ベースプレートの<ruby>下<rt>した</rt></ruby>に<ruby>敷<rt>し</rt></ruby>くモルタルの<ruby>厚<rt>あつ</rt></ruby>さも<ruby>考慮<rt>こうりょ</rt></ruby>して<ruby>決定<rt>けってい</rt></ruby>する。", textMY: "Anchor bolt ၏ ထွက်နေသောအမြင့်ကို၊ base plate အောက်တွင် ခင်းမည့် mortar အထူကိုပါ ထည့်သွင်းစဉ်းစား၍ ဆုံးဖြတ်သည်။" },
        { id: 4, textJP: "(4) コンクリート<ruby>打設<rt>だせつ</rt></ruby><ruby>時<rt>じ</rt></ruby>にアンカーボルトが<ruby>移動<rt>いどう</rt></ruby>しないよう、<ruby>鉄筋<rt>てっきん</rt></ruby>に<ruby>軽<rt>かる</rt></ruby>く<ruby>溶接<rt>ようせつ</rt></ruby>して<ruby>固定<rt>こてい</rt></ruby>する。", textMY: "ကွန်ကရစ်လောင်းသည့်အခါ anchor bolt မရွေ့လျားစေရန်၊ rebar တွင် ယာယီဂဟေဆော်၍ ထိန်းထားသည်။" },
        { id: 5, textJP: "(5) <ruby>埋込<rt>うめこ</rt></ruby>み<ruby>長<rt>なが</rt></ruby>さは、<ruby>柱脚<rt>ちゅうきゃく</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>する<ruby>力<rt>ちから</rt></ruby>を<ruby>基礎<rt>きそ</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>するために<ruby>十分<rt>じゅうぶん</rt></ruby>な<ruby>長<rt>なが</rt></ruby>さを<ruby>確保<rt>かくほ</rt></ruby>する。", textMY: "Embedment length သည် column base ပေါ် သက်ရောက်သောအားကို foundation သို့ သယ်ဆောင်ရန်အတွက် လုံလောက်သောအရှည် ရှိရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (4) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Anchor bolt ကို rebar တွင် ဂဟေဆော်ခြင်းသည် bolt ၏ သတ္တုဂုဏ်သတ္တိကို ပြောင်းလဲစေပြီး၊ ကြွပ်ဆတ် (brittle) ဖြစ်စေကာ၊ ၎င်း၏ ခံနိုင်အားကို သိသိသာသာ ကျဆင်းစေနိုင်သည်။ ဤလုပ်ဆောင်မှုကို တင်းကြပ်စွာ တားမြစ်ထားသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Anchor bolt ကို ဘယ်တော့မှ ဂဟေမဆော်ရ (Never weld anchor bolts)။"
    }
  },
   {
    id: "3-28",
    questionJP: "<ruby>建方<rt>たてかた</rt></ruby><ruby>作業<rt>さぎょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Erection လုပ်ငန်းနှင့်ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>建方<rt>たてかた</rt></ruby>に<ruby>先立<rt>さきだ</rt></ruby>ち、<ruby>建方<rt>たてかた</rt></ruby><ruby>計画書<rt>けいかくしょ</rt></ruby>を<ruby>作成<rt>さくせい</rt></ruby>し、クレーンの<ruby>機種<rt>きしゅ</rt></ruby>や<ruby>配置<rt>はいち</rt></ruby>、<ruby>作業<rt>さぎょう</rt></ruby><ruby>手順<rt>てじゅん</rt></ruby>などを<ruby>定<rt>さだ</rt></ruby>める。", textMY: "Erection မစတင်မီ၊ erection plan ကို ရေးဆွဲပြီး crane အမျိုးအစားနှင့် နေရာချထားမှု၊ လုပ်ငန်းအဆင့်ဆင့်တို့ကို သတ်မှတ်ရမည်။" },
        { id: 2, textJP: "(2) <ruby>柱<rt>はしら</rt></ruby>の<ruby>吊<rt>つ</rt></ruby>り<ruby>上<rt>あ</rt></ruby>げには、ワイヤーロープを<ruby>柱<rt>はしら</rt></ruby>に<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>巻<rt>ま</rt></ruby>きつけず、<ruby>専用<rt>せんよう</rt></ruby>の<ruby>吊<rt>つ</rt></ruby>り<ruby>治具<rt>じぐ</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>することが<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: "Column ကို မတင်ရာတွင် wire rope ကို column တွင် တိုက်ရိုက်မပတ်ဘဲ၊ အထူး lifting jig ကို အသုံးပြုရန် အကြံပြုသည်။" },
        { id: 3, textJP: "(3) <ruby>仮<rt>かり</rt></ruby>ボルトは、ボルト<ruby>一群<rt>いちぐん</rt></ruby>の 1/3 <ruby>程度<rt>ていど</rt></ruby>かつ 2 <ruby>本<rt>ほん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>を<ruby>バランス<rt>ばらんす</rt></ruby>よく<ruby>締<rt>し</rt></ruby>め<ruby>付<rt>つ</rt></ruby>ける。", textMY: "Temporary bolt များကို bolt group တစ်ခု၏ 1/3 ခန့်နှင့် အနည်းဆုံး ၂ ချောင်းကို မျှတအောင် တပ်ဆင်ရမည်။" },
        { id: 4, textJP: "(4) <ruby>建<rt>た</rt></ruby>いれ<ruby>直<rt>なお</rt></ruby>しは、<ruby>建方<rt>たてかた</rt></ruby><ruby>クレーン<rt>くれーん</rt></ruby>を<ruby>使用<rt>しよう</rt></ruby>して<ruby>行<rt>おこな</rt></ruby>い、ワイヤーロープで<ruby>引<rt>ひ</rt></ruby>っ<ruby>張<rt>ぱ</rt></ruby>りながら<ruby>柱<rt>はしら</rt></ruby>の<ruby>傾<rt>かたむ</rt></ruby>きを<ruby>調整<rt>ちょうせい</rt></ruby>する。", textMY: "Plumb adjustment ကို erection crane ကို အသုံးပြု၍ ပြုလုပ်ပြီး၊ wire rope ဖြင့် ဆွဲငင်ကာ column ၏ စောင်းနေမှုကို ချိန်ညှိသည်။" },
        { id: 5, textJP: "(5) <ruby>風速<rt>ふうそく</rt></ruby> 10m/s <ruby>以上<rt>いじょう</rt></ruby>の<ruby>強風<rt>きょうふう</rt></ruby><ruby>時<rt>じ</rt></ruby>には、<ruby>原則<rt>げんそく</rt></ruby>として<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>中止<rt>ちゅうし</rt></ruby>する。", textMY: "လေတိုက်နှုန်း 10 m/s နှင့်အထက် လေပြင်းတိုက်ခတ်ချိန်တွင်၊ အခြေခံအားဖြင့် လုပ်ငန်းကို ရပ်ဆိုင်းရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (4) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Plumb adjustment (建入れ直し) သည် erection crane ကို အသုံးမပြုဘဲ၊ turnbuckle ပါသော wire rope သို့မဟုတ် အထူး hydraulic jack ကဲ့သို့သော ချိန်ညှိကိရိယာများကို အသုံးပြု၍ ပြုလုပ်ရမည်။ Crane သည် အလွန်ကြီးမားသော အားကို ဖြစ်ပေါ်စေနိုင်ပြီး၊ တိကျသော ချိန်ညှိမှုအတွက် မသင့်တော်သည့်အပြင် အန္တရာယ်လည်းရှိသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Plumb adjustment (建入れ直し) ကို crane နဲ့မလုပ်ရဘူး၊ turnbuckle နဲ့လုပ်ရမယ်။"
    }
  },
  {
    id: "3-29",
    questionJP: "<ruby>柱脚<rt>ちゅうきゃく</rt></ruby>のグラウト<ruby>工事<rt>こうじ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "Column base grouting လုပ်ငန်းနှင့်ပတ်သက်၍ အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) グラウトは、ベースプレートと<ruby>基礎<rt>きそ</rt></ruby>コンクリートとの<ruby>間<rt>あいだ</rt></ruby>に<ruby>充填<rt>じゅうてん</rt></ruby>し、<ruby>柱<rt>はしら</rt></ruby>からの<ruby>力<rt>ちから</rt></ruby>を<ruby>基礎<rt>きそ</rt></ruby>に<ruby>均等<rt>きんとう</rt></ruby>に<ruby>伝達<rt>でんたつ</rt></ruby>させる<ruby>役割<rt>やくわり</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ。", textMY: "Grout သည် base plate နှင့် foundation concrete ကြားတွင် ဖြည့်သွင်းပြီး၊ column မှ အားကို foundation သို့ ညီညာစွာ သယ်ဆောင်ပေးသည့် တာဝန်ရှိသည်။" },
        { id: 2, textJP: "(2) <ruby>使用<rt>しよう</rt></ruby>するグラウト<ruby>材<rt>ざい</rt></ruby>は、<ruby>無<rt>む</rt></ruby><ruby>収縮<rt>しゅうしゅく</rt></ruby>モルタルを<ruby>用<rt>もち</rt></ruby>いることが<rt>一般<rt>いっぱん</rt></ruby><rt>的<rt>てき</rt></ruby>である。", textMY: "အသုံးပြုသည့် grout material သည် non-shrink mortar ဖြစ်ခြင်းသည် ယေဘုယျဖြစ်သည်။" },
        { id: 3, textJP: "(3) グラウトの<ruby>充填<rt>じゅうてん</rt></ruby>は、ベースプレートの<ruby>片側<rt>かたがわ</rt></ruby>から<ruby>行<rt>おこな</rt></ruby>い、<ruby>空気<rt>くうき</rt></ruby>が<ruby>残<rt>のこ</rt></ruby>らないようにする。", textMY: "Grout ဖြည့်သွင်းခြင်းကို base plate ၏ တစ်ဖက်မှ ပြုလုပ်ပြီး၊ လေခိုကျန်ခြင်း မရှိအောင် ပြုလုပ်ရမည်။" },
        { id: 4, textJP: "(4) グラウトの<ruby>強度<rt>きょうど</rt></ruby>は、<ruby>基礎<rt>きそ</rt></ruby>コンクリートの<ruby>設計<rt>せっけい</rt></ruby><ruby>基準<rt>きじゅん</rt></ruby><ruby>強度<rt>きょうど</rt></ruby>よりも<ruby>高<rt>たか</rt></ruby>くする<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "Grout ၏ strength သည် foundation concrete ၏ design strength ထက် ပိုမြင့်ရန် လိုအပ်သည်။" },
        { id: 5, textJP: "(5) グラウト<ruby>充填<rt>じゅうてん</rt></ruby><ruby>後<rt>ご</rt></ruby>は、<ruby>急激<rt>きゅうげき</rt></ruby>な<ruby>乾燥<rt>かんそう</rt></ruby>を<ruby>避<rt>さ</rt></ruby>けるため、<ruby>湿潤<rt>しつじゅん</rt></ruby><ruby>養生<rt>ようじょう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "Grout ဖြည့်သွင်းပြီးနောက်၊ ရုတ်တရက် ခြောက်သွေ့ခြင်းကို ရှောင်ရှားရန်အတွက် wet curing ပြုလုပ်ရမည်။" }
    ],
    correctOptionId: 4,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (4) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Grout ၏ strength သည် foundation concrete ၏ design strength နှင့် တူညီရန် သို့မဟုတ် ထို့ထက်မနည်းရန် (同等以上) လိုအပ်သော်လည်း၊ မဖြစ်မနေ ပိုမြင့်ရန် (高くする必要がある) မလိုအပ်ပါ။ အဓိကမှာ လုံလောက်သော strength ရှိရန်နှင့် non-shrink ဖြစ်ရန်ဖြစ်သည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Grout strength ≥ Foundation strength. Grout က ပိုแข็งแรงする必要はない။"
    }
  },
  {
    id: "3-30",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>入熱<rt>にゅうねつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>適当<rt>てきとう</rt></ruby>なものはどれか。",
    questionMY: "Welding heat input နှင့် ပတ်သက်၍ အသင့်လျော်ဆုံးအချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>入熱<rt>にゅうねつ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きすぎると、<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>が<ruby>速<rt>はや</rt></ruby>くなり、<ruby>硬化<rt>こうか</rt></ruby>しやすくなる。", textMY: "Heat input အလွန်ကြီးမားပါက၊ weld ၏ cooling rate မြန်လာပြီး မာကျောလွယ်လာသည်။" },
        { id: 2, textJP: "(2) <ruby>入熱<rt>にゅうねつ</rt></ruby>が<ruby>小<rt>ちい</rt></ruby>さすぎると、<ruby>溶<rt>と</rt></ruby>け<ruby>込<rt>こ</rt></ruby>み<ruby>不足<rt>ふそく</rt></ruby>の<ruby>原因<rt>げんいん</rt></ruby>となることがある。", textMY: "Heat input အလွန်နည်းပါးပါက၊ incomplete fusion ဖြစ်စေနိုင်သည်။" },
        { id: 3, textJP: "(3) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>速度<rt>そくど</rt></ruby>を<ruby>速<rt>はや</rt></ruby>くすると、<ruby>入熱<rt>にゅうねつ</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きくなる。", textMY: "Welding speed ကို မြှင့်တင်ပါက၊ heat input ကြီးမားလာသည်။" },
        { id: 4, textJP: "(4) <ruby>入熱<rt>にゅうねつ</rt></ruby>は、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>部<rt>ぶ</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>には<ruby>影響<rt>えいきょう</rt></ruby>しない。", textMY: "Heat input သည် weld ၏ deformation ကို မထိခိုက်ပါ။" },
        { id: 5, textJP: "(5) <ruby>厚板<rt>あついた</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>では、<ruby>常<rt>つね</rt></ruby>に<ruby>入熱<rt>にゅうねつ</rt></ruby>をできるだけ<ruby>大<rt>おお</rt></ruby>きくするべきである。", textMY: "အထူကြီးသော plate များကို ဂဟေဆက်ရာတွင်၊ heat input ကို အမြဲတမ်း အတတ်နိုင်ဆုံး ကြီးမားအောင် ပြုလုပ်သင့်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (2) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှန်ကန်ရခြင်း အကြောင်းရင်း: Heat input သည် ဂဟေသားကို အရည်ပျော်စေရန်အတွက် လိုအပ်သော စွမ်းအင်ဖြစ်သည်။ ၎င်းအလွန်နည်းပါက၊ base metal ကို လုံလောက်စွာ အရည်မပျော်စေနိုင်ဘဲ၊ incomplete fusion (溶け込み不足) သို့မဟုတ် incomplete penetration ကဲ့သို့သော ချို့ယွင်းချက်များ ဖြစ်ပေါ်စေနိုင်သည်။ (1) Heat input ကြီးမားပါက cooling rate နှေးသွားသည်။ (3) Speed မြန်လျှင် heat input နည်းသွားသည်။ (4) Heat input သည် deformation ၏ အဓိကအကြောင်းရင်းဖြစ်သည်။ (5) Heat input ကို သင့်လျော်သော範囲အတွင်း ထိန်းချုပ်ရမည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: မီးအား (Heat input) နည်းရင် မကျက်ဘူး (Incomplete fusion)။"
    }
  }
];
