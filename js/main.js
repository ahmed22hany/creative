// change between two lang
const translations = {
  en: {
    brandTitle: "Creative",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    switchButton: "ع",
    heroTitle: "YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES",
    heroText:
      "Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!",
    heroBtn: "Find Out more",
    aboutTitle: "We've got what you need!",
    aboutText:
      "Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!",
    aboutBtn: "Get Started",
    servTitle: "At Your Service",
    servTitle1: "Sturdy Themes",
    servTitle2: "Up to Date",
    servTitle3: "Ready to Publish",
    servTitle4: "Made with Love",
    servText1: "Our themes are updated regularly to keep them bug free!",
    servText2: "All dependencies are kept current to keep things fresh.",
    servText3: "You can use this design as is, or you can make changes!",
    servText4: "Is it really open source if it's not made with love?",
    projectCat: "CATEGORY",
    projectName: "Project Name",
    portTitle: "Free Download at Start Bootstrap!",
    portBtn: "Download Now !",
    contactTitle: "Let's Get In Touch!",
    contactText:
      "Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!",
  },
  ar: {
    brandTitle: "كرياتيف",
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navServices: "خدماتنا",
    navPortfolio: "أعمالنا",
    navContact: "أتصل بنا",
    switchButton: "En",
    heroTitle: "نحن نضع عـمـلائـنـا فـي مـقـدمـه اولـويـاتـنـا",
    heroText:
      "ما أصله؟ خلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من عام في",
    heroBtn: "المزيد",
    aboutTitle: "لدينا ما تريد",
    aboutText:
      "ما أصله؟ خلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من عام في",
    aboutBtn: "! ابدأ الان",
    servTitle: "خدماتنا المميزة",
    servTitle1: "أحدث التصميمات",
    servTitle2: "تكنولوجيا متقدمه",
    servTitle3: "سرعه التنفيذ",
    servTitle4: "دقه في التصميم",
    servText1:
      "لا أحد يحب الألم بذاته، يسعى ورائه أو يبتغيه، ببساطة لأنه الألم",
    servText2:
      "لا أحد يحب الألم بذاته، يسعى ورائه أو يبتغيه، ببساطة لأنه الألم",
    servText3:
      "لا أحد يحب الألم بذاته، يسعى ورائه أو يبتغيه، ببساطة لأنه الألم",
    servText4:
      "لا أحد يحب الألم بذاته، يسعى ورائه أو يبتغيه، ببساطة لأنه الألم",
    projectCat: "الفئة",
    projectName: "أسم المشروع",
    portTitle: "هل تعجبك تلك الأداة؟ قم بتقييمها!",
    portBtn: "!حمل الان",
    contactTitle: "أتصل بنا !",
    contactText:
      "ما أصله؟ خلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد",
  },
};

function switchLanguage() {
  const newLang = window.location.hash.includes("#ar") ? "en" : "ar";
  window.location.hash = newLang === "en" ? "#en" : "#ar"; // Update hash based on newLang
  updateContent(newLang);
  if (newLang === "en") {
    document.querySelector("html").setAttribute("dir", "ltr");
    const bodyElement = document.querySelector("ul.navbar-nav");
    bodyElement.classList.remove("me-auto");
    bodyElement.classList.add("ms-auto");
  } else {
    document.querySelector("html").setAttribute("dir", "rtl");
    const bodyElement = document.querySelector("ul.navbar-nav");
    bodyElement.classList.remove("ms-auto");
    bodyElement.classList.add("me-auto");
  }
}

function updateContent(lang) {
  document.getElementById("brandTitle").innerText =
    translations[lang].brandTitle;
  document.getElementById("homeNav").innerText = translations[lang].navHome;
  document.getElementById("homeNav").href = `#${lang}-home`;
  document.getElementById("aboutNav").innerText = translations[lang].navAbout;
  document.getElementById("aboutNav").href = `#${lang}-about`;
  document.getElementById("servicesNav").innerText =
    translations[lang].navServices;
  document.getElementById("servicesNav").href = `#${lang}-services`;
  document.getElementById("portfolioNav").innerText =
    translations[lang].navPortfolio;
  document.getElementById("portfolioNav").href = `#${lang}-portfolio`;
  document.getElementById("contactNav").innerText =
    translations[lang].navContact;
  document.getElementById("contactNav").href = `#${lang}-contact`;
  document.getElementById("langButton").innerText =
    translations[lang].switchButton;
  document.getElementById("heroTitle").innerText = translations[lang].heroTitle;
  document.getElementById("heroText").innerText = translations[lang].heroText;
  document.getElementById("heroBtn").innerText = translations[lang].heroBtn;
  document.getElementById("aboutTitle").innerText =
    translations[lang].aboutTitle;
  document.getElementById("aboutText").innerText = translations[lang].aboutText;
  document.getElementById("aboutBtn").innerText = translations[lang].aboutBtn;
  document.getElementById("servTitle").innerText = translations[lang].servTitle;
  document.getElementById("servTitle1").innerText =
    translations[lang].servTitle1;
  document.getElementById("servTitle2").innerText =
    translations[lang].servTitle2;
  document.getElementById("servTitle3").innerText =
    translations[lang].servTitle3;
  document.getElementById("servTitle4").innerText =
    translations[lang].servTitle4;
  document.getElementById("servText1").innerText = translations[lang].servText1;
  document.getElementById("servText2").innerText = translations[lang].servText2;
  document.getElementById("servText3").innerText = translations[lang].servText3;
  document.getElementById("servText4").innerText = translations[lang].servText4;
  const category = document.querySelectorAll(".project-cat");
  category.forEach((element) => {
    element.innerText = translations[lang].projectCat;
  });
  const name = document.querySelectorAll(".project-name");
  name.forEach((element) => {
    element.innerText = translations[lang].projectName;
  });
  document.getElementById("portTitle").innerText = translations[lang].portTitle;
  document.getElementById("portBtn").innerText = translations[lang].portBtn;
  document.getElementById("contactTitle").innerText =
    translations[lang].contactTitle;
  document.getElementById("contactText").innerText =
    translations[lang].contactText;

  document.querySelectorAll("section").forEach((section) => {
    const id = section.id.split("-")[1]; // Get the second part of the id
    section.id = `${lang}-${id}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = window.location.hash.includes("#ar") ? "ar" : "en"; // Check hash on load
  window.location.hash = lang === "en" ? "#en" : "#ar"; // Set initial hash
  updateContent(lang);
  if (lang === "en") {
    document.querySelector("html").setAttribute("dir", "ltr");
  } else {
    document.querySelector("html").setAttribute("dir", "rtl");
  }
});

window.addEventListener("hashchange", () => {
  const lang = window.location.hash.includes("#ar") ? "ar" : "en"; // Check hash on change
  updateContent(lang);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const sectionID = this.getAttribute("href").substring(1);
    const sectionElement = document.getElementById(sectionID);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
window.addEventListener("load", () => {
  const currentLang = window.location.hash.substring(1) || "en";
  updateContent(currentLang);
});

// Navbar links
const links = document.querySelectorAll(".navbar-nav .nav-item a");

// Add click event listener to each link
links.forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});

function handleLinkClick(e) {
  // Get the currently active link
  const activeLink = document.querySelector(".navbar-nav .nav-item a.active");

  // If there is an active link, remove the 'active' class
  if (activeLink.classList.contains("active")) {
    activeLink.classList.remove("active");
  }

  // Add the 'active' class to the clicked link
  const clickedLink = e.currentTarget;
  clickedLink.classList.add("active");
}

// sticky navbar function
window.addEventListener("scroll", () => {
  const header = document.getElementById("navbar");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    autoplaySpeed: 2000,
    infinite: true,
    autoplay: true,
    rtl: $("html").attr("dir") === "rtl",
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
