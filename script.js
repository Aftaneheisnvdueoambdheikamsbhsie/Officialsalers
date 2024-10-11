const cartItems = [
    { product: 'Product 1', price: 50, quantity: 1 },
    { product: 'Product 2', price: 100, quantity: 2 },
    { product: 'Product 3', price: 75, quantity: 1 },
];

const cartItemsContainer = document.getElementById('cart-items');
cartItems.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.product}</td><td>$${item.price}</td><td>${item.quantity}</td>`;
    cartItemsContainer.appendChild(row);
});

const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sep 1', 'Sep 2', 'Sep 3', 'Sep 4', 'Sep 5', 'Sep 6', 'Sep 7'],
        datasets: [{
            label: 'Sales',
            data: [60000, 50000, 70000, 80000, 40000, 90000, 65000],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
