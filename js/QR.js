const PRICE_PER_QR = 25;


function calculateTotal() {

  const quantityInput = document.getElementById("quantity");

  let quantity = Number(quantityInput.value);

  if (quantity < 1) {
    quantity = 1;
    quantityInput.value = 1;
  }

  if (quantity > 100) {
    quantity = 100;
    quantityInput.value = 100;
  }

  const total = quantity * PRICE_PER_QR;

  document.getElementById("total").textContent =
    "₹" + total;

}


function prepareQR() {

  const quantity =
    Number(document.getElementById("quantity").value);

  const message =
    document.getElementById("message").value.trim();


  if (!quantity || quantity < 1) {

    showQRMessage(
      "Please enter a valid quantity."
    );

    return;

  }


  const purchaseData = {

    quantity: quantity,

    amount: quantity * PRICE_PER_QR,

    message: message,

    createdAt: new Date().toISOString()

  };


  localStorage.setItem(
    "milgaya_pending_qr",
    JSON.stringify(purchaseData)
  );


  showQRMessage(
    "QR purchase setup saved. Payment and QR generation will be connected later."
  );

}


function showQRMessage(message) {

  const element =
    document.getElementById("qrMessage");

  if (element) {

    element.textContent = message;

  }

}


document.addEventListener("DOMContentLoaded", () => {

  calculateTotal();

});