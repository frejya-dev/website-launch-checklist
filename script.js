const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const completedCount = document.querySelector('#completed-count');
const totalCount = document.querySelector('#total-count');
const progressFill = document.querySelector('#progress-fill');

function updateProgress() {
  const totalItems = checkboxes.length;
  const completedItems = document.querySelectorAll('input[type="checkbox"]:checked').length;
  const progressPercent = totalItems === 0 ? 0 : (completedItems / totalItems) * 100;

  completedCount.textContent = completedItems;
  totalCount.textContent = totalItems;
  progressFill.style.width = `${progressPercent}%`;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', updateProgress);
});

updateProgress();
