# Alert Box

The Alert Box is the most used widget at Streamlabs. When an event occurs, such as a new follow or a tip, the Alert Box activates and shows an animation, or picture, or whatever it has been set to. There are some featuress of the Alert Box which you can take advantage of to make the best alerts.

### Chromium
Both OBS Studio and Streamlabs Desktop base their Browser Source on Chrome / Chromium. You do not need to make your alerts cross-browser compatible. Therefore it is recommended to test your alerts using Google Chrome. If you use another browser the alerts may not work properly, this mostly applies to videos and sounds.

### jQuery
jQuery comes pre-loaded in all alerts, it is the easiest way to manipulate the DOM (Document Object Model) ((The part that we see))

[jQuery Documentation](https://api.jquery.com/)

### Auto Reset
The Alert DOM will automatically fade out and reset after the Alert duration. This allows the next alert to come in within its own scope. ei, the CSS code from one alert will not effect another. The side effect of this is that if you have a longer video or animation than the Alert duration it may get cut short. Remember to adjust your Alert duration to be ~1 second longer than the time you need.

### The Queue

When a new event happens that event is sent into a queue to wait for its turn to be shown. If the queue is empty it will be shown right away. The queue takes into account each alerts set duration. Once an alert has gone through its duration the alert will fade out and the next one will be allowed to play.

When using custom code, especially with CSS or JS animations, you should set the alert duration to be approximately 1 second longer than you need it to be. This will help avoid the alert being cut off prematuraly.

## How To use...

### Sounds

It is recomended that you use the Sound Library in the Alert Box settings to play any sound associated with the alert.

## Images

You can use self-hosted images or use the Image Gallery, to input an image from the Image Gallery into an alert use `{img}`. It will be replaced with the html code for the image.

## Videos

It is recomended that you use the Image Gallery to host your video's. If you need more control over the video you can self-host the video and use javascript to manipulate it:
```
<script>
  $('#id_of_video').each(function() {
    $(this).removeClass('hidden');
    $(this)[0].play();
  });
</script>
```

You can avoid a flash of the video at the start of the alert by starting the video as `display: hidden` then removing that style or class.

Because the Alert Box 'resets' after each Alert you may see slight variation as to when the video starts in relation to when other parts of the alert are shown. It is best to use the Image Gallery to not only lower the chance of this happening, but it will also save you and your host in bandwidth charges.

## Third Party Scripts

You can add any script you need from a CDN (Content Delivery Network). However it is best to keep the use of external scripts to a minimum. The most common scripts added to alerts are those which aid with animation such as [Anime.js](https://animejs.com/) or [Velocity.js](http://velocityjs.org/).

The alert may try to start before a library that it depends on is loaded. You can use this helper script to make sure that the library is loaded before the Alert starts.

```
const scripts = ['https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js'];
// Load multiple scripts by seperating with a ,
let fetchedStatus = {};
scripts.forEach(script => fetchedStatus[script] = false);
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
  // Write your custom code here
});
```

Be sure to play this, and any code you write within the `$(document).ready()` function
