let btn_add_user = document.getElementById("btn-add-user");

let input_user_password = document.getElementById("user-password");
let input_user_name = document.getElementById("user-name");

let user_cards = document.getElementById("user-cards");

let users = [];
class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

function createUserCardTemplate(name, password) {
  return `
  <div
  class="container p-3 border d-flex align-items-center justify-content-between rounded bg-light user-card"
  >
  <div class="name">${name}</div>
  <div class="password">${password}</div>
  <input
    type="button"
    value="x"
    class="btn btn-secondary btn-delete"
  />
</div>
    `;
}
function addDeleteEvent() {
  let btns_delete = document.getElementsByClassName("btn-delete");
  for (let i = 0; i < btns_delete.length; i++) {
    btns_delete[i].onclick = () => {
      const name = btns_delete[i].parentNode.childNodes[1].innerHTML;
      const password = btns_delete[i].parentNode.childNodes[3].innerHTML;

      users = users.filter((user) => user.name != name);
      render();
      addDeleteEvent();
    };
  }
}
function render() {
  user_cards.innerHTML = "";
  users.forEach((user) => {
    user_cards.innerHTML += createUserCardTemplate(user.name, user.password);
  });
}

btn_add_user.onmousedown = () => {
  let name = input_user_name.value;
  let password = input_user_password.value;

  if (name.length > 0 && password.length > 0) {
    if (!users.some((user) => user.name == name && user.password == password)) {
      users.push(new User(input_user_name.value, input_user_password.value));
      render();
      addDeleteEvent();
    }
  }
};
