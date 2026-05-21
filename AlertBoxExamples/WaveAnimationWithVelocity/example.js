$(document).ready(function () {

  // The following chunk of code makes sure that any dependent libraries are loaded before the alert is played

  const scripts = ['https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js'];
  let fetchedStatus = {};
  scripts.forEach(script => fetchedStatus[script] = false);
  // Function that checks if dependencies are loaded
  function ensureDependencies() {
    return new Promise((resolve, reject) => {
      if (Object.values(fetchedStatus).every(script => script)) {
        resolve();
      } else {
        Promise.all(scripts.map(script => getScriptPromise(script))).then(() => {
          resolve();
        }).catch(reason => {
          reject(reason);
        });
      }
    });
  }
  // Creates Promise that determines if script is loaded
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

  // Make sure scripts are loaded.
  ensureDependencies().then(() => {

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    Array.prototype.random = function () {
      return this[Math.floor(Math.random() * this.length)]
    }

    function randomRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let newName = '';

    for (var i = 0; i < $('#get_name').html().length; i++) {
      let currentchar = $('#get_name').html().charAt(i);

      let newNameChar = `<div class="make-wave" style="display: inline-block;">${currentchar}</div>`;
      newName = newName + newNameChar;
    }

    $('#get_name').html(newName)

    setTimeout(() => {
      $('#get_name').removeClass('hidden');
    }, 500);

    $('.make-wave').each(function (i) {
      i+1
      let thisDelay = 40*i;
      $(this)
      .velocity({translateY: "+=5", opacity: "0"}, 0)
      .velocity({translateY: "-=15", opacity: "1"}, {delay: thisDelay, duration: 700, easing: [300,25]})
      .velocity({color: "#0000ff"}, {delay: 600, duration: 300, easing: 'linear'})
      .velocity("reverse")
                .velocity({color: "#000000"}, {delay: 900, duration: 500, easing: 'linear'})
      .velocity("reverse")

      .velocity({translateY: "+=5", opacity: 0}, {delay: 1900 - (thisDelay * 2), duration: 550, easing: 'ease-out'});
    });




  });
});






