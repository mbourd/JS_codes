let variableToObserve = { value: 10, callback: null };

const observer = {
  set value(newValue) {
    if (newValue !== variableToObserve.value) {
      variableToObserve.value = newValue;
      if (typeof variableToObserve.callback === 'function') {
        variableToObserve.callback(newValue);
      }
    }
  },
  get value() {
    return variableToObserve.value;
  },
  setCallback(callback) {
    variableToObserve.callback = callback;
  }
};

// Set the callback function
observer.setCallback((newValue) => {
  console.log(`Value changed to: ${newValue}`);
});

// Use observer to modify the value
observer.value = 20; // This will trigger the callback

// Later changes
observer.value = 30; // This will also trigger the callback


class VariableObserver {
  value = null;
  callback = () => undefined;

  constructor(callback = () => undefined) {
    this.callback = callback;
  }

  setCallback(callback) {
    if (typeof callback !== 'function')
      throw new Error('callback must be a function');

    this.callback = callback;
  }


}
