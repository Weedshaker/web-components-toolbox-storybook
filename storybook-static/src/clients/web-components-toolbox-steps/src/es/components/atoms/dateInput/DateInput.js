// @ts-check
import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

/**
 * DateInput
 * An example at: src/es/components/pages/Spielplan.html
 *
 * @export
 * @class DateInput
 * @type {CustomElementConstructor}
 */

export default class DateInput extends Shadow() {
  constructor (options = {}, ...args) {
    super({ importMetaUrl: import.meta.url, ...options }, ...args)
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) {
      this.renderCSS()
    }
    this.renderHTML()
  }

  /**
     * evaluates if a render is necessary
     *
     * @return {boolean}
     */
  shouldRenderCSS () {
    return !this.root.querySelector(
            `:host > style[_css], ${this.tagName} > style[_css]`
    )
  }

  renderCSS () {
    this.css = /* css */ `
        :host .date-input {
            background-color: transparent;
            border-radius: var(--border-radius, 0.5em);
            border: 2px solid black;
            color: var(--color, black);
            cursor: pointer;
            font-family: var(--font-family, unset);
            font-size: var(--font-size, 1em);
            font-weight: var(--font-weight, 400);
            line-height: var(--line-height, 1.5em);
            margin: 0 1.25rem 1.25rem 0;
            outline: var(--outline, none);
            padding: var(--button-secondary-padding, calc(0.75em - var(--border-width, 0px)) calc(1.5em - var(--border-width, 0px)));
            position: relative;
            touch-action: manipulation;
            transition: var(--transition, background-color 0.3s ease-out, border-color 0.3s ease-out, color 0.3s ease-out);
            min-width: 200px;
        }
        :host .date-input::placeholder {
            color: var(--color, black);
        }
        :host .date-input::-webkit-calendar-picker-indicator {
            color: transparent;
            background: none;
            z-index: 1;
        }
    `
  }

  renderHTML () {
    const input = document.createElement('input')
    const calendarIndicator = ' → 📅'

    input.id = 'steps-event-date-picker'
    input.className = 'date-input'
    input.name = input.id
    input.type = 'text'

    input.onfocus = () => {
      if (input.value) {
        const dateValue = input.value.replace(calendarIndicator, '')
        const parts = dateValue.split('.')
        const formattedDate = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`
        input.value = formattedDate
      }
      input.type = 'date'
      input.showPicker()
    }

    input.onblur = () => {
      input.type = 'text'
    }

    input.onchange = () => {
      if (input.value) {
        const formattedDate = new Date(input.value).toLocaleDateString('de-CH')
        input.blur()
        input.value = formattedDate + calendarIndicator
      }
      if (!input.value) {
        input.blur()
      }
    }

    if (this.hasAttribute('min')) {
      input.setAttribute('min', this.getAttribute('min'))
    }

    if (this.hasAttribute('max')) {
      input.setAttribute('max', this.getAttribute('max'))
    }

    if (this.hasAttribute('placeholder')) {
      input.setAttribute('placeholder', this.getAttribute('placeholder') + calendarIndicator)
    }

    this.html = input
  }
}
