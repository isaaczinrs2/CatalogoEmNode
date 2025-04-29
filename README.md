# 📚 Catálogo de Biblioteca - Node.js + Laragon

Este é um simples catálogo de uma biblioteca desenvolvido em **Node.js**, utilizando o banco de dados **MySQL** gerenciado pelo **Laragon**.

## 🚀 Funcionalidades

- Listagem de livros disponíveis no catálogo
- Integração com banco de dados MySQL
- Servidor local usando Node.js com Express

---

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [Laragon](https://laragon.org/) (com MySQL ativo)
- [Visual Studio Code](https://code.visualstudio.com/) (ou outro editor de código)

---

## 📥 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone ou baixe este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git
   ```

2. **Abra o projeto no Visual Studio Code.**

3. **Configure o banco de dados:**
   - Inicie o **Laragon** e abra o **phpMyAdmin**.
   - Crie um novo banco de dados chamado `livraria`.
   - Importe o arquivo `livraria.sql` (incluso no projeto) para o banco de dados.

4. **Instale as dependências do Node.js:**
   ```bash
   npm install
   ```

5. **Execute o servidor:**
   ```bash
   node app.js
   ```

6. Após ver a mensagem:
   ```
   Servidor rodando...
   ```
   abra o navegador e acesse:
   ```
   http://localhost:3000/produtos
   ```

---

## 🗃️ Estrutura do Projeto

```
📁 seu-projeto
├── 📁 node_modules/
├── 📄 app.js
├── 📄 livraria.sql
├── 📄 package.json
└── 📄 README.md
```

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou pull requests com melhorias e correções.

---

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
