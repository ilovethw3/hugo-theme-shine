(() => {
  const campaign = document.querySelector('[data-iphone-campaign]');
  if (!campaign) return;

  campaign.querySelectorAll('[data-campaign-scroll]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  campaign.querySelectorAll('[data-iphone-model]').forEach((button) => {
    button.addEventListener('click', () => {
      campaign.querySelectorAll('[data-iphone-model]').forEach((item) => {
        const selected = item === button;
        item.classList.toggle('is-selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
    });
  });
})();
