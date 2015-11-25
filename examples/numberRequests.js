
(function(win) {

  function numberRequests() {
    setTimeout(function() {
      var requests = win.performance.getEntriesByType('resource');
      console.log(requests);
      console.log('number of requests', requests.length);
    }, 0);
  };

  win.addEventListener('load', numberRequests);

})(window);
