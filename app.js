// === Bank Soal ===
// Pastikan setiap mata pelajaran memiliki 10 soal untuk latihan
const questionsBank = {
  matematika: [
    { question: "Hitunglah nilai x dari persamaan: 2x + 5 = 15", options: ["3", "5", "10", "15"], answer: "5" },
    { question: "Berapa hasil dari 3² + 4²?", options: ["12", "16", "25", "49"], answer: "25" },
    { question: "Sederhanakan: 4(x + 2) - 3x", options: ["x + 2", "x + 8", "7x + 8", "x - 8"], answer: "x + 8" },
    { question: "Luas persegi dengan sisi 7 cm adalah...", options: ["14 cm²", "28 cm²", "49 cm²", "70 cm²"], answer: "49 cm²" },
    { question: "Nilai dari 2 + 3 * 4 adalah...", options: ["14", "20", "10", "24"], answer: "14" },
    { question: "Jika y = 3x - 1 dan x = 4, maka y = ...", options: ["9", "11", "13", "15"], answer: "11" },
    { question: "Berapa keliling lingkaran dengan diameter 10 cm? (Gunakan π = 3.14)", options: ["15.7 cm", "31.4 cm", "62.8 cm", "78.5 cm"], answer: "31.4 cm" },
    { question: "Faktorkan: x² - 9", options: ["(x-3)(x+3)", "(x-3)²", "(x+3)²", "x(x-9)"], answer: "(x-3)(x+3)" },
    { question: "Penyelesaian dari x/2 + 5 = 8 adalah...", options: ["2", "4", "6", "8"], answer: "6" },
    { question: "Berapa banyak sisi pada segitiga?", options: ["2", "3", "4", "5"], answer: "3" }
  ],
  fisika: [
    { question: "Apa satuan SI untuk gaya?", options: ["joule", "newton", "watt", "pascal"], answer: "newton" },
    { question: "Benda diam akan tetap diam jika...", options: ["Gaya total = 0", "Ada gaya besar", "Dipanaskan", "Didorong"], answer: "Gaya total = 0" },
    { question: "Rumus energi kinetik adalah...", options: ["mgh", "1/2mv²", "mc²", "p/t"], answer: "1/2mv²" },
    { question: "Yang termasuk besaran pokok adalah...", options: ["Gaya", "Kecepatan", "Massa", "Energi"], answer: "Massa" },
    { question: "Jika sebuah benda jatuh bebas, percepatannya adalah...", options: ["Konstan", "Bertambah", "Berkurang", "Nol"], answer: "Konstan" },
    { question: "Hukum Newton kedua berkaitan dengan...", options: ["Inersia", "F=ma", "Aksi-Reaksi", "Energi"], answer: "F=ma" },
    { question: "Apa alat untuk mengukur suhu?", options: ["Barometer", "Termometer", "Hidrometer", "Ammeter"], answer: "Termometer" },
    { question: "Gelombang suara termasuk gelombang...", options: ["Transversal", "Longitudinal", "Elektromagnetik", "Cahaya"], answer: "Longitudinal" },
    { question: "Satuan daya adalah...", options: ["Joule", "Watt", "Newton", "Volt"], answer: "Watt" },
    { question: "Apa yang menyebabkan benda melayang di air?", options: ["Massa jenis air > massa jenis benda", "Massa jenis air < massa jenis benda", "Massa jenis air = massa jenis benda", "Bentuk benda"], answer: "Massa jenis air > massa jenis benda" }
  ],
  kimia: [
    { question: "Apa itu kimia?", options: ["Studi tentang kehidupan", "Studi tentang materi dan perubahannya", "Studi tentang alam semesta", "Studi tentang angka"], answer: "Studi tentang materi dan perubahannya" },
    { question: "Simbol kimia untuk air adalah...", options: ["O2", "H2O", "CO2", "NaCl"], answer: "H2O" },
    { question: "Atom terdiri dari...", options: ["Proton, neutron, elektron", "Molekul, ion, garam", "Asam, basa, garam", "Logam, nonlogam, metaloid"], answer: "Proton, neutron, elektron" },
    { question: "Apa nama unsur dengan simbol Fe?", options: ["Fluorin", "Besi", "Emas", "Perak"], answer: "Besi" },
    { question: "Asam dengan pH kurang dari...", options: ["7", "7", "10", "14"], answer: "7" },
    { question: "Golongan unsur mulia adalah golongan...", options: ["1", "17", "18", "2"], answer: "18" },
    { question: "Senyawa NaCl dikenal sebagai...", options: ["Gula", "Garam dapur", "Soda kue", "Cuka"], answer: "Garam dapur" },
    { question: "Reaksi kimia yang menghasilkan panas disebut...", options: ["Endoterm", "Eksoterm", "Redoks", "Netralisasi"], answer: "Eksoterm" },
    { question: "Ikatan kimia antar atom nonlogam adalah ikatan...", options: ["Ion", "Kovalen", "Logam", "Hidrogen"], answer: "Kovalen" },
    { question: "Rumus kimia untuk karbon dioksida adalah...", options: ["CO", "CO2", "C2O", "C2O2"], answer: "CO2" }
  ],
  biologi: [
    { question: "Organisme yang mampu membuat makanannya sendiri disebut...", options: ["Heterotrof", "Konsumen", "Autotrof", "Decomposer"], answer: "Autotrof" },
    { question: "Bagian tumbuhan yang berfungsi menyerap air dan mineral adalah...", options: ["Daun", "Batang", "Akar", "Bunga"], answer: "Akar" },
    { question: "Proses pembuatan makanan pada tumbuhan disebut...", options: ["Respirasi", "Transpirasi", "Fotosintesis", "Fermentasi"], answer: "Fotosintesis" },
    { question: "Apa unit dasar kehidupan?", options: ["Jaringan", "Organ", "Sel", "Sistem"], answer: "Sel" },
    { question: "Jenis reproduksi yang melibatkan dua induk adalah...", options: ["Aseksual", "Vegetatif", "Seksual", "Fragmentasi"], answer: "Seksual" },
    { question: "Bagian sel hewan yang tidak dimiliki sel tumbuhan adalah...", options: ["Dinding sel", "Kloroplas", "Vakuola besar", "Sentriol"], answer: "Sentriol" },
    { question: "Gas yang dihirup manusia untuk pernapasan adalah...", options: ["Karbon dioksida", "Nitrogen", "Oksigen", "Hidrogen"], answer: "Oksigen" },
    { question: "Organel sel yang berperan dalam produksi energi adalah...", options: ["Ribosom", "Lisosom", "Mitokondria", "Retikulum Endoplasma"], answer: "Mitokondria" },
    { question: "Lapisan bumi tempat terjadinya cuaca adalah...", options: ["Stratosfer", "Mesosfer", "Termosfer", "Troposfer"], answer: "Troposfer" },
    { question: "Contoh hewan vertebrata adalah...", options: ["Ubur-ubur", "Cacing", "Ikan", "Siput"], answer: "Ikan" }
  ]
};

// === Tampilkan Soal ===
function generateQuiz(subject) {
  const questions = questionsBank[subject];
  if (!questions || questions.length === 0) return "<p>Tidak ada soal untuk mata pelajaran ini.</p>";

  let html = '<div class="quiz-container">';
  questions.forEach((q, i) => {
    html += `<div class="soal-item">
      <p>${i + 1}. ${q.question}</p>
      ${q.options.map(opt => `
        <label>
          <input type="radio" name="q${i}" value="${opt}"> ${opt}
        </label>`).join('')}
    </div>`;
  });
  html += `<button onclick="checkAnswer('${subject}')">Nilai</button><div id="scoreResult"></div></div>`;
  return html;
}

// === Cek Jawaban ===
function checkAnswer(subject) {
  const questions = questionsBank[subject];
  let benar = 0;
  questions.forEach((q, i) => {
    const radios = document.getElementsByName(`q${i}`);
    for (const r of radios) {
      if (r.checked && r.value === q.answer) benar++;
    }
  });
  const skor = Math.round((benar / questions.length) * 100);
  document.getElementById("scoreResult").innerHTML = `<strong>Nilai Anda: ${skor}%</strong>`;

  const user = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
  if (user) {
    const nilaiData = JSON.parse(localStorage.getItem('nilai_user')) || {};
    nilaiData[user.id] = nilaiData[user.id] || {};
    // Simpan nilai latihan per mata pelajaran
    nilaiData[user.id][`latihan_${subject}`] = skor;
    localStorage.setItem('nilai_user', JSON.stringify(nilaiData));
  }
}

// === Halaman Tugas / PR ===
function renderTugasPage(type) {
  const adminTasks = JSON.parse(localStorage.getItem('admin_tasks')) || [];
  const filteredTasks = adminTasks.filter(task => task.type === type);

  if (filteredTasks.length === 0) {
    return `<div class="subject-content">
      <h2 class="page-title">${type === 'tugas' ? 'Tugas Harian' : 'PR Harian'}</h2>
      <p>Belum ada ${type === 'tugas' ? 'tugas' : 'PR'} yang diberikan.</p>
    </div>`;
  }

  let html = `<div class="subject-content">
    <h2 class="page-title">${type === 'tugas' ? 'Tugas Harian' : 'PR Harian'}</h2>
    <form id="tugasForm">`;

  filteredTasks.forEach((task, index) => {
    html += `<div class="soal-item">
      <p><strong>${index + 1}. (${task.subject.charAt(0).toUpperCase() + task.subject.slice(1)})</strong> ${task.question}</p>
      ${task.options.map((opt, i) => `
        <label><input type="radio" name="${type}_${task.subject}_${index}" value="${opt}"> ${opt}</label>`).join('')}
    </div>`;
  });

  html += `<button type="submit">Selesai</button><div id="scoreResult"></div></form></div>`;

  setTimeout(() => {
    document.getElementById('tugasForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
      if (!user) return alert("Silakan login terlebih dahulu.");

      const nilaiData = JSON.parse(localStorage.getItem('nilai_user')) || {};
      nilaiData[user.id] = nilaiData[user.id] || {};
      let benar = 0;
      let total = 0;
      let subjectScores = {}; // To store scores per subject within this task type

      filteredTasks.forEach((task, index) => {
        const jawab = document.querySelector(`input[name="${type}_${task.subject}_${index}"]:checked`);
        if (!subjectScores[task.subject]) {
          subjectScores[task.subject] = { correct: 0, total: 0 };
        }
        subjectScores[task.subject].total++;
        if (jawab && jawab.value === task.answer) {
          subjectScores[task.subject].correct++;
          benar++; // Count total correct answers for overall message
        }
        total++; // Count total questions for overall message
      });

      // Save scores for each subject within this task type
      for (const subject in subjectScores) {
        const score = subjectScores[subject].total > 0 ? Math.round((subjectScores[subject].correct / subjectScores[subject].total) * 100) : 0;
        const tanggal = new Date().toISOString().split("T")[0];
        // Ensure uniqueness for daily tasks/PR by subject
        nilaiData[user.id][`${type}_${subject}_${tanggal}`] = score;
      }
      
      const overallSkor = total > 0 ? Math.round((benar / total) * 100) : 0;
      localStorage.setItem('nilai_user', JSON.stringify(nilaiData));
      document.getElementById('scoreResult').innerHTML = 
        `<strong>Skor ${type === 'tugas' ? 'Tugas' : 'PR'} Anda: ${overallSkor}%</strong>`;
    });
  }, 10);

  return html;
}

// === Jadwal Pelajaran ===
let jadwalList = JSON.parse(localStorage.getItem('jadwal_list')) || [];

function renderJadwalPage() {
  let html = `
    <div class="subject-content">
      <h2 class="page-title">Jadwal Pelajaran</h2>
      <form id="jadwalForm">
        <div class="form-group">
          <label>Nama Pelajaran</label>
          <input type="text" id="jadwalPelajaran" required>
        </div>
        <div class="form-group">
          <label>Waktu</label>
          <input type="time" id="jadwalWaktu" required>
        </div>
        <div class="form-group">
          <label>Tanggal</label>
          <input type="date" id="jadwalTanggal" required>
        </div>
        <button type="submit" class="auth-button">Tambah Jadwal</button>
      </form>
      <ul id="jadwalList"></ul>
    </div>
  `;

  setTimeout(() => {
    const listEl = document.getElementById('jadwalList');
    listEl.innerHTML = '';
    jadwalList.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div style="padding:10px; border:1px solid #ccc; margin-bottom:10px; border-radius:6px;">
          <strong>${item.pelajaran}</strong><br>
          Waktu: ${item.waktu} - Tanggal: ${item.tanggal}<br>
          <button onclick="hapusJadwal(${index})">Hapus</button>
        </div>
      `;
      listEl.appendChild(li);
    });

    document.getElementById('jadwalForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const pelajaran = document.getElementById('jadwalPelajaran').value;
      const waktu = document.getElementById('jadwalWaktu').value;
      const tanggal = document.getElementById('jadwalTanggal').value;
      if (pelajaran && waktu && tanggal) {
        jadwalList.push({ pelajaran, waktu, tanggal });
        localStorage.setItem('jadwal_list', JSON.stringify(jadwalList));
        renderJadwalPage();
      }
    });
  }, 10);

  return html;
}

function hapusJadwal(index) {
  if (confirm('Hapus jadwal ini?')) {
    jadwalList.splice(index, 1);
    localStorage.setItem('jadwal_list', JSON.stringify(jadwalList));
    renderJadwalPage();
  }
}

// === Navigasi dan Konten Dinamis ===
function setupNavigation() {
  const menuLinks = document.querySelectorAll('.menu-link[data-page]');
  const cardButtons = document.querySelectorAll('.card-button[data-page]');
  const pages = {
    'dashboard': showDashboard,
    'matematika': () => generateSubjectPage('matematika'),
    'fisika': () => generateSubjectPage('fisika'),
    'kimia': () => generateSubjectPage('kimia'),
    'biologi': () => generateSubjectPage('biologi'),
    'jadwal': renderJadwalPage,
    'skor': renderScorePage,
    'profile': renderProfilePage,
    'nilai': renderRaportPage, // Added for Raport
    'tugas': () => renderTugasPage('tugas'),
    'pr': () => renderTugasPage('pr'),
    'uploadpr': renderUploadPRPage,
    'forum': () => '<p>Forum diskusi belum tersedia.</p>',
    'bahasa': () => '<p>Materi bahasa belum tersedia.</p>'
  };

  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      loadPage(link.dataset.page);
    });
  });
  cardButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      loadPage(btn.dataset.page);
    });
  });

  function loadPage(page) {
    document.getElementById('dashboardPage').style.display = page === 'dashboard' ? 'block' : 'none';
    const dynamic = document.getElementById('dynamicContent');
    dynamic.innerHTML = page !== 'dashboard' && pages[page] ? pages[page]() : '';
    if (page === 'profile') handleProfileSave();
    document.title = `Portal Pembelajaran SMA - ${page.charAt(0).toUpperCase() + page.slice(1)}`;
    if (window.innerWidth <= 768) toggleSidebar();
  }

  function showDashboard() {
    document.getElementById('dashboardPage').style.display = 'block';
    document.getElementById('dynamicContent').innerHTML = '';
  }

  function generateSubjectPage(subject) {
    return `
      <div class="subject-content">
        <h2 class="page-title">${subject.charAt(0).toUpperCase() + subject.slice(1)}</h2>
        <div class="materi-list">
          <h3><i class="fas fa-book-open"></i> Materi Pembelajaran</h3>
          <ul><li>Materi ${subject} 1</li><li>Materi ${subject} 2</li></ul>
        </div>
        <div class="latihan-section">
          <h3><i class="fas fa-pencil-alt"></i> Latihan Soal</h3>
          ${generateQuiz(subject)}
        </div>
      </div>`;
  }

  function renderScorePage() {
    const currentUser = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
    const nilaiData = JSON.parse(localStorage.getItem('nilai_user')) || {};
    const skorUser = currentUser ? nilaiData[currentUser.id] || {} : {};

    let tugasList = '';
    let prList = '';
    let latihanList = '';

    for (let key in skorUser) {
      if (key.startsWith('tugas_')) tugasList += `<li>Tugas ${key.replace(/tugas_([a-z]+)_(\d{4}-\d{2}-\d{2})/, '$1 pada $2')}: ${skorUser[key]}%</li>`;
      else if (key.startsWith('pr_')) prList += `<li>PR ${key.replace(/pr_([a-z]+)_(\d{4}-\d{2}-\d{2})/, '$1 pada $2')}: ${skorUser[key]}%</li>`;
      else if (key.startsWith('latihan_')) latihanList += `<li><strong>${key.replace('latihan_', '').charAt(0).toUpperCase() + key.replace('latihan_', '').slice(1)}</strong>: ${skorUser[key]}%</li>`;
    }

    return `<div class="subject-content">
      <h2 class="page-title">Hasil Skor</h2>
      <h3>Latihan</h3><ul>${latihanList || '<li>Tidak ada</li>'}</ul>
      <h3>Tugas Harian</h3><ul>${tugasList || '<li>Tidak ada</li>'}</ul>
      <h3>PR Harian</h3><ul>${prList || '<li>Tidak ada</li>'}</ul>
    </div>`;
  }

  function renderProfilePage() {
    const currentUser = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
    return `
      <div class="subject-content">
        <h2 class="page-title"><i class="fas fa-user-cog"></i> Pengaturan Akun</h2>
        <form id="profileForm">
          <div class="form-group"><label>Nama</label><input id="profileName" value="${currentUser.name}" required></div>
          <div class="form-group"><label>Email</label><input id="profileEmail" value="${currentUser.email}" required></div>
          <div class="form-group"><label>Password Baru</label><input id="profilePassword" type="password" placeholder="Kosongkan jika tidak ingin mengubah"></div>
          <button type="submit" class="auth-button">Simpan</button>
        </form>
      </div>`;
  }

  // === Raport Page ===
  function renderRaportPage() {
    const currentUser = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
    if (!currentUser) {
      return `<div class="subject-content"><p>Silakan login untuk melihat raport.</p></div>`;
    }

    const nilaiData = JSON.parse(localStorage.getItem('nilai_user')) || {};
    const userScores = nilaiData[currentUser.id] || {};

    const subjects = Object.keys(questionsBank); // Get subjects from question bank
    const raportData = {};

    subjects.forEach(subject => {
      raportData[subject] = {
        latihan: [],
        tugas: [],
        pr: []
      };
    });

    // Populate raportData with scores
    for (const key in userScores) {
      if (key.startsWith('latihan_')) {
        const subject = key.replace('latihan_', '');
        if (raportData[subject]) raportData[subject].latihan.push(userScores[key]);
      } else if (key.startsWith('tugas_')) {
        const parts = key.split('_'); // e.g., tugas_matematika_2024-06-06
        const subject = parts[1];
        if (raportData[subject]) raportData[subject].tugas.push(userScores[key]);
      } else if (key.startsWith('pr_')) {
        const parts = key.split('_'); // e.g., pr_fisika_2024-06-06
        const subject = parts[1];
        if (raportData[subject]) raportData[subject].pr.push(userScores[key]);
      }
    }

    let raportHtml = `<div class="subject-content">
      <h2 class="page-title">Raport Hasil Belajar</h2>
      <p><strong>Nama:</strong> ${currentUser.name}</p>
      <p><strong>Kelas:</strong> ${currentUser.kelas}</p>
      <table class="raport-table">
        <thead>
          <tr>
            <th>Mata Pelajaran</th>
            <th>Nilai Rata-rata Latihan (Max: 100)</th>
            <th>Nilai Rata-rata Tugas (Max: 100)</th>
            <th>Nilai Rata-rata PR (Max: 100)</th>
            <th>Nilai Akhir (Rata-rata Ketiga)</th>
          </tr>
        </thead>
        <tbody>`;

    let overallFinalScores = [];

    subjects.forEach(subject => {
      const subjectData = raportData[subject];

      // Calculate average scores
      const avgLatihan = subjectData.latihan.length > 0
        ? Math.round(subjectData.latihan.reduce((sum, score) => sum + score, 0) / subjectData.latihan.length)
        : 0;

      const avgTugas = subjectData.tugas.length > 0
        ? Math.round(subjectData.tugas.reduce((sum, score) => sum + score, 0) / subjectData.tugas.length)
        : 0;
      
      const avgPR = subjectData.pr.length > 0
        ? Math.round(subjectData.pr.reduce((sum, score) => sum + score, 0) / subjectData.pr.length)
        : 0;

      // Calculate final score for the subject (average of the three categories)
      let finalScore = 0;
      let categoriesCount = 0;
      if (avgLatihan > 0) { finalScore += avgLatihan; categoriesCount++; }
      if (avgTugas > 0) { finalScore += avgTugas; categoriesCount++; }
      if (avgPR > 0) { finalScore += avgPR; categoriesCount++; }

      finalScore = categoriesCount > 0 ? Math.round(finalScore / categoriesCount) : 0;
      overallFinalScores.push(finalScore);

      raportHtml += `
        <tr>
          <td>${subject.charAt(0).toUpperCase() + subject.slice(1)}</td>
          <td>${avgLatihan}</td>
          <td>${avgTugas}</td>
          <td>${avgPR}</td>
          <td><strong>${finalScore}</strong></td>
        </tr>`;
    });

    const overallAverage = overallFinalScores.length > 0
      ? Math.round(overallFinalScores.reduce((sum, score) => sum + score, 0) / overallFinalScores.length)
      : 0;

    raportHtml += `
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" style="text-align: right;"><strong>Rata-rata Nilai Keseluruhan:</strong></td>
            <td><strong>${overallAverage}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>`;

    return raportHtml;
  }


  // === Upload PR Khusus (Hanya Admin) ===
  function renderUploadPRPage() {
    const currentUser = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
    if (!currentUser || currentUser.email !== 'admin@gmail.com') {
      return `<div class="subject-content"><p>Halaman ini hanya untuk admin.</p></div>`;
    }

    const today = new Date().toISOString().split("T")[0];
    const subjects = Object.keys(questionsBank);
    let adminTasks = JSON.parse(localStorage.getItem('admin_tasks')) || [];

    let html = `<div class="subject-content">
      <h2 class="page-title">Upload Tugas/PR</h2>
      <form id="uploadPRForm">
        <div class="form-group">
          <label>Jenis</label>
          <select id="taskType" required>
            <option value="">Pilih Jenis</option>
            <option value="tugas">Tugas</option>
            <option value="pr">PR</option>
          </select>
        </div>
        <div class="form-group">
          <label>Mata Pelajaran</label>
          <select id="taskSubject" required>
            <option value="">Pilih Mata Pelajaran</option>
            ${subjects.map(sub => `<option value="${sub}">${sub.charAt(0).toUpperCase() + sub.slice(1)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Pertanyaan</label>
          <input type="text" id="taskQuestion" placeholder="Masukkan pertanyaan" required>
        </div>
        <div class="form-group">
          <label>Pilihan Jawaban</label>
          <input type="text" id="taskOption1" placeholder="Pilihan 1" required>
          <input type="text" id="taskOption2" placeholder="Pilihan 2" required>
          <input type="text" id="taskOption3" placeholder="Pilihan 3" required>
          <input type="text" id="taskOption4" placeholder="Pilihan 4" required>
        </div>
        <div class="form-group">
          <label>Jawaban Benar</label>
          <select id="taskCorrectAnswer" required>
            <option value="">Pilih Jawaban Benar</option>
            <option value="1">Pilihan 1</option>
            <option value="2">Pilihan 2</option>
            <option value="3">Pilihan 3</option>
            <option value="4">Pilihan 4</option>
          </select>
        </div>
        <button type="submit" class="auth-button">Upload Tugas/PR</button>
        <div id="uploadPRResult"></div>
      </form>

      <hr style="margin: 30px 0;">

      <h2 class="page-title">Daftar Tugas/PR Terupload</h2>
      <div id="uploadedTasksList">
        ${adminTasks.length === 0 ? '<p>Belum ada tugas/PR yang diupload.</p>' : ''}
        ${adminTasks.map((task, index) => `
          <div class="pr-item">
            <p><strong>Jenis:</strong> ${task.type === 'tugas' ? 'Tugas' : 'PR'} - <strong>Mata Pelajaran:</strong> ${task.subject.charAt(0).toUpperCase() + task.subject.slice(1)}</p>
            <p><strong>Pertanyaan:</strong> ${task.question}</p>
            <p><strong>Pilihan:</strong> ${task.options.join(', ')}</p>
            <p><strong>Jawaban:</strong> ${task.answer}</p>
            <p><strong>Tanggal:</strong> ${task.date}</p>
            <button onclick="deleteAdminTask(${index})" class="card-button" style="background-color: #e74c3c;">Hapus</button>
          </div>
        `).join('')}
      </div>
    </div>`;

    setTimeout(() => {
      const form = document.getElementById('uploadPRForm');
      if (form) {
        form.addEventListener('submit', e => {
          e.preventDefault();
          
          const type = document.getElementById('taskType').value;
          const subject = document.getElementById('taskSubject').value;
          const question = document.getElementById('taskQuestion').value.trim();
          const options = [
            document.getElementById('taskOption1').value.trim(),
            document.getElementById('taskOption2').value.trim(),
            document.getElementById('taskOption3').value.trim(),
            document.getElementById('taskOption4').value.trim()
          ];
          const correctIndex = parseInt(document.getElementById('taskCorrectAnswer').value) - 1;
          const answer = options[correctIndex];

          if (!type || !subject || !question || options.some(opt => !opt) || isNaN(correctIndex) || correctIndex < 0 || correctIndex > 3) {
            document.getElementById('uploadPRResult').innerHTML = 
              `<p style="color:red">Harap isi semua field dengan benar!</p>`;
            return;
          }

          const taskData = {
            type,
            subject,
            question,
            options,
            answer,
            date: today
          };

          let tasks = JSON.parse(localStorage.getItem('admin_tasks')) || [];
          tasks.push(taskData);
          localStorage.setItem('admin_tasks', JSON.stringify(tasks));

          document.getElementById('uploadPRResult').innerHTML = 
            `<p style="color:green">${type === 'tugas' ? 'Tugas' : 'PR'} ${subject} berhasil diupload!</p>`;
          form.reset();
          // Re-render the page to show the updated list of tasks
          loadPage('uploadpr');
        });
      }
    }, 10);

    return html;
  }

  // Function to delete admin-uploaded tasks
  window.deleteAdminTask = function(index) {
    if (confirm('Apakah Anda yakin ingin menghapus tugas/PR ini?')) {
      let tasks = JSON.parse(localStorage.getItem('admin_tasks')) || [];
      tasks.splice(index, 1);
      localStorage.setItem('admin_tasks', JSON.stringify(tasks));
      loadPage('uploadpr'); // Re-render the page to update the list
    }
  };

  loadPage('dashboard');
}

// === Sidebar Toggle ===
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
}

// === Update UI User ===
function updateUserUI(user) {
  document.getElementById('userGreeting').textContent = `Halo, ${user.name}`;
  document.getElementById('sidebarUserName').textContent = user.name;
  document.getElementById('sidebarUserClass').textContent = `Kelas ${user.kelas}`;
  document.getElementById('profilePic').textContent = user.name.charAt(0).toUpperCase();
  const welcomeMsg = document.getElementById('welcomeMessage');
  if (welcomeMsg) welcomeMsg.textContent = `Selamat datang, ${user.name}`;
}

// === Simpan Profil ===
function handleProfileSave() {
  const form = document.getElementById('profileForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const users = JSON.parse(localStorage.getItem('pixelchan_users')) || [];
      const currentUser = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
      const name = document.getElementById('profileName').value.trim();
      const email = document.getElementById('profileEmail').value.trim();
      const newPassword = document.getElementById('profilePassword').value.trim();

      if (!name || !email) return alert("Nama dan Email wajib diisi.");
      if (users.some(u => u.email === email && u.id !== currentUser.id)) return alert("Email sudah digunakan.");

      const updatedUser = { ...currentUser, name, email };
      if (newPassword) updatedUser.password = newPassword;

      const index = users.findIndex(u => u.id === currentUser.id);
      if (index !== -1) {
        users[index] = updatedUser;
        localStorage.setItem('pixelchan_users', JSON.stringify(users));
        localStorage.setItem('pixelchan_currentUser', JSON.stringify(updatedUser));
        alert("Profil berhasil diperbarui.");
        updateUserUI(updatedUser);
      }
    });
  }
}

// === Inisialisasi Awal ===
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  const user = JSON.parse(localStorage.getItem('pixelchan_currentUser'));
  if (user) updateUserUI(user);

  const logoutBtn = document.getElementById('logoutButton');
  if (logoutBtn) logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem('pixelchan_currentUser');
    location.reload();
  });

  const root = document.documentElement;
  const savedTheme = localStorage.getItem('pixelchan_theme') || 'light';
  root.setAttribute('data-theme', savedTheme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', e => {
      e.preventDefault();
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('pixelchan_theme', next);
    });
  }
});