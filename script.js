const imagens = [
    'imagens/1.jpeg',
    'imagens/2.jpeg',
    'imagens/3.jpeg',
    'imagens/4.jpeg',
    'imagens/5.jpeg',
    'imagens/6.jpeg',
    'imagens/7.jpeg',
    'imagens/8.jpeg'
  ];

let activeIndex = 0;

function renderCarousel() {
  const card = document.getElementById('carouselCard');
  card.innerHTML = '';
  const img = document.createElement('img');
  img.src = imagens[activeIndex];
  img.alt = `Foto ${activeIndex + 1}`;
  card.appendChild(img);
  renderIndicators();
}

function renderIndicators() {
  const indicators = document.getElementById('carouselIndicators');
  indicators.innerHTML = '';
  imagens.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.className = 'carousel-indicator' + (idx === activeIndex ? ' active' : '');
    dot.onclick = () => {
      activeIndex = idx;
      renderCarousel();
    };
    indicators.appendChild(dot);
  });
}

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.onclick = function() {
  activeIndex = (activeIndex - 1 + imagens.length) % imagens.length;
  renderCarousel();
};
nextBtn.onclick = function() {
  activeIndex = (activeIndex + 1) % imagens.length;
  renderCarousel();
};

renderCarousel();

// --- Contador ---
function getTimeDiff(startDate) {
  const now = new Date();
  const start = new Date(startDate);
  let diff = Math.floor((now - start) / 1000);

  const anos = Math.floor(diff / (365 * 24 * 3600));
  diff -= anos * 365 * 24 * 3600;
  const meses = Math.floor(diff / (30 * 24 * 3600));
  diff -= meses * 30 * 24 * 3600;
  const dias = Math.floor(diff / (24 * 3600));
  diff -= dias * 24 * 3600;
  const horas = Math.floor(diff / 3600);
  diff -= horas * 3600;
  const minutos = Math.floor(diff / 60);
  const segundos = diff - minutos * 60;

  return { anos, meses, dias, horas, minutos, segundos };
}

function updateCounter() {
  const startDate = '2024-03-10T00:00:00';
  const time = getTimeDiff(startDate);
  document.getElementById('counter').innerHTML = `
    <div class="counter-box"><span>${String(time.anos).padStart(2, '0')}</span><br>anos</div>
    <div class="counter-box"><span>${String(time.meses).padStart(2, '0')}</span><br>meses</div>
    <div class="counter-box"><span>${String(time.dias).padStart(2, '0')}</span><br>dias</div>
    <div class="counter-box"><span>${String(time.horas).padStart(2, '0')}</span><br>horas</div>
    <div class="counter-box"><span>${String(time.minutos).padStart(2, '0')}</span><br>minutos</div>
    <div class="counter-box"><span>${String(time.segundos).padStart(2, '0')}</span><br>segundos</div>
  `;
}
setInterval(updateCounter, 1000);
updateCounter(); 