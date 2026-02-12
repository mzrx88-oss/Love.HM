// دالة التنقل بين الصفحات مع تشغيل الأنيميشن
function showPage(id) {
    // إخفاء جميع الأقسام
    document.querySelectorAll('section').forEach(s => {
        s.style.display = 'none';
        s.classList.remove('active');
    });

    // إظهار القسم المطلوب
    const page = document.getElementById(id);
    if (page) {
        page.style.display = 'flex';
        
        // تأخير بسيط لتفعيل الأنيميشن (fade-in-up)
        setTimeout(() => {
            page.classList.add('active');
            const animatedElements = page.querySelectorAll('.fade-in-up');
            animatedElements.forEach((el, i) => {
                el.classList.remove('appear');
                setTimeout(() => {
                    el.classList.add('appear');
                }, i * 400); // ظهور العناصر بالتتابع
            });
        }, 50);
    }

    // تشغيل العدادات لو وصلنا لصفحة الذكريات
    if(id === 'memories-page') {
        startTimers();
    }
}

// دالة التحقق من كلمة السر للموقع الجديد
function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    if(passwordInput === "1102008") {
        showPage('flower-page');
    } else {
        alert("كلمة السر غلط يا روحي.. حاولي تاني ❤️");
    }
}

// دالات الانتقال السريع
function goToLetter() { showPage('letter-page'); }
function goToMemories() { showPage('memories-page'); }
function goToFinal() { showPage('final-page'); }
function goBack(id) { showPage(id); }

// دالة فتح الموقع القديم (تم التعديل ليتخطى كلمة السر تلقائياً)
function openOldSite() {
    // الرابط السحري اللي بيبعت إشارة للموقع القديم عشان يفتح الأبواب
    const oldSiteUrl = "https://mzrx88-oss.github.io/H_2008/#bypass";
    
    // بيفتح الموقع في صفحة جديدة
    window.open(oldSiteUrl, "_blank");
}

// دالة العدادات (عداد الحب وعداد الفلانتين)
function startTimers() {
    const startDate = new Date("2025-06-15T00:00:00").getTime();
    const vDate = new Date("2026-02-14T00:00:00").getTime(); 

    // تحديث كل ثانية
    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        
        // 1. عداد وقت الحب (تصاعدي)
        const diffLove = now - startDate;
        const d = Math.floor(diffLove / (1000 * 60 * 60 * 24));
        const h = Math.floor((diffLove % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diffLove % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diffLove % (1000 * 60)) / 1000);
        
        const loveEl = document.getElementById('love-counter');
        if(loveEl) {
            loveEl.innerText = `${d} يوم و ${h} ساعة و ${m} دقيقة و ${s} ثانية`;
        }

        // 2. عداد الفلانتين (تنازلي)
        const diffV = vDate - now;
        const vEl = document.getElementById('v-counter');
        
        if (diffV > 0) {
            const vd = Math.floor(diffV / (1000 * 60 * 60 * 24));
            const vh = Math.floor((diffV % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const vm = Math.floor((diffV % (1000 * 60 * 60)) / (1000 * 60));
            const vs = Math.floor((diffV % (1000 * 60)) / 1000);
            if(vEl) {
                vEl.innerText = `${vd} يوم | ${vh} ساعة | ${vm} دقيقة | ${vs} ثانية`;
            }
        } else {
            if(vEl) vEl.innerText = "كل عيد حب واحنا سوا ❤️";
        }
    }, 1000);
}

// التأكد من بدء التشغيل عند تحميل الصفحة
window.onload = () => {
    showPage('login-page');
};
