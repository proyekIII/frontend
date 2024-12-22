// categories.js
document.addEventListener('DOMContentLoaded', () => {
    const categories = []; // Simulasi database kategori

    const form = document.getElementById('add-category-form');
    const tableBody = document.getElementById('categories-table');

    // Fungsi untuk menampilkan kategori di tabel
    const renderCategories = () => {
        tableBody.innerHTML = '';
        categories.forEach((category, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${category}</td>
                <td><button onclick="deleteCategory(${index})">Delete</button></td>
            `;
            tableBody.appendChild(row);
        });
    };

    // Tambahkan kategori baru
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const categoryName = document.getElementById('category-name').value;
        if (categoryName) {
            categories.push(categoryName);
            renderCategories();
            form.reset();
        }
    });

    // Fungsi untuk menghapus kategori
    window.deleteCategory = (index) => {
        categories.splice(index, 1);
        renderCategories();
    };
});
