---
title: "Bloco preso a uma mola: período, energia e velocidade"
disciplina: Física II
assunto: Oscilações
fonte: Exercício modelo
descricao: Frequência angular, período, velocidade e aceleração máximas, energia mecânica e velocidade numa posição intermediária.
data: 2026-10-15
---

**Enunciado.** Um bloco de massa 0,50 kg, preso a uma mola de constante elástica 200 N/m, oscila sobre uma superfície horizontal sem atrito com amplitude de 0,10 m. Determine (a) a frequência angular, o período e a frequência; (b) a velocidade máxima e a aceleração máxima; (c) a energia mecânica; (d) o módulo da velocidade quando o bloco está a 0,06 m do equilíbrio.

## Assunto e ferramentas

Movimento harmônico simples de um sistema massa-mola horizontal, sem atrito.

**[F1]** Frequência angular, período e frequência: $$\omega = \sqrt{k/m}$$, $$T = 2\pi/\omega$$ e $$f = 1/T$$.
{: .ferramenta}

**[F2]** Máximos do MHS: $$v_{\max} = \omega A$$ e $$a_{\max} = \omega^2 A$$.
{: .ferramenta}

**[F3]** Energia mecânica: $$E = \tfrac{1}{2}kA^2$$.
{: .ferramenta}

**[F4]** Velocidade em função da posição: $$v(x) = \omega\sqrt{A^2 - x^2}$$.
{: .ferramenta}

## Dados fornecidos

- Massa: $$m = 0{,}50\ \text{kg}$$
- Constante da mola: $$k = 200\ \text{N/m}$$
- Amplitude: $$A = 0{,}10\ \text{m}$$
- Posição no item (d): $$x = 0{,}06\ \text{m}$$

## Solução

### (a) Frequência angular, período e frequência

Por [F1]:

$$
\omega = \sqrt{\frac{200\ \text{N/m}}{0{,}50\ \text{kg}}} = \sqrt{400\ \text{s}^{-2}} = 20\ \text{rad/s}.
$$

$$
T = \frac{2\pi}{20\ \text{rad/s}} = \frac{\pi}{10}\ \text{s} \approx 0{,}314\ \text{s},
$$

$$
f = \frac{1}{T} = \frac{10}{\pi}\ \text{Hz} \approx 3{,}18\ \text{Hz}.
$$

$$\begin{gathered} \omega = 20\ \text{rad/s} \\ T \approx 0{,}314\ \text{s} \\ f \approx 3{,}18\ \text{Hz} \end{gathered}$$
{: .resultado}

### (b) Velocidade e aceleração máximas

Por [F2]:

$$
v_{\max} = \omega A = (20\ \text{rad/s})(0{,}10\ \text{m}) = 2{,}0\ \text{m/s},
$$

$$
a_{\max} = \omega^2 A = (400\ \text{s}^{-2})(0{,}10\ \text{m}) = 40\ \text{m/s}^2.
$$

$$v_{\max} = 2{,}0\ \text{m/s}, \quad a_{\max} = 40\ \text{m/s}^2$$
{: .resultado}

### (c) Energia mecânica

Por [F3]:

$$
\begin{aligned}
E &= \frac{1}{2}(200\ \text{N/m})(0{,}10\ \text{m})^2 \\
  &= \frac{1}{2}(200)(0{,}010)\ \text{J} = 1{,}0\ \text{J}.
\end{aligned}
$$

Conferência: no equilíbrio toda a energia é cinética, $$\tfrac{1}{2}m v_{\max}^2 = \tfrac{1}{2}(0{,}50)(2{,}0)^2 = 1{,}0\ \text{J}$$. Bate.

$$E = 1{,}0\ \text{J}$$
{: .resultado}

### (d) Velocidade em x = 0,06 m

Por [F4]:

$$
\begin{aligned}
A^2 - x^2 &= (0{,}10)^2 - (0{,}06)^2 \\
          &= 0{,}0100 - 0{,}0036 = 0{,}0064\ \text{m}^2,
\end{aligned}
$$

$$
\begin{aligned}
v &= (20\ \text{rad/s})\sqrt{0{,}0064\ \text{m}^2} \\
  &= (20)(0{,}08)\ \text{m/s} = 1{,}6\ \text{m/s}.
\end{aligned}
$$

Conferência pela energia: $$\tfrac{1}{2}(0{,}50)(1{,}6)^2 + \tfrac{1}{2}(200)(0{,}06)^2 = 0{,}64 + 0{,}36 = 1{,}0\ \text{J}$$.

$$|v| = 1{,}6\ \text{m/s}$$
{: .resultado}
