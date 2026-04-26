console.log("JS LOADED");

document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE MENU
  ========================= */
  window.toggleMenu = function () {
    let nav = document.getElementById("navLinks");
    if (nav) nav.classList.toggle("show");
  };


  /* =========================
     NAVIGATION
  ========================= */
  window.goTo = function (page) {
    window.location.href = page;
  };

  window.bookNow = function () {
    window.location.href = "booking.html";
  };


  /* =========================
     FORM VALIDATION
  ========================= */
  window.validateForm = function () {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if (!name || !email || !message) return true;

    if (name.value === "" || email.value === "" || message.value === "") {
      alert("Please fill all fields!");
      return false;
    }

    alert("Message sent successfully!");
    return true;
  };


  /* =========================
     SIMPLE IMAGE SLIDER
  ========================= */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  index = (index + 1) % slides.length;
}, 4000);

  /* =========================
     LIVE SEARCH (CARDS)
  ========================= */
  let liveSearch = document.getElementById("liveSearch");

  if (liveSearch) {
    liveSearch.addEventListener("keyup", function () {
      let val = this.value.toLowerCase();
      let cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(val)
          ? "block"
          : "none";
      });
    });
  }


  /* =========================
     DESTINATION GRID LOAD
  ========================= */
  function loadImages() {
    let grid = document.getElementById("destGrid");
    if (!grid) return;

    for (let i = 1; i <= 6; i++) {
      let card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="https://picsum.photos/400/300?random=${i}" />
        <h3>Destination ${i}</h3>
      `;

      grid.appendChild(card);
    }
  }

  loadImages();


  /* =========================
     SEARCH WITH BOOKING
  ========================= */
  const places = [
    {
      name: "Goa",
      price: "₹8999",
      rating: "⭐ 4.5",
      location: "India",
      img: "https://picsum.photos/100/80?goa",
      page: "booking.html"
    },
    {
      name: "Bali",
      price: "₹19999",
      rating: "⭐ 4.8",
      location: "Indonesia",
      img: "https://picsum.photos/100/80?bali",
      page: "booking.html"
    },
    {
      name: "Paris",
      price: "₹45999",
      rating: "⭐ 5.0",
      location: "Europe",
      img: "https://picsum.photos/100/80?paris",
      page: "booking.html"
    },
    {
      name: "Dubai",
      price: "₹25999",
      rating: "⭐ 4.7",
      location: "UAE",
      img: "https://picsum.photos/100/80?dubai",
      page: "booking.html"
    }
  ];

  const input = document.getElementById("aiSearch");
  const box = document.getElementById("suggestions");

  let currentIndex = -1;
  let results = [];

  if (input && box) {

    input.addEventListener("input", function () {
      let val = this.value.toLowerCase();
      box.innerHTML = "";
      currentIndex = -1;

      if (!val) return;

      results = places.filter(p =>
        p.name.toLowerCase().includes(val) ||
        p.location.toLowerCase().includes(val)
      );

      // 🔥 TOP RESULT
      let bestMatch = places.find(p =>
        p.name.toLowerCase().startsWith(val)
      );

      if (bestMatch) {
        let top = document.createElement("div");
        top.classList.add("suggestion-item");
        top.style.background = "#ffeaa7";

        top.innerHTML = `
          <img src="${bestMatch.img}">
          <div>
            🔥 <strong>${bestMatch.name}</strong> (${bestMatch.location})<br>
            <small>${bestMatch.price} | ${bestMatch.rating}</small>
          </div>
        `;

        top.onclick = () => selectPlace(bestMatch);
        box.appendChild(top);
      }

      // NORMAL RESULTS
      results.forEach(place => {
        let div = document.createElement("div");
        div.classList.add("suggestion-item");

        div.innerHTML = `
          <img src="${place.img}">
          <div>
            <strong>${place.name}</strong> (${place.location})<br>
            <small>${place.price} | ${place.rating}</small>
          </div>
        `;

        div.onclick = () => selectPlace(place);
        box.appendChild(div);
      });
    });


    /* SELECT FUNCTION */
    function selectPlace(place) {
      localStorage.setItem("selectedPlace", JSON.stringify(place));
      window.location.href = "booking.html";
    }


    /* KEYBOARD SUPPORT */
    input.addEventListener("keydown", function (e) {
      let items = document.querySelectorAll(".suggestion-item");

      if (e.key === "ArrowDown") {
        currentIndex++;
        if (currentIndex >= items.length) currentIndex = 0;
        highlight(items);
      }

      else if (e.key === "ArrowUp") {
        currentIndex--;
        if (currentIndex < 0) currentIndex = items.length - 1;
        highlight(items);
      }

      else if (e.key === "Enter") {
        e.preventDefault();

        if (currentIndex >= 0) {
          items[currentIndex].click();
        } else if (results.length > 0) {
          selectPlace(results[0]);
        }
      }
    });


    function highlight(items) {
      items.forEach(item => item.style.background = "");

      if (items[currentIndex]) {
        items[currentIndex].style.background = "#dfe6e9";
      }
    }
  }


  /* =========================
     CONTACT FORM
  ========================= */
  window.submitForm = function () {
    alert("Message sent successfully!");
    return false;
  };

});
// ✅ GLOBAL FUNCTION (IMPORTANT)
function openModal() {
  document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {

  // SLIDER
  let slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);

});

// NAVIGATION
function goTo(page) {
  alert("Redirecting to " + page);
}

// MODAL
function openModal() {
  document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

function confirmBooking() {
  alert("Booking Confirmed 🎉");
  closeModal();
}

// SUBSCRIBE
function subscribe() {
  let email = document.getElementById("emailBox").value;

  if (email === "") {
    alert("Enter email");
  } else {
    alert("Subscribed successfully ✅");
  }
}

// SOCIAL LINKS
function social(platform) {
  if (platform === "facebook") {
    window.open("https://facebook.com", "_blank");
  }
  if (platform === "instagram") {
    window.open("https://instagram.com", "_blank");
  }
  if (platform === "twitter") {
    window.open("https://twitter.com", "_blank");
  }
  if (platform === "whatsapp") {
    window.open("https://wa.me/919999999999", "_blank");
  }
}
function goTo(page) {
  window.location.href = page;
}

function filterDest() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display =
      card.innerText.toLowerCase().includes(input) ? "block" : "none";
  });
}