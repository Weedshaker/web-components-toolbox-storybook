// Form.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/molecules/formZadb/FormZadb'
).then((module) => self.customElements.define('m-form-zadb', module.default))

export default {
  title: 'Molecules/FormZadb',
  component: 'm-form-zadb'
}

export const Default = () =>
  html`
    <m-form-zadb>
      <form>
        <div
          class="umbraco-forms-page"
          id="d45d33f6-90b2-4345-9938-9bbaab73d830"
        >
          <fieldset
            class="umbraco-forms-fieldset"
            id="007609e5-7996-4e3a-aae6-665ccf06c4c5"
          >
            <div class="row-fluid">
              <div class="umbraco-forms-container col-md-12">
                <div class=" umbraco-forms-field firma shortanswer">
                  <label
                    for="4932224a-57c2-46b0-d353-231fc2728e9c"
                    class="umbraco-forms-label"
                  >
                    Firma
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <input
                      type="text"
                      name="4932224a-57c2-46b0-d353-231fc2728e9c"
                      id="4932224a-57c2-46b0-d353-231fc2728e9c"
                      data-umb="4932224a-57c2-46b0-d353-231fc2728e9c"
                      class="text "
                      value=""
                      maxlength="255"
                    />
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="4932224a-57c2-46b0-d353-231fc2728e9c"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div
                  class="umbraco-forms-field formsformorderdeliverynotes checkbox"
                >
                  <input
                    type="checkbox"
                    name="091023b2-4476-489d-9084-9f3b47e9a4ce"
                    id="091023b2-4476-489d-9084-9f3b47e9a4ce"
                    value="true"
                    data-umb="091023b2-4476-489d-9084-9f3b47e9a4ce"
                  />
                  <input
                    type="hidden"
                    name="091023b2-4476-489d-9084-9f3b47e9a4ce"
                    value="false"
                  />
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="091023b2-4476-489d-9084-9f3b47e9a4ce"
                    data-valmsg-replace="true"
                  ></span>
                  <label
                    for="091023b2-4476-489d-9084-9f3b47e9a4ce"
                    class="umbraco-forms-label"
                  >
                    Lieferscheine
                  </label>
                </div>
                <div
                  class=" umbraco-forms-field anrede singlechoice alternating"
                >
                  <label
                    for="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                    class="umbraco-forms-label"
                  >
                    Anrede
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <div
                      class="radiobuttonlist"
                      id="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                      data-umb="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                    >
                      <input
                        type="radio"
                        name="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                        id="ee00474a-73ca-4440-e19e-2bbf1c6ec750_0"
                        data-umb="ee00474a-73ca-4440-e19e-2bbf1c6ec750_0"
                        value="Frau"
                      />
                      <label for="ee00474a-73ca-4440-e19e-2bbf1c6ec750_0"
                        >Frau</label
                      >
                      <br />
                      <input
                        type="radio"
                        name="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                        id="ee00474a-73ca-4440-e19e-2bbf1c6ec750_1"
                        data-umb="ee00474a-73ca-4440-e19e-2bbf1c6ec750_1"
                        value="Mann"
                      />
                      <label for="ee00474a-73ca-4440-e19e-2bbf1c6ec750_1"
                        >Mann</label
                      >
                      <br />
                    </div>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div
                  class=" umbraco-forms-field vornamename shortanswer mandatory"
                >
                  <label
                    for="31abdc18-3dd5-43dc-dfba-67104a7de7e0"
                    class="umbraco-forms-label"
                  >
                    Vorname Name <span class="umbraco-forms-indicator">*</span>
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <input type="text"
                    name="31abdc18-3dd5-43dc-dfba-67104a7de7e0"
                    id="31abdc18-3dd5-43dc-dfba-67104a7de7e0"
                    data-umb="31abdc18-3dd5-43dc-dfba-67104a7de7e0" class="text
                    " value="" maxlength="255" data-val="true"
                    data-val-required="Bitte füllen Sie das Feld " Vorname Name"
                    aus." />
                  </div>
                </div>
                <div
                  class=" umbraco-forms-field telefon shortanswer alternating"
                >
                  <label
                    for="da2a663b-e910-4f16-9221-351a31708ed2"
                    class="umbraco-forms-label"
                  >
                    Telefon
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <input
                      type="tel"
                      name="da2a663b-e910-4f16-9221-351a31708ed2"
                      id="da2a663b-e910-4f16-9221-351a31708ed2"
                      data-umb="da2a663b-e910-4f16-9221-351a31708ed2"
                      class="text "
                      value=""
                      maxlength="255"
                    />
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="da2a663b-e910-4f16-9221-351a31708ed2"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div class=" umbraco-forms-field email shortanswer mandatory">
                  <label
                    for="c5b209f0-0703-4004-cdc8-b81160de0cb5"
                    class="umbraco-forms-label"
                  >
                    E-Mail <span class="umbraco-forms-indicator">*</span>
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <input type="email"
                    name="c5b209f0-0703-4004-cdc8-b81160de0cb5"
                    id="c5b209f0-0703-4004-cdc8-b81160de0cb5"
                    data-umb="c5b209f0-0703-4004-cdc8-b81160de0cb5" class="text
                    " value="" maxlength="255" data-val="true"
                    data-val-required="Bitte füllen Sie das Feld " E-Mail" aus"
                    data-val-regex="Bitte geben Sie eine gültige " E-Mail" ein."
                    data-val-regex-pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
                    />
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="c5b209f0-0703-4004-cdc8-b81160de0cb5"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div
                  class=" umbraco-forms-field plz shortanswer mandatory alternating"
                >
                  <label
                    for="7fc7c299-4737-48e7-bdd1-17cbe13682f5"
                    class="umbraco-forms-label"
                  >
                    PLZ <span class="umbraco-forms-indicator">*</span>
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <input
                      list="zip-list"
                      id="zip"
                      type="number"
                      name="7fc7c299-4737-48e7-bdd1-17cbe13682f5"
                      id="7fc7c299-4737-48e7-bdd1-17cbe13682f5"
                      data-umb="7fc7c299-4737-48e7-bdd1-17cbe13682f5"
                      class="text "
                      value=""
                      maxlength="4"
                      data-val="true"
                      data-val-required="Bitte geben Sie eine PLZ an"
                      data-val-regex="Bitte geben Sie eine PLZ an"
                      data-val-regex-pattern="^[0-9]*$"
                      autocomplete="off"
                      max="4"
                    />
                    <div class="icon-container">
                      <i class="loader" id="zip-loader"></i>
                    </div>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="7fc7c299-4737-48e7-bdd1-17cbe13682f5"
                      data-valmsg-replace="true"
                    ></span>
                    <span id="plz-field-validation-error" style="display:none"
                      >Diese PLZ existiert nicht. Bitte prüfen Sie Ihre
                      Angabe!</span
                    >
                  </div>
                </div>
                <div class=" umbraco-forms-field ort shortanswer mandatory">
                  <label
                    for="06d3b412-de66-4e8d-c240-7d470e395fb8"
                    class="umbraco-forms-label"
                  >
                    Ort <span class="umbraco-forms-indicator">*</span>
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <input
                      autocomplete="off"
                      id="city"
                      type="text"
                      name="06d3b412-de66-4e8d-c240-7d470e395fb8"
                      id="06d3b412-de66-4e8d-c240-7d470e395fb8"
                      data-umb="06d3b412-de66-4e8d-c240-7d470e395fb8"
                      class="text "
                      value=""
                      maxlength="255"
                      data-val="true"
                      data-val-required="Bitte geben Sie einen Ort an"
                    />
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="06d3b412-de66-4e8d-c240-7d470e395fb8"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div
                  class=" umbraco-forms-field strasse shortanswer mandatory alternating"
                >
                  <label
                    for="3a7bc378-f85a-4f2a-9927-43bdb5ea5818"
                    class="umbraco-forms-label"
                  >
                    Strasse <span class="umbraco-forms-indicator">*</span>
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <input
                      autocomplete="off"
                      list="street-list"
                      id="street"
                      type="text"
                      name="3a7bc378-f85a-4f2a-9927-43bdb5ea5818"
                      id="3a7bc378-f85a-4f2a-9927-43bdb5ea5818"
                      data-umb="3a7bc378-f85a-4f2a-9927-43bdb5ea5818"
                      class="text "
                      value=""
                      maxlength="255"
                      data-val="true"
                      data-val-required="Bitte geben Sie eine Strasse an"
                    />
                    <div class="icon-container">
                      <i class="loader" id="street-loader"></i>
                    </div>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="3a7bc378-f85a-4f2a-9927-43bdb5ea5818"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div class=" umbraco-forms-field hausnummer shortanswer">
                  <label
                    for="afd8a0aa-97d0-451c-a918-7f911462df9d"
                    class="umbraco-forms-label"
                  >
                    Hausnummer
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <input
                      type="text"
                      name="afd8a0aa-97d0-451c-a918-7f911462df9d"
                      id="afd8a0aa-97d0-451c-a918-7f911462df9d"
                      data-umb="afd8a0aa-97d0-451c-a918-7f911462df9d"
                      class="text "
                      value=""
                      maxlength="4"
                    />
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="afd8a0aa-97d0-451c-a918-7f911462df9d"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div
                  class=" umbraco-forms-field zusatz shortanswer alternating"
                >
                  <label
                    for="ef3c60c9-d487-46da-8a43-cd007e01874a"
                    class="umbraco-forms-label"
                  >
                    Zusatz
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <input
                      type="text"
                      name="ef3c60c9-d487-46da-8a43-cd007e01874a"
                      id="ef3c60c9-d487-46da-8a43-cd007e01874a"
                      data-umb="ef3c60c9-d487-46da-8a43-cd007e01874a"
                      class="text "
                      value=""
                      maxlength="255"
                    />
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="ef3c60c9-d487-46da-8a43-cd007e01874a"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div class=" umbraco-forms-field bemerkungen longanswer">
                  <label
                    for="7d670178-6318-48d4-e9fe-b40367486a47"
                    class="umbraco-forms-label"
                  >
                    Bemerkungen
                  </label>
                  <div class="umbraco-forms-field-wrapper">
                    <textarea
                      class=""
                      name="7d670178-6318-48d4-e9fe-b40367486a47"
                      id="7d670178-6318-48d4-e9fe-b40367486a47"
                      data-umb="7d670178-6318-48d4-e9fe-b40367486a47"
                      rows="3"
                      cols="20"
                    ></textarea>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="7d670178-6318-48d4-e9fe-b40367486a47"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
                <div
                  class=" umbraco-forms-field recaptcha recaptchav3withscore mandatory alternating"
                >
                  <div class="umbraco-forms-field-wrapper">
                    <input
                      type="hidden"
                      id="34be9a13-622b-431e-de0a-746392b3dd23"
                      name="g-recaptcha-response"
                    />
                    <script type="application/javascript">
                      (function (window, document) {
                        var hiddenField = document.getElementById(
                          "34be9a13-622b-431e-de0a-746392b3dd23"
                        );
                        var timerFunction = function () {
                          window.grecaptcha
                            .execute(
                              "6Lc_DDQUAAAAANpNTT_NzZ61YWhKy6swlfaLcQjB",
                              { action: "umbracoform_submit" }
                            )
                            .then(function (token) {
                              // Enable the submit button now we have a token
                              hiddenField.form
                                .querySelector("[type=submit]")
                                .removeAttribute("disabled");
                              hiddenField.value = token;
                            });
                          setTimeout(timerFunction, 60 * 1000);
                        };
                        document.addEventListener(
                          "DOMContentLoaded",
                          function () {
                            // Disable the submit button for this form, until we actually have a key from Google reCAPTCHA
                            hiddenField.form
                              .querySelector("[type=submit]")
                              .setAttribute("disabled", "disabled");
                            window.grecaptcha.ready(function () {
                              timerFunction();
                            });
                          }
                        );
                      })(window, document);
                    </script>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="34be9a13-622b-431e-de0a-746392b3dd23"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <div style="display: none" aria-hidden="true">
            <input type="text" name="211c67e98e734821aef0cf49f6207760" />
          </div>
          <div class="umbraco-forms-navigation row-fluid">
            <!-- todo: add policy from m4music? made both as dictionary... -->
            <p>
              Die Bearbeitung Ihrer Personendaten erfolgt gemäss unserer
              <a
                rel="noopener"
                href="https://www.migros.ch/de/datenschutz.html"
                target="_blank"
                >Datenschutzerklärung</a
              >. Dieses Formular ist durch reCAPTCHA geschützt, die
              <a
                rel="noopener"
                href="https://policies.google.com/privacy"
                target="_blank"
                >Google Privacy Policy</a
              >
              und
              <a
                rel="noopener"
                href="https://policies.google.com/terms"
                target="_blank"
                >Terms of Service</a
              >
              finden Anwendung.
            </p>
            <div class="col-md-12">
              <input
                type="submit"
                class="btn primary"
                value="Submit"
                name="__next"
                data-umb="submit-forms-form"
              />
            </div>
          </div>
        </div>
      </form>
    </m-form-zadb>

    <input
      name="ufprt"
      type="hidden"
      value="95514D447611C9386B52435FE4B0DFD50AB4260E461F3D89BB69DED5B9EDA72ED57AE37CD66CEA06CAFC5853148A798B7C188408D7C912A37BBD2ADD2DF8F085E141AEF86B5DB5492C8DF1C8A677EAADFC66FEAA4FD80E0DBAA7A8CB295A55FA35487874062AA2E64F7A99EC5F7979555691859A13B33BA62E51F061F1BAAFB1BF97680158CD5558B0ACB50958B0B361"
    />

    <div
      class="umbraco-forms-form-config"
      style="display: none"
      data-id="211c67e98e734821aef0cf49f6207760"
      data-serialized-page-button-conditions="{}"
      data-serialized-fieldset-conditions="{}"
      data-serialized-field-conditions="{}"
      data-serialized-fields-not-displayed="{}"
    ></div>
  `
