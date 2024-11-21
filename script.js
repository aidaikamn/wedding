// Находим элементы кнопки и модальное окно
const inviteBtn = document.getElementById('inviteBtn');
const closeBtn = document.getElementById('closeBtn');
const invitation = document.getElementById('invitation');

// При клике на кнопку открываем модальное окно
inviteBtn.addEventListener('click', function() {
  invitation.style.display = 'flex';
});

// При клике на кнопку закрытия скрываем модальное окно
closeBtn.addEventListener('click', function() {
  invitation.style.display = 'none';
});
