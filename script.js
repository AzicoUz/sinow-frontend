
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
