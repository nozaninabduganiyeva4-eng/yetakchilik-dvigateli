/**
 * Noel Tichy: "Yetakchilik Dvigateli"
 * Magistratura Seminari Uchun Qisqa, Oson & Mazmunli Dastur
 * 100% Mustaqil - API kalitlarsiz - AI siz
 */

// ==========================================
// 1. SEMINAR TAQDIMOT SLAYDLARI
// ==========================================
const slidesData = [
  {
    title: "1. 'Yetakchilik Dvigateli' Nazariyasining Mohiyati",
    content: `
      <ul>
        <li><strong>Asoschisi:</strong> Michigan universiteti professori Noel M. Tichy (The Leadership Engine, 1997).</li>
        <li><strong>Bosh g'oya:</strong> Muvaffaqiyatli kompaniyalar faqat bitta 'qahramon CEO'ga tayanmaydi.</li>
        <li><strong>Asosiy qoida:</strong> Ular tashkilotning har bir bo'g'inida (quyi, o'rta, yuqori) yangi yetakchilarni tarbiyalaydigan 'Dvigatel' yaratadi.</li>
      </ul>
    `,
    hint: "Kirishda ayting: Dunyodagi eng zo'r kompaniyalarda har bir xodim o'z ishida yetakchi va tashabbuskor bo'ladi."
  },
  {
    title: "2. Buyuk Yetakchi — Eng Avvalo Buyuk Murabbiydir",
    content: `
      <ul>
        <li><strong>An'anaviy boshqaruv:</strong> Rahbar faqat kabinetda o'tirib buyruq beradi va jazolaydi.</li>
        <li><strong>Tichy modeli:</strong> Haqiqiy yetakchi o'z ish vaqtining 30-50%ini xodimlarni o'qitishga sarflaydi.</li>
        <li><strong>Natija:</strong> Ta'lim faqat HR bo'limining ishi emas, u har bir rahbarning kundalik burchiga aylanadi.</li>
      </ul>
    `,
    hint: "Auditoriyaga savol bering: Siz bilgan rahbarlar o'z xodimlariga vaqt ajratib, ularga bilim o'rgatadimi?"
  },
  {
    title: "3. TPOV: O'rgatiladigan Nuqtai Nazar (4 Ustun)",
    content: `
      <ul>
        <li><strong>💡 G'oyalar (Ideas):</strong> Korxona qanday qilib pul topadi va bozorda yutadi?</li>
        <li><strong>⚖️ Qadriyatlar (Values):</strong> Har qanday krizisda ham buzilmaydigan axloqiy mezonlar.</li>
        <li><strong>🔥 Energiya (Energy):</strong> Xodimlarni qo'rquv bilan emas, maqsad bilan ilhomlantirish.</li>
        <li><strong>⚡ Qat'iyatlilik (Edge):</strong> Qiyin va og'ir qarorlarni tez va adolatli qabul qila olish ('Ha' yoki 'Yo'q').</li>
      </ul>
    `,
    hint: "TPOV ning 4 ustunini talabalarga oddiy tilda: G'oya, Qadriyat, Energiya va Qat'iyat deb sanab bering."
  },
  {
    title: "4. Fazilatli O'qitish Tsikli (The Virtuous Cycle)",
    content: `
      <ul>
        <li><strong>Ikki tomonlama oqim:</strong> Rahbar shunchaki ma'ruza o'qimaydi, u xodimlar bilan bahslashadi.</li>
        <li><strong>O'rgatish orqali o'rganish:</strong> Xodimlarning o'tkir savollari rahbarning o'zini ham yangi bilim olishga majbur qiladi.</li>
        <li><strong>Uzluksiz o'sish:</strong> Butun tashkilot 'o'rganuvchi tashkilot'ga (learning organization) aylanadi.</li>
      </ul>
    `,
    hint: "Tichining mashhur so'zini ayting: 'Biron narsani chuqur tushunmoqchi bo'lsangiz, uni boshqalarga o'rgatishga majbur bo'ling'."
  },
  {
    title: "5. Real Hayotiy Misol: General Electric va Crotonville",
    content: `
      <ul>
        <li>Noel Tichy GE rahbari Jek Uelch (Jack Welch) bilan birga Krotonvill ta'lim markaziga rahbarlik qilgan.</li>
        <li>Jek Uelch har oy xodimlar bilan bevosita Krotonvillda yuzma-yuz dars o'tgan.</li>
        <li><strong>Natija:</strong> General Electric dunyoning eng qimmat va muvaffaqiyatli korporatsiyasiga aylangan.</li>
      </ul>
    `,
    hint: "GE misolini keltiring: Jek Uelch o'rgatgan yetakchilar keyinchalik boshqa 50 dan ortiq katta kompaniyalarga boshliq bo'lgan."
  },
  {
    title: "6. Seminar Xulosasi & Magistrantlar Uchun Dars",
    content: `
      <ul>
        <li>Kelajakda rahbar bo'lganingizda barcha ishlarni bir o'zingiz bajarishga urinmang.</li>
        <li>O'z jamoangizdagi har bir a'zoga ustozlik qiling va ularga mas'uliyat bering.</li>
        <li>Sizning yetakchilik kuchingiz o'zingizdan keyin qancha yetakchi qoldirganingiz bilan o'lchanadi.</li>
      </ul>
    `,
    hint: "Seminarni xulosa qilib: 'Haqiqiy lider o'ziga ergashuvchilarni emas, yangi liderlarni ko'paytiradi' deb yakunlang."
  }
];

let currentSlide = 0;

function renderSlide() {
  const slide = slidesData[currentSlide];
  if (!slide) return;

  const view = document.getElementById('slideView');
  view.innerHTML = `
    <h3>${slide.title}</h3>
    ${slide.content}
  `;

  document.getElementById('slideIndicator').textContent = `${currentSlide + 1} / ${slidesData.length} - Slayd`;
  document.getElementById('speakerHintText').textContent = slide.hint;
}

function nextSlide() {
  if (currentSlide < slidesData.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0; // Tsikl boshiga qaytadi
  }
  renderSlide();
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    renderSlide();
  }
}

// Klaviaturadan ← va → tugmalari bilan boshqarish
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});


// ==========================================
// 2. QIZIQARLI O'YIN-TEST (ABCD KVIZ)
// ==========================================
const quizData = [
  {
    q: "1. Noel Tichining fikricha, buyuk yetakchining eng asosiy vazifasi nima?",
    options: [
      { letter: "A", text: "Faqat kabinetda o'tirib buyruq berish va jarima qo'llash" },
      { letter: "B", text: "O'z jamoasiga bilim o'rgatuvchi buyuk murabbiy bo'lish", correct: true },
      { letter: "C", text: "Kompaniyaning barcha ishlarini faqat bir o'zi bajarish" },
      { letter: "D", text: "Faqat xarajatlarni qisqartirish va odamlarni bo'shatish" }
    ],
    explanation: "Noel Tichy aytadiki: 'Buyuk yetakchi — eng avvalo buyuk murabbiydir'. U o'z bilimini jamoasiga o'rgatishi shart."
  },
  {
    q: "2. TPOV qisqartmasi o'zbek tilida nimani anglatadi?",
    options: [
      { letter: "A", text: "O'rgatiladigan Nuqtai Nazar (Teachable Point of View)", correct: true },
      { letter: "B", text: "Tashkiliy Rejalashtirish va Oylik Vaqt" },
      { letter: "C", text: "Tezkor Qaror Qabul Qilish Tizimi" },
      { letter: "D", text: "Tashqi Partnyorlar bilan Muloqot Nuqtasi" }
    ],
    explanation: "TPOV — bu yetakchining boshqalarga oson va tushunarli qilib o'rgata oladigan shaxsiy boshqaruv falsafasidir."
  },
  {
    q: "3. TPOV ning 4 ta asosiy ustuniga nimalar kiradi?",
    options: [
      { letter: "A", text: "Bino, Kompyuter, Stol, Mebel" },
      { letter: "B", text: "Pul, Xarajat, Audit, Soliq" },
      { letter: "C", text: "G'oyalar, Qadriyatlar, Energiya, Qat'iyatlilik (Edge)", correct: true },
      { letter: "D", text: "Buyruq, Jazo, Tekshirish, Hisobot" }
    ],
    explanation: "Noel Tichy 4 ustunni belgilab bergan: Ideas (G'oya), Values (Qadriyat), Energy (Energiya) va Edge (Qat'iyat)."
  },
  {
    q: "4. Tichy nazariyasida 'Edge' (Qat'iyatlilik) nimani anglatadi?",
    options: [
      { letter: "A", text: "Doimo xodimlar bilan baqirib gaplashish" },
      { letter: "B", text: "Qiyin vaziyatlarda ikkilanmasdan qat'iy va adolatli qaror qabul qilish ('Ha' yoki 'Yo'q')", correct: true },
      { letter: "C", text: "Hech qachon javobgarlikni bo'yniga olmaslik" },
      { letter: "D", text: "Barcha qarorlarni keyingi haftaga surib qo'yish" }
    ],
    explanation: "Edge — noqulay haqiqatni aytish, natija bermaydigan loyihalarni yopish va qat'iy qaror qilish mahorati."
  },
  {
    q: "5. 'Fazilatli O'qitish Tsikli' qanday ishlaydi?",
    options: [
      { letter: "A", text: "Rahbar o'rgatadi va shu jarayonda xodimlardan o'zi ham o'rganadi", correct: true },
      { letter: "B", text: "Faqat xorijdan qimmat trener chaqirib dars o'tiladi" },
      { letter: "C", text: "Faqat yangi kelgan xodimlar o'qitiladi, eskilarga o'qish shart emas" },
      { letter: "D", text: "Rahbar hech qachon xodimlardan savol qabul qilmaydi" }
    ],
    explanation: "O'qitish ikki tomonlama jarayondir: rahbar o'rgatish orqali o'z bilimini mustahkamlaydi va jamoani boyitadi."
  },
  {
    q: "6. Noel Tichy qaysi mashhur korporatsiyada Jek Uelch bilan ushbu tizimni yaratgan?",
    options: [
      { letter: "A", text: "General Electric (GE - Crotonville markazi)", correct: true },
      { letter: "B", text: "Nokia" },
      { letter: "C", text: "Kodak" },
      { letter: "D", text: "Blockbuster" }
    ],
    explanation: "Noel Tichy GE kompaniyasining Krotonvill markazida 'Yetakchilik dvigateli'ni amalda isbotlab bergan."
  },
  {
    q: "7. General Electric bosh direktori Jek Uelch o'z vaqtining qancha qismini o'qitishga sarflagan?",
    options: [
      { letter: "A", text: "Faqat yiliga 1 soat" },
      { letter: "B", text: "Vaqtining qariyb 50 foizini", correct: true },
      { letter: "C", text: "Umuman vaqt ajratmagan" },
      { letter: "D", text: "Faqat dam olish kunlari 5 daqiqa" }
    ],
    explanation: "Jek Uelch o'z ish vaqtining yarmiga yaqinini xodimlar bilan bevosita Krotonvillda dars o'tishga sarflagan."
  },
  {
    q: "8. Noel Tichining fikricha, rahbar o'z jamoasiga qaysi 3 ta hikoyani aytib berishi kerak?",
    options: [
      { letter: "A", text: "'Biz kim edik?', 'Biz hozir kimmiz?', 'Biz qayerga boryapmiz?'", correct: true },
      { letter: "B", text: "Ertaklar, Dostonlar, Rivoyatlar" },
      { letter: "C", text: "Faqat moliyaviy daromad va soliq hisobotlari" },
      { letter: "D", text: "Raqobatchilarning yomon tomonlari haqidagi gaplar" }
    ],
    explanation: "Tichy '3 Stories' formulasini bergan: O'tmish ildizlarimiz, hozirgi real haqiqatimiz va kelajakdagi maqsadimiz."
  },
  {
    q: "9. Agar bir xodim juda ko'p pul topsa, lekin jamoa qadriyatlarini (Values) buzsa, Tichy nima qilishni buyuradi?",
    options: [
      { letter: "A", text: "Katta pul topayotgani uchun uning xatolariga ko'z yumish" },
      { letter: "B", text: "U bilan qat'iy xayrlashish (Edge ko'rsatish), aks holda madaniyat buziladi", correct: true },
      { letter: "C", text: "Boshqa xodimlarni ham shunday qilishga undash" },
      { letter: "D", text: "Hech narsa qilmaslik" }
    ],
    explanation: "Tichy aytadi: Qadriyatni buzgan eng kuchli sotuvchini ishdan bo'shatsangiz, butun korxona qadriyatlarga ishona boshlaydi."
  },
  {
    q: "10. Magistraturada ushbu nazariyani o'rganishning siz uchun eng katta foydasi nima?",
    options: [
      { letter: "A", text: "Faqat seminarda baho olish" },
      { letter: "B", text: "Ertaga rahbar bo'lganingizda jamoangizni o'rgatuvchi haqiqiy yetakchiga aylanish", correct: true },
      { letter: "C", text: "Do'stlar bilan shunchaki bahslashish" },
      { letter: "D", text: "Hech qanday foydasi yo'q" }
    ],
    explanation: "Magistrantlar ertangi kun boshqaruvchilari. Tichy nazariyasi sizni o'z jamoasida yetakchilik dvigatelini yarata oladigan rahbar qiladi!"
  }
];

let currentQuestionIdx = 0;
let userScore = 0;
let answered = false;

function renderQuizQuestion() {
  answered = false;
  const q = quizData[currentQuestionIdx];
  if (!q) return;

  // Progress
  const progressPercent = ((currentQuestionIdx + 1) / quizData.length) * 100;
  document.getElementById('gameProgressBar').style.width = `${progressPercent}%`;
  document.getElementById('qCountText').textContent = `${currentQuestionIdx + 1}-savol (Jami ${quizData.length} ta)`;
  document.getElementById('gameScoreVal').textContent = userScore;

  document.getElementById('quizQuestionText').textContent = q.q;

  const optionsBox = document.getElementById('optionsContainer');
  optionsBox.innerHTML = '';

  document.getElementById('quizFeedbackBox').style.display = 'none';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="opt-letter">${opt.letter}</span>
      <span class="opt-text">${opt.text}</span>
    `;
    btn.onclick = () => selectOption(idx);
    optionsBox.appendChild(btn);
  });
}

function selectOption(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = quizData[currentQuestionIdx];
  const allBtns = document.querySelectorAll('.option-btn');
  const selectedBtn = allBtns[selectedIndex];
  const isCorrect = q.options[selectedIndex].correct === true;

  allBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (q.options[idx].correct) {
      btn.classList.add('correct');
    }
  });

  const feedbackBox = document.getElementById('quizFeedbackBox');
  const statusEl = document.getElementById('feedbackStatus');
  const expEl = document.getElementById('feedbackExplanation');

  feedbackBox.style.display = 'block';

  if (isCorrect) {
    userScore += 10;
    document.getElementById('gameScoreVal').textContent = userScore;
    statusEl.textContent = "✅ To'g'ri!";
    statusEl.style.color = "#10b981";
  } else {
    selectedBtn.classList.add('wrong');
    statusEl.textContent = "❌ Noto'g'ri!";
    statusEl.style.color = "#ef4444";
  }

  expEl.textContent = q.explanation;
}

function nextQuestion() {
  if (currentQuestionIdx < quizData.length - 1) {
    currentQuestionIdx++;
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  document.getElementById('quizCard').style.display = 'none';
  const resultsCard = document.getElementById('resultsCard');
  resultsCard.style.display = 'block';

  document.getElementById('resultsScoreText').textContent = 
    `Siz ${quizData.length * 10} balldan ${userScore} ball to'pladingiz (${userScore / 10} ta to'g'ri javob).`;

  let badge = "Yetakchi Murabbiy";
  let desc = "";

  if (userScore >= 80) {
    badge = "🏆 Yetakchi Murabbiy (Master Level)";
    desc = "A'lo natija! Siz Noel Tichining 'Yetakchilik dvigateli' nazariyasini to'liq tushungansiz va seminarda bemalol taqdimot qila olasiz.";
  } else if (userScore >= 50) {
    badge = "🥈 Istiqbolli Rahbar";
    desc = "Yaxshi natija! Asosiy prinsiplarni bilasiz. TPOV va 4 ustun mavzusini yana bir bor yuqoridagi slaydlar orqali ko'rib chiqsangiz a'lo bo'ladi.";
  } else {
    badge = "🥉 O'rganuvchi Menejer";
    desc = "Nazariyani yana bir marta ko'rib chiqish tavsiya etiladi. Slaydlarni o'qib, testni qaytadan ishlab ko'ring!";
  }

  document.getElementById('resultsRankBadge').textContent = badge;
  document.getElementById('resultsDescText').textContent = desc;
}

function restartQuiz() {
  currentQuestionIdx = 0;
  userScore = 0;
  document.getElementById('quizCard').style.display = 'block';
  document.getElementById('resultsCard').style.display = 'none';
  renderQuizQuestion();
}

// Boshlang'ich yuklash
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    renderSlide();
    renderQuizQuestion();
  });
} else {
  renderSlide();
  renderQuizQuestion();
}
