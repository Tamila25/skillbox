window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('active')

  })
  document.querySelector('#close-menu').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('active')
  })
})
