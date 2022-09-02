// Expand buttons

let aboutCPS = document.querySelector('.about-cps__text')
let expandCPSButton = document.querySelector('.about-cps__read-more')
let expandCPSText = document.querySelector('.read-more__expand-description')

expandCPSButton.addEventListener('click', function () {
  if (aboutCPS.classList.contains('about-cps__text--expanded')) {
    aboutCPS.classList.remove('about-cps__text--expanded')
    expandCPSButton.classList.remove('about-cps__read-more--rotated')
    expandCPSText.textContent = 'Читать далее'
  } else {
    aboutCPS.classList.add('about-cps__text--expanded')
    expandCPSButton.classList.add('about-cps__read-more--rotated')
    expandCPSText.textContent = 'Скрыть'
  }
})

let brandsList = document.querySelector('.brands-repair__list')
let expandBrandsButton = document.querySelector('.brands-repair__expand-button')
let expandBrandsText = document.querySelector(
  '.brands-repair__expand-description'
)

expandBrandsButton.addEventListener('click', function () {
  if (brandsList.classList.contains('brands-repair__list--expanded')) {
    brandsList.classList.remove('brands-repair__list--expanded')
    expandBrandsButton.classList.remove('brands-repair__expand-button--rotated')
    expandBrandsText.textContent = 'Показать все'
  } else {
    brandsList.classList.add('brands-repair__list--expanded')
    expandBrandsButton.classList.add('brands-repair__expand-button--rotated')
    expandBrandsText.textContent = 'Скрыть'
  }
})

let devicesList = document.querySelector('.devices-repair__list')
let expandDevicesButton = document.querySelector(
  '.devices-repair__expand-button'
)
let expandDevicesText = document.querySelector(
  '.devices-repair__expand-description'
)

expandDevicesButton.addEventListener('click', function () {
  if (devicesList.classList.contains('devices-repair__list--expanded')) {
    devicesList.classList.remove('devices-repair__list--expanded')
    expandDevicesButton.classList.remove(
      'devices-repair__expand-button--rotated'
    )
    expandDevicesText.textContent = 'Показать все'
  } else {
    devicesList.classList.add('devices-repair__list--expanded')
    expandDevicesButton.classList.add('devices-repair__expand-button--rotated')
    expandDevicesText.textContent = 'Скрыть'
  }
})

// Sidebar

let sidebar = document.querySelector('.sidebar')
let rightContainer = document.querySelector('.right-container')
let burger = document.querySelector('.header__main-nav button')
let closeButton = document.querySelector('.sidebar-header__left-group button')

burger.addEventListener('click', function () {
  sidebar.classList.add('sidebar--shown')
  rightContainer.style.maxHeight = '100vh'
  rightContainer.style.overflow = 'hidden'
})

closeButton.addEventListener('click', function () {
  sidebar.classList.remove('sidebar--shown')
  rightContainer.style.maxHeight = 'none'
  rightContainer.style.overflow = 'visible'
})

sidebar.addEventListener('click', function (evt) {
  if (
    !evt.target.classList.contains('sidebar__content') &&
    !evt.target.closest('.sidebar__content')
  ) {
    sidebar.classList.remove('sidebar--shown')
    rightContainer.style.maxHeight = 'none'
    rightContainer.style.overflow = 'visible'
  }
})

// Feedback

let feedback = document.querySelector('.feedback')
let feedbackHeaderButton = document.querySelector(
  '.options__personal-options .header__item:nth-child(2) button'
)
let feedbackSidebarButton = document.querySelector(
  '.sidebar-footer__options .sidebar-footer__item:nth-child(2) button'
)
let feedbackCloseButton = document.querySelector('.feedback > * > button')

feedbackHeaderButton.addEventListener('click', function () {
  feedback.classList.add('modal--shown')
  rightContainer.style.maxHeight = '100vh'
  rightContainer.style.overflow = 'hidden'
})

feedbackSidebarButton.addEventListener('click', function () {
  feedback.classList.add('modal--shown')
  rightContainer.style.maxHeight = '100vh'
  rightContainer.style.overflow = 'hidden'
})

feedbackCloseButton.addEventListener('click', function () {
  feedback.classList.remove('modal--shown')
  rightContainer.style.maxHeight = 'none'
  rightContainer.style.overflow = 'visible'
  sidebar.style.maxHeight = 'none'
  sidebar.style.overflow = 'visible'
})

feedback.addEventListener('click', function (evt) {
  if (
    !evt.target.classList.contains('modal__content') &&
    !evt.target.closest('.modal__content')
  ) {
    feedback.classList.remove('modal--shown')
    rightContainer.style.maxHeight = 'none'
    rightContainer.style.overflow = 'visible'
    sidebar.style.maxHeight = 'none'
    sidebar.style.overflow = 'visible'
  }
})

// Call

let call = document.querySelector('.call')
let callHeaderButton = document.querySelector(
  '.options__personal-options .header__item:first-child button'
)
let callSidebarButton = document.querySelector(
  '.sidebar-footer__options .sidebar-footer__item:first-child button'
)
let callCloseButton = document.querySelector('.call > * > button')

callHeaderButton.addEventListener('click', function () {
  call.classList.add('modal--shown')
  rightContainer.style.maxHeight = '100vh'
  rightContainer.style.overflow = 'hidden'
})

callSidebarButton.addEventListener('click', function () {
  call.classList.add('modal--shown')
  rightContainer.style.maxHeight = '100vh'
  rightContainer.style.overflow = 'hidden'
})

callCloseButton.addEventListener('click', function () {
  call.classList.remove('modal--shown')
  rightContainer.style.maxHeight = 'none'
  rightContainer.style.overflow = 'visible'
  sidebar.style.maxHeight = 'none'
  sidebar.style.overflow = 'visible'
})

call.addEventListener('click', function (evt) {
  if (
    !evt.target.classList.contains('modal__content') &&
    !evt.target.closest('.modal__content')
  ) {
    call.classList.remove('modal--shown')
    rightContainer.style.maxHeight = 'none'
    rightContainer.style.overflow = 'visible'
    sidebar.style.maxHeight = 'none'
    sidebar.style.overflow = 'visible'
  }
})
