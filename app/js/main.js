const swiper = new Swiper(".swiper", {
  loop: false,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
});

$(function () {
  $(".questions__item-title").on("click", function () {
    $(".questions__item").removeClass("questions__item--active");
    $(this).parent().addClass("questions__item--active");
  });
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: ".page-section",
    scrollOverflow: true,
    menu: "#header__nav",
    anchors: [
      "top",
      "products",
      "benefits",
      "specification",
      "questions",
      "contacts",
    ],
  });
  $(".menu__btn").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu__list").toggleClass("menu__list--active");
  });

  $(".menu__list-link").on("click", function () {
    $(".menu__btn").removeClass("menu__btn--active");
    $(".menu__list").removeClass("menu__list--active");
  });
});
