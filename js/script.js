document.addEventListener('DOMContentLoaded', function() {
  // 监听所有viewBio按钮的点击事件
  document.querySelectorAll('.viewBio').forEach(button => {
      button.addEventListener('click', function() {
          const modal = document.querySelector(button.getAttribute('data-modal-target'));
          modal.style.display = 'block';
      });
  });

  // 监听所有close按钮的点击事件
  document.querySelectorAll('.modal .close').forEach(closeButton => {
      closeButton.addEventListener('click', function() {
          const modal = closeButton.closest('.modal');
          modal.style.display = 'none';
      });
  });

  // 点击模态窗口外部关闭模态窗口
  window.addEventListener('click', function(event) {
      document.querySelectorAll('.modal').forEach(modal => {
          if (event.target === modal) {
              modal.style.display = 'none';
          }
      });
  });
});
