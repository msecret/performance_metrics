
(function(win) {

  function serverResponseTime() {
    setTimeout(function() {
      win.performance.measure('serverResponse',
                              'requestStart', 'responseEnd'); 
      var measure = win.performance.getEntriesByName('serverResponse');
      console.log('serverResponse', measure[0]);
    }, 0);
  };

  win.addEventListener('load', serverResponseTime);

})(window);
