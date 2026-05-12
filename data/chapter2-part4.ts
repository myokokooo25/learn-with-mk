import { StudyCardData } from '../types';

export const chapter2Part4Data: StudyCardData[] = [
    {
    id: "2-47",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby><ruby>入熱<rt>にゅうねつ</rt></ruby>およびパス<ruby>間<rt>かん</rt></ruby><ruby>温度<rt>おんど</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "ဂဟေဆက်ခြင်းတွင် အပူထည့်သွင်းမှု (Heat Input) နှင့် Pass အကြား အပူချိန် (Interpass Temperature) ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ။",
    options: [
        { id: 1, textJP: "(1) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>入熱<rt>にゅうねつ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいほど<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>は<ruby>遅<rt>おそ</rt></ruby>くなり、<ruby>低温<rt>ていおん</rt></ruby><ruby>割<rt>わ</rt></ruby>れの<ruby>防止<rt>ぼうし</rt></ruby>に<ruby>有効<rt>ゆうこう</rt></ruby>であるが、<ruby>熱<rt>ねつ</rt></ruby><ruby>影響部<rt>えいきょうぶ</rt></ruby>の<ruby>靭性<rt>じんせい</rt></ruby>を<ruby>低下<rt>ていか</rt></ruby>させることがある。", textMY: "Heat input များလေလေ ဂဟေဆက်ဧရိယာ၏ အအေးခံနှုန်း နှေးလေဖြစ်ပြီး၊ Cold Cracking ကို ကာကွယ်ရာတွင် ထိရောက်သော်လည်း Heat Affected Zone (HAZ) ၏ Toughness ကို ကျဆင်းစေနိုင်သည်။" },
        { id: 2, textJP: "(2) パス<ruby>間<rt>かん</rt></ruby><ruby>温度<rt>おんど</rt></ruby>は、<ruby>次<rt>つぎ</rt></ruby>のパスを<ruby>溶接<rt>ようせつ</rt></ruby>する<ruby>直前<rt>ちょくぜん</rt></ruby>の<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>であり、<ruby>鋼種<rt>こうしゅ</rt></ruby>や<ruby>板厚<rt>いたあつ</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>上限値<rt>じょうげんち</rt></ruby>が<ruby>管理<rt>かんり</rt></ruby>される。", textMY: "Interpass Temperature ဆိုသည်မှာ နောက်တစ်လွှာ မဆက်မီ ဂဟေဆက်ဧရိယာ၏ အပူချိန်ဖြစ်ပြီး၊ ၎င်း၏ အမြင့်ဆုံးတန်ဖိုးကို သံမဏိအမျိုးအစားနှင့် အထူအလိုက် ထိန်းချုပ်စီမံရသည်။" },
        { id: 3, textJP: "(3) <ruby>低温<rt>ていおん</rt></ruby><ruby>割<rt>わ</rt></ruby>れを<ruby>防止<rt>ぼうし</rt></ruby>するためには、<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>を<ruby>速<rt>はや</rt></ruby>くする<ruby>必要<rt>ひつよう</rt></ruby>があり、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>入熱<rt>にゅうねつ</rt></ruby>を<ruby>小<rt>ちい</rt></ruby>さくする。", textMY: "Cold Cracking ကို ကာကွယ်ရန်၊ ဂဟေဆက်ဧရိယာ၏ အအေးခံနှုန်းကို မြန်ဆန်စေရန် လိုအပ်ပြီး၊ ထို့ကြောင့် Heat Input ကို လျှော့ချရမည်။" },
        { id: 4, textJP: "(4) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>速度<rt>そくど</rt></ruby>を<ruby>速<rt>はや</rt></ruby>くすると、<ruby>単位<rt>たんい</rt></ruby><ruby>長<rt>なが</rt></ruby>さあたりの<ruby>溶接<rt>ようせつ</rt></ruby><ruby>入熱<rt>にゅうねつ</rt></ruby>は<ruby>小<rt>ちい</rt></ruby>さくなる。", textMY: "ဂဟေဆက်နှုန်းကို မြန်ဆန်စေပါက၊ ယူနစ်အရှည်တစ်ခုအတွက် Heat Input သည် လျော့နည်းသွားသည်။" },
        { id: 5, textJP: "(5) パス<ruby>間<rt>かん</rt></ruby><ruby>温度<rt>おんど</rt></ruby>が<ruby>高<rt>たか</rt></ruby>すぎると、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby>や<ruby>熱<rt>ねつ</rt></ruby><ruby>影響部<rt>えいきょうぶ</rt></ruby>の<ruby>結晶<rt>けっしょう</rt></ruby><ruby>粒<rt>りゅう</rt></ruby>が<ruby>粗大<rt>そだい</rt></ruby><ruby>化<rt>か</rt></ruby>し、<ruby>靭性<rt>じんせい</rt></ruby>が<ruby>低下<rt>ていか</rt></ruby>する<ruby>原因<rt>げんいん</rt></ruby>となる。", textMY: "Interpass Temperature အလွန်မြင့်မားပါက၊ ဂဟေသားနှင့် Heat Affected Zone (HAZ) ၏ Crystal grain များ ကြီးထွားကြမ်းတမ်းလာပြီး Toughness ကျဆင်းစေသည့် အကြောင်းရင်းဖြစ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (3) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Cold Cracking ကို ကာကွယ်ရန်အတွက်၊ ဟိုက်ဒရိုဂျင် ပျံ့နှံ့ထွက်သွားရန် အချိန်ပေးရန်နှင့် မာကျောသော ဖွဲ့စည်းပုံ မဖြစ်ပေါ်စေရန် အအေးခံနှုန်းကို နှေးကွေးစေရန် (遅くする) လိုအပ်သည်။ ၎င်းအတွက် Heat Input ကို တိုးမြှင့်ခြင်း (大きくする) သို့မဟုတ် ကြိုတင်အပူပေးခြင်း (予熱) ကို ပြုလုပ်ရသည်။ အအေးခံနှုန်းကို မြန်စေပြီး Heat Input ကို လျှော့ချရမည်ဟု ဆိုခြင်းသည် ဆန့်ကျင်ဘက်ဖြစ်၍ မှားယွင်းသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Cold Crack ကာကွယ်ရန် -> အအေးခံနှုန်းကို နှေးအောင်လုပ် (Slow Cooling) -> Heat Input ကို များများပေး (Increase Heat Input)။"
    }
  },
  {
    id: "2-48",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>組織<rt>そしき</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(Weld Zone ၏ ဖွဲ့စည်းပုံ (Microstructure) ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby>は、<ruby>溶融<rt>ようゆう</rt></ruby><ruby>状態<rt>じょうたい</rt></ruby>から<ruby>凝固<rt>ぎょうこ</rt></ruby>した<ruby>鋳造<rt>ちゅうぞう</rt></ruby><ruby>組織<rt>そしき</rt></ruby>であり、<ruby>強度<rt>きょうど</rt></ruby>、<ruby>延性<rt>えんせい</rt></ruby>、<ruby>靭性<rt>じんせい</rt></ruby>などの<ruby>機械的<rt>きかいてき</rt></ruby><ruby>性質<rt>せいしつ</rt></ruby>は、<ruby>合金<rt>ごうきん</rt></ruby><ruby>元素<rt>げんそ</rt></ruby>の<ruby>含有<rt>がんゆう</rt></ruby><ruby>量<rt>りょう</rt></ruby>のみによって<ruby>定<rt>さだ</rt></ruby>まる。", textMY: "Weld Metal သည် အရည်ပျော်ပြီး မာကျောလာသော Cast Structure ဖြစ်ပြီး၊ ၎င်း၏ စက်ပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများသည် Alloy Element ပမာဏ သာလျှင် ဆုံးဖြတ်သည်။" },
        { id: 2, textJP: "(2) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby>は、<ruby>溶融<rt>ようゆう</rt></ruby>した<ruby>母材<rt>ぼざい</rt></ruby>と<ruby>溶接<rt>ようせつ</rt></ruby>ワイヤや<ruby>被覆<rt>ひふく</rt></ruby><ruby>材<rt>ざい</rt></ruby>、またはフラックスから<ruby>移行<rt>いこう</rt></ruby>した<ruby>金属<rt>きんぞく</rt></ruby>が<ruby>混<rt>ま</rt></ruby>じって<ruby>作<rt>つく</rt></ruby>られた<ruby>溶融<rt>ようゆう</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby>が<ruby>凝固<rt>ぎょうこ</rt></ruby>したものである。", textMY: "Weld Metal သည် အရည်ပျော်နေသော Base Metal နှင့် Weld Wire သို့မဟုတ် Flux မှ ရွှေ့ပြောင်းလာသော သတ္တုများ ရောနှော၍ မာကျောလာခြင်းဖြစ်သည်။" },
        { id: 3, textJP: "(3) <ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>結晶<rt>けっしょう</rt></ruby>は、ボンド<ruby>部<rt>ぶ</rt></ruby>から<ruby>溶接<rt>ようせつ</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby><ruby>中心部<rt>ちゅうしんぶ</rt></ruby>または<ruby>表面<rt>ひょうめん</rt></ruby><ruby>中心部<rt>ちゅうしんぶ</rt></ruby>に<ruby>向<rt>む</rt></ruby>かって<ruby>成長<rt>せいちょう</rt></ruby>する。", textMY: "Weld Joint ၏ Crystal များသည် Bond Area မှစ၍ Weld Metal ၏ အလယ်ဗဟို သို့မဟုတ် မျက်နှာပြင် ဗဟိုဆီသို့ ကြီးထွားလာသည်။" },
        { id: 4, textJP: "(4) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>熱<rt>ねつ</rt></ruby><ruby>影響部<rt>えいきょうぶ</rt></ruby>は、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>入熱<rt>にゅうねつ</rt></ruby>によって<ruby>加熱<rt>かねつ</rt></ruby>された<ruby>母材<rt>ぼざい</rt></ruby>の<ruby>領域<rt>りょういき</rt></ruby>で、<ruby>最高<rt>さいこう</rt></ruby><ruby>加熱<rt>かねつ</rt></ruby><ruby>温度<rt>おんど</rt></ruby>、<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>がそれぞれ の<ruby>部位<rt>ぶい</rt></ruby>で<ruby>異<rt>こと</rt></ruby>なるので、<ruby>部位<rt>ぶい</rt></ruby>によって<ruby>生成<rt>せいせい</rt></ruby>される<ruby>組織<rt>そしき</rt></ruby>も<ruby>異<rt>こと</rt></ruby>なる。", textMY: "HAZ (熱影響部) သည် Heat Input ဖြင့် အပူပေးထားသော Base Metal ဧရိယာဖြစ်ပြီး၊ အမြင့်ဆုံး အပူချိန်နှင့် Cooling Rate မတူညီသောကြောင့် နေရာအလိုက် ဖွဲ့စည်းပုံများ ကွဲပြားသည်။" },
        { id: 5, textJP: "(5) <ruby>炭素<rt>たんそ</rt></ruby><ruby>当量<rt>とうりょう</rt></ruby>(Ce)は、<ruby>最高<rt>さいこう</rt></ruby><ruby>硬<rt>かた</rt></ruby>さにおよぼす<ruby>鋼<rt>はがね</rt></ruby>の<ruby>化学<rt>かがく</rt></ruby><ruby>成分<rt>せいぶん</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>について、<ruby>炭素<rt>たんそ</rt></ruby>と<ruby>合金<rt>ごうきん</rt></ruby><ruby>元素<rt>げんそ</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>炭素<rt>たんそ</rt></ruby><ruby>含有<rt>がんゆう</rt></ruby><ruby>量<rt>りょう</rt></ruby>に<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えて<ruby>指標<rt>しひょう</rt></ruby><ruby>化<rt>か</rt></ruby>したものである。", textMY: "Carbon Equivalent (Ce) သည် သံမဏိမာကျောမှုအပေါ် သံမဏိ၏ ဓာတုဖွဲ့စည်းမှု သက်ရောက်မှုကို Carbon Content ဖြင့် အစားထိုး တိုင်းတာသည်။" }
    ],
    correctOptionId: 1,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (1) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Weld Metal ၏ စက်ပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများသည် Alloy Element Content အပြင်၊ 冷却速度 (Cooling Rate) ၏ သက်ရောက်မှုကိုပါ ခံရသည်။ のみ (သာလျှင်) ဟု ကန့်သတ်ပြောဆိုခြင်းသည် မှားယွင်းသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: 溶接金属 (Weld Metal) の性質は 合金元素 と 冷却速度 (Cooling Rate) に依存する。"
    }
  },
  {
    id: "2-49",
    questionJP: "<ruby>溶接部<rt>ようせつぶ</rt></ruby>の<ruby>機械的<rt>きかいてき</rt></ruby><ruby>性質<rt>せいしつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(Weld Zone ၏ စက်ပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby>は、<ruby>溶融<rt>ようゆう</rt></ruby><ruby>状態<rt>じょうたい</rt></ruby>から<ruby>凝固<rt>ぎょうこ</rt></ruby>した<ruby>鋳造<rt>ちゅうぞう</rt></ruby><ruby>組織<rt>そしき</rt></ruby>であり、<ruby>強度<rt>きょうど</rt></ruby>、<ruby>延性<rt>えんせい</rt></ruby>、<ruby>靭性<rt>じんせい</rt></ruby>などの<ruby>機械的<rt>きかいてき</rt></ruby><ruby>性質<rt>せいしつ</rt></ruby>は、<ruby>合金<rt>ごうきん</rt></ruby><ruby>元素<rt>げんそ</rt></ruby>の<ruby>含有<rt>がんゆう</rt></ruby><ruby>量<rt>りょう</rt></ruby>と<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>によって<ruby>定<rt>さだ</rt></ruby>まる。", textMY: "Weld Metal ၏ စက်ပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများသည် Alloy Element Content နှင့် Cooling Rate တို့ဖြင့် ဆုံးဖြတ်သည်။" },
        { id: 2, textJP: "(2) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>熱<rt>ねつ</rt></ruby><ruby>影響部<rt>えいきょうぶ</rt></ruby>の<ruby>硬<rt>かた</rt></ruby>さは、<ruby>母材<rt>ぼざい</rt></ruby>と<ruby>溶接<rt>ようせつ</rt></ruby><ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>化学<rt>かがく</rt></ruby><ruby>成分<rt>せいぶん</rt></ruby>と<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>・<ruby>最高<rt>さいこう</rt></ruby><ruby>加熱<rt>かねつ</rt></ruby><ruby>温度<rt>おんど</rt></ruby>によって<ruby>定<rt>さだ</rt></ruby>まる。", textMY: "HAZ (熱影響部) ၏ မာကျောမှု သည် Base Metal နှင့် Weld Material ၏ ဓာတုဖွဲ့စည်းမှု၊ Cooling Rate နှင့် အမြင့်ဆုံး အပူပေး အပူချိန်တို့ဖြင့် ဆုံးဖြတ်သည်။" },
        { id: 3, textJP: "(3) <ruby>予熱<rt>よねつ</rt></ruby>を<ruby>施<rt>ほどこ</rt></ruby>す<rt>等<rt>とう</rt></ruby>で<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>が<ruby>遅<rt>おそ</rt></ruby>くなった<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>最高<rt>さいこう</rt></ruby><ruby>硬<rt>かた</rt></ruby>さは<ruby>小<rt>ちい</rt></ruby>さくなる。", textMY: "Preheating ပြုလုပ်ခြင်းဖြင့် Cooling Rate နှေးကွေးပါက၊ အမြင့်ဆုံး မာကျောမှု (Hardness) နည်းပါးလာသည်။" },
        { id: 4, textJP: "(4) <ruby>鋼板<rt>こうはん</rt></ruby><ruby>表面<rt>ひょうめん</rt></ruby>にビードを<ruby>置<rt>お</rt></ruby>くように<ruby>溶接<rt>ようせつ</rt></ruby>した<ruby>場<rt>ば</rt></ruby> (Surfacing Weld) では Bond Area နှင့် Fine Grain Area သည် အမာကျောဆုံး ဖြစ်သည်။", textMY: "Plate မျက်နှာပြင်တွင် Bead တင်သည့် ဂဟေဆက်များ (Surfacing Weld) တွင် Bond Area နှင့် Fine Grain Area သည် အမာကျောဆုံး ဖြစ်သည်။" },
        { id: 5, textJP: "(5) <ruby>炭素<rt>たんそ</rt></ruby><ruby>当量<rt>とうりょう</rt></ruby>(Ce)は、<ruby>最高<rt>さいこう</rt></ruby><ruby>硬<rt>かた</rt></ruby>さにおよぼす<ruby>鋼<rt>はがね</rt></ruby>の<ruby>化学<rt>かがく</rt></ruby><ruby>成分<rt>せいぶん</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>について、<ruby>炭素<rt>たんそ</rt></ruby>と<ruby>合金<rt>ごうきん</rt></ruby><ruby>元素<rt>げんそ</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>炭素<rt>たんそ</rt></ruby><ruby>含有<rt>がんゆう</rt></ruby><ruby>量<rt>りょう</rt></ruby>に<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えて<ruby>指標<rt>しひょう</rt></ruby><ruby>化<rt>か</rt></ruby>したものである。", textMY: "Carbon Equivalent (Ce) သည် အမြင့်ဆုံး မာကျောမှုအပေါ် သံမဏိ၏ ဓာတုဖွဲ့စည်းမှု သက်ရောက်မှုကို Carbon Content ဖြင့် အစားထိုး တိုင်းတာသည်။" }
    ],
    correctOptionId: 2,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (2) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: HAZ (熱影響部) သည် Base Metal (母材) သာ အပူပေးခံရသော ဧရိယာ ဖြစ်သည်။ ထို့ကြောင့် HAZ ၏ မာကျောမှုသည် 溶接材料 (Weld Material) ၏ ဓာတုဖွဲ့စည်းမှု ပေါ်တွင် မူတည်ခြင်း မရှိပါ။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: HAZ の硬さ (Hardness) は 母材 (Base Metal) で決まる。"
    }
  },
    {
    id: "2-50",
    questionJP: "アークの<ruby>特性<rt>とくせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(Arc ၏ ဝိသေသလက္ခဏာများဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>電流<rt>でんりゅう</rt></ruby>によって<ruby>発生<rt>はっせい</rt></ruby>する<ruby>磁界<rt>じかい</rt></ruby>や<ruby>母材<rt>ぼざい</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>留した<ruby>磁気<rt>じき</rt></ruby>が、アーク<ruby>柱<rt>ちゅう</rt></ruby>を<ruby>流<rt>なが</rt></ruby>れる<ruby>電流<rt>でんりゅう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>著<rt>いちじる</rt></ruby>しく<ruby>非対称<rt>ひたいしょう</rt></ruby>に<ruby>作用<rt>さよう</rt></ruby>し、<ruby>溶接中<rt>ようせつちゅう</rt></ruby>にアークが<ruby>偏向<rt>へんこう</rt></ruby>することを<ruby>磁気<rt>じき</rt></ruby><ruby>吹<rt>ふ</rt></ruby>きという。", textMY: "Weld Current မှ ထွက်ပေါ်သော သံလိုက်စက်ကွင်းနှင့် Base Metal တွင် ကျန်ရှိသော သံလိုက်ဓာတ်တို့သည် Arc Column ပေါ်သို့ ညီမျှမှုမရှိဘဲ သက်ရောက်သောအခါ Arc လမ်းကြောင်း ပြောင်းလဲခြင်းကို Arc Blow (磁気吹き) ဟု ခေါ်သည်။" },
        { id: 2, textJP: "(2) プラズマ<ruby>気流<rt>きりゅう</rt></ruby>は<ruby>母材<rt>ぼざい</rt></ruby>から<ruby>電極<rt>でんきょく</rt></ruby>に<ruby>向<rt>む</rt></ruby>かう<ruby>高速<rt>こうそく</rt></ruby>のガス<ruby>気流<rt>きりゅう</rt></ruby>で、<ruby>横向<rt>よこむき</rt></ruby><ruby>姿勢<rt>しせい</rt></ruby>や<ruby>上向<rt>うわむき</rt></ruby><ruby>姿勢<rt>しせい</rt></ruby>の<ruby>溶接<rt>ようせつ</rt></ruby>において、<ruby>溶滴<rt>ようてき</rt></ruby>が<ruby>母材<rt>ぼざい</rt></ruby>に<ruby>移行<rt>いこう</rt></ruby>するのを<ruby>助<rt>たす</rt></ruby>ける<ruby>力<rt>ちから</rt></ruby>となっている。", textMY: "Plasma Flow(プラズマ気流) သည် Base Metal မှ Electrode ဘက်သို့ ဦးတည်သော မြန်နှုန်းမြင့် Gas Stream ဖြစ်ပြီး၊ Horizontal နှင့် Overhead Welding တွင် Weld Droplet များ Base Metal သို့ ကူးပြောင်းစေရန် ကူညီပေးသည်။" },
        { id: 3, textJP: "(3) アークはトーチの<ruby>軸<rt>じく</rt></ruby><ruby>方向<rt>ほうこう</rt></ruby>に<ruby>発生<rt>はっせい</rt></ruby>する<ruby>傾向<rt>けいこう</rt></ruby>があり、アークの<ruby>硬直性<rt>こうちょくせい</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ばれる。", textMY: "Arc သည် Torch ၏ ဝင်ရိုးဘက်သို့ တည့်တည့် ဖြစ်ပေါ်လေ့ရှိပြီး ၎င်းကို Arc Stiffness (硬直性) ဟု ခေါ်သည်။" },
        { id: 4, textJP: "(4) アークは<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>作用<rt>さよう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるとその<ruby>断面積<rt>だんめんせき</rt></ruby>を<ruby>収縮<rt>しゅうしゅく</rt></ruby>させ、<ruby>熱<rt>ねつ</rt></ruby><ruby>損失<rt>そんしつ</rt></ruby>を<ruby>抑制<rt>よくせい</rt></ruby>しようとする。この<ruby>作用<rt>さよう</rt></ruby>は<ruby>熱的<rt>ねつてき</rt></ruby>ピンチ<ruby>効果<rt>こうか</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>ばれる。", textMY: "Arc သည် အအေးခံမှု သက်ရောက်သည့်အခါ ၎င်း၏ ဖြတ်ပိုင်း ဧရိယာ ကျုံ့သွားပြီး အပူဆုံးရှုံးမှုကို လျှော့ချရန် ကြိုးပမ်းသည်။ ဤဖြစ်စဉ်ကို Thermal Pinch Effect ဟု ခေါ်သည်။" },
        { id: 5, textJP: "(5) <ruby>導体<rt>どうたい</rt></ruby>に<ruby>電気<rt>でんき</rt></ruby>が<ruby>流<rt>なが</rt></ruby>れると<ruby>電磁力<rt>でんじりょく</rt></ruby>により<ruby>断面<rt>だんめん</rt></ruby>を<ruby>収縮<rt>しゅうしゅく</rt></ruby>させる<ruby>力<rt>ちから</rt></ruby>が<ruby>生<rt>しょう</rt></ruby>じる。この<ruby>力<rt>ちから</rt></ruby>を<ruby>電磁<rt>でんじ</rt></ruby>ピンチ<ruby>効果<rt>こうか</rt></ruby>という。", textMY: "Conductor တွင် Current စီးဆင်းသောအခါ Electromagnetic Force ကြောင့် ဖြတ်ပိုင်း ကျုံ့ဝင်မှု ဖြစ်ပေါ်သည်။ ဤအားကို Electromagnetic Pinch Effect ဟု ခေါ်သည်။" }
    ],
    correctOptionId: 2,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (2) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Plasma Flow (プラズマ気流) ၏ ဦးတည်ရာသည် Electrode (電極) မှ Base Metal (母材) ဘက်သို့ ဖြစ်သည်။ Base Metal မှ Electrode ဘက်သို့ ဟု ဆိုခြင်းသည် ပြောင်းပြန် ဖြစ်နေသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: プラズマ気流 (Plasma Flow) は電極から母材へ (From electrode to base metal)။"
    }
  },
  {
    id: "2-51",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby><ruby>材料<rt>ざいりょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(ဂဟေဆက် ပစ္စည်းများဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) <ruby>低<rt>てい</rt></ruby><ruby>水素系<rt>すいそけい</rt></ruby><ruby>溶接棒<rt>ようせつぼう</rt></ruby>は、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>の<ruby>拡散性<rt>かくさんせい</rt></ruby><ruby>水素<rt>すいそ</rt></ruby><ruby>量<rt>りょう</rt></ruby>を<ruby>少<rt>すく</rt></ruby>なくすることを<ruby>目的<rt>もくてき</rt></ruby>とした<ruby>溶接棒<rt>ようせつぼう</rt></ruby>であり、<ruby>被覆<rt>ひふく</rt></ruby><ruby>材<rt>ざい</rt></ruby>を<ruby>高温<rt>こうおん</rt></ruby>で<ruby>乾燥<rt>かんそう</rt></ruby>させることが<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "Low Hydrogen Weld Rod သည် Weld Metal အတွင်း ပျံ့နှံ့နေသော Hydrogen ပမာဏကို လျှော့ချရန် ရည်ရွယ်ပြီး၊ Flux Coating ကို အပူချိန် မြင့်မားစွာ အခြောက်ခံရန် လိုအပ်သည်။" },
        { id: 2, textJP: "(2) ガスシールドアーク<ruby>溶接<rt>ようせつ</rt></ruby>に<ruby>用<rt>もち</rt></ruby>いられる<ruby>炭酸<rt>たんさん</rt></ruby>ガスは、<ruby>活性<rt>かっせい</rt></ruby>ガスに<ruby>分類<rt>ぶんるい</rt></ruby>される。", textMY: "Gas Shielded Arc Welding တွင် အသုံးပြုသော CO2 Gas သည် Active Gas အဖြစ် ခွဲခြားသည်။" },
        { id: 3, textJP: "(3) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby>の<ruby>化学<rt>かがく</rt></ruby><ruby>成分<rt>せいぶん</rt></ruby>は、<ruby>溶接<rt>ようせつ</rt></ruby>ワイヤのミルシートによって<ruby>確認<rt>かくにん</rt></ruby>することができる。", textMY: "Weld Metal ၏ ဓာတုဖွဲ့စည်းပုံကို Weld Wire ၏ Mill Sheet ဖြင့် အတည်ပြုနိုင်သည်။" },
        { id: 4, textJP: "(4) <ruby>溶着<rt>ようちゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>は、<ruby>被覆<rt>ひふく</rt></ruby>アーク<ruby>溶接棒<rt>ようせつぼう</rt></ruby>、ソリッドワイヤ、スラグ<ruby>系<rt>けい</rt></ruby>フラックス<ruby>入<rt>い</rt></ruby>りワイヤ、メタル<ruby>系<rt>けい</rt></ruby>フラックス<ruby>入<rt>い</rt></ruby>りワイヤの<ruby>順<rt>じゅん</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きくなる。", textMY: "Deposition Speed (溶着速度) သည် Covered Arc Rod, Solid Wire, Slag Core Wire, Metal Core Wire အစီအစဉ်အတိုင်း ကြီးမားလာသည်။" },
        { id: 5, textJP: "(5) サブマージアーク<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>溶着<rt>ようちゃく</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby>の<ruby>機械的<rt>きかいてき</rt></ruby><ruby>性質<rt>せいしつ</rt></ruby>は、<ruby>溶接<rt>ようせつ</rt></ruby>ワイヤとフラックスの<ruby>組合<rt>くみあわ</rt></ruby>せによって<ruby>規定<rt>きてい</rt></ruby>されている。", textMY: "Submerged Arc Welding ၏ Weld Metal စက်မှုပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများကို Weld Wire နှင့် Flux တွဲဖက်မှုဖြင့် သတ်မှတ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (3) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Weld Metal ၏ ဓာတုဖွဲ့စည်းမှုသည် Weld Wire ၏ Mill Sheet အပြင် Base Metal (母材) နှင့် Flux/Shielding Gas ၏ ဓာတု တုံ့ပြန်မှုများပေါ်တွင်ပါ မူတည်သည်။ ထို့ကြောင့် Wire Mill Sheet တစ်ခုတည်းဖြင့် အတည်ပြုရန် မလုံလောက်ပါ။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: 溶接金属 (Weld Metal) の化学成分は ワイヤミルシートだけではダメ (Wire mill sheet alone is not enough)။"
    }
  },
  {
    id: "2-52",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby><ruby>材料<rt>ざいりょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(ဂဟေဆက် ပစ္စည်းများဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) ガスシールドアーク<ruby>溶接<rt>ようせつ</rt></ruby>は、<ruby>被覆<rt>ひふく</rt></ruby>アーク<ruby>溶接<rt>ようせつ</rt></ruby>と<ruby>比較<rt>ひかく</rt></ruby>して<ruby>溶接<rt>ようせつ</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby>の<ruby>水素<rt>すいそ</rt></ruby><ruby>含有量<rt>がんゆうりょう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>なく、<ruby>耐<rt>たい</rt></ruby><ruby>低温<rt>ていおん</rt></ruby><ruby>割<rt>わ</rt></ruby>れ<ruby>性<rt>せい</rt></ruby>に<ruby>優<rt>すぐ</rt></ruby>れている。", textMY: "Gas Shielded Arc Welding သည် Covered Arc Welding နှင့် နှိုင်းယှဉ်ပါက Weld Metal တွင် Hydrogen ပါဝင်မှု နည်းပြီး Cold Cracking ခံနိုင်ရည် ပိုကောင်းသည်။" },
        { id: 2, textJP: "(2) ソリッドワイヤは、<ruby>脱酸<rt>だっさん</rt></ruby><ruby>元素<rt>げんそ</rt></ruby>であるけい<ruby>素<rt>そ</rt></ruby>(Si)、マンガン(Mn)を<ruby>多<rt>おお</rt></ruby>く<ruby>含<rt>ふく</rt></ruby>んでいる。", textMY: "Solid Wire တွင် Deoxidizing Element များဖြစ်သော Silicon (Si) နှင့် Manganese (Mn) များစွာ ပါဝင်သည်။" },
        { id: 3, textJP: "(3) 400N/mm² <ruby>級<rt>きゅう</rt></ruby><ruby>鋼材<rt>こうざい</rt></ruby>および 490N/mm²<ruby>級<rt>きゅう</rt></ruby><ruby>鋼材<rt>こうざい</rt></ruby>を、<ruby>炭酸<rt>たんさん</rt></ruby>ガスのみをシールドガスに<ruby>使用<rt>しよう</rt></ruby>して<ruby>溶接<rt>ようせつ</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>には、<ruby>溶接<rt>ようせつ</rt></ruby>ワイヤは YGW11、YGW18 を<ruby>使用<rt>しよう</rt></ruby>する。", textMY: "400N/mm² နှင့် 490N/mm² Steel တို့ကို CO2 Gas သာ Shielding Gas အဖြစ် အသုံးပြုပါက Gm Weld Wire YGW11, YGW18 ကို သုံးရမည်။" },
        { id: 4, textJP: "(4) ガスシールドアーク<ruby>溶接<rt>ようせつ</rt></ruby>のうち、シールドガスに<ruby>炭酸<rt>たんさん</rt></ruby>ガスまたは<ruby>炭酸<rt>たんさん</rt></ruby>ガスとアルゴンガスの<ruby>混合<rt>こんごう</rt></ruby>ガスと<ruby>活性<rt>かっせい</rt></ruby>ガスを<ruby>使用<rt>しよう</rt></ruby>するものをミグ<ruby>溶接<rt>ようせつ</rt></ruby>という。", textMY: "Gas Shielded Arc Welding များအနက် CO2 သို့မဟုတ် CO2/Argon Mixed Gas ကဲ့သို့ Active Gas ကို အသုံးပြုသည်ကို MIG Welding ဟု ခေါ်သည်။" },
        { id: 5, textJP: "(5) フラックス<ruby>入<rt>い</rt></ruby>りワイヤは、ソリッドワイヤに<ruby>比<rt>くら</rt></ruby>べてスパッタが<ruby>少<rt>すく</rt></ruby>なく、<ruby>溶接<rt>ようせつ</rt></ruby>ビード<ruby>外観<rt>がいかん</rt></ruby>が<ruby>優<rt>すぐ</rt></ruby>れている。", textMY: "Flux Cored Wire သည် Solid Wire ထက် Spatter နည်းပြီး Weld Bead အပြင်ပန်း ပုံသဏ္ဍာန် ကောင်းမွန်သည်။" }
    ],
    correctOptionId: 4,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (4) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Active Gas (CO2 သို့မဟုတ် CO2/Argon Mixed Gas) ကို အသုံးပြုသော Welding နည်းလမ်းကို MAG Welding (Metal Active Gas) ဟု ခေါ်သည်။ MIG Welding (Metal Inert Gas) သည် Inert Gas (ဥပမာ- Argon) ကိုသာ အသုံးပြုသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: 活性ガス (Active Gas) は MAG 溶接。"
    }
  },
  {
    id: "2-53",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby><ruby>入熱<rt>にゅうねつ</rt></ruby>と<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(Heat Input နှင့် Cooling Rate ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>入熱<rt>にゅうねつ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいと、<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>は<ruby>遅<rt>おそ</rt></ruby>くなる。", textMY: "Heat Input များပါက Cooling Rate နှေးကွေးသည်။" },
        { id: 2, textJP: "(2) パス<ruby>間<rt>かん</rt></ruby><ruby>温度<rt>おんど</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いと、<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>は<ruby>遅<rt>おそ</rt></ruby>くなる。", textMY: "Pass Temperature မြင့်ပါက Cooling Rate နှေးကွေးသည်။" },
        { id: 3, textJP: "(3) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>速度<rt>そくど</rt></ruby>が<ruby>遅<rt>おそ</rt></ruby>いと、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>入熱<rt>にゅうねつ</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きくなる。", textMY: "Weld Speed နှေးပါက Heat Input ကြီးမားသည်။" },
        { id: 4, textJP: "(4) <ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>が<ruby>速<rt>はや</rt></ruby>いと、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>金属<rt>きんぞく</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>は<ruby>低下<rt>ていか</rt></ruby>する。", textMY: "Cooling Rate မြန်ပါက Weld Metal ၏ ခိုင်မာမှု ကျဆင်းသည်။" },
        { id: 5, textJP: "(5) <ruby>母材<rt>ぼざい</rt></ruby>の<ruby>板厚<rt>いたあつ</rt></ruby>が<ruby>厚<rt>あつ</rt></ruby>くなると、<ruby>冷却<rt>れいきゃく</rt></ruby><ruby>速度<rt>そくど</rt></ruby>は<ruby>速<rt>はや</rt></ruby>くなる。", textMY: "Base Metal ၏ Plate အထူ ထူလာပါက Cooling Rate မြန်လာသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (3) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: ရွေးချယ်စရာ (3) ပါ \"Weld Speed နှေးပါက Heat Input ကြီးမားသည်\" ဆိုသည့် ဖော်ပြချက်သည် နည်းပညာအရ မှန်ကန်သည် (物理的に正しい)။ သို့သော် ဤမေးခွန်းသည် 最も不適当なもの (အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်) ကို ရွေးခိုင်းရာတွင် ကျန်အချက်များသည် မှားယွင်းသော သို့မဟုတ် သံသယဖြစ်ဖွယ်ရာ ဖော်ပြချက်များဖြစ်ပြီး (ဥပမာ: 4 တွင် ခိုင်မာမှု မြင့်မားသည်ဟု ဆိုသင့်သည်၊ 5 တွင် Cooling Rate သည် ပို၍ မြန်သင့်သည်)၊ အခြားရွေးချယ်စရာများက ပို၍ မှားယွင်းသော သဘောတရားကို ဖော်ပြသည်။ Note: Source က (3) ကို ရွေးထားသည်။ ဤမေးခွန်း၏ သဘောတရားအရ (3) သည် မှန်သော ဖော်ပြချက်ဖြစ်ပြီး၊ မသင့်လျော်ဆုံး မဟုတ်ပါ။ သို့သော် စာမေးပွဲ ရည်ညွှန်းချက်အတိုင်း (3) ကို ယူရပါမည်။ (ဖြစ်နိုင်ခြေရှိသော အမှားမှာ ရွေးချယ်မှု 4 သို့မဟုတ် 5 ဖြစ်သင့်သည်)။ ကျွန်ုပ်သည် ရင်းမြစ်ကို လိုက်နာရန်အတွက် (3) ကို ရွေးချယ်ပြီး ၎င်းသည် မှန်ကန်သော ဖော်ပြချက် ဖြစ်နေခြင်းကြောင့် အသင့်လျော်ဆုံး မဟုတ်ပါဟု ရှင်းပြပါမည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: (3) သည် 物理的に正しい (Physically correct) သောကြောင့် 不適当 (Inappropriate) ရွေးချယ်မှု မဟုတ်ပါ။"
    }
  },
  {
    id: "2-54",
    questionJP: "<ruby>溶接<rt>ようせつ</rt></ruby><ruby>変形<rt>へんけい</rt></ruby>への<ruby>対応<rt>たいおう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(ဂဟေဆက် ပုံပြောင်းလဲခြင်း (Weld Deformation) ကို ဖြေရှင်းခြင်းဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) <ruby>溶接<rt>ようせつ</rt></ruby><ruby>線<rt>せん</rt></ruby><ruby>方向<rt>ほうこう</rt></ruby>の<ruby>収縮<rt>しゅうしゅく</rt></ruby>(<ruby>縦<rt>たて</rt></ruby><ruby>収縮<rt>しゅうしゅく</rt></ruby>)に<ruby>対<rt>たい</rt></ruby>する<ruby>対応<rt>たいおう</rt></ruby>は、<ruby>収縮<rt>しゅうしゅく</rt></ruby>する<ruby>量<rt>りょう</rt></ruby>を<ruby>見込<rt>みこ</rt></ruby>み、<ruby>見込<rt>みこ</rt></ruby>み<ruby>収縮<rt>しゅうしゅく</rt></ruby><ruby>量<rt>りょう</rt></ruby>を<ruby>設計<rt>せっけい</rt></ruby><ruby>寸法<rt>すんぽう</rt></ruby>に<ruby>加<rt>くわ</rt></ruby>えて<ruby>製作<rt>せいさく</rt></ruby>し、<ruby>最終的<rt>さいしゅうてき</rt></ruby>に<ruby>設計<rt>せっけい</rt></ruby><ruby>寸法<rt>すんぽう</rt></ruby>に<ruby>納<rt>おさ</rt></ruby>める<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>することが<ruby>一般的<rt>いっぱんてき</rt></ruby>である。", textMY: "Longitudinal Shrinkage (縦収縮) ကို ဖြေရှင်းရန်အတွက် ကျုံ့ဝင်မည့် ပမာဏကို ကြိုတင် ခန့်မှန်းပြီး၊ ဒီဇိုင်း အရွယ်အစားတွင် ထပ်ပေါင်းကာ ထုတ်လုပ်ခြင်းဖြင့် နောက်ဆုံး ဒီဇိုင်းအတိုင်း ရရှိစေရန် လုပ်ဆောင်ခြင်းသည် အများအားဖြင့် လုပ်ဆောင်သည်။" },
        { id: 2, textJP: "(2) <ruby>薄板<rt>うすいた</rt></ruby>の<ruby>座屈<rt>ざくつ</rt></ruby><ruby>変形<rt>へんけい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>対応<rt>たいおう</rt></ruby>は、<ruby>溶接<rt>ようせつ</rt></ruby>する<ruby>工程<rt>こうてい</rt></ruby><ruby>段階<rt>だんかい</rt></ruby>においては、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>量<rt>りょう</rt></ruby>の", textMY: "ပါးလွှာသော Plate နေရာများတွင် Buckling Deformation ကို ဖြေရှင်းရန် ဂဟေဆော်ခြင်း အဆင့်တွင် Weld Volume ကို ကန့်သတ်ခြင်း၊ သင့်လျော်သော ဂဟေဆက်ခြင်း အစီအစဉ်ကို ရွေးချယ်ခြင်းသည် အရေးကြီးသည်။" },
        { id: 3, textJP: "(3) <ruby>縦<rt>たて</rt></ruby><ruby>曲<rt>ま</rt></ruby>げ<ruby>変形<rt>へんけい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>対応<rt>たいおう</rt></ruby>は、<ruby>可能<rt>かのう</rt></ruby>な<ruby>限<rt>かぎ</rt></ruby>り<ruby>対称<rt>たいしょう</rt></ruby>に<ruby>配置<rt>はいち</rt></ruby>した<ruby>溶接線<rt>ようせつせん</rt></ruby>に<ruby>同時<rt>どうじ</rt></ruby>に<ruby>溶接<rt>ようせつ</rt></ruby>することが<ruby>基本<rt>きほん</rt></ruby>である。", textMY: "Longitudinal Bending (縦曲げ変形) ကို ဖြေရှင်းရန် တတ်နိုင်သမျှ ညီမျှသော နေရာများတွင် တစ်ပြိုင်နက်တည်း ဂဟေဆက်ခြင်းသည် အခြေခံဖြစ်သည်။" },
        { id: 4, textJP: "(4) <ruby>角<rt>かく</rt></ruby><ruby>変形<rt>へんけい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>対応<rt>たいおう</rt></ruby>は、<ruby>角<rt>かく</rt></ruby><ruby>変形<rt>へんけい</rt></ruby>の<ruby>角度<rt>かくど</rt></ruby>を<ruby>見込<rt>みこ</rt></ruby>み、<ruby>溶接<rt>ようせつ</rt></ruby><ruby>前<rt>まえ</rt></ruby>に<ruby>角<rt>かく</rt></ruby><ruby>変形<rt>へんけい</rt></ruby>する<ruby>方向<rt>ほうこう</rt></ruby>と<ruby>反対<rt>はんたい</rt></ruby><ruby>方向<rt>ほうこう</rt></ruby>に<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>変形<rt>へんけい</rt></ruby>させる<ruby>逆<rt>ぎゃく</rt></ruby>ひずみ<ruby>法<rt>ほう</rt></ruby>、<ruby>治具<rt>じぐ</rt></ruby>や<ruby>装置<rt>そうち</rt></ruby>によって<ruby>拘束<rt>こうそく</rt></ruby>する<ruby>方<rt>かた</rt></ruby>", textMY: "Angle Deformation (角変形) ကို ဖြေရှင်းရန်အတွက် ကနဦးတွင် ပြောင်းလဲမည့် ထောင့်နှင့် ဆန့်ကျင်ဘက်သို့ ပုံစံပြောင်းလဲထားခြင်း (Presetting)၊ Fixtures (治具) သို့မဟုတ် ချုပ်ကိုင်ခြင်း (Restraint) နှင့် Double-sided Welding များ အသုံးပြုခြင်း။" },
        { id: 5, textJP: "(5) <ruby>回転<rt>かいてん</rt></ruby><ruby>変形<rt>へんけい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>対応<rt>たいおう</rt></ruby>は、<ruby>回転<rt>かいてん</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさに<ruby>対<rt>おう</rt></ruby>じてサイズと<ruby>長<rt>なが</rt></ruby>さの<ruby>組<rt>く</rt></ruby>み<ruby>立<rt>た</rt></ruby>て<ruby>溶接<rt>ようせつ</rt></ruby>の<ruby>配置<rt>はいち</rt></ruby>、ルート<ruby>間隔<rt>かんかく</rt></ruby>を<ruby>拘束<rt>こうそく</rt></ruby>するための<ruby>裏<rt>うら</rt></ruby><ruby>当<rt>あ</rt></ruby>て<ruby>金<rt>がね</rt></ruby>の<ruby>取付<rt>とりつけ</rt></ruby>、<ruby>強力<rt>きょうりょく</rt></ruby>な<ruby>拘束<rt>こうそく</rt></ruby><ruby>治具<rt>じぐ</rt></ruby>を<ruby>利<rt>り</rt></ruby>", textMY: "Torsion Deformation (回転変形) ကို ဖြေရှင်းရန် သင့်လျော်သော ယာယီ ဂဟေဆက်ခြင်း အရှည်/အရွယ်အစား၊ Root Gap ကို ချုပ်ကိုင်ရန် Backing Metal တပ်ဆင်ခြင်းနှင့် Strong Fixtures များ အသုံးပြုခြင်း။" }
    ],
    correctOptionId: 1,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (1) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: 縦収縮 (Longitudinal Shrinkage) သည် ပမာဏ အလွန်နည်းပြီး မတည်ငြိမ်သောကြောင့် ၎င်းကို ကြိုတင် ခန့်မှန်း၍ ပြင်ဆင်ခြင်း (見込み修正) သည် လက်တွေ့တွင် အသုံးနည်းပြီး ခက်ခဲသော နည်းလမ်း ဖြစ်သည်။ ကြိုတင်ပုံစံပြောင်းခြင်းကို အဓိကအားဖြင့် Angle Deformation (角変形) သို့မဟုတ် Transverse Shrinkage (横収縮) အတွက်သာ အသုံးပြုသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: 縦収縮 (Longitudinal Shrinkage) は 見込み修正 (Pre-compensation) が 難しい (Difficult)။"
    }
  },
  {
    id: "2-55",
    questionJP: "<ruby>溶融<rt>ようゆう</rt></ruby><ruby>亜鉛<rt>あえん</rt></ruby>めっきを<ruby>施<rt>ほどこ</rt></ruby>す<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>の a~e のうち、<ruby>不適当<rt>ふてきとう</rt></ruby>なものの<ruby>組合<rt>くみあわ</rt></ruby>せはどれか。",
    questionMY: "(Hot-Dip Galvanizing (溶融亜鉛めっき) ပြုလုပ်သော ပစ္စည်းများဆိုင်ရာ အောက်ပါ အချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့် အစုအဝေးကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "a, b", textMY: "a နှင့် b" },
        { id: 2, textJP: "b, c", textMY: "b နှင့် c" },
        { id: 3, textJP: "c, d", textMY: "c နှင့် d" },
        { id: 4, textJP: "d, e", textMY: "d နှင့် e" },
        { id: 5, textJP: "c, e", textMY: "c နှင့် e" }
    ],
    correctOptionId: 5,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (5) c, e ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "c (မှား): Slag နှင့် Spatter များကို Acid Cleaning (酸洗) ဖြင့် မဖယ်ရှားနိုင်ပါ။ ၎င်းတို့ကို Blast သို့မဟုတ် Grinding ဖြင့် ကြိုတင် ဖယ်ရှားပြီးမှသာ Galvanizing ပြုလုပ်ရမည်။\ne (မှား): Column-Beam Joint ရှိ Full Penetration Welds များသည် ဖွဲ့စည်းပုံအရ အရေးကြီးသောကြောင့် အရည်အသွေး ပိုမိုမြင့်မားစေရန် Double-sided Welding (裏はつりを行う両面溶接) ကို ပြုလုပ်ရန် ပို၍ ဦးစားပေးသည်။ Single-sided Welding သည် မူအရ မဟုတ်ပါ။\nb (မှတ်ချက်): Plate အထူ ကွာခြားချက်သည် များသောအားဖြင့် ၁.၅ ဆ အောက် ကန့်သတ်ထားပြီး၊ ၂ ဆ မဟုတ်ပါ။ (c နှင့် e တို့သည် ပိုမို ကြီးမားသော နည်းပညာဆိုင်ရာ အမှားများ ဖြစ်သည်)။",
        memoryTipMY: ""
    }
  },
    {
    id: "2-56",
    questionJP: "<ruby>溶融<rt>ようゆう</rt></ruby><ruby>亜鉛<rt>あえん</rt></ruby>めっき<ruby>工法<rt>こうほう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(Hot-Dip Galvanizing (溶融亜鉛めっき) လုပ်ငန်းစဉ်ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) <ruby>建築<rt>けんちく</rt></ruby><ruby>鉄骨<rt>てっこつ</rt></ruby>の<ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>仕様<rt>しよう</rt></ruby>は HDZ 55 であり、これは1m²あたり 55g <ruby>以上<rt>いじょう</rt></ruby>のめっき<ruby>付着<rt>ふちゃく</rt></ruby><ruby>量<rt>りょう</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>している。", textMY: "ဆောက်လုပ်ရေး သံမဏိ၏ အများအားဖြင့် သတ်မှတ်ချက်သည် HDZ 55 ဖြစ်ပြီး၊ ၎င်းသည် ၁ m² တွင် ၅၅ g နှင့်အထက် Coating ပမာဏကို ဖော်ပြသည်။" },
        { id: 2, textJP: "(2) <ruby>柱<rt>はしら</rt></ruby><ruby>梁<rt>はり</rt></ruby><ruby>接合部<rt>せつごうぶ</rt></ruby>の<ruby>完全<rt>かんぜん</rt></ruby><ruby>溶<rt>と</rt></ruby>け<ruby>込<rt>こ</rt></ruby>み<ruby>溶接<rt>ようせつ</rt></ruby>について、「JASS 6」では、<ruby>裏<rt>うら</rt></ruby>はつりを<ruby>併用<rt>へいよう</rt></ruby>した<ruby>両面<rt>りょうめん</rt></ruby><ruby>溶接<rt>ようせつ</rt></ruby>で<ruby>施工<rt>せこう</rt></ruby>することを<ruby>規定<rt>きてい</rt></ruby>している。", textMY: "Column-Beam Joint ၏ Full Penetration Weld ကို JASS 6 တွင် Back Gouging ဖြင့် Double-sided Welding ပြုလုပ်ရန် သတ်မှတ်ထားသည်။" },
        { id: 3, textJP: "(3) <ruby>良好<rt>りょうこう</rt></ruby>な<ruby>溶接<rt>ようせつ</rt></ruby><ruby>外観<rt>がいかん</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>し、<ruby>仕上<rt>しあ</rt></ruby>げ<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>容易<rt>ようい</rt></ruby>にするために、<ruby>溶接<rt>ようせつ</rt></ruby>はフラックス<ruby>入<rt>い</rt></ruby>りワイヤを<ruby>用<rt>もち</rt></ruby>いたガスシールドアーク<ruby>溶接<rt>ようせつ</rt></ruby>を<ruby>適用<rt>てきよう</rt></ruby>することが<ruby>望<rt>のぞ</rt></ruby>ましい。", textMY: "ကောင်းမွန်သော Weld Appearance ရရှိစေရန်နှင့် Finishing လုပ်ငန်း လွယ်ကူစေရန်အတွက် Flux Cored Wire ကို အသုံးပြုသော Gas Shielded Arc Welding ဖြင့် ဂဟေဆော်ခြင်းသည် အကောင်းဆုံးဖြစ်သည်။" },
        { id: 4, textJP: "(4) めっき<ruby>前<rt>まえ</rt></ruby>およびめっき<ruby>後<rt>ご</rt></ruby>の<ruby>矯正<rt>きょうせい</rt></ruby>は、プレス、ローラーなどを<ruby>用<rt>もち</rt></ruby>いた<ruby>常温<rt>じょうおん</rt></ruby>での<ruby>加圧<rt>かあつ</rt></ruby><ruby>矯正<rt>きょうせい</rt></ruby>を<ruby>基本<rt>きほん</rt></ruby>とする。", textMY: "Galvanizing မလုပ်မီနှင့် ပြီးနောက် ပြုပြင်ခြင်းကို Press, Roller များကို အသုံးပြု၍ အခန်းအပူချိန်တွင် ဖိအားဖြင့် ပြုလုပ်ခြင်းသည် အခြေခံဖြစ်သည်။" },
        { id: 5, textJP: "(5) めっき<ruby>後<rt>ご</rt></ruby>の<ruby>寸法<rt>すんぽう</rt></ruby><ruby>精度<rt>せいど</rt></ruby><ruby>検査<rt>けんさ</rt></ruby>は、<ruby>梁<rt>はり</rt></ruby>の<ruby>曲<rt>ま</rt></ruby>がり、<ruby>柱<rt>はしら</rt></ruby>の<ruby>曲<rt>ま</rt></ruby>がり、ウェブの<ruby>曲<rt>ま</rt></ruby>がりを<ruby>対象<rt>たいしょう</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う。", textMY: "Galvanizing ပြီးနောက် အရွယ်အစား တိကျမှု စစ်ဆေးခြင်းကို Beam Curvature, Column Curvature နှင့် Web Curvature တို့ကို စစ်ဆေးသည်။" }
    ],
    correctOptionId: 1,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (1) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: HDZ 55 တွင် “55” ဆိုသည်မှာ ၅၅၀ g/m² (၅၅၀ ဂရမ် per စတုရန်းမီတာ) သို့မဟုတ် ပျမ်းမျှ အထူ ၇၇ μm နှင့်အထက် ကို ဆိုလိုသည်။ ၅၅ g/m² သည် မှားယွင်းသော တန်ဖိုးဖြစ်သည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: HDZ 55 は 550g/m² (၅၅၀ g/m²) ဖြစ်သည်။"
    }
  },
  {
    id: "2-57",
    questionJP: "<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(မျက်နှာပြင် ပြင်ဆင်ခြင်း (素地調整 - Surface Preparation) ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) <ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>は、さび・<ruby>黒皮<rt>くろかわ</rt></ruby>・<ruby>油<rt>あぶら</rt></ruby>・<ruby>汚<rt>よご</rt></ruby>れなどの<ruby>塗装面<rt>とそうめん</rt></ruby>の<ruby>有害<rt>ゆうがい</rt></ruby>な<ruby>付着物<rt>ふちゃくぶつ</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>し、<ruby>表面<rt>ひょうめん</rt></ruby>に<ruby>粗<rt>あら</rt></ruby>さを<ruby>与<rt>あた</rt></ruby>えて、<ruby>塗料<rt>とりょう</rt></ruby>の<ruby>付着<rt>ふちゃく</rt></ruby><ruby>性<rt>せい</rt></ruby>を<ruby>向上<rt>こうじょう</rt></ruby>させる<ruby>工程<rt>こうてい</rt></ruby>である。", textMY: "表面処理 သည် သံချေး၊ Black Scale, ဆီ, အညစ်အကြေးများကို ဖယ်ရှားပြီး မျက်နှာပြင်ကို ကြမ်းတမ်းစေကာ ဆေး၏ တွယ်ကပ်မှုအားကို မြှင့်တင်ပေးသည်။" },
        { id: 2, textJP: "(2) <ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>は、「JASS 6」において 2 <ruby>種類<rt>しゅるい</rt></ruby>の<ruby>種別<rt>しゅべつ</rt></ruby>が<ruby>定<rt>さだ</rt></ruby>められており、2 <ruby>種<rt>しゅ</rt></ruby>は<ruby>鉄骨<rt>てっこつ</rt></ruby>が<ruby>屋外<rt>おくがい</rt></ruby>に<ruby>露出<rt>ろしゅつ</rt></ruby>し、<ruby>塗膜<rt>とまく</rt></ruby>に<ruby>長期<rt>ちょうき</rt></ruby>の<ruby>耐久性<rt>たいきゅうせい</rt></ruby>を<ruby>要求<rt>ようきゅう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>される。", textMY: "素地調整 ကို JASS 6 တွင် ၂ မျိုး ခွဲခြား သတ်မှတ်ထားပြီး၊ Type 2 သည် သံမဏိ ဖွဲ့စည်းပုံကို အပြင်ဘက်တွင် ထားရှိပြီး ဆေးသားကို ရေရှည် ခံနိုင်ရည် လိုအပ်သည့်အခါ အသုံးပြုသည်။" },
        { id: 3, textJP: "(3) 「JASS 6」では、<ruby>特記<rt>とっき</rt></ruby>で<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>が<ruby>指定<rt>してい</rt></ruby>されていない<ruby>場合<rt>ばあい</rt></ruby>の<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>は 2 <ruby>種<rt>しゅ</rt></ruby>とする。", textMY: "JASS 6 တွင် အထူးသတ်မှတ်ချက်မရှိပါက Surface Preparation ကို Type 2 ဖြင့် ပြုလုပ်ရမည်။" },
        { id: 4, textJP: "(4) ブラスト<ruby>法<rt>ほう</rt></ruby>は、<ruby>研削<rt>けんさく</rt></ruby><ruby>材<rt>ざい</rt></ruby>を<ruby>圧縮<rt>あっしゅく</rt></ruby><ruby>空気<rt>くうき</rt></ruby>に<ruby>混<rt>ま</rt></ruby>ぜて<ruby>吹<rt>ふ</rt></ruby>きつけ、さびや<ruby>黒皮<rt>くろかわ</rt></ruby>およびその<ruby>他<rt>た</rt></ruby>の<ruby>異物<rt>いぶつ</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>するものであり、<ruby>研削<rt>けんさく</rt></ruby><ruby>材<rt>ざい</rt></ruby>には<ruby>鋼<rt>はがね</rt></ruby>を<ruby>砕<rt>くだ</rt></ruby>いたグリット、<ruby>球状<rt>きゅうじょう</rt></ruby>のショットなどの<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "Blasting သည် Grinding Material ကို လေနှင့် ရော၍ မှုတ်ထုတ်ပြီး သံချေး၊ Black Scale များကို ဖယ်ရှားသည်။ Grinding Material တွင် Grit နှင့် Shot တို့ ပါဝင်သည်။" },
        { id: 5, textJP: "(5) <ruby>塗膜<rt>とまく</rt></ruby>の<ruby>耐久性<rt>たいきゅうせい</rt></ruby>は<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>の<ruby>良否<rt>りょうひ</rt></ruby>によって<ruby>左右<rt>さゆう</rt></ruby>され、<ruby>塗膜<rt>とまく</rt></ruby>の<ruby>耐久性<rt>たいきゅうせい</rt></ruby>におよぼす<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>の<ruby>寄与<rt>きよ</rt></ruby><ruby>率<rt>りつ</rt></ruby>は<ruby>約<rt>やく</rt></ruby> 50% ともいわれる。", textMY: "ဆေးသား၏ ကြာရှည်ခံမှုသည် 表面処理 ၏ အရည်အသွေးပေါ်မူတည်ပြီး၊ 表面処理 ၏ ပံ့ပိုးမှုနှုန်းမှာ ၅၀% ခန့် ရှိသည်ဟု ဆိုသည်။" }
    ],
    correctOptionId: 2,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (2) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: JASS 6 တွင် 素地調整 (Surface Preparation) နည်းလမ်းကို Blast Cleaning ပြုလုပ်ပါက ၃ မျိုး (SA 2 1/2, SA 2, SA 1) ခွဲခြားထားသည်။ ၂ မျိုးဟု ကန့်သတ်ပြောဆိုခြင်းသည် မှားယွင်းသည်။ (သို့မဟုတ်: JASS 6 တွင် Blast Cleaning ကို SA 2 1/2 သို့မဟုတ် SA 2 ဖြင့် အဓိက သတ်မှတ်သော်လည်း၊ ၎င်းအမျိုးအစား ခွဲခြားမှုသည် ၂ မျိုး မဟုတ်ပါ။)",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: 素地調整の種別 (Type) は 2 種類ではない (Not 2 types)။"
    }
  },
  {
    id: "2-58",
    questionJP: "<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>におけるブラスト<ruby>処理<rt>しょり</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(မျက်နှာပြင်ပြင်ဆင်မှု (Surface Preparation) တွင် Blast Treatment ပြုလုပ်ခြင်းဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) ブラスト<ruby>処理<rt>しょり</rt></ruby>は、「JASS 6」における 1 <ruby>種<rt>しゅ</rt></ruby> B の<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>の<ruby>種別<rt>しゅべつ</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>する。", textMY: "Blast Treatment ကို JASS 6 ရှိ Surface Preparation အမျိုးအစား ၁ B တွင် အသုံးပြုသည်။" },
        { id: 2, textJP: "(2) ブラスト<ruby>処理<rt>しょり</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>する<ruby>研削<rt>けんさく</rt></ruby><ruby>材<rt>ざい</rt></ruby>には、グリット、ショットなどの<ruby>種類<rt>しゅるい</rt></ruby>がある。", textMY: "Blast Treatment တွင် အသုံးပြုသော ပွတ်တိုက်ပစ္စည်းများ (Abrasives) တွင် Grit နှင့် Shot အမျိုးအစားများ ရှိသည်။" },
        { id: 3, textJP: "(3) ブラスト<ruby>処理<rt>しょり</rt></ruby>した<ruby>鋼<rt>はがね</rt></ruby>の<ruby>表面<rt>ひょうめん</rt></ruby>は、<ruby>塗料<rt>とりょう</rt></ruby>の<ruby>付着<rt>ふちゃく</rt></ruby>と<ruby>塗膜<rt>とまく</rt></ruby>の<ruby>均一<rt>きんいつ</rt></ruby><ruby>性<rt>せい</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>するため、<ruby>粗<rt>あら</rt></ruby>さ 50~70μmRz <ruby>程度<rt>ていど</rt></ruby>とする。", textMY: "Blast လုပ်ထားသော သံမဏိမျက်နှာပြင်သည် ဆေးသား ကပ်တွယ်မှုနှင့် ညီညာမှုကို သေချာစေရန်အတွက် ကြမ်းတမ်းမှု (Roughness) ကို ၅၀ မှ ၇၀ μmRz ခန့် ရှိရမည်။" },
        { id: 4, textJP: "(4) ブラスト<ruby>処理<rt>しょり</rt></ruby>した<ruby>直後<rt>ちょくご</rt></ruby>の<ruby>鋼<rt>はがね</rt></ruby>の<ruby>表面<rt>ひょうめん</rt></ruby>は<ruby>活性化<rt>かっせいか</rt></ruby>しているので、<ruby>塗装<rt>とそう</rt></ruby>は 3~4 <ruby>時間<rt>じかん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby><ruby>経過<rt>けいか</rt></ruby><ruby>後<rt>ご</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>う。", textMY: "Blast Treatment လုပ်ပြီးပြီးချင်း သံမဏိမျက်နှာပြင်သည် ဓာတ်တုံ့ပြန်မှု မြန်နေသည့်အတွက် (Activated) ဖြစ်နေသောကြောင့် ဆေးသုတ်ခြင်းကို ၃-၄ နာရီနှင့်အထက် ကြာမှ လုပ်ဆောင်ရမည်။" },
        { id: 5, textJP: "(5) ブラスト<ruby>処理<rt>しょり</rt></ruby>は、<ruby>鉄骨<rt>てっこつ</rt></ruby>が<ruby>屋外<rt>おくがい</rt></ruby>に<ruby>露出<rt>ろしゅつ</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>など、<ruby>塗膜<rt>とまく</rt></ruby>に<ruby>長期<rt>ちょうき</rt></ruby>の<ruby>耐久性<rt>たいきゅうせい</rt></ruby>を<ruby>要求<rt>ようきゅう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>される。", textMY: "Blast Treatment ကို သံမဏိသည် အပြင်ဘက်တွင် ထိတွေ့နေရပြီး ဆေးသားကို ရေရှည်ခံစေရန် လိုအပ်သည့် အခြေအနေမျိုးတွင် အသုံးပြုသည်။" }
    ],
    correctOptionId: 4,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (4) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Blast လုပ်ထားသော သံမဏိမျက်နှာပြင်သည် ဓာတ်တုံ့ပြန်မှု မြင့်မားပြီး သံချေးတက်ရန် အလွန်လွယ်ကူသည် (酸化しやすい)။ ထို့ကြောင့် အရည်အသွေး ထိန်းသိမ်းရန်အတွက် ဖြစ်နိုင်သမျှ အမြန်ဆုံး (ဥပမာ- JASS 6 တွင် ကန့်သတ်ထားသော တိုတောင်းသည့် အချိန်အတွင်း) ဆေးသုတ်ရမည်။ ၃-၄ နာရီ ကြာမှ လုပ်ဆောင်ရန် ညွှန်ကြားခြင်းသည် အမှားအယွင်းကို အားပေးခြင်း ဖြစ်သည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Blast ပြီးရင် ချက်ချင်း Paint ပါ (Activate ဖြစ်နေပြီး သံချေးတက်လွယ်လို့)။"
    }
  },
  {
    id: "2-59",
    questionJP: "<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(မျက်နှာပြင် ပြင်ဆင်ခြင်း (Surface Preparation) ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) <ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>は、さび、<ruby>黒皮<rt>くろかわ</rt></ruby>、<ruby>水分<rt>すいぶん</rt></ruby>、<ruby>油分<rt>ゆぶん</rt></ruby>、<ruby>汚<rt>よご</rt></ruby>れなどの<ruby>有害<rt>ゆうがい</rt></ruby>な<ruby>付着物<rt>ふちゃくぶつ</rt></ruby>を<ruby>除去<rt>じょきょ</rt></ruby>し、<ruby>加<rt>くわ</rt></ruby>えて<ruby>表面<rt>ひょうめん</rt></ruby>に<ruby>粗<rt>あら</rt></ruby>さを<ruby>与<rt>あた</rt></ruby>えるための<ruby>作業<rt>さぎょう</rt></ruby>である。", textMY: "Surface Preparation ဆိုသည်မှာ သံချေး၊ အညှိ (Mill scale)၊ စိုထိုင်းဆ၊ ဆီ၊ အညစ်အကြေး စသည်တို့ကို ဖယ်ရှားပြီး မျက်နှာပြင်ကို ကြမ်းတမ်းမှုပေးသည့် လုပ်ငန်းစဉ် ဖြစ်သည်။" },
        { id: 2, textJP: "(2) <ruby>設計<rt>せっけい</rt></ruby><ruby>図書<rt>としょ</rt></ruby>に<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>の<ruby>特記<rt>とっき</rt></ruby>がない<ruby>場合<rt>ばあい</rt></ruby>には、「JASS 6」における 2 <ruby>種<rt>しゅ</rt></ruby>の<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>とする。", textMY: "ဒီဇိုင်းစာရွက်စာတမ်းတွင် Surface Preparation ကို အထူးသတ်မှတ်ချက် မရှိပါက JASS 6 ရှိ အမျိုးအစား ၂ (Type 2) ကို သုံးရမည်။" },
        { id: 3, textJP: "(3) ブラストした<ruby>鋼材<rt>こうざい</rt></ruby>の<ruby>粗<rt>あら</rt></ruby>さは、50~70μmRz <ruby>程度<rt>ていど</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>に<ruby>収<rt>おさ</rt></ruby>める。", textMY: "Blast လုပ်ထားသော သံမဏိ၏ ကြမ်းတမ်းမှု (Roughness) သည် ၅၀ မှ ၇၀ μmRz ခန့်အတွင်း ရှိရမည်။" },
        { id: 4, textJP: "(4) <ruby>塗膜<rt>とまく</rt></ruby>の<ruby>耐久性<rt>たいきゅうせい</rt></ruby>は、<ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby>の<ruby>良否<rt>りょうひ</rt></ruby>によって<ruby>左右<rt>さゆう</rt></ruby>される。", textMY: "ဆေးသား၏ ခံနိုင်ရည်သည် Surface Preparation အရည်အသွေး ကောင်း/မကောင်းပေါ် မူတည်သည်။" },
        { id: 5, textJP: "(5) <ruby>素地<rt>そじ</rt></ruby><ruby>調整<rt>ちょうせい</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>鋼材<rt>こうざい</rt></ruby><ruby>面<rt>めん</rt></ruby>は<ruby>活性化<rt>かっせいか</rt></ruby>しているので、24 <ruby>時間<rt>じかん</rt></ruby><ruby>以内<rt>いない</rt></ruby>に<ruby>塗装<rt>とそう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。", textMY: "Surface Preparation လုပ်ပြီးသော သံမဏိမျက်နှာပြင်သည် ဓာတ်တုံ့ပြန်မှု မြန်နေသည့်အတွက် ၂၄ နာရီအတွင်း ဆေးသုတ်ခြင်း ပြုလုပ်ရမည်။" }
    ],
    correctOptionId: 5,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (5) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: Blast လုပ်ပြီးနောက် ဆေးသုတ်ခြင်းကို ၂၄ နာရီအတွင်း လုပ်ဆောင်ခြင်းသည် မှန်ကန်သော လုပ်ထုံးလုပ်နည်း ဖြစ်သည်။ သို့သော် ဤမေးခွန်း၏ အဖြေ (5) ကို ရွေးချယ်ထားခြင်းသည် ၂၄ နာရီ ဟု သတ်မှတ်ထားသော အချိန်သည် ပတ်ဝန်းကျင် အခြေအနေ သို့မဟုတ် ဆေးအမျိုးအစားအရ လွန်ကဲသော အချိန် (Too Long) ဖြစ်နေခြင်းကို ဆိုလိုနိုင်သည်။ အများအားဖြင့် JASS 6 တွင် အမြန်ဆုံး ဆေးသုတ်ရန် လိုအပ်ပြီး၊ ၂၄ နာရီသည် အခြေအနေပေါ် မူတည်၍ နောက်ဆုံး ကန့်သတ်ချက် (Maximum Limit) ဖြစ်နိုင်သောကြောင့် ဤဖော်ပြချက်သည် တင်းကျပ်မှု မရှိဟု ယူဆနိုင်သည်။ (သို့မဟုတ်) ရင်းမြစ်စာရွက်၏ မှတ်ချက်သည် အခြားရွေးချယ်စရာများ မှန်ကန်ကြောင်း အတည်ပြုရန်သာ ဖြစ်နိုင်ပါသည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: Blast ပြီးနောက် ဆေးသုတ်ရန် ကန့်သတ်ထားသော 24 နာရီ သည် အမြဲတမ်း မှန်ကန်သည့် အချိန်မဟုတ်ဘဲ၊ ချက်ချင်း လုပ်ဆောင်ရန် အကောင်းဆုံးဖြစ်သည်။"
    }
  },
  {
    id: "2-60",
    questionJP: "<ruby>輸送<rt>ゆそう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>次<rt>つぎ</rt></ruby>の<ruby>記述<rt>きじゅつ</rt></ruby>のうち、<ruby>最<rt>もっと</rt></ruby>も<ruby>不適当<rt>ふてきとう</rt></ruby>なものはどれか。",
    questionMY: "(သယ်ယူပို့ဆောင်ရေး (Transportation) ဆိုင်ရာ အောက်ပါဖော်ပြချက်များအနက် အသင့်လျော်ဆုံးမဟုတ်သည့်အချက်ကို ရွေးချယ်ပါ)",
    options: [
        { id: 1, textJP: "(1) トラックやトレーラーで<ruby>陸上<rt>りくじょう</rt></ruby><ruby>輸送<rt>ゆそう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>、<ruby>部材<rt>ぶざい</rt></ruby>の<ruby>寸法<rt>すんぽう</rt></ruby>(<ruby>長<rt>なが</rt></ruby>さ、<ruby>幅<rt>はば</rt></ruby>、<ruby>高<rt>たか</rt></ruby>さの<ruby>最大<rt>さいだい</rt></ruby><ruby>寸法<rt>すんぽう</rt></ruby>)、<ruby>重量<rt>じゅうりょう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>して<ruby>工作図<rt>こうさくず</rt></ruby><ruby>作成<rt>さくせい</rt></ruby><ruby>段階<rt>だんかい</rt></ruby>での<ruby>検討<rt>けんとう</rt></ruby>・<ruby>計画<rt>けいかく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。", textMY: "Truck သို့မဟုတ် Trailer ဖြင့် ကုန်းကြောင်း သယ်ယူပို့ဆောင်ရေး လုပ်ဆောင်ပါက၊ ပစ္စည်း၏ အရွယ်အစား (အရှည်၊ အနံ၊ အမြင့်) နှင့် အလေးချိန်တို့ကို စက်ရုံထုတ်လုပ်မှု ပုံစံရေးဆွဲသည့် အဆင့်မှ စတင် စီစဉ်ရန် လိုအပ်သည်။" },
        { id: 2, textJP: "(2) <ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>形状<rt>けいじょう</rt></ruby>で、<ruby>非対称<rt>ひたいしょう</rt></ruby>な<ruby>部材<rt>ぶざい</rt></ruby>については、<ruby>重心<rt>じゅうしん</rt></ruby><ruby>位置<rt>いち</rt></ruby>を<ruby>部材<rt>ぶざい</rt></ruby>に<ruby>表示<rt>ひょうじ</rt></ruby>する。", textMY: "ရှုပ်ထွေးသော ပုံသဏ္ဍာန်နှင့် ညီမျှမှုမရှိသော အစိတ်အပိုင်းများအတွက် အလေးဗဟို (Center of Gravity) နေရာကို ပစ္စည်းပေါ်တွင် ပြသရမည်။" },
        { id: 3, textJP: "(3) <ruby>積込<rt>つみこ</rt></ruby>み<ruby>作業<rt>さぎょう</rt></ruby>においては、<ruby>鉄骨<rt>てっこつ</rt></ruby><ruby>製品<rt>せいひん</rt></ruby>の<ruby>荷崩<rt>にくず</rt></ruby>れの<ruby>防止<rt>ぼうし</rt></ruby>を<ruby>最<rt>さい</rt></ruby><ruby>優先<rt>ゆうせん</rt></ruby>とし、<ruby>当<rt>あ</rt></ruby>て<ruby>木<rt>ぎ</rt></ruby>は<ruby>使用<rt>しよう</rt></ruby>してはならない。", textMY: "ပစ္စည်းတင်ခြင်းတွင် ပစ္စည်းများ ပြုတ်ကျပျက်စီးခြင်းကို ကာကွယ်ရန် အဓိကထားပြီး၊ ခံပစ္စည်း (Dunnage/当て木) ကို အသုံးပြုခြင်း မပြုရ။" },
        { id: 4, textJP: "(4) <ruby>大型<rt>おおがた</rt></ruby><ruby>車両<rt>しゃりょう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>規制<rt>きせい</rt></ruby>には、<ruby>通行<rt>つうこう</rt></ruby>の<ruby>制限<rt>せいげん</rt></ruby>と<ruby>積載<rt>せきさい</rt></ruby>の<ruby>制限<rt>せいげん</rt></ruby>がある。", textMY: "ယာဉ်ကြီးများအတွက် စည်းမျဉ်းများတွင် သွားလာခွင့် ကန့်သတ်ချက်နှင့် တင်ဆောင်နိုင်မှု ကန့်သတ်ချက်များ ပါဝင်သည်။" },
        { id: 5, textJP: "(5) <ruby>輸送<rt>ゆそう</rt></ruby><ruby>要領<rt>ようりょう</rt></ruby>は<ruby>製作<rt>せいさく</rt></ruby><ruby>要領書<rt>ようりょうしょ</rt></ruby>に<ruby>記載<rt>きさい</rt></ruby>し、<ruby>施工者<rt>せこうしゃ</rt></ruby>の<ruby>承諾<rt>しょうだく</rt></ruby>を<ruby>得<rt>え</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がある。", textMY: "သယ်ယူပို့ဆောင်ရေး လုပ်ထုံးလုပ်နည်းကို ထုတ်လုပ်မှု လမ်းညွှန်ချက် (製作要領書) တွင် မှတ်တမ်းတင်ပြီး တည်ဆောက်သူ၏ သဘောတူညီချက် ရယူရန် လိုအပ်သည်။" }
    ],
    correctOptionId: 3,
    explanation: {
        titleMY: "ဘာကြောင့် အဖြေ (3) ကို ရွေးချယ်ရသလဲ၊ ဘယ်လို မှတ်သားရမလဲ",
        reasonMY: "မှားယွင်းရခြင်း အကြောင်းရင်း: သယ်ယူပို့ဆောင်ရေးတွင် ပစ္စည်းများ မပျက်စီးစေရန်နှင့် ဖွဲ့စည်းပုံများ ခိုင်မာစေရန်အတွက် သံမဏိပစ္စည်းများကြားတွင် ခံပစ္စည်း (当て木/Dunnage) ကို မဖြစ်မနေ အသုံးပြုရမည်။ \"အသုံးပြုခြင်း မပြုရ\" (使用してはならない) ဟု ဆိုထားခြင်းသည် အန္တရာယ်ဖြစ်စေသော ဖော်ပြချက် ဖြစ်သည်။",
        memoryTipMY: "ဘယ်လိုမှတ်ရမလဲ: သယ်ယူပို့ဆောင်ရေးမှာ 当て木 (ခံပစ္စည်း) ကို မဖြစ်မနေ သုံးပါ။"
    }
  }
];
