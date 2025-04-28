// const openSettings = () => {
//   document.body.classList.add('locked');
// };

const changePage = e => {
  e.preventDefault();
  const target = e.currentTarget.dataset.cookieWidgetPageNav;
  const activePageEl = document.querySelector(`[data-cookie-page].active`);
  const targetPageEl = document.querySelector(`[data-cookie-page="${target}"]`);

  activePageEl.classList.remove('active');
  targetPageEl.classList.add('active');
};

const changeTab = e => {
  e.preventDefault();
  const btn = e.currentTarget;
  const target = btn.dataset.cookieWidgetNav;
  const activeBtnEl = document.querySelector(`[data-cookie-widget-nav].active`);
  const activeTabEl = document.querySelector(`[data-cookie-widget-tab].active`);
  const targetTabEl = document.querySelector(`[data-cookie-widget-tab="${target}"]`);

  activeBtnEl.classList.remove('active');
  activeTabEl.classList.remove('active');

  targetTabEl.classList.add('active');
  btn.classList.add('active');
};

const toggleWidgetCheckbox = e => {
  const isChecked = e.currentTarget.checked || false;
  const acceptButton = document.querySelector('[data-cookie-widget-accept-all]');
  if (isChecked) {
    acceptButton.style.display = 'none';
    return;
  }
  acceptButton.style.display = 'block';
};

const addEventOnCheckbox = () => {
  const checkbox = document.querySelectorAll('.cookie-widget-checkbox input');
  if (checkbox.length > 0) {
    checkbox.forEach(checkbox => {
      checkbox.addEventListener('click', toggleWidgetCheckbox);
    });
  }
};

const addEventsOnTubButtons = () => {
  const tubButtons = document.querySelectorAll('[data-cookie-widget-nav]');
  if (tubButtons.length > 0) {
    tubButtons.forEach(btn => {
      btn.addEventListener('click', changeTab);
    });
  }
};

const addEventsOnPageButtons = () => {
  const pageButtons = document.querySelectorAll('[data-cookie-widget-page-nav]');
  if (pageButtons.length > 0) {
    pageButtons.forEach(btn => {
      btn.addEventListener('click', changePage);
    });
  }
};

const accordeonsInit = () => {
  const toggles = document.querySelectorAll('.accordion-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
      const content = e.target.closest('.cookie-widget-accordeons__item').querySelector('.cookie-widget-accordeons__content');
      content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
    });
  });
};

const setCookieWidgetStyles = (options = {}) => {
  const root = document.documentElement;

  if (options.primaryColor) {
    root.style.setProperty('--cookie-widget-primary-color', options.primaryColor);
  }

  if (options.logoBackground) {
    root.style.setProperty('--cookie-widget-logo-bg', options.logoBackground);
  }
};

const addEventOnFilterButton = () => {
  const filterButton = document.querySelector('[data-cookie-widget-filter]');
  if (filterButton) {
    filterButton.addEventListener('click', event => {
      if (event.currentTarget === event.target) {
        filterButton.classList.toggle('active');
      }
    });
  }
};

const addEventOnFilterSubmit = e => {
  const filterForm = document.querySelector('[data-cookie-widget-filter-form]');
  if (filterForm) {
    filterForm.addEventListener('submit', e => {
      e.preventDefault();

      const filterButton = filterForm.closest('[data-cookie-widget-filter]');
      if (filterButton) {
        filterButton.classList.remove('active');
      }
    });
  }
};

const cookieWidgetInit = options => {
  setCookieWidgetStyles(options);
  const { policyUrl, logoUrl, cookieData = [] } = options;
  addEventsOnTubButtons();
  addEventsOnPageButtons();
  addEventOnFilterButton();
  addEventOnFilterSubmit();
  addEventOnCheckbox();
  accordeonsInit();
};
