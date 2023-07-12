// @ts-check
import { Shadow } from '../../prototypes/Shadow.js'

/**
 * @export
 * @class UserProfile
 * @type {CustomElementConstructor}
 */
export default class UserProfile extends Shadow() {
  constructor (options = {}, ...args) {
    super({ importMetaUrl: import.meta.url, ...options }, ...args)
    this.clickListener = event => {
      const isInside = event.composedPath().includes(this)
      const isActive = this.menuDiv?.classList.contains('active')
      if (isInside || isActive) {
        this.menuDiv?.classList.toggle('active')
        this.profileImgDiv?.classList.toggle('active') 
      }
    }
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
    if (this.shouldRenderHTML()) this.renderHTML()
    document.body.addEventListener('click', this.clickListener)
  }

  disconnectedCallback () {
    document.body.removeEventListener('click', this.clickListener)
  }

  /**
   * evaluates if a render is necessary
   *
   * @return {boolean}
   */
  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  /**
   * evaluates if a render is necessary
   *
   * @return {boolean}
   */
  shouldRenderHTML () {
    return !this.profileImgDiv
  }

  /**
   * renders the css
   *
   * @return {Promise<void>}
   */
  renderCSS () {
    this.css = /* css */`
      :host {
         display:var(--display, block);
         position:var(--position, relative);
         width:var(--width, fit-content);
      }
      :host a {
        align-items: center;
        display:flex !important;
        flex-direction: row;
        margin:0 !important;
        text-decoration:none !important;
      }
      :host span {
        padding:var(--span-padding, 0);
      }
      :host .profile {
        background-color:var(--profile-background-color, black);
        border-radius:var(--profile-border-radius, 0);
        display:var(--profile-display, block);
        padding:var(--profile-padding, 0);
      }
      :host .profile:hover {
        background-color:var(--profile-background-color-hover, white);
        cursor: pointer;
      }
      :host .profile.active {
        background-color:var(--profile-background-color-active, red);
      }
      :host .profile img {
        height:var(--profile-img-height, auto); 
      }    
      :host .menu {
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid  #F5F5F5;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        opacity: 0;
        padding: 0;
        position: absolute;
        right: 0;
        top:3em;
        transition: visibility 100ms linear, opacity 100ms linear;
        visibility: hidden;
        width: max-content;
        z-index:9999;
      }
      :host .menu.active {
        opacity: 1;
        visibility: visible;
      }
      :host .menu ul {
        margin:0;
        padding:var(--menu-ul-padding, 0);
      }
      :host .menu ul li {
        border-top:var(--menu-li-border-top, none);
        list-style: none;
        padding:var(--menu-li-padding, 0);
      }
      @media only screen and (max-width: _max-width_) {
        :host {}
      }
    `
    return this.fetchTemplate()
  }

  /**
   * fetches the template
   *
   * @return {Promise<void>}
   */
  fetchTemplate () {
    /** @type {import("../../prototypes/Shadow.js").fetchCSSParams[]} */
    const styles = [
      {
        path: `${this.importMetaUrl}../../../../css/reset.css`, // no variables for this reason no namespace
        namespace: false
      },
      {
        path: `${this.importMetaUrl}../../../../css/style.css`, // apply namespace and fallback to allow overwriting on deeper level
        namespaceFallback: true
      }
    ]
    switch (this.getAttribute('namespace')) {
      case 'user-profile-default-':
        return this.fetchCSS([{
          path: `${this.importMetaUrl}./default-/default-.css`, // apply namespace since it is specific and no fallback
          namespace: false
        }, ...styles], false)
      default:
        return this.fetchCSS(styles, false)
    }
  }

  /**
   * renders the html
   *
   * @return {void}
   */
  renderHTML () {
    this.menuDiv = this.root.querySelector('.menu') || document.createElement('div')
    this.menuDiv.setAttribute('class', 'menu')
    const menuUL = document.createElement('ul')
    const linkNodes = [...this.root.childNodes].filter(c => c.nodeName === 'A')
    this.html = ''
    linkNodes.forEach(node => {
      const li = document.createElement('li')
      li.innerHTML = node.outerHTML
      menuUL.appendChild(li)
    })
    this.menuDiv.appendChild(menuUL)
    this.profileImgDiv = this.root.querySelector('.profile') || document.createElement('div')
    this.profileImgDiv.setAttribute('class', 'profile')
    const profileImg = document.createElement('img')
    profileImg.setAttribute('src', this.icon)
    this.profileImgDiv.appendChild(profileImg)
    this.html = this.profileImgDiv
    this.html = this.menuDiv
  }

  get icon () {
    return this.getAttribute('icon')
  }
}
