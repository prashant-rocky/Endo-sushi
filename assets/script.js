// ---------------- Cookie Consent ----------------
window.addEventListener('load', function () {
  if (window.cookieconsent) {
    window.cookieconsent.run({
      notice_banner_type: "simple",
      consent_type: "express",
      palette: "light",
      language: "en",
      page_load_consent_levels: ["strictly-necessary"],
      notice_banner_reject_button_hide: false,
      preferences_center_close_button_hide: false,
      page_refresh_confirmation_buttons: false,
      website_name: "Ichiran Ramen",
      website_privacy_policy_url: "https://github.com/" // replace with real URL
    });
  }
});

// menu swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // time in ms (3 seconds)
    disableOnInteraction: false, // keeps autoplay working even after user interaction
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
var swiper2 = new Swiper(".TmySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

const menuData = [

  {
    id: 1,
    name: "Toro (Fatty Tuna)",
    price: "¥600",
    description: "Melt-in-your-mouth fatty tuna, rich and flavorful.",
    image: "assets/images/product1.jfif"
  },
  {
    id: 2,
    name: "Ebi (Shrimp)",
    price: "¥350",
    description: "Sweet and tender shrimp, lightly seasoned.",
    image: "assets/images/product2.jpg"
  },
  {
    id: 3,
    name: "Tamago (Egg Omelet)",
    price: "¥200",
    description: "Soft, slightly sweet Japanese omelet on rice.",
    image: "assets/images/product3.jfif"
  },
  {
    id: 4,
    name: "Anago (Sea Eel)",
    price: "¥450",
    description: "Grilled eel glazed with a savory sauce.",
    image: "assets/images/product4.jfif"
  },
  {
    id: 5,
    name: "Tekka-Maki (Tuna Roll)",
    price: "¥300",
    description: "Classic roll filled with fresh lean tuna.",
    image: "assets/images/product5.jpg"
  },


  {
    id: 6,
    name: "Ika (Squid)",
    price: "¥350",
    description: "Delicately sweet, tender squid nigiri.",
    image: "assets/images/product6.webp"
  },
  {
    id: 7,
    name: "Uni (Sea Urchin)",
    price: "¥600",
    description: "Creamy and rich, a true delicacy.",
    image: "assets/images/product7.webp"
  },
  {
    id: 8,
    name: "Ikura (Salmon Roe)",
    price: "¥500",
    description: "Briny, jewel-like salmon roe with bold flavor.",
    image: "assets/images/product8.jpg"
  },
  {
    id: 9,
    name: "Shime-Saba (Marinated Mackerel)",
    price: "¥400",
    description: "Tangy, vinegared mackerel for a refreshing bite.",
    image: "assets/images/product9.webp"
  },
  {
    id: 10,
    name: "Toro-Taku (Fatty Tuna & Pickled Radish Roll)",
    price: "¥550",
    description: "Savory tuna balanced with crisp takuan.",
    image: "assets/images/product10.jfif"
  },

  //
  {
    id: 11,
    name: "Tai (Sea Bream)",
    price: "¥400",
    description: "Mild, delicate flavor with firm texture.",
    image: "assets/images/product11.jfif"
  },
  {
    id: 12,
    name: "Hokkigai (Surf Clam)",
    price: "¥450",
    description: "Slightly sweet with a satisfying chew.",
    image: "assets/images/product12.jpg"
  },
  {
    id: 13,
    name: "Hamachi (Yellowtail)",
    price: "¥500",
    description: "Buttery, rich flavor with smooth texture.",
    image: "assets/images/product13.jpg"
  },
  {
    id: 14,
    name: "Tairagai (Pen Shell Clam)",
    price: "¥500",
    description: "Tender, rare clam with subtle sweetness.",
    image: "assets/images/product14.jfif"
  },
  {
    id: 15,
    name: "Futomaki (Thick Sushi Roll)",
    price: "¥400",
    description: "Hearty roll filled with assorted ingredients.",
    image: "assets/images/product15.jfif"
  }
];

menuData.forEach(menuItem => {
  if(document.getElementById("menuSlide")){
  document.getElementById("menuSlide").innerHTML += `<div class="swiper-slide">
                        <div class="menuBox bg-white w-100 h-100 pb-2">
                            <div class="img-box mb-2">
                                <img src=${menuItem.image} alt="error" class="menuImg" height="50px" width="50px">
                            </div>
                            <h5><strong>${menuItem.name}</h5>
                            <p>${menuItem.description}</p>
                            <h3 class="mainColor">${menuItem.price}</h3>
                        </div>
                    </div>`;
  }
});
if(document.getElementById("bookingForm")){

  document.getElementById("bookingForm").addEventListener("submit", function (e) {
     e.preventDefault();
     this.classList.add("d-none");
     document.getElementById("thankYouBooking").classList.remove("d-none");
   });
 
   function resetBookingForm() {
     document.getElementById("bookingForm").reset();
     document.getElementById("thankYouBooking").classList.add("d-none");
     document.getElementById("bookingForm").classList.remove("d-none");
   }
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent actual submission
  document.getElementById("contactFormWrapper").classList.add("d-none");
  document.getElementById("thankYouCard").classList.remove("d-none");
});

function resetForm() {
  document.getElementById("contactForm").reset();
  document.getElementById("thankYouCard").classList.add("d-none");
  document.getElementById("contactFormWrapper").classList.remove("d-none");
}
