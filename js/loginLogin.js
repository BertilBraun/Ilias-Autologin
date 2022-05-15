function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

var interval = setInterval(
  (function logic() {
    const submitButton = getElementByXpath('//*[@id="sbmt"]');
    const nameInput = getElementByXpath('//*[@id="name"]');
    const passwdInput = getElementByXpath('//*[@id="password"]');

    if (nameInput && passwdInput && submitButton) {
      clearInterval(interval);

      const inputInterval = setInterval(
        (function input() {
          if (nameInput.value.length == 5 && passwdInput.value.length >= 4) {
            submitButton.click();
            clearInterval(inputInterval);
          }
          return input;
        })(),
        1000
      );
    }

    return logic;
  })(),
  1000
);
