// A Function To Get The Section Scroll Position
function getScrollInfo(section: HTMLElement): number {

  // Get The Section Offset And Height
  let sectionOffset = section.offsetTop;
  let sectionHeight = section.offsetHeight;

  // Get The Page Height
  let pageHeight = window.innerHeight;

  return sectionOffset + sectionHeight - pageHeight;

}

let statsSection = document.querySelector(".stats") as HTMLElement;
let stats = document.querySelectorAll(".stats .box .goal") as NodeListOf<HTMLDivElement>;
// A Variable To Check If The Stats Section Has Been Scrolled
let scrolled = false;

let skillsSection = document.querySelector(".services .container .bottom") as HTMLDivElement;
let skills = document.querySelectorAll(".services .container .bottom .skill .progress span") as NodeListOf<HTMLSpanElement>;

window.addEventListener("scroll", () => {
  // Get The Skills Scroll Position
  let skillsScroll = getScrollInfo(skillsSection);
  if (window.scrollY >= skillsScroll + 1500) {
    // Loop On Each Skill And Get The Goal Width From It's Dataset
    skills.forEach((skill) => {
      skill.style.width = `${skill.dataset.goal}%`;
    });
  }

  // If The Stats Section Hasn't Been Scrolled
  if (!scrolled) {
    let statsScroll = getScrollInfo(statsSection);
    if (window.scrollY >= statsScroll - 100) {
      stats.forEach((state) => {
        count(state);
      });
      scrolled = true;
    }
  }
});

// A Function To Count The Number
function count(countElement: HTMLElement) {
  // Get The Goal Number From The Dataset
  let goal = Number(countElement.dataset.goal);
  let counter = setInterval(() => {
    let currentValue = parseInt(countElement.textContent || "0");
    countElement.textContent = (currentValue + 1).toString();
    // When The Current Value Equals The Goal Stop The Counter
    if (Number(countElement.textContent) === goal) {
      clearInterval(counter);
    }
  }, 30);
}

// Get The Current Year
let year = document.querySelector(".year") as HTMLSpanElement;
year.textContent = new Date().getFullYear().toString();