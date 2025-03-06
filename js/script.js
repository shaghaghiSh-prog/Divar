const productsByCity = {
  تهران: [
    {
      id: 1,
      date: getRandomDate(),
      name: "دستگاه آبلیموه گیری",
      price: "توافقی",
      location: "یافت‌آباد",
      category: "خانه و آشپزخانه",
      image: "images/img1.PNG",
      description:
        "این دستگاه آبلیمو گیری با طراحی کاربرپسند و عملکرد سریع، به شما این امکان را می‌دهد که آبلیمو تازه و طبیعی تهیه کنید. با قابلیت آسان تمیز کردن و استفاده، می‌توانید در کمترین زمان ممکن آبلیمو را برای غذاها و نوشیدنی‌های خود آماده کنید. این محصول به ویژه برای افرادی که به سلامتی خود اهمیت می‌دهند، بسیار مناسب است. با داشتن این دستگاه، همیشه آبلیمو تازه در دسترس خواهید داشت.",
    },
    {
      id: 2,
      date: getRandomDate(),
      name: "206 تیپ 2",
      price: "۲۸۱,۰۰۰,۰۰۰ تومان",
      location: "صادقیه",
      category: "وسایل نقلیه",
      image: "images/img2.PNG",
      description:
        "خودروی 206 تیپ 2 با طراحی زیبا و مدرن، گزینه‌ای ایده‌آل برای سفرهای شهری و روزمره است. این خودرو با مصرف سوخت بهینه و فضای داخلی راحت، تجربه‌ای لذت‌بخش از رانندگی را فراهم می‌کند. همچنین، سیستم‌های ایمنی پیشرفته و امکانات رفاهی آن، آسایش بیشتری را برای سرنشینان به ارمغان می‌آورد. با این خودرو، شما می‌توانید به راحتی در ترافیک‌های شهری حرکت کنید و از سفرهای خود لذت ببرید.",
    },
    {
      id: 3,
      date: getRandomDate(),
      name: "NS 200",
      price: "۶۸,۵۰۰,۰۰۰ تومان",
      location: "شهرک غرب",
      category: "وسایل نقلیه",
      image: "images/img3.PNG",
      description:
        "موتورسیکلت NS 200 با قدرت و سرعت بالا، انتخابی عالی برای عاشقان سرعت و ماجراجویی است. این موتور با طراحی جذاب و تکنولوژی پیشرفته، تجربه‌ای هیجان‌انگیز از رانندگی را ارائه می‌دهد. با سیستم تعلیق بهینه و فرمان دقیق، کنترل بهتری بر روی مسیر خواهید داشت. همچنین، مصرف سوخت مناسب آن، هزینه‌های شما را کاهش می‌دهد و برای سفرهای طولانی بسیار مناسب است.",
    },
    {
      id: 4,
      date: getRandomDate(),
      name: "۱۸۰متر ۲پارکینگ قیطریه",
      price: "۱۴,۹۰۰,۰۰۰,۰۰۰ تومان",
      location: "قیطریه",
      category: "املاک",
      image: "images/img4.PNG",
      description:
        "این آپارتمان 180 متری با دو پارکینگ در منطقه‌ی قیطریه، فضایی مناسب و راحت برای خانواده‌های بزرگ است. با دسترسی آسان به امکانات شهری و محیطی آرام، این ملک گزینه‌ای ایده‌آل برای سکونت است. طراحی داخلی مدرن و نورگیری عالی، فضایی دلپذیر برای زندگی روزمره ایجاد کرده است. همچنین، نزدیکی به مراکز خرید و تفریحی، زندگی راحت‌تری را برای شما فراهم می‌کند.",
    },
    {
      id: 5,
      date: getRandomDate(),
      name: "تلویزیون ال جی ۵۵ اینچ",
      price: "۲۵,۰۰۰,۰۰۰ تومان",
      location: "تهرانپارس",
      category: "الکترونیک",
      image: "images/e0da9764-1d2b-43f7-ba9f-a160d2e16f98.jpg",
      description:
        "تلویزیون ال جی 55 اینچ با کیفیت تصویر 4K و فناوری OLED، تجربه‌ای بی‌نظیر از تماشای فیلم و سریال را به شما ارائه می‌دهد. این تلویزیون با طراحی باریک و مدرن، به راحتی با دکوراسیون منزل شما هماهنگ می‌شود. امکانات هوشمند آن، شامل دسترسی به اینترنت و اپلیکیشن‌های مختلف، امکان تماشای محتواهای آنلاین را برای شما فراهم می‌کند. با این تلویزیون، هر شب می‌تواند به یک تجربه سینمایی تبدیل شود.",
    },
    {
      id: 6,
      date: getRandomDate(),
      name: "یخچال ساید بای ساید",
      price: "۳۵,۰۰۰,۰۰۰ تومان",
      location: "نارمک",
      category: "خانه و آشپزخانه",
      image: "images/870203e6-5e65-4204-8d82-51c92e9003d6.jpg",
      description:
        "یخچال ساید بای ساید با ظرفیت بالا و فناوری خنک‌کنندگی پیشرفته، ایده‌آل برای خانواده‌های پرجمعیت است. با طراحی مدرن و فضای داخلی کاربردی، می‌توانید به راحتی مواد غذایی خود را سازماندهی کنید. این یخچال با ویژگی‌هایی مانند آبسردکن و یخساز اتوماتیک، راحتی بیشتری را در زندگی روزمره شما فراهم می‌کند. همچنین، مصرف انرژی پایین آن به صرفه‌جویی در هزینه‌های برق کمک می‌کند.",
    },
    {
      id: 7,
      date: getRandomDate(),
      name: "موتور سیکلت هوندا",
      price: "۲۵,۰۰۰,۰۰۰ تومان",
      location: "سعادت‌آباد",
      category: "وسایل نقلیه",
      image: "images/images.jfif",
      description:
        "موتور سیکلت هوندا با طراحی زیبا و عملکرد عالی، مناسب برای استفاده روزمره و سفرهای کوتاه است. این موتور با تکنولوژی پیشرفته، تجربه‌ای راحت و ایمن از رانندگی را فراهم می‌کند. با مصرف سوخت بهینه و نگهداری آسان، گزینه‌ای اقتصادی برای سفرهای شهری است. همچنین، طراحی ارگونومیک آن، راحتی بیشتری را برای راننده به ارمغان می‌آورد.",
    },
    {
      id: 8,
      date: getRandomDate(),
      name: "لپ‌تاپ HP",
      price: "۲۲,۰۰۰,۰۰۰ تومان",
      location: "میرداماد",
      category: "کالای دیجیتال",
      image: "images/ad228d96-b996-4c90-ab4e-5f7fac994247.jpg",
      description:
        "لپ‌تاپ HP با پردازنده قوی و صفحه نمایش با کیفیت، مناسب برای کار و سرگرمی است. این لپ‌تاپ با طراحی سبک و باریک، به راحتی قابل حمل است و می‌توانید آن را در هر کجا با خود ببرید. با امکانات متنوع و باتری با عمر طولانی، می‌توانید به راحتی کارهای خود را انجام دهید و از تماشای فیلم‌ها لذت ببرید. این محصول برای دانشجویان و حرفه‌ای‌ها گزینه‌ای ایده‌آل است.",
    },
  ],
  البرز: [
    {
      id: 9,
      date: getRandomDate(),
      name: "آپارتمان ۱۰۰ متری در کرج",
      price: "۲,۵۰۰,۰۰۰,۰۰۰ تومان",
      location: "گوهردشت",
      category: "املاک",
      image: "images/img5.PNG",
      description:
        "آپارتمان 100 متری در منطقه گوهردشت با امکانات کامل و دسترسی آسان به خدمات عمومی، گزینه‌ای مناسب برای زندگی است. این ملک دارای نورگیری عالی و طراحی داخلی مدرن است که احساس راحتی را به شما منتقل می‌کند. با وجود نزدیکی به مراکز خرید و تفریحی، زندگی روزمره شما را آسان‌تر می‌کند. همچنین، فضای باز و محوطه‌سازی مناسب، محیطی دلپذیر برای خانواده‌ها فراهم می‌آورد.",
    },
    {
      id: 10,
      date: getRandomDate(),
      name: "لپ تاپ لنوو",
      price: "۱۵,۰۰۰,۰۰۰ تومان",
      location: "مهرشهر",
      category: "کالای دیجیتال",
      image: "images/951ba0d1-0ab8-442b-bff5-dd7e6db4dab6.jpg",
      description:
        "لپ‌تاپ لنوو با طراحی باریک و سبک، مناسب برای کارهای اداری و تحصیلی است. این لپ‌تاپ با پردازنده‌های قوی و حافظه کافی، عملکرد روانی را در انجام وظایف مختلف ارائه می‌دهد. صفحه نمایش با کیفیت آن، تجربه‌ای عالی از تماشای ویدیوها و تصاویر را به شما می‌دهد. با باتری با عمر طولانی، می‌توانید بدون نگرانی از شارژ، کارهای خود را انجام دهید.",
    },
    {
      id: 11,
      date: getRandomDate(),
      name: "مبل راحتی",
      price: "۱۰,۰۰۰,۰۰۰ تومان",
      location: "کرج",
      category: "خانه و آشپزخانه",
      image: "images/img15.PNG",
      description:
        "مبل راحتی با طراحی مدرن و پارچه‌های با کیفیت، مناسب برای نشیمن خانه است. این مبل با راحتی بالا و پشتیبانی مناسب، تجربه‌ای دلپذیر از نشستن را به شما ارائه می‌دهد. طراحی زیبا و جذاب آن، به دکوراسیون منزل شما جلوه‌ای خاص می‌بخشد. همچنین، این مبل با دوام و مقاوم، انتخابی عالی برای استفاده روزمره است.",
    },
    {
      id: 12,
      date: getRandomDate(),
      name: "کامیونت ایسوزو",
      price: "۳۰۰,۰۰۰,۰۰۰ تومان",
      location: "کرج",
      category: "وسایل نقلیه",
      image: "images/ca516d75-3f3c-483e-bd2d-7d6bb68b5158.jpg",
      description:
        "کامیونت ایسوزو با ظرفیت بار بالا و مصرف سوخت بهینه، مناسب برای حمل و نقل کالا در مسافت‌های طولانی است. این کامیونت با طراحی مقاوم و کارآمد، می‌تواند به راحتی بارهای سنگین را جابجا کند. همچنین، با امکانات ایمنی پیشرفته، آسایش و امنیت را در حین رانندگی برای شما به ارمغان می‌آورد. این وسیله نقلیه برای کسب و کارهای مرتبط با حمل و نقل و لجستیک بسیار مناسب است.",
    },
    {
      id: 13,
      date: getRandomDate(),
      name: "گوشی شیائومی",
      price: "۷,۰۰۰,۰۰۰ تومان",
      location: "کرج",
      category: "کالای دیجیتال",
      image: "images/e3b2589b-20f7-435e-a2de-361ceff92254.jpg",
      description:
        "گوشی شیائومی با دوربین با کیفیت و باتری قدرتمند، مناسب برای عکاسی و استفاده روزمره است. این گوشی با طراحی زیبا و صفحه نمایش بزرگ، تجربه‌ای عالی از وبگردی و تماشای ویدیوها را به شما می‌دهد. همچنین، با امکانات نرم‌افزاری متنوع، می‌توانید از اپلیکیشن‌های مختلف بهره‌برداری کنید. این محصول انتخابی ایده‌آل برای جوانان و افرادی است که به فناوری‌های روز علاقه دارند.",
    },
    {
      id: 14,
      date: getRandomDate(),
      name: "کفش ورزشی نایک",
      price: "۲,۰۰۰,۰۰۰ تومان",
      location: "کرج",
      category: "مد و پوشاک",
      image: "images/1a00bae0-c4ec-4e25-886c-6ac2250664bc.jpg",
      description:
        "کفش ورزشی نایک با طراحی ارگونومیک و راحتی بالا، مناسب برای فعالیت‌های ورزشی و روزمره است. این کفش با استفاده از مواد با کیفیت و فناوری‌های پیشرفته، پشتیبانی و راحتی بیشتری را در حین ورزش فراهم می‌کند. طراحی جذاب آن، به شما این امکان را می‌دهد که در هر موقعیتی خوش‌استایل باشید. همچنین، این کفش با دوام و مقاوم، گزینه‌ای عالی برای استفاده طولانی‌مدت است.",
    },
  ],
  مشهد: [
    {
      id: 15,
      date: getRandomDate(),
      name: "پراید ۱۳۱",
      price: "۱۵۰,۰۰۰,۰۰۰ تومان",
      location: "قاسم آباد",
      category: "وسایل نقلیه",
      image: "images/a5988439-c33a-4fb4-8be1-5cff02914a72.jpg",
      description:
        "پراید 131 با مصرف سوخت پایین و نگهداری آسان، گزینه‌ای اقتصادی برای خانواده‌ها است. این خودرو با طراحی ساده و کاربردی، به راحتی در ترافیک‌های شهری حرکت می‌کند. فضای داخلی آن برای پنج سرنشین مناسب است و راحتی را در سفرهای کوتاه فراهم می‌آورد. همچنین، هزینه‌های نگهداری پایین آن، این خودرو را به انتخابی مناسب برای افرادی که به دنبال صرفه‌جویی در هزینه‌ها هستند، تبدیل کرده است.",
    },
    {
      id: 16,
      date: getRandomDate(),
      name: "مبل راحتی",
      price: "۸,۰۰۰,۰۰۰ تومان",
      location: "احمدآباد",
      category: "خانه و آشپزخانه",
      image: "images/img6.PNG",
      description:
        "مبل راحتی با طراحی شیک و راحتی بالا، مناسب برای دکوراسیون منزل است. این مبل با پارچه‌های با کیفیت و دوخت عالی، به شما احساس راحتی و آسایش می‌دهد. طراحی مدرن آن، به فضای نشیمن شما زیبایی خاصی می‌بخشد و می‌تواند به عنوان نقطه کانونی در دکوراسیون شما عمل کند. همچنین، این مبل با دوام و مقاوم، انتخابی عالی برای استفاده روزمره است.",
    },
    {
      id: 17,
      date: getRandomDate(),
      name: "آشپزخانه پیش ساخته",
      price: "۲۰,۰۰۰,۰۰۰ تومان",
      location: "مشهد",
      category: "خانه و آشپزخانه",
      image: "images/f32fbebd-9b39-458e-9dd9-21853b30679f.jpg",
      description:
        "آشپزخانه پیش ساخته با کابینت‌های مدرن و فضای کاربردی، ایده‌آل برای خانه‌های کوچک است. این آشپزخانه با طراحی هوشمندانه، به شما این امکان را می‌دهد که از فضای موجود به بهترین شکل استفاده کنید. مواد با کیفیت و ساختار مقاوم، دوام و طول عمر بالایی را تضمین می‌کند. همچنین، طراحی زیبا و جذاب آن، به فضای آشپزخانه شما جلوه‌ای خاص می‌بخشد.",
    },
    {
      id: 18,
      date: getRandomDate(),
      name: "گوشی آیفون ۱۱",
      price: "۲۵,۰۰۰,۰۰۰ تومان",
      location: "مشهد",
      category: "کالای دیجیتال",
      image: "images/06ea1746-19c0-4302-a463-68e1bf86fb20.jpg",
      description:
        "گوشی آیفون 11 با دوربین حرفه‌ای و سیستم عامل iOS، تجربه‌ای بی‌نظیر از استفاده گوشی هوشمند را به شما ارائه می‌دهد. این گوشی با طراحی زیبا و صفحه نمایش بزرگ، امکان تماشای ویدیوها و عکاسی با کیفیت را فراهم می‌کند. همچنین، با امکانات نرم‌افزاری پیشرفته، می‌توانید به راحتی از اپلیکیشن‌های مختلف استفاده کنید. این محصول به ویژه برای افرادی که به عکاسی علاقه دارند، گزینه‌ای ایده‌آل است.",
    },
    {
      id: 19,
      date: getRandomDate(),
      name: "دوچرخه کوهستان",
      price: "۳,۵۰۰,۰۰۰ تومان",
      location: "مشهد",
      category: "ورزش و سرگرمی",
      image: "images/a24906b4-5f53-4f88-aca0-e0d5e569e8b6.jpg",
      description:
        "دوچرخه کوهستان با طراحی مقاوم و سیستم تعلیق عالی، مناسب برای کوهنوردی و مسیرهای ناهموار است. این دوچرخه با قابلیت‌های پیشرفته، تجربه‌ای هیجان‌انگیز از دوچرخه‌سواری را برای شما فراهم می‌کند. با فریم محکم و لاستیک‌های با کیفیت، می‌توانید به راحتی از چالش‌های مسیرهای سخت عبور کنید. همچنین، طراحی ارگونومیک آن، راحتی بیشتری را در حین دوچرخه‌سواری برای شما به ارمغان می‌آورد.",
    },
    {
      id: 20,
      date: getRandomDate(),
      name: "کتاب‌های کمک آموزشی",
      price: "۱,۰۰۰,۰۰۰ تومان",
      location: "مشهد",
      category: "کتاب و رسانه",
      image: "images/f636250f-00d9-4d44-8a95-c7e6402b4c7d.jpg",
      description:
        "کتاب‌های کمک آموزشی با محتوای غنی و تمرین‌های کاربردی، مناسب برای دانش‌آموزان و دانشجویان است. این کتاب‌ها به شما کمک می‌کنند تا مفاهیم را بهتر درک کنید و در امتحانات موفق‌تر باشید. با تمرین‌های متنوع و مثال‌های کاربردی، یادگیری را برای شما آسان‌تر می‌کنند. این مجموعه به ویژه برای افرادی که به دنبال تقویت دانش خود هستند، بسیار مفید خواهد بود.",
    },
  ],
  اصفهان: [
    {
      id: 21,
      date: getRandomDate(),
      name: "مبل راحتی",
      price: "۵,۵۰۰,۰۰۰ تومان",
      location: "چهارباغ",
      category: "ورزش و سرگرمی",
      image: "images/img9.PNG",
      description:
        "مبل راحتی با طراحی مدرن و کیفیت ساخت بالا، گزینه‌ای عالی برای نشیمن است. این مبل به راحتی با دکوراسیون منزل شما هماهنگ می‌شود و فضایی دلپذیر برای استراحت و دورهمی‌های خانوادگی فراهم می‌آورد. با استفاده از پارچه‌های با کیفیت و فوم‌های نرم، راحتی و آسایش را در هر نشستن تجربه خواهید کرد. همچنین، طراحی ارگونومیک آن، پشتیبانی مناسبی از بدن شما ارائه می‌دهد.",
    },
    {
      id: 22,
      date: getRandomDate(),
      name: "گوشی سامسونگ A52",
      price: "۷,۲۰۰,۰۰۰ تومان",
      location: "شاهین شهر",
      category: "کالای دیجیتال",
      image: "images/dcc3a57d-d99d-4bfa-b78f-4db9d63d5538.jpg",
      description:
        "گوشی سامسونگ A52 با دوربین چهارگانه و صفحه نمایش AMOLED، مناسب برای عکاسی و وبگردی است. این گوشی با طراحی زیبا و مدرن، تجربه‌ای عالی از استفاده روزمره را به شما ارائه می‌دهد. با امکانات نرم‌افزاری متنوع و باتری با عمر طولانی، می‌توانید به راحتی از اپلیکیشن‌های مختلف استفاده کنید. همچنین، کیفیت تصویر فوق‌العاده آن، تماشای ویدیوها و بازی‌ها را لذت‌بخش‌تر می‌کند.",
    },
    {
      id: 23,
      date: getRandomDate(),
      name: "ساعت مچی",
      price: "۳,۰۰۰,۰۰۰ تومان",
      location: "اصفهان",
      category: "مد و پوشاک",
      image: "images/f815dfba-0558-4bd7-b840-31931f459e06.jpg",
      description:
        "ساعت مچی با طراحی کلاسیک و کیفیت ساخت بالا، مناسب برای استفاده روزمره است. این ساعت با دقت بالا و قابلیت‌های متنوع، علاوه بر نشان دادن زمان، به عنوان یک اکسسوری شیک نیز عمل می‌کند. با بندهای قابل تنظیم و طراحی زیبا، می‌توانید آن را با هر نوع لباسی هماهنگ کنید. این ساعت انتخابی مناسب برای افرادی است که به جزئیات و کیفیت اهمیت می‌دهند.",
    },
    {
      id: 24,
      date: getRandomDate(),
      name: "کتاب‌های تاریخی",
      price: "۵۰۰,۰۰۰ تومان",
      location: "اصفهان",
      category: "کتاب و رسانه",
      image: "images/d85c7e9d-34a3-48d0-a5be-2a1c32621441.jpg",
      description:
        "کتاب‌های تاریخی با محتوای جذاب و آموزنده، مناسب برای علاقه‌مندان به تاریخ هستند. این کتاب‌ها به شما کمک می‌کنند تا با رویدادهای مهم تاریخی و شخصیت‌های تأثیرگذار آشنا شوید. با نثر روان و تصاویر جذاب، مطالعه این کتاب‌ها نه تنها آموزنده بلکه لذت‌بخش است. این مجموعه می‌تواند به عنوان منبعی ارزشمند برای دانشجویان و محققان تاریخ نیز مورد استفاده قرار گیرد.",
    },
    {
      id: 25,
      date: getRandomDate(),
      name: "کفش ورزشی آدیداس",
      price: "۲,۵۰۰,۰۰۰ تومان",
      location: "اصفهان",
      category: "مد و پوشاک",
      image: "images/728584de-31ec-4614-a083-d75ef01709c6.jpg",
      description:
        "کفش ورزشی آدیداس با طراحی ارگونومیک و راحتی بالا، مناسب برای ورزش و فعالیت‌های روزمره است. این کفش با استفاده از مواد با کیفیت و تکنولوژی‌های پیشرفته، پشتیبانی و راحتی بیشتری را در حین ورزش فراهم می‌کند. طراحی جذاب آن، به شما این امکان را می‌دهد که در هر موقعیتی خوش‌استایل باشید. همچنین، این کفش با دوام و مقاوم، گزینه‌ای عالی برای استفاده طولانی‌مدت است.",
    },
    {
      id: 26,
      date: getRandomDate(),
      name: "تلویزیون سونی ۴۹ اینچ",
      price: "۳۲,۰۰۰,۰۰۰ تومان",
      location: "اصفهان",
      category: "الکترونیک",
      image: "images/85cd406b-e89b-418e-a4cf-142bbb976110.jpg",
      description:
        "تلویزیون سونی 49 اینچ با کیفیت تصویر 4K و فناوری HDR، تجربه‌ای عالی از تماشای فیلم و برنامه‌های تلویزیونی را به شما ارائه می‌دهد. این تلویزیون با طراحی باریک و مدرن، به راحتی با دکوراسیون منزل شما هماهنگ می‌شود. امکانات هوشمند آن، شامل دسترسی به اینترنت و اپلیکیشن‌های مختلف، امکان تماشای محتواهای آنلاین را برای شما فراهم می‌کند. با این تلویزیون، هر شب می‌تواند به یک تجربه سینمایی تبدیل شود.",
    },
  ],
};

function getRandomDate() {
  const now = new Date();
  const randomOffset = Math.floor(Math.random() * 24); // Random number between 0 and 100
  const options = ["days", "hours", "minutes"];
  const randomOption = options[Math.floor(Math.random() * options.length)];

  switch (randomOption) {
    case "days":
      now.setDate(now.getDate() - randomOffset);
      return `${randomOffset}  روز پیش`;
    case "hours":
      now.setHours(now.getHours() - randomOffset);
      return `${randomOffset}  ساعت پیش`;
    case "minutes":
      now.setMinutes(now.getMinutes() - randomOffset);
      return `${randomOffset}  دقیقه پیش`;
    default:
      return " لحظاتی پیش ";
  }
}

function selectCity(city) {
  const button = event.currentTarget;
  button.classList.add("selected");

  setTimeout(() => {
    alert(`شما شهر ${city} را انتخاب کردید.`);
    button.classList.remove("selected");
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".city-button");
  buttons.forEach((button, index) => {
    button.style.animationDelay = `${index * 0.1}s`;
    button.classList.add("animate-in");
  });
});

function selectCity(city) {
  localStorage.setItem("selectedCity", city);
  window.location.href = "products.html";
}

function changeCity() {
  window.location.href = "index.html";
}

function showProductList() {
  const selectedCity = localStorage.getItem("selectedCity");
  if (!selectedCity) {
    window.location.href = "index.html";
    return;
  }
  document.querySelector(
    ".city-title"
  ).textContent = `آگهی‌ها در ${selectedCity}`;
  document.querySelector(
    ".header-title"
  ).textContent = ` دیوار ${selectedCity}   : انواع آگهی‌ها و خدمات  `;
  renderProducts(productsByCity[selectedCity]);
  renderProducts(productsByCity[selectedCity]);
}

function renderProducts(productsToRender) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  productsToRender.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "box";
    productElement.onclick = () => navigateToDetailsPage(product.id);
    productElement.innerHTML = `
      
        <div class="image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="title"><h2>${product.name}</h2></div>
        <div class="price"><p>${product.price}</p></div>
        <div class="location"><p>${product.location}</p></div>
        <div class="message"><i class="fa-solid fa-comment"></i></div>
      
    `;
    productsContainer.appendChild(productElement);
  });
}

function filterByCategory(category) {

  const selectedCity = localStorage.getItem("selectedCity");

  const filteredProducts = productsByCity[selectedCity].filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) &&
      (category === "" || product.category === category)
  );

  renderProducts(filteredProducts);
}

function filterProducts() {
  const selectedCity = localStorage.getItem("selectedCity");
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const selectedCategory = ""; 

  const filteredProducts = productsByCity[selectedCity].filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) &&
      (selectedCategory === "" || product.category === selectedCategory)
  );

  renderProducts(filteredProducts);
}

function filterByCategory(category) {
  const selectedCity = localStorage.getItem("selectedCity");
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();

  const filteredProducts = productsByCity[selectedCity].filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) &&
      (category === "" || product.category === category)
  );

  renderProducts(filteredProducts);
}

function navigateToDetailsPage(productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = "details.html";
}

document.addEventListener("DOMContentLoaded", function () {

  const productId = localStorage.getItem("selectedProductId");

  const selectedCity = localStorage.getItem("selectedCity");

  const products = productsByCity[selectedCity];

  const product = products.find((p) => p.id === parseInt(productId));

  if (product) {
    document.querySelector(".product-title").textContent = product.name;
    document.querySelector(".product-price").textContent = product.price;
    document.querySelector(".product-location").textContent = product.location;
    document.querySelector(".product-category").textContent = product.category; 
    document.querySelector(".product-image").src = product.image;
    document.querySelector(".product-description").textContent = product.description;
    document.querySelector(".product-date").textContent = product.date;
  } else {
    console.error("Product not found");
  }
});
