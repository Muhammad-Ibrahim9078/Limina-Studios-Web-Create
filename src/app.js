
// FAQs Function

 document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.icon');

      answer.classList.toggle('hidden');
      icon.textContent = answer.classList.contains('hidden') ? '▼' : '▲';
    });
  });