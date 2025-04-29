
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12/lib/typed.min.js"></script>

    var typed = new Typed('.typed-text', {
        strings: ["Web Designer", "Graphic Designer", "Photographer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    closeMobileMenuButton.addEventListener('click', toggleMobileMenu);
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    document.addEventListener('click', (event) => {
        if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(event.target) && event.target !== mobileMenuButton) {
            toggleMobileMenu();
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    function updateActiveNavLink() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
