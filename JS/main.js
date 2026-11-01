// ======================
// Translations (English lives in index.html)
// ======================
const arabic = {
    skip: "انتقل إلى المحتوى",
    navHisbah: "حسبة",
    navStack: "التقنيات",
    navContact: "تواصل",
    navLabel: "التنقل الرئيسي",
    toTop: "العودة إلى الأعلى",
    fullName: "عبد المعين البربري",
    claim: "أكتب الكود من اليسار إلى اليمين، لأناس يقرؤون من اليمين إلى اليسار.",
    intro: "مطوّر Full-stack أبني منتجات عربية أولاً، من قاعدة البيانات حتى الجوال في يد صاحب المحل.",
    ctaWork: "شاهد أعمالي",
    ctaContact: "تواصل معي",
    portraitAlt: "عبد المعين مبتسماً، يرتدي نظارة مستديرة وقميصاً أخضر",
    hisbahStatus: "يعمل على الويب وأندرويد",
    hisbahTitle: "دفتر الدين، على الجوال.",
    hisbahLead: "حسبة يحل محل الدفتر الورقي في محلات البقالة الصغيرة. يبيع الموظف من جوال أندرويد، ويبقى دين كل زبون باسمه، ويدير المالك المخزون والتقارير من أي متصفح.",
    hisbahRule1: "البيع بالباركود أو بالوزن",
    hisbahRule1Text: "امسح المنتج نفسه مرتين فتزيد الكمية. ومنتجات الكيلو توزن حتى الغرام.",
    hisbahRule2: "دين له سقف",
    hisbahRule2Text: "الدفعة الجزئية تسجّل الباقي ديناً، بموعد سداد وسقف لا يتخطاه الموظف.",
    hisbahRule3: "الفواتير تبقى في السجل",
    hisbahRule3Text: "الخطأ يُلغى بسبب مكتوب. يعود المخزون وتبقى الفاتورة في السجل.",
    hisbahOpen: "افتح حسبة",
    viewCode: "شاهد الكود",
    hisbahDemoCaption: "جرّبه: أضف منتجات، اختر آجل، وتجاوز سقف ₪300. بيانات تجريبية، أعدت بناءها بـ JavaScript خالص لهذه الصفحة.",
    hisbahScreens: "شاشات حقيقية من التطبيق، ببيانات تجريبية",
    hisbahScreensLabel: "شاشات حسبة",
    hisbahSplashAlt: "شاشة البداية في حسبة مع الشعار",
    hisbahHomeAlt: "الشاشة الرئيسية في حسبة مع مبيعات اليوم والديون",
    hisbahEndAlt: "الاختصارات وآخر فواتير اليوم في حسبة",
    hisbahWebAlt: "موقع حسبة باللغة العربية",
    gotraineeStatus: "الإصدار الأول قيد البناء",
    gotraineeTitle: "اكتب حاجتك، واستلم المنتج جاهزاً.",
    gotraineeLead: "GoTrainee يتيح للعيادات ومكاتب المحاماة والمحلات طلب حلول رقمية دون توظيف أحد أو إدارته. محادثة ذكاء اصطناعي تحوّل الحاجة إلى وصف واضح، وفريق مستقلين مختبَرين ينفذها مرحلة بعد مرحلة. ويكسب الطلاب والخريجون خبرة حقيقية في المشاريع.",
    gotraineeOpen: "افتح GoTrainee",
    gotraineeBrandAlt: "هوية GoTrainee باللونين الكحلي والذهبي",
    gotraineeWebAlt: "موقع GoTrainee باللغة العربية",
    stackTitle: "على ماذا يعمل كل منتج",
    layerWeb: "الويب",
    layerApi: "الـ API",
    layerMobile: "الجوال",
    layerAi: "الذكاء الاصطناعي",
    layerData: "قاعدة البيانات",
    layerTests: "الاختبارات",
    layerHosting: "الاستضافة",
    stackFlutter: "Flutter لأندرويد، مع مسح الباركود بالكاميرا",
    stackGemini: "Gemini لمحادثات الاكتشاف واختبارات المهارات",
    stackNone: "غير مستخدم",
    stackNote: "وتحتهما: HTML وCSS وJavaScript وGit وتخطيطات اليمين إلى اليسار وإمكانية الوصول. هذه الصفحة نفسها مكتوبة بـ HTML وCSS وJavaScript دون أي إطار عمل.",
    contactTitle: "أخبرني ماذا تريد أن تبني.",
    footer: "© 2026 عبد المعين البربري"
};

const root = document.documentElement;
const motionOn = root.classList.contains("motion");
const canHover = window.matchMedia("(hover: hover)").matches;

const langToggle = document.querySelector(".lang-toggle");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const altNodes = document.querySelectorAll("[data-i18n-alt]");
const ariaNodes = document.querySelectorAll("[data-i18n-aria]");

// Remember the English text so the toggle can restore it
const english = new Map();
i18nNodes.forEach(node => english.set(node, node.textContent.replace(/\s+/g, " ").trim()));
altNodes.forEach(node => english.set(node, node.alt));
ariaNodes.forEach(node => english.set(node, node.getAttribute("aria-label")));

let currentLang = "en";

function readSavedLang() {
    try {
        return localStorage.getItem("lang");
    } catch {
        return null;
    }
}

function saveLang(lang) {
    try {
        localStorage.setItem("lang", lang);
    } catch {
        // Storage is blocked; the page still works in the current language
    }
}

function applyLang(lang) {
    currentLang = lang;
    const isArabic = lang === "ar";

    root.lang = lang;
    root.dir = isArabic ? "rtl" : "ltr";
    document.title = isArabic ? "عبد المعين البربري | مطوّر Full-stack" : "Abdelmoen Al-Barbari | Full-stack developer";

    i18nNodes.forEach(node => {
        node.textContent = isArabic ? arabic[node.dataset.i18n] : english.get(node);
    });
    altNodes.forEach(node => {
        node.alt = isArabic ? arabic[node.dataset.i18nAlt] : english.get(node);
    });
    ariaNodes.forEach(node => {
        node.setAttribute("aria-label", isArabic ? arabic[node.dataset.i18nAria] : english.get(node));
    });

    langToggle.textContent = isArabic ? "English" : "العربية";
    langToggle.lang = isArabic ? "en" : "ar";

    splitWords();
    buildRoute();
    measure();
}

langToggle.addEventListener("click", () => {
    const next = currentLang === "en" ? "ar" : "en";
    saveLang(next);

    if (document.startViewTransition && motionOn) {
        document.startViewTransition(() => applyLang(next));
    } else {
        applyLang(next);
    }
});


// ======================
// Hisbah sale demo (amounts in agorot, like the real app)
// ======================
const saleDemo = document.querySelector("#sale-demo");

const products = [
    { id: "milk", name: "حليب طويل الأجل", price: 650, unit: "قطعة" },
    { id: "sugar", name: "سكر 1 كغ", price: 500, unit: "قطعة" },
    { id: "cola", name: "كولا علبة", price: 350, unit: "قطعة" },
    { id: "almond", name: "لوز نيء", price: 3000, unit: "0.750 كغ" }
];

const debtLimit = 30000;

const sale = {
    cart: {},
    mode: "cash",
    salesToday: 128450,
    invoices: 37,
    customerDebt: 24500,
    message: ""
};

const money = agorot => "₪" + (agorot / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const cartTotal = () => products.reduce((sum, item) => sum + item.price * (sale.cart[item.id] || 0), 0);

function buildSaleDemo() {
    saleDemo.innerHTML = `
        <header class="phone__top">
            <img src="images/hisbah-logo.png" width="36" height="36" alt="">
            <div>
                <strong>بيع جديد</strong>
                <span>بقالة النور</span>
            </div>
        </header>

        <div class="phone__card">
            <span>مبيعات اليوم</span>
            <output class="phone__total" data-field="sales" dir="ltr"></output>
            <span class="phone__count" data-field="invoices"></span>
        </div>

        <div class="phone__products">
            ${products.map(item => `
                <button type="button" class="phone__product" data-product="${item.id}">
                    <b>${item.name}</b>
                    <span><bdi dir="ltr">${money(item.price)}</bdi> · ${item.unit}</span>
                    <i data-qty="${item.id}" hidden></i>
                </button>`).join("")}
        </div>

        <div class="phone__pay" role="group" aria-label="طريقة الدفع">
            <button type="button" data-mode="cash">نقدي</button>
            <button type="button" data-mode="debt">آجل على أبو محمد</button>
        </div>

        <div class="phone__debt" data-field="debtBox" hidden>
            <span data-field="debtText"></span>
            <div class="phone__meter"><i data-field="debtBar"></i></div>
        </div>

        <button type="button" class="phone__confirm" data-field="confirm"></button>
        <p class="phone__message" data-field="message" role="status"></p>`;
}

function renderSale() {
    const field = name => saleDemo.querySelector(`[data-field="${name}"]`);
    const total = cartTotal();
    const debtAfter = sale.customerDebt + total;
    const overLimit = sale.mode === "debt" && debtAfter > debtLimit;

    field("sales").textContent = money(sale.salesToday);
    field("invoices").textContent = `${sale.invoices} فاتورة`;

    products.forEach(item => {
        const quantity = sale.cart[item.id] || 0;
        const badge = saleDemo.querySelector(`[data-qty="${item.id}"]`);
        badge.hidden = quantity === 0;
        badge.textContent = quantity;
    });

    saleDemo.querySelectorAll("[data-mode]").forEach(button => {
        button.setAttribute("aria-pressed", button.dataset.mode === sale.mode);
    });

    field("debtBox").hidden = sale.mode !== "debt";
    field("debtText").innerHTML = `دين أبو محمد <bdi dir="ltr">${money(debtAfter)}</bdi> من سقف <bdi dir="ltr">${money(debtLimit)}</bdi>`;
    field("debtBar").style.inlineSize = `${Math.min(debtAfter / debtLimit, 1) * 100}%`;
    field("debtBox").classList.toggle("is-over", overLimit);

    const confirm = field("confirm");
    confirm.disabled = total === 0 || overLimit;
    confirm.textContent = total === 0 ? "أضف منتجاً للبدء" : `تأكيد البيع ${money(total)}`;

    field("message").textContent = overLimit
        ? `تم إيقاف البيع: يتجاوز السقف بـ ${money(debtAfter - debtLimit)}. يحتاج موافقة المالك.`
        : sale.message;
}

function confirmSale() {
    const total = cartTotal();
    if (total === 0) return;

    if (sale.mode === "debt") {
        sale.customerDebt += total;
        sale.message = "تم البيع، وسُجّل الدين باسم أبو محمد.";
    } else {
        sale.message = "تم البيع، وأُضيف المبلغ إلى النقدي.";
    }

    sale.salesToday += total;
    sale.invoices += 1;
    sale.cart = {};

    // Redraw the double rule under the new total
    const rule = saleDemo.querySelector(".phone__total");
    rule.classList.remove("is-closed");
    void rule.offsetWidth;
    rule.classList.add("is-closed");
}

saleDemo.addEventListener("click", (e) => {
    const product = e.target.closest("[data-product]");
    const mode = e.target.closest("[data-mode]");
    const confirm = e.target.closest('[data-field="confirm"]');

    if (product) {
        const id = product.dataset.product;
        sale.cart[id] = (sale.cart[id] || 0) + 1;
        sale.message = "";
    } else if (mode) {
        sale.mode = mode.dataset.mode;
        sale.message = "";
    } else if (confirm) {
        confirmSale();
    } else {
        return;
    }

    renderSale();
});


// ======================
// GoTrainee project route
// ======================
const routeDemo = document.querySelector("#route-demo");

const routeSteps = {
    en: [
        { title: "Describe the need", who: "The client", now: "The clinic owner answers an AI chat about how bookings work today. The chat writes up what they need.", next: "An admin reviews the summary." },
        { title: "Receive the proposal", who: "An admin", now: "The client gets a fixed scope, price, schedule and deliverables. AI drafts help the admin but never reach the client as a price.", next: "The client accepts, asks for changes or declines." },
        { title: "Pay the first milestone", who: "The client", now: "Payment comes before work. Nothing reaches freelancers until the first installment is paid.", next: "An admin confirms the payment and staffing opens." },
        { title: "Form the team", who: "The team leader", now: "The team leader picks freelancers who passed practical skill tests at the required level.", next: "Members confirm and the client approves the plan." },
        { title: "Review each milestone", who: "QA, then the client", now: "Work reaches the client only after the team leader approves it and QA passes. The client accepts it or asks for a revision.", next: "The next installment opens the next milestone." },
        { title: "Receive the files", who: "The system", now: "Every milestone is accepted and the balance is zero, so the final files are released and the warranty starts.", next: "The project closes when the warranty ends." }
    ],
    ar: [
        { title: "اكتب الحاجة", who: "العميل", now: "صاحب العيادة يجيب عن أسئلة محادثة ذكاء اصطناعي حول طريقة الحجز اليوم، والمحادثة تكتب ملخص حاجته.", next: "مسؤول يراجع الملخص." },
        { title: "استلم العرض", who: "المسؤول", now: "يصل العميل نطاق ثابت وسعر وجدول ومخرجات. مسودات الذكاء الاصطناعي تساعد المسؤول ولا تصل العميل كسعر أبداً.", next: "العميل يقبل أو يطلب تعديلاً أو يرفض." },
        { title: "ادفع المرحلة الأولى", who: "العميل", now: "الدفع قبل العمل. لا يصل شيء للمستقلين قبل دفع القسط الأول.", next: "المسؤول يؤكد الدفع ويبدأ التوظيف." },
        { title: "كوّن الفريق", who: "قائد الفريق", now: "قائد الفريق يختار مستقلين اجتازوا اختبارات مهارة عملية بالمستوى المطلوب.", next: "الأعضاء يؤكدون والعميل يعتمد الخطة." },
        { title: "راجع كل مرحلة", who: "الجودة ثم العميل", now: "لا يصل العمل للعميل إلا بعد موافقة قائد الفريق واجتياز فحص الجودة. العميل يقبله أو يطلب تعديلاً.", next: "القسط التالي يفتح المرحلة التالية." },
        { title: "استلم الملفات", who: "النظام", now: "كل المراحل مقبولة والرصيد صفر، فتُسلَّم الملفات النهائية ويبدأ الضمان.", next: "يُغلق المشروع عند انتهاء الضمان." }
    ]
};

const routeLabels = {
    en: { project: "Sample project: online booking for a clinic. Keep scrolling to move it forward.", step: "Step", acts: "Acts now", next: "What happens next" },
    ar: { project: "مشروع تجريبي: حجز إلكتروني لعيادة. واصل التمرير لتحريكه إلى الأمام.", step: "الخطوة", acts: "يتصرف الآن", next: "ماذا يحدث بعدها" }
};

let routeIndex = 0;

function buildRoute() {
    const steps = routeSteps[currentLang];
    const labels = routeLabels[currentLang];

    routeDemo.innerHTML = `
        <p class="route__head">${labels.project}</p>

        <ol class="route__track">
            ${steps.map((item, index) => `
                <li><button type="button" data-step="${index}" aria-label="${labels.step} ${index + 1}: ${item.title}">${index + 1}</button></li>`).join("")}
        </ol>

        <ol class="route__steps">
            ${steps.map((item, index) => `
                <li class="route__step">
                    <span class="route__number" aria-hidden="true">${index + 1}</span>
                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.now}</p>
                        <dl>
                            <div><dt>${labels.acts}</dt><dd>${item.who}</dd></div>
                            <div><dt>${labels.next}</dt><dd>${item.next}</dd></div>
                        </dl>
                    </div>
                </li>`).join("")}
        </ol>`;

    setRouteStep(routeIndex, true);
}

function setRouteStep(index, force) {
    if (index === routeIndex && !force) return;
    routeIndex = index;

    const count = routeSteps.en.length;
    routeDemo.querySelector(".route__track").style.setProperty("--progress", index / (count - 1));

    routeDemo.querySelectorAll(".route__track li").forEach((item, i) => {
        item.classList.toggle("is-done", i < index);
        item.classList.toggle("is-current", i === index);
    });

    routeDemo.querySelectorAll(".route__step").forEach((item, i) => {
        item.classList.toggle("is-past", i < index);
        item.classList.toggle("is-current", i === index);
    });
}

routeDemo.addEventListener("click", (e) => {
    const stepButton = e.target.closest("[data-step]");
    if (!stepButton) return;

    const index = Number(stepButton.dataset.step);
    if (!motionOn) return setRouteStep(index);

    // Scroll to the spot where this step is showing
    const distance = routePin.height - window.innerHeight;
    window.scrollTo({ top: routePin.top + distance * ((index + .5) / routeSteps.en.length), behavior: "smooth" });
});


// ======================
// Text effects
// ======================

// Wrap words so each one can climb out of its own mask
function splitWords() {
    document.querySelectorAll("[data-split]").forEach(node => {
        const words = node.textContent.trim().split(/\s+/);
        node.setAttribute("aria-label", words.join(" "));
        node.innerHTML = words
            .map((word, i) => `<span class="word" aria-hidden="true" style="--i:${i}"><span>${word}</span></span> `)
            .join("");
    });
    litWords = [...document.querySelectorAll('[data-split="light"] .word>span')];
}

// Hovered labels shuffle through code and Arabic letters, then settle
const scrambleGlyphs = "abcdefghijklmnopqrstuvwxyz{}<>/=;ابتثجحخدذرزسشصضطظعغفقكلمنهوي";

function scramble(node) {
    if (node.dataset.running) return;
    node.dataset.running = "1";

    const finalText = node.textContent;
    const letters = [...finalText];
    const start = performance.now();
    const duration = 420;

    function tick(now) {
        const settled = Math.floor(((now - start) / duration) * letters.length);

        if (settled >= letters.length) {
            node.textContent = finalText;
            delete node.dataset.running;
            return;
        }

        node.textContent = letters
            .map((letter, i) => {
                if (i < settled || letter === " ") return letter;
                return scrambleGlyphs[Math.floor(Math.random() * scrambleGlyphs.length)];
            })
            .join("");
        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

// Reveal blocks the first time they enter the screen
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
    });
}, { threshold: .15 });

// ======================
// Hero background: two streams of letters running against each other
// ======================
const glyphCanvas = document.querySelector(".hero__glyphs");
const glyphContext = glyphCanvas.getContext("2d");
const latinGlyphs = "abcdefghijklmnopqrstuvwxyz0123456789{}()<>/=;$".split("");
const arabicGlyphs = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي".split("");

let glyphRows = [];
let glyphWidth = 0;
let glyphHeight = 0;

function setupGlyphs() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    glyphWidth = glyphCanvas.clientWidth;
    glyphHeight = glyphCanvas.clientHeight;
    glyphCanvas.width = glyphWidth * ratio;
    glyphCanvas.height = glyphHeight * ratio;
    glyphContext.setTransform(ratio, 0, 0, ratio, 0, 0);

    const small = glyphWidth < 760;
    const rowGap = small ? 30 : 34;
    const cellGap = small ? 24 : 26;
    const cells = Math.ceil(glyphWidth / cellGap) + 2;

    glyphRows = Array.from({ length: Math.ceil(glyphHeight / rowGap) }, (_, row) => {
        const forward = row % 2 === 0;
        const pool = forward ? latinGlyphs : arabicGlyphs;
        return {
            y: row * rowGap + rowGap / 2,
            forward,
            pool,
            cellGap,
            speed: (.25 + Math.random() * .55) * (forward ? 1 : -1),
            offset: Math.random() * cellGap,
            glyphs: Array.from({ length: cells }, () => pool[Math.floor(Math.random() * pool.length)])
        };
    });
}

function drawGlyphs(boost) {
    const context = glyphContext;
    context.clearRect(0, 0, glyphWidth, glyphHeight);
    context.font = "500 15px 'IBM Plex Sans', 'IBM Plex Sans Arabic', sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "rgba(246, 244, 239, .1)";

    glyphRows.forEach(row => {
        row.offset += row.speed * (1 + boost);
        const span = row.cellGap * row.glyphs.length;

        // Letters keep changing so the field never looks like a loop
        if (Math.random() < .12) {
            row.glyphs[Math.floor(Math.random() * row.glyphs.length)] = row.pool[Math.floor(Math.random() * row.pool.length)];
        }

        row.glyphs.forEach((glyph, i) => {
            const x = ((i * row.cellGap + row.offset) % span + span) % span - row.cellGap;
            context.fillText(glyph, x, row.y);
        });
    });
}


// ======================
// Scroll engine: one loop drives everything that moves
// ======================
const hero = document.querySelector(".hero");
const heroPortrait = document.querySelector(".hero__portrait");
const tickers = [...document.querySelectorAll(".ticker__row")].map(row => ({
    row,
    direction: Number(row.dataset.direction),
    x: 0,
    width: 0
}));
const gallery = document.querySelector(".hscroll");
const galleryPin = document.querySelector(".hscroll__pin");
const galleryTrack = document.querySelector(".hscroll__track");
const routePinNode = document.querySelector(".route-pin");
const contactSection = document.querySelector(".contact");
const toneNodes = [...document.querySelectorAll("[data-tone]")].map(node => ({ node, top: 0 }));

const routePin = { top: 0, height: 0 };
const galleryState = { active: false, top: 0, height: 0, distance: 0 };
let heroHeight = 0;
let pageHeight = 1;
let contactTop = 0;
let contactHeight = 0;
let litWords = [];
let lastScroll = window.scrollY;
let velocity = 0;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const pageTop = node => node.getBoundingClientRect().top + window.scrollY;

function measure() {
    const useGallery = motionOn && window.matchMedia("(min-width: 981px)").matches;

    galleryState.active = useGallery;
    if (useGallery) {
        galleryState.distance = Math.max(galleryTrack.scrollWidth - window.innerWidth, 0);
        gallery.style.height = `${galleryState.distance + window.innerHeight}px`;
        galleryState.top = pageTop(gallery);
        galleryState.height = gallery.offsetHeight;
    } else {
        gallery.style.height = "";
        galleryTrack.style.transform = "";
    }

    routePin.top = pageTop(routePinNode);
    routePin.height = routePinNode.offsetHeight;

    heroHeight = hero.offsetHeight;
    pageHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    contactTop = pageTop(contactSection);
    contactHeight = contactSection.offsetHeight;

    tickers.forEach(ticker => {
        ticker.width = ticker.row.scrollWidth / 2;
    });

    toneNodes.forEach(item => {
        item.top = pageTop(item.node);
    });

    updateTone();

    if (glyphCanvas.clientWidth) setupGlyphs();
}

// The navbar and progress bar take on the colors of the section under them
function updateTone() {
    const line = window.scrollY + 40;
    const current = toneNodes.reduce((found, item) => (item.top <= line ? item : found), toneNodes[0]);
    root.dataset.tone = current.node.dataset.tone;
}

function frame() {
    const scroll = window.scrollY;
    const viewport = window.innerHeight;

    // Fast scrolling pushes the tickers and the letter field harder
    velocity += ((scroll - lastScroll) - velocity) * .12;
    lastScroll = scroll;

    root.style.setProperty("--scroll", (scroll / pageHeight).toFixed(4));

    // Hero tears apart as it leaves
    const heroTravel = Math.max(heroHeight - viewport, 1);
    const tear = clamp(scroll / heroTravel, 0, 1);
    hero.style.setProperty("--tear", tear.toFixed(4));

    if (scroll < heroHeight) drawGlyphs(Math.abs(velocity) * .25);

    // Tickers run all the time and lean into the scroll
    tickers.forEach(ticker => {
        ticker.x += ticker.direction * (.8 + Math.abs(velocity) * .2);
        if (ticker.x > 0) ticker.x -= ticker.width;
        if (ticker.x < -ticker.width) ticker.x += ticker.width;
        const lean = clamp(velocity * .12, -6, 6);
        ticker.row.style.transform = `translate3d(${ticker.x}px, 0, 0) skewX(${(-lean).toFixed(2)}deg)`;
    });

    // Sideways gallery
    if (galleryState.active) {
        const travel = clamp((scroll - galleryState.top) / Math.max(galleryState.height - viewport, 1), 0, 1);
        const shift = travel * galleryState.distance * (currentLang === "ar" ? 1 : -1);
        galleryTrack.style.transform = `translate3d(${shift}px, 0, 0)`;
    }

    // GoTrainee route
    const routeTravel = clamp((scroll - routePin.top) / Math.max(routePin.height - viewport, 1), 0, .9999);
    setRouteStep(Math.floor(routeTravel * routeSteps.en.length));

    // Contact words light up one at a time
    const light = clamp((scroll + viewport * .8 - contactTop) / (contactHeight * .55), 0, 1);
    litWords.forEach((word, i) => {
        const each = clamp(light * litWords.length - i, 0, 1);
        word.style.setProperty("--lit", each.toFixed(3));
    });

    requestAnimationFrame(frame);
}


// ======================
// Pointer effects
// ======================
function setupPointer() {
    let lamp = 0;
    let lastMove = 0;

    window.addEventListener("pointermove", (e) => {
        lastMove = performance.now();
        const box = heroPortrait.getBoundingClientRect();
        heroPortrait.style.setProperty("--lamp-x", `${e.clientX - box.left}px`);
        heroPortrait.style.setProperty("--lamp-y", `${e.clientY - box.top}px`);
    }, { passive: true });

    // The lamp widens while the pointer moves over the hero
    function glow() {
        const moving = performance.now() - lastMove < 1600 && window.scrollY < heroHeight;
        lamp += ((moving ? 480 : 0) - lamp) * .08;
        heroPortrait.style.setProperty("--lamp", `${lamp.toFixed(1)}px`);
        requestAnimationFrame(glow);
    }
    glow();

    // Buttons lean toward the cursor
    document.querySelectorAll("[data-magnetic]").forEach(node => {
        node.addEventListener("pointermove", (e) => {
            const box = node.getBoundingClientRect();
            const x = (e.clientX - box.left - box.width / 2) * .28;
            const y = (e.clientY - box.top - box.height / 2) * .28;
            node.style.transform = `translate(${x}px, ${y}px)`;
        });
        node.addEventListener("pointerleave", () => {
            node.style.transform = "";
        });
    });

    document.querySelectorAll("[data-scramble]").forEach(node => {
        node.addEventListener("pointerenter", () => scramble(node));
    });
}


// ======================
// Start
// ======================
buildSaleDemo();
renderSale();

// The Latin name enters letter by letter
const latinLine = document.querySelector(".hero__line--ltr");
latinLine.innerHTML = [...latinLine.textContent]
    .map((letter, i) => `<span style="--i:${i}">${letter}</span>`)
    .join("");

applyLang(readSavedLang() === "ar" ? "ar" : "en");

document.querySelectorAll("[data-split], [data-reveal]").forEach(node => revealObserver.observe(node));

window.addEventListener("scroll", updateTone, { passive: true });
window.addEventListener("resize", measure);
window.addEventListener("load", measure);
document.querySelectorAll("img").forEach(image => image.addEventListener("load", measure, { once: true }));

if (motionOn) {
    if (canHover) setupPointer();
    requestAnimationFrame(frame);
} else {
    setupGlyphs();
    drawGlyphs(0);
    document.querySelectorAll("[data-split], [data-reveal]").forEach(node => node.classList.add("is-in"));
}

// Start the opening once the display fonts are in, or after a second at most
Promise.race([
    document.fonts.ready,
    new Promise(resolve => setTimeout(resolve, 1000))
]).then(() => {
    measure();
    requestAnimationFrame(() => root.classList.add("is-ready"));
});
