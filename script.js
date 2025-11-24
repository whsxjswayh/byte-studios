// --- CUSTOM CURSOR LOGIC ---
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Function to re-bind hover effects (useful if new elements are added)
function updateCursorTargets() {
    const targets = document.querySelectorAll('.hover-target');
    targets.forEach(target => {
        target.addEventListener('mouseenter', () => cursor.classList.add('active'));
        target.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}
// Initial bind
updateCursorTargets();


// --- NAVIGATION TOGGLE ---
function toggleNav() {
    const nav = document.getElementById('navOverlay');
    nav.classList.toggle('open');
}

// --- ADMIN LOGIN TOGGLE ---
function toggleAdmin() {
    const adminModal = document.getElementById('adminOverlay');
    const nav = document.getElementById('navOverlay');
    
    // Close nav if it's open so they don't overlap messy
    if(nav.classList.contains('open')) nav.classList.remove('open');
    
    adminModal.classList.toggle('open');
}

// --- MEMBER MODAL LOGIC (NEW) ---
function openMember(element) {
    const overlay = document.getElementById('memberOverlay');
    
    // 1. Get Data from the clicked element's attributes
    const name = element.getAttribute('data-name');
    const role = element.getAttribute('data-role');
    const bio = element.getAttribute('data-bio');
    const imgSrc = element.getAttribute('data-img');
    
    // 2. Inject Data into the Modal
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalRole').innerText = role;
    document.getElementById('modalBio').innerText = bio;
    document.getElementById('modalImg').src = imgSrc;
    
    // 3. Show the Modal
    overlay.classList.add('open');
}

function closeMember() {
    document.getElementById('memberOverlay').classList.remove('open');
}


// --- SCROLL ANIMATION ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-trigger, .reveal-text').forEach((el) => {
        observer.observe(el);
    });
});