export function changeLanguage(language: string) {
  const htmlElement = document.getElementById("html");
  if (htmlElement) {
    htmlElement.setAttribute("lang", "cz");
  }
  if (language === "en") {
    return "cz";
  } else {
    if (htmlElement) {
      htmlElement.setAttribute("lang", "en");
    }
    return "en";
  }
}
