
(function(win) {

  function backendTime() {
    setTimeout(function() {
      win.performance.measure('backend', 'navigationStart', 'responseEnd'); 
      var measure = win.performance.getEntriesByName('backend');
      console.log('backend', measure[0]);
    }, 0);
  };

  win.addEventListener('load', backendTime);

})(window);
