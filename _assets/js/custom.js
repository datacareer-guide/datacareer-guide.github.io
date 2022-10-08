var $ = function (...args) {
  var t = document.querySelectorAll(...args);
  if (t.length == 1) return t[0];
  return t
};

document.addEventListener("DOMContentLoaded", function (event) {
  console.log('hellooo')
});

// obtain plugin
var cc = initCookieConsent();

import pt from '../data/consent.json' assert { type: 'json' };

import en from '../../en/_assets/data/consent.json' assert { type: 'json' };

// run plugin with your configuration
cc.run({
  current_lang: 'pt',
  autoclear_cookies: true,                   // default: false
  page_scripts: true,                        // default: false
  gui_options: {
    consent_modal: {
      layout: 'cloud',
    },
    settings_modal: {
      layout: 'box'
    }
  },

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once
  },

  onAccept: function (cookie) {
    // ...
  },

  onChange: function (cookie, changed_preferences) {
    // ...
  },

  languages: {
    'pt': pt,
    'en': en
  }
});