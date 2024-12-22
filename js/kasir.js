// kasir.js

function deleteCashier(id) {
    if (confirm("Are you sure you want to delete this cashier?")) {
        // Implementasi penghapusan kasir, misalnya dengan AJAX atau mengirim request ke server
        console.log("Kasir with ID " + id + " will be deleted.");
        // Contoh kode backend untuk menghapus kasir melalui API atau form
        // fetch('/delete_cashier?id=' + id, { method: 'DELETE' });
    }
}
