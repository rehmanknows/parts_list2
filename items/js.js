function resetQuantity(button) {
  const item = button.closest(".item");
  item.dataset.quantity = "0";
  const badge = item.querySelector(".badge");
  badge.textContent = "0";
}
