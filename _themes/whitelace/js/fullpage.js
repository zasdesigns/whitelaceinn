(function() {
  var browserHeightSection,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  browserHeightSection = (function() {
    var debounce;

    function browserHeightSection() {
      this.increaseSectionHeight = __bind(this.increaseSectionHeight, this);
      var resizeSection;
      this.increaseSectionHeight();
      resizeSection = debounce((function(_this) {
        return function() {
          return _this.increaseSectionHeight();
        };
      })(this), 50);
      window.addEventListener("resize", resizeSection);
    }

    browserHeightSection.prototype.increaseSectionHeight = function() {
      var windowHeight;
      windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return $('section').height(windowHeight).each(function() {
        var section, sectionTopMargin;
        section = $(this).find('.inner');
        sectionTopMargin = (section.height() / 2) * -1 + 'px';
        return section.css('margin-top', sectionTopMargin);
      });
    };

    debounce = function(func, wait, immediate) {
      var timeout;
      timeout = void 0;
      return function() {
        var args, callNow, context, later;
        context = this;
        args = arguments;
        later = function() {
          timeout = null;
          if (!immediate) {
            func.apply(context, args);
          }
        };
        callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
          func.apply(context, args);
        }
      };
    };

    return browserHeightSection;

  })();

  $(function() {
    if ($('.csstransforms').length === 0) {
      return new browserHeightSection();
    }
  });

}).call(this);
