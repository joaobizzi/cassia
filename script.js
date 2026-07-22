  // ---------- Elementos de games no fundo (pixel art + controles) ----------
  const gamesFundo = document.getElementById('games-fundo');

  // cada item: [svg, tamanho em px]
  const spritesGames = [
    // coração pixelado (8-bit)
    [`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="1" y="2" width="3" height="1" fill="#ff9ec7"/><rect x="12" y="2" width="3" height="1" fill="#ff9ec7"/>
      <rect x="0" y="3" width="4" height="2" fill="#ff9ec7"/><rect x="12" y="3" width="4" height="2" fill="#ff9ec7"/>
      <rect x="4" y="3" width="8" height="2" fill="#ff9ec7"/>
      <rect x="0" y="5" width="16" height="2" fill="#ff9ec7"/>
      <rect x="1" y="7" width="14" height="2" fill="#ff9ec7"/>
      <rect x="2" y="9" width="12" height="2" fill="#ff9ec7"/>
      <rect x="3" y="11" width="10" height="1" fill="#ff9ec7"/>
      <rect x="4" y="12" width="8" height="1" fill="#ff9ec7"/>
      <rect x="5" y="13" width="6" height="1" fill="#ff9ec7"/>
      <rect x="6" y="14" width="4" height="1" fill="#ff9ec7"/>
      <rect x="7" y="15" width="2" height="1" fill="#ff9ec7"/>
    </svg>`, 30],
    // moeda estilo retro
    [`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="5" y="1" width="6" height="1" fill="#bfe3ff"/>
      <rect x="3" y="2" width="2" height="1" fill="#bfe3ff"/><rect x="11" y="2" width="2" height="1" fill="#bfe3ff"/>
      <rect x="2" y="3" width="1" height="10" fill="#bfe3ff"/><rect x="13" y="3" width="1" height="10" fill="#bfe3ff"/>
      <rect x="1" y="4" width="1" height="8" fill="#bfe3ff"/><rect x="14" y="4" width="1" height="8" fill="#bfe3ff"/>
      <rect x="3" y="13" width="2" height="1" fill="#bfe3ff"/><rect x="11" y="13" width="2" height="1" fill="#bfe3ff"/>
      <rect x="5" y="14" width="6" height="1" fill="#bfe3ff"/>
      <rect x="3" y="3" width="10" height="10" fill="#6cb7f0"/>
      <rect x="6" y="5" width="4" height="6" fill="#eef8ff"/>
    </svg>`, 24],
    // cogumelo estilo retro
    [`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="3" y="1" width="10" height="2" fill="#ff9ec7"/>
      <rect x="1" y="3" width="14" height="2" fill="#ff9ec7"/>
      <rect x="1" y="5" width="14" height="2" fill="#fff9fb"/>
      <rect x="3" y="5" width="2" height="2" fill="#ff9ec7"/><rect x="7" y="5" width="2" height="2" fill="#ff9ec7"/><rect x="11" y="5" width="2" height="2" fill="#ff9ec7"/>
      <rect x="5" y="7" width="6" height="5" fill="#fff9fb"/>
      <rect x="4" y="12" width="2" height="2" fill="#f0c8d8"/><rect x="10" y="12" width="2" height="2" fill="#f0c8d8"/>
    </svg>`, 26],
    // D-pad
    [`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="6" y="0" width="4" height="16" fill="#6cb7f0"/>
      <rect x="0" y="6" width="16" height="4" fill="#6cb7f0"/>
      <rect x="7" y="7" width="2" height="2" fill="#1f4d78"/>
    </svg>`, 30],
    // botão (A/B redondo)
    [`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="4" y="1" width="8" height="1" fill="#ff9ec7"/>
      <rect x="2" y="2" width="2" height="1" fill="#ff9ec7"/><rect x="12" y="2" width="2" height="1" fill="#ff9ec7"/>
      <rect x="1" y="3" width="1" height="10" fill="#ff9ec7"/><rect x="14" y="3" width="1" height="10" fill="#ff9ec7"/>
      <rect x="2" y="13" width="2" height="1" fill="#ff9ec7"/><rect x="12" y="13" width="2" height="1" fill="#ff9ec7"/>
      <rect x="4" y="14" width="8" height="1" fill="#ff9ec7"/>
      <rect x="2" y="3" width="12" height="10" fill="#ffd6e8"/>
    </svg>`, 22],
    // joystick simples
    [`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="6" y="1" width="4" height="6" fill="#bfe3ff"/>
      <rect x="4" y="8" width="8" height="2" fill="#6cb7f0"/>
      <rect x="2" y="10" width="12" height="5" fill="#1f4d78"/>
    </svg>`, 26],
  ];

  const totalGames = 14;
  for (let i = 0; i < totalGames; i++){
    const sprite = spritesGames[Math.floor(Math.random() * spritesGames.length)];
    const wrapper = document.createElement('div');
    wrapper.className = 'game-elemento';
    wrapper.innerHTML = sprite[0];
    wrapper.style.width = sprite[1] + 'px';
    wrapper.style.height = sprite[1] + 'px';
    wrapper.style.left = (Math.random() * 92) + 'vw';
    wrapper.style.top = (Math.random() * 92) + 'vh';
    wrapper.style.transform = `rotate(${(Math.random() * 30 - 15)}deg)`;
    gamesFundo.appendChild(wrapper);
  }

  // ---------- Gerar estrelas no fundo ----------
  const ceu = document.getElementById('ceu');
  const totalEstrelas = 90;

  for (let i = 0; i < totalEstrelas; i++){
    const estrela = document.createElement('div');
    estrela.className = 'estrela';
    const tamanho = Math.random() * 2.2 + 1;
    estrela.style.width = tamanho + 'px';
    estrela.style.height = tamanho + 'px';
    estrela.style.left = Math.random() * 100 + 'vw';
    estrela.style.top = Math.random() * 100 + 'vh';
    estrela.style.animationDelay = (Math.random() * 3) + 's';
    estrela.style.animationDuration = (2 + Math.random() * 3) + 's';
    ceu.appendChild(estrela);
  }

  // estrelas cadentes ocasionais
  function criarEstrelaCadente(){
    const cadente = document.createElement('div');
    cadente.className = 'estrela-cadente';
    cadente.style.left = (Math.random() * 80 + 10) + 'vw';
    cadente.style.top = (Math.random() * 40) + 'vh';
    cadente.style.animationDuration = (2.5 + Math.random()*2) + 's';
    ceu.appendChild(cadente);
    setTimeout(() => cadente.remove(), 5000);
  }
  setInterval(criarEstrelaCadente, 3500);

  // ---------- Botão "Não" foge ----------
  const btnNao = document.getElementById('btn-nao');
  const areaBotoes = document.getElementById('area-botoes');
  const cartao = document.getElementById('cartao');

  function moverBotaoNao(){
    const areaRect = areaBotoes.getBoundingClientRect();
    const btnRect = btnNao.getBoundingClientRect();

    const margem = 10;
    const maxX = Math.max(areaRect.width - btnRect.width - margem, margem);
    const maxY = Math.max(areaRect.height - btnRect.height - margem, margem);

    const novoX = Math.random() * maxX;
    const novoY = Math.random() * maxY;

    btnNao.classList.add('fugindo');
    btnNao.style.left = novoX + 'px';
    btnNao.style.top = novoY + 'px';
  }

  btnNao.addEventListener('mouseenter', moverBotaoNao);
  btnNao.addEventListener('click', (e) => {
    e.preventDefault();
    moverBotaoNao();
  });
  btnNao.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moverBotaoNao();
  }, { passive: false });

  // ---------- Botão "Sim" ----------
  const btnSim = document.getElementById('btn-sim');
  const finalMsg = document.getElementById('final');
  const pergunta = document.getElementById('pergunta');

  function criarConfete(){
    const cores = ['#ffd6e8', '#bfe3ff', '#ff9ec7', '#6cb7f0', '#fff9fb'];
    for (let i = 0; i < 60; i++){
      const c = document.createElement('div');
      c.className = 'confete';
      const cor = cores[Math.floor(Math.random() * cores.length)];
      const tam = Math.random() * 8 + 6;
      c.style.width = tam + 'px';
      c.style.height = tam * 0.4 + 'px';
      c.style.background = cor;
      c.style.left = Math.random() * 100 + 'vw';
      c.style.animationDuration = (2.5 + Math.random() * 2) + 's';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }
  }

  btnSim.addEventListener('click', () => {
    pergunta.style.display = 'none';
    areaBotoes.style.display = 'none';
    finalMsg.classList.add('visivel');
    criarConfete();
  });
