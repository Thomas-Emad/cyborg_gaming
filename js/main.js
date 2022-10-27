// Show List menu
let statusMenu = false;
function click_button() {
  if (statusMenu == false) {
    document.getElementsByClassName("menu")[0].style.transform =
      "translateY(0)";
    statusMenu = true;
  } else {
    document.getElementsByClassName("menu")[0].style.transform =
      "translateY(-500%)";
    statusMenu = false;
  }
}
