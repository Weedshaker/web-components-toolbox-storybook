// @ts-check
import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

/**
 * Stage
 * An example at: src/es/components/pages/Home.html
 *
 * @export
 * @class Stage
 * @type {CustomElementConstructor}
 */

export default class Stage extends Shadow() {
  constructor (options = {}, ...args) {
    super({ importMetaUrl: import.meta.url, ...options }, ...args)
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
  }

  /**
   * evaluates if a render is necessary
   *
   * @return {boolean}
   */
  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`
      :host {
        position: relative;
        --content-spacing: 0;
        padding-bottom: var(--component-spacing);
      }

      :host .stage__overlay {
        background-color: var(--steps-color-black);
        opacity: 0.5;
        z-index: 20;
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      :host .stage__content {
        z-index: 30;
        display: flex;
        flex-direction: column;
      }

      :host .stage__content h2 {
        font-size: var(--h1-font-size);
        font-weight: 400;
        color: var(--steps-color-white);
        text-align: center;
        margin: 0;
      }

      :host .stage__content span {
        font-size: var(--h1-font-size);
        font-weight: 400;
        color: var(--steps-color-white);
        text-align: center;
        display: inline-block;
      }

      :host .stage__content span + a-button {
        margin-top: 2.0rem;
      }

      @media (max-width: 768px) {
        :host .stage__content h2,
        :host .stage__content span {
          font-size: 2.4rem;
        }

        :host .stage__content span + a-button {
          margin-top: 1.2rem;
        }
      }
    `
  }
}
