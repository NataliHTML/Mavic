const swiper = new Swiper(".swiper", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
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
  });
});
