var $ = function (...args) {
  var t = document.querySelectorAll(...args);
  if (t.length == 1) return t[0];
  return t
};

document.addEventListener("DOMContentLoaded", function (event) {
  console.log('hellooo')
});