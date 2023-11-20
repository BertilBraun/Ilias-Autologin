function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

const submitButton = getElementByXpath('//*[@id="sbmt"]');
const nameInput = getElementByXpath('//*[@id="name"]');
const passwdInput = getElementByXpath('//*[@id="password"]');

if (nameInput && passwdInput && submitButton) {
  const checkInputsAndSubmit = () => {
    if (nameInput.value.length == 5 && passwdInput.value.length >= 4) {
      submitButton.click();
      // Remove event listeners after submission to prevent memory leaks
      nameInput.removeEventListener('input', checkInputsAndSubmit);
      passwdInput.removeEventListener('input', checkInputsAndSubmit);
    }
  };

  // Add event listeners to both input fields
  nameInput.addEventListener('input', checkInputsAndSubmit);
  passwdInput.addEventListener('input', checkInputsAndSubmit);
}
