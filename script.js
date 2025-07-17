function toggleProgress() {
  document.getElementById("progress-box").classList.toggle("hidden");
}

function toggleBrowse() {
  const menu = document.getElementById("browseMenu");
  const dropdown = document.getElementById("browseDropdown");

  const isActive = menu.getAttribute("data-active") === "true";
  menu.setAttribute("data-active", !isActive);

  if (!isActive) {
    dropdown.classList.remove("hidden");
  } else {
    dropdown.classList.add("hidden");
  }
}

window.addEventListener("click", function (e) {
  const menu = document.getElementById("browseMenu");
  const dropdown = document.getElementById("browseDropdown");

  if (!menu.contains(e.target)) {
    menu.setAttribute("data-active", "false");
    dropdown.classList.add("hidden");
  }
});
