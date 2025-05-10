const data = [
    { id: 1, name: "Cheeseburger", price: 5.99, category: "burger" },
    { id: 2, name: "Pizza", price: 8.99, category: "pizza" },
    { id: 3, name: "Tacos", price: 3.99, category: "mexican" },
    { id: 4, name: "Sushi", price: 11.99, category: "japanese" },
    { id: 5, name: "Fried Chicken", price: 7.99, category: "burger" },
    { id: 6, name: "Grilled Cheese", price: 4.99, category: "burger" }
];

let orders = [];

// Fetch and display menu
function getMenu() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const menuList = document.getElementById("menu-list");
            data.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `${item.name} - $${item.price}`;
                menuList.appendChild(listItem);
            });
            resolve(data);
        }, 500);
    });
}

// Place order
function takeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            orders = data.filter(item => item.category === "burger").sort(() => Math.random() - 0.5).slice(0, 3);
            resolve(orders);
        }, 2500);
    });
}

// Prepare order
function orderPrep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

// Process payment
function payOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

// Thank you message
function thankYouFnc(orderStatus) {
    if (orderStatus.paid) {
        alert("Thank you for dining with us!");
    }
}



window.onload = function () {
    getMenu()
        .then(() => takeOrder())
        .then(order => {
            // document.getElementById("order-details").textContent = `Order placed: ${order.map(item => item.name).join(", ")}`;
            return orderPrep();
        })
        .then(orderStatus => {
            // document.getElementById("order-details").textContent += " | Preparing...";
            return payOrder();
        })
        .then(finalStatus => {
            // document.getElementById("order-details").textContent += " | Payment Completed!";
            thankYouFnc(finalStatus);
        })
        .catch(error => console.error("Error:", error));
};

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'block';
}

