document.addEventListener("DOMContentLoaded", () => {

 function setActiveNav() {
    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
      currentPage = "index.html";
    }

   
    document.querySelectorAll(".nav-link").forEach(link => {
      const href = link.getAttribute("href");

      if (href === currentPage) {
        link.classList.add("active");
      }
    });

    
    document.querySelectorAll(".dropdown-item").forEach(item => {
      const href = item.getAttribute("href");

      if (href === currentPage) {
        item.classList.add("active");

        
        const parentDropdown = item.closest(".dropdown");
        if (parentDropdown) {
          const parentLink = parentDropdown.querySelector(".nav-link");
          if (parentLink) {
            parentLink.classList.add("active");
          }
        }
      }
    });
  }


  function loadHTML(id, file, callback) {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = data;

        if (callback) callback();
      })
      .catch(err => console.error("Error loading:", file, err));
  }

  
  loadHTML("navbar", "navbar.html", setActiveNav);
  loadHTML("footer", "footer.html");

  const panels = document.querySelectorAll(".panel");
  const layers = document.querySelectorAll(".bg-layer");

  panels.forEach(panel => {
    panel.addEventListener("mouseenter", () => {
      const index = panel.dataset.bg;

      layers.forEach(layer => layer.classList.remove("active"));

      const target = document.querySelector(".bg" + index);
      if (target) target.classList.add("active");
    });
  });










  

});