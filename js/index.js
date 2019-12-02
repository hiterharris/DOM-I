const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// ----- NAV BAR -----
const services = document.querySelector('a:nth-child(1)');
services.textContent = siteContent.nav["nav-item-1"];

const product = document.querySelector('a:nth-child(2)');
product.textContent = siteContent.nav["nav-item-2"];

const vision = document.querySelector('a:nth-child(3)');
vision.textContent = siteContent.nav["nav-item-3"];

const features = document.querySelector('a:nth-child(4)');
features.textContent = siteContent.nav["nav-item-4"];

const about = document.querySelector('a:nth-child(5)');
about.textContent = siteContent.nav["nav-item-5"];

const contact = document.querySelector('a:nth-child(6)');
contact.textContent = siteContent.nav["nav-item-6"];

// ----- HERO SECTION -----
const title = document.querySelector('h1');
title.textContent = siteContent.cta.h1;
// title.style.width = '40%';
// title.style.textAlign = 'center';


const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

const heroImg = document.querySelector('.cta img');
heroImg.src = siteContent.cta["img-src"];

// const navAnchor = document.querySelectorAll('a');
// navAnchor.forEach( item => item.style.color = 'green');

// ----- CONTENT SECTION -----

// Top Content
const topContentTitle = document.querySelectorAll('.top-content h4');
const topContentInfo = document.querySelectorAll('.top-content p');

  // Features Section
  const featuresTitle = topContentTitle[0];
  featuresTitle.textContent = siteContent["main-content"]["features-h4"];

  const featuresInfo = topContentInfo[0];
  featuresInfo.textContent = siteContent["main-content"]["features-content"];

  // About Section
  const aboutTitle = topContentTitle[1];
  aboutTitle.textContent = siteContent["main-content"]["about-h4"];

  const aboutInfo = topContentInfo[1];
  aboutInfo.textContent = siteContent["main-content"]["about-content"];

// Image Section
const contentImg = document.querySelector('.middle-img');
contentImg.src = siteContent["main-content"]["middle-img-src"];


// Bottom Content
const bottomContentTitle = document.querySelectorAll('.bottom-content h4');
const bottomContentInfo = document.querySelectorAll('.bottom-content p');

// Services
const servicesTitle = bottomContentTitle[0];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

const servicesInfo = bottomContentInfo[0];
servicesInfo.textContent = siteContent["main-content"]["services-content"];

// Product
const productTitle = bottomContentTitle[1];
productTitle.textContent = siteContent["main-content"]["product-h4"];

const productInfo = bottomContentInfo[1];
productInfo.textContent = siteContent["main-content"]["product-content"];

// Vison
const visionTitle = bottomContentTitle[2];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

const visionInfo = bottomContentInfo[2];
visionInfo.textContent = siteContent["main-content"]["vision-content"];

// ----- CONTACT SECTION -----
const contactTitle = document.querySelector('.contact h4');
const contactInfo = document.querySelectorAll('.contact p');

contactTitle.textContent = siteContent.contact["contact-h4"];

const address = contactInfo[0];
address.textContent = siteContent.contact.address;
address.style.width = '25%';

const phone = contactInfo[1];
phone.textContent = siteContent.contact.phone;

const email = contactInfo[2];
email.textContent = siteContent.contact.email;

// ---- FOOTER SECTION ----
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;