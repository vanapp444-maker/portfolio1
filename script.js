const tg = window.Telegram.WebApp;
tg.expand(); // Разворачиваем на все окно

let products = [
    { name: "Наушники Air", price: 199, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { name: "Watch Series X", price: 399, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" }
];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    event.currentTarget.classList.add('active');
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <div class="product-info">
                <div>${p.name}</div>
                <div class="product-price">$${p.price}</div>
            </div>
        </div>
    `).join('');
}

function addProduct() {
    const name = document.getElementById('pName').value;
    const price = document.getElementById('pPrice').value;
    const img = document.getElementById('pImg').value || "https://via.placeholder.com/400";

    if(name && price) {
        products.unshift({ name, price, img });
        renderProducts();
        showPage('feed');
        tg.showAlert("Товар успешно добавлен!");
        
        // Очистка полей
        document.getElementById('pName').value = '';
        document.getElementById('pPrice').value = '';
    } else {
        tg.showAlert("Заполните все поля");
    }
}

// Инициализация
renderProducts();
