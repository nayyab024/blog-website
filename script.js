const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slide-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-bar");
const searchInput = searchBox.querySelector("input"); // input field
const cards = document.querySelectorAll(".card"); // all blog/project cards

// Toggle search bar
searchIcon.addEventListener("click", function () {
  if (searchBox.style.display === "block") {
    searchBox.style.display = "none";
  } else {
    searchBox.style.display = "block";
    searchInput.focus();
  }
});

// Live search functionality
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchTerm) || desc.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

    
  });


  

});


