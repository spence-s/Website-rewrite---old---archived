/*
 * Ensures document nodes are loaded before starting javascript
*/

export default function ready(callback) {
  if (
    document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.doScroll)
  ) {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}
