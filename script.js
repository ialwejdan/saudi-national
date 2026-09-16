const GEOJSON_URL =
  "https://raw.githubusercontent.com/yasseralsamman/saudi-national-address/main/data/dist/regions.geojson";

const PREVIEW_IMAGE = "assets/preview-photo.webp";

function imagePath(region, type) {
  return `assets/images/${region}-${type}.jpg`;
}

function setRegionImage(element, src) {
  if (!element) return;

  element.onerror = () => {
    element.onerror = null;
    element.src = PREVIEW_IMAGE;
  };

  element.src = src;
}


const REGIONS = {
  RD: {
    slug: "riyadh",
    number: "01",
    name: "الرياض",
    accent: "#971a4d",
    base: "#476552",
    heroLine: "هنا تمتد الهمّة.",
    intro: "في قلب نجد، تتقاطع ذاكرة المكان مع إيقاع العاصمة. الرياض مدينة تتسع للماضي والطموح في مشهد واحد، ويظل طويق أحد أكثر ملامحها حضورًا.",
    spiritTitle: "مدينة تحمل همّة المكان",
    spiritText: "روح الرياض مبنية على الثبات والحركة في الوقت نفسه؛ أثر نجدي واضح في العمارة، أفق مفتوح، مدينة تتغير بسرعة، وذاكرة تحفظ شكل المكان رغم التحول.",
    keywords: ["همّة", "امتداد", "طموح"],
    signature: [
      ["جبل طويق", "طبيعة", "امتداد صخري بارز في نجد ارتبط بصريًا بقوة المكان وثباته."],
      ["الدرعية", "إرث", "نسيج تاريخي وعمراني يروي فصلًا أساسيًا من ذاكرة المنطقة."],
      ["قصر المصمك", "تاريخ", "معلم يرتبط بواحد من أشهر الأحداث في تاريخ مدينة الرياض."]
    ],
    witnesses: [
      ["وادي حنيفة", "مشهد طبيعي يمر بقلب المنطقة ويجمع بين البيئة والتاريخ العمراني."],
      ["حي الطريف", "نسيج تاريخي في الدرعية يحمل طبقات من العمارة النجدية والذاكرة السياسية."],
      ["وسط الرياض", "مشهد حضري يعكس التحول السريع للعاصمة مع بقاء جذور المكان."]
    ],
    historyPeriod: "1902",
    historyTitle: "استرداد الرياض",
    historyText: "مثّل استرداد الرياض على يد الملك عبدالعزيز بن عبدالرحمن آل سعود نقطة انطلاق رئيسية في مسيرة توحيد المملكة. ارتبط الحدث بقصر المصمك، وتحول لاحقًا إلى أحد أكثر مواقع المدينة حضورًا في الذاكرة الوطنية.",
    ending: "من الرياض… إلى بقية الحكاية."
  },

  MQ: {
    slug: "makkah",
    number: "02",
    name: "مكة المكرمة",
    accent: "#7c5d21",
    base: "#526349",
    heroLine: "مكانٌ تهفو إليه القلوب.",
    intro: "من قدسية مكة إلى ذاكرة جدة القديمة ومرتفعات الطائف، تجمع المنطقة بين معنى المكان، وحركة البشر، وتنوع المشهد.",
    spiritTitle: "روح تجمع القداسة والحركة",
    spiritText: "في منطقة مكة المكرمة تتغير الصورة من الجبال إلى البحر، ومن الذاكرة الحضرية إلى طرق الحجاج والتجارة. الشخصية هنا متعددة، لكن يجمعها عمق المكان والضيافة والتنوع.",
    keywords: ["قداسة", "ضيافة", "تنوع"],
    signature: [
      ["مكة المكرمة", "مكان", "قلب المنطقة وأكثر مدنها حضورًا في الوجدان الإسلامي."],
      ["جدة التاريخية", "عمران", "نسيج عمراني ارتبط بالبحر والتجارة والحجاج عبر أجيال."],
      ["الطائف", "طبيعة", "مرتفعات ومناخ وهوية زراعية تضيف بعدًا مختلفًا للمنطقة."]
    ],
    witnesses: [
      ["الهدا", "طريق جبلي ومشهد طبيعي يربط الطائف بالسهل الغربي."],
      ["رواشين جدة", "تفاصيل معمارية صنعت جانبًا مميزًا من ذاكرة المدينة الساحلية."],
      ["جبال مكة", "تضاريس تحيط بالمدينة وتمنح المشهد طابعه الخاص."]
    ],
    historyPeriod: "1924",
    historyTitle: "مكة في مسيرة توحيد البلاد",
    historyText: "في عشرينيات القرن العشرين دخلت مكة المكرمة مرحلة جديدة ضمن مسيرة توحيد البلاد تحت حكم الملك عبدالعزيز. ارتبط ذلك بتحولات سياسية وإدارية كبيرة سبقت إعلان المملكة العربية السعودية بصورتها الحديثة.",
    ending: "من مكة المكرمة… إلى بقية الحكاية."
  },

  MN: {
    slug: "madinah",
    number: "03",
    name: "المدينة المنورة",
    accent: "#607c4f",
    base: "#4b6857",
    heroLine: "سكينةٌ تحفظ ذاكرة المكان.",
    intro: "تجمع المنطقة بين قدسية المدينة المنورة، وعمق الواحات، وامتداد التاريخ في العلا، في مشهد هادئ وغني بالطبقات.",
    spiritTitle: "هدوءٌ يحمل تاريخًا طويلًا",
    spiritText: "تتسم المنطقة بإيقاع هادئ وواضح؛ واحات ومسارات قديمة وعمارة تحمل أثر الإنسان والمكان. روحها لا تحتاج إلى مبالغة، فالتاريخ حاضر في التفاصيل.",
    keywords: ["سكينة", "ذاكرة", "امتداد"],
    signature: [
      ["المدينة المنورة", "هوية", "مركز روحي وتاريخي يحمل مكانة خاصة في العالم الإسلامي."],
      ["قباء", "تاريخ", "منطقة مرتبطة ببدايات التاريخ الإسلامي وبالنسيج القديم للمدينة."],
      ["العلا", "إرث", "مشهد يجمع الطبيعة والآثار والطرق القديمة ضمن المنطقة."]
    ],
    witnesses: [
      ["جبل أُحد", "معلم طبيعي وتاريخي حاضر في ذاكرة المدينة."],
      ["واحات العلا", "مشهد زراعي قديم عاش إلى جوار الطرق والقوافل."],
      ["المدينة القديمة", "ذاكرة عمرانية تغيرت مع الزمن وبقيت حاضرة في الروايات والصور."]
    ],
    historyPeriod: "1925",
    historyTitle: "المدينة في مسيرة توحيد البلاد",
    historyText: "شهدت المدينة المنورة في منتصف عشرينيات القرن العشرين انتقالًا سياسيًا مهمًا ضمن مسيرة توحيد البلاد. ومنذ ذلك الوقت واصلت المنطقة تطورها مع الحفاظ على مكانتها الدينية والتاريخية.",
    ending: "من المدينة المنورة… إلى بقية الحكاية."
  },

  QA: {
    slug: "qassim",
    number: "04",
    name: "القصيم",
    accent: "#5aba1c",
    base: "#5b6d49",
    heroLine: "أرضٌ تعرف معنى العطاء.",
    intro: "بين النخيل والأسواق والبلدات النجدية، تظهر القصيم بهوية متجذرة في الزراعة والتجارة والكرم.",
    spiritTitle: "إيقاع الأرض والنخيل",
    spiritText: "روح القصيم قريبة من الأرض؛ نخيل، مواسم، أسواق، وعمارة نجدية بسيطة وواضحة. التفاصيل هنا تصنع شخصية دافئة تربط الإنسان بما ينتجه المكان.",
    keywords: ["عطاء", "أرض", "أصالة"],
    signature: [
      ["نخيل القصيم", "زراعة", "مشهد زراعي يختصر جانبًا كبيرًا من هوية المنطقة."],
      ["بريدة", "مدينة", "مركز حضري وتجاري ارتبط بالأسواق والمواسم الزراعية."],
      ["عيون الجواء", "إرث", "بلدات ومواقع تحمل أثر الاستقرار النجدي القديم."]
    ],
    witnesses: [
      ["أسواق التمور", "موسم يربط الاقتصاد المحلي بصورة المكان."],
      ["البيوت النجدية", "عمارة طينية ذات إيقاع هندسي واضح."],
      ["المزارع القديمة", "ذاكرة يومية ارتبطت بالماء والنخيل والعمل."]
    ],
    historyPeriod: "1906",
    historyTitle: "روضة مهنا",
    historyText: "شهدت منطقة القصيم في بدايات القرن العشرين أحداثًا مهمة ضمن الصراع على وسط الجزيرة العربية. وتُعد روضة مهنا واحدة من المحطات البارزة في تلك المرحلة التي سبقت اكتمال توحيد المملكة.",
    ending: "من القصيم… إلى بقية الحكاية."
  },

  SQ: {
    slug: "eastern",
    number: "05",
    name: "المنطقة الشرقية",
    accent: "#0050af",
    base: "#3f625c",
    heroLine: "من الواحة إلى الأفق.",
    intro: "ساحل طويل، واحات عريقة، مدن حديثة، وتحولات كبرى؛ الشرقية منطقة تتغير ملامحها دون أن تفقد جذورها.",
    spiritTitle: "بحرٌ وواحة وتحول",
    spiritText: "تتداخل في الشرقية حياة الساحل مع نخيل الأحساء والعمارة التقليدية، ثم يضيف العصر الحديث طبقة أخرى من الصناعة والثقافة والمدن الجديدة.",
    keywords: ["واحة", "ساحل", "تحول"],
    signature: [
      ["واحة الأحساء", "طبيعة", "واحة واسعة شكّلت نمط الحياة والزراعة في شرق المملكة."],
      ["جبل القارة", "جيولوجيا", "تكوين طبيعي مميز مرتبط بمشهد الأحساء."],
      ["إثراء", "ثقافة", "معلم ثقافي معاصر يعكس جانبًا من تحول المنطقة."]
    ],
    witnesses: [
      ["العقير", "ميناء تاريخي ارتبط بالتجارة والحركة البحرية."],
      ["أسواق الأحساء", "نسيج اجتماعي وتجاري حافظ على طابعه المحلي."],
      ["كورنيش الشرقية", "واجهة حديثة تعكس صلة المدن بالبحر."]
    ],
    historyPeriod: "1913",
    historyTitle: "استرداد الأحساء",
    historyText: "شكّل استرداد الأحساء عام 1913 محطة مهمة في مسيرة توحيد البلاد. أعاد الحدث المنطقة إلى الدولة السعودية، وفتح مرحلة جديدة في شرق الجزيرة العربية قبل إعلان المملكة بسنوات.",
    ending: "من الشرقية… إلى بقية الحكاية."
  },

  AS: {
    slug: "asir",
    number: "06",
    name: "عسير",
    accent: "#6565e0",
    base: "#48634a",
    heroLine: "لونٌ يسكن الجبل.",
    intro: "جبال وسحب وقرى ملونة وعمارة ذات شخصية واضحة؛ عسير واحدة من أكثر مناطق المملكة تنوعًا بصريًا.",
    spiritTitle: "طبقات من اللون والارتفاع",
    spiritText: "تتشكل روح عسير من تضاريسها المرتفعة ومن عمارة القرى وزخارف القط العسيري. الطبيعة هنا ليست خلفية، بل جزء مباشر من شكل الحياة والثقافة.",
    keywords: ["جبل", "لون", "تراث"],
    signature: [
      ["رجال ألمع", "عمران", "قرية تاريخية ذات عمارة حجرية مميزة."],
      ["السودة", "طبيعة", "مرتفعات وغابات تمنح المنطقة أحد أكثر مشاهدها شهرة."],
      ["القط العسيري", "فن", "لغة بصرية محلية مرتبطة بالبيوت والحياة اليومية."]
    ],
    witnesses: [
      ["بيوت عسير", "أحجار وألوان وتفاصيل تتفاعل مع البيئة الجبلية."],
      ["المدرجات", "تكوين زراعي ينسجم مع التضاريس."],
      ["طرق الجبال", "مسارات تكشف تغير المشهد مع الارتفاع."]
    ],
    historyPeriod: "بدايات القرن 20",
    historyTitle: "عسير في مسيرة التوحيد",
    historyText: "شهدت عسير خلال بدايات القرن العشرين تحولات سياسية متتابعة انتهت باندماجها ضمن الدولة السعودية الحديثة. وجاء ذلك ضمن مسيرة أوسع أعادت تشكيل خارطة الجزيرة العربية.",
    ending: "من عسير… إلى بقية الحكاية."
  },

  TB: {
    slug: "tabuk",
    number: "07",
    name: "تبوك",
    accent: "#7c5d21",
    base: "#5f664f",
    heroLine: "اتساعٌ يفتح الطريق.",
    intro: "أودية وصخور ومدن قديمة ومسارات سفر؛ تبوك تحمل طابعًا مفتوحًا يربط شمال غرب المملكة بتاريخ طويل من الحركة.",
    spiritTitle: "أرض الطريق والمشهد الكبير",
    spiritText: "في تبوك تبدو المسافات جزءًا من الهوية. الأودية الواسعة، تكوينات الصخور، والطرق القديمة تصنع مشهدًا يوازن بين العزلة والحركة.",
    keywords: ["طريق", "صخر", "اتساع"],
    signature: [
      ["وادي الديسة", "طبيعة", "وادي تحيط به تشكيلات صخرية شاهقة ومشهد طبيعي واسع."],
      ["قلعة تبوك", "تاريخ", "معلم ارتبط بتاريخ المدينة وطرق السفر والحج."],
      ["تيماء", "آثار", "واحة قديمة ذات حضور مهم في تاريخ شمال الجزيرة."]
    ],
    witnesses: [
      ["محطة تبوك", "إحدى محطات سكة حديد الحجاز التاريخية."],
      ["حسمى", "صحراء وتكوينات صخرية ذات مشهد شديد التميز."],
      ["الواحات القديمة", "محطات استقرار ربطت الطريق بالماء والحياة."]
    ],
    historyPeriod: "بدايات القرن 20",
    historyTitle: "محطة على سكة الحجاز",
    historyText: "كانت تبوك إحدى المحطات المهمة على سكة حديد الحجاز التي ربطت مدنًا ومحطات في شمال غرب الجزيرة العربية. وما زالت مباني ومحطة السكة جزءًا من ذاكرة المدينة المادية.",
    ending: "من تبوك… إلى بقية الحكاية."
  },

  HA: {
    slug: "hail",
    number: "08",
    name: "حائل",
    accent: "#607c4f",
    base: "#62624c",
    heroLine: "صخرٌ يروي قبل أن يكتب.",
    intro: "في حائل تتجاور الجبال والنقوش والطرق القديمة، وتظهر المنطقة كمساحة مفتوحة للذاكرة الصحراوية.",
    spiritTitle: "ذاكرة محفورة في الصخر",
    spiritText: "روح حائل متصلة بالرحلة والصخر والضيافة. بين أجا وسلمى ومواقع النقوش، تتشكل هوية تستند إلى طبيعة قوية وتاريخ طويل من العبور والاستقرار.",
    keywords: ["صخر", "كرم", "ذاكرة"],
    signature: [
      ["جبة", "نقوش", "موقع مشهور بفنونه الصخرية القديمة."],
      ["أجا وسلمى", "طبيعة", "جبال ارتبطت بهوية حائل ورواياتها."],
      ["وسط حائل التاريخي", "عمران", "تفاصيل عمرانية وأسواق تحكي تطور المدينة."]
    ],
    witnesses: [
      ["الفنون الصخرية", "طبقات زمنية محفوظة على واجهات الصخور."],
      ["الطرق الصحراوية", "مسارات صنعت صلة المنطقة بالقوافل والسفر."],
      ["البيوت الطينية", "عمارة تتعامل مع المناخ وتختزن ذاكرة المدينة."]
    ],
    historyPeriod: "1921",
    historyTitle: "حائل في مسيرة توحيد البلاد",
    historyText: "شهدت حائل عام 1921 تحولًا سياسيًا مهمًا مع دخولها ضمن الدولة السعودية، لتصبح تلك المرحلة إحدى المحطات المؤثرة في مسيرة توحيد أجزاء واسعة من الجزيرة العربية.",
    ending: "من حائل… إلى بقية الحكاية."
  },

  SH: {
    slug: "northern-borders",
    number: "09",
    name: "الحدود الشمالية",
    accent: "#0050af",
    base: "#596b56",
    heroLine: "أفقٌ يختزن أثر الطريق.",
    intro: "في الشمال تتسع المسافات وتظهر المدن والقرى كعلامات على طرق قديمة عبرتها القوافل والحجاج.",
    spiritTitle: "هوية صنعتها المسافة",
    spiritText: "تبدو الحدود الشمالية هادئة ومفتوحة، لكن أرضها تحفظ مسارات وحكايات كثيرة. الطريق، الماء، والاستقرار المؤقت والدائم كلها عناصر صنعت شخصية المنطقة.",
    keywords: ["أفق", "طريق", "أثر"],
    signature: [
      ["لينة", "تراث", "بلدة تاريخية ارتبطت بالآبار والطرق القديمة."],
      ["طريف", "مدينة", "مدينة شمالية تشكلت مع طرق الحركة الحديثة."],
      ["درب زبيدة", "طريق", "مسار حج تاريخي مر عبر شمال ووسط الجزيرة."]
    ],
    witnesses: [
      ["الآبار القديمة", "نقاط ماء صنعت قيمة كبيرة على طرق السفر."],
      ["المحطات", "بقايا منشآت ارتبطت بالحجاج والمسافرين."],
      ["السهول الشمالية", "مساحات مفتوحة تحدد شخصية المشهد."]
    ],
    historyPeriod: "العصر العباسي",
    historyTitle: "درب زبيدة",
    historyText: "مر عبر شمال الجزيرة جزء من شبكة طرق الحج القديمة المعروفة بدرب زبيدة. وقد دُعمت هذه الطرق بمحطات وآبار ومنشآت لخدمة المسافرين، لتتحول إلى أثر واضح للحركة والتنظيم عبر الصحراء.",
    ending: "من الحدود الشمالية… إلى بقية الحكاية."
  },

  GA: {
    slug: "jazan",
    number: "10",
    name: "جازان",
    accent: "#5aba1c",
    base: "#4c6e50",
    heroLine: "من الجبل إلى البحر.",
    intro: "جازان منطقة تتحرك بين جزر البحر الأحمر والجبال والمدرجات ومزارع البن، في مساحة شديدة التنوع.",
    spiritTitle: "تنوعٌ يتحرك بسرعة",
    spiritText: "في جازان تتغير التضاريس خلال مسافات قصيرة؛ ساحل، جزر، جبال، ومدرجات زراعية. لذلك تبدو هوية المنطقة غنية بالحركة واللون والاختلاف.",
    keywords: ["بحر", "جبل", "خصب"],
    signature: [
      ["جزر فرسان", "بحر", "أرخبيل يجمع الطبيعة البحرية والتاريخ الساحلي."],
      ["جبال فيفا", "طبيعة", "مرتفعات ومدرجات زراعية ذات مشهد متفرد."],
      ["بن الدائر", "زراعة", "زراعة البن في الجبال جزء من الهوية الزراعية للمنطقة."]
    ],
    witnesses: [
      ["بيوت فرسان", "تفاصيل معمارية متأثرة بالبحر والتجارة."],
      ["المدرجات الزراعية", "حلول زراعية تتكيف مع الجبل."],
      ["الأسواق الشعبية", "ذاكرة اجتماعية يومية تحمل نكهة المنطقة."]
    ],
    historyPeriod: "القرن 20",
    historyTitle: "جازان في مسيرة توحيد المملكة",
    historyText: "شهدت جازان خلال النصف الأول من القرن العشرين تحولات سياسية انتهت باستقرارها ضمن المملكة العربية السعودية. ومنذ ذلك الوقت واصلت المنطقة تطورها مع احتفاظها بتنوعها الثقافي والجغرافي.",
    ending: "من جازان… إلى بقية الحكاية."
  },

  NG: {
    slug: "najran",
    number: "11",
    name: "نجران",
    accent: "#971a4d",
    base: "#685e4d",
    heroLine: "عمارةٌ تنبت من الأرض.",
    intro: "نجران تجمع بين الطين والواحة والآثار والجبال، وتظهر عمارتها كواحدة من أكثر ملامحها تميزًا.",
    spiritTitle: "طينٌ يصنع هوية كاملة",
    spiritText: "روح نجران واضحة في عمارتها؛ ارتفاعات طينية، فتحات هندسية، ألوان طبيعية، وواحات تعطي المكان توازنًا بين الصحراء والاستقرار.",
    keywords: ["طين", "واحة", "أثر"],
    signature: [
      ["الأخدود", "آثار", "موقع أثري يحمل طبقات تاريخية متعددة."],
      ["حمى", "تراث", "منطقة غنية بالنقوش والرسوم الصخرية ومسارات قديمة."],
      ["العمارة النجرانية", "عمران", "مبانٍ طينية شاهقة بتكوينات هندسية مميزة."]
    ],
    witnesses: [
      ["قصر الإمارة التاريخي", "نموذج بارز من عمارة المنطقة."],
      ["واحات نجران", "مساحات زراعية شكلت نمط الاستقرار."],
      ["النقوش الصخرية", "شواهد على حركة بشرية قديمة عبر جنوب الجزيرة."]
    ],
    historyPeriod: "عصور قديمة",
    historyTitle: "حمى ومسارات القوافل",
    historyText: "تكشف مواقع حمى والنقوش المنتشرة حولها عن تاريخ طويل للحركة البشرية في جنوب الجزيرة العربية. ترك المسافرون والقوافل آثارًا ورسومًا ونقوشًا تحولت اليوم إلى سجل بصري ممتد عبر قرون.",
    ending: "من نجران… إلى بقية الحكاية."
  },

  BA: {
    slug: "bahah",
    number: "12",
    name: "الباحة",
    accent: "#607c4f",
    base: "#536d55",
    heroLine: "حجرٌ أخضر فوق الجبل.",
    intro: "قرى حجرية، غابات، ومدرجات جبلية تمنح الباحة شخصية هادئة ومتماسكة ترتبط مباشرة بطبيعة المكان.",
    spiritTitle: "جبلٌ يسكنه الحجر والخضرة",
    spiritText: "في الباحة تتشكل الحياة حول المرتفعات والمطر والقرى الحجرية. التباين بين الصخور والنبات يعطي المنطقة لغتها الخاصة ويجعل العمارة جزءًا من المشهد الطبيعي.",
    keywords: ["حجر", "غابة", "جبل"],
    signature: [
      ["ذي عين", "قرية", "قرية حجرية شهيرة تقوم على تكوين جبلي واضح."],
      ["غابة رغدان", "طبيعة", "غابة مرتفعة ترتبط بمشهد الباحة المعاصر."],
      ["جبل شدا", "طبيعة", "كتلة جبلية ذات تكوينات ومشهد متنوع."]
    ],
    witnesses: [
      ["القرى الحجرية", "عمران يحاكي المادة المحلية والمناخ."],
      ["المدرجات", "علاقة بين الزراعة والانحدار الجبلي."],
      ["الغابات", "بعد طبيعي يميز المنطقة عن كثير من مشاهد المملكة."]
    ],
    historyPeriod: "قرون ماضية",
    historyTitle: "قرى الجبل ومسارات الحياة",
    historyText: "تشهد القرى الحجرية في الباحة على نمط استقرار تكيف مع الجبل والمناخ. بنيت التجمعات السكنية بطريقة تستفيد من التضاريس والمواد المحلية، وبقيت بعض هذه القرى شاهدة على أسلوب حياة متوارث.",
    ending: "من الباحة… إلى بقية الحكاية."
  },

  GO: {
    slug: "jouf",
    number: "13",
    name: "الجوف",
    accent: "#6565e0",
    base: "#63704f",
    heroLine: "واحةٌ تحفظ طريق الزمن.",
    intro: "الجوف مساحة تجمع بين دومة الجندل والآثار والزيتون والواحات، وتحمل أثر طرق قديمة عبر شمال الجزيرة.",
    spiritTitle: "بين الحجر والزيتون",
    spiritText: "تعكس الجوف علاقة قديمة بين الماء والاستقرار والطريق. هنا تتجاور القلاع والواحات مع زراعة الزيتون، فتتشكل شخصية تجمع التاريخ بالحياة اليومية.",
    keywords: ["واحة", "حجر", "زيتون"],
    signature: [
      ["دومة الجندل", "تاريخ", "مدينة قديمة ارتبطت بطرق القوافل والاستقرار في الشمال."],
      ["قلعة مارد", "عمران", "حصن تاريخي يطل على دومة الجندل."],
      ["زيتون الجوف", "زراعة", "عنصر زراعي معاصر أصبح من أبرز ملامح المنطقة."]
    ],
    witnesses: [
      ["مسجد عمر", "معلم تاريخي ضمن نسيج دومة الجندل."],
      ["الواحات", "عنصر أساسي في تاريخ الاستقرار بالمنطقة."],
      ["البيوت الحجرية", "جزء من هوية العمران القديم في الجوف."]
    ],
    historyPeriod: "عصور قديمة",
    historyTitle: "دومة الجندل على طريق القوافل",
    historyText: "اكتسبت دومة الجندل أهميتها من موقعها في شمال الجزيرة العربية ومن اتصالها بطرق الحركة والتجارة. تعاقبت عليها أدوار مختلفة عبر التاريخ، وما زالت قلعتها ونسيجها العمراني شاهدين على تلك الطبقات.",
    ending: "من الجوف… إلى بقية الحكاية."
  }
};

const slugToCode = Object.fromEntries(
  Object.entries(REGIONS).map(([code, region]) => [region.slug, code])
);

const nameFallback = {
  "Riyadh": "RD",
  "Makkah": "MQ",
  "Makkah Al Mukarramah": "MQ",
  "Madinah": "MN",
  "Al Madinah": "MN",
  "Qassim": "QA",
  "Al Qassim": "QA",
  "Eastern Province": "SQ",
  "Ash Sharqiyah": "SQ",
  "Asir": "AS",
  "Tabuk": "TB",
  "Hail": "HA",
  "Northern Borders": "SH",
  "Jazan": "GA",
  "Najran": "NG",
  "Al Bahah": "BA",
  "Al-Bahah": "BA",
  "Al Jouf": "GO",
  "Al-Jouf": "GO"
};

const homeView = document.getElementById("homeView");
const regionView = document.getElementById("regionView");
const regionArticle = document.getElementById("regionArticle");

function featureCode(feature) {
  const p = feature.properties || {};
  return (
    p.code ||
    p.region_code ||
    p.regionCode ||
    nameFallback[p.name_en] ||
    nameFallback[p.name] ||
    ""
  );
}

function showHome() {
  homeView.hidden = false;
  regionView.hidden = true;
  document.documentElement.style.setProperty("--region-accent", "#971a4d");
  document.title = "اكتشف المملكة | عزّنا بطبعنا";
  window.scrollTo({ top: 0, behavior: "auto" });
}

function showRegion(code) {
  const data = REGIONS[code];
  if (!data) {
    showHome();
    return;
  }
    const historyImage =
  document.getElementById("historyImage");

setRegionImage(
  historyImage,
  imagePath(data.slug, "history")
);

historyImage.alt =
  `مشهد مرتبط بتاريخ منطقة ${data.name}`;

  setRegionImage(
  document.getElementById("pastImage"),
  imagePath(data.slug, "past")
);

setRegionImage(
  document.getElementById("presentImage"),
  imagePath(data.slug, "present")
);
  

  homeView.hidden = true;
  regionView.hidden = false;
  document.documentElement.style.setProperty("--region-accent", data.accent);
  regionArticle.style.setProperty("--region-accent", data.accent);

  document.getElementById("regionCounter").textContent = `${data.number} / 13`;
  document.getElementById("regionTopName").textContent = data.name;
  document.getElementById("regionName").textContent = data.name;
  document.getElementById("regionHeroLine").textContent = data.heroLine;
  document.getElementById("regionIntro").textContent = data.intro;
  document.getElementById("spiritTitle").textContent = data.spiritTitle;
  document.getElementById("spiritText").textContent = data.spiritText;
  
  document.getElementById("historyPeriod").textContent = data.historyPeriod;
  document.getElementById("historyTitle").textContent = data.historyTitle;
  document.getElementById("historyText").textContent = data.historyText;
  document.getElementById("endingText").textContent = data.ending;

  const heroImage = document.getElementById("heroImage");

setRegionImage(
  heroImage,
  imagePath(data.slug, "hero")
);

heroImage.alt = `مشهد بصري يمثل منطقة ${data.name}`;

  const keywords = document.getElementById("spiritKeywords");
  keywords.innerHTML = data.keywords
    .map(keyword => `<span class="keyword">${keyword}</span>`)
    .join("");

  document.getElementById("signatureGrid").innerHTML = data.signature
    .map(([name, type, description], index) => `
      <article class="signature-card">
        <div class="card-media" style="--focus-x:${index === 0 ? "54%" : index === 1 ? "44%" : "64%"}; --focus-y:${index === 0 ? "48%" : "54%"};">
          <img
  src="${imagePath(data.slug, `signature-${index + 1}`)}"
  alt="${name}"
  loading="lazy"
  decoding="async"
  onerror="this.onerror=null;this.src='${PREVIEW_IMAGE}'"
>
        </div>
        <div class="card-overlay"></div>
        <div class="card-copy">
          <small>${String(index + 1).padStart(2, "0")} / ${type}</small>
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
      </article>
    `)
    .join("");

  document.getElementById("witnessesGrid").innerHTML = data.witnesses
    .map(([name, description], index) => `
      <article class="witness-card">
        <div class="card-media" style="--focus-x:${index === 0 ? "38%" : index === 1 ? "62%" : "50%"}; --focus-y:${index === 1 ? "44%" : "54%"};">
          
        <img
  src="${imagePath(data.slug, `witness-${index + 1}`)}"
  alt="${name}"
  loading="lazy"
  decoding="async"
  onerror="this.onerror=null;this.src='${PREVIEW_IMAGE}'"
>
        </div>
        <div class="card-overlay"></div>
        <div class="card-copy">
          <small>شاهد ${String(index + 1).padStart(2, "0")}</small>
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
      </article>
    `)
    .join("");

  const compareRange = document.getElementById("compareRange");
  compareRange.value = 50;
  document.getElementById("compareShell").style.setProperty("--compare", "50%");

  document.title = `${data.name} | عزّنا بطبعنا`;
  window.scrollTo({ top: 0, behavior: "auto" });

  const spiritImage =
  document.getElementById("spiritImage");

setRegionImage(
  spiritImage,
  imagePath(data.slug, "spirit")
);

spiritImage.alt =
  `مشهد يعبر عن روح منطقة ${data.name}`;
} 

function route() {
  const hash = location.hash.replace(/^#/, "");

  if (!hash || hash === "home") {
    showHome();
    return;
  }

  if (hash.startsWith("region=")) {
    const slug = decodeURIComponent(hash.split("=")[1] || "");
    showRegion(slugToCode[slug]);
    return;
  }

  showHome();
}

window.addEventListener("hashchange", route);

document.getElementById("compareRange").addEventListener("input", event => {
  document
    .getElementById("compareShell")
    .style
    .setProperty("--compare", `${event.target.value}%`);
});

async function buildMap() {
  const svg = d3.select("#saudiMap");
  const status = document.getElementById("mapStatus");

  try {
    const geojson = await d3.json(GEOJSON_URL);

    const projection = d3
      .geoMercator()
      .fitExtent([[38, 35], [862, 648]], geojson);

    const path = d3.geoPath(projection);
    const features = geojson.features.filter(feature => REGIONS[featureCode(feature)]);

    const paths = svg
      .selectAll("path")
      .data(features)
      .join("path")
      .attr("class", "region-path")
      .attr("d", path)
      .attr("tabindex", 0)
      .attr("role", "link")
      .attr("aria-label", feature => {
        const code = featureCode(feature);
        return `فتح صفحة ${REGIONS[code].name}`;
      })
      .attr("data-code", feature => featureCode(feature))
      .attr("fill", feature => REGIONS[featureCode(feature)].base)
      .style("--hover-fill", feature => REGIONS[featureCode(feature)].accent);

    const labelOffsets = {
      RD: [0, 8],
      MQ: [-20, 9],
      MN: [-10, -4],
      QA: [0, -4],
      SQ: [17, 5],
      AS: [-7, 0],
      TB: [5, 3],
      HA: [-3, -1],
      SH: [10, 5],
      GA: [0, 10],
      NG: [4, 7],
      BA: [8, 8],
      GO: [0, 4]
    };

    const labels = svg
      .selectAll("text")
      .data(features)
      .join("text")
      .attr("class", "map-label")
      .attr("data-code", feature => featureCode(feature))
      .attr("x", feature => {
        const code = featureCode(feature);
        const [x] = path.centroid(feature);
        return x + (labelOffsets[code]?.[0] || 0);
      })
      .attr("y", feature => {
        const code = featureCode(feature);
        const [, y] = path.centroid(feature);
        return y + (labelOffsets[code]?.[1] || 0);
      })
      .text(feature => REGIONS[featureCode(feature)].name);

    function highlight(code) {
      document.documentElement.style.setProperty("--map-live", REGIONS[code]?.accent || "#5aba1c");

      paths
        .classed("is-active", feature => featureCode(feature) === code)
        .classed("is-dim", feature => featureCode(feature) !== code);

      labels
        .classed("is-active", feature => featureCode(feature) === code)
        .classed("is-dim", feature => featureCode(feature) !== code);
    }

    function clearHighlight() {
      document.documentElement.style.setProperty("--map-live", "#5aba1c");

      paths.classed("is-active", false).classed("is-dim", false);
      labels.classed("is-active", false).classed("is-dim", false);
    }

    function openFeature(feature) {
      const code = featureCode(feature);
      const region = REGIONS[code];
      if (region) location.hash = `region=${encodeURIComponent(region.slug)}`;
    }

    paths
      .on("mouseenter", (_, feature) => highlight(featureCode(feature)))
      .on("mouseleave", clearHighlight)
      .on("focus", (_, feature) => highlight(featureCode(feature)))
      .on("blur", clearHighlight)
      .on("click", (_, feature) => openFeature(feature))
      .on("keydown", (event, feature) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openFeature(feature);
        }
      });

    status.hidden = true;
  } catch (error) {
    console.error(error);
    status.textContent = "تعذر تحميل الخريطة. تأكد من الاتصال بالإنترنت ثم أعد تحميل الصفحة.";
  }
}

buildMap();
route();
