"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[6085,689],{"./src/web-components-toolbox/src/es/components/atoms/loading/Loading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Loading});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");class Loading extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){connectedCallback(){this.shouldRenderCSS()&&this.renderCSS(),this.shouldRenderHTML()&&this.renderHTML()}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldRenderHTML(){return!this.root.querySelector(":host > div")}renderCSS(){this.css="\n    :host {\n      min-height:30vh;\n      align-items: start;\n      background-color: var(--background-color, white);\n      box-sizing: border-box;\n      cursor: progress;\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr;\n      opacity: 1;\n      overflow: hidden;\n      width: 100%;\n      z-index: -1000;\n    }\n    :host>div {\n      background-repeat: repeat-x;\n      background-size: contain;\n      grid-column: 1;\n      grid-row: 1;\n      height: 100%;\n      width: 100%;\n    }\n    :host>div:first-of-type {\n      --speed-animation: 1000s;\n      --speed-distance: 10000vw;\n      animation: streamer-w var(--speed-animation) linear infinite;\n      background-position: 0 50%;\n      background-image: url(data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9Ijc1NXB4IiB2aWV3Qm94PSIwIDAgMTAyNCA3NTUiIHdpZHRoPSIxMDI0cHgiIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDI0IDc1NSI+PHJlY3QgeT0iLTEiIHg9Ii0xIiBoZWlnaHQ9Ijc1NyIgd2lkdGg9IjEwMjYiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtNTAxLjc1IDQyNi44NmMtMC43Ni01LjEtMS4wOC0xNC4wOS0xLjA4LTE0LjA5IDIuNDktMTUuNzItMi45My0yOS45Mi00LjA4LTMzLjE3LTEuMTYtMy4yNS0xLjg4LTguNTYtMC41OC05LjY1IDEuMy0xLjA4IDAtMS44NCAwLTEuODR2LTIuNmgtNi43M3YyLjZzLTEuMyAwLjc2IDAgMS44NCAwLjU4IDYuNC0wLjU4IDkuNjUtNi41OCAxNy40NS00LjA4IDMzLjE3YzAgMC0wLjMyIDktMS4wOCAxNC4wOSAwIDAtMC4yMSA0LjAzIDguMjYgNC4zMnYwLjAxYzAuMjUgMC4wMSAwLjQ4IDAuMDEgMC43MSAwLjAxaDAuMTQgMC4xNGMwLjIzIDAgMC40NiAwIDAuNzEtMC4wMXYtMC4wMWM4LjQ2LTAuMjkgOC4yNS00LjMyIDguMjUtNC4zMnoiIGZpbGw9IiNGMEYwRjAiLz48cGF0aCBkPSJtNTQyLjA4IDQyMy42MmMwLjA2IDkuNDgtMTMuMTEgOC42My0xMy4xMSA4LjYzLTExLjc0IDAtMTIuNDMtNy4zNC0xMi40My03LjM0di0zMi41MWMwLTEzLjE4IDEuOTUtMTUuMTkgMS45NS0xNS4xOSA0Ljc3LTExLjc0IDQuMTQtMTguMzkgNC4xNC0xOC4zOWgtMC4xNGwtMC41Mi0wLjQyIDAuMDUtMS4wNmMwLjE5LTAuMTIgMC44NS0wLjUyIDAuODUtMC41Mi0wLjQyIDAuMDUtMS4xOC0wLjIxLTEuMTgtMC4yMXYtMS43MmMwLjA3LTAuMjggMC41NC0wLjU0IDAuNTQtMC41NCAwLjA5LTAuMjggMC44Ny0wLjY2IDAuODctMC42NiA5LjI1LTAuNjEgMTIuMjkgMCAxMi4yOSAwIDAuNTQgMC4xMiAwLjg1IDAuNTYgMC44NSAwLjU2IDAuMzUgMC4wMiAwLjYxIDAuNDkgMC42MSAwLjQ5bC0wLjA3IDEuNzktMS4wNSAwLjI3IDAuMzQgMC4zMiAwLjUgMC4zMXYwLjk2bC0wLjYzIDAuNDJjLTEuMTkgMy43NyAyLjkxIDE2LjEgMi45MSAxNi4xIDMuMDcgNS4xNSAzLjIzIDExLjgzIDMuMjMgMTEuODN2MzYuNTMiIGZpbGw9IiNGM0YzRjQiLz48cGF0aCBkPSJtNTc4LjQ5IDQwNC4xN2MtMS45IDAtMy45NyAwLjM3LTYuMTUgMS4wNiAwLjQ4LTEuNSAxLjQ5LTMuMDMgMy41LTMuMDMgMC40MyAwIDAuNzgtMC4zNSAwLjc4LTAuNzhzLTAuMzUtMC43OC0wLjc4LTAuNzhjLTEuODkgMC0zLjIgMC45My00LjA2IDIuMTkgMC4xMi0xLjE5IDAuNDMtMi4wOCAwLjk1LTIuNjggMC42NS0wLjc1IDEuNjctMS4xIDMuMTItMS4xIDAuNDMgMCAwLjc4LTAuMzUgMC43OC0wLjc4cy0wLjM1LTAuNzgtMC43OC0wLjc4Yy0xLjkxIDAtMy4zNSAwLjU1LTQuMyAxLjY0LTAuNjkgMC43OS0xLjExIDEuODctMS4yOSAzLjI3LTAuODYtMS4wNC0yLjA4LTEuNzYtMy43NS0xLjc2LTAuNDMgMC0wLjc4IDAuMzUtMC43OCAwLjc4czAuMzUgMC43OCAwLjc4IDAuNzhjMS45NiAwIDIuOTggMS40NiAzLjQ3IDIuOTMtMS43OS0wLjYyLTMuNjMtMC45Ni01LjQxLTAuOTYtNi40IDAtMTAuNTQgMy44OS0xMC41NCA5LjkxIDAgOC45NCA3LjcgMTYuMjIgMTcuMTYgMTYuMjJzMTcuMTYtNy4yOCAxNy4xNi0xNi4yMmMtMC4wMS02LjItMy42OS05LjkxLTkuODYtOS45MXoiIGZpbGw9IiNGM0YzRjQiLz48cGF0aCBkPSJtNDY5Ljk5IDM5OC40bC0zLjU5LTAuNzQtMS40MyAyLjE3LTAuNTcgMy44OGMwIDEuMDMtMS4xNCAzLjA4LTEuODggMy44Mi0yLjIyIDIuMjMtOC4xNiA5LjEzLTE3LjkxIDkuMTMtNi4zMyAwLTExLjc1LTIuODUtMTUuMzUtNC42Mi0yLjk3LTEuNDgtNi4zOS0yLjYzLTcuMzYtMi45Ni0wLjE3LTAuMDYtMC40LTAuMTItMC42My0wLjEyLTAuMjkgMC0wLjU3IDAuMDYtMC44NiAwLjIzbC0xLjE0IDAuNTctMC42MyAxLjQ4YzAgMTUuODYgMjMuNDUgMTguMzcgMjYuODEgMTguMzcgMTEuMjQgMCAyNC41My04LjE2IDI0LjUzLTE3LjYzIDAtMS44OC0xLjcxLTQuOTYtMS43MS03LjY0bDEuNzEtMy44MnYtMi4xMnoiIGZpbGw9IiNGM0YzRjQiLz48cGF0aCBkPSJtNjE2LjkzIDM2Mi4yMnYtMC45MWMtMC4zLTAuNC0wLjUtMC45MS0wLjUtMS41MXYtMTMuNDFjMC0wLjUgMC4yLTEuMTEgMC41LTEuNTF2LTMuMTJjMC0xLjAxLTAuNS0xLjcxLTEuNTEtMS43MWgtOS4xN2MtMS4wMSAwLTEuNDEgMC43MS0xLjQxIDEuNzF2My4zM2MwLjMgMC40IDAuNCAwLjgxIDAuNCAxLjMxdjEzLjUxYzAgMC41LTAuMSAwLjkxLTAuNCAxLjMxdjEuMDFjLTYuMTUgMi41Mi0xMC4wOCA4LjE3LTEwLjA4IDE0LjgydjUxLjcyYzAgMS4xMSAwLjggMi4wMiAxLjkxIDIuMDJoMjguMjNjMS4xMSAwIDIuMTItMC45MSAyLjEyLTIuMDJ2LTUxLjcyYy0wLjAxLTYuNjYtNC4wNC0xMi40MS0xMC4wOS0xNC44M3oiIGZpbGw9IiNGM0YzRjQiLz48cGF0aCBkPSJtNjY3LjA2IDQwNS4wNGMtMS45IDAtMy45NyAwLjM3LTYuMTUgMS4wNiAwLjQ4LTEuNSAxLjQ5LTMuMDMgMy41LTMuMDMgMC40MyAwIDAuNzgtMC4zNSAwLjc4LTAuNzhzLTAuMzUtMC43OC0wLjc4LTAuNzhjLTEuODkgMC0zLjIgMC45My00LjA3IDIuMTkgMC4xMi0xLjE5IDAuNDMtMi4wOCAwLjk1LTIuNjggMC42NC0wLjc1IDEuNjctMS4xMSAzLjEyLTEuMTEgMC40MyAwIDAuNzgtMC4zNSAwLjc4LTAuNzhzLTAuMzUtMC43OC0wLjc4LTAuNzhjLTEuOSAwLTMuMzUgMC41NS00LjMgMS42NC0wLjY5IDAuNzktMS4xMSAxLjg3LTEuMjkgMy4yNy0wLjg2LTEuMDQtMi4wOC0xLjc2LTMuNzQtMS43Ni0wLjQzIDAtMC43OCAwLjM1LTAuNzggMC43OHMwLjM1IDAuNzggMC43OCAwLjc4YzEuOTYgMCAyLjk4IDEuNDYgMy40NyAyLjkzLTEuNzktMC42Mi0zLjYzLTAuOTYtNS40MS0wLjk2LTYuNCAwLTEwLjU0IDMuODktMTAuNTQgOS45MSAwIDguOTQgNy43IDE2LjIyIDE3LjE2IDE2LjIyczE3LjE2LTcuMjggMTcuMTYtMTYuMjJjLTAuMDEtNi4yLTMuNjktOS45LTkuODYtOS45eiIgZmlsbD0iI0YzRjNGNCIvPjxwYXRoIGQ9Im03NDMuMzQgMzk4LjY3bC0zLjU5LTAuNzQtMS40MyAyLjE3LTAuNTcgMy44OGMwIDEuMDMtMS4xNCAzLjA4LTEuODggMy44Mi0yLjIyIDIuMjMtOC4xNiA5LjEzLTE3LjkxIDkuMTMtNi4zMyAwLTExLjc1LTIuODUtMTUuMzUtNC42Mi0yLjk3LTEuNDgtNi4zOS0yLjYyLTcuMzYtMi45Ni0wLjE3LTAuMDYtMC40LTAuMTItMC42My0wLjEyLTAuMjkgMC0wLjU3IDAuMDYtMC44NiAwLjIzbC0xLjE0IDAuNTctMC42MyAxLjQ4YzAgMTUuODYgMjMuNDUgMTguMzcgMjYuODEgMTguMzcgMTEuMjQgMCAyNC41My04LjE2IDI0LjUzLTE3LjYzIDAtMS44OC0xLjcxLTQuOTYtMS43MS03LjY1bDEuNzEtMy44MnYtMi4xMXoiIGZpbGw9IiNGM0YzRjQiLz48cGF0aCBkPSJtNzQzLjM0IDM5OC42N2wtMy41OS0wLjc0LTEuNDMgMi4xNy0wLjU3IDMuODhjMCAxLjAzLTEuMTQgMy4wOC0xLjg4IDMuODItMi4yMiAyLjIzLTguMTYgOS4xMy0xNy45MSA5LjEzLTYuMzMgMC0xMS43NS0yLjg1LTE1LjM1LTQuNjItMi45Ny0xLjQ4LTYuMzktMi42Mi03LjM2LTIuOTYtMC4xNy0wLjA2LTAuNC0wLjEyLTAuNjMtMC4xMi0wLjI5IDAtMC41NyAwLjA2LTAuODYgMC4yM2wtMS4xNCAwLjU3LTAuNjMgMS40OGMwIDE1Ljg2IDIzLjQ1IDE4LjM3IDI2LjgxIDE4LjM3IDExLjI0IDAgMjQuNTMtOC4xNiAyNC41My0xNy42MyAwLTEuODgtMS43MS00Ljk2LTEuNzEtNy42NWwxLjcxLTMuODJ2LTIuMTF6IiBmaWxsPSIjRjNGM0Y0Ii8+PHBhdGggZD0ibTc3NS4xIDQyNy4xN2MtMC43Ni01LjEtMS4wOC0xNC4wOS0xLjA4LTE0LjA5IDIuNDktMTUuNzItMi45My0yOS45Mi00LjA4LTMzLjE3LTEuMTYtMy4yNS0xLjg4LTguNTYtMC41OC05LjY1IDEuMy0xLjA4IDAtMS44NCAwLTEuODR2LTIuNmgtNi43M3YyLjZzLTEuMyAwLjc2IDAgMS44NCAwLjU4IDYuNC0wLjU4IDkuNjUtNi41OCAxNy40NS00LjA4IDMzLjE3YzAgMC0wLjMyIDktMS4wOCAxNC4wOSAwIDAtMC4yIDQuMDMgOC4yNiA0LjMydjAuMDFjMC4yNSAwLjAxIDAuNDggMC4wMSAwLjcxIDAuMDFoMC4xNHMwLjA5IDAgMC4xNCAwYzAuMjMgMCAwLjQ3IDAgMC43MS0wLjAxdi0wLjAxYzguNDYtMC4yOSA4LjI1LTQuMzIgOC4yNS00LjMyeiIgZmlsbD0iI0YwRjBGMCIvPjxwYXRoIGQ9Im04MTUuNDMgNDIzLjkzYzAuMDYgOS40OC0xMy4xMiA4LjYzLTEzLjEyIDguNjMtMTEuNzQgMC0xMi40My03LjM0LTEyLjQzLTcuMzR2LTMyLjUyYzAtMTMuMTggMS45NS0xNS4xOSAxLjk1LTE1LjE5IDQuNzctMTEuNzQgNC4xNC0xOC4zOSA0LjE0LTE4LjM5aC0wLjE0bC0wLjUyLTAuNDIgMC4wNS0xLjA2YzAuMTktMC4xMiAwLjg1LTAuNTIgMC44NS0wLjUyLTAuNDIgMC4wNS0xLjE4LTAuMjEtMS4xOC0wLjIxdi0xLjcyYzAuMDctMC4yOCAwLjU0LTAuNTQgMC41NC0wLjU0IDAuMDktMC4yOCAwLjg3LTAuNjYgMC44Ny0wLjY2IDkuMjUtMC42MSAxMi4yOSAwIDEyLjI5IDAgMC41NCAwLjEyIDAuODUgMC41NiAwLjg1IDAuNTYgMC4zNSAwLjAyIDAuNjEgMC40OSAwLjYxIDAuNDlsLTAuMDcgMS43OS0xLjA1IDAuMjcgMC4zNCAwLjMyIDAuNSAwLjMxdjAuOTZsLTAuNjMgMC40MmMtMS4xOSAzLjc3IDIuOTIgMTYuMSAyLjkyIDE2LjEgMy4wNyA1LjE1IDMuMjMgMTEuODMgMy4yMyAxMS44M3YzNi41MyIgZmlsbD0iI0YzRjNGNCIvPjxwYXRoIGQ9Im04NTEuODQgNDA0LjQ4Yy0xLjkgMC0zLjk3IDAuMzctNi4xNSAxLjA2IDAuNDgtMS41IDEuNDktMy4wMyAzLjUtMy4wMyAwLjQzIDAgMC43OC0wLjM1IDAuNzgtMC43OHMtMC4zNS0wLjc4LTAuNzgtMC43OGMtMS44OSAwLTMuMiAwLjkzLTQuMDYgMi4xOSAwLjEyLTEuMTkgMC40My0yLjA4IDAuOTUtMi42OCAwLjY1LTAuNzUgMS42Ny0xLjEgMy4xMi0xLjEgMC40MyAwIDAuNzgtMC4zNSAwLjc4LTAuNzhzLTAuMzUtMC43OC0wLjc4LTAuNzhjLTEuOTEgMC0zLjM1IDAuNTUtNC4zIDEuNjQtMC42OSAwLjc5LTEuMTEgMS44Ny0xLjI5IDMuMjctMC44Ni0xLjA0LTIuMDgtMS43Ni0zLjc1LTEuNzYtMC40MyAwLTAuNzggMC4zNS0wLjc4IDAuNzhzMC4zNSAwLjc4IDAuNzggMC43OGMxLjk2IDAgMi45OCAxLjQ2IDMuNDcgMi45My0xLjc5LTAuNjItMy42My0wLjk2LTUuNDEtMC45Ni02LjQgMC0xMC41NCAzLjg5LTEwLjU0IDkuOTEgMCA4Ljk0IDcuNyAxNi4yMiAxNy4xNiAxNi4yMnMxNy4xNi03LjI4IDE3LjE2LTE2LjIyYzAtNi4yMS0zLjY5LTkuOTEtOS44Ni05LjkxeiIgZmlsbD0iI0YzRjNGNCIvPjxwYXRoIGQ9Im04OTAuMjggMzYyLjUydi0wLjkxYy0wLjMtMC40LTAuNS0wLjkxLTAuNS0xLjUxdi0xMy40YzAtMC41IDAuMi0xLjExIDAuNS0xLjUxdi0zLjEyYzAtMS4wMS0wLjUtMS43MS0xLjUxLTEuNzFoLTkuMTdjLTEuMDEgMC0xLjQxIDAuNzEtMS40MSAxLjcxdjMuMzNjMC4zIDAuNCAwLjQgMC44MSAwLjQgMS4zMXYxMy41MWMwIDAuNS0wLjEgMC45MS0wLjQgMS4zMXYxLjAxYy02LjE1IDIuNTItMTAuMDggOC4xNy0xMC4wOCAxNC44MnY1MS43MmMwIDEuMTEgMC44IDIuMDIgMS45MSAyLjAyaDI4LjIzYzEuMTEgMCAyLjEyLTAuOTEgMi4xMi0yLjAydi01MS43MmMtMC4wMS02LjY3LTQuMDQtMTIuNDItMTAuMDktMTQuODR6IiBmaWxsPSIjRjNGM0Y0Ii8+PHBhdGggZD0ibTk0MC40MSA0MDUuMzRjLTEuOSAwLTMuOTcgMC4zNy02LjE1IDEuMDYgMC40OC0xLjUgMS40OS0zLjAzIDMuNS0zLjAzIDAuNDMgMCAwLjc4LTAuMzUgMC43OC0wLjc4cy0wLjM1LTAuNzgtMC43OC0wLjc4Yy0xLjg5IDAtMy4yIDAuOTMtNC4wNyAyLjE5IDAuMTItMS4xOSAwLjQzLTIuMDggMC45NS0yLjY4IDAuNjQtMC43NSAxLjY3LTEuMTEgMy4xMi0xLjExIDAuNDMgMCAwLjc4LTAuMzUgMC43OC0wLjc4cy0wLjM1LTAuNzgtMC43OC0wLjc4Yy0xLjkgMC0zLjM1IDAuNTUtNC4zIDEuNjQtMC42OSAwLjc5LTEuMTEgMS44Ny0xLjI5IDMuMjctMC44Ni0xLjA0LTIuMDgtMS43Ni0zLjc0LTEuNzYtMC40MyAwLTAuNzggMC4zNS0wLjc4IDAuNzhzMC4zNSAwLjc4IDAuNzggMC43OGMxLjk2IDAgMi45OCAxLjQ2IDMuNDcgMi45My0xLjc5LTAuNjItMy42My0wLjk2LTUuNDEtMC45Ni02LjQgMC0xMC41NCAzLjg5LTEwLjU0IDkuOTEgMCA4Ljk0IDcuNyAxNi4yMiAxNy4xNiAxNi4yMnMxNy4xNi03LjI4IDE3LjE2LTE2LjIyYy0wLjAxLTYuMi0zLjY5LTkuOS05Ljg2LTkuOXoiIGZpbGw9IiNGM0YzRjQiLz48cGF0aCBkPSJtMTAxNi43IDM5OC45N2wtMy41OS0wLjc0LTEuNDMgMi4xNy0wLjU3IDMuODhjMCAxLjAzLTEuMTQgMy4wOC0xLjg4IDMuODItMi4yMiAyLjIzLTguMTYgOS4xMy0xNy45MSA5LjEzLTYuMzMgMC0xMS43NS0yLjg1LTE1LjM1LTQuNjItMi45Ny0xLjQ4LTYuMzktMi42Mi03LjM2LTIuOTYtMC4xNy0wLjA2LTAuNC0wLjEyLTAuNjMtMC4xMi0wLjI5IDAtMC41NyAwLjA2LTAuODYgMC4yM2wtMS4xNCAwLjU3LTAuNjMgMS40OGMwIDE1Ljg2IDIzLjQ1IDE4LjM3IDI2LjgxIDE4LjM3IDExLjI0IDAgMjQuNTMtOC4xNiAyNC41My0xNy42MyAwLTEuODgtMS43MS00Ljk2LTEuNzEtNy42NWwxLjcxLTMuODJ2LTIuMTF6IiBmaWxsPSIjRjNGM0Y0Ii8+PHBhdGggZD0ibTEwMTYuNyAzOTguOTdsLTMuNTktMC43NC0xLjQzIDIuMTctMC41NyAzLjg4YzAgMS4wMy0xLjE0IDMuMDgtMS44OCAzLjgyLTIuMjIgMi4yMy04LjE2IDkuMTMtMTcuOTEgOS4xMy02LjMzIDAtMTEuNzUtMi44NS0xNS4zNS00LjYyLTIuOTctMS40OC02LjM5LTIuNjItNy4zNi0yLjk2LTAuMTctMC4wNi0wLjQtMC4xMi0wLjYzLTAuMTItMC4yOSAwLTAuNTcgMC4wNi0wLjg2IDAuMjNsLTEuMTQgMC41Ny0wLjYzIDEuNDhjMCAxNS44NiAyMy40NSAxOC4zNyAyNi44MSAxOC4zNyAxMS4yNCAwIDI0LjUzLTguMTYgMjQuNTMtMTcuNjMgMC0xLjg4LTEuNzEtNC45Ni0xLjcxLTcuNjVsMS43MS0zLjgydi0yLjExeiIgZmlsbD0iI0YzRjNGNCIvPjxwYXRoIGQ9Im0yMjguNCA0MjYuNTZjLTAuNzYtNS4xLTEuMDgtMTQuMDktMS4wOC0xNC4wOSAyLjQ5LTE1LjcyLTIuOTMtMjkuOTItNC4wOC0zMy4xNy0xLjE2LTMuMjUtMS44OC04LjU2LTAuNTgtOS42NSAxLjMtMS4wOCAwLTEuODQgMC0xLjg0di0yLjZoLTYuNzJ2Mi42cy0xLjMgMC43NiAwIDEuODQgMC41OCA2LjQtMC41OCA5LjY1LTYuNTggMTcuNDUtNC4wOCAzMy4xN2MwIDAtMC4zMiA5LTEuMDggMTQuMDkgMCAwLTAuMjEgNC4wMyA4LjI2IDQuMzJ2MC4wMWMwLjI1IDAuMDEgMC40OCAwLjAxIDAuNzEgMC4wMWgwLjE0IDAuMTRjMC4yMyAwIDAuNDYgMCAwLjcxLTAuMDF2LTAuMDFjOC40NC0wLjI5IDguMjQtNC4zMiA4LjI0LTQuMzJ6IiBmaWxsPSIjRjBGMEYwIi8+PHBhdGggZD0ibTI2OC43MiA0MjMuMzJjMC4wNiA5LjQ4LTEzLjEyIDguNjMtMTMuMTIgOC42My0xMS43NCAwLTEyLjQzLTcuMzQtMTIuNDMtNy4zNHYtMzIuNTFjMC0xMy4xOCAxLjk1LTE1LjE5IDEuOTUtMTUuMTkgNC43Ny0xMS43NCA0LjE0LTE4LjM5IDQuMTQtMTguMzloLTAuMTRsLTAuNTItMC40MiAwLjA1LTEuMDZjMC4xOS0wLjEyIDAuODUtMC41MiAwLjg1LTAuNTItMC40MiAwLjA1LTEuMTgtMC4yMS0xLjE4LTAuMjF2LTEuNzJjMC4wNy0wLjI4IDAuNTQtMC41NCAwLjU0LTAuNTQgMC4wOS0wLjI4IDAuODctMC42NiAwLjg3LTAuNjYgOS4yNS0wLjYxIDEyLjI5IDAgMTIuMjkgMCAwLjU0IDAuMTIgMC44NSAwLjU2IDAuODUgMC41NiAwLjM1IDAuMDIgMC42MSAwLjUgMC42MSAwLjVsLTAuMDcgMS43OS0xLjA1IDAuMjcgMC4zNCAwLjMyIDAuNSAwLjMxdjAuOTZsLTAuNjMgMC40MmMtMS4xOSAzLjc3IDIuOTIgMTYuMSAyLjkyIDE2LjEgMy4wNyA1LjE1IDMuMjMgMTEuODMgMy4yMyAxMS44M3YzNi41MyIgZmlsbD0iI0YzRjNGNCIvPjxwYXRoIGQ9Im0zMDUuMTQgNDAzLjg3Yy0xLjkgMC0zLjk3IDAuMzctNi4xNSAxLjA2IDAuNDgtMS41IDEuNDktMy4wMyAzLjUtMy4wMyAwLjQzIDAgMC43OC0wLjM1IDAuNzgtMC43OHMtMC4zNS0wLjc4LTAuNzgtMC43OGMtMS44OSAwLTMuMiAwLjkzLTQuMDYgMi4xOSAwLjEyLTEuMTkgMC40My0yLjA4IDAuOTUtMi42OCAwLjY1LTAuNzUgMS42Ny0xLjEgMy4xMi0xLjEgMC40MyAwIDAuNzgtMC4zNSAwLjc4LTAuNzhzLTAuMzUtMC43OC0wLjc4LTAuNzhjLTEuOTEgMC0zLjM1IDAuNTUtNC4zIDEuNjQtMC42OSAwLjc5LTEuMTEgMS44Ny0xLjI5IDMuMjctMC44Ni0xLjA0LTIuMDgtMS43Ni0zLjc1LTEuNzYtMC40MyAwLTAuNzggMC4zNS0wLjc4IDAuNzhzMC4zNSAwLjc4IDAuNzggMC43OGMxLjk2IDAgMi45OCAxLjQ2IDMuNDcgMi45My0xLjc5LTAuNjItMy42My0wLjk2LTUuNDEtMC45Ni02LjQgMC0xMC41NCAzLjg5LTEwLjU0IDkuOTEgMCA4Ljk0IDcuNyAxNi4yMiAxNy4xNiAxNi4yMnMxNy4xNi03LjI4IDE3LjE2LTE2LjIyYy0wLjAxLTYuMjEtMy42OS05LjkxLTkuODYtOS45MXoiIGZpbGw9IiNGM0YzRjQiLz48cGF0aCBkPSJtMTk2LjYzIDM5OC4xbC0zLjU5LTAuNzQtMS40MyAyLjE3LTAuNTcgMy44OGMwIDEuMDMtMS4xNCAzLjA4LTEuODggMy44Mi0yLjIyIDIuMjMtOC4xNiA5LjEzLTE3LjkxIDkuMTMtNi4zMyAwLTExLjc1LTIuODUtMTUuMzUtNC42Mi0yLjk3LTEuNDgtNi4zOS0yLjYzLTcuMzYtMi45Ni0wLjE3LTAuMDYtMC40LTAuMTItMC42My0wLjEyLTAuMjkgMC0wLjU3IDAuMDYtMC44NiAwLjIzbC0xLjE0IDAuNTctMC42MyAxLjQ4YzAgMTUuODYgMjMuNDUgMTguMzcgMjYuODEgMTguMzcgMTEuMjQgMCAyNC41My04LjE2IDI0LjUzLTE3LjYzIDAtMS44OC0xLjcxLTQuOTYtMS43MS03LjY0bDEuNzEtMy44MnYtMi4xMnoiIGZpbGw9IiNGM0YzRjQiLz48cGF0aCBkPSJtMzQzLjU4IDM2MS45MnYtMC45MWMtMC4zLTAuNC0wLjUtMC45MS0wLjUtMS41MXYtMTMuNDFjMC0wLjUgMC4yLTEuMTEgMC41LTEuNTF2LTMuMTJjMC0xLjAxLTAuNS0xLjcxLTEuNTEtMS43MWgtOS4xN2MtMS4wMSAwLTEuNDEgMC43MS0xLjQxIDEuNzF2My4zM2MwLjMgMC40IDAuNCAwLjgxIDAuNCAxLjMxdjEzLjUxYzAgMC41LTAuMSAwLjkxLTAuNCAxLjMxdjEuMDFjLTYuMTUgMi41Mi0xMC4wOCA4LjE3LTEwLjA4IDE0LjgydjUxLjcyYzAgMS4xMSAwLjggMi4wMiAxLjkxIDIuMDJoMjguMjNjMS4xMSAwIDIuMTItMC45MSAyLjEyLTIuMDJ2LTUxLjcyYy0wLjAxLTYuNjctNC4wNC0xMi40MS0xMC4wOS0xNC44M3oiIGZpbGw9IiNGM0YzRjQiLz48cGF0aCBkPSJtMzkzLjcxIDQwNC43M2MtMS45IDAtMy45NyAwLjM3LTYuMTUgMS4wNiAwLjQ4LTEuNSAxLjQ5LTMuMDMgMy41LTMuMDMgMC40MyAwIDAuNzgtMC4zNSAwLjc4LTAuNzhzLTAuMzUtMC43OC0wLjc4LTAuNzhjLTEuODkgMC0zLjIgMC45My00LjA3IDIuMTkgMC4xMi0xLjE5IDAuNDMtMi4wOCAwLjk1LTIuNjggMC42NC0wLjc1IDEuNjctMS4xMSAzLjEyLTEuMTEgMC40MyAwIDAuNzgtMC4zNSAwLjc4LTAuNzhzLTAuMzUtMC43OC0wLjc4LTAuNzhjLTEuOSAwLTMuMzUgMC41NS00LjMgMS42NC0wLjY5IDAuNzktMS4xMSAxLjg3LTEuMjkgMy4yNy0wLjg2LTEuMDQtMi4wOC0xLjc2LTMuNzQtMS43Ni0wLjQzIDAtMC43OCAwLjM1LTAuNzggMC43OHMwLjM1IDAuNzggMC43OCAwLjc4YzEuOTYgMCAyLjk4IDEuNDYgMy40NyAyLjkzLTEuNzktMC42Mi0zLjYzLTAuOTYtNS40MS0wLjk2LTYuNCAwLTEwLjU0IDMuODktMTAuNTQgOS45MSAwIDguOTQgNy43IDE2LjIyIDE3LjE2IDE2LjIyczE3LjE2LTcuMjggMTcuMTYtMTYuMjJjLTAuMDEtNi4xOS0zLjY5LTkuOS05Ljg2LTkuOXoiIGZpbGw9IiNGM0YzRjQiLz48cGF0aCBkPSJtMzEuNzcgNDAzLjU5Yy0xLjkgMC0zLjk3IDAuMzctNi4xNSAxLjA2IDAuNDgtMS41IDEuNDktMy4wMyAzLjUtMy4wMyAwLjQzIDAgMC43OC0wLjM1IDAuNzgtMC43OHMtMC4zNS0wLjc4LTAuNzgtMC43OGMtMS44OSAwLTMuMiAwLjkzLTQuMDYgMi4xOSAwLjEyLTEuMTkgMC40My0yLjA4IDAuOTUtMi42OCAwLjY1LTAuNzUgMS42Ny0xLjEgMy4xMi0xLjEgMC40MyAwIDAuNzgtMC4zNSAwLjc4LTAuNzhzLTAuMzUtMC43OC0wLjc4LTAuNzhjLTEuOTEgMC0zLjM1IDAuNTUtNC4zIDEuNjQtMC42OSAwLjc5LTEuMTEgMS44Ny0xLjI5IDMuMjctMC44Ni0xLjA0LTIuMDgtMS43Ni0zLjc1LTEuNzYtMC40MyAwLTAuNzggMC4zNS0wLjc4IDAuNzhzMC4zNSAwLjc4IDAuNzggMC43OGMxLjk2IDAgMi45OCAxLjQ2IDMuNDcgMi45My0xLjc5LTAuNjItMy42My0wLjk2LTUuNDEtMC45Ni02LjQgMC0xMC41NCAzLjg5LTEwLjU0IDkuOTEgMCA4Ljk0IDcuNyAxNi4yMiAxNy4xNiAxNi4yMnMxNy4xNi03LjI4IDE3LjE2LTE2LjIyYzAtNi4yMS0zLjY5LTkuOTEtOS44Ni05LjkxeiIgZmlsbD0iI0YzRjNGNCIvPjxwYXRoIGQ9Im03MC4yMSAzNjEuNjR2LTAuOTFjLTAuMy0wLjQtMC41LTAuOTEtMC41LTEuNTF2LTEzLjQxYzAtMC41IDAuMi0xLjExIDAuNS0xLjUxdi0zLjEyYzAtMS4wMS0wLjUtMS43MS0xLjUxLTEuNzFoLTkuMTdjLTEuMDEgMC0xLjQxIDAuNzEtMS40MSAxLjcxdjMuMzNjMC4zIDAuNCAwLjQgMC44MSAwLjQgMS4zMXYxMy41MWMwIDAuNS0wLjEgMC45MS0wLjQgMS4zMXYxLjAxYy02LjE1IDIuNTItMTAuMDggOC4xNy0xMC4wOCAxNC44MnY1MS43MWMwIDEuMTEgMC44IDIuMDIgMS45MSAyLjAyaDI4LjIzYzEuMTEgMCAyLjEyLTAuOTEgMi4xMi0yLjAydi01MS43MWMtMC4wMS02LjY3LTQuMDQtMTIuNDEtMTAuMDktMTQuODN6IiBmaWxsPSIjRjNGM0Y0Ii8+PHBhdGggZD0ibTEyMC4zNCA0MDQuNDVjLTEuOSAwLTMuOTcgMC4zNy02LjE1IDEuMDYgMC40OC0xLjUgMS40OS0zLjAzIDMuNS0zLjAzIDAuNDMgMCAwLjc4LTAuMzUgMC43OC0wLjc4cy0wLjM1LTAuNzgtMC43OC0wLjc4Yy0xLjg5IDAtMy4yIDAuOTMtNC4wNyAyLjE5IDAuMTItMS4xOSAwLjQzLTIuMDggMC45NS0yLjY4IDAuNjQtMC43NSAxLjY3LTEuMTEgMy4xMi0xLjExIDAuNDMgMCAwLjc4LTAuMzUgMC43OC0wLjc4cy0wLjM1LTAuNzgtMC43OC0wLjc4Yy0xLjkgMC0zLjM1IDAuNTUtNC4zIDEuNjQtMC42OSAwLjc5LTEuMTEgMS44Ny0xLjI5IDMuMjctMC44Ni0xLjA0LTIuMDgtMS43Ni0zLjc0LTEuNzYtMC40MyAwLTAuNzggMC4zNS0wLjc4IDAuNzhzMC4zNSAwLjc4IDAuNzggMC43OGMxLjk2IDAgMi45OCAxLjQ2IDMuNDcgMi45My0xLjc5LTAuNjItMy42My0wLjk2LTUuNDEtMC45Ni02LjQgMC0xMC41NCAzLjg5LTEwLjU0IDkuOTEgMCA4Ljk0IDcuNyAxNi4yMiAxNy4xNiAxNi4yMnMxNy4xNi03LjI4IDE3LjE2LTE2LjIyYy0wLjAxLTYuMTktMy42OS05LjktOS44Ni05Ljl6IiBmaWxsPSIjRjNGM0Y0Ii8+PC9zdmc+);\n    }\n    :host>div:last-of-type {\n      background-color: transparent;\n      background-position: 50% 50%;\n      background-image: url(data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9Ijc1NXB4IiB2aWV3Qm94PSIwIDAgMTAyNCA3NTUiIHdpZHRoPSIxMDI0cHgiIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDI0IDc1NSI+PGxpbmUgeTI9IjQzMC42NiIgeDE9IjQxMS45NiIgeDI9IjYxMy4xNSIgc3Ryb2tlPSIjQ0NDQkNCIiBzdHJva2UtZGFzaGFycmF5PSI3Ljk4NjgiIHkxPSI0MzAuNjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzLjE5NDciIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJtLTEtMXY3NTdoMTAyNnYtNzU3aC0xMDI2em02MTQgNDQxLjkxYzAgMy4zNi0yLjc0IDYuMDktNi4xMiA2LjA5aC0xODkuNzZjLTMuMzggMC02LjEyLTIuNzMtNi4xMi02LjA5di0xMjYuODJjMC0zLjM2IDIuNzQtNi4wOSA2LjEyLTYuMDloMTg5Ljc2YzMuMzggMCA2LjEyIDIuNzMgNi4xMiA2LjA5djEyNi44MnoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtNTEyIDIzMi41Yy04MC4wOCAwLTE0NSA2NC45Mi0xNDUgMTQ1czY0LjkyIDE0NSAxNDUgMTQ1IDE0NS02NC45MiAxNDUtMTQ1LTY0LjkyLTE0NS0xNDUtMTQ1em0xMDEgMjA4LjQxYzAgMy4zNi0yLjc0IDYuMDktNi4xMiA2LjA5aC0xODkuNzZjLTMuMzggMC02LjEyLTIuNzMtNi4xMi02LjA5di0xMjYuODJjMC0zLjM2IDIuNzQtNi4wOSA2LjEyLTYuMDloMTg5Ljc2YzMuMzggMCA2LjEyIDIuNzMgNi4xMiA2LjA5djEyNi44MnoiIGZpbGw9IiNGQ0ZDRkMiLz48cGF0aCBzdHJva2U9IiNGM0YzRjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0ibTYxMyA0NDAuOTFjMCAzLjM2LTIuNzQgNi4wOS02LjEyIDYuMDloLTE4OS43NmMtMy4zOCAwLTYuMTItMi43My02LjEyLTYuMDl2LTEyNi44MmMwLTMuMzYgMi43NC02LjA5IDYuMTItNi4wOWgxODkuNzZjMy4zOCAwIDYuMTIgMi43MyA2LjEyIDYuMDl2MTI2LjgyeiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    }\n    @keyframes streamer-w {\n      0% {\n        background-position: 0 50%;\n      }\n      100% {\n        background-position: var(--speed-distance) 50%;\n      }\n    }\n    "}renderHTML(){this.html="\n     <div></div> \n     <div></div> \n    "}}}}]);