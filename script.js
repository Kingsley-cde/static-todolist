document.addEventListener("DOMContentLoaded", () => {
  let deletebtns = document.querySelectorAll(".manage button:last-child");
  deletebtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let item = btn.closest(".item");
      item.remove();
    });
  });
});

function addtodo() {
  let x = document.getElementById("txtinput").value;

  if (x.trim() !== "") {
    let templateitem = document.querySelector(".item");
    let newitem = templateitem.cloneNode(true);

    newitem.querySelector(
      "div:first-child"
    ).innerHTML = `<input type="checkbox" /> ${x}`;
    newitem.querySelector('input[type="checkbox"]').checked = false;
    let deletebtn = newitem.querySelector(".manage button:last-child");
    deletebtn.addEventListener("click", () => {
      newitem.remove();
    });
    let todolist = document.querySelector(".todos-list");
    todolist.appendChild(newitem);
    document.getElementById("txtinput").value = "";
  }
}

function deleteitem() {
  let t = document.querySelector(".item");
  t.remove();
}
