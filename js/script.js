const srcRedirect = document.getElementById('srcRedirect');
const dots = document.getElementById('dots');
function addDot(dotCount) {
    if (dotCount <= 2) {
        dots.textContent = '.'.repeat(dotCount);
        setTimeout(() => addDot(dotCount + 1), 700);} 
        else {window.location.href = 'https://srctools.net';}}
setTimeout(() => {srcRedirect.style.opacity = 1;addDot(1);}, 1000);
