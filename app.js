/**
 * Noel Tichy: "Yetakchilik Dvigateli" (The Leadership Engine)
 * Master's Seminar & Executive Simulation Platform
 * 100% Standalone - No API Keys - No AI Dependent
 */

// ==========================================
// 1. Web Audio API Sound Synthesizer
// ==========================================
let audioEnabled = true;
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function playSound(type) {
  if (!audioEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);
      gainNode.gain.setValueAtTime(0.12, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554.37, now + 0.1);
      osc.frequency.setValueAtTime(659.25, now + 0.2);
      gainNode.gain.setValueAtTime(0.15, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'warning') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(150, now + 0.2);
      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  } catch (e) {
    console.warn('Audio synthesis not supported or blocked:', e);
  }
}

// Audio Toggle Button
const soundToggle = document.getElementById('ambient-sound-btn');
if (soundToggle) {
  soundToggle.addEventListener('click', () => {
    audioEnabled = !audioEnabled;
    const label = soundToggle.querySelector('.sound-label');
    const icon = soundToggle.querySelector('.sound-icon');
    if (audioEnabled) {
      label.textContent = 'Audio: Yoniq';
      icon.textContent = '🔔';
      playSound('click');
    } else {
      label.textContent = 'Audio: O\'chiq';
      icon.textContent = '🔕';
    }
  });
}

// ==========================================
// 2. Interactive Engine Mechanism Inspector
// ==========================================
const pillarData = {
  ideas: {
    badge: "1-Ustun: G'oyalar (Ideas)",
    title: "G'oyalar (Ideas) — Bozor Falsafasi va Strategik Qonuniyat",
    desc: "Noel Tichy aytadiki, g'olib tashkilotlar aniq biznes g'oyasiga ega. Bu shunchaki shior emas, balki korxona qanday qilib daromad qilishi, bozorda boshqalardan nima bilan ustun bo'lishi va kelajakdagi o'zgarishlarni qanday qabul qilishi haqidagi fundamental qarashdir. Rahbar bu g'oyani har bir xodimga o'rgata olishi shart.",
    quote: "\"Agar sizning biznes g'oyangizni bir varaq qog'ozda oddiy xodimga tushuntirib bera olmasangiz, sizda strategiya yo'q.\"",
    author: "Noel Tichy, The Leadership Engine"
  },
  values: {
    badge: "2-Ustun: Qadriyatlar (Values)",
    title: "Qadriyatlar (Values) — Axloqiy Kompas va Korporativ Madaniyat",
    desc: "Yetakchilik dvigatelida qadriyatlar faqat devorga osilgan plakat emas. Ular murosa qilinmaydigan xulq-atvor mezonlaridir. Tichy ko'rsatganidek, har qanday rahbar har kuni qabul qilayotgan qarorlari bilan qadriyatlarni namoyon etadi va jamoada ishonch muhitini shakllantiradi.",
    quote: "\"Qadriyatlar — bu hech kim sizni ko'rmayotgan paytda nima qilishingizdir. Yetakchining eng katta xatosi — aytgan so'zi bilan qilgan amali o'rtasidagi tafovutdir.\"",
    author: "Noel Tichy"
  },
  energy: {
    badge: "3-Ustun: Hissiy Energiya (Energy)",
    title: "Hissiy Energiya (Emotional Energy) — O'zgalarni Safarbar Qilish",
    desc: "Muvaffaqiyatli yetakchilar nafaqat o'zlari ulkan energiyaga ega, balki boshqalarda ham hissiy energiyani (Edge & Energy) uyg'ota oladilar. Ular odamlarni qo'rquv orqali emas, buyuk maqsadlar, umumiy g'alabalar va kasbiy g'urur orqali harakatga keltiradilar.",
    quote: "\"Energiya — bu yetakchilik dvigatelining yoqilg'isidir. Pulsiz dvigatel ishlamagandek, hissiy energiyasiz hech qanday strategiya amalga oshmaydi.\"",
    author: "The Leadership Engine"
  },
  edge: {
    badge: "4-Ustun: Qat'iyatlilik (Edge)",
    title: "Qat'iyatlilik (Edge) — Qiyin va Noqulay Qarorlar Qabul Qilish",
    desc: "Noel Tichining eng mashhur tushunchalaridan biri — bu 'Edge'. Bu rahbarning noqulay haqiqatni aytish, natija bermayotgan loyihalarni yopish, qadriyatlarga zid ish tutgan nufuzli xodimlar bilan xayrlashish va noaniqlik paytida qat'iy javobgarlikni o'z zimmasiga olish salohiyatidir.",
    quote: "\"Edge yo'q rahbar — bu hamma bilan yaxshi bo'lishga uringan, lekin pirovardida butun korxona va jamoani xavf ostiga qo'ygan qo'rqoq boshqaruvchidir.\"",
    author: "Noel Tichy"
  }
};

function showPillarDetail(pillarKey) {
  playSound('click');
  const data = pillarData[pillarKey];
  if (!data) return;

  const badge = document.getElementById('enginePillarBadge');
  const title = document.getElementById('enginePillarTitle');
  const desc = document.getElementById('enginePillarDesc');
  const quote = document.getElementById('enginePillarQuote');

  if (badge) badge.textContent = data.badge;
  if (title) title.textContent = data.title;
  if (desc) desc.textContent = data.desc;
  if (quote) {
    quote.innerHTML = `<em>${data.quote}</em><span>— ${data.author}</span>`;
  }
}

// ==========================================
// 3. Theory Tabs Controller
// ==========================================
function switchTheoryTab(tabId) {
  playSound('click');
  const buttons = document.querySelectorAll('.tabs-control .tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const panes = document.querySelectorAll('.tab-content-container .tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));

  const targetPane = document.getElementById(`tab-${tabId}`);
  if (targetPane) {
    targetPane.classList.add('active');
  }

  // Find calling button and make active
  const activeBtn = Array.from(buttons).find(b => b.getAttribute('onclick').includes(tabId));
  if (activeBtn) activeBtn.classList.add('active');
}

// ==========================================
// 4. Executive Management Simulator Game
// ==========================================
const gameScenarios = [
  {
    stage: 1,
    badge: "1-Krizis: Raqamli Buzilish & Bozor O'zgarishi",
    title: "Bozorga Yangi Texnologiyalar Kirib Kelishi",
    desc: "Siz 1500 xodimga ega yirik ishlab chiqarish/servis korxonasi bosh direktorisiz. Yangi raqamli innovatsiyalar tufayli korxonangizning asosiy daromad manbayi 35% ga pasaydi. O'rta bo'g'in menejerlari an'anaviy usullarni himoya qilmoqda, yosh xodimlar esa korxona kelajagiga ishonmay ketib qolmoqda.",
    options: [
      {
        letter: "A",
        title: "TPOV O'rgatish Sessiyasi: 'Kompaniya Kelajagi va Biznes G'oyasi'",
        desc: "Barcha bo'g'in rahbarlarini shaxsan to'plab, bozor haqiqatini ochiq aytasiz va yangi biznes modelini birgalikda shakllantirib, ularga o'rgatuvchi yetakchi bo'lish topshirig'ini berasiz.",
        pillar: "Ideas & Teaching",
        effects: { engine: +20, trust: +15, edge: +10 },
        feedback: "A'lo! Noel Tichy ta'kidlaganidek, krizis paytida yetakchi eng avvalo o'rgatuvchi roliga kiradi va xodimlar ongida yangi 'G'oya' (Idea) yaratadi. Jamoa birlashdi va yangi model qabul qilindi."
      },
      {
        letter: "B",
        title: "Qat'iy Qisqartirish: Eskirgan Bo'limlarni Zudlik Bilan Yopish",
        desc: "Hech kim bilan maslahatlashmasdan, 30% xodimlarni zudlik bilan ishdan bo'shatasiz va faqat xarajatlarni qisqartirish orqali daromadni saqlashga urinasiz.",
        pillar: "Pure Aggressive Edge",
        effects: { engine: -15, trust: -30, edge: +15 },
        feedback: "Qat'iyat bor, lekin Tichy ta'kidlaganidek, 'Qadriyatlar' va 'Energiya' hisobga olinmadi. Jamoa qo'rquv ichida qoldi, eng iqtidorli kadrlar sabotaj qila boshladi."
      },
      {
        letter: "C",
        title: "Kutish va Tashqi Konsaltint Kompaniyasini Yollash",
        desc: "O'z zimmangizga javobgarlik olmaslik uchun muammoni tashqi konsalting kompaniyasiga topshirasiz va vaziyat o'z-o'zidan barqarorlashishini kutasiz.",
        pillar: "Bureaucratic Paralysis",
        effects: { engine: -25, trust: -10, edge: -20 },
        feedback: "Xato! Bu Tichining 'Yetakchilik Dvigateli'ga butunlay zid. Yetakchi o'z bilimini o'rgatmasdan, chetdan qutqaruvchi kutsa, tashkilot dvigateli to'xtaydi."
      },
      {
        letter: "D",
        title: "Ichki Yangi G'oyalar Inkubatori & TPOV Dasturini Ishga Tushirish",
        desc: "O'rta va quyi bo'g'in yosh yetakchilariga vakolat berib, yangi raqamli loyihalar himoyasini shaxsan CEO darajasida qabul qilasiz (PepsiCo Roger Enrico modeli).",
        pillar: "Values & Energy",
        effects: { engine: +25, trust: +20, edge: +15 },
        feedback: "Zo'r strategik qadam! Roger Enrico va Jek Uelch kabi siz ham ichki resurslarni harakatga keltirdingiz. Yangi avlod yetakchilari o'zlarini muhim his qilib, innovatsion mahsulot ishlab chiqdi."
      }
    ]
  },
  {
    stage: 2,
    badge: "2-Krizis: Ichki Nizolar & Guruhbozlik Sabotaji",
    title: "Nufuzli Bo'lim Boshlig'i Madaniyatni Buzmoqda",
    desc: "Kompaniyadagi eng katta sotuv/daromad keltiruvchi nufuzli top-menejer boshqa bo'limlarni mensimaydi, jamoaviy qadriyatlarni oyoqosti qiladi va yosh kadrlarning tashabbuslarini bo'g'ib, o'z monopoliyasini o'rnatgan. Lekin uning ketishi qisqa muddatda moliyaviy yo'qotishga sabab bo'lishi mumkin.",
    options: [
      {
        letter: "A",
        title: "Edge Sinovi: Nufuzli Menejerga Qat'iy Shart Qo'yish yoki Xayrlashish",
        desc: "Noel Tichy mezoniga ko'ra, qadriyatlarga amal qilmagan odam qanchalik daromad keltirmasin, dvigatelni buzadi. Unga madaniyatga bo'ysunishni talab qilasiz, rad etsa ishdan bo'shatasiz.",
        pillar: "Edge & Values",
        effects: { engine: +20, trust: +25, edge: +25 },
        feedback: "Klassik Noel Tichy darsi! GE Krotonvillida Jek Uelch aytgan: 'Qadriyatlarni buzgan eng kuchli sotuvchini ishdan bo'shatgan kuningiz — butun tashkilot sizning qadriyatlaringiz chin ekanligiga ishonadi'."
      },
      {
        letter: "B",
        title: "Ko'z Yumish: Eng Muhimi Daromad, Xulq-Atvorni E'tiborsiz Qoldirish",
        desc: "Kompaniya hozir moliyaviy yo'qotishga chiday olmaydi, shuning uchun uning guruhbozligiga ko'z yumasiz va boshqa xodimlarni unga moslashishga chaqirasiz.",
        pillar: "Weak Compromise",
        effects: { engine: -25, trust: -30, edge: -20 },
        feedback: "Katta strategik mag'lubiyat. Tashkiliy ishonch yo'qoldi. Boshqa xodimlar 'bu yerda qoidalar hammaga bir xil emas' degan xulosaga kelib, tashabbus ko'rsatishni to'xtatdi."
      },
      {
        letter: "C",
        title: "Tashkiliy Qadriyatlar Deklaratsiyasini Qayta Tuzish va Ochiq Debat",
        desc: "Top-menejerlar o'rtasida ochiq seminar o'tkazib, qadriyatlar bo'yicha bahs uyushtirasiz va unga jamoa oldida o'z xulqini o'zgartirish imkonini berasiz.",
        pillar: "Values & Teaching",
        effects: { engine: +10, trust: +10, edge: +5 },
        feedback: "Muloqot foydali, lekin agar yetakchida qat'iy 'Edge' yetishmasa, manipulyator menejer vaziyatdan o'z foydasiga foydalanib qolishi mumkin."
      }
    ]
  },
  {
    stage: 3,
    badge: "3-Krizis: O'rta Bo'g'inning Passivligi (Frozen Middle)",
    title: "O'rta Bo'g'in Menejerlarining Qarshiligi",
    desc: "Boshqaruv qarorlari quyi xodimlarga yetib bormayapti. O'rta bo'g'in rahbarlari xavf-xatardan qo'rqib, tashabbuslarni to'xtatib turibdi. Tichy bu holatni 'Muzlagan O'rta Bo'g'in' (The Frozen Middle) deb ataydi.",
    options: [
      {
        letter: "A",
        title: "Barcha O'rta Bo'g'in Rahbarlarini 'Yetakchi-O'qituvchi' Dasturiga Kiritish",
        desc: "Ularga faqat ko'rsatma berish emas, balki o'z xodimlariga shaxsiy TPOV sini o'rgatish vazifasini qo'yasiz. Rahbarlik lavozimi faqat o'rgatuvchilik natijasi bilan baholanadi.",
        pillar: "The Virtuous Teaching Cycle",
        effects: { engine: +30, trust: +20, edge: +15 },
        feedback: "Aynan Noel Tichy tavsiya etgan yechim! O'rta bo'g'in o'rgatishga majbur bo'lganda, o'zlari ham mavzuni chuqur o'rganadi va mas'uliyatni his qiladi. Muz eridi!"
      },
      {
        letter: "B",
        title: "Jarima va Qattiq Nazorat Mexanizmini Kuchaytirish",
        desc: "Kamera, vaqt hisobi va qattiq jazo choralari orqali ularni buyruqlarni tezroq bajarishga majburlash.",
        pillar: "Authoritarian Control",
        effects: { engine: -20, trust: -25, edge: +5 },
        feedback: "Bunday yondashuv faqat ko'zbo'yamachilikni oshiradi. Odamlar o'zini robotdek his qiladi, hissiy energiya nolgacha tushadi."
      },
      {
        letter: "C",
        title: "O'rta Bo'g'inni Cheklab, Qarorlarni Faqat Yuqorida Qabul Qilish",
        desc: "Barcha kichik masalalarni ham o'z kabinetingizga olib kirasiz va mikro-menejmentga o'tasiz.",
        pillar: "Micromanagement Trap",
        effects: { engine: -30, trust: -15, edge: -15 },
        feedback: "Dvigatelning to'xtashi! Bir kishi butun tashkilot o'rniga o'ylay olmaydi. Siz charchab yiqilasiz, korxona esa harakatsiz qoladi."
      }
    ]
  },
  {
    stage: 4,
    badge: "4-Krizis: Yangi Avlod Iqtidorlarini Yo'qotish Xavfi",
    title: "Yosh Kadrlarning O'zini Ko'rsata Olmasligi",
    desc: "Kompaniyangizdagi eng qobiliyatli magistrlar va yosh mutaxassislar 'bizga ishonch yo'q, hamma narsani eskicha fikrlaydigan keksalar hal qiladi' deb, xalqaro kompaniyalarga ketishga ariza bermoqda.",
    options: [
      {
        letter: "A",
        title: "'Yoshlar Yetakchilik Kengashi' & Shaxsiy TPOV Mentorlik Tizimi",
        desc: "CEO va Top-menejerlar har bir yosh iqtidorga shaxsan murabbiy bo'ladi. Ularga strategik loyihalarni mustaqil boshqarish va direktorlar kengashida taklif bildirish huquqi beriladi.",
        pillar: "Emotional Energy & TPOV",
        effects: { engine: +25, trust: +30, edge: +15 },
        feedback: "Ajoyib natija! Noel Tichining GE va AlliedSignal bo'yicha eng sevimli amaliyoti. Yoshlar o'zlarini kompaniya egalaridek his qiladi va ketish fikridan voz kechadi."
      },
      {
        letter: "B",
        title: "Faqat Oylik Maoshni 20% Oshirish Bilan Muammoni Yopish",
        desc: "Boshqaruv muhitini o'zgartirmasdan, faqat qo'shimcha moddiy bonuslar va'da qilish.",
        pillar: "Materialistic Band-aid",
        effects: { engine: +5, trust: +5, edge: -10 },
        feedback: "Vaqtinchalik chora. Tichy ta'kidlaganidek, intellektual va yuksak salohiyatli insonlar uchun hissiy energiya, o'rganish va o'sish imkoniyati moddiy maoshdan ham ustun turadi."
      }
    ]
  },
  {
    stage: 5,
    badge: "5-Krizis: Global Inqiroz & Rahbariyatning Tarixiy Nutqi",
    title: "Bosh Boshqaruvchi Sifatida Xalq va Jamoaga Murojaat",
    desc: "Makroiqtisodiy keskin krizis yuz berdi. Daromadlar tushgan, noaniqlik eng yuqori nuqtada. Butun xodimlar, investorlar va talabalar zaldagi katta sahnada sizning og'zingizga qarab turibdi. Noel Tichining '3 ta Hikoya' (Leadership Stories) formulasidan foydalanib nutqingizni qanday qurasiz?",
    options: [
      {
        letter: "A",
        title: "Tichy Uchligi: O'tmish Ildizlari + Hozirgi Achchiq Haqiqat + Kelajak Buyuk Maqsadi",
        desc: "Dastlab korxona o'tmishdagi og'ir sinovlardan qanday chiqqanini eslatasiz, keyin hozirgi krizisning barcha qiyinchiliklarini ochiq aytasiz va nihoyat har bir xodim bilan qanday g'olib bo'lishingizni ko'rsatib, hissiy energiyani alangalatiz.",
        pillar: "Master Leadership Storytelling",
        effects: { engine: +30, trust: +25, edge: +25 },
        feedback: "Mukammal ijro! Auditoriya oyoqqa turib olqishladi. Bu aynan Jek Uelch va Noel Tichy o'rgatgan liderlik nutqi: hech qanday yolg'onsiz, haqqoniy, lekin buyuk umid va qat'iyat bilan to'la!"
      },
      {
        letter: "B",
        title: "Muammoni Yashirib, Faqat 'Hammasi Yaxshi Bo'ladi' Deb Odamlarni Tinchlantirish",
        desc: "Raqamlarni yumshatib ko'rsatasiz, xavf yo'qligini aytasiz va odamlarni vahima qilmaslikka chaqirasiz.",
        pillar: "False Optimism",
        effects: { engine: -20, trust: -30, edge: -20 },
        feedback: "Yetakchining fojiasi. Xodimlar haqiqatni bilishadi va sizning yolg'oningizdan keyin ishonchni butunlay yo'qotadilar."
      }
    ]
  }
];

let gameState = {
  currentStageIndex: 0,
  engine: 50,
  trust: 50,
  edge: 50
};

function renderCurrentScenario() {
  const scenario = gameScenarios[gameState.currentStageIndex];
  if (!scenario) {
    showGameResults();
    return;
  }

  // Update HUD
  document.getElementById('hudStageVal').textContent = `${scenario.stage} / ${gameScenarios.length}`;
  updateHudBars();

  // Update Scenario Card
  document.getElementById('scenarioBadge').textContent = scenario.badge;
  document.getElementById('scenarioTitle').textContent = scenario.title;
  document.getElementById('scenarioDesc').textContent = scenario.desc;

  // Options
  const container = document.getElementById('scenarioOptions');
  container.innerHTML = '';

  scenario.options.forEach((opt, idx) => {
    const btn = document.createElement('div');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <div class="option-letter">${opt.letter}</div>
      <div class="option-text">
        <h5>${opt.title}</h5>
        <p>${opt.desc}</p>
      </div>
    `;
    btn.onclick = () => selectGameOption(idx);
    container.appendChild(btn);
  });

  // Ensure card visible, feedback hidden
  document.getElementById('scenarioCard').style.display = 'block';
  document.getElementById('decisionFeedback').style.display = 'none';
  document.getElementById('gameResults').style.display = 'none';
}

function selectGameOption(optionIdx) {
  const scenario = gameScenarios[gameState.currentStageIndex];
  const option = scenario.options[optionIdx];
  if (!option) return;

  // Apply effects
  gameState.engine = Math.max(0, Math.min(100, gameState.engine + option.effects.engine));
  gameState.trust = Math.max(0, Math.min(100, gameState.trust + option.effects.trust));
  gameState.edge = Math.max(0, Math.min(100, gameState.edge + option.effects.edge));

  if (option.effects.engine >= 0) {
    playSound('success');
  } else {
    playSound('warning');
  }

  updateHudBars();

  // Show Feedback Panel
  document.getElementById('scenarioCard').style.display = 'none';
  const feedbackPanel = document.getElementById('decisionFeedback');
  feedbackPanel.style.display = 'block';

  document.getElementById('feedbackTitle').textContent = `Tanlangan Yondashuv: ${option.title}`;
  document.getElementById('feedbackText').textContent = option.feedback;

  const changesContainer = document.getElementById('feedbackChanges');
  changesContainer.innerHTML = '';

  const createTag = (label, val) => {
    const span = document.createElement('span');
    const isPlus = val >= 0;
    span.className = `change-tag ${isPlus ? 'change-plus' : 'change-minus'}`;
    span.textContent = `${label}: ${isPlus ? '+' : ''}${val}%`;
    return span;
  };

  changesContainer.appendChild(createTag('Dvigatel', option.effects.engine));
  changesContainer.appendChild(createTag('Ishonch', option.effects.trust));
  changesContainer.appendChild(createTag('Edge', option.effects.edge));
}

function nextScenario() {
  playSound('click');
  gameState.currentStageIndex++;
  if (gameState.currentStageIndex < gameScenarios.length) {
    renderCurrentScenario();
  } else {
    showGameResults();
  }
}

function updateHudBars() {
  document.getElementById('hudEngineBar').style.width = `${gameState.engine}%`;
  document.getElementById('hudEngineVal').textContent = `${gameState.engine}%`;

  document.getElementById('hudTrustBar').style.width = `${gameState.trust}%`;
  document.getElementById('hudTrustVal').textContent = `${gameState.trust}%`;

  document.getElementById('hudEdgeBar').style.width = `${gameState.edge}%`;
  document.getElementById('hudEdgeVal').textContent = `${gameState.edge}%`;
}

function showGameResults() {
  playSound('success');
  document.getElementById('scenarioCard').style.display = 'none';
  document.getElementById('decisionFeedback').style.display = 'none';
  const resPanel = document.getElementById('gameResults');
  resPanel.style.display = 'block';

  document.getElementById('resEngine').textContent = `${gameState.engine}%`;
  document.getElementById('resTrust').textContent = `${gameState.trust}%`;
  document.getElementById('resEdge').textContent = `${gameState.edge}%`;

  let archetype = "Yetakchi-Strateg";
  let summary = "";
  let feedback = "";

  const avg = (gameState.engine + gameState.trust + gameState.edge) / 3;

  if (avg >= 75) {
    archetype = "Transformatsion O'rgatuvchi Yetakchi (Tichy Grandmaster)";
    summary = "Qoyilmaqom boshqaruv! Siz nafaqat qat'iy qarorlar qabul qildingiz, balki o'rgatuvchi yetakchi sifatida jamoada ishonch va uzluksiz o'rganish madaniyatini shakllantirdingiz.";
    feedback = `
      <h4>Noel Tichy Ilmiy Tahlili:</h4>
      <p>Sizning boshqaruv uslubingiz Jek Uelch va Rojer Enriko darajasidagi natija ko'rsatdi. Siz "Virtuous Teaching Cycle"ni to'liq ishga soldingiz. Tashkilotingiz har bir bo'g'inda mustaqil yetakchilarga ega bo'ldi, bu esa korxonaning keyingi o'n yilliklarda ham barqaror g'alaba qozonishini kafolatlaydi.</p>
    `;
  } else if (avg >= 50) {
    archetype = "Qat'iyatli Inqiroz Menejeri (Pragmatik Yetakchi)";
    summary = "Siz korxonani inqirozdan saqlab qoldingiz, biroq xodimlarga o'rgatish va hissiy energiya berishda ayrim bo'shliqlar saqlanib qoldi.";
    feedback = `
      <h4>Noel Tichy Ilmiy Tahlili:</h4>
      <p>Sizda 'Edge' (qat'iyat) juda kuchli, ammo 'The Leadership Engine' kitobida ko'rsatilganidek, faqat qattiqqo'llik yetarli emas. Keyingi seminarlarda o'rta bo'g'in bilan shaxsiy mentorlik va TPOV sessiyalarini ko'paytirish tavsiya etiladi.</p>
    `;
  } else {
    archetype = "An'anaviy Byurokratik Rahbar (Islohotga Muhtoj)";
    summary = "Qarorlaringiz tashkilotda ishonchning pasayishiga va dvigatelning to'xtab qolishiga olib keldi.";
    feedback = `
      <h4>Noel Tichy Ilmiy Tahlili:</h4>
      <p>Siz mas'uliyatni boshqalarga yuklashga yoki qadriyatlarni buzgan nufuzli xodimlar oldida murosaga borishga yo'l qo'ydingiz. Magistratura darsida TPOV ning 4 ustunini qaytadan chuqur o'rganib chiqish zarur.</p>
    `;
  }

  document.getElementById('resultArchetype').textContent = archetype;
  document.getElementById('resultSummary').textContent = summary;
  document.getElementById('tichyAcademicFeedback').innerHTML = feedback;
}

function restartGame() {
  playSound('click');
  gameState = {
    currentStageIndex: 0,
    engine: 50,
    trust: 50,
    edge: 50
  };
  renderCurrentScenario();
}

// ==========================================
// 5. Interactive TPOV Builder & Passport
// ==========================================
let currentTpovStep = 1;
const totalTpovSteps = 5;

const stepTitles = {
  1: "1. Sizning Boshqaruv G'oyangiz (Ideas)",
  2: "2. Murosa Qilinmaydigan Qadriyatlaringiz (Values)",
  3: "3. Hissiy Energiya Manbayingiz (Energy)",
  4: "4. Qat'iyatlilik va Qat'iy Qarorlar (Edge)",
  5: "5. Shaxsiy Yetakchilik Tarixingiz (Story)"
};

function updateTpovLivePreview() {
  const name = document.getElementById('userNameInput').value.trim();
  const idea = document.getElementById('tpovIdeasInput').value.trim();
  const val1 = document.getElementById('tpovValue1').value.trim();
  const val2 = document.getElementById('tpovValue2').value.trim();
  const val3 = document.getElementById('tpovValue3').value.trim();
  const energy = document.getElementById('tpovEnergyInput').value.trim();
  const edge = document.getElementById('tpovEdgeInput').value.trim();
  const story = document.getElementById('tpovStoryInput').value.trim();

  document.getElementById('prevUserName').textContent = name || "Ism-familiya kiritilmagan";
  document.getElementById('prevUserIdea').textContent = idea || "Boshqaruv g'oyangiz shu yerda aks etadi...";
  
  const chipsContainer = document.getElementById('prevUserValues');
  chipsContainer.innerHTML = '';
  const values = [val1, val2, val3].filter(v => v.length > 0);
  if (values.length > 0) {
    values.forEach(v => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = v;
      chipsContainer.appendChild(chip);
    });
  } else {
    chipsContainer.innerHTML = '<span class="chip">1-Qadriyat</span><span class="chip">2-Qadriyat</span><span class="chip">3-Qadriyat</span>';
  }

  document.getElementById('prevUserEnergy').textContent = energy || "Hissiy energiya manbayingiz shu yerda namoyon bo'ladi...";
  document.getElementById('prevUserEdge').textContent = edge || "Qat'iy qarorlar qabul qilish mezonlaringiz...";
  document.getElementById('prevUserStory').textContent = story || "Yetakchilik tarixingiz (Kim edik -> Kimman -> Qayerga boryapmiz)...";
}

// Bind live input listeners
['userNameInput', 'tpovIdeasInput', 'tpovValue1', 'tpovValue2', 'tpovValue3', 'tpovEnergyInput', 'tpovEdgeInput', 'tpovStoryInput'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', updateTpovLivePreview);
  }
});

function nextTpovStep() {
  playSound('click');
  if (currentTpovStep < totalTpovSteps) {
    currentTpovStep++;
    showTpovStep(currentTpovStep);
  } else {
    // Finished all steps
    playSound('success');
    alert("Tabriklaymiz! Sizning Noel Tichy metodologiyasi bo'yicha TPOV Yetakchilik Pasportingiz tayyor bo'ldi. Uni chop etishingiz yoki seminarda himoya qilishingiz mumkin!");
  }
}

function prevTpovStep() {
  playSound('click');
  if (currentTpovStep > 1) {
    currentTpovStep--;
    showTpovStep(currentTpovStep);
  }
}

function showTpovStep(step) {
  document.getElementById('tpovStepIndicator').textContent = `${step} / ${totalTpovSteps} - Qadam`;
  document.getElementById('tpovStepTitle').textContent = stepTitles[step];

  for (let i = 1; i <= totalTpovSteps; i++) {
    const field = document.getElementById(`stepField${i}`);
    if (field) {
      if (i === step) {
        field.classList.add('active');
      } else {
        field.classList.remove('active');
      }
    }
  }

  document.getElementById('tpovPrevBtn').disabled = (step === 1);
  document.getElementById('tpovNextBtn').textContent = (step === totalTpovSteps) ? "✅ Pasportni Tasdiqlash" : "Keyingisi ➔";
}

function printPassport() {
  playSound('click');
  window.print();
}

function openPrintView() {
  playSound('click');
  window.print();
}

// ==========================================
// 6. Fullscreen Seminar Presentation System
// ==========================================
const presentationSlides = [
  {
    tag: "1-Slayd: Kirish & Seminar Mavzusi",
    title: "Noel Tichy: \"Yetakchilik Dvigateli\" (The Leadership Engine)",
    body: `
      <div class="slide-quote-box">
        "G'olib kompaniyalar har bir bo'g'inda yetakchilarni tarbiyalaydi. Buyuk yetakchi — eng avvalo buyuk murabbiy va o'rgatuvchidir."
      </div>
      <div class="slide-body-grid">
        <div class="slide-bullet-item">
          <h4>🎓 Dars Maqsadi</h4>
          <p>Tashkilotlarda barqaror ustunlikni ta'minlovchi yetakchilik dvigatelini, TPOV konsepsiyasini va Crotonville tajribasini tahlil qilish.</p>
        </div>
        <div class="slide-bullet-item">
          <h4>📚 Asosiy Manba</h4>
          <p>Noel M. Tichy & Eli Cohen: <em>The Leadership Engine: How Winning Companies Build Leaders at Every Level</em> (HarperCollins, 1997).</p>
        </div>
      </div>
    `,
    speakerNotes: "Spiker kirish so'zida bugungi korporativ dunyoda faqat bitta 'qahramon CEO'ga tayanuvchi kompaniyalar barbod bo'layotganini, Tichy modeli esa har bir bo'g'inda yetakchi yetishtirishini ta'kidlashi lozim."
  },
  {
    tag: "2-Slayd: Muallif & Tarixiy Kontekst",
    title: "Noel M. Tichy va General Electric (GE) Tajribasi",
    body: `
      <div class="slide-body-grid">
        <div class="slide-bullet-item">
          <h4>🏛️ Crotonville Markazi</h4>
          <p>Noel Tichy Jek Uelch (Jack Welch) davrida GE Krotonvill boshqaruv akademiyasiga rahbarlik qilgan. Bu yerda yetakchilik shunchaki nazariya emas, kundalik o'qitish tizimiga aylantirildi.</p>
        </div>
        <div class="slide-bullet-item">
          <h4>⚡ Rahbar Vaqtining 30-50% i</h4>
          <p>Jek Uelch o'z ish vaqtining qariyb yarmini xodimlarni bevosita o'qitishga sarflagan. Kompaniyada har bir top-menejerdan o'rgatuvchi bo'lish talab etilgan.</p>
        </div>
      </div>
      <div class="callout callout-info mt-3">
        <strong>Asosiy xulosa:</strong> Ta'lim — bu HR bo'limining ishi emas, bu birinchi rahbarning asosiy strategik vazifasidir.
      </div>
    `,
    speakerNotes: "Bu slaydda talabalarga Crotonville markazining dunyo biznes tarixidagi roli va an'anaviy HR treninglaridan farqi haqida so'zlab bering."
  },
  {
    tag: "3-Slayd: TPOV Arxitekturasi",
    title: "TPOV: Teachable Point of View (O'rgatiladigan Nuqtai Nazar)",
    body: `
      <p class="mb-4">Noel Tichining fundamental qoidasi: Agar rahbar o'z fikrini oddiy tilda boshqalarga o'rgata olmasa, uning shaxsiy nuqtai nazari shakllanmagan.</p>
      <div class="slide-body-grid">
        <div class="slide-bullet-item">
          <h4>💡 1. Ideas (G'oyalar)</h4>
          <p>Biznes strategiyasi, bozor qonuniyatlari va qanday qilib qiymat yaratish haqidagi aniq tushuncha.</p>
        </div>
        <div class="slide-bullet-item">
          <h4>⚖️ 2. Values (Qadriyatlar)</h4>
          <p>Har qanday krizisda ham buzilmaydigan axloqiy mezonlar va korporativ xulq-atvor.</p>
        </div>
        <div class="slide-bullet-item">
          <h4>🔥 3. Energy (Hissiy Energiya)</h4>
          <p>Jamoani ilhomlantirish, optimizm bag'ishlash va odamlarning ichki salohiyatini uyg'otish.</p>
        </div>
        <div class="slide-bullet-item">
          <h4>⚡ 4. Edge (Qat'iyatlilik)</h4>
          <p>Qiyin 'Ha' yoki 'Yo'q' deya olish, noqulay qarorlarni tez va adolatli qabul qilish irodasi.</p>
        </div>
      </div>
    `,
    speakerNotes: "TPOV ning 4 ta ustunini taxtada alohida ko'rsatib, har bir ustun bo'yicha auditoriyadan qisqa misollar so'rang."
  },
  {
    tag: "4-Slayd: Mexanizm",
    title: "Fazilatli O'qitish Tsikli (The Virtuous Teaching Cycle)",
    body: `
      <div class="slide-body-grid">
        <div class="slide-bullet-item">
          <h4>🔄 Ikki Tomonlama Oqim</h4>
          <p>An'anaviy buyruqbozlikda ma'lumot faqat tepadan pastga tushadi. 'Fazilatli Tsikl'da esa rahbar o'rgatadi va shu bilan birga o'rganadi.</p>
        </div>
        <div class="slide-bullet-item">
          <h4>📈 Bilim Sinergiyasi</h4>
          <p>Rahbar auditoriyada yosh xodimlarning savollari va e'tirozlariga duch keladi, bu esa uning o'z qarashlarini charxlashiga va yangi bozor haqiqatlarini tushunishiga yordam beradi.</p>
        </div>
      </div>
      <div class="callout callout-warning mt-3">
        <em>"O'rgatish orqali biz o'rganamiz; savollar orqali biz yangilanamiz."</em>
      </div>
    `,
    speakerNotes: "Ushbu slaydda talabalarga nima uchun magistraturada seminar darslari aynan talabalarning o'zlari dars o'tishi asosida qurilganini Tichy nazariyasi bilan bog'lab tushuntiring."
  },
  {
    tag: "5-Slayd: Amaliy Keyslar",
    title: "Keys Tahlili: General Electric va PepsiCo",
    body: `
      <div class="slide-body-grid">
        <div class="slide-bullet-item">
          <h4>GE (Jek Uelch Modeli)</h4>
          <ul>
            <li>Bozorda 1- yoki 2-o'rinda bo'lmagan bizneslarni yopish yoki sotish ('Edge').</li>
            <li>Rahbarlarni 360 daraja baholash va doimiy o'qitish madaniyati.</li>
            <li>GE yetakchilari boshqa 50 dan ortiq yirik global kompaniyalar CEO si bo'ldi.</li>
          </ul>
        </div>
        <div class="slide-bullet-item">
          <h4>PepsiCo (Rojer Enriko Modeli)</h4>
          <ul>
            <li>CEO o'z qarorgohida eng sara 100 nafar yosh rahbarlarni shaxsan o'qitdi.</li>
            <li>Har bir ishtirokchidan 100 million dollarlik o'sish keltiruvchi loyiha talab qilindi.</li>
            <li>Kompaniya ichida ulkan yangi yetakchilik to'lqini shakllandi.</li>
          </ul>
        </div>
      </div>
    `,
    speakerNotes: "Keyslar orqali korporativ amaliyotda Tichy nazariyasining moddiy va moliyaviy natijadorligini isbotlang."
  },
  {
    tag: "6-Slayd: Milliy Amaliyot",
    title: "O'zbekiston Boshqaruv Tizimida Yetakchilik Dvigatelini Qo'llash",
    body: `
      <div class="slide-body-grid">
        <div class="slide-bullet-item">
          <h4>⚠️ Mavjud Muammo</h4>
          <p>Vazirliklar va korporatsiyalarda 'bir kishilik qarorlar' va o'rta bo'g'inning tashabbus ko'rsatishdan qo'rqishi (byurokratik inertsiya).</p>
        </div>
        <div class="slide-bullet-item">
          <h4>✅ Tichy Taklif Qilgan Yechim</h4>
          <p>Har bir bo'lim boshlig'iga mentorlik vakolatini berish, TPOV pasportlarini joriy etish va kadrlarni o'z qo'l ostidagilarni o'qitish darajasiga qarab lavozimga ko'tarish.</p>
        </div>
      </div>
    `,
    speakerNotes: "Talabalarga O'zbekistondagi banklar, vazirliklar yoki IT korxonalari misolida munozara ochishni taklif eting."
  },
  {
    tag: "7-Slayd: Debat & Munozara",
    title: "Auditoriya Uchun Bahs Savollari (Debat Maydoni)",
    body: `
      <div class="debate-topics-list">
        <div class="debate-item">
          <strong>1-Bahs:</strong> "Barcha rahbarlar o'rgatuvchi bo'lishi mumkinmi yoki bu faqat ma'lum shaxslarga berilgan nodir qobiliyatmi?"
        </div>
        <div class="debate-item">
          <strong>2-Bahs:</strong> "O'zbekiston kompaniyalarida 'Edge' (xodimlarni qat'iy ishdan bo'shatish/tanqid) o'zbek mentalitetidagi 'andisha' bilan qanday uyg'unlashadi?"
        </div>
        <div class="debate-item">
          <strong>3-Bahs:</strong> "Agar yetakchining TPOV si noto'g'ri bo'lsa, butun tashkilot halokatga yuz tutadimi?"
        </div>
      </div>
    `,
    speakerNotes: "Auditoriyani ikkiga ajratib, 5 daqiqalik qisqa munozara o'tkazing."
  },
  {
    tag: "8-Slayd: Xulosa & Baholash",
    title: "Seminar Xulosasi: Yetakchilik — Bu Meros Yaratish San'ati",
    body: `
      <div class="slide-quote-box">
        "Sizning muvaffaqiyatingiz qancha xodimga ega ekanligingiz bilan emas, orqangizdan qancha yetakchi qoldirganingiz bilan o'lchanadi."
      </div>
      <div class="slide-body-grid">
        <div class="slide-bullet-item">
          <h4>🎯 Yakuniy Xulosa</h4>
          <p>Yetakchilik dvigateli — bu bir martalik tadbir emas, bu tashkilot qon tomiridagi uzluksiz o'rganish va o'rgatish falsafasidir.</p>
        </div>
        <div class="slide-bullet-item">
          <h4>📝 Amaliy Topshiriq</h4>
          <p>Har bir magistrant saytdagi 'TPOV Konstruktori' orqali o'z shaxsiy boshqaruv pasportini to'ldirishi va himoya qilishi lozim.</p>
        </div>
      </div>
    `,
    speakerNotes: "Seminarni yakunlab, barcha magistrantlarni TPOV konstruktorida o'z pasportlarini shakllantirishga yo'naltiring."
  }
];

let currentSlideIdx = 0;
let slideTimerInterval = null;
let slideSecondsElapsed = 0;

function startPresentation() {
  playSound('success');
  const container = document.getElementById('presentationContainer');
  if (container) {
    container.style.display = 'flex';
    currentSlideIdx = 0;
    renderSlide();
    startSlideTimer();
    renderSlideDots();
  }
}

function closePresentation() {
  playSound('click');
  const container = document.getElementById('presentationContainer');
  if (container) {
    container.style.display = 'none';
    stopSlideTimer();
  }
}

function renderSlide() {
  const slide = presentationSlides[currentSlideIdx];
  if (!slide) return;

  const stage = document.getElementById('slideStage');
  stage.innerHTML = `
    <div class="slide-content-card">
      <span class="slide-tag">${slide.tag}</span>
      <h2>${slide.title}</h2>
      ${slide.body}
    </div>
  `;

  document.getElementById('slideIndicator').textContent = `${currentSlideIdx + 1} / ${presentationSlides.length}`;
  document.getElementById('speakerNotesContent').textContent = slide.speakerNotes;

  // Update dots
  const dots = document.querySelectorAll('.slide-dot');
  dots.forEach((dot, idx) => {
    if (idx === currentSlideIdx) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // Nav buttons state
  document.getElementById('prevSlideBtn').disabled = (currentSlideIdx === 0);
  document.getElementById('nextSlideBtn').textContent = (currentSlideIdx === presentationSlides.length - 1) ? "Tugatish ➔" : "Keyingi Slayd (→) ▶";
}

function renderSlideDots() {
  const container = document.getElementById('slidesDotsContainer');
  container.innerHTML = '';
  presentationSlides.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `slide-dot ${idx === currentSlideIdx ? 'active' : ''}`;
    dot.onclick = () => {
      playSound('click');
      currentSlideIdx = idx;
      renderSlide();
    };
    container.appendChild(dot);
  });
}

function nextSlide() {
  playSound('click');
  if (currentSlideIdx < presentationSlides.length - 1) {
    currentSlideIdx++;
    renderSlide();
  } else {
    closePresentation();
  }
}

function prevSlide() {
  playSound('click');
  if (currentSlideIdx > 0) {
    currentSlideIdx--;
    renderSlide();
  }
}

function toggleSpeakerNotes() {
  playSound('click');
  const drawer = document.getElementById('speakerNotesDrawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

function toggleFullscreen() {
  playSound('click');
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
}

function startSlideTimer() {
  stopSlideTimer();
  slideSecondsElapsed = 0;
  const display = document.getElementById('slideTimerDisplay');
  slideTimerInterval = setInterval(() => {
    slideSecondsElapsed++;
    const mins = String(Math.floor(slideSecondsElapsed / 60)).padStart(2, '0');
    const secs = String(slideSecondsElapsed % 60).padStart(2, '0');
    if (display) display.textContent = `⏱️ ${mins}:${secs}`;
  }, 1000);
}

function stopSlideTimer() {
  if (slideTimerInterval) {
    clearInterval(slideTimerInterval);
    slideTimerInterval = null;
  }
}

// Global Keyboard Navigation for Slides
window.addEventListener('keydown', (e) => {
  const container = document.getElementById('presentationContainer');
  const isPresenting = container && container.style.display !== 'none';

  if (isPresenting) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Escape') {
      closePresentation();
    }
  } else {
    if (e.key === 'f' || e.key === 'F') {
      // Don't trigger if user is typing in an input
      if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        startPresentation();
      }
    }
  }
});

// Quick triggers
const openSlidesBtn = document.getElementById('open-slides-btn');
if (openSlidesBtn) openSlidesBtn.addEventListener('click', startPresentation);

const quickPresBtn = document.getElementById('quick-presentation-btn');
if (quickPresBtn) quickPresBtn.addEventListener('click', startPresentation);

// ==========================================
// 7. Interactive Blitz Quiz Modal
// ==========================================
const quizQuestions = [
  {
    q: "Noel Tichy ta'rifiga ko'ra, buyuk yetakchining eng asosiy fazilati nima?",
    options: [
      "Barcha ishlarni o'zi mukammal nazorat qilishi",
      "Eng avvalo buyuk murabbiy va o'rgatuvchi bo'lishi",
      "Faqat qattiqqo'llik va jazo choralarini qo'llashi",
      "Kompaniyaning barcha aksiyalariga egalik qilishi"
    ],
    correct: 1,
    explanation: "Noel Tichy 'The Leadership Engine' kitobida ta'kidlaydi: 'Winning leaders are, first and foremost, great teachers'. Yetakchilik — bu o'z bilimini boshqalarga o'rgatish orqali yangi yetakchilarni ko'paytirishdir."
  },
  {
    q: "TPOV (Teachable Point of View) qisqartmasi o'zbek tilida qanday ma'noni anglatadi?",
    options: [
      "Tashkiliy rejalashtirish va hisobot nuqtasi",
      "O'rgatiladigan Nuqtai Nazar",
      "Texnik parametrlarni optimallashtirish varianti",
      "Tashqi partnyorlar bilan o'zaro hamkorlik"
    ],
    correct: 1,
    explanation: "TPOV — bu yetakchining o'z qarashlarini boshqalarga oson va tizimli o'rgata oladigan darajada shakllangan 4 ustunli shaxsiy falsafasidir."
  },
  {
    q: "TPOV ning 4 ta asosiy ustuniga quyidagilardan qaysilari kiradi?",
    options: [
      "Reja, Byudjet, Xodimlar, Audit",
      "G'oyalar (Ideas), Qadriyatlar (Values), Hissiy Energiya (Energy), Qat'iyatlilik (Edge)",
      "Marketing, Moliya, Logistika, Sotuv",
      "Buyruq, Nazorat, Jazo, Rag'bat"
    ],
    correct: 1,
    explanation: "Noel Tichy TPOV ni 4 ta asosiy elementdan iborat deb belgilagan: Ideas, Values, Emotional Energy va Edge."
  },
  {
    q: "Tichy nazariyasida 'Edge' (Qat'iyatlilik) nimani anglatadi?",
    options: [
      "Doimo xodimlar bilan tortishishni",
      "Qiyin, noqulay va noaniq vaziyatlarda tez va adolatli qaror qabul qila olish irodasini",
      "Barcha ishlarni paysalga solishni",
      "Faqat o'z manfaatini o'ylashni"
    ],
    correct: 1,
    explanation: "'Edge' — bu rahbarning og'riqli haqiqatni ayta olishi, 'Yo'q' deya bilishi va tashkilot manfaati uchun qat'iy qaror qabul qilish salohiyatidir."
  },
  {
    q: "Fazilatli O'qitish Tsikli (The Virtuous Teaching Cycle)ning an'anaviy buyruqbozlikdan farqi nima?",
    options: [
      "Rahbar faqat buyruq beradi",
      "Rahbar o'rgatish jarayonida tinglovchilardan o'zi ham o'rganadi va o'z bilimini boyitadi",
      "Darslar faqat xorijlik mutaxassislar tomonidan o'tiladi",
      "Tsikl faqat bir marta o'tkaziladi"
    ],
    correct: 1,
    explanation: "Fazilatli tsiklda o'qitish ikki tomonlama sinergiyadir: rahbar o'rgatadi va shu bilan birga o'rganadi."
  },
  {
    q: "Noel Tichy qaysi dunyoga mashhur korporatsiyaning Crotonville markazida o'z nazariyasini amalda qo'llagan?",
    options: [
      "Apple",
      "General Electric (GE)",
      "McDonald's",
      "Toyota"
    ],
    correct: 1,
    explanation: "Noel Tichy Jek Uelch bilan birgalikda GE Krotonvill Boshqaruv Rivojlanish Markazini dunyodagi eng ilg'or 'Yetakchilik fabrikasi'ga aylantirgan."
  },
  {
    q: "Noel Tichy aytgan 'Yetakchilik Hikoyalari'ning 3 ta asosiy turi qaysilar?",
    options: [
      "Kulgili, Ma'yus, Hayoliy hikoyalar",
      "'Biz kim edik?', 'Biz hozir kimmiz?', 'Biz qayerga boryapmiz?'",
      "Qadimgi afsonalar, Ertaklar, Dostonlar",
      "Moliyaviy hisobot, Soliq deklaratsiyasi, Audit natijasi"
    ],
    correct: 1,
    explanation: "Tichy aytadiki, rahbar har doim jamoaga o'tmish ildizlarini, hozirgi real haqiqatni va kelajakdagi buyuk marrani hikoya qilib berishi shart."
  },
  {
    q: "PepsiCo kompaniyasi rahbari Rojer Enriko qanday liderlik dasturini yo'lga qo'ygan?",
    options: [
      "Barcha menejerlarni ishdan bo'shatgan",
      "Shaxsiy qarorgohida 100 nafar yosh rahbarlarni o'zi o'qitib, ulardan 100 mln dollarlik loyiha qabul qilgan",
      "O'qitishni faqat onlayn testlarga o'tkazgan",
      "Hech qanday o'qitish o'tkazmagan"
    ],
    correct: 1,
    explanation: "Rojer Enriko o'z shaxsiy vaqti va resursini sarflab, yosh rahbarlarga o'z TPOV sini o'rgatgan va kompaniyada tarixiy o'sishga zamin yaratgan."
  },
  {
    q: "Nega muvaffaqiyatli kompaniyalar yetakchilarni faqat chetdan yollamaydi?",
    options: [
      "Chunki bu juda arzon",
      "Chunki o'z ichida yetakchilik dvigateliga ega tashkilotlar o'z qadriyatlari va madaniyatiga sodiq rahbarlarni uzluksiz tayyorlaydi",
      "Chetliklar ishlashni bilmaydi",
      "Bunday talab qonunchilikda yo'q"
    ],
    correct: 1,
    explanation: "Yetakchilik dvigateliga ega tashkilotlar o'z madaniyati va DNKsiga mos yetakchilarni har bir bo'g'inda o'stiradi."
  },
  {
    q: "Magistraturada Noel Tichy nazariyasini o'rganishning amaliy foydasi nimada?",
    options: [
      "Faqat imtihonda baho olish",
      "Ertaga rahbar bo'lganda o'z jamoasini o'rgatuvchi yetakchiga aylanish va TPOV tizimini joriy etish",
      "Hech qanday foydasi yo'q",
      "Faqat xorijga ketish"
    ],
    correct: 1,
    explanation: "Magistrantlar ertangi kunning yetakchilari sifatida o'z TPOV larini shakllantirib, tashkilotlarida yetakchilik dvigatelini yaratishi lozim."
  }
];

let currentQuizIdx = 0;
let quizScore = 0;

function startQuickQuiz() {
  playSound('click');
  currentQuizIdx = 0;
  quizScore = 0;
  document.getElementById('quizModal').style.display = 'flex';
  renderQuizQuestion();
}

function closeQuizModal() {
  playSound('click');
  document.getElementById('quizModal').style.display = 'none';
}

function renderQuizQuestion() {
  const q = quizQuestions[currentQuizIdx];
  if (!q) {
    showQuizFinal();
    return;
  }

  // Progress
  const progressPercent = ((currentQuizIdx + 1) / quizQuestions.length) * 100;
  document.getElementById('quizProgressFill').style.width = `${progressPercent}%`;

  document.getElementById('quizQNum').textContent = `${currentQuizIdx + 1}-savol (Jami ${quizQuestions.length} ta)`;
  document.getElementById('quizQText').textContent = q.q;

  const answersContainer = document.getElementById('quizAnswersContainer');
  answersContainer.innerHTML = '';

  document.getElementById('quizExplanation').style.display = 'none';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-ans-btn';
    btn.textContent = opt;
    btn.onclick = () => selectQuizAnswer(idx, btn);
    answersContainer.appendChild(btn);
  });
}

function selectQuizAnswer(selectedIdx, btnElement) {
  const q = quizQuestions[currentQuizIdx];
  const allBtns = document.querySelectorAll('.quiz-ans-btn');
  allBtns.forEach(b => b.disabled = true);

  if (selectedIdx === q.correct) {
    playSound('success');
    btnElement.classList.add('correct');
    quizScore++;
  } else {
    playSound('warning');
    btnElement.classList.add('wrong');
    if (allBtns[q.correct]) {
      allBtns[q.correct].classList.add('correct');
    }
  }

  // Show explanation
  const expPanel = document.getElementById('quizExplanation');
  expPanel.style.display = 'block';
  document.getElementById('quizExplanationText').textContent = q.explanation;
}

function nextQuizQuestion() {
  playSound('click');
  currentQuizIdx++;
  if (currentQuizIdx < quizQuestions.length) {
    renderQuizQuestion();
  } else {
    showQuizFinal();
  }
}

function showQuizFinal() {
  playSound('success');
  const modalBody = document.getElementById('quizModalBody');
  const percent = Math.round((quizScore / quizQuestions.length) * 100);

  modalBody.innerHTML = `
    <div style="text-align: center; padding: 2rem 1rem;">
      <div style="font-size: 3.5rem; margin-bottom: 1rem;">🏆</div>
      <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--accent-gold);">Kviz Natijasi: ${percent}%</h3>
      <p style="font-size: 1.1rem; color: #cbd5e1; margin-bottom: 1.5rem;">Siz ${quizQuestions.length} ta savoldan ${quizScore} tasiga to'g'ri javob berdingiz.</p>
      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem; text-align: left;">
        <strong>Xulosa:</strong> ${
          percent >= 80 
            ? "A'lo daraja! Siz Noel Tichining 'Yetakchilik Dvigateli' nazariyasini mukammal o'zlashtirgansiz va seminarda ma'ruza qilishga to'liq tayyorsiz." 
            : percent >= 50 
            ? "Yaxshi natija! Asosiy prinsiplarni tushungansiz, ammo TPOV va Virtuous Cycle mavzularini slaydlar orqali yana bir bor takrorlash tavsiya etiladi." 
            : "Mavzu bo'yicha nazariy materiallarni va Crotonville keyslarini qaytadan ko'rib chiqishingiz kerak."
        }
      </div>
      <button class="btn btn-primary" onclick="closeQuizModal()">Yakunlash</button>
      <button class="btn btn-outline" onclick="startQuickQuiz()">Qayta Topshirish</button>
    </div>
  `;
}

// ==========================================
// 8. Case Discussion Modal Controller
// ==========================================
const caseDiscussionData = {
  ge: {
    title: "General Electric & Jek Uelch Keysi Bo'yicha Seminar Savollari",
    content: `
      <p class="mb-3">General Electric (GE) kompaniyasining Krotonvill markazidagi tajribasi butun dunyoda biznes maktablari tomonidan eng samarali korporativ ta'lim modeli deb tan olingan.</p>
      <h4 style="color: var(--accent-gold); margin-bottom: 0.8rem;">Magistrantlar uchun Munozara Savollari:</h4>
      <ol class="academic-list">
        <li>Jek Uelch nega o'z ish vaqtining 50 foizini odamlarni o'qitishga sarflagan? Bu bosh direktor uchun oqlangan xarajatmi?</li>
        <li>Crotonville markazida rahbarlar xodimlar bilan ochiq bahslashgan. Bunday ochiqlik rahbarning obro'siga putur yetkazmaydimi?</li>
        <li>Nega GE dan chiqqan rahbarlar boshqa 50 dan ortiq yirik kompaniyalarga CEO bo'lib ketgan? Bu GE uchun yo'qotishmi yoki yutuq?</li>
      </ol>
      <div class="callout callout-info mt-3">
        <strong>Vazifa:</strong> Guruhlarga 3 daqiqa vaqt beriladi. Har bir guruh bitta savol bo'yicha Tichy modeli asosida javob taqdim etadi.
      </div>
    `
  },
  pepsico: {
    title: "PepsiCo & Rojer Enriko Keysi Bo'yicha Seminar Savollari",
    content: `
      <p class="mb-3">PepsiCo bosh direktori Rojer Enriko o'z maoshini 1 dollargacha tushirib, kompaniya iqtidorlarini shaxsiy uyida o'qitgan.</p>
      <h4 style="color: var(--accent-gold); margin-bottom: 0.8rem;">Magistrantlar uchun Munozara Savollari:</h4>
      <ol class="academic-list">
        <li>Rojer Enriko nega o'quv dasturini professional biznes maktabi professorlariga emas, aynan o'zi o'tkazishga qaror qildi?</li>
        <li>Har bir yosh rahbardan 100 million dollarlik o'sish beruvchi yangi loyiha talab qilinishi Tichining qaysi ustuniga (Ideas, Values, Energy, Edge) to'g'ri keladi?</li>
        <li>Bunday shaxsiy mentorlik modeli kompaniya ichida 'sevimlilar' (favoritism) paydo bo'lishiga olib kelmaydimi? Buni qanday oldini olish mumkin?</li>
      </ol>
    `
  },
  uzb: {
    title: "O'zbekiston Boshqaruvida Yetakchilik Dvigatelini Joriy Etish",
    content: `
      <p class="mb-3">O'zbekistonning davlat boshqaruvi va korporativ sektorida kadrlar salohiyatini oshirish dolzarb vazifadir.</p>
      <h4 style="color: var(--accent-gold); margin-bottom: 0.8rem;">Magistrantlar uchun Munozara Savollari:</h4>
      <ol class="academic-list">
        <li>O'zbekistondagi vazirlik va yirik korxonalarda rahbarlarning xodimlarni o'rgatuvchi bo'lishiga nimalar to'sqinlik qilmoqda?</li>
        <li>Tichining 'Edge' (qat'iy talabchanlik) tamoyilini milliy qadriyatlar va andisha bilan qanday muvofiqlashtirish mumkin?</li>
        <li>Davlat xizmatida 'TPOV Yetakchilik Pasporti' joriy etilsa, bu kadrlar sifatiga qanday ta'sir ko'rsatadi?</li>
      </ol>
    `
  }
};

function openCaseDiscussion(caseKey) {
  playSound('click');
  const data = caseDiscussionData[caseKey];
  if (!data) return;

  document.getElementById('caseModalTitle').textContent = data.title;
  document.getElementById('caseModalBody').innerHTML = data.content;
  document.getElementById('caseModal').style.display = 'flex';
}

function closeCaseModal() {
  playSound('click');
  document.getElementById('caseModal').style.display = 'none';
}

// ==========================================
// 9. Initial Bootstrap
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderCurrentScenario();
  updateTpovLivePreview();
  renderSlideDots();
});
