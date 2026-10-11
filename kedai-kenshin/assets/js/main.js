/* KEDAI KENSHIN — site interactions */
(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var nav = document.getElementById("siteNav");
  var toggle = document.getElementById("navToggle");

  /* ---- sticky header state ---- */
  var onScroll = function () {
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- mobile nav ---- */
  var closeNav = function () {
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeNav();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  /* ---- reveal on scroll ---- */
  var targets = document.querySelectorAll(
    ".section-head, .concept-card, .menu-card, .ig-grid, .info-row, .access-info, .access-map"
  );
  Array.prototype.forEach.call(targets, function (el) {
    el.classList.add("reveal");
  });

  var revealAll = function () {
    Array.prototype.forEach.call(targets, function (el) {
      el.classList.add("is-visible");
    });
  };

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    Array.prototype.forEach.call(targets, function (el) {
      io.observe(el);
    });
    // Safety net: if the observer never fires (tab restored from bg,
    // print, reduced-motion tooling, etc.) make sure nothing stays hidden.
    window.addEventListener("load", function () {
      setTimeout(revealAll, 1800);
    });
  } else {
    revealAll();
  }

  /* ---- year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
