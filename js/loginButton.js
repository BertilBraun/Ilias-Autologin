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
    const button = getElementByXpath("/html/body/div[2]/header/div/ul/li[3]/a");

    if (button?.textContent.includes("Anmelden")) {
      clearInterval(interval);
      button.click();
    }

    return logic;
  })(),
  1000
);
