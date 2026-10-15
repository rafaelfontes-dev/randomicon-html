# 🎲 Randomicon

**Trabalho em progresso (WIP).**

Uma página _web_ completamente _offline_ para testar e usar de funcionalidades envolvendo geração de valores pseudo-aleatórios.

Mais de uma vez, precisei fazer sorteios de valores e nomes em lugares com Internet instável ou de uma maneira mais rápida. A criação deste projeto foi tanto impulsionada com este uso pessoal em mente, como com o desejo de quebrar a cabeça com desenvolvimento _web_!

> Nota: mesmo que imperceptível em condições comuns, a aplicação utiliza `crypto.getRandomValues()` no lugar de `Math.random()` para garantir a aquisição de valores mais imprevísiveis.

## Como usar?

Ao ter o projeto descompactado em seu computador, recomendo iniciar um servidor local simples no mesmo diretório da pasta através de comandos no terminal. Um dos exemplos abaixo, se bem sucedidos, permitem com facilidade o acesso à página funcional em http://localhost:8000:

- `php -S localhost:8000`   (requer o PHP instalado na sua máquina)

- `python3 -m http.server`  (requer o Python3 instalado na sua máquina)

Uma ótima extensão para abrir um servidor local de um projeto direto do VSCode é o [LiveServer](https://open-vsx.org/extension/ritwickdey/LiveServer), por **ritwickdey**.

Como o projeto possui JavaScript externo ao arquivo `index.html`, simplesmente descompactar o projeto e abrí-lo no navegador não vai funcionar pois há barreiras de segurança para este tipo de acesso.

## Funcionalidades

1. **Sorteador de números**

2. **Embaralhador de listas**

3. **Sorteador de nome da sorte (fruta/vegetal + adjetivo)**
    - Inspirado no mecanismo de nomeação do [LocalSend](https://github.com/localsend/localsend)

4. **Gerador de senhas** (em breve)
    - **ATENÇÃO!** Sempre opte por um gerenciador de senhas confiável no lugar desta funcionalidade!

        - Ex. [Bitwarden](https://bitwarden.com/pt-br/), [KeePassXC](https://keepassxc.org/)

## Planos futuros
- Melhorar menus de customização das funcionalidades (ex. menu retrátil para ajuste de saída de dados)

- Refazer o projeto inteiro em React

## Agradecimentos
- *weareheroes* - _designer_ do ícone adotado para a página; ícone de domínio público disponível no [SVG Repo](https://www.svgrepo.com/svg/509637/dice1).
