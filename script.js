/**
 * MANOJ KUMAR T C - PORTFOLIO INTERACTION ENGINE
 * Senior Developer Quality JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Update current year in footer
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     1. HERO TYPING ANIMATION
     ========================================================================== */
  const typingElement = document.getElementById('typing-text');
  const phrases = [
    'Multimodal AI Systems',
    'Full-Stack Web Applications',
    'Google Gemini & LLM Pipelines',
    'Robust Python & PHP Platforms',
    'Algorithmic Solutions (DSA)'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    if (!typingElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of phrase
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  /* ==========================================================================
     2. NAVBAR SCROLL SPY & STICKY HEADER
     ========================================================================== */
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header styling on scroll
    if (scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Scroll spy
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle & outside-click handler
  function closeMobileNav() {
    navMenu?.classList.remove('open');
    mobileToggle?.classList.remove('active');
    document.body.classList.remove('nav-locked');
  }

  function toggleMobileNav() {
    const isOpen = navMenu?.classList.toggle('open');
    mobileToggle?.classList.toggle('active', isOpen);
    if (isOpen) {
      document.body.classList.add('nav-locked');
    } else {
      document.body.classList.remove('nav-locked');
    }
  }

  mobileToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileNav();
  });

  // Close mobile menu when clicking nav links
  navLinks.forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close when tapping outside the mobile nav
  document.addEventListener('click', (e) => {
    if (navMenu?.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle?.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Mobile Resume link inside nav menu
  const mobileResumeBtn = document.getElementById('mobile-resume-btn');
  mobileResumeBtn?.addEventListener('click', () => {
    closeMobileNav();
  });

  /* ==========================================================================
     3. MEDIDECODE INTERACTIVE AI LAB SIMULATOR
     ========================================================================== */
  const presetData = {
    rx1: {
      drug: 'Amoxicillin Trihydrate',
      dosage: '500 mg Capsule',
      freq: 'Every 8 hours (3 times daily) with water',
      duration: '7 to 10 days (Complete entire course)',
      treatment: 'Bacterial respiratory / throat infection',
      warning: 'Mild nausea or digestive upset may occur. Take with or after food. If allergic skin rash, hives, or swelling appears, cease medication immediately and contact medical support.',
      translations: {
        en: '"Take one capsule three times a day after meals. Drink plenty of water throughout the day. Do not discontinue until prescribed course is finished."',
        kn: '"ಊಟದ ನಂತರ ದಿನಕ್ಕೆ ಮೂರು ಬಾರಿ ಒಂದು ಕ್ಯಾಪ್ಸುಲ್ ತೆಗೆದುಕೊಳ್ಳಿ. ದಿನವಿಡೀ ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ. ವೈದ್ಯರು ಸೂಚಿಸಿದ ಕೋರ್ಸ್ ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೆ ನಿಲ್ಲಿಸಬೇಡಿ."',
        hi: '"भोजन के बाद दिन में तीन बार एक कैप्सूल लें। दिन भर भरपूर पानी पिएं। जब तक डॉक्टर द्वारा निर्धारित कोर्स पूरा न हो जाए, दवा बंद न करें।"'
      },
      confidence: '99.4%'
    },
    rx2: {
      drug: 'Metformin Hydrochloride',
      dosage: '850 mg Extended Release',
      freq: 'Twice daily (Morning & Evening) with meals',
      duration: 'Ongoing maintenance / Monthly physician review',
      treatment: 'Type 2 Diabetes Mellitus (Glycemic Control)',
      warning: 'Take with food to minimize gastrointestinal discomfort. Avoid excessive alcohol consumption. Regular blood glucose monitoring recommended.',
      translations: {
        en: '"Take one tablet with your morning meal and one tablet with dinner. Maintain consistent meal schedules and hydrate well."',
        kn: '"ಬೆಳಗಿನ ಉಪಾಹಾರದೊಂದಿಗೆ ಒಂದು ಮಾತ್ರೆ ಮತ್ತು ರಾತ್ರಿಯ ಊಟದೊಂದಿಗೆ ಒಂದು ಮಾತ್ರೆ ತೆಗೆದುಕೊಳ್ಳಿ. ನಿಯಮಿತ ಆಹಾರ ಕ್ರಮವನ್ನು ಅನುಸರಿಸಿ."',
        hi: '"सुबह के नाश्ते के साथ एक गोली और रात के खाने के साथ एक गोली लें। नियमित भोजन की दिनचर्या बनाए रखें और पानी का सेवन करें।"'
      },
      confidence: '98.8%'
    },
    rx3: {
      drug: 'Paracetamol + Cetirizine Dihydrochloride',
      dosage: '650 mg (PCM) + 10 mg (Cetirizine)',
      freq: 'Once daily at bedtime or SOS for fever/allergy',
      duration: '3 to 5 days as directed by physician',
      treatment: 'Acute fever, allergic rhinitis & seasonal cold symptoms',
      warning: 'Cetirizine may induce mild drowsiness. Do not drive or operate heavy machinery after consumption. Do not exceed prescribed daily paracetamol ceiling (4000mg).',
      translations: {
        en: '"Take one tablet before sleep or when fever rises above 100°F. Drowsiness may occur. Rest adequately."',
        kn: '"ರಾತ್ರಿ ಮಲಗುವ ಮುನ್ನ ಅಥವಾ ಜ್ವರ ಬಂದಾಗ ಒಂದು ಮಾತ್ರೆ ತೆಗೆದುಕೊಳ್ಳಿ. ನಿದ್ದೆ ಬರಬಹುದು, ಆದ್ದರಿಂದ ಚಾಲನೆ ಮಾಡಬೇಡಿ."',
        hi: '"सोने से पहले या बुखार होने पर एक गोली लें। इससे थोड़ी सुस्ती या नींद आ सकती है। पर्याप्त आराम करें।"'
      },
      confidence: '99.1%'
    }
  };

  let activePresetKey = 'rx1';
  let activeLang = 'en';

  const presetButtons = document.querySelectorAll('.preset-btn');
  const simRunBtn = document.getElementById('sim-run-btn');
  const simCustomInput = document.getElementById('sim-custom-input');
  const simStatus = document.getElementById('sim-status');
  const langPills = document.querySelectorAll('.lang-pill');

  const resDrug = document.getElementById('res-drug');
  const resDosage = document.getElementById('res-dosage');
  const resFreq = document.getElementById('res-freq');
  const resDuration = document.getElementById('res-duration');
  const resTreatment = document.getElementById('res-treatment');
  const resWarning = document.getElementById('res-warning');
  const resMultilingual = document.getElementById('res-multilingual');

  function triggerScanEffect() {
    const scanLine = document.getElementById('sim-scan-line');
    if (scanLine) {
      scanLine.classList.remove('scanning');
      void scanLine.offsetWidth;
      scanLine.classList.add('scanning');
    }
  }

  function generateAiQueryResponse(drugKey, query) {
    const q = query.toLowerCase();
    if (q.includes('food') || q.includes('meal') || q.includes('stomach') || q.includes('milk')) {
      if (drugKey === 'rx1') {
        return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:var(--accent-emerald);">Gemini Clinical Intelligence:</span> <strong>Amoxicillin 500mg</strong> can be consumed with or without food. Taking it at the start of a meal or with a glass of milk significantly mitigates gastrointestinal discomfort.`;
      } else if (drugKey === 'rx2') {
        return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:var(--accent-emerald);">Gemini Clinical Intelligence:</span> <strong>Metformin 850mg ER</strong> must ALWAYS be taken with meals (breakfast & dinner). Ingesting with food slows stomach emptying and minimizes adverse digestive effects like nausea.`;
      } else {
        return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:var(--accent-emerald);">Gemini Clinical Intelligence:</span> <strong>Paracetamol + Cetirizine</strong> is best taken after a light meal with a full glass of water. Avoid heavy or high-fat meals directly prior to bedtime.`;
      }
    }

    if (q.includes('miss') || q.includes('forgot') || q.includes('late')) {
      return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:var(--accent-cyan);">Gemini Dosage Advisory:</span> Take the missed dose as soon as you remember. However, if it is close to your next scheduled dose, skip the forgotten dose and adhere to your standard timetable. <strong>Never take a double dose</strong> to make up for missed medication.`;
    }

    if (q.includes('side') || q.includes('effect') || q.includes('danger') || q.includes('warning')) {
      if (drugKey === 'rx1') {
        return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:#f59e0b;">Safety Alert:</span> Watch for allergic hypersensitivity (urticaria, rash, facial swelling). If breathing becomes labored, seek emergency medical care immediately.`;
      } else if (drugKey === 'rx2') {
        return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:#f59e0b;">Safety Alert:</span> Rare but critical: Lactic acidosis risk. Report unusual muscle pain, severe drowsiness, or shallow breathing to your physician immediately.`;
      } else {
        return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:#f59e0b;">Safety Alert:</span> Cetirizine can cause marked drowsiness. Do not drive or operate machinery. Do not exceed the 4,000 mg daily ceiling for Paracetamol from all sources.`;
      }
    }

    if (q.includes('alcohol') || q.includes('drink') || q.includes('beer') || q.includes('coffee') || q.includes('caffeine')) {
      if (drugKey === 'rx2') {
        return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:#ef4444;">Contraindication Warning:</span> Alcohol consumption while taking Metformin significantly elevates the risk of severe hypoglycemia and lactic acidosis. Refrain from alcohol during treatment.`;
      } else if (drugKey === 'rx3') {
        return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:#ef4444;">Contraindication Warning:</span> Alcohol intensifies the central nervous system sedative effects of Cetirizine and compounds liver load with Paracetamol. Concurrent intake is strictly not advised.`;
      } else {
        return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:#f59e0b;">Interaction Note:</span> Alcohol may impede your body's immune recovery from bacterial infection and aggravate mild nausea. Moderate hydration with water is recommended.`;
      }
    }

    return `<strong>Query Analysis:</strong> "${query}"<br><span style="color:var(--accent-emerald);">Gemini Multimodal Reasoning:</span> Verified against active pharmacology database. Safe when taken strictly as prescribed. Always consult your attending medical professional for regimen adjustments.`;
  }

  function renderSimulatorData(key, lang = 'en', customQuery = '') {
    const data = presetData[key];
    if (!data) return;

    triggerScanEffect();

    if (resDrug) resDrug.textContent = data.drug;
    if (resDosage) resDosage.textContent = data.dosage;
    if (resFreq) resFreq.textContent = data.freq;
    if (resDuration) resDuration.textContent = data.duration;
    if (resTreatment) resTreatment.textContent = data.treatment;

    if (customQuery && customQuery.trim()) {
      if (resWarning) {
        resWarning.innerHTML = generateAiQueryResponse(key, customQuery.trim());
      }
    } else {
      if (resWarning) resWarning.textContent = data.warning;
    }

    if (resMultilingual) {
      resMultilingual.textContent = data.translations[lang] || data.translations.en;
    }

    if (simStatus) {
      simStatus.innerHTML = `● PIPELINE_ONLINE • OCR_CONFIDENCE: ${data.confidence} • GEMINI_1.5_PRO`;
    }
  }

  // Handle Preset Button clicks
  presetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      presetButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activePresetKey = btn.dataset.preset;

      if (simStatus) simStatus.innerHTML = `<span style="color:var(--accent-cyan);">⚙ Processing Multimodal Vision Embedding...</span>`;
      setTimeout(() => {
        renderSimulatorData(activePresetKey, activeLang, simCustomInput?.value || '');
      }, 200);
    });
  });

  // Handle Language Switches
  langPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      langPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeLang = pill.dataset.lang;
      renderSimulatorData(activePresetKey, activeLang, simCustomInput?.value || '');
    });
  });

  // Handle Quick Query Prompt Pills
  const queryPills = document.querySelectorAll('.query-pill');
  queryPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const promptText = pill.dataset.query;
      if (simCustomInput) simCustomInput.value = promptText;
      triggerScanEffect();
      if (simStatus) {
        simStatus.innerHTML = `<span style="color:var(--accent-cyan);">⚡ Querying Gemini 1.5 Pro Clinical Context...</span>`;
      }
      setTimeout(() => {
        renderSimulatorData(activePresetKey, activeLang, promptText);
        showToast('Clinical reasoning analysis updated!');
      }, 250);
    });
  });

  // Handle Run Simulation Button
  simRunBtn?.addEventListener('click', () => {
    const userQuery = simCustomInput?.value || '';

    if (simStatus) {
      simStatus.innerHTML = `<span style="color:var(--accent-indigo);">⚡ Invoking Google Gemini Multimodal Engine...</span>`;
    }

    setTimeout(() => {
      renderSimulatorData(activePresetKey, activeLang, userQuery);
      showToast('MediDecode Multimodal Pipeline executed successfully!');
    }, 300);
  });

  /* ==========================================================================
     4. PROJECTS FILTERING
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.dataset.filter;

      projectCards.forEach((card) => {
        const category = card.dataset.category;
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'grid';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* ==========================================================================
     5. PROJECT ARCHITECTURE DEEP-DIVE MODAL
     ========================================================================== */
  const projectModal = document.getElementById('project-detail-modal');
  const closeProjectModalBtn = document.getElementById('close-project-modal-btn');
  const projModalTitle = document.getElementById('proj-modal-title');
  const projModalContent = document.getElementById('proj-modal-content');
  const viewDetailBtns = document.querySelectorAll('.view-details-btn');

  const projectDetailsMap = {
    medidecode: {
      title: 'MediDecode — Multimodal Prescription Intelligence Architecture',
      html: `
        <div style="font-size:0.92rem; line-height: 1.7; color: var(--text-secondary);">
          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">1. Multimodal Vision Pipeline (Google Gemini 1.5 Pro)</h4>
            <p>Processes complex, handwritten prescription camera captures and multi-page PDF medical reports via Google Gemini API's multimodal vision tokens. Employs <code>PyPDF</code> and <code>Pillow (PIL)</code> image preprocessing for high-contrast OCR clarity before ingestion.</p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">2. Clinical Prompt Engineering & Dosage Parsing</h4>
            <p>Utilizes structured few-shot system prompts instructing the LLM to output sanitized JSON containing active chemical compounds, exact dosage strength, administration intervals, and contraindication flags with high certainty thresholds.</p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">3. Multilingual Translation & Patient Accessibility</h4>
            <p>Breaks down complex medical jargon into clear patient-friendly instructions translated into regional Indian languages (Kannada & Hindi) alongside standard English, expanding healthcare accessibility for rural and non-English-speaking users.</p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">4. Persistent SQLite Audit History & Medical Chatbot</h4>
            <p>Stores historic prescription analyses securely in a local <strong>SQLite</strong> database with session authentication. Integrates a conversational RAG chatbot allowing patients to ask contextual follow-up questions regarding side effects and missed dosages.</p>
          </div>
        </div>
      `
    },
    shiftcart: {
      title: 'Shift Cart — System Architecture & Data Pipeline',
      html: `
        <div style="font-size:0.92rem; line-height: 1.7; color: var(--text-secondary);">
          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">1. Relational Database & Entity Relationship</h4>
            <p>Designed a normalized relational schema in <strong>MySQL</strong> supporting tables for <code>users</code>, <code>roles</code>, <code>categories</code>, <code>products</code>, <code>orders</code>, <code>order_items</code>, and <code>cart_sessions</code>. Implemented foreign key constraints and transactional integrity for stock deduction upon checkout.</p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">2. Administrative Analytics Dashboard</h4>
            <p>Engineered an admin panel allowing store managers to review sales trajectories, stock levels, and order fulfillment states. Uses aggregated SQL queries (<code>SUM()</code>, <code>COUNT()</code>, <code>GROUP BY date</code>) to generate real-time metrics without exposing database shells to non-technical users.</p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">3. Security & Session Integrity</h4>
            <p>Protected user sessions using server-side PHP session management, parameterized queries against SQL injection, and cross-site scripting (XSS) input sanitization for all search queries and user reviews.</p>
          </div>
        </div>
      `
    },
    hirehive: {
      title: 'HireHive — Recruitment Workflow Engine Architecture',
      html: `
        <div style="font-size:0.92rem; line-height: 1.7; color: var(--text-secondary);">
          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">1. FastAPI & Dynamic Google Sheets Engine</h4>
            <p>Connects to Google Sheets via <code>gspread</code> with service account OAuth2. Features a <strong>Dynamic Column Finder</strong> that identifies sheet fields by keyword headers rather than fixed indices, coupled with a 4-second short-lived in-memory cache to stay well within Google API quotas while ensuring live data freshness.</p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">2. 10-Stage Candidate Lifecycle State Machine</h4>
            <p>Normalizes unconstrained spreadsheet status entries into a predictable, robust 10-stage lifecycle (<code>applied</code> ➔ <code>shortlisted</code> ➔ <code>interview</code> ➔ <code>accepted</code> ➔ <code>hired</code> ➔ <code>offer</code> ➔ <code>ongoing</code> ➔ <code>completed</code>). Supports single, multi-select, and threshold-based bulk shortlisting updating cells in single batch API writes.</p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">3. Automated Document Generation & Drive Sync</h4>
            <p>Automates offer letter generation from Word templates using <code>python-docx</code> placeholder substitution (<code>{Name}</code>, <code>{Role}</code>, <code>{Start_Date}</code>). Converts documents to PDF with <code>ReportLab</code>/<code>docx2pdf</code>, stores them safely in designated Google Drive folders, and dispatches them with custom MIME email templates via TLS-secured SMTP.</p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem;">
            <h4 style="color:#ffffff; margin-bottom: 0.5rem;">4. Tamper-Proof QR Code Verification & Audit Logging</h4>
            <p>Generates cryptographic certificate IDs formatted as <code>CERT-YYYYMMDD-IDENTIFIER-UUID</code> and generates Level-Q error-correction QR codes for instant physical and digital authenticity verification. Maintains an immutable circular 100-event JSON activity log for complete operational auditing.</p>
          </div>
        </div>
      `
    }
  };

  viewDetailBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const details = projectDetailsMap[target];
      if (details && projectModal && projModalTitle && projModalContent) {
        projModalTitle.textContent = details.title;
        projModalContent.innerHTML = details.html;
        projectModal.classList.add('open');
      }
    });
  });

  closeProjectModalBtn?.addEventListener('click', () => {
    projectModal?.classList.remove('open');
  });

  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('open');
    }
  });

  /* ==========================================================================
     6. MODAL ESCAPE KEY LISTENER
     ========================================================================== */
  // Escape key closes open project modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      projectModal?.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* ==========================================================================
     7. CLIPBOARD COPY WITH TOAST NOTIFICATION
     ========================================================================== */
  const copyButtons = document.querySelectorAll('.copy-btn');

  function copyTextToClipboard(text, btn) {
    function onCopied() {
      showToast(`Copied "${text}" to clipboard!`);
      const originalText = btn.innerHTML;
      btn.innerHTML = `<span style="color:var(--accent-emerald);">✓ Copied</span>`;
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2000);
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onCopied).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }

    function fallbackCopy(str) {
      const textArea = document.createElement("textarea");
      textArea.value = str;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        onCopied();
      } catch (err) {
        showToast(`Selected: ${str}`);
      }
      textArea.remove();
    }
  }

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.dataset.copy;
      if (!textToCopy) return;
      copyTextToClipboard(textToCopy, btn);
    });
  });

  /* ==========================================================================
     8. CONTACT FORM SUBMISSION & MULTI-CHANNEL DISPATCH
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const contactStatusBox = document.getElementById('contact-status-box');
  const submitBtn = document.getElementById('contact-submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnOpenGmail = document.getElementById('btn-open-gmail');
  const btnOpenWhatsapp = document.getElementById('btn-open-whatsapp');

  function getFormData() {
    return {
      name: document.getElementById('contact-name')?.value.trim() || '',
      email: document.getElementById('contact-email')?.value.trim() || '',
      subject: document.getElementById('contact-subject')?.value.trim() || '',
      message: document.getElementById('contact-message')?.value.trim() || ''
    };
  }

  function createGmailWebUrl(data) {
    const sub = encodeURIComponent(data.subject || 'Software Engineering Internship / Discussion');
    const msg = data.message || 'Hi Manoj, I reviewed your MediDecode and HireHive projects on your portfolio and would like to discuss an engineering opportunity with you.';
    const bodyText = encodeURIComponent(
      `Hello Manoj,\n\n${msg}\n\nSender Name: ${data.name || 'Visitor'}\nSender Email: ${data.email || 'N/A'}\n\nSent from Portfolio Website`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=mmanoj121m@gmail.com&su=${sub}&body=${bodyText}`;
  }

  function createWhatsappUrl(data) {
    const msg = data.message || 'Hi Manoj! I reviewed your MediDecode and HireHive projects and would like to connect with you regarding an opportunity.';
    const text = encodeURIComponent(
      `Hello Manoj! I reviewed your portfolio.\nName: ${data.name || 'Visitor'}\nEmail: ${data.email || 'N/A'}\nOpportunity: ${data.subject || 'Software Engineering Role'}\n\nMessage: ${msg}`
    );
    return `https://wa.me/916363620034?text=${text}`;
  }

  // Handle Direct Gmail Web Compose Button
  btnOpenGmail?.addEventListener('click', () => {
    const data = getFormData();
    const gmailUrl = createGmailWebUrl(data);
    try {
      const win = window.open(gmailUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = gmailUrl;
      }
    } catch (e) {
      window.location.href = gmailUrl;
    }
    showToast('Opening Gmail Web composer...');
  });

  // Handle WhatsApp Direct Send Button
  btnOpenWhatsapp?.addEventListener('click', () => {
    const data = getFormData();
    const waUrl = createWhatsappUrl(data);
    try {
      const win = window.open(waUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = waUrl;
      }
    } catch (e) {
      window.location.href = waUrl;
    }
    showToast('Opening WhatsApp chat with Manoj...');
  });

  // Handle Form Submission (Direct Email API + Fallback)
  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = getFormData();

    if (!data.name || !data.email || !data.message) {
      if (contactStatusBox) {
        contactStatusBox.className = 'form-status-box error';
        contactStatusBox.innerHTML = '⚠️ Please fill out all required fields before sending.';
      }
      return;
    }

    // Show loading state
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.innerHTML = `<span class="btn-spinner"></span> Sending message...`;

    try {
      // Check if running on http/https
      const isHttp = window.location.protocol.startsWith('http');

      if (!isHttp) {
        // file:/// protocol cannot make cross-origin fetch to formsubmit
        throw new Error('Local file protocol');
      }

      const response = await fetch('https://formsubmit.co/ajax/mmanoj121m@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          _subject: `[Portfolio Inquiry] ${data.subject} from ${data.name}`,
          message: data.message
        })
      });

      const result = await response.json();

      if (response.ok && result.success !== 'false') {
        if (contactStatusBox) {
          contactStatusBox.className = 'form-status-box success';
          contactStatusBox.innerHTML = `
            <strong>✅ Message Delivered Successfully!</strong><br>
            Thank you, <strong>${data.name}</strong>! Your inquiry has been sent directly to Manoj's inbox (<code>mmanoj121m@gmail.com</code>). He will get in touch with you shortly at <code>${data.email}</code>.
          `;
        }
        showToast('Message delivered to Manoj!');
        contactForm.reset();
      } else {
        throw new Error(result.message || 'Submission unverified');
      }

    } catch (err) {
      // Fallback: Seamless multi-channel dispatch
      const gmailUrl = createGmailWebUrl(data);
      const waUrl = createWhatsappUrl(data);
      const mailtoUrl = `mailto:mmanoj121m@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message)}`;

      if (contactStatusBox) {
        contactStatusBox.className = 'form-status-box notice';
        contactStatusBox.innerHTML = `
          <strong>✉ Choose your preferred way to dispatch:</strong>
          <p style="margin: 0.4rem 0 0.6rem 0; font-size: 0.85rem; color: #cbd5e1;">
            To ensure zero message loss, select how you'd like to transmit your message:
          </p>
          <div class="quick-dispatch-pills">
            <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" class="dispatch-pill-btn gmail">
              ✉ Send via Gmail Web
            </a>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="dispatch-pill-btn whatsapp">
              💬 Send on WhatsApp
            </a>
            <a href="${mailtoUrl}" class="dispatch-pill-btn">
              📥 Open Mail App
            </a>
          </div>
        `;
      }

      // Automatically launch Gmail Web compose so the user gets an instant seamless action!
      window.open(gmailUrl, '_blank');
      showToast('Opening Gmail Web composer with your message...');
    } finally {
      // Restore button
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'Send Message to Manoj';
    }
  });

  /* ==========================================================================
     9. TOAST NOTIFICATION HELPER
     ========================================================================== */
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="color:var(--accent-emerald);">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3500);
  }
});
