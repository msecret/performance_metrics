
(function(win) {

  function accurateMeasurement() {
    setTimeout(function() {
      win.performance.measure('onload', 'navigationStart', 'loadEventEnd');
      var measure = win.performance.getEntriesByName('onload');
      console.log('onload', measure[0]);
    }, 0);
  }
  win.addEventListener('load', accurateMeasurement);

  var onLoadStart = new Date().getTime();
  function crossBrowserMeasurement() {
    setTimeout(function() {
      var onLoadNow = new Date().getTime();
      var latency = onLoadNow - onLoadStart;
      console.log("onload " + latency);
    }, 0);
  }
  win.addEventListener('load', crossBrowserMeasurement);

})(window);
