(function($) {
  $.fn.spinText = function(newValue, options) {
    var self = this;

    var settings = $.extend({}, $.fn.spinText.defaults, { startValue: self.text() }, options);
    var startValue = (settings.precision > 0) ? parseFloat(settings.startValue) : parseInt(settings.startValue);
        
    $({
      spinValue: startValue
    })
    .animate({
      spinValue: newValue
    }, {
      duration: settings.duration,
      easing: settings.easing,
      queue: settings.queue,
      step: function() {
        if (settings.precision > 0) {
          self.text(this.spinValue.toFixed(settings.precision));
        } else {
          self.text(Math.ceil(this.spinValue));
        }
      },
      complete: function() {
        if (typeof settings.finalize == 'function') {
          settings.finalize.call(self);
        } else {
          self.text(this.spinValue.toFixed(settings.precision));
        }

        settings.complete.call(self);
      }
    });
    return this;
  }
  
  $.fn.spinText.defaults = {
    precision: 0,
    duration: 2000,
    easing: 'swing',
    queue: false,
    finalize: null,
    complete: function() {},
  }
})(jQuery);
