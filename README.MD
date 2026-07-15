# FAQ - Configuração do Ambiente de Desenvolvimento INFO2 - DevWEB II

Bem-vindo ao repositório de suporte das **3 turmas**!

Aqui você encontra as principais dúvidas sobre a configuração do ambiente de desenvolvimento para trabalhar com **Vue.js 3**.

---

## 1. Como instalar o Node.js?

Acesse o site oficial e baixe a versão **Current** (recomendada):

👉 [https://nodejs.org/en/download/current](https://nodejs.org/en/download/current)

**Dica importante (Windows):**  
Durante a instalação, marque a opção **"Add to PATH"**.

---

## 2. Qual versão do Node.js é necessária?

É obrigatório ter **Node.js versão 20 ou superior**.

### Como verificar sua versão:

```bash
node --version
```

> Se a versão for inferior a 20, atualize o Node.js.

## 2.1 Para atualizar a versão do Node, basta instalar o NVM;

- nvm-windows: For Windows operating systems [URL](https://www.nvmnode.com/guide/download.html)

* Caso tenha mais dúvidas sobre a instalação no Windows, siga esse [tutorial](https://www.nvmnode.com/guide/installation.html)

- nvm-sh: For Linux, macOS, and Windows Subsystem for Linux (WSL)

* Caso tenha mais dúvidas sobre a instalação no Linux/Mac siga esse [tutorial](https://www.nvmnode.com/guide/installation-sh.html)

> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

## 3. Usuários Windows: Recomendação do Chocolatey

Para quem utiliza Windows, recomendamos fortemente o uso do Chocolatey (gerenciador de pacotes).
Instalação do Chocolatey:

Abra o PowerShell como Administrador

Execute o comando:

```sh
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Depois disso, você pode instalar programas facilmente com choco.

Link oficial: [https://chocolatey.org/](https://chocolatey.org/)

## 4. É necessário configurar variáveis de ambiente manualmente?

Quase nunca é necessário.

Se você marcou `"Add to PATH"` na instalação do Node.js, ele já configura automaticamente.

Após instalar, feche e abra novamente o terminal (ou o VS Code).

Execute os comandos para validar a instalação:

> node --version

```
 v16.20.2
```

> npm --version

```8.19.4

```

Caso ainda não funcione, reinstale o Node.js marcando a opção de PATH.

## 5. Como criar um novo projeto Vue.js 3?

Execute o seguinte comando:

```sh
npm create vue@latest
```

Passo a passo:

1. Abra o terminal na pasta desejada
2. Rode o comando acima
3. Responda as perguntas do assistente (recomendações):

```sh
Project name: `meu-projeto`
Add TypeScript? → `No`
Add JSX Support? → `No`
Add Vue Router? → Yes
Add Pinia? → `No`
Add Vitest? → `No`
Add Cypress? → `No`
Add End-to-End Testing → `No`
Add Linter (error prevention) → `Yes`
Add Prettier (code formatting) → `Yes`
```

Por default nos sempre colocamos essas configurações abaixo:

Select features to include in your project: (↑/↓ to navigate, space to select, a to toggle all, enter to

```sh
│  confirm)
│  ◻ JSX Support
│  ◼ Router (SPA development)
│  ◻ Pinia (state management)
│  ◻ Vitest (unit testing)
│  ◻ End-to-End Testing
│  ◼ Linter (error prevention)
│  ◼ Prettier (code formatting)
```

Marque a opção que deseja incluir no seu projeto:

```sh

│  ◻ Replace Prettier with Oxfmt
│  ◼ Vue 3.6 (beta)
└
```

Marque a opção que deseja utilizar como gerenciador de pacotes, por default nos usamos o `NPM`:

```sh
│  ● npm
│  ○ pnpm
│  ○ yarn
│  ○ bun
```

Depois ele vai perguntar se deseja iniciar um projeto em branco ou com alguns arquivos para iniciar, para facilitar o desenvolvimento nos deixamos a opção `No` selecionada para que assim possamos ter mais agilidade:

```sh
Skip all example code and start with a blank Vue project?
│  ○ Yes / ● No
```

4. Após isso, entre na pasta e instale as dependências:

```sh
cd meu-projeto
npm install
```

5. Rode o projeto:

```sh
npm run dev
```

6. Configuração do VS Code (Recomendado)

Lembre-se que para codificar adotamos o [VSCode](https://code.visualstudio.com/download?_exp_download=d53503e735)

Extensões essenciais:

- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- ESLint
- Prettier - Code formatter
- GitLens
- Thunder Client (para testar APIs)

Dica: Após instalar o Volar, desative a extensão oficial "Vetur" para evitar conflitos.

## 7. Git e GitHub

Comandos básicos:

```sh
git clone <url-do-repositorio>
git add .
git commit -m "mensagem do commit"
git push origin main
```

Recomendado configurar o git da sua máquina:

```sh
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

## 7.1 Comandos Git mais usados

| Comando                          | Descrição                                     |
| -------------------------------- | --------------------------------------------- |
| `git clone <url>`                | Clona um repositório                          |
| `git status`                     | Mostra o estado atual dos arquivos            |
| `git add .`                      | Adiciona todos os arquivos modificados        |
| `git add nome-do-arquivo`        | Adiciona um arquivo específico                |
| `git commit -m "mensagem"`       | Cria um commit                                |
| `git push origin main`           | Envia as alterações para o GitHub             |
| `git pull origin main`           | Baixa as alterações do GitHub                 |
| `git branch`                     | Lista as branches                             |
| `git checkout -b nome-da-branch` | Cria e muda para uma nova branch              |
| `git checkout nome-da-branch`    | Muda de branch                                |
| `git merge nome-da-branch`       | Mescla uma branch na atual                    |
| `git log`                        | Mostra o histórico de commits                 |
| `git reset --hard`               | Desfaz todas as alterações (use com cuidado!) |

Dica: Crie um `.gitignore` na raiz do projeto com o conteúdo padrão do Vue.

## 8. Troubleshooting (Problemas Comuns)

| Problema                                    | Solução                                                      |
| ------------------------------------------- | ------------------------------------------------------------ |
| `node` ou `npm` não é reconhecido           | Reinicie o terminal ou o computador                          |
| Erro de permissão ao instalar pacotes       | `npm install --legacy-peer-deps`                             |
| Porta 5173 já está em uso                   | `npm run dev -- --port 3000`                                 |
| Erros estranhos após instalação             | Delete a pasta `node_modules` e rode `npm install` novamente |
| Problemas com cache do npm                  | `npm cache clean --force`                                    |
| Vue não reconhece componentes ou TypeScript | Verifique se o Volar está ativado e reinicie o VS Code       |
| `git` não é reconhecido                     | Reinstale o Git ou adicione ao PATH                          |
| Erro ao fazer push/pull                     | Verifique se está na branch correta e use `git pull` antes   |

## 9 Boas Práticas

| Dica                          | Descrição                                              |
| ----------------------------- | ------------------------------------------------------ |
| Sempre rode `npm install`     | Após clonar qualquer projeto                           |
| Mantenha o Node.js atualizado | Evita muitos problemas de compatibilidade              |
| Use branches                  | Evite trabalhar diretamente na `main`                  |
| Commits claros                | Use mensagens descritivas nos commits                  |
| Organize seu workspace        | Crie uma pasta dedicada para os projetos da disciplina |
| Peça ajuda                    | Abra uma _Issue_ neste repositório                     |

## 10. Dicas Finais

- Sempre rode `npm install` após clonar um projeto
- Mantenha o Node.js atualizado
- Use branches para organizar seu trabalho
- Commite com mensagens claras

---

Ainda com dúvidas?
Abra uma Issue neste repositório ou pergunte diretamente no grupo da turma.

`Última atualização: 15 de julho de 2026`

---

<div align="center">
<img src="https://github.com/cristofersousa.png" width="150px" alt="Cristofer Sousa" style="border-radius: 50%;"/>

## Prof. Cristofer Sousa

**Instituto Federal Catarinense (IFC)**  
Campus Araquari - SC

💻 Engenheiro de Software  
🎓 Especialista em Desenvolvimento de Software (UFSCar)

<a href="https://github.com/cristofersousa">
github.com/cristofersousa
</a>

</div>
