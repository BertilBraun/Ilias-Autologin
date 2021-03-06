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
    const button = getElementByXpath('//*[@id="button_shib_login"]');
    if (button) {
      clearInterval(interval);
      button.click();
    }
    return logic;
  })(),
  1000
);
