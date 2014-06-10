jquery.spintext
===============

A jQuery plugin to update numbers by spinning from one value to another.

## Usage

```
// Call the spinText function with a new value to spin to and any options
$(...).spinText(newValue, options);

// Examples
$(...).spinText(150);
$(...).spinText(150, { duration: 1000 });
$(...).spinText(150.00, { precision: 2 });
```

The complete set of options is as follows:

 * `precision`: The number of decimal places to spin digits for (default: 0)
 * `startValue`: The number to spin from. (defaults to element text parsed with
   precision of `precision`)
 * `duration`: The time to animate for in milliseconds (default: 2000)
 * `easing`: As per jQuery.animate()
 * `queue`: As per jQuery.animate()
 * `finalize`: Optional callback function to finalize presentation of the
   element being spun at the end of animation. Overrides the default behaviour,
   which is to show the new value at the specified precision
 * `complete`: Optional callback function to perform arbitrary tasks after
   animation and finalization
