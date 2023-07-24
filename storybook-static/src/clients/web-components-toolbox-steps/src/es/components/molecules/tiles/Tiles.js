// @ts-check
import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

/**
 * Tiles
 * An example at: src/es/components/pages/Home.html
 *
 * @export
 * @class Tiles
 * @type {CustomElementConstructor}
 */

export default class Tiles extends Shadow() {
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
        padding-bottom: var(--component-spacing);
      }
      
      :host .tiles__wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      :host .tiles__tile {
        width: 48%;
        height: 350px;
        margin-right: 1rem;
        margin-bottom: 1rem;
        position: relative;
        overflow: hidden;
        color: var(--steps-color-white);
      }

      :host .tiles__title {
        position: absolute;
        top: 0.5rem;
        left: 2rem;
      }

      @media (max-width: 768px) {
        :host .tiles__wrapper {
          flex-direction: column;
        }

        :host .tiles__tile {
          width: 100%;
          margin-right: 0;
          margin-bottom: 1rem;
        }
      }
    `
  }
}
