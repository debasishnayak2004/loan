const button = document.getElementById("toggleMore");
const rows = document.querySelectorAll(".extra-row");
let visibleRows = 0;

button.addEventListener("click", () => {
  if (visibleRows < rows.length) {
    rows[visibleRows].classList.remove("d-none"); // Show next row
    visibleRows++;
    if (visibleRows === rows.length) {
      button.textContent = "Show Less"; // Change button when all rows visible
    }
  } else {
    // Hide all extra rows
    rows.forEach(row => row.classList.add("d-none"));
    visibleRows = 0;
    button.textContent = "Many More";
  }
});

// Scroll to Top Button start
window.addEventListener("scroll", function() {
    let btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Smooth scroll to top
  document.getElementById("scrollTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
// Scroll to Top Button end