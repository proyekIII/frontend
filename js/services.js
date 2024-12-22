// services.js
document.addEventListener('DOMContentLoaded', () => {
    const services = []; // Simulasi database layanan

    const form = document.getElementById('add-service-form');
    const tableBody = document.getElementById('services-table');

    // Fungsi untuk menampilkan layanan di tabel
    const renderServices = () => {
        tableBody.innerHTML = '';
        services.forEach((service, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${service.name}</td>
                <td>$${service.price}</td>
                <td><button onclick="deleteService(${index})">Delete</button></td>
            `;
            tableBody.appendChild(row);
        });
    };

    // Tambahkan layanan baru
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const serviceName = document.getElementById('service-name').value;
        const servicePrice = document.getElementById('service-price').value;
        if (serviceName && servicePrice) {
            services.push({ name: serviceName, price: servicePrice });
            renderServices();
            form.reset();
        }
    });

    // Fungsi untuk menghapus layanan
    window.deleteService = (index) => {
        services.splice(index, 1);
        renderServices();
    };
});
