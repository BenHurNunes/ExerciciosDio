const btn = document.getElementById('loadCat');
const img = document.getElementById('cat');

const getCat = async () => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        img.src = data[0].url;
        img.alt = 'A cute cat!';

    } catch (error) {
        console.error('Erro ao carregar gatinho:', error);
    }
}

getCat();

btn.addEventListener('click', getCat);