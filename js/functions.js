$(function () {
  $('#header .wrapper').on('click', function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('#projects').offset().top,
      },
      1000,
    )
  })
})
