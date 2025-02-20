# Projeto de Estudos - AdonisJS v6

## Descrição
Este projeto é um estudo sobre o framework **AdonisJS v6**, um framework completo para desenvolvimento web em **Node.js**. O foco do projeto é explorar os conceitos fundamentais do **AdonisJS**, incluindo roteamento, templates, banco de dados e arquitetura MVC.

## 🚀 Funcionalidades
- **Sistema de Rotas**: Uso do **Router** para definir endpoints.
- **Renderização de Views**: Templates com **Edge.js** para páginas dinâmicas.
- **Banco de Dados**: Configuração do **Lucid ORM** e migrações.
- **Processamento de Markdown**: Conversão de arquivos Markdown para HTML com **Dimer**.
- **Gerenciamento de Exceções**: Tratamento de erros personalizados.

## 🛠️ Tecnologias Utilizadas
- **AdonisJS v6**
- **Node.js**
- **Lucid ORM** (Gerenciamento de Banco de Dados)
- **Dimer Markdown** (Processamento de arquivos Markdown)
- **Vite** (Compilação e Hot Reload)
- **Tailwind CSS** (Estilização)

## 📌 Como Executar o Projeto

### Pré-requisitos
- **Node.js** instalado
- **Gerenciador de pacotes npm ou yarn**
- **Banco de Dados PostgreSQL ou SQLite**

### Passo a Passo
1. Clone o repositório:
   ```sh
   git clone https://github.com/Jovinull/adonis-movies.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd adonis-study
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Configure as variáveis de ambiente (`.env`):
   ```env
   DB_CONNECTION=sqlite
   DB_DATABASE=database.sqlite
   ```
5. Execute as migrações do banco de dados:
   ```sh
   node ace migration:run
   ```
6. Inicie o servidor de desenvolvimento:
   ```sh
   node ace serve --watch
   ```
7. Acesse a aplicação no navegador:
   ```sh
   http://localhost:3333
   ```

## Licença
Este projeto está sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

