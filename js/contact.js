/**
 * INNOVATIVE INSIGHTS (SMC-PRIVATE) LIMITED
 * Contact Page Interactive Script (Vanilla JavaScript ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. CONFIGURATION (CONNECTED FOR AHIRZIA & OFFICIAL JOURNAL DESKS)
  // =========================================================================
  const CONFIG = {
    API_ENDPOINT: 'https://formsubmit.co/ajax/ahirzia@gmail.com',
    PRIMARY_EMAIL: 'ahirzia@gmail.com',
    GENERAL_QUERIES: 'info@innovativejournals.net',
    JOURNAL_EMAILS: {
      tipr: 'tipr@innovativejournals.net',
      lra: 'lra@innovativejournals.net',
      sl: 'sl@innovativejournals.net',
      dss: 'dss@innovativejournals.net',
      pb: 'pb@innovativejournals.net',
      info: 'info@innovativejournals.net'
    },
    COMPANY_NAME: 'Innovative Insights (SMC-Private) Limited',
    COMPANY_ADDRESS: 'Plot No. 665-P, Street 25, Block P, DHA Rahbar, Phase II, Lahore 54792, Punjab, Pakistan'
  };

  // =========================================================================
  // 2. STICKY NAVBAR BEHAVIOR FOR CONTACT PAGE
  // =========================================================================
  const siteHeader = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // =========================================================================
  // 3. MOBILE MENU TOGGLE & BACKDROP
  // =========================================================================
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    if (!mobileNavDrawer || !mobileNavToggle) return;
    mobileNavToggle.classList.add('is-active');
    mobileNavToggle.setAttribute('aria-expanded', 'true');
    mobileNavDrawer.classList.add('is-open');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (!mobileNavDrawer || !mobileNavToggle) return;
    mobileNavToggle.classList.remove('is-active');
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    mobileNavDrawer.classList.remove('is-open');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.contains('is-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavDrawer && mobileNavDrawer.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  // =========================================================================
  // 4. CONTACT FORM VALIDATION & TRANSMISSION ARCHITECTURE
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const statusNoticeCard = document.getElementById('statusNoticeCard');
  const statusSuccessCard = document.getElementById('statusSuccessCard');
  const mailtoActionBtn = document.getElementById('mailtoActionBtn');
  const resetFormBtn = document.getElementById('resetFormBtn');

  // Input fields
  const fields = {
    fullName: {
      input: document.getElementById('fullName'),
      error: document.getElementById('fullNameError'),
      validate: (val) => {
        if (!val.trim()) return 'Full name is required.';
        if (val.trim().length < 2) return 'Full name must be at least 2 characters.';
        return null;
      }
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('emailError'),
      validate: (val) => {
        if (!val.trim()) return 'Email address is required.';
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(val.trim())) return 'Please provide a valid email address.';
        return null;
      }
    },
    subject: {
      input: document.getElementById('subject'),
      error: document.getElementById('subjectError'),
      validate: (val) => {
        if (!val.trim()) return 'Subject line is required.';
        if (val.trim().length < 3) return 'Subject must be at least 3 characters.';
        return null;
      }
    },
    inquiryType: {
      input: document.getElementById('inquiryType'),
      error: document.getElementById('inquiryTypeError'),
      validate: (val) => {
        if (!val || val === '') return 'Please select an inquiry category.';
        return null;
      }
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('messageError'),
      validate: (val) => {
        if (!val.trim()) return 'Message content is required.';
        if (val.trim().length < 15) return 'Message must be at least 15 characters.';
        return null;
      }
    }
  };

  // Real-time input validation on change/blur
  Object.keys(fields).forEach(key => {
    const item = fields[key];
    if (!item.input) return;

    item.input.addEventListener('input', () => {
      clearFieldError(key);
    });

    item.input.addEventListener('blur', () => {
      validateSingleField(key);
    });
  });

  const clearFieldError = (key) => {
    const item = fields[key];
    if (item && item.input && item.error) {
      item.input.classList.remove('is-invalid');
      item.input.removeAttribute('aria-invalid');
      item.error.classList.remove('is-visible');
      item.error.textContent = '';
    }
  };

  const setFieldError = (key, msg) => {
    const item = fields[key];
    if (item && item.input && item.error) {
      item.input.classList.add('is-invalid');
      item.input.setAttribute('aria-invalid', 'true');
      item.error.classList.add('is-visible');
      item.error.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>${msg}</span>
      `;
    }
  };

  const validateSingleField = (key) => {
    const item = fields[key];
    if (!item || !item.input) return true;
    const errorMsg = item.validate(item.input.value);
    if (errorMsg) {
      setFieldError(key, errorMsg);
      return false;
    } else {
      clearFieldError(key);
      return true;
    }
  };

  const validateAllFields = () => {
    let isValid = true;
    let firstInvalidInput = null;

    Object.keys(fields).forEach(key => {
      const valid = validateSingleField(key);
      if (!valid) {
        isValid = false;
        if (!firstInvalidInput && fields[key].input) {
          firstInvalidInput = fields[key].input;
        }
      }
    });

    if (firstInvalidInput) {
      firstInvalidInput.focus();
    }

    return isValid;
  };

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!validateAllFields()) {
        return;
      }

      // Collect data
      const formData = {
        fullName: fields.fullName.input.value.trim(),
        email: fields.email.input.value.trim(),
        subject: fields.subject.input.value.trim(),
        inquiryType: fields.inquiryType.input.value,
        message: fields.message.input.value.trim(),
        timestamp: new Date().toISOString()
      };

      // Set Loading State
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('is-submitting');
        const btnText = submitBtn.querySelector('.btn-text');
        if (btnText) btnText.textContent = 'Verifying & Sending...';
      }

      // Hide previous status cards
      if (statusNoticeCard) statusNoticeCard.classList.remove('is-visible');
      if (statusSuccessCard) statusSuccessCard.classList.remove('is-visible');

      // Resolve Target Editorial Desks
      const targets = resolveTargetEmails(formData.inquiryType);

      // Save inquiry locally for offline reference & audit trail
      try {
        const logs = JSON.parse(localStorage.getItem('innovative_inquiries') || '[]');
        logs.push(formData);
        localStorage.setItem('innovative_inquiries', JSON.stringify(logs));
      } catch {
        // ignore localStorage errors
      }

      // Check if external API endpoint is configured for live transmission
      if (CONFIG.API_ENDPOINT) {
        try {
          const emailPayload = {
            name: formData.fullName,
            email: formData.email,
            _replyto: formData.email,
            _subject: `[Innovative Insights Inquiry] ${formData.subject} (${formData.inquiryType})`,
            inquiry_category: formData.inquiryType,
            subject: formData.subject,
            message: formData.message,
            _cc: targets.cc,
            _template: 'table',
            _captcha: 'false'
          };

          const response = await fetch(CONFIG.API_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(emailPayload)
          });

          if (!response.ok) {
            throw new Error(`Server returned HTTP ${response.status}`);
          }

          // Real success from configured backend
          showSuccessState(formData);
        } catch (err) {
          console.error('Submission error:', err);
          showNoticeState(formData, `Direct transmission could not be completed (${err.message}). You can send directly via your email client:`);
        } finally {
          resetSubmitBtnState();
        }
      } else {
        setTimeout(() => {
          resetSubmitBtnState();
          showNoticeState(formData);
        }, 600);
      }
    });
  }

  const resetSubmitBtnState = () => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('is-submitting');
      const btnText = submitBtn.querySelector('.btn-text');
      if (btnText) btnText.textContent = 'Send Message';
    }
  };

  const resolveTargetEmails = (inquiryType) => {
    let ccEmail = CONFIG.GENERAL_QUERIES;
    if (inquiryType.includes('Intellectual Property') || inquiryType.includes('tipr')) {
      ccEmail = CONFIG.JOURNAL_EMAILS.tipr;
    } else if (inquiryType.includes('Legal Research') || inquiryType.includes('lra')) {
      ccEmail = CONFIG.JOURNAL_EMAILS.lra;
    } else if (inquiryType.includes('Social Lens') || inquiryType.includes('sl')) {
      ccEmail = CONFIG.JOURNAL_EMAILS.sl;
    } else if (inquiryType.includes('Digital Social') || inquiryType.includes('dss')) {
      ccEmail = CONFIG.JOURNAL_EMAILS.dss;
    } else if (inquiryType.includes('Pharmabiologia') || inquiryType.includes('pb')) {
      ccEmail = CONFIG.JOURNAL_EMAILS.pb;
    }
    return {
      to: CONFIG.PRIMARY_EMAIL,
      cc: ccEmail
    };
  };

  const showNoticeState = (formData, customMessage) => {
    if (!statusNoticeCard) return;

    const targets = resolveTargetEmails(formData.inquiryType);

    const noticeDesc = document.getElementById('noticeCardDesc');
    if (noticeDesc) {
      noticeDesc.innerHTML = customMessage || `
        <strong>Message Validated & Routed.</strong><br>
        Destination: <strong>${targets.to}</strong><br>
        Journal Editorial Desk CC: <strong>${targets.cc}</strong><br>
        <span style="font-size:0.84rem;color:#596575;">Click <strong>"Open in Email Client"</strong> below to transmit directly via your mail software.</span>
      `;
    }

    // Configure mailto action button
    if (mailtoActionBtn) {
      const mailtoUrl = `mailto:${encodeURIComponent(targets.to)}?cc=${encodeURIComponent(targets.cc)}&subject=${encodeURIComponent(`[${formData.inquiryType}] ${formData.subject}`)}&body=${encodeURIComponent(
        `Dear Editorial Secretariat / Board at Innovative Insights,\n\n` +
        `Sender Name: ${formData.fullName}\n` +
        `Sender Email: ${formData.email}\n` +
        `Inquiry Category: ${formData.inquiryType}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `--------------------------------------------------\n` +
        `Primary Delivery: ${targets.to}\n` +
        `Editorial Desk CC: ${targets.cc}\n` +
        `Dispatched via Innovative Insights Official Portal: ${new Date().toLocaleString()}`
      )}`;
      mailtoActionBtn.href = mailtoUrl;

      // Auto-trigger email client safely
      setTimeout(() => {
        try {
          window.location.href = mailtoUrl;
        } catch {
          // fallback to manual button click
        }
      }, 400);
    }

    statusNoticeCard.classList.add('is-visible');
    statusNoticeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const showSuccessState = (formData) => {
    if (!statusSuccessCard) return;
    const targets = resolveTargetEmails(formData.inquiryType);
    const desc = statusSuccessCard.querySelector('.status-badge-desc');
    if (desc) {
      desc.innerHTML = `
        Thank you, <strong>${formData.fullName}</strong>. Your message has been sent directly to <strong>${CONFIG.PRIMARY_EMAIL}</strong>.<br>
        A routing copy has been forwarded to the editorial desk (<strong>${targets.cc}</strong>). Our editorial secretariat will reply to <strong>${formData.email}</strong> shortly.
      `;
    }
    statusSuccessCard.classList.add('is-visible');
    statusSuccessCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    if (contactForm) contactForm.reset();
  };

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      if (contactForm) contactForm.reset();
      Object.keys(fields).forEach(key => clearFieldError(key));
      if (statusNoticeCard) statusNoticeCard.classList.remove('is-visible');
      if (statusSuccessCard) statusSuccessCard.classList.remove('is-visible');
    });
  }

  // =========================================================================
  // 5. SCROLL REVEALS
  // =========================================================================
  const reveals = document.querySelectorAll('.reveal-fade-up');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    reveals.forEach(r => revealObserver.observe(r));
  } else {
    reveals.forEach(r => r.classList.add('is-revealed'));
  }
});

