/**
 * Le Salon Phnom Penh - Main Global JavaScript
 * Parisian elegance meets modern Phnom Penh luxury.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initActiveNavLink();
  initScrollAnimations();
  initVideoFallbacks();
  initFloatingMobileCTA();
});

/**
 * Header Scroll Transition
 * Transitions from transparent over hero to frosted luxury glass
 */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const isLightHero = header.classList.contains('header-light-page');

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 40) {
      header.classList.add('header-glass');
      header.classList.remove('header-transparent', 'py-6');
      header.classList.add('py-4');
      
      // Ensure nav text is dark espresso on glass
      const navLinks = header.querySelectorAll('.nav-link-item');
      navLinks.forEach(link => {
        link.classList.remove('text-white', 'text-white/80');
        link.classList.add('text-[#1A1513]');
      });
      
      const logoText = header.querySelector('.logo-text');
      if (logoText) {
        logoText.classList.remove('text-white');
        logoText.classList.add('text-[#1A1513]');
      }

      const menuBtn = document.getElementById('mobile-menu-btn');
      if (menuBtn) {
        menuBtn.classList.remove('text-white');
        menuBtn.classList.add('text-[#1A1513]');
      }
    } else {
      header.classList.remove('header-glass', 'py-4');
      header.classList.add('py-6');

      if (!isLightHero) {
        header.classList.add('header-transparent');
        const navLinks = header.querySelectorAll('.nav-link-item');
        navLinks.forEach(link => {
          link.classList.remove('text-[#1A1513]');
          link.classList.add('text-white/90');
        });
        const logoText = header.querySelector('.logo-text');
        if (logoText) {
          logoText.classList.remove('text-[#1A1513]');
          logoText.classList.add('text-white');
        }
        const menuBtn = document.getElementById('mobile-menu-btn');
        if (menuBtn) {
          menuBtn.classList.remove('text-[#1A1513]');
          menuBtn.classList.add('text-white');
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Mobile Navigation Drawer
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('close-mobile-menu');
  const backdrop = document.getElementById('mobile-drawer-backdrop');

  if (!menuBtn || !mobileDrawer) return;

  const openDrawer = () => {
    mobileDrawer.classList.remove('translate-x-full');
    mobileDrawer.classList.add('translate-x-0');
    if (backdrop) {
      backdrop.classList.remove('hidden', 'opacity-0');
      backdrop.classList.add('opacity-100');
    }
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    mobileDrawer.classList.add('translate-x-full');
    mobileDrawer.classList.remove('translate-x-0');
    if (backdrop) {
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
      setTimeout(() => backdrop.classList.add('hidden'), 300);
    }
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
  };

  menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Close on link click
  const drawerLinks = mobileDrawer.querySelectorAll('a');
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

/**
 * Highlight Current Active Nav Link
 */
function initActiveNavLink() {
  let path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === '') path = 'index.html';

  const links = document.querySelectorAll(`a[href="${path}"]`);
  links.forEach(link => {
    if (link.classList.contains('nav-link-item')) {
      link.classList.add('text-[#C5A880]', 'font-medium');
      // Subtle gold dot indicator
      const dot = document.createElement('span');
      dot.className = 'block h-1 w-1 rounded-full bg-[#C5A880] mx-auto mt-0.5';
      link.appendChild(dot);
    }
  });
}

/**
 * Subtle Scroll Reveal Animations
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-6');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-6');
      observer.observe(el);
    });
  } else {
    // Fallback if IntersectionObserver not supported
    elements.forEach(el => {
      el.classList.add('opacity-100', 'translate-y-0');
    });
  }
}

/**
 * Video Fallback and Accessibility Pause/Play Toggle
 */
function initVideoFallbacks() {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    // Try to ensure autoplay works without audio
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Video autoplay prevented or deferred, showing fallback poster:', error);
      });
    }

    // Toggle button if exists
    const toggleBtn = video.parentElement.querySelector('.video-playback-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (video.paused) {
          video.play();
          toggleBtn.innerHTML = `
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="sr-only">Pause Video</span>
          `;
        } else {
          video.pause();
          toggleBtn.innerHTML = `
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="sr-only">Play Video</span>
          `;
        }
      });
    }
  });
}

/**
 * Floating Mobile "Book Appointment" Pill
 */
function initFloatingMobileCTA() {
  const floatingCta = document.getElementById('floating-mobile-cta');
  if (!floatingCta) return;

  const handleMobileScroll = () => {
    if (window.innerWidth >= 1024) {
      floatingCta.classList.add('hidden');
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 350) {
      floatingCta.classList.remove('translate-y-24', 'opacity-0');
      floatingCta.classList.add('translate-y-0', 'opacity-100');
    } else {
      floatingCta.classList.add('translate-y-24', 'opacity-0');
      floatingCta.classList.remove('translate-y-0', 'opacity-100');
    }
  };

  window.addEventListener('scroll', handleMobileScroll, { passive: true });
  window.addEventListener('resize', handleMobileScroll);
  handleMobileScroll();
}
