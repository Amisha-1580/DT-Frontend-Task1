// Professional minimal interactions + sample JSON rendering

const sampleJSON = {
  skills: [
    "HTML5",
    "CSS3",
    "Vanilla JavaScript",
    "Responsive Design",
    "Accessibility Basics",
    "DOM Manipulation"
  ]
};

// load skills from JSON
document.getElementById('loadData')?.addEventListener('click', () => {
  const list = document.getElementById('skillsList');
  if (!list) return;
  list.innerHTML = '';
  sampleJSON.skills.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    list.appendChild(li);
  });
  // small feedback
  const btn = document.getElementById('loadData');
  if (btn) btn.textContent = 'Loaded ✓';
});

// smooth scroll to features
document.getElementById('viewFeatures')?.addEventListener('click', () => {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
});

// modal behavior
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal?.addEventListener('click', () => {
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();
});

closeModal?.addEventListener('click', () => {
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
});

// close modal when clicking outside content
modal?.addEventListener('click', (e) => {
  if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
});
