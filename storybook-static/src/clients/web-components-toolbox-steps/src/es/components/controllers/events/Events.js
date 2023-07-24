// @ts-check
/* global fetch */
/* global AbortController */
/* global location */
/* global sessionStorage */
/* global CustomEvent */
/* global history */
/* global self */

import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

/**
 * Events are retrieved via the corresponding endpoint as set as an attribute
 * As a controller, this component communicates exclusively through events
 * Example: https://www.alnatura.ch/rezepte
 *
 * @export
 * @class Events
 * @type {CustomElementConstructor}
 */
export default class Events extends Shadow() {
  constructor (options = {}, ...args) {
    super({
      importMetaUrl: import.meta.url,
      mode: 'false',
      ...options
    }, ...args)

    this.abortController = null
    this.requestListEventsListener = async event => {
      console.log('hooooooooi!', event.detail)
      if (this.abortController) this.abortController.abort()
      this.abortController = new AbortController()
      // TODO: event.detail.pushHistory if yes this.setTag()
      const fetchOptions = {
        method: 'GET',
        signal: this.abortController.signal
      }
      const endpoint = this.getAttribute('endpoint') + '?' + 'tags=' + event.detail.tags
      /* this.dispatchEvent(new CustomEvent(this.getAttribute('list-events') || 'list-events', {
        detail: {
          fetch: (this._fetch || (this._fetch = fetch(endpoint, fetchOptions))).then(response => {
            if (response.status >= 200 && response.status <= 299) {
              // TODO: Filter Stuff here
              return response.json()
            }
            throw new Error(response.statusText)
          })
        },
        bubbles: true,
        cancelable: true,
        composed: true
      })) */
      this.dispatchEvent(new CustomEvent(this.getAttribute('list-events') || 'list-events', {
        detail: {
          test: 'hooooooi'
        },
        bubbles: true,
        cancelable: true,
        composed: true
      }))
    }
    // inform about the url which would result on this filter
    this.requestHrefEventListener = event => {
      if (event.detail && event.detail.resolve) event.detail.resolve(this.setTag(event.detail.tags.join(';'), event.detail.pushHistory).href)
    }
    this.updatePopState = event => {
      if (!event.detail) event.detail = { ...event.state }
      event.detail.pushHistory = false
      this.requestListEventsListener(event)
    }
  }

  connectedCallback () {
    this.addEventListener(this.getAttribute('request-list-events') || 'request-list-events', this.requestListEventsListener)
    this.addEventListener('request-href-' + (this.getAttribute('request-list-events') || 'request-list-events'), this.requestHrefEventListener)
    if (!this.hasAttribute('no-popstate')) self.addEventListener('popstate', this.updatePopState)
  }

  disconnectedCallback () {
    this.removeEventListener(this.getAttribute('request-list-events') || 'request-list-events', this.requestListEventsListener)
    this.removeEventListener('request-href-' + (this.getAttribute('request-list-events') || 'request-list-events'), this.requestHrefEventListener)
    if (!this.hasAttribute('no-popstate')) self.removeEventListener('popstate', this.updatePopState)
  }

  /**
   * Set tag and page in window.history
   * @param {string} tag
   * @param {boolean} [pushHistory = true]
   * @return {URL}
   */
  setTag (tag, pushHistory = true) {
    const url = new URL(location.href, location.href.charAt(0) === '/' ? location.origin : location.href.charAt(0) === '.' ? this.importMetaUrl : undefined)
    url.searchParams.set('tag', tag)
    if (pushHistory) history.pushState({ ...history.state, tag }, document.title, url.href)
    return url
  }

  /**
   * Get tag from url else store
   * @return string
   */
  getTags () {
    const urlParams = new URLSearchParams(location.search)
    const tag = urlParams.get('tag')
    if (tag) return tag
  }
}
