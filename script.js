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

// Network Nodes Background
const canvas = document.getElementById('network-bg');
const ctx = canvas.getContext('2d');
let nodes = [];
let maxDistance = 150;
let numNodes = 50;

// Resize canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Create nodes
for (let i = 0; i < numNodes; i++) {
    nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
    });
}

// Animate nodes
function animateNodes() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Draw lines
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
            let dx = nodes[i].x - nodes[j].x;
            let dy = nodes[i].y - nodes[j].y;
            let dist = Math.sqrt(dx*dx + dy*dy);
            if(dist < maxDistance){
                ctx.strokeStyle = 'rgba(56,189,248,'+(1-dist/maxDistance)+')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }

    // Draw nodes
