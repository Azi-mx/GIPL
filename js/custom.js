$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

$(document).ready(function () {
  $(".menu-icon #check").click(function () {
    if ($(".header,html,body").hasClass("is-active")) {
      $(".header,html,body").removeClass("is-active");
    } else {
      $(".header, html,body").addClass("is-active");
    }
  });
});

// Modal start

const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach((elem) => {
  elem.addEventListener("click", (event) =>
    toggleModal(event.currentTarget.getAttribute("data-modal-target"))
  );
});
modalCloseButtons.forEach((elem) => {
  elem.addEventListener("click", (event) =>
    toggleModal(event.currentTarget.closest(".modal").id)
  );
});
modals.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    if (event.currentTarget === event.target)
      toggleModal(event.currentTarget.id);
  });
});

// Close Modal with "Esc"...
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
    toggleModal(document.querySelector(".modal.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if (getComputedStyle(modal).display === "flex") {
    modal.classList.add("modal-hide");
    setTimeout(() => {
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";
    }, 200);
  } else {
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}
var currentPage = 0;

$(document).ready(function () {
  $(".msidebar-year").click(function () {
    var year = $(this).data("year");
    $(".msidebar-year").removeClass("active-year");
    $(this).addClass("active-year");
    $(".scene").hide(); // Hide all books
    $("#book-" + year).show(); // Show the selected book
  });

  $(".book").on("click", ".active", nextPage).on("click", ".flipped", prevPage);

  var hammertime = new Hammer($(".book")[0]);
  hammertime.on("swipeleft", nextPage);
  hammertime.on("swiperight", prevPage);

  function prevPage() {
    $(".flipped")
      .last()
      .removeClass("flipped")
      .addClass("active")
      .siblings(".page")
      .removeClass("active");
  }

  function nextPage() {
    $(".active")
      .removeClass("active")
      .addClass("flipped")
      .next(".page")
      .addClass("active")
      .siblings();
  }
});

// Modal End

// Vishal js started here

// Portfolio started here

var previous = document.getElementById("btnUniquePrevious");
var next = document.getElementById("btnUniqueNext");
var gallery = document.getElementById("unique-image-gallery");
var pageIndicator = document.getElementById("unique-page");
var galleryDots = document.getElementById("unique-gallery-dots");

var images = [
  { source: "images/portfolio/p1.svg" },
  { source: "images/portfolio/p2.svg" },
  { source: "images/portfolio/p3.svg" },
  { source: "images/portfolio/p4.svg" },
];

// Repeat the images across 5 pages
var repeatedImages = [];
for (var i = 0; i < 5; i++) {
  repeatedImages = repeatedImages.concat(images);
}

var perPage = 4; // 4 images per page (2 rows, 2 columns)
var page = 1;
var pages = Math.ceil(repeatedImages.length / perPage);

// Create gallery dots
for (var i = 0; i < pages; i++) {
  var dot = document.createElement("button");
  var dotSpan = document.createElement("span");
  var dotNumber = document.createTextNode(i + 1);
  dot.classList.add("unique-gallery-dot");
  dot.setAttribute("data-index", i);
  dotSpan.classList.add("unique-sr-only");

  dotSpan.appendChild(dotNumber);
  dot.appendChild(dotSpan);

  dot.addEventListener("click", function (e) {
    var self = e.target;
    goToPage(self.getAttribute("data-index"));
  });

  galleryDots.appendChild(dot);
}

// Previous Button
previous.addEventListener("click", function () {
  if (page === 1) {
    page = 1;
  } else {
    page--;
    showImages();
  }
});

// Next Button
next.addEventListener("click", function () {
  if (page < pages) {
    page++;
    showImages();
  }
});

// Jump to page
function goToPage(index) {
  index = parseInt(index);
  page = index + 1;
  showImages();
}

// Load images and display them
function showImages() {
  while (gallery.firstChild) gallery.removeChild(gallery.firstChild);

  var offset = (page - 1) * perPage;
  var dots = document.querySelectorAll(".unique-gallery-dot");

  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[page - 1].classList.add("active");

  for (var i = offset; i < offset + perPage; i++) {
    if (repeatedImages[i]) {
      var template = document.createElement("div");
      // var title = document.createElement('p');
      // var titleText = document.createTextNode(repeatedImages[i].title);
      var img = document.createElement("img");

      template.classList.add("unique-template");
      img.setAttribute("src", repeatedImages[i].source);
      // img.setAttribute('alt', repeatedImages[i].title);

      // title.appendChild(titleText);
      template.appendChild(img);
      // template.appendChild(title);
      gallery.appendChild(template);
    }
  }

  // Animate images
  var galleryItems = document.querySelectorAll(".unique-template");
  for (var i = 0; i < galleryItems.length; i++) {
    var onAnimateItemIn = animateItemIn(i);
    setTimeout(onAnimateItemIn, i * 100);
  }

  function animateItemIn(i) {
    var item = galleryItems[i];
    return function () {
      item.classList.add("animate");
    };
  }

  // Update page indicator
  pageIndicator.textContent = "Page " + page + " of " + pages;
}

showImages();

// Portfolio end here

// Vishal js end here
