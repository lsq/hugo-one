new SmoothScroll('a[href*="#"]', {
  speed: 800,
  offset: 60,
  clip: true,
  updateURL: true,
});

const $burger = document.getElementById('navbar-burger')
const $menu = document.getElementById('navbar-menu')

$burger.addEventListener('click', function () {
  if ($menu.classList.contains('active')) {
    $menu.classList.remove('active')
    $burger.classList.remove('active')
  } else {
    $menu.classList.add("active")
    $burger.classList.add('active')
  }
})

$(document).on('click', '.taxonomies-item', function (e) {
  e.preventDefault()
  let a = $(this).find('a')
  let $this = $(this)
  $.ajax({
    type: "GET",
    url: a.attr('href'),
    success: function (data) {
      $this.addClass('active').siblings().removeClass('active')
      let res = $(data).find(".taxonomy")
      $('.taxonomies-content').html('').append(res)
    },
    error: function (e) {
      console.log(e)
    }
  })
})

$('.highlight').prepend('<button class="btn btn-sm btn-copy">copy</button>')

new ClipboardJS(".btn-copy", {
  target: function(trigger) {
    return trigger.nextElementSibling;
  }
});

$(document).on('click', '.btn-search', function (e) {
  e.preventDefault()
  let $id = $(this).data('target')
  $($id).addClass('modal-active')
})

$(document).on('click', '.modal-close', function (e) {
  e.preventDefault()
  $(this).parents('.modal').removeClass('modal-active')
})