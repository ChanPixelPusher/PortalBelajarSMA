// User data storage (simulated database)
let users = JSON.parse(localStorage.getItem('pixelchan_users')) || [];

// DOM Elements
const authContainer = document.getElementById('authContainer');
const dashboardContainer = document.getElementById('dashboardContainer');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const authMessage = document.getElementById('authMessage');

// Tab switching
loginTab.addEventListener('click', () => switchTab('login'));
registerTab.addEventListener('click', () => switchTab('register'));

function switchTab(tab) {
  if (tab === 'login') {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  } else {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  }
  authMessage.textContent = '';
  authMessage.className = 'auth-message';
}

// Register form submission
registerForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('registerName').value.trim();
  const nis = document.getElementById('registerNis').value.trim();
  const kelas = document.getElementById('registerKelas').value;
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;

  // Validation
  if (password !== confirmPassword) {
    showMessage('Password tidak cocok', 'error');
    return;
  }

  if (users.some(user => user.email === email || user.nis === nis)) {
    showMessage('Email/NIS sudah terdaftar', 'error');
    return;
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    name,
    nis,
    kelas,
    email,
    password // Note: In production, hash the password
  };

  users.push(newUser);
  localStorage.setItem('pixelchan_users', JSON.stringify(users));

  showMessage('Pendaftaran berhasil! Silakan login.', 'success');
  switchTab('login');
  registerForm.reset();
});

// Login form submission
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const loginId = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const user = users.find(u =>
    (u.email === loginId || u.nis === loginId) &&
    u.password === password
  );

  if (user) {
    // Successful login
    localStorage.setItem('pixelchan_currentUser', JSON.stringify(user));
    showDashboard(user);
  } else {
    showMessage('Email/NIS atau password salah', 'error');
  }
});

// Show message in auth form
function showMessage(message, type) {
  authMessage.textContent = message;
  authMessage.className = `auth-message ${type}`;
}

// Show dashboard after login
function showDashboard(user) {
  authContainer.style.display = 'none';
  dashboardContainer.style.display = 'block';

  // Update UI with user data
  if (typeof updateUserUI === 'function') {
    updateUserUI(user);
  }
}

// Check if user is already logged in
function checkLoginStatus() {
  const currentUser = JSON.parse(localStorage.getItem('pixelchan_currentUser'));

  if (currentUser) {
    showDashboard(currentUser);
  }
}

// Initialize the app
checkLoginStatus();
