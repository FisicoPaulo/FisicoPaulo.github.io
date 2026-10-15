// Busca e filtro por disciplina nas páginas de Resumos e Solucionários.
document.querySelectorAll('[data-filtros]').forEach(function (bloco) {
  var grade = bloco.parentElement.querySelector('[data-grade]');
  var vazio = bloco.parentElement.querySelector('[data-vazio]');
  var busca = bloco.querySelector('.busca');
  var chips = bloco.querySelectorAll('.chip');
  var disciplina = '';

  function semAcento(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }

  function aplicar() {
    var termo = semAcento(busca.value.trim());
    var visiveis = 0;
    grade.querySelectorAll('.card').forEach(function (card) {
      var ok = (!disciplina || card.dataset.disciplina === disciplina) &&
               (!termo || semAcento(card.dataset.busca).indexOf(termo) !== -1);
      card.hidden = !ok;
      if (ok) visiveis++;
    });
    vazio.hidden = visiveis > 0;
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('ativo'); });
      chip.classList.add('ativo');
      disciplina = chip.dataset.filtro;
      aplicar();
    });
  });
  busca.addEventListener('input', aplicar);
});

// Botão "Baixar em PDF": abre a janela de impressão, onde a pessoa escolhe "Salvar como PDF".
// O estilo @media print do style.css deixa a página limpa, em fundo branco.
document.querySelectorAll('[data-salvar-pdf]').forEach(function (botao) {
  botao.addEventListener('click', function () { window.print(); });
});

// Celular: tabelas ganham uma moldura com rolagem lateral própria (a página nunca alarga)
// e equações largas demais encolhem até 70% para caber; se ainda não couber, rolam de lado.
document.querySelectorAll('.conteudo table').forEach(function (t) {
  var moldura = document.createElement('div');
  moldura.className = 'tabela';
  t.parentNode.insertBefore(moldura, t);
  moldura.appendChild(t);
});

function ajustarEquacoes() {
  document.querySelectorAll('.katex-display').forEach(function (eq) {
    var k = eq.querySelector('.katex');
    if (!k) return;
    k.style.fontSize = '';
    var escala = 1;
    while (eq.scrollWidth > eq.clientWidth + 1 && escala > 0.7) {
      escala -= 0.05;
      k.style.fontSize = (escala * 1.08) + 'em';
    }
    eq.classList.toggle('rola', eq.scrollWidth > eq.clientWidth + 1);
  });
}
var esperaKatex = setInterval(function () {
  if (document.querySelector('.katex') || !document.querySelector('.conteudo')) {
    clearInterval(esperaKatex);
    ajustarEquacoes();
  }
}, 100);
setTimeout(function () { clearInterval(esperaKatex); }, 10000);
var timerResize;
window.addEventListener('resize', function () { clearTimeout(timerResize); timerResize = setTimeout(ajustarEquacoes, 150); });
if (document.fonts) document.fonts.ready.then(ajustarEquacoes);

// Celular: cada célula recebe o nome da sua coluna, para a tabela virar cartões (ver style.css).
document.querySelectorAll('.conteudo table').forEach(function (t) {
  var cabecalhos = [].map.call(t.querySelectorAll('thead th'), function (th) { return th.textContent.trim(); });
  if (!cabecalhos.length) return;
  t.classList.add('cartoes');
  t.querySelectorAll('tbody tr').forEach(function (tr) {
    [].forEach.call(tr.children, function (td, i) { td.setAttribute('data-rotulo', cabecalhos[i] || ''); });
  });
});
