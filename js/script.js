window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

var slides = [
  "managementTool",
  "claimsWorkflow",
  "clientPortal",
  "motorInsurance",
  "coreProcesses",
  "lightVersion",
];
var slidesBubbles = [
  "bubble-managementTool",
  "bubble-claimsWorkflow",
  "bubble-clientPortal",
  "bubble-motorInsurance",
  "bubble-coreProcesses",
  "bubble-lightVersion",
];
var slideIndex = [1, 1, 1, 1, 1, 1];
showDivs(slideIndex[0], 0);
showDivs(slideIndex[1], 1);
showDivs(slideIndex[2], 2);
showDivs(slideIndex[3], 3);
showDivs(slideIndex[4], 4);
showDivs(slideIndex[5], 5);

function plusDivs(n, index) {
  showDivs((slideIndex[index] += n), index);
}

function currentDiv(n, index) {
  showDivs((slideIndex[index] = n), index);
}

function showDivs(n, index) {
  var i;
  var x = document.getElementsByClassName(slides[index]);
  var dots = document.getElementsByClassName(slidesBubbles[index]);
  if (n > x.length) {
    slideIndex[index] = 1;
  }
  if (n < 1) {
    slideIndex[index] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-grey", "");
  }
  x[slideIndex[index] - 1].style.display = "block";
  dots[slideIndex[index] - 1].className += " w3-grey";
}
