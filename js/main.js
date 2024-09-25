// 차트 
function annualGraph() {
  const graph = document.getElementById('chart-num');
  const graphSection = graph.offsetTop;
  const scrollPos = window.scrollY + window.innerHeight;
  

  if (scrollPos > graphSection + graph.offsetHeight * 2) {
    let graphOne = 10;
    let graphOneText = "2004";

    let graphTwo = 45;
    let graphTwoText = "2434";

    let graphThree = 101;
    let graphThreeText = '2840';

    let graphPoint = 132;
    let graphPointText = '3003';

    TweenMax.to(".graphone", 1.5, { height: `${graphOne}px`, ease: "power3.inOut" });
    TweenMax.to(".graphtwo", 1.5, { height: `${graphTwo}px`, ease: "power3.inOut" });
    TweenMax.to(".graphthree", 1.5, { height: `${graphThree}px`, ease: "power3.inOut" });
    TweenMax.to(".maingraph", 1.5, { height: `${graphPoint}px`, ease: "power3.inOut" });

    TweenMax.to(".sub-tooltip1", 1.5, {
      ease: "power3.inOut",
      y: - graphOne, onUpdate: function () {
        let newOneHeight = Math.round(this.progress() * parseInt(graphOneText.replace(",", "")));
        document.querySelector(".sub-tooltip1").textContent = newOneHeight.toLocaleString() + " $";
      }
    });
    TweenMax.to(".sub-tooltip2", 1.5, {
      ease: "power3.inOut",
      y: - graphTwo, onUpdate: function () {
        let newTwoHeight = Math.round(this.progress() * parseInt(graphTwoText.replace(",", "")));
        document.querySelector(".sub-tooltip2").textContent = newTwoHeight.toLocaleString() + " $";
      }
    });
    TweenMax.to(".sub-tooltip3", 1.5, {
      ease: "power3.inOut",
      y: - graphThree, onUpdate: function () {
        let newthreeHeight = Math.round(this.progress() * parseInt(graphThreeText.replace(",", "")));
        document.querySelector(".sub-tooltip3").textContent = newthreeHeight.toLocaleString() + " $";
      }
    });
    TweenMax.to(".main-tooltip", 1.5,
      {
        ease: "power3.inOut",
        y: - graphPoint,
        onUpdate: function () {
          let newMainHeight = Math.round(this.progress() * parseInt(graphPointText.replace(",", "")));
          document.querySelector(".main-tooltip").textContent = newMainHeight.toLocaleString();
          const newDollar = document.createElement("span");
          newDollar.textContent = "$";
          newDollar.classList = 'tooltip-unit';
          document.querySelector('.main-tooltip').appendChild(newDollar);
        }
      });
    window.removeEventListener('scroll', annualGraph);
  }
}
window.addEventListener('scroll', annualGraph);

// 메인화면 올라오는 시간
function mainUp() {
  const textLoadUp = document.querySelectorAll('.eco-load-up');
  textLoadUp.forEach((el, index) => {
    gsap.set(el, { opacity: 0, y: 7 * (index + 1) });
    gsap.to(el, {
      duration: 0.7,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: "power3.inOut"
    });
  });
}
window.addEventListener('DOMContentLoaded', mainUp);

function mainTextUp() {
  const textSlideUp = document.querySelectorAll('.eco-slide-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out"
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -30% 0px'
  });
  textSlideUp.forEach(el => {
    gsap.set(el, { opacity: 0, y: 50 });
    observer.observe(el);
  });
}
mainTextUp();

function useBox() {
  const textSlideUp = document.querySelectorAll('.eco-fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          duration: 0.6,
          y: 0,
          opacity: 1,
          ease: "power2.in"
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40% 0px'
  });
  textSlideUp.forEach(el => {
    gsap.set(el, { opacity: 0, y: 0 });
    observer.observe(el);
  });
}
useBox();

function clientbox() {
  const clientBoxShow = document.querySelectorAll('.client-show');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          duration: 0.7,
          y: 0,
          opacity: 1,
          ease: "power3.in"
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -30% 0px'
  });
  clientBoxShow.forEach(el => {
    gsap.set(el, { opacity: 0, y: 0 });
    observer.observe(el);
  });
}
clientbox();

const menuToggle = document.querySelector('.menutoggle');
const dropMenuBox = document.querySelector('.eco-dropmenubox');
const menuItems = document.querySelectorAll('.eco-menu-list');

// 드롭다운 메뉴 숨기기
TweenMax.set(dropMenuBox, { y: -20, opacity: 0, display: 'none' });

// 토글 버튼 클릭 시 드롭다운 메뉴 보이기/숨기기
menuToggle.addEventListener('click', function () {
  if (dropMenuBox.classList.contains('active')) {
    TweenMax.to(dropMenuBox, 0.2, { y: -20, opacity: 0, display: 'none' });
    dropMenuBox.classList.remove('active');
  } else {
    TweenMax.to(dropMenuBox, 0.2, { y: 0, opacity: 1, display: 'block' });
    dropMenuBox.classList.add('active');
  }
  menuToggle.classList.toggle("active");
});

// 비디오 시작
const videoBox = document.querySelector('.videobox');
const video = videoBox.querySelector('video');

// 비디오 박스의 위치와 뷰포트의 높이를 비교하여 스크롤 이벤트 감지
function videoAutoPlay() {
  const { top, bottom } = videoBox.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (top < windowHeight && bottom >= 0) {
    video.play();
    window.removeEventListener('scroll', videoAutoPlay);
  }
};
window.addEventListener('scroll', videoAutoPlay);

const menuLink = document.querySelectorAll('.menu-scrolling');

for (i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function(){
    dropMenuBox.classList.remove('active');
    menuToggle.classList.remove("active");
  })
}
// about iconbox section
function showBox() {
  const boxes = document.querySelectorAll('.about-load-up');
  boxes.forEach((box, index) => {
    gsap.set(box, { opacity: 0, y: 7 * (index + 1) });
    gsap.to(box, {
      duration: 0.7,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: "power3.inOut"
    });
  });
}
const boxesContainer = document.querySelector('.aboutus-iconarea');
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -30% 0px',
  threshold: 0.5
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      showBox();
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(boxesContainer);

// about title section
function titleShow() {
  const boxes = document.querySelectorAll('.about-title-up');
  boxes.forEach((box, index) => {
    gsap.set(box, { opacity: 0, y: 7 * (index + 1) });
    gsap.to(box, {
      duration: 0.7,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: "power3.inOut"
    });
  });
}

const aboutContainer = document.querySelector('.company-intro');
const aboutTitleOptions = {
  root: null,
  rootMargin: '0px 0px -30% 0px',
  threshold: 0.5
};

const aboutCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      titleShow();
      observer.unobserve(entry.target);
    }
  });
};

const aboutTitle = new IntersectionObserver(aboutCallback, aboutTitleOptions);
aboutTitle.observe(aboutContainer);
// mission section
function missionTitleShow() {
  const boxes = document.querySelectorAll('.mission-title-up');
  boxes.forEach((box, index) => {
    gsap.set(box, { opacity: 0, y: 7 * (index + 1) });
    gsap.to(box, {
      duration: 0.7,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: "power3.inOut"
    });
  });
}

const missionContainer = document.querySelector('.mission-info');
const missionTitleOptions = {
  root: null,
  rootMargin: '0px 0px -30% 0px',
  threshold: 0.5
};

const missionCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      missionTitleShow();
      observer.unobserve(entry.target);
    }
  });
};

const missionTitle = new IntersectionObserver(missionCallback, missionTitleOptions);
missionTitle.observe(missionContainer);

// value section
function valueTitleShow() {
  const boxes = document.querySelectorAll('.value-title-up');
  boxes.forEach((box, index) => {
    gsap.set(box, { opacity: 0, y: 7 * (index + 1) });
    gsap.to(box, {
      duration: 0.7,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: "power3.inOut"
    });
  });
}

const valueContainer = document.querySelector('.value-infobox');
const valueTitleOptions = {
  root: null,
  rootMargin: '0px 0px -25% 0px',
  threshold: 0.5
};

const valueCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      valueTitleShow();
      observer.unobserve(entry.target);
    }
  });
};

const valueTitle = new IntersectionObserver(valueCallback, valueTitleOptions);
valueTitle.observe(valueContainer);
// can section
function canBoxShow() {
  const boxes = document.querySelectorAll('.can-box-up');
  boxes.forEach((box, index) => {
    gsap.set(box, { opacity: 0, y: 7 * (index + 1) });
    gsap.to(box, {
      duration: 0.7,
      y: 0,
      opacity: 1,
      delay: index * 0.5,
      ease: "power3.inOut"
    });
  });
}

const canContainer = document.querySelector('.can-infoarea');
const canBoxOptions = {
  root: null,
  rootMargin: '0px 0px -30% 0px',
  threshold: 0.5
};

const canCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      canBoxShow();
      observer.unobserve(entry.target);
    }
  });
};

const canBox = new IntersectionObserver(canCallback, canBoxOptions);
canBox.observe(canContainer);
// about twosection
function animateAbout() {
  const clientBoxShow = document.querySelectorAll('.export-txtarea');
  
  const durations = 0.7;
  const eases = Power3.easeInOut;

  clientBoxShow.forEach((el, index) => {
    gsap.set(el, { opacity: 0, y: 7 * (index + 0.7) });
    gsap.to(el, {
      duration: durations,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: eases,
      onComplete: () => {
        if (index === clientBoxShow.length - 1) {
          quantity();
        }
      }
    });
  });
}

const aboutAnimationContainer = document.querySelector('.export-quantity');
const aboutAnimationBoxOptions = {
  root: null,
  rootMargin: '0px 0px -20% 0px',
  threshold: 0.5
};

const aboutAnimationCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateAbout();
      observer.unobserve(entry.target);
    }
  });
};

const aboutAnimationBox = new IntersectionObserver(aboutAnimationCallback, aboutAnimationBoxOptions);
aboutAnimationBox.observe(aboutAnimationContainer);

// 1만 2000T
function quantity() {
  const twoPointElement = document.getElementById('twopoint');
  
  const twoPointValue = "2000T";
  const duration = 1;
  const ease = Power1.easeOut;

  TweenMax.to(twoPointElement, duration, {
    innerHTML: twoPointValue,
    roundProps: "innerHTML",
    ease: ease,
    onComplete: function () {
      window.removeEventListener('scroll', animateAnnualGrow);
    }
  });
}

// vision section
function visionBoxShow() {
  const boxes = document.querySelectorAll('.vision-text-up');
  const durations = 0.7;
  const eases = Power3.easeInOut;

  boxes.forEach((box, index) => {
    gsap.set(box, { opacity: 0, y: 7 * (index + 0.7) });
    gsap.to(box, {
      duration: durations,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: eases,
      onComplete: () => {
        if (index === boxes.length - 1) {
          animateAnnualGrow();
        }
      }
    });
  });
}

const visionContainer = document.querySelector('.annual-one-section');
const visionBoxOptions = {
  root: null,
  rootMargin: '0px 0px -30% 0px',
  threshold: 0.5
};

const visionCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      visionBoxShow();
      observer.unobserve(entry.target);
    }
  });
};

const visionBox = new IntersectionObserver(visionCallback, visionBoxOptions);
visionBox.observe(visionContainer);

// 3~5% Animation
function animateAnnualGrow() {
  const annualPointElement = document.getElementById('annual-rullet');
  const durations = 1.5;
  const startValue = '0%';
  const targetValue = '5%';
  const eases = Power2.easeOut;

  annualPointElement.innerHTML = startValue;

  TweenMax.to(annualPointElement, durations, {
    innerHTML: targetValue,
    roundProps: "innerHTML",
    ease: eases,
    onComplete: function () {
      window.removeEventListener('scroll', animateAnnualGrow);
    }
  });
}

// ceo section
function ceoBoxShow() {
  const boxes = document.querySelectorAll('.ceo-box-up');
  boxes.forEach((box, index) => {
    gsap.set(box, { opacity: 0, y: 7 * (index + 1) });
    gsap.to(box, {
      duration: 0.7,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: "power3.inOut"
    });
  });
}

const ceoContainer = document.querySelector('.ceo-area');
const ceoBoxOptions = {
  root: null,
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.5
};

const ceoCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      ceoBoxShow();
      observer.unobserve(entry.target);
    }
  });
};

const ceoBox = new IntersectionObserver(ceoCallback, ceoBoxOptions);
ceoBox.observe(ceoContainer);
// global section
function globalBoxShow() {
  const boxes = document.querySelectorAll('.global-text-up');
  boxes.forEach((box, index) => {
    gsap.set(box, { opacity: 0, y: 7 * (index + 1) });
    gsap.to(box, {
      duration: 0.7,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: "power3.inOut"
    });
  });
}

const globalContainer = document.querySelector('.annual-two-section');
const globalBoxOptions = {
  root: null,
  rootMargin: '0px 0px 1px 0px',
  threshold: 0.5
};

const globalCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      globalBoxShow();
      observer.unobserve(entry.target);
    }
  });
};

const globalBox = new IntersectionObserver(globalCallback, globalBoxOptions);
globalBox.observe(globalContainer);

// alum section
function alumBoxShow() {
  const boxes = document.querySelectorAll('.alum-text-up');
  boxes.forEach((box, index) => {
    gsap.set(box, { opacity: 0, y: 7 * (index + 1) });
    gsap.to(box, {
      duration: 0.7,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: "power3.inOut"
    });
  });
}

const alumContainer = document.querySelector('.use-intro');
const alumBoxOptions = {
  root: null,
  rootMargin: '0px 0px -30% 0px',
  threshold: 0.5
};

const alumCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      alumBoxShow();
      observer.unobserve(entry.target);
    }
  });
};

const alumBox = new IntersectionObserver(alumCallback, alumBoxOptions);
alumBox.observe(alumContainer);

// business section
function businessBoxShow() {
  const boxes = document.querySelectorAll('.business-text-up');
  boxes.forEach((box, index) => {
    gsap.set(box, { opacity: 0, y: 7 * (index + 1) });
    gsap.to(box, {
      duration: 0.7,
      y: 0,
      opacity: 1,
      delay: index * 0.3,
      ease: "power3.inOut"
    });
  });
}

const businessContainer = document.querySelector('.eco-companybox');
const businessBoxOptions = {
  root: null,
  rootMargin: '0px 0px -1% 0px',
  threshold: 0.5
};

const businessCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      businessBoxShow();
      observer.unobserve(entry.target);
    }
  });
};

const businessBox = new IntersectionObserver(businessCallback, businessBoxOptions);
businessBox.observe(businessContainer);