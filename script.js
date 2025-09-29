document.querySelectorAll('.what').forEach(item => {
  const btn = item.querySelector('.question');
  const answer = item.querySelector('.answer');

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    if (isOpen) {
      // Closing: ensure a px height is set then animate to 0
      answer.style.maxHeight = answer.scrollHeight + 'px';
      // trigger layout so the previous line is applied
      requestAnimationFrame(() => {
        answer.style.maxHeight = '0';
      });
      item.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      // Opening: set class then set maxHeight to scrollHeight to animate
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });

  // After the opening transition ends, remove maxHeight so content can resize naturally
  answer.addEventListener('transitionend', () => {
    if (item.classList.contains('active')) {
      answer.style.maxHeight = 'none';
    }
  });
});
