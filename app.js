// Soal: pilihan ganda
const questionsBank = {
  matematika: [
    {
      question: "Hitunglah nilai x dari persamaan: 2x + 5 = 15",
      options: ["3", "5", "10", "15"],
      answer: "5"
    },
    {
      question: "Berapa hasil dari 3² + 4²?",
      options: ["12", "16", "25", "49"],
      answer: "25"
    }
  ],
  fisika: [
    {
      question: "Apa satuan SI untuk gaya?",
      options: ["joule", "newton", "watt", "pascal"],
      answer: "newton"
    }
  ]
};

// Fungsi untuk membuat tampilan soal
function generateQuiz(subject) {
  const questions = questionsBank[subject];
  if (!questions || questions.length === 0) return "<p>Tidak ada soal untuk mata pelajaran ini.</p>";

  let quizHtml = '<div class="quiz-container">';
  questions.forEach((q, i) => {
    quizHtml += `<div class="soal-item">
      <p>${i + 1}. ${q.question}</p>
      ${q.options.map((opt) => `
        <label>
          <input type="radio" name="q${i}" value="${opt}"> ${opt}
        </label><br>
      `).join('')}
    </div>`;
  });
  quizHtml += `
    <button onclick="checkAnswer('${subject}')">Nilai</button>
    <div id="scoreResult" style="margin-top: 20px;"></div>
  </div>`;
  return quizHtml;
}

// Fungsi untuk mengecek jawaban dan simpan skor
function checkAnswer(subject) {
  const questions = questionsBank[subject];
  let benar = 0;
  questions.forEach((q, i) => {
    const radios = document.getElementsByName(`q${i}`);
    let jawaban = "";
    for (const r of radios) {
      if (r.checked) {
        jawaban = r.value;
        break;
      }
    }
    if (jawaban === q.answer) benar++;
  });
  const skor = Math.round((benar / questions.length) * 100);
  document.getElementById("scoreResult").innerHTML = `<strong>Nilai Anda: ${skor}%</strong>`;

  // Simpan skor ke localStorage
  const user = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
  if (user) {
    const nilaiData = JSON.parse(localStorage.getItem('nilai_user')) || {};
    nilaiData[user.id] = nilaiData[user.id] || {};
    nilaiData[user.id][subject] = skor;
    localStorage.setItem('nilai_user', JSON.stringify(nilaiData));
  }
}

// Fungsi untuk menangani navigasi
function setupNavigation() {
  const menuLinks = document.querySelectorAll('.menu-link[data-page]');
  const cardButtons = document.querySelectorAll('.card-button[data-page]');

  function loadPage(pageName) {
    const mainContent = document.getElementById('mainContent');
    const dashboardPage = document.getElementById('dashboardPage');
    const dynamicContent = document.getElementById('dynamicContent');

    dashboardPage.style.display = 'none';
    dynamicContent.innerHTML = '';

    if (pageName === 'dashboard') {
      dashboardPage.style.display = 'block';
      document.title = "Portal Pembelajaran SMA - Beranda";
    } else {
      dashboardPage.style.display = 'none';
      dynamicContent.innerHTML = generatePageContent(pageName);
      document.title = `Portal Pembelajaran SMA - ${getPageTitle(pageName)}`;
    }
  }

  function generatePageContent(pageName) {
    const pageTitle = getPageTitle(pageName);
    let content = '';

    switch (pageName) {
      case 'matematika':
      case 'fisika':
        content = `
          <div class="subject-content">
            <h2 class="page-title">${pageTitle}</h2>
            <div class="materi-list">
              <h3><i class="fas fa-book-open"></i> Materi Pembelajaran</h3>
              <ul>
                <li>Materi ${pageTitle} 1</li>
                <li>Materi ${pageTitle} 2</li>
              </ul>
            </div>
            <div class="latihan-section">
              <h3><i class="fas fa-pencil-alt"></i> Latihan Soal</h3>
              ${generateQuiz(pageName)}
            </div>
          </div>
        `;
        break;

      case 'skor':
        const user = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
        const nilaiData = JSON.parse(localStorage.getItem('nilai_user')) || {};
        const skorUser = user ? nilaiData[user.id] || {} : {};

        let skorList = Object.keys(skorUser).map(mapel =>
          `<li><strong>${mapel}</strong>: ${skorUser[mapel]}%</li>`
        ).join('');

        if (!skorList) skorList = "<li>Belum ada hasil skor.</li>";

        content = `
          <div class="subject-content">
            <h2 class="page-title">Hasil Skor</h2>
            <ul>${skorList}</ul>
          </div>
        `;
        break;

      default:
        content = `
          <div class="subject-content">
            <h2 class="page-title">${pageTitle}</h2>
            <p>Halaman ini sedang dalam pengembangan.</p>
          </div>
        `;
    }

    return content;
  }

  function getPageTitle(pageName) {
    const titles = {
      'dashboard': 'Beranda',
      'matematika': 'Matematika',
      'fisika': 'Fisika',
      'kimia': 'Kimia',
      'biologi': 'Biologi',
      'bahasa': 'Bahasa',
      'jadwal': 'Jadwal Pelajaran',
      'nilai': 'Nilai & Raport',
      'tugas': 'Tugas & PR',
      'forum': 'Forum Diskusi',
      'profile': 'Profil Saya',
      'skor': 'Hasil Skor'
    };
    return titles[pageName] || 'Halaman';
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageName = link.getAttribute('data-page');
      loadPage(pageName);
      if (window.innerWidth <= 768) {
        toggleSidebar();
      }
    });
  });

  cardButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const pageName = button.getAttribute('data-page');
      loadPage(pageName);
    });
  });

  loadPage('dashboard');
}

// Fungsi buka/tutup sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

// Update UI user
function updateUserUI(user) {
  document.getElementById('userGreeting').textContent = `Halo, ${user.name}`;
  document.getElementById('sidebarUserName').textContent = user.name;
  document.getElementById('sidebarUserClass').textContent = `Kelas ${user.kelas}`;
  document.getElementById('profilePic').textContent = user.name.charAt(0).toUpperCase();

  const welcomeMsg = document.getElementById('welcomeMessage');
  if (welcomeMsg) {
    welcomeMsg.textContent = `Selamat datang, ${user.name}`;
  }

  const activityList = document.getElementById('activityList');
  if (activityList) {
    activityList.innerHTML = `
      <li>
        <i class="fas fa-check-circle"></i>
        <span>Anda login ke sistem</span>
        <span class="activity-time">Baru saja</span>
      </li>
      <li>
        <i class="fas fa-book"></i>
        <span>Membuka materi Matematika</span>
        <span class="activity-time">2 hari lalu</span>
      </li>
      <li>
        <i class="fas fa-tasks"></i>
        <span>Mengumpulkan tugas Fisika</span>
        <span class="activity-time">3 hari lalu</span>
      </li>
    `;
  }
}

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function () {
  setupNavigation();

  const currentUser = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
  if (currentUser) {
    updateUserUI(currentUser);
  }
});
