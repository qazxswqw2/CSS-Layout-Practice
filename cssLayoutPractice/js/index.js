// alert("at 1:45:45");

var menuTitles = document.querySelectorAll('.m-menu-title')
for (let i = 0; i < menuTitles.length; i++) {
  menuTitles[i].onclick = function () {
    var menu = this.parentElement
    menu.classList.toggle('m-menu-selected')
    if (menu.className.includes('m-menu-selected')) {
      // menu open
      var arrow = this.querySelector('[class*="fa-angle"]')
      arrow.className = 'fa fa-angle-up'
    } else {
      // menu closed
      var arrow = this.querySelector('[class*="fa-angle"]')
      arrow.className = 'fa fa-angle-down'
    }
  }
}

var bar = document.querySelector('.u-bar')
var sider = document.querySelector('.g-ant-sider')
var menus = document.querySelectorAll('.m-menu')
bar.onclick = function () {
  sider.classList.toggle('g-ant-sider-closed')
  // menus[0].classList.add('m-menu-selected')
  // menus[0].querySelector('[class*="fa-angle"]').className = 'fa fa-angle-up'
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.remove('m-menu-selected')
    menus[i].querySelector('[class*="fa-angle"]').className = 'fa fa-angle-down'
  }
}

var setting = document.querySelector('.m-setting')
var settingBar = document.querySelector('.m-setting-bar')
settingBar.onclick = () => {
  setting.classList.toggle('m-setting-open')
  if (setting.className.includes('m-setting-open')) {
    var icon = setting.querySelector('i')
    icon.className = 'fa fa-window-close'
  } else {
    var icon = setting.querySelector('i')
    icon.className = 'fa fa-screwdriver'
  }
}

var themes = document.querySelectorAll('.m-setting-theme>li')
for (var i = 0; i < themes.length; i++) {
  themes[i].onclick = function () {
    for (var i = 0; i < themes.length; i++) {
      themes[i].innerHTML = ''
    }
    this.innerHTML = '<i class="fa fa-check"></i>'
    var color = getComputedStyle(this).background
    document.documentElement.style.setProperty('--theme', color)
  }
}

var headerFix = document.querySelector('.j-header-fix')
var sideFix = document.querySelector('.j-side-fix')
var headerShow = document.querySelector('.j-header-show')
var sideShow = document.querySelector('.j-side-show')
var mainHead = document.querySelector('.g-ant-main-head')
var siderWrap = document.querySelector('.g-ant-sider-wrap')

headerFix.onclick = function () {
  this.classList.toggle('u-switch-close')
  mainHead.classList.toggle('g-ant-main-head-fixed')
}
sideFix.onclick = function () {
  this.classList.toggle('u-switch-close')
  siderWrap.classList.toggle('g-ant-sider-wrap-fixed')
}
headerShow.onclick = function () {
  this.classList.toggle('u-switch-close')
  mainHead.classList.toggle('hide')
}
sideShow.onclick = function () {
  this.classList.toggle('u-switch-close')
  sider.classList.toggle('hide')
}

var bar2 = document.querySelector('.m-logo2 .u-bar')
var mask = document.querySelector('.g-ant-sider + .u-mask')
bar2.onclick = function () {
  if (!sider.className.includes('hide')) {
    sider.classList.add('show')
  }
}
mask.onclick = function () {
  sider.classList.remove('show')
}
