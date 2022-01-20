function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

function login(button) {
  if (button?.textContent.includes("Anmelden")) {
    window.location.href =
      "https://ilias.studium.kit.edu/login.php?target=root_1&client_id=produktiv&cmd=force_login&lang=de";
  }
}

const button = getElementByXpath(
  "/html/body/div[2]/header/div/ul/li[3]/button"
);

if (button) {
  login(button);
} else {
  setTimeout(() => {
    login(getElementByXpath("/html/body/div[2]/header/div/ul/li[3]/button"));
  }, 1000);
}
