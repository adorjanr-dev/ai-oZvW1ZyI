// HEADER -> HAMBURGER MENU
const navToggle = document.querySelector('[aria-controls="mobile-navigation"]');
navToggle.addEventListener('click', () => { navToggle.ariaExpanded = !(navToggle.ariaExpanded == 'true'); });

// BUTTONS WITH CORNERS
document.querySelectorAll('.button.has-corners').forEach((button) => {
  const corners = document.createElement('span');
  corners.classList.add('corners');
  for (let i = 0; i < 4; i++) {
    corners.appendChild(document.createElement('div'));
  }
  button.appendChild(corners);
});

// SERVICES TOGGLE
const options = document.querySelectorAll('#rendszerek input[name="szolgaltatas"]');
const labels = document.querySelectorAll('#rendszerek label');
const responses = document.querySelectorAll('#rendszerek .responses div');
options.forEach((option) => {
  option.addEventListener('click', function () {
    responses.forEach((r) => {
      if (r.classList.contains(this.id)) r.classList.add('active');
      else r.classList.remove('active');
    });
    labels.forEach((l) => {
      if (l.getAttribute('for') == this.id) l.classList.add('active');
      else l.classList.remove('active');
    });
  });
});

// DEMO AUTOMATION
const startDemoBtn = document.querySelector('#hogyan-mukodik .demo-title button');
const mStart = document.querySelector('#hogyan-mukodik .manual .start .node');
const mDecision = document.querySelector('#hogyan-mukodik .manual .decision .node');
const mRouteA = document.querySelector('#hogyan-mukodik .manual .route-a .node');
const aStart = document.querySelector('#hogyan-mukodik .automated .start .node');
const aDecision = document.querySelector('#hogyan-mukodik .automated .decision .node');
const aRouteA = document.querySelector('#hogyan-mukodik .automated .route-a .node');
const aFinish = document.querySelector('#hogyan-mukodik .automated .finish .node');
startDemoBtn.addEventListener('click', function () {
  // Reset each node
  mStart.style.backgroundColor = 'var(--background-dark)';
  aStart.style.backgroundColor = 'var(--background-dark)';
  mDecision.style.backgroundColor = 'var(--background-dark)';
  aDecision.style.backgroundColor = 'var(--background-dark)';
  mRouteA.style.backgroundColor = 'var(--background-dark)';
  aRouteA.style.backgroundColor = 'var(--background-dark)';
  aFinish.style.backgroundColor = 'var(--background-dark)';

  // Immediately: Start nodes orange
  mStart.style.backgroundColor = '#ffd280';
  aStart.style.backgroundColor = '#ffd280';

  // After 1 second: Start nodes green, decision nodes orange
  setTimeout(() => {
    mStart.style.backgroundColor = 'var(--primary)';
    aStart.style.backgroundColor = 'var(--primary)';

    mDecision.style.backgroundColor = '#ffd280';
    aDecision.style.backgroundColor = '#ffd280';
  }, 1000);

  // After 4 seconds: Automated decision green, automated route A orange
  setTimeout(() => {
    aDecision.style.backgroundColor = 'var(--primary)';
    aRouteA.style.backgroundColor = '#ffd280';
  }, 4000);

  // After 7.5 seconds: Manual decision green, manual route A orange
  setTimeout(() => {
    mDecision.style.backgroundColor = 'var(--primary)';
    mRouteA.style.backgroundColor = '#ffd280';
  }, 7500);

  // After 8 seconds: Automated route A green
  setTimeout(() => {
    aRouteA.style.backgroundColor = 'var(--primary)';
  }, 8000);

  // After 8.5 seconds: Automated finish green
  setTimeout(() => {
    aFinish.style.backgroundColor = 'var(--primary)';
  }, 8500);
})

// GYIK
let questions = document.querySelectorAll('#faq .q');
questions.forEach(e => {
  e.addEventListener('click', () => {
    let answerDisplay = e.nextElementSibling.style.display;
    let qIcon = e.children[1];
    let qText = e.children[0];
    qText.classList.toggle('active');

    if (answerDisplay) {
      e.nextElementSibling.style.display = '';
      qIcon.style.transform = 'rotate(0deg)';
    } else {
      e.nextElementSibling.style.display = 'block';
      qIcon.style.transform = 'rotate(180deg)';
    }
  })
});