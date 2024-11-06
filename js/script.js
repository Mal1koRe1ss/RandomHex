document.querySelector('.button').addEventListener('click', function() {
    // Rastgele bir renk oluştur
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    // Arka plan rengini ayarla
    document.body.style.backgroundColor = randomColor;
    
    // H3'ün içeriğini ve rengini ayarla
    const h3 = document.querySelector('.color');
    h3.textContent = randomColor;
    h3.style.color = getComplementaryColor(randomColor);

    const button = document.querySelector('.button');
    button.style.backgroundColor = getComplementaryColor(randomColor);
    button.style.color = randomColor;

    const cc = document.querySelector('.cc');
    cc.style.color = getComplementaryColor(randomColor)
});

// Tamamlayıcı rengi hesaplayan fonksiyon
function getComplementaryColor(hex) {
    // Hex rengini RGB'ye çevir
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    
    // Tamamlayıcı rengi hesapla
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    
    // RGB'yi hex formatına çevir
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}