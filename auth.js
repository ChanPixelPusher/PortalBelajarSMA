document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  const authMessage = document.getElementById('authMessage');

  loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    authMessage.textContent = '';
  });

  registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    authMessage.textContent = '';
  });

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailOrNIS = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    // Admin login manual
    if (emailOrNIS === "admin@gmail.com" && password === "admin123") {
      const adminUser = {
        id: 'admin-thecno',
        name: 'Admin Thecno',
        kelas: 'Admin',
        email: emailOrNIS,
        password: password // In a real app, never store plain password. Hashing is essential.
      };
      localStorage.setItem('pixelchan_currentUser', JSON.stringify(adminUser));
      document.getElementById('authContainer').style.display = 'none';
      document.getElementById('dashboardContainer').style.display = 'block';
      location.reload(); // Reload to initialize app.js with admin user
      return;
    } 

    const users = JSON.parse(localStorage.getItem('pixelchan_users')) || [];
    const user = users.find(u => (u.email === emailOrNIS || u.nis === emailOrNIS) && u.password === password);

    if (user) {
      localStorage.setItem('pixelchan_currentUser', JSON.stringify(user));
      document.getElementById('authContainer').style.display = 'none';
      document.getElementById('dashboardContainer').style.display = 'block';
      location.reload();
    } else {
      showMessage("Email/NIS atau password salah", true);
    }
  });

  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const nis = document.getElementById('registerNis').value.trim();
    const kelas = document.getElementById('registerKelas').value;
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
      showMessage("Konfirmasi password tidak cocok", true);
      return;
    }

    const users = JSON.parse(localStorage.getItem('pixelchan_users')) || [];
    const exists = users.some(u => u.email === email || u.nis === nis);
    if (exists) {
      showMessage("Email atau NIS sudah terdaftar", true);
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      nis,
      kelas,
      email,
      password
    };

    users.push(newUser);
    localStorage.setItem('pixelchan_users', JSON.stringify(users));
    showMessage("Registrasi berhasil! Silakan login.", false);
    registerForm.reset();
    loginTab.click();
  });

  function showMessage(msg, isError = false) {
    authMessage.textContent = msg;
    authMessage.classList.toggle('error', isError);
    authMessage.classList.toggle('success', !isError);
  }

  const currentUser = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
  if (currentUser) {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';
  }
});