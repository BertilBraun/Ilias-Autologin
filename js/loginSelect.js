function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

const interval = setInterval(
  (function logic() {
    const button = getElementByXpath('//*[@id="button_shib_login"]');
    if (button) {
      button.click();
      clearInterval(interval);
    }
    return logic;
  })(),
  200
);
