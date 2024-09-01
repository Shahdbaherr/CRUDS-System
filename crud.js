function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const quantity = document.getElementById("productQuantity").value;
  const category = document.getElementById("productCategory").value;

  if (!name || !price || !quantity || !category) {
    alert("Please fill in all fields!");
    return;
  }

  const tableBody = document.querySelector("#productTable tbody");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>$${parseFloat(price).toFixed(2)}</td>
    <td>${quantity}</td>
    <td>${category.charAt(0).toUpperCase() + category.slice(1)}</td>
    <td>
      <button onclick="editProduct(this)">Edit</button>
      <button onclick="deleteProduct(this)">Delete</button>
    </td>
  `;

  tableBody.appendChild(row);
  document.getElementById("productForm").reset();
}

function deleteProduct(button) {
  button.parentElement.parentElement.remove();
}

function editProduct(button) {
  const row = button.closest("tr");

  document.getElementById("productName").value = row.cells[0].textContent;
  document.getElementById("productPrice").value =
    row.cells[1].textContent.replace("$", "");
  document.getElementById("productQuantity").value = row.cells[2].textContent;
  document.getElementById("productCategory").value =
    row.cells[3].textContent.toLowerCase();

  deleteProduct(button);
}

function searchProduct() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#productTable tbody tr");

  rows.forEach((row) => {
    const productName = row.cells[0].textContent.toLowerCase();
    row.style.display = productName.includes(input) ? "" : "none";
  });
}
