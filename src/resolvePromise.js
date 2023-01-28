function resolvePromise(promiseToResolve, promiseState, notify) {
  promiseState.promise = promiseToResolve;
  promiseState.data = null;
  promiseState.error = null;

  function saveDataACB(result) {
    if (promiseState.promise !== promiseToResolve) {
      return;
    }

    promiseState.data = result;

    if (notify) {
      notify();
    }
  }

  // triggers UI update because of changing state
  function saveErrorACB(err) {
    if (promiseState.promise !== promiseToResolve) {
      return;
    }
    promiseState.error = err;
    if (notify) {
      notify();
    }
  }

  if (promiseToResolve) {
    promiseToResolve
      .then(saveDataACB)
      .then(notify)
      .catch(saveErrorACB)
      .then((e) => {});
  }
}

export default resolvePromise;
