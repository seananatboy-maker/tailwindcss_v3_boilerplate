// ====== Navbar Scroll ======
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
	const scrolled = window.scrollY > 60;
	navbar.style.background = scrolled ? 'rgba(10, 14, 26, 0.75)' : 'transparent';
	navbar.style.backdropFilter = scrolled ? 'blur(12px)' : 'none';
	navbar.style.borderBottom = scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent';

	if (scrolled) {
		backToTop.classList.remove('opacity-0', 'invisible', 'translate-y-4');
		backToTop.classList.add('opacity-100', 'visible', 'translate-y-0');
	} else {
		backToTop.classList.add('opacity-0', 'invisible', 'translate-y-4');
		backToTop.classList.remove('opacity-100', 'visible', 'translate-y-0');
	}
});

// ====== Off-Canvas Mobile Menu ======
const offcanvasOverlay = document.getElementById('offcanvas-overlay');
const offcanvasPanel = document.getElementById('offcanvas-panel');
const icoMenu = document.getElementById('ico-menu');
const icoClose = document.getElementById('ico-close');

function toggleMobile() {
	 const isOpen = offcanvasPanel.classList.contains('active');
	 if (isOpen) {
	 	closeMobile();
	 } else {
	 	openMobile();
	 }
}

function openMobile() {
	offcanvasOverlay.classList.add('active');
	offcanvasPanel.classList.add('active');
	document.body.classList.add('menu-open');
	icoMenu.classList.add('hidden');
	icoClose.classList.remove('hidden');
}

function closeMobile() {
	offcanvasOverlay.classList.remove('active');
	offcanvasPanel.classList.remove('active');
	document.body.classList.remove('menu-open');
	icoMenu.classList.remove('hidden');
	icoClose.classList.add('hidden');
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
	 if (e.key === 'Escape') closeMobile();
});

// ====== Copy Clone URL (Hero) ======
function copyCloneUrl() {
	const input = document.getElementById('clone-url');
	navigator.clipboard.writeText(input.value);

	const copyIcon = document.getElementById('copy-icon');
	const checkIcon = document.getElementById('check-icon');
	const copyText = document.getElementById('copy-text');
	const toast = document.getElementById('copy-toast');

	copyIcon.classList.add('hidden');
	checkIcon.classList.remove('hidden');
	copyText.textContent = 'Copied!';
	toast.classList.add('show');

	setTimeout(() => {
	copyIcon.classList.remove('hidden');
	checkIcon.classList.add('hidden');
	copyText.textContent = 'Copy';
	toast.classList.remove('show');
	}, 2000);
}

// ====== Copy Clone URL (Quick Start) ======
function copyCloneUrl2() {
	const input = document.getElementById('clone-url-2');
	navigator.clipboard.writeText(input.value);

	const copyIcon = document.getElementById('copy-icon-2');
	const checkIcon = document.getElementById('check-icon-2');
	const copyText = document.getElementById('copy-text-2');

	copyIcon.classList.add('hidden');
	checkIcon.classList.remove('hidden');
	copyText.textContent = 'Copied!';

	setTimeout(() => {
	copyIcon.classList.remove('hidden');
	checkIcon.classList.add('hidden');
	copyText.textContent = 'Copy';
	}, 2000);
}

// ====== Copy command in steps ======
function copyCommand(btn, text) {
	navigator.clipboard.writeText(text);
	const svg = btn.querySelector('svg');
	const originalPath = svg.innerHTML;
	svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>';
	svg.style.color = '#6366f1';
	setTimeout(() => {
	svg.innerHTML = originalPath;
	svg.style.color = '';
	}, 1500);
}

// ====== Smooth Scroll ======
document.querySelectorAll('a[href^="#"]').forEach(a => {
	a.addEventListener('click', e => {
	e.preventDefault();
	const target = document.querySelector(a.getAttribute('href'));
	if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
});

// ====== Scroll Reveal ======
const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
	if (entry.isIntersecting) {
		entry.target.classList.add('active');
	}
	});
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));