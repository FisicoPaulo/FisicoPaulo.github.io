---
title: "Expansão isotérmica de um gás ideal"
disciplina: Física II
assunto: Termodinâmica
fonte: Exercício modelo
descricao: Trabalho, calor e variação de energia interna quando o volume de um gás ideal dobra a temperatura constante.
data: 2026-10-14
---

**Enunciado.** Dois mols de um gás ideal se expandem lenta e isotermicamente a 300 K até o volume dobrar. Calcule (a) a variação da energia interna, (b) o trabalho realizado pelo gás e (c) o calor trocado. Use R = 8,314 J/(mol·K).

## Assunto e ferramentas

Primeira lei da termodinâmica aplicada a um processo isotérmico quase estático de um gás ideal.

**[F1]** Primeira lei (W positivo quando o gás realiza trabalho): $$\Delta U = Q - W$$.
{: .ferramenta}

**[F2]** Energia interna do gás ideal depende só de T: $$\Delta U = nC_V\Delta T$$.
{: .ferramenta}

**[F3]** Trabalho isotérmico, integrando $$p = nRT/V$$ de $$V_i$$ a $$V_f$$: $$W = nRT\ln(V_f/V_i)$$.
{: .ferramenta}

## Dados fornecidos

- Quantidade de gás: $$n = 2{,}0\ \text{mol}$$
- Temperatura (constante): $$T = 300\ \text{K}$$
- Razão de volumes: $$V_f / V_i = 2$$
- Constante dos gases: $$R = 8{,}314\ \text{J/(mol·K)}$$

## Solução

### (a) Variação da energia interna

A temperatura não muda, então $$\Delta T = 0$$ e, por [F2],

$$
\Delta U = nC_V \cdot 0 = 0.
$$

$$\Delta U = 0$$
{: .resultado}

### (b) Trabalho realizado pelo gás

Por [F3]:

$$
W = (2{,}0\ \text{mol})\,(8{,}314\ \text{J/(mol·K)})\,(300\ \text{K})\,\ln 2 .
$$

Primeiro o produto: $$(2{,}0)(8{,}314)(300) = 4988{,}4\ \text{J}$$. Com $$\ln 2 \approx 0{,}6931$$:

$$
W = 4988{,}4 \times 0{,}6931\ \text{J} \approx 3457\ \text{J} \approx 3{,}46\ \text{kJ}.
$$

$$W \approx 3{,}46\ \text{kJ}$$
{: .resultado}

### (c) Calor trocado

Por [F1], com $$\Delta U = 0$$:

$$
0 = Q - W \quad\Longrightarrow\quad Q = W \approx 3{,}46\ \text{kJ}.
$$

O sinal positivo diz que o gás **recebe** calor: toda a energia que entra como calor sai como trabalho, e a energia interna fica igual.

$$Q \approx 3{,}46\ \text{kJ (recebido pelo gás)}$$
{: .resultado}
