
(function(win) {

  function renderingTime() {
    setTimeout(function() {
      win.performance.measure('rendering', 'domLoading', 'domComplete'); 
      var measure = win.performance.getEntriesByName('rendering');
      console.log('rendering', measure[0]);
    }, 0);
  };

  win.addEventListener('load', renderingTime);

})(window);
