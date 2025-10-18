# 🌱 EcoNergy – 홈페이지 애니메이션 & 인터랙션

> 혼자 개발한 에코너지 사이트로, GSAP와 TweenMax를 활용해 스크롤 기반 애니메이션과 인터랙티브 UI를 구현한 프로젝트입니다.

---

## 🔹 프로젝트 특징

- **스크롤 기반 애니메이션**
  - IntersectionObserver와 GSAP를 활용하여 화면에 나타나는 요소마다 자연스러운 등장 효과 구현
  - `.eco-slide-up`, `.eco-load-up`, `.eco-fade-in` 등 클래스별 staggered animation 적용

- **차트 애니메이션**
  - 연도별 수치 차트(`annualGraph`) 스크롤 시 애니메이션
  - TweenMax로 막대그래프 및 툴팁 값 증가 효과 구현
  - 메인/서브 툴팁에 동적 숫자 표기 + 단위 표시 (`$`)

- **비디오 자동 재생**
  - 비디오 박스가 화면에 들어오면 자동 재생
  - 스크롤 이벤트 제거로 반복 실행 방지

- **메뉴 드롭다운**
  - 메뉴 토글 버튼 클릭 시 부드러운 show/hide 애니메이션
  - TweenMax로 자연스러운 등장 효과

- **섹션별 등장 애니메이션**
  - About, Mission, Value, Can, Vision, CEO, Global, Alum, Business 등 섹션별 요소 staggered 애니메이션
  - IntersectionObserver와 GSAP로 화면에 나타날 때만 애니메이션 실행
  - 일부 섹션은 애니메이션 완료 후 추가 함수 호출 (`quantity()`, `animateAnnualGrow()`)

---

## 🛠 기술 스택

- **Frontend**
  - HTML5 / CSS3 / JavaScript
  - GSAP, TweenMax
  - IntersectionObserver API

- **기타**
  - 스크롤 감지 기반 애니메이션
  - DOMContentLoaded 이벤트 활용 초기 로딩 애니메이션

---

## ⚡ 주요 코드 구조

```javascript
// 연도별 그래프 애니메이션
function annualGraph() { ... }

// 메인 화면 등장 애니메이션
function mainUp() { ... }

// IntersectionObserver 기반 섹션별 애니메이션
function mainTextUp() { ... }
function useBox() { ... }
