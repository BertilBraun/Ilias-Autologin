function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

const interval = setInterval(() => {
  const submitButton = getElementByXpath('//*[@id="sbmt"]');
  const nameInput = getElementByXpath('//*[@id="name"]');
  const passwdInput = getElementByXpath('//*[@id="password"]');

  if (nameInput && passwdInput && submitButton) {
    clearInterval(interval);

    const inputInterval = setInterval(() => {
      if (nameInput.value.length == 5 && passwdInput.value.length >= 4) {
        clearInterval(inputInterval);
        submitButton.click();
      }
    }, 200);
  }
}, 1000);
