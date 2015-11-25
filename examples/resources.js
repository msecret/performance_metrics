
(function(win) {

  function resourcesTime() {
    setTimeout(function() {
      var resources = win.performance.getEntriesByType('resource'),
          duration,
          durations = [],
          i = 0,
          ilen;

      for (ilen = resources.length; i < ilen; i++) {
        durations.push(resources[i].duration);   
      }

      // TODO don't get the max duration, get the event with the max duration
      // and use performance.measure for that.
      duration = Math.max.apply(null, durations);

      // TODO figure out what to put this in window.performance entries.
      console.log('resources', duration);
    }, 0);
  };

  // TODO need something to wait for async resources here, probably a plugin.
  win.addEventListener('load', resourcesTime);

})(window);
