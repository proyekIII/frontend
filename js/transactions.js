// transactions.js
document.addEventListener('DOMContentLoaded', () => {
    // Simulasi data transaksi
    const transactions = [
        { id: 1, date: '2024-12-22', service: 'Haircut', amount: 20, cashier: 'John Doe' },
        { id: 2, date: '2024-12-22', service: 'Hair Spa', amount: 50, cashier: 'Jane Smith' },
        { id: 3, date: '2024-12-21', service: 'Manicure', amount: 30, cashier: 'John Doe' },
        { id: 4, date: '2024-12-20', service: 'Haircut', amount: 20, cashier: 'Jane Smith' },
    ];

    // Referensi tabel
    const tableBody = document.getElementById('transactions-table');

    // Tambahkan data ke tabel
    transactions.forEach((trx, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${trx.date}</td>
            <td>${trx.service}</td>
            <td>$${trx.amount}</td>
            <td>${trx.cashier}</td>
        `;
        tableBody.appendChild(row);
    });
});
