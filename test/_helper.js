

(function (__global){
  'use strict';

  if(!__global.console){
    __global.console = { log : __global.dump || function (){} };
  }


  /**
   * Describe a block if the bool is true.
   * Will skip it otherwise.
   * @param bool
   * @returns {Function} describe or describe.skip
   */
  function describeIf(bool) {
    return (bool ? describe : describe.skip)
      .apply(null, Array.prototype.slice.call(arguments, 1));
  }

  __global.describeIf = describeIf;

  if (typeof babel != 'undefined')
    System.transpiler = 'babel';

  window.ie = typeof window != 'undefined' && window.navigator.userAgent.match(/Trident/);

  window.base = window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1);

}(typeof window != 'undefined' ? window : global));


