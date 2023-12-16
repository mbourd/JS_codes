function createObservableObject(initialData = {}) {
  const listeners = new Map();

  const notifyListeners = (prop) => {
      if (listeners.has(prop)) {
          listeners.get(prop).forEach((callback) => callback());
      }
  };

  const observable = new Proxy(initialData, {
      get(target, prop, receiver) {
          return Reflect.get(target, prop, receiver);
      },
      set(target, prop, value, receiver) {
          const success = Reflect.set(target, prop, value, receiver);
          if (success) {
              notifyListeners(prop);
          }
          return success;
      },
  });

  observable.addObserver = function (prop, callback) {
      if (!listeners.has(prop)) {
          listeners.set(prop, new Set());
      }
      listeners.get(prop).add(callback);
  };

  observable.removeObserver = function (prop, callback) {
      if (listeners.has(prop)) {
          const propListeners = listeners.get(prop);
          propListeners.delete(callback);
          if (propListeners.size === 0) {
              listeners.delete(prop);
          }
      }
  };

  return observable;
}

/////// Example:
// Creating an observable object
const observedObject = createObservableObject({});

// Adding observers for properties
observedObject.addObserver('currentHeaderElem', () => {
    console.log('currentHeaderElem changed:', observedObject.currentHeaderElem);
});

observedObject.addObserver('currentBodyElem', () => {
    console.log('currentBodyElem changed:', observedObject.currentBodyElem);
});

// Changing properties (simulating changes)
observedObject.currentHeaderElem = 'New Header';
observedObject.currentBodyElem = 'New Body';
