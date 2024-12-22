// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    // Simulasi data transaksi (contoh)
    const transactions = [
        { id: 1, service: 'Haircut', amount: 20, cashier: 'John Doe', date: '2024-12-22' },
        { id: 2, service: 'Hair Spa', amount: 50, cashier: 'Jane Smith', date: '2024-12-22' },
        { id: 3, service: 'Haircut', amount: 20, cashier: 'John Doe', date: '2024-12-22' },
    ];

    // Hitung total pendapatan hari ini
    const totalRevenue = transactions.reduce((sum, trx) => sum + trx.amount, 0);

    // Hitung total transaksi
    const totalTransactions = transactions.length;

    // Cari layanan terpopuler
    const serviceCounts = {};
    transactions.forEach(trx => {
        serviceCounts[trx.service] = (serviceCounts[trx.service] || 0) + 1;
    });
    const topService = Object.keys(serviceCounts).reduce((a, b) =>
        serviceCounts[a] > serviceCounts[b] ? a : b
    );

    // Simulasi kasir aktif
    const cashierCounts = {};
    transactions.forEach(trx => {
        cashierCounts[trx.cashier] = (cashierCounts[trx.cashier] || 0) + 1;
    });
    const mostActiveCashier = Object.keys(cashierCounts).reduce((a, b) =>
        cashierCounts[a] > cashierCounts[b] ? a : b
    );

    // Update DOM
    document.querySelector('.stat:nth-child(1) p').textContent = `$${totalRevenue}`;
    document.querySelector('.stat:nth-child(2) p').textContent = totalTransactions;
    document.querySelector('.stat:nth-child(3) p').textContent = topService || '-';
    document.querySelector('.stat:nth-child(4) p').textContent = mostActiveCashier || '-';
});
