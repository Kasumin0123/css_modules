class Pager {
  constructor() {
    this.links = document.querySelectorAll('.pager__link')
    this._init()
  }
  _init() {
    this.currentPage = this.links[2]
    this.currentPage.classList.add('pager__link--active')
    this.links.forEach((link) =>
      link.addEventListener('click', this.changePage.bind(this)),
    )
  }
  changePage(e) {
    this.currentPage.classList.remove('pager__link--active')
    e.target.classList.add('pager__link--active')
    this.currentPage = e.target
  }
}

class Accordion {
  constructor() {
    this.btnEls = document.querySelectorAll('.accordion__btn')
    this.bodyEls = document.querySelectorAll('.accordion__body')
    this._init()
  }
  _init() {
    this.btnEls.forEach((btnEl, index) =>
      btnEl.addEventListener('click', () => {
        this._toggle(index)
        btnEl.blur()
      }),
    )
  }
  _toggle(index) {
    this.btnEls[index].classList.toggle('accordion__btn--active')
    this.bodyEls[index].classList.toggle('accordion__body--active')
  }
}

new Accordion()
