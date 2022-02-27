function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

function login() {
  const button = getElementByXpath(
    "/html/body/div[2]/header/div/ul/li[3]/button"
  );

  if (button?.textContent.includes("Anmelden")) {
    clearInterval(interval);
    button.click();
  }
}

const interval = setInterval(login, 200);
