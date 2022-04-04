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
    const button = getElementByXpath(
      "/html/body/div[2]/header/div/ul/li[3]/button"
    );

    if (button?.textContent.includes("Anmelden")) {
      button.click();
      clearInterval(interval);
    }

    return logic;
  })(),
  200
);
