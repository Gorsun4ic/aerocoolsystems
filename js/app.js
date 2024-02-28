(() => {
  // src/js/files/functions.js
  function burger() {
    const burger2 = document.querySelector(".burger");
    if (burger2) {
      const menu = document.querySelector(".menu");
      burger2.addEventListener("click", function(e) {
        document.body.classList.toggle("_lock");
        burger2.classList.toggle("_active");
        menu.classList.toggle("_active");
        document.documentElement.classList.toggle("menu-open");
      });
    }
  }
  function accordions() {
    const accordion = document.querySelectorAll(".accordion__item");
    accordion.forEach((item, index) => {
      let label = item.querySelector(".accordion__label");
      label.addEventListener("click", () => {
        item.classList.toggle("active");
        let content = item.querySelector(".accordion__content");
        if (item.classList.contains("active")) {
          content.style.height = `${content.scrollHeight}px`;
        } else {
          content.style.height = "0px";
        }
        removeOpen(index);
      });
    });
    function removeOpen(index1) {
      accordion.forEach((item2, index2) => {
        if (index1 != index2) {
          item2.classList.remove("active");
          let content = item2.querySelector(".accordion__content");
          content.style.height = "0px";
        }
      });
    }
  }

  // src/js/app.js
  burger();
  accordions();
})();
