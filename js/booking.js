/**
 * Le Salon Phnom Penh - Appointment Booking Controller
 * Parisian elegance meets modern Phnom Penh luxury.
 */

document.addEventListener('DOMContentLoaded', () => {
  initBookingForm();
});

function initBookingForm() {
  const form = document.getElementById('booking-form');
  const serviceSelect = document.getElementById('booking-service');
  const dateInput = document.getElementById('booking-date');
  const timeSelect = document.getElementById('booking-time');
  const guestsSelect = document.getElementById('booking-guests');
  const nameInput = document.getElementById('booking-name');
  const phoneInput = document.getElementById('booking-phone');
  const modal = document.getElementById('booking-confirmation-modal');
  const modalClose = document.getElementById('modal-close-btn');

  // Summary elements
  const summaryService = document.getElementById('summary-service');
  const summaryDate = document.getElementById('summary-date');
  const summaryTime = document.getElementById('summary-time');
  const summaryGuests = document.getElementById('summary-guests');
  const summaryName = document.getElementById('summary-name');

  // Populate Services dropdown if SALON_SERVICES is loaded
  if (serviceSelect && window.SALON_SERVICES) {
    const currentVal = serviceSelect.value;
    serviceSelect.innerHTML = '<option value="" disabled selected>Select a Service</option>';

    // Group by category
    const categories = [
      { key: 'hair', label: 'Hair Services' },
      { key: 'nails', label: 'Nail Atelier' },
      { key: 'beauty', label: 'Beauty Rituals' }
    ];

    categories.forEach(cat => {
      const group = document.createElement('optgroup');
      group.label = cat.label;
      const filtered = window.SALON_SERVICES.filter(s => s.category === cat.key);
      filtered.forEach(srv => {
        const opt = document.createElement('option');
        opt.value = srv.id;
        opt.textContent = srv.name;
        group.appendChild(opt);
      });
      serviceSelect.appendChild(group);
    });

    // Check for preselection via query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedService = urlParams.get('service');
    if (preselectedService) {
      serviceSelect.value = preselectedService;
    }
  }

  // Set minimum date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  // Live Summary Updater
  const updateSummary = () => {
    if (summaryService && serviceSelect) {
      const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
      summaryService.textContent = selectedOption && selectedOption.value ? selectedOption.text : 'Select service';
    }
    if (summaryDate && dateInput) {
      summaryDate.textContent = dateInput.value ? dateInput.value : 'Choose date';
    }
    if (summaryTime && timeSelect) {
      summaryTime.textContent = timeSelect.value ? timeSelect.value : 'Choose time';
    }
    if (summaryGuests && guestsSelect) {
      summaryGuests.textContent = guestsSelect.value ? `${guestsSelect.value} Guest(s)` : '1 Guest';
    }
    if (summaryName && nameInput) {
      summaryName.textContent = nameInput.value.trim() ? nameInput.value.trim() : 'Your Name';
    }
  };

  if (serviceSelect) serviceSelect.addEventListener('change', updateSummary);
  if (dateInput) dateInput.addEventListener('change', updateSummary);
  if (timeSelect) timeSelect.addEventListener('change', updateSummary);
  if (guestsSelect) guestsSelect.addEventListener('change', updateSummary);
  if (nameInput) nameInput.addEventListener('input', updateSummary);

  updateSummary();

  // Handle Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const service = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex]?.text : '';
      const date = dateInput ? dateInput.value : '';
      const time = timeSelect ? timeSelect.value : '';

      if (!name || !phone || !serviceSelect.value || !date || !time) {
        alert('Please complete all required fields so we can arrange your appointment.');
        return;
      }

      // Populate confirmation modal details
      const modalClientName = document.getElementById('modal-client-name');
      const modalService = document.getElementById('modal-service');
      const modalDateTime = document.getElementById('modal-date-time');
      const whatsappAction = document.getElementById('modal-whatsapp-link');

      if (modalClientName) modalClientName.textContent = name;
      if (modalService) modalService.textContent = service;
      if (modalDateTime) modalDateTime.textContent = `${date} at ${time}`;

      // Construct WhatsApp message prefill
      if (whatsappAction) {
        const msg = encodeURIComponent(`Hello Le Salon Phnom Penh, I would like to request an appointment for ${service} on ${date} at ${time}. My name is ${name} (${phone}).`);
        whatsappAction.href = `https://wa.me/85570467412?text=${msg}`;
      }

      // Show confirmation modal
      if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => {
          modal.classList.add('opacity-100');
          modal.querySelector('.modal-card')?.classList.remove('scale-95');
          modal.querySelector('.modal-card')?.classList.add('scale-100');
        }, 10);
        document.body.style.overflow = 'hidden';
      }

      form.reset();
      updateSummary();
    });
  }

  // Modal Close
  if (modalClose && modal) {
    const closeModal = () => {
      modal.classList.remove('opacity-100');
      modal.querySelector('.modal-card')?.classList.add('scale-95');
      modal.querySelector('.modal-card')?.classList.remove('scale-100');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
      document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}
