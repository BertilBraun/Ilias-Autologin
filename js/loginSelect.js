function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

setInterval(() => {
  const button = getElementByXpath('//*[@id="button_shib_login"]');
  button?.click();
}, 1000);
