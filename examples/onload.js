
(function(win) {

  function accurateMeasurement() {
    setTimeout(function() {
      win.performance.measure('navigationStart', 'loadEventEnd');
      var measure = window.performance.getEntriesByName('navigationStart');
      console.log('onload', measure[0]);
    }, 0);
  }
  window.addEventListener('load', accurateMeasurement);

  var onLoadStart = new Date().getTime();
  function crossBrowserMeasurement() {
    setTimeout(function() {
      var onLoadNow = new Date().getTime();
      var latency = onLoadNow - onLoadStart;
      console.log("onload " + latency);
    }, 0);
  }
  window.addEventListener('load', crossBrowserMeasurement);

})(window);
