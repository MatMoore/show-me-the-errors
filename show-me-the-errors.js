function rejigChecks() {
  document.querySelectorAll(".merge-status-item").forEach((check) => {
    const icon = check.querySelector(".merge-status-icon > svg");
    const parent = check.parentElement;

    if (icon.classList.contains("octicon-x")) {
      console.log("Moving failed check to the top");
      parent.removeChild(check);
      parent.prepend(check);
    }
  });
}

window.addEventListener("load", (_) => setTimeout(rejigChecks, 1000));
