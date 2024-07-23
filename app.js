const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const facts = document.querySelectorAll('.fact');

let currentFactIndex = 0;

function showFact() {
  facts.forEach(fact => {
    fact.style.display = 'none';
  });
  facts[currentFactIndex].style.display = 'block';

  if (currentFactIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentFactIndex === facts.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

showFact();

prevBtn.addEventListener('click', () => {
  currentFactIndex--;
  showFact();
});

nextBtn.addEventListener('click', () => {
  currentFactIndex++;
  showFact();
});

