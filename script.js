document.addEventListener("DOMContentLoaded", () => {
    fetch('products.json')
      .then(res => res.json())
      .then(products => {
        renderTable(products);
      });

    function renderTable(products) {
        const tbody = document.querySelector("#productTable tbody");
        tbody.innerHTML = "";
        products.forEach((product, idx) => {
            tbody.innerHTML += `
            <tr>
                <td>${idx + 1}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>
                    <button class="buy-btn" title="Buy"><i class="fa fa-shopping-cart"></i></button>
                </td>
                <td>
                    <button class="pic-btn" title="View Picture" onclick="window.open('${product.image}','_blank')">
                        <i class="fa fa-camera"></i>
                    </button>
                </td>
            </tr>
            `;
        });
    }
});
