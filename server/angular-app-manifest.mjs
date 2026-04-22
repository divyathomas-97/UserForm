
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/UserForm/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/UserForm/userform",
    "route": "/UserForm"
  },
  {
    "renderMode": 2,
    "route": "/UserForm/userform"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24691, hash: '04f1f44e30cfb248eddf70381e4788b92fb41d8082ece1bf487d4d8faac8d665', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17164, hash: 'bbc9c583ade31bb0fb0057697038c3b64ac8f9a33bf9c42ae790b00491abe29f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'userform/index.html': {size: 148056, hash: 'f9cf57ad92effac478883309ee5de7a02b67daaaace308a6025be7ecc985e531', text: () => import('./assets-chunks/userform_index_html.mjs').then(m => m.default)},
    'styles-TI6LY7KC.css': {size: 8250, hash: '7s4WRAIZg4w', text: () => import('./assets-chunks/styles-TI6LY7KC_css.mjs').then(m => m.default)}
  },
};
