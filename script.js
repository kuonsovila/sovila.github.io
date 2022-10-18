$(document).ready(function () {
  $("button").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        8000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
// window.scrollTo({
//   top: 1000,
//   behavior: "instant",
// });
