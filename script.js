// Scroll Animation
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) el.classList.add('active');
    });
});

// Dark / Light Mode
document.getElementById('toggleMode').onclick = () => {
    document.body.classList.toggle('light');
};

// Language Switch
document.getElementById('toggleLang').onclick = () => {
    const isArabic = document.documentElement.lang === 'ar';
    document.documentElement.lang = isArabic ? 'en' : 'ar';
    document.documentElement.dir = isArabic ? 'ltr' : 'rtl';

    // Toggle Arabic elements
    document.querySelectorAll('.nav-ar, .hero-ar, .section-ar, .skill-name-ar, .proj-ar, .input-ar, .btn-ar, .footer-ar').forEach(el => {
        el.style.display = isArabic ? 'none' : '';
    });
    // Toggle English elements
    document.querySelectorAll('.nav-en, .hero-en, .section-en, .skill-name-en, .proj-en, .input-en, .btn-en, .footer-en').forEach(el => {
        el.style.display = isArabic ? '' : 'none';
    });

    // تغيير نص الزر
    document.getElementById('toggleLang').innerText = isArabic ? 'AR' : 'EN';
};
