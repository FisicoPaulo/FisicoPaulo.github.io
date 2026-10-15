# Caderno de Física · physics.jpaulo / estudos

Site de solucionários e resumos de física para a graduação, com a identidade da @physics.jpaulo: fundo preto, texto branco quente, destaque em pêssego (#f2b38f), títulos em Montserrat, corpo em Source Serif, rótulos em JetBrains Mono e anotações manuscritas em Kalam. Equações com KaTeX.

Feito em Jekyll, publicado direto pelo GitHub Pages (sem build manual).

## Publicar um material novo

1. Crie um arquivo `.md` em `_solucionarios/` ou `_resumos/` (o nome do arquivo vira o endereço).
2. Comece com o cabeçalho:

```yaml
---
title: "Lista 2, questão 5: pêndulo físico"
disciplina: Física II          # vira filtro nas listas
assunto: Oscilações
fonte: "Halliday, cap. 15"     # opcional
descricao: Uma frase que aparece no card.
data: 2026-10-20               # ordena os mais recentes
pdf: /assets/pdf/lista2-q5.pdf # opcional: botão "Baixar PDF"
---
```

3. Escreva em Markdown. Equações sempre entre `$$ ... $$` (no meio do texto ou em linha própria).
4. Caixas especiais: coloque a linha abaixo logo depois do parágrafo.
   - `{: .ferramenta}` caixa cinza para as ferramentas [F1], [F2]...
   - `{: .resultado}` caixa pêssego com o rótulo "Resultado"
   - `{: .dica}` anotação manuscrita
   - Contas longas: quebre em linhas com `\begin{aligned} ... \end{aligned}` (use `&=` para alinhar e `\\` para pular linha). No celular o site ainda encolhe sozinho a equação que não couber, mas a quebra fica mais legível.
5. Todo material já tem o botão "Baixar em PDF", que gera o PDF da própria página (versão clara, pronta para imprimir). Se quiser oferecer também um PDF próprio (LaTeX), coloque-o em `assets/pdf/` e aponte no campo `pdf:`.
6. Faça commit em `main`. O GitHub Pages atualiza o site em cerca de um minuto.

Os arquivos em `_solucionarios/` e `_resumos/` marcados como "Exercício modelo" são exemplos e podem ser apagados.

## Celular e computador

O layout se adapta da tela de 320 px (celular pequeno) até monitores largos: menu e botões com área de toque maior, tabelas que viram cartões no celular e equações que se ajustam à largura.

## Monitoramento de acesso

O site usa o [GoatCounter](https://www.goatcounter.com) (gratuito, sem cookies). O painel fica em https://fisicopaulo.goatcounter.com e mostra visitas por página, origem (Instagram, Google...), país, aparelho e cliques em "Baixar PDF" (aparecem como `pdf/...`). Para trocar a conta, mude `goatcounter:` no `_config.yml`; deixe vazio para desligar.

## Testar localmente

```sh
gem install jekyll kramdown-parser-gfm webrick
jekyll serve   # http://localhost:4000
```
