const tips = [
  'Пишите код каждый день, даже по 20 минут.',
  'Используйте Git для сохранения истории изменений.',
  'Проверяйте сайт на мобильных устройствах.',
  'Автоматизируйте повторяющиеся задачи с CI/CD.'
];

const button = document.getElementById('tipButton');
const output = document.getElementById('tipText');
button.addEventListener('click', () => {
  const index = Math.floor(Math.random() * tips.length);
  output.textContent = tips[index];
});
