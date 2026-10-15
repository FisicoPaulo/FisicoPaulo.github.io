---
title: Primeira lei da termodinâmica
disciplina: Física II
assunto: Termodinâmica
descricao: Energia interna, calor e trabalho, e o que acontece em cada um dos quatro processos clássicos com gás ideal.
data: 2026-10-14
---

## O enunciado

A primeira lei é a conservação da energia aplicada a um sistema que troca calor e trabalho com a vizinhança:

$$
\Delta U = Q - W .
$$

Convenção usada aqui: $$Q > 0$$ quando o sistema **recebe** calor e $$W > 0$$ quando o sistema **realiza** trabalho (se expande).

> Cuidado: alguns livros usam $$\Delta U = Q + W$$, com $$W$$ sendo o trabalho feito **sobre** o sistema. A física é a mesma, só muda o sinal.

## Trabalho de expansão

Para um gás que muda de volume lentamente,

$$
W = \int_{V_i}^{V_f} p\,dV ,
$$

que é a área sob a curva no diagrama $$pV$$. O trabalho depende do caminho; a variação de energia interna, não.

## Energia interna do gás ideal

Para um gás ideal, $$U$$ depende só da temperatura:

$$
\Delta U = n C_V \Delta T,
\qquad
C_p - C_V = R .
$$

Gás monoatômico: $$C_V = \tfrac{3}{2}R$$. Diatômico (temperatura ambiente): $$C_V = \tfrac{5}{2}R$$. A razão $$\gamma = C_p/C_V$$ aparece no processo adiabático.

## Os quatro processos

### Isocórico (volume constante)

$$
W = 0, \qquad Q = \Delta U = nC_V\Delta T .
$$

### Isobárico (pressão constante)

$$
W = p\,\Delta V, \qquad Q = nC_p\Delta T .
$$

### Isotérmico (temperatura constante)

$$
\Delta U = 0, \qquad Q = W = nRT\ln\frac{V_f}{V_i} .
$$

### Adiabático (sem troca de calor)

$$
Q = 0, \qquad W = -\Delta U, \qquad pV^{\gamma} = \text{constante},
$$

$$
W = \frac{p_iV_i - p_fV_f}{\gamma - 1} .
$$

## Resumo em tabela

| Processo | Q | W | ΔU |
|---|---|---|---|
| Isocórico | $$nC_V\Delta T$$ | $$0$$ | $$nC_V\Delta T$$ |
| Isobárico | $$nC_p\Delta T$$ | $$p\Delta V$$ | $$nC_V\Delta T$$ |
| Isotérmico | $$nRT\ln(V_f/V_i)$$ | $$nRT\ln(V_f/V_i)$$ | $$0$$ |
| Adiabático | $$0$$ | $$-nC_V\Delta T$$ | $$nC_V\Delta T$$ |
