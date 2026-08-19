const services = {
  hair: [
    ['The Clairé Cut', 'A personalised cut, wash and signature finish', 'from ₹1,800'],
    ['Silk Blowout', 'A soft, polished finish with lasting movement', 'from ₹1,200'],
    ['Occasion Styling', 'For celebrations, dates, and your main-character moments', 'from ₹2,200'],
    ['Bridal Hair Trial', 'A calm, collaborative preview of your wedding look', 'from ₹4,500']
  ],
  colour: [
    ['Lived-in Dimension', 'Hand-painted colour with a seamless grow-out', 'from ₹6,500'],
    ['The Gloss', 'Shine, tone and a renewed richness for your colour', 'from ₹2,800'],
    ['Root Refresh', 'A precise touch-up for effortless continuity', 'from ₹3,200'],
    ['Blonde Atelier', 'A bespoke lightening journey, planned just for you', 'from ₹8,500']
  ],
  care: [
    ['Clairé Hair Spa', 'Deep nourishment, scalp care and a quiet reset', 'from ₹2,000'],
    ['Brow Sculpt', 'Shape, tint and a beautifully framed face', 'from ₹850'],
    ['Luminous Facial', 'A restorative treatment tailored to your skin', 'from ₹2,500'],
    ['Bridal Glow Ritual', 'A complete beauty preparation for the big day', 'from ₹5,500']
  ]
};

const serviceList = document.getElementById('serviceList');
function renderServices(category) {
  serviceList.innerHTML = services[category].map(([name, description, price], index) => `<article class="service-row"><h3><span>${String(index + 1).padStart(2, '0')} </span>${name}</h3><p>${description}</p><strong>${price}</strong></article>`).join('');
}
renderServices('hair');
document.querySelectorAll('.service-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.service-tabs .active').classList.remove('active');
  button.classList.add('active');
  renderServices(button.dataset.category);
}));

const modal = document.getElementById('loginModal');
const openModal = () => { modal.classList.add('show'); modal.setAttribute('aria-hidden', 'false'); };
const closeModal = () => { modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); };
document.getElementById('openLogin').addEventListener('click', openModal);
document.getElementById('membershipLogin').addEventListener('click', openModal);
document.querySelector('.close-modal').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const loginContent = document.getElementById('loginContent');
const cardName = document.getElementById('cardName');
const cardPoints = document.getElementById('cardPoints');
document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const points = 180;
  cardName.textContent = 'PRIYA’S BEAUTY, REWARDED';
  cardPoints.textContent = points;
  loginContent.innerHTML = `<div class="account-welcome"><p class="eyebrow">You’re signed in, Priya</p><h2>Your little beauty<br /><em>bank.</em></h2><p class="account-petal">${points} <small>petals available</small></p><p class="account-message">You earned <strong>20 welcome petals</strong> just for signing in. Book a service today and collect even more.</p><a class="button button-dark" href="#booking" id="bookFromAccount">Book & earn petals <span>↗</span></a></div>`;
  document.getElementById('bookFromAccount').addEventListener('click', closeModal);
});

const toast = document.getElementById('toast');
function showToast(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 4000); }
document.getElementById('bookingForm').addEventListener('submit', e => { e.preventDefault(); showToast('Your request is on its way — we’ll be in touch soon.'); e.target.reset(); });
document.getElementById('showFilm').addEventListener('click', () => showToast('Our atelier film will play here in the final live site.'));
