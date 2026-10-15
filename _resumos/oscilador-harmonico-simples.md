---
title: Oscilador harmônico simples
disciplina: Física II
assunto: Oscilações
descricao: A equação do movimento, a solução geral, período, energia e o pêndulo simples para pequenos ângulos.
data: 2026-10-15
# pdf: /assets/pdf/resumo-ohs.pdf
---

## A ideia central

Sempre que uma força puxa o sistema de volta para o equilíbrio com intensidade **proporcional ao deslocamento**, o movimento é harmônico simples. O exemplo padrão é o bloco de massa $$m$$ preso a uma mola de constante $$k$$, sem atrito:

$$
F = -kx .
$$

O sinal negativo diz que a força aponta sempre para o equilíbrio: é uma força restauradora.

## Equação do movimento

Pela segunda lei de Newton, $$F = m\ddot{x}$$:

$$
m\ddot{x} = -kx
\quad\Longrightarrow\quad
\ddot{x} + \omega^2 x = 0,
$$

com

$$
\omega = \sqrt{\frac{k}{m}} .
$$

Qualquer sistema cuja equação tenha essa forma é um oscilador harmônico. O trabalho todo, em cada problema novo, é chegar a ela e ler quem é $$\omega^2$$.

## Solução geral

$$
x(t) = A\cos(\omega t + \varphi)
$$

- $$A$$ é a **amplitude** (deslocamento máximo);
- $$\varphi$$ é a **fase inicial**, fixada pelas condições iniciais;
- $$\omega$$ é a **frequência angular**, fixada só pelo sistema ($$k$$ e $$m$$).

Derivando:

$$
v(t) = -\omega A\sin(\omega t + \varphi),
$$

$$
a(t) = -\omega^2 A\cos(\omega t + \varphi) = -\omega^2 x(t).
$$

Daí saem os máximos: $$v_{\max} = \omega A$$ (no equilíbrio) e $$a_{\max} = \omega^2 A$$ (nos extremos).

## Período e frequência

$$
T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}},
\qquad
f = \frac{1}{T} = \frac{\omega}{2\pi}.
$$

> O período não depende da amplitude. Puxar mais a mola faz o bloco andar mais rápido, mas ele leva o mesmo tempo para voltar.

## Energia

Sem atrito, a energia mecânica se conserva:

$$
E = \frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2 .
$$

Isolando a velocidade em função da posição:

$$
v(x) = \pm\,\omega\sqrt{A^2 - x^2}.
$$

Essa relação resolve muita questão de prova sem precisar do tempo.

## Pêndulo simples

Para um fio de comprimento $$L$$, a componente tangencial do peso dá

$$
mL\ddot{\theta} = -mg\sin\theta .
$$

Para pequenos ângulos, $$\sin\theta \approx \theta$$ (com $$\theta$$ em radianos), e a equação vira a do oscilador:

$$
\ddot{\theta} + \frac{g}{L}\,\theta = 0
\quad\Longrightarrow\quad
\omega = \sqrt{\frac{g}{L}},
$$

$$
T = 2\pi\sqrt{\frac{L}{g}} .
$$

O período não depende da massa, e a aproximação só vale enquanto o ângulo for pequeno.

## Para levar para a prova

| Grandeza | Massa-mola | Pêndulo simples |
|---|---|---|
| Frequência angular | $$\sqrt{k/m}$$ | $$\sqrt{g/L}$$ |
| Período | $$2\pi\sqrt{m/k}$$ | $$2\pi\sqrt{L/g}$$ |
| Energia mecânica | $$\tfrac{1}{2}kA^2$$ | $$mgL(1-\cos\theta_0)$$ |
