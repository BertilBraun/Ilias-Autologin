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
    const button = getElementByXpath("/html/body/div[3]/header/div/ul/li[3]/a");

    console.log("Found Button:", button?.textContent);
    if (button?.textContent.includes("Anmelden")) {
      clearInterval(interval);
      button.click();
    }

    return logic;
  })(),
  1000
);
