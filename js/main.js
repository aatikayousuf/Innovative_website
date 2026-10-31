/**
 * INNOVATIVE INSIGHTS (SMC-PRIVATE) LIMITED
 * Main Interactive Script (Vanilla JavaScript ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. DATA: THE 5 OFFICIAL JOURNALS
  // =========================================================================
  const JOURNALS_DATA = [
    {
      id: 'tipr',
      slug: 'trends-in-intellectual-property-research',
      title: 'Trends in Intellectual Property Research',
      shortTitle: 'Trends in IP Research',
      abbreviation: 'Trends Intellect. Prop. Res.',
      coverImage: 'assets/images/journals/trends-intellectual-property.png',
      issnOnline: '3007-8539',
      issnPrint: '3007-8520',
      frequency: 'Quarterly — March, June, September, December',
      editorInChief: 'Dr. Sylwia Szybowska',
      volumeInfo: 'Volume 4, Issue 4 | December, 2026',
      doiPrefix: '10.69971',
      discipline: 'Law & Intellectual Property',
      url: 'https://iprtrends.com/TIPR',
      description: 'Publishes research papers and review papers related to all aspects of intellectual property rights, including but not limited to patents, copyrights, geographical indications, trademarks, trade secrets, industrial design, layout design of integrated circuit, unfair competition, and antitrust.',
      peerReviewType: 'Refereed journal, double-blind peer-reviewed by at least two independent experts',
      openAccessModel: 'Diamond Open Access (No author charges, no reader paywalls)',
      license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
      highlights: [
        'Patents, Copyrights & Trademarks',
        'Geographical Indications & Trade Secrets',
        'Industrial & Integrated Circuit Layout Design',
        'Unfair Competition & Antitrust Law'
      ],
      scopePoints: [
        'Patent law, biopiracy, and technological innovation governance',
        'Copyright in the digital era, software licensing, and fair dealing',
        'Trademarks, brand protection, and geographical indications',
        'Trade secret protection in international commerce and technology transfer',
        'Antitrust, competition policy, and monopolies in intellectual property'
      ]
    },
    {
      id: 'lra',
      slug: 'legal-research-and-analysis',
      title: 'Legal Research & Analysis',
      shortTitle: 'Legal Research & Analysis',
      abbreviation: 'LRA',
      coverImage: 'assets/images/journals/legal-research-analysis.jpg',
      issnOnline: '3007-6455',
      issnPrint: '3007-6447',
      frequency: 'Quarterly — March, June, September, December',
      editorInChief: 'Prof. Dr. Cláudio Finkelstein',
      volumeInfo: 'Volume 4, Issue 3 | September, 2026',
      doiPrefix: '10.69971',
      discipline: 'Law & Intellectual Property',
      url: 'https://legalresearchanalysis.com/LRA',
      description: 'Publishes research papers and review papers that advance understanding of legal studies, law, legal institutions, and legal reform. It particularly values work that connects legal analysis to its social, economic, and policy contexts.',
      peerReviewType: 'Double-blind peer-reviewed by independent legal scholars',
      openAccessModel: 'Diamond Open Access (Free to read, free to publish)',
      license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
      highlights: [
        'Constitutional, Criminal & Corporate Law',
        'International Law & Human Rights',
        'Environmental, Energy & Labor Law',
        'Comparative & Socio-Legal Studies'
      ],
      scopePoints: [
        'Constitutional and administrative law and democratic institutions',
        'Criminal law, criminology, and systemic criminal justice reform',
        'Civil, commercial, and multinational corporate jurisprudence',
        'International public law, human rights, and humanitarian law',
        'Environmental regulation, climate justice, and energy transitions',
        'Legal philosophy, law and economics, and feminist legal theory'
      ]
    },
    {
      id: 'sl',
      slug: 'social-lens',
      title: 'Social Lens',
      shortTitle: 'Social Lens',
      abbreviation: 'Soc. Lens',
      coverImage: 'assets/images/journals/social-lens.jpg',
      issnOnline: '3078-3941',
      issnPrint: '3078-3933',
      frequency: 'Semi-annual — June and December',
      editorInChief: 'Editorial Board Secretariat',
      volumeInfo: 'Vol. 3, No. 2, 2026',
      discipline: 'Social Sciences & Humanities',
      url: 'https://socialsciencesresearch.com/SL',
      description: 'A multi- and interdisciplinary, peer-reviewed academic journal published by Innovative Insights (SMC-Private) Limited, Pakistan, dedicated to advancing knowledge and stimulating critical debate across the full range of the social sciences, arts, and humanities.',
      peerReviewType: 'Double-blind peer review by international interdisciplinary scholars',
      openAccessModel: 'Diamond Open Access (No subscriptions, zero APC)',
      license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
      highlights: [
        'Interdisciplinary Social Sciences & Humanities',
        'Rigorous Theoretical & Empirical Frameworks',
        'Methodological Pluralism (Quant, Qual & Mixed)',
        'Institutional & Cultural Critical Analysis'
      ],
      scopePoints: [
        'Sociology, anthropology, and contemporary social stratification',
        'Political science, governance, and public policy in developing nations',
        'Arts, history, literature, and cultural heritage studies',
        'Methodological pluralism combining empirical and interpretive insights',
        'Critical perspectives on institutional reform and civic life'
      ]
    },
    {
      id: 'dss',
      slug: 'digital-social-sciences',
      title: 'Digital Social Sciences',
      shortTitle: 'Digital Social Sciences',
      abbreviation: 'Digit. Soc. Sci.',
      coverImage: 'assets/images/journals/digital-social-sciences.jpg',
      issnOnline: '3078-4980',
      issnPrint: '3078-4972',
      frequency: 'Semi-annual — June and December',
      volumeInfo: 'Volume 3, Issue 2 | December, 2026',
      doiPrefix: '10.69971',
      discipline: 'Digital & Technology',
      url: 'https://digitalsocialsciences.com/DSS',
      description: 'An international, open-access, peer-reviewed journal serving as an interdisciplinary forum for examining the complex interaction between digital technology and society across arts, humanities, sociology, politics, economics, law, and communication.',
      peerReviewType: 'Double-blind peer review by computational and social science experts',
      openAccessModel: 'Diamond Open Access (Fully funded, no fees for authors or readers)',
      license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
      highlights: [
        'Algorithmic Governance & AI Ethics',
        'Digital Inequalities & Platform Labor',
        'Social Media Dynamics & Democracy',
        'Data Sovereignty & Online Communities'
      ],
      scopePoints: [
        'Algorithmic governance, automated decisions, and societal accountability',
        'Digital divide, connectivity disparity, and global techno-inequalities',
        'Disinformation, algorithmic feed bubbles, and democratic discourse',
        'Platform capitalism, gig economy labor rights, and data surveillance',
        'Emerging digital methodologies for big data and computational humanities'
      ]
    },
    {
      id: 'pharmabiologia',
      slug: 'pharmabiologia',
      title: 'Pharmabiologia',
      shortTitle: 'Pharmabiologia',
      abbreviation: 'Pharmabiologia',
      coverImage: 'assets/images/journals/pharmabiologia.jpg',
      frequency: 'Annually — December',
      editorInChief: 'Prof. Dr. Hamid Mukhtar',
      volumeInfo: 'Volume 1, Issue 1 | December 2025',
      discipline: 'Life & Pharmaceutical Sciences',
      url: 'https://pharmabiologia.com/',
      description: 'An international, peer-reviewed journal publishing original research articles, review papers, and short communications in the interdisciplinary fields of pharmaceutical sciences, biology, and related disciplines.',
      peerReviewType: 'Rigorous double-blind peer review by biomedical and life science reviewers',
      openAccessModel: 'Diamond Open Access (Unrestricted global access, zero author charge)',
      license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
      highlights: [
        'Pharmaceutical Chemistry & Drug Formulation',
        'Molecular Biology & Applied Biotechnology',
        'Pharmacology, Toxicology & Natural Products',
        'Interdisciplinary Life Sciences & Clinical Therapeutics'
      ],
      scopePoints: [
        'Drug discovery, synthesis, molecular docking, and formulation science',
        'Microbiology, molecular genetics, and industrial biotechnology',
        'Pharmacological mechanisms, medicinal plants, and ethnopharmacology',
        'Toxicological evaluations, biosafety, and therapeutic biomarkers',
        'Interdisciplinary biomedical research and translational biotechnology'
      ]
    }
  ];

  // =========================================================================
  // 2. STICKY NAVBAR BEHAVIOR
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
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavDrawer && mobileNavDrawer.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  // =========================================================================
  // 4. SMOOTH SCROLL & ACTIVE SECTION OBSERVER
  // =========================================================================
  const navLinks = document.querySelectorAll('.nav-link[href^="#"], .mobile-nav-link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      }
    });
  };

  if ('IntersectionObserver' in window && sections.length > 0) {
    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // =========================================================================
  // 5. JOURNAL PORTFOLIO (SHOWCASE, FILTERING & GRID)
  // =========================================================================
  let currentCategory = 'All';
  let filteredJournals = [...JOURNALS_DATA];
  let activeIndex = 0;

  // DOM Elements
  const showcaseView = document.getElementById('journalShowcaseView');
  const gridView = document.getElementById('journalsGridView');
  const viewShowcaseBtn = document.getElementById('viewShowcaseBtn');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const categoryPills = document.querySelectorAll('.category-pill');
  const prevBtn = document.getElementById('prevJournalBtn');
  const nextBtn = document.getElementById('nextJournalBtn');
  const paginationDotsContainer = document.getElementById('showcasePaginationDots');

  // Showcase detail fields
  const showcaseCover = document.getElementById('showcaseCoverImg');
  const showcaseDiscipline = document.getElementById('showcaseDiscipline');
  const showcaseFrequency = document.getElementById('showcaseFrequency');
  const showcaseTitle = document.getElementById('showcaseTitle');
  const showcaseIssnRow = document.getElementById('showcaseIssnRow');
  const showcaseDesc = document.getElementById('showcaseDesc');
  const showcaseChips = document.getElementById('showcaseChips');
  const showcaseExternalLink = document.getElementById('showcaseExternalLink');
  const showcaseModalBtn = document.getElementById('showcaseModalBtn');
  const showcaseCoverWrapper = document.getElementById('showcaseCoverWrapper');

  const updatePaginationDots = () => {
    if (!paginationDotsContainer) return;
    paginationDotsContainer.innerHTML = '';
    filteredJournals.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `showcase-dot ${idx === activeIndex ? 'is-active' : ''}`;
      dot.setAttribute('aria-label', `Go to journal ${idx + 1}`);
      dot.addEventListener('click', () => {
        activeIndex = idx;
        renderActiveShowcase();
      });
      paginationDotsContainer.appendChild(dot);
    });
  };

  const renderActiveShowcase = () => {
    const journal = filteredJournals[activeIndex] || filteredJournals[0];
    if (!journal || !showcaseView) return;

    if (showcaseCover) {
      showcaseCover.src = journal.coverImage;
      showcaseCover.alt = `${journal.title} Official Cover`;
    }
    if (showcaseDiscipline) showcaseDiscipline.textContent = journal.discipline;
    if (showcaseFrequency) showcaseFrequency.textContent = journal.frequency;
    if (showcaseTitle) showcaseTitle.textContent = journal.title;
    if (showcaseDesc) showcaseDesc.textContent = journal.description;

    // ISSN row (Only display if supplied)
    if (showcaseIssnRow) {
      if (journal.issnOnline && journal.issnPrint) {
        showcaseIssnRow.innerHTML = `
          <div class="journal-issn-item"><strong>ISSN Online:</strong> ${journal.issnOnline}</div>
          <div class="journal-issn-item"><strong>ISSN Print:</strong> ${journal.issnPrint}</div>
        `;
        showcaseIssnRow.style.display = 'flex';
      } else {
        showcaseIssnRow.style.display = 'none';
      }
    }

    // Highlights chips
    if (showcaseChips) {
      showcaseChips.innerHTML = journal.highlights
        .map(h => `<span class="journal-chip">${h}</span>`)
        .join('');
    }

    // External link
    if (showcaseExternalLink) {
      showcaseExternalLink.href = journal.url;
    }

    // Cover click or modal button triggers modal
    if (showcaseModalBtn) {
      showcaseModalBtn.onclick = () => openJournalModal(journal.id);
    }
    if (showcaseCoverWrapper) {
      showcaseCoverWrapper.onclick = () => openJournalModal(journal.id);
    }

    updatePaginationDots();
  };

  const renderGridView = () => {
    if (!gridView) return;
    gridView.innerHTML = '';

    filteredJournals.forEach(j => {
      const card = document.createElement('article');
      card.className = 'journal-grid-card reveal-fade-up';
      card.innerHTML = `
        <div class="journal-grid-card__cover">
          <img src="${j.coverImage}" alt="${j.title} Cover" loading="lazy">
        </div>
        <span class="journal-grid-card__discipline">${j.discipline}</span>
        <h3 class="journal-grid-card__title">${j.title}</h3>
        <p class="journal-grid-card__frequency">${j.frequency}</p>
        <div class="journal-grid-card__footer">
          <span>View Details</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      `;
      card.addEventListener('click', () => openJournalModal(j.id));
      gridView.appendChild(card);
    });
  };

  // Category Filtering
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');

      currentCategory = pill.getAttribute('data-category');
      if (currentCategory === 'All') {
        filteredJournals = [...JOURNALS_DATA];
      } else {
        filteredJournals = JOURNALS_DATA.filter(j => j.discipline === currentCategory);
      }

      activeIndex = 0;
      renderActiveShowcase();
      renderGridView();
    });
  });

  // Prev / Next Controls
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      activeIndex = (activeIndex - 1 + filteredJournals.length) % filteredJournals.length;
      renderActiveShowcase();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      activeIndex = (activeIndex + 1) % filteredJournals.length;
      renderActiveShowcase();
    });
  }

  // Swipe support for touch devices
  let touchStartX = 0;
  let touchEndX = 0;

  if (showcaseView) {
    showcaseView.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    showcaseView.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        // swipe left -> next
        activeIndex = (activeIndex + 1) % filteredJournals.length;
        renderActiveShowcase();
      } else if (touchEndX - touchStartX > 50) {
        // swipe right -> prev
        activeIndex = (activeIndex - 1 + filteredJournals.length) % filteredJournals.length;
        renderActiveShowcase();
      }
    }, { passive: true });
  }

  // View Mode Switcher
  if (viewShowcaseBtn && viewGridBtn) {
    viewShowcaseBtn.addEventListener('click', () => {
      viewShowcaseBtn.classList.add('is-active');
      viewGridBtn.classList.remove('is-active');
      showcaseView.style.display = 'grid';
      if (prevBtn && prevBtn.parentElement) prevBtn.parentElement.parentElement.style.display = 'flex';
      gridView.classList.remove('is-visible');
    });

    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('is-active');
      viewShowcaseBtn.classList.remove('is-active');
      showcaseView.style.display = 'none';
      if (prevBtn && prevBtn.parentElement) prevBtn.parentElement.parentElement.style.display = 'none';
      gridView.classList.add('is-visible');
      renderGridView();
    });
  }

  // Initial renders
  renderActiveShowcase();
  renderGridView();

  // =========================================================================
  // 6. INTERACTIVE JOURNAL DETAILS MODAL
  // =========================================================================
  const journalModalBackdrop = document.getElementById('journalModalBackdrop');
  const journalModalCloseBtn = document.getElementById('journalModalCloseBtn');
  const journalModalFooterCloseBtn = document.getElementById('journalModalFooterCloseBtn');

  const modalCover = document.getElementById('modalJournalCover');
  const modalDiscipline = document.getElementById('modalJournalDiscipline');
  const modalTitle = document.getElementById('modalJournalTitle');
  const modalEditor = document.getElementById('modalJournalEditor');
  const modalFrequency = document.getElementById('modalJournalFrequency');
  const modalDesc = document.getElementById('modalJournalDesc');
  const modalIssnItem = document.getElementById('modalIssnItem');
  const modalExternalBtn = document.getElementById('modalJournalExternalBtn');

  window.openJournalModal = (journalId) => {
    const journal = JOURNALS_DATA.find(j => j.id === journalId);
    if (!journal || !journalModalBackdrop) return;

    if (modalCover) modalCover.src = journal.coverImage;
    if (modalDiscipline) modalDiscipline.textContent = journal.discipline;
    if (modalTitle) modalTitle.textContent = journal.title;
    if (modalEditor) {
      modalEditor.textContent = journal.editorInChief ? journal.editorInChief : 'Editorial Board Secretariat';
    }
    if (modalFrequency) modalFrequency.textContent = journal.frequency;
    if (modalDesc) modalDesc.textContent = journal.description;

    if (modalIssnItem) {
      if (journal.issnOnline) {
        modalIssnItem.innerHTML = `
          <div class="journal-modal__meta-divider"></div>
          <div class="journal-modal__meta-item">
            <span class="journal-modal__meta-label">ISSN &amp; Identifier</span>
            <span class="journal-modal__meta-val" style="font-size:0.88rem;">e-ISSN: ${journal.issnOnline}${journal.issnPrint ? ` &middot; Print: ${journal.issnPrint}` : ''}${journal.doiPrefix ? ` &middot; DOI: ${journal.doiPrefix}` : ''}</span>
          </div>
        `;
        modalIssnItem.style.display = 'block';
      } else {
        modalIssnItem.innerHTML = '';
        modalIssnItem.style.display = 'none';
      }
    }

    if (modalExternalBtn) {
      modalExternalBtn.href = journal.url;
    }

    journalModalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeJournalModal = () => {
    if (!journalModalBackdrop) return;
    journalModalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (journalModalCloseBtn) {
    journalModalCloseBtn.addEventListener('click', closeJournalModal);
  }

  if (journalModalFooterCloseBtn) {
    journalModalFooterCloseBtn.addEventListener('click', closeJournalModal);
  }

  if (journalModalBackdrop) {
    journalModalBackdrop.addEventListener('click', (e) => {
      if (e.target === journalModalBackdrop) {
        closeJournalModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && journalModalBackdrop && journalModalBackdrop.classList.contains('is-open')) {
      closeJournalModal();
    }
  });

  // Attach click events on hero covers & about spotlights
  document.querySelectorAll('[data-open-modal]').forEach(el => {
    el.addEventListener('click', () => {
      const jid = el.getAttribute('data-open-modal');
      if (jid) openJournalModal(jid);
    });
  });

  // =========================================================================
  // 7. PUBLISHING PRINCIPLES ACCORDION
  // =========================================================================
  const accordionItems = document.querySelectorAll('.policy-accordion-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.policy-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other accordions for refined editorial elegance
      accordionItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          const otherTrigger = other.querySelector('.policy-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle clicked item
      if (isOpen) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // =========================================================================
  // 8. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
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
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    reveals.forEach(r => revealObserver.observe(r));
  } else {
    // Fallback: reveal all immediately if observer not supported or reduced motion
    reveals.forEach(r => r.classList.add('is-revealed'));
  }
});

