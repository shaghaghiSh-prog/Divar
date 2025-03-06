// Sample data
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
    { id: 1, name: 'دستگاه آبلیموگیری', price: 'توافقی', location: 'یافت‌آباد', category: 'خانه و آشپزخانه', image: './images/img1.PNG' },
    { id: 2, name: '206 تیپ 2', price: '۲۸۱,۰۰۰,۰۰۰ تومان', location: 'صادقیه', category: 'وسایل نقلیه', image: './images/img2.PNG' },
    { id: 3, name: 'NS 200', price: '۶۸,۵۰۰,۰۰۰ تومان', location: 'شهرک غرب', category: 'وسایل نقلیه', image: './images/img3.PNG' },
    // Add more products here
];

// DOM elements
const locationBtn = document.getElementById('locationBtn');
const selectedCity = document.getElementById('selectedCity');
const cityModal = document.getElementById('cityModal');
const citySearch = document.getElementById('citySearch');
const cityList = document.getElementById('cityList');
const cityHeader = document.getElementById('cityHeader');
const categoryList = document.getElementById('categoryList');
const productList = document.getElementById('productList');
const productModal = document.getElementById('productModal');
const productDetails = document.getElementById('productDetails');
const closeProductModal = document.querySelector('.close');

// Initialize the app
function init() {
    loadCity();
    renderCategories();
    renderProducts();
    setupEventListeners();
}

// Load city from localStorage or set default
function loadCity() {
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity) {
        selectedCity.textContent = savedCity;
        cityHeader.textContent = `${savedCity}: انواع آگهی‌ها و خدمات`;
    }
}

// Render categories
function renderCategories() {
    categoryList.innerHTML = categories.map(category => `
        <li>
            <a href="#" data-category="${category.name}">
                <i class="fa-solid ${category.icon}"></i>
                ${category.name}
            </a>
        </li>
    `).join('');
}

// Render products
function renderProducts(filteredProducts = products) {
    productList.innerHTML = filteredProducts.map(product => `
        <div class="box" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <p>${product.location}</p>
        