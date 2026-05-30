let total = 0;

function addToCart(name, price) {
  let list = document.getElementById("cart-list");

  let item = document.createElement("li");
  item.textContent = name + " - " + price + " грн";
  list.appendChild(item);

  total += price;
  document.getElementById("total").textContent = total;
}
function pay() {
  const total = document.getElementById("total").innerText;

  if (total == 0) {
    alert("Кошик порожній!");
  } else {
    alert("Оплата успішна! Сума: " + total + " грн");
    document.getElementById("cart-list").innerHTML = "";
    document.getElementById("total").innerText = "0";
  }
}
document.getElementById("regForm").addEventListener("submit", function(event) {
  event.preventDefault(); // зупиняє перехід на іншу сторінку

  document.getElementById("message").innerText = "ДЯКУЮ 🙏";
  document.getElementById("regForm").style.display = "none";
});