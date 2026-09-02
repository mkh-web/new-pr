//يبحث عن عناصر في ملف html ويخزنهم كمتغيرات في ملف الجافا
const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const loginError = document.querySelector('#login-error');
//دالة لعرض الاخطاء
function showError(message) {
  if (!loginError) {
    return;
  }

  loginError.textContent = message;
}

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();//يمنع تحديث الصفحة
//يزيل الفراغات ويخليه احرف صغيره
    const username = (usernameInput?.value || '').trim().toLowerCase();

    if (!username) {
      showError('يرجى كتابة اسم المستخدم');
      return;
    }
// اذا اليوزر ادمن يخزنه في المتصفح وينقله لصفحه الادمن
    if (username === 'admin') {
      localStorage.setItem('clinic-user', 'admin');
      window.location.href = '/admin/index.html';
      return;
    }

    if (username === 'doctor') {
      localStorage.setItem('clinic-user', 'doctor');
      window.location.href = '/doctor/dashboard/';
      return;
    }

    if (username === 'clinic') {
      localStorage.setItem('clinic-user', 'clinic');
      window.location.href = '/clinic/index.html';
      return;
    }

    if (username === 'patient') {
      localStorage.setItem('clinic-user', 'patient');
      window.location.href = '/patient/index.html';
      return;
    }

    showError('اسم المستخدم غير صالح. استخدم admin أو doctor أو clinic أو patient');
  });
}
