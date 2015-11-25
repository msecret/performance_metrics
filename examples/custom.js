
function convertMarkToResource(mark) {
  return {
    duration: mark.startTime,
    entryType: 'resource',
    initiatorType: 'DOM',
    name: mark.name
  };
}

function convertOtherToResource(other) {
  return {
    duration: other.responseEnd,
    entryType: other.entryType,
    initiatorType: other.initiatorType,
    name: other.name
  };
}

function findMaxDuration(entries) {
  var i = 0,
      ilen = entries.length,
      high = 0,
      max = null;

  for ( ; i < ilen; i++) {
    if (entries[i].duration >= high) {
      max = entries[i];
      high = entries.duration;
    }
  }

  return max;
}

(function(win) {

  // TODO what about background image? Can that work?
  win.trackCustom = function(name, imagesSelector) {
    win.performance.mark(name + '-mark');
    win.addEventListener('load', function() {
      var entry = win.performance.getEntriesByName(name + '-mark')[0];
      var resourceEntry = convertMarkToResource(entry);

      var images = document.querySelectorAll(imagesSelector);
      var resources = win.performance.getEntriesByType('resource');
      var resourceEntries = [];

      for (var i = 0, ilen = images.length; i < ilen; i++) {
        for (var j = 0, jlen = resources.length; j < jlen; j++) {
          if (images[i].currentSrc === resources[j].name) {
            resourceEntries.push(convertOtherToResource(resources[j]));
          }
        }
      }
      var max = findMaxDuration([resourceEntry].concat(resourceEntries));

      win.performance.measure(name, 'navigationStart', max.name);
      var measure = win.performance.getEntriesByName(name);
      console.log(name, measure[0]);
    });
  };

})(window);
