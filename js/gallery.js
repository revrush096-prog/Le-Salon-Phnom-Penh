/**
 * Le Salon Phnom Penh - Gallery & Lightbox Controller
 * Parisian elegance meets modern Phnom Penh luxury.
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryFiltering();
  initGalleryLightbox();
});

/**
 * Filter Gallery Items by Category
 */
function initGalleryFiltering() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active states
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#1A1513]', 'text-white', 'border-[#1A1513]');
        b.classList.add('bg-transparent', 'text-[#7A726A]', 'border-[#E2D7C7]');
      });
      btn.classList.remove('bg-transparent', 'text-[#7A726A]', 'border-[#E2D7C7]');
      btn.classList.add('bg-[#1A1513]', 'text-white', 'border-[#1A1513]');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.classList.remove('hidden');
          setTimeout(() => {
            item.classList.remove('opacity-0', 'scale-95');
            item.classList.add('opacity-100', 'scale-100');
          }, 10);
        } else {
          item.classList.add('opacity-0', 'scale-95');
          item.classList.remove('opacity-100', 'scale-100');
          setTimeout(() => {
            item.classList.add('hidden');
          }, 250);
        }
      });
    });
  });
}

/**
 * Fullscreen Interactive Lightbox Modal
 */
function initGalleryLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const backdrop = document.getElementById('lightbox-backdrop');

  let activeIndex = 0;
  let visibleItems = [];

  const updateVisibleItems = () => {
    visibleItems = Array.from(document.querySelectorAll('.gallery-item:not(.hidden)'));
  };

  const showImageAt = (index) => {
    updateVisibleItems();
    if (visibleItems.length === 0) return;

    if (index < 0) {
      activeIndex = visibleItems.length - 1;
    } else if (index >= visibleItems.length) {
      activeIndex = 0;
    } else {
      activeIndex = index;
    }

    const currentItem = visibleItems[activeIndex];
    const imgEl = currentItem.querySelector('img');
    const title = currentItem.getAttribute('data-title') || imgEl.getAttribute('alt') || 'Le Salon Phnom Penh';
    const category = currentItem.getAttribute('data-category-name') || 'Editorial';
    const highResSrc = currentItem.getAttribute('data-highres') || imgEl.getAttribute('src');

    // Smooth transition
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.97)';

    setTimeout(() => {
      lightboxImg.src = highResSrc;
      lightboxImg.alt = title;
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxCategory) lightboxCategory.textContent = category;
      lightboxImg.style.opacity = '1';
      lightboxImg.style.transform = 'scale(1)';
    }, 150);
  };

  const openLightbox = (clickedItem) => {
    updateVisibleItems();
    activeIndex = visibleItems.indexOf(clickedItem);
    if (activeIndex === -1) activeIndex = 0;

    showImageAt(activeIndex);

    lightbox.classList.remove('hidden');
    setTimeout(() => {
      lightbox.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightbox.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
  };

  // Attach click to gallery items
  const allItems = document.querySelectorAll('.gallery-item');
  allItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(item);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showImageAt(activeIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showImageAt(activeIndex + 1);
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImageAt(activeIndex - 1);
    if (e.key === 'ArrowRight') showImageAt(activeIndex + 1);
  });

  // Mobile Swipe Gesture
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  const handleSwipe = () => {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showImageAt(activeIndex + 1); // Swiped left -> next
      } else {
        showImageAt(activeIndex - 1); // Swiped right -> prev
      }
    }
  };
}
