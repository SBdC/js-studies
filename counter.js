function setupCounter(el) {
  const element = el;
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    // eslint-disable-next-line immutable/no-mutation
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => { setCounter(counter += 1); });
  setCounter(0);
}

export default setupCounter;
