// Dependency Loader
// Use this when your alert relies on a third-party library loaded from a CDN (e.g. Velocity.js, Anime.js).
// Wrap your alert code inside the .then() callback to guarantee the library is available before it runs.
//
// Usage: add your CDN URLs to the scripts array, then write your code inside ensureDependencies().then(() => { ... })

$(document).ready(function () {

  const scripts = [
    'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js',
  ];

  let fetchedStatus = {};
  scripts.forEach(script => fetchedStatus[script] = false);

  function ensureDependencies() {
    return new Promise((resolve, reject) => {
      if (Object.values(fetchedStatus).every(status => status)) {
        resolve();
      } else {
        Promise.all(scripts.map(script => getScriptPromise(script)))
          .then(() => resolve())
          .catch(reason => reject(reason));
      }
    });
  }

  function getScriptPromise(script) {
    return new Promise((resolve, reject) => {
      $.getScript(script).done(() => {
        fetchedStatus[script] = true;
        resolve();
      }).fail(() => {
        reject(`external javascript error: script ${script} failed to load`);
      });
    });
  }

  ensureDependencies().then(() => {
    // Write your alert code here
  });

});
