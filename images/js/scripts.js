// Sample data
console.log(12121212);

const cities = ['تهران', 'مشهد', 'اصفهان', 'شیراز', 'تبریز'];
const categories = [
    { name: 'املاک', icon: 'fa-house' },
    { name: 'وسایل نقلیه', icon: 'fa-car' },
    { name: 'کالای دیجیتال', icon: 'fa-mobile-button' },
    { name: 'خانه و آشپزخانه', icon: 'fa-kitchen-set' },
    { name: 'خدمات', icon: 'fa-brush' },
    { name: 'وسایل شخصی', icon: 'fa-clock' },
    { name: 'سرگرمی و فراغت', icon: 'fa-dice' },
    { name: 'اجتماعی', icon: 'fa-user-group' },
    { name: 'تجهیزات و صنعتی', icon: 'fa-chair' },
    { name: 'استخدام و کاریابی', icon: 'fa-briefcase' }
];

const products = [
    { id: 1, name: 'دستگاه آبلیموگیری', price: 'توافقی', location: 'تهران، یافت‌آباد', category: 'خانه و آشپزخانه', image: './images/img1.PNG' },
    { id: 2, name: '206 تیپ 2', price: '۲۸۱,۰۰۰,۰۰۰ تومان', location: 'تهران، صادقیه', category: 'وسایل نقلیه', image: './images/img2.PNG' },
    { id: 3, name: 'NS 200', price: '۶۸,۵۰۰,۰۰۰ تومان', location: 'تهران، شهرک غرب', category: 'وسایل نقلیه', image: './images/img3.PNG' },
    { id: 4, name: 'آپارتمان 80 متری', price: '2,000,000,000 تومان', location: 'مشهد، احمدآباد', category: 'املاک', image: './images/img4.PNG' },
    { id: 5, name: 'لپ تاپ لنوو', price: '15,000,000 تومان', location: 'اصفهان، چهارباغ', category: 'کالای دیجیتال', image: './images/img5.PNG' },
    // Add more products for different cities and categories
];

// DOM elements
const citySelection = document.getElementById('citySelection');
const citySearch = document.getElementById('citySearch');
const cityList = document.getElementById('cityList');
const mainContent = document.getElementById('mainContent');
const cityHeader = document.getElementById('cityHeader');
const categoryList = document.getElementById('categoryList');
const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const productModal = document.getElementById('productModal');
const productDetails = document.getElementById('productDetails');
const closeProductModal = document.querySelector('.close');
const themeToggle = document.getElementById('themeToggle');

let selectedCity = '';
let currentProducts = [];

// Initialize the app
function init() {
    renderCities();
    setupEventListeners();
    loadTheme();
}

// Render cities in the city selection screen
function renderCities(filteredCities = cities) {
    cityList.innerHTML = filteredCities.map(city => `
        <li data-city="${city}">${city}</li>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    citySearch.addEventListener('input', filterCities);
    cityList.addEventListener('click', selectCity);
    categoryList.addEventListener('click', filterByCategory);
    productList.addEventListener('click', openProductModal);
    closeProductModal.addEventListener('click', closeModal);
    window.addEventListener('click', closeModalOutside);
    searchInput.addEventListener('input', searchProducts);
    themeToggle.addEventListener('click', toggleTheme);
}

// Filter cities based on search input
function filterCities() {
    const searchTerm = citySearch.value.toLowerCase();
    const filteredCities = cities.filter(city => city.toLowerCase().includes(searchTerm));
    renderCities(filteredCities);
}

// Select a city
function selectCity(e) {
    if (e.target.tagName === 'LI') {
        selectedCity = e.target.dataset.city;
        citySelection.style.display = 'none';
        mainContent.style.display = 'flex';
        cityHeader.textContent = `${selectedCity}: انواع آگهی‌ها و خدمات`;
        currentProducts = products.filter(product => product.location.startsWith(selectedCity));
        renderCategories();
        renderProducts(currentProducts);
    }
}

// Render categories
function renderCategories() {
    categoryList.innerHTML = categories.map(category => `
        <li data-category="${category.name}">
            <i class="fa-solid ${category.icon}"></i>
            ${category.name}
        </li>
    `).join('');
}

// Render products
function renderProducts(productsToRender) {
    productList.innerHTML = productsToRender.map(product => `
        <div class="product-box" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.location}</p>
        </div>
    `).join('');
}

// Filter products by category
function filterByCategory(e) {
    if (e.target.tagName === 'LI') {
        const category = e.target.dataset.category;
        const filteredProducts = category === 'همه' 
            ? currentProducts 
            : currentProducts.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

// Search products
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = currentProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.location.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}

// Open product modal
function openProductModal(e) {
    const productBox = e.target.closest('.product-box');
    if (productBox) {
        const productId = parseInt(productBox.dataset.id);
        const product = products.find(p => p.id === productId);
        if (product) {
            productDetails.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>قیمت: ${product.price}</p>
                <p>محل: ${product.location}</p>
                <p>دسته بندی: ${product.category}</p>
            `;
            productModal.style.display = 'block';
        }
    }
}

// Close modal
function closeModal() {
    productModal.style.display = 'none';
}

// Close modal when clicking outside
function closeModalOutside(e) {
    if (e.target === productModal) {
        productModal.style.display = 'none';
    }
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Initialize the app
init();