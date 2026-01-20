document.getElementById('downloadBtn').addEventListener('click', function() {
    // You can replace the alert with: window.location.href = 'path/to/your/cv.pdf';
   //alert("Starting CV Download...");
   window.location.href = 'file:///C:/Earesh%20resumes/Earesh1.pdf';
});

// Optional: Change navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#000';
    } else {
        nav.style.background = '#1f1f1f';
    }
});