const toolIcons = {
  javascript: '<i class="fab fa-js-square" title="javascript"></i>',
  typescript: `<svg title="typescript" style="margin-bottom: 0 !important; xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="45" height="41"viewBox="0 0 50 50" preserveAspectRatio="xMidYMid"><path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path></svg>`,
  html: '<i class="fab fa-html5" title="html"></i>',
  css: '<i class="fab fa-css3-alt" title="css"></i>',
  react: '<i class="fab fa-react" title="react"></i>',
  redux:
    '<svg title="redux" style="margin-bottom: 0 !important; " width="40" height="36" viewBox="0 0 256 244" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" fill="#333"/></svg>',
  mui: '<svg title="mui" style="margin-bottom: 0 !important; xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="40" height="36"viewBox="0 0 48 48" preserveAspectRatio="xMidYMid"><polygon fill="#333" points="1,5 7,9 7,29 1,25"></polygon><polygon fill="#333" points="47,20 41,24 41,37 47,33"></polygon><polygon fill="#333" points="47,6 41,10 41,17 47,13"></polygon><polygon fill="#333" points="35,5 29,9 29,29 35,25"></polygon><polygon fill="#333" points="1,12 18,23 18,16 1,5"></polygon><polygon fill="#333" points="35,12 18,23 18,16 35,5"></polygon><polygon fill="#333" points="35,26 18,37 18,30 35,19"></polygon><polygon fill="#333" points="47,34 30,45 30,38 47,27"></polygon><polygon fill="#333" points="30,37.765 18,30 18,37 30,44.765"></polygon></svg>',
  testing: '<i class="fa fa-flask" title="unit-testing"></i>',
  api: '<i class="fa fa-connectdevelop" title="3rd party api"></i>',
  bootstrap: '<i class="fab fa-bootstrap" title="bootstrap"></i>',
  wordpress: '<i class="fab fa-wordpress" title="wordpress"></i>',
  node: '<i class="fab fa-node-js" title="node.js"></i>',
  sass: '<i class="fab fa-sass" title="sass"></i>',
  sql: '<i class="fas fa-database" title="sql"></i>',
  dotnet: '<i class="fa-solid fa-laptop-code" title="dotnet">',
};
