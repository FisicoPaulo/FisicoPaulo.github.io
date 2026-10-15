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
