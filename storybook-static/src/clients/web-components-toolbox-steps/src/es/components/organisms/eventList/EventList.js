// @ts-check
import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'
// fetch modules / Shadow:Line 604
import(
  '../../molecules/eventCard/EventCard.js'
  // @ts-ignore
).then((module) => customElements.define('m-steps-event-card', module.default))

/**
 * EventList
 * An example at: src/es/components/pages/Spielplan.html
 *
 * @export
 * @class EventList
 * @type {CustomElementConstructor}
 */

export default class EventList extends Shadow() {
  constructor (options = {}, ...args) {
    super({ importMetaUrl: import.meta.url, ...options }, ...args)
    this.events = []
    /**
     * @typedef {Object} Translations
     * @property {string} buttonTickets - The translation for the "Tickets" button.
     * @property {string} linkDetails - The translation for the "Mehr Details" link.
     * @property {string} soldOut - The translation for the "ausverkauft" message indicating sold-out status.
     * @property {string} timeSuffix - The translation for the suffix added to time values, e.g., "Uhr".
     */
    /**
     * @type {Translations}
     */
    this.translations = {
      buttonTickets: '',
      linkDetails: '',
      soldOut: '',
      timeSuffix: ''
    }

    this.answerEventNameListener = (event) => {
      // this.renderHTML('loading')
      /* event.detail.fetch.then(recipeData => {
        this.renderHTML(recipeData.items)
      }) */
      console.log('helloooo', event, event.detail)
    }

    this.eventsLoaded = false
    this.translationsLoaded = false
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()

    const dataEventsUrl = this.getAttribute('data-events')
    const dataTranslationsUrl = this.getAttribute('data-translations')

    const savedEventsData = localStorage.getItem('eventsData')
    const savedTranslationsData = localStorage.getItem('translationsData')

    const handleEventsResponse = (data) => {
      localStorage.setItem('eventsData', JSON.stringify(data.events))
      this.events = data.events
      this.eventsLoaded = true
      this.checkRenderHTML()
    }

    const handleTranslationsRepsonse = (data) => {
      localStorage.setItem('translationsData', JSON.stringify(data.translations))
      this.translations = data.translations
      this.translationsLoaded = true
      this.checkRenderHTML()
    }

    const handleError = (error) => {
      console.error(error)
    }

    // FYI: Andy preferred to always get the fetched data for debugging reasons, can be activated again later, although it should have a time limit or be sessionStorage
    /*if (savedEventsData) {
      this.events = JSON.parse(savedEventsData)
      this.eventsLoaded = true
    } else {*/
      fetch(dataEventsUrl)
        .then((response) => response.json())
        .then(handleEventsResponse)
        .catch(handleError)
    //}

    // FYI: Andy preferred to always get the fetched data for debugging reasons, can be activated again later, although it should have a time limit or be sessionStorage
    /*if (savedTranslationsData) {
      this.translations = JSON.parse(savedTranslationsData)
      this.translationsLoaded = true
    } else {*/
      fetch(dataTranslationsUrl)
        .then((response) => response.json())
        .then(handleTranslationsRepsonse)
        .catch(handleError)
    //}

    if (this.eventsLoaded && this.translationsLoaded) {
      this.renderHTML()
    }

    document.body.addEventListener(
      this.getAttribute('answer-event-name') || 'answer-event-name',
      this.answerEventNameListener
    )
  }

  checkRenderHTML () {
    if (this.eventsLoaded && this.translationsLoaded) {
      this.renderHTML()
    }
  }

  disconnectedCallback () {
    document.body.removeEventListener(
      this.getAttribute('answer-event-name') || 'answer-event-name',
      this.answerEventNameListener
    )
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
      :host {
        --button-secondary-width: 100%;
        --button-secondary-font-size: 1rem;
      }
      :host .event-list {
        border-bottom: 1px solid var(--steps-color-black);
        margin: 1.25rem 0;
      }
    `
  }

  renderHTML () {
    const eventHtml = this.events
      .map((event) => {
        const {
          choreographer,
          company,
          companyDetailPageUrl,
          eventDate,
          eventInformationIcons,
          location,
          presaleUrl,
          production,
          soldOut,
          theater,
          theaterInformationIcons
        } = event
        const eventIcons = JSON.stringify(eventInformationIcons)
        const theaterIcons = JSON.stringify(theaterInformationIcons)

        return /* html */ `<m-steps-event-card 
          choreographer="${choreographer}"
          company="${company}"
          companyDetailPageUrl="${companyDetailPageUrl}"
          eventDate="${eventDate}"
          eventInformationIcons='${eventIcons}'
          location="${location}"
          presaleUrl="${presaleUrl}"
          production="${production}"
          soldOut="${soldOut}"
          theater="${theater}"
          theaterInformationIcons='${theaterIcons}'
          textButtonTickets="${this.translations.buttonTickets}"
          textLinkDetails="${this.translations.linkDetails}"
          textSoldOut="${this.translations.soldOut}"
          textTimeSuffix="${this.translations.timeSuffix}"
        ></m-steps-event-card>`
      })
      .join('')

    this.html = /* html */ `
      <div class="event-list">
        ${eventHtml}
      </div>
    `
  }
}
