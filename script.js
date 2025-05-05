
// To'lov kartasi turini tanlashga bog'liq bo'lgan event listener
document.getElementById('paymentMethod').addEventListener('change', function() {
    // Kartani tanlagan paytda to'lov maydonlarini ko'rsatish yoki yashirish
    let paymentMethod = this.value;

    // Hammasini yashirish
    document.getElementById('humoFields').style.display = 'none';
    document.getElementById('uzcardFields').style.display = 'none';
    document.getElementById('visaFields').style.display = 'none';

    // Tanlangan karta bo'yicha kerakli maydonni ko'rsatish
    if (paymentMethod === 'Humo') {
        document.getElementById('humoFields').style.display = 'block';
    } else if (paymentMethod === 'UzCard') {
        document.getElementById('uzcardFields').style.display = 'block';
    } else if (paymentMethod === 'Visa') {
        document.getElementById('visaFields').style.display = 'block';
    }
});

// Boshlang'ich holat: Agar hech narsa tanlanmagan bo'lsa, barcha to'lov maydonlarini yashirish
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('humoFields').style.display = 'none';
    document.getElementById('uzcardFields').style.display = 'none';
    document.getElementById('visaFields').style.display = 'none';
});
// Formani yuborishdan oldin:
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();  // Formani avtomatik yuborishdan to'xtatib turadi

    const formData = new FormData(this);  // Formadagi ma'lumotlarni olish

    // Fetch API orqali POST so'rovini yuborish
    fetch('https://sinow-backend.onrender.com/submit', {
        method: 'POST',
        body: formData  // Form ma'lumotlarini yuborish
    })
    .then(response => response.text())  // Javobni matn shaklida olish
    .then(data => {
        console.log(data);  // Serverdan kelgan javobni konsolga chiqarish
        alert('Ma\'lumotlar muvaffaqiyatli yuborildi!');  // Xabar berish
    })
    .catch(error => {
        console.error('Xato:', error);  // Xatolikni konsolga chiqarish
        alert('Ma\'lumotlar yuborishda xatolik yuz berdi!');  // Xato haqida bildirish
    });
});
