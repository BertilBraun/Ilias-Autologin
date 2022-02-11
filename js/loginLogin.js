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

    function checkIfIsCorrect() {
      if (nameInput.value.length == 5) {
        submitButton.click();
      } else {
        setTimeout(checkIfIsCorrect, 1000);
      }
    }

    nameInput.addEventListener("change", function () {
      checkIfIsCorrect();
    });

    passwdInput.addEventListener("change", function () {
      checkIfIsCorrect();
    });
  }
}, 1000);
