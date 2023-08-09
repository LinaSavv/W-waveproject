
// header search form
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('search-btn-open').addEventListener('click', (e) =>{
    document.getElementById('search-form').classList.add('open');
    document.getElementById('search-btn-open').classList.add('open');
  });

  document.getElementById('search-btn-esc').addEventListener('click', (e) =>{
    document.getElementById('search-form').classList.remove('open');
    document.getElementById('search-btn-open').classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      document.getElementById('search-form').classList.remove('open');
      document.getElementById('search-btn-open').classList.remove('open');
    }
  });

  document.getElementById('search-form').addEventListener('submit', (e) =>{
    e.preventDefault();
  });
});

// Modal
document.getElementById('btn-modal-open').addEventListener('click', function() {
  document.getElementById('modal').classList.add('open');
});

document.getElementById('btn-modal-esc').addEventListener('click', function() {
  document.getElementById('modal').classList.remove('open');
});

window.addEventListener('keydown',(e) => {
  if (e.key === 'Escape') {
    document.getElementById('modal').classList.remove('open');
  };
});

document.querySelector('#modal .modal__box').addEventListener('click', event => {
  event._isClickWithInModal = true;
});

document.getElementById('modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// Burder Menu

let menuNav = document.querySelector('.mobail');

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('open');
    menuNav.style.transition = 'opacity .3s ease-in-out, visibility .3s ease-in-out, transform .5s ease-in-out';
  });
});


// btn play header
let btnPlayContent = document.querySelector('.wrapper--play');
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-ether').addEventListener('click', function() {
    document.querySelector('.header__content--bottom').classList.toggle('open');
    btnPlayContent.style.transition = 'opacity .3s ease-in-out, visibility .3s ease-in-out';
  });
});

// Показать еще

const btnMore = document.querySelector('.btn--podcast-show');
const podcastItem = document.querySelectorAll('.podcast__item--media').length;
let items = 8;

btnMore.addEventListener('click', () => {
  items += 4;
  const array = Array.from(document.querySelector('.podcast__list--media').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));

  if(visItems.length === podcastItem) {
    btnMore.style.display = 'none';
  }
})

// select

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach( item => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach( item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-activ');
  };

  function selectChoose() {
    let text = this.innerText,
    select = this.closest('.select'),
    currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is-activ');
  };

};

select();

// tads broadcast

let tab = function() {
  let tabNav = document.querySelectorAll('.select__btn'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

  tabNav.forEach( item => {
    item.addEventListener('click', selectTadNav);
  });

  function selectTadNav() {
    tabNav.forEach( item => {
      item.classList.remove('is-activ')
    });
    this.classList.add('is-activ');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach( item => {
      item.classList.contains(tabName)?item.classList.add('active'):
      item.classList.remove('active');
    });
  };
};

tab();

//tab radio

let tabRadio = function() {
  let tabRadioNav = document.querySelectorAll('.playlist__ladel'),
    tabRadioContent = document.querySelectorAll('.playlist__list'),
  tabRadioName;

  tabRadioNav.forEach( item => {
    item.addEventListener('click', selectTabRadioNav);
  });

  function selectTabRadioNav () {
    tabRadioNav.forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');
    tabRadioName = this.getAttribute('data-tab-name');
    selectTabRadioContent(tabRadioName);
  };

  function selectTabRadioContent(tabRadioName) {
    tabRadioContent.forEach(item => {
      item.classList.contains(tabRadioName)?item.classList.add('active'):
      item.classList.remove('active');
    });
  };
};

tabRadio();



// accardion

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


// Табы
const params = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(params) {
  const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${params.wrap}`);
    const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${params.content}`);

    contents.forEach((el) => {
      el.classList.remove(params.active);
    });

    currentContent.classList.add(params.active);

    tabBtns.forEach((el) => {
      el.classList.remove(params.active);
    });

    this.classList.add(params.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(params);

//
const swiper = new Swiper('.swiper--about-us', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1140: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }


});
