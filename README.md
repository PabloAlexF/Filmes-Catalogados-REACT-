# 🎬 PrimeFlix

Um aplicativo de filmes moderno e responsivo construído com React, que permite aos usuários navegar, visualizar detalhes e salvar seus filmes favoritos.

## ✨ Funcionalidades

- 🎥 Navegação de filmes em cartaz
- 📱 Design completamente responsivo
- ⭐ Sistema de favoritos com localStorage
- 🔍 Detalhes completos dos filmes
- 🎨 Interface moderna com glassmorphism
- 📢 Sistema de notificações personalizado
- 🎬 Links diretos para trailers no YouTube

## 🚀 Tecnologias

- **React** - Biblioteca JavaScript para interfaces
- **React Router** - Navegação entre páginas
- **Axios** - Cliente HTTP para API
- **CSS3** - Estilização avançada com glassmorphism
- **TMDB API** - Base de dados de filmes

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints para:
- 📱 Smartphones (320px+)
- 📱 Smartphones landscape (480px+)
- 📱 Tablets (768px+)
- 💻 Tablets landscape (1024px+)
- 🖥️ Desktop (1200px+)

## 🎨 Design

- Interface moderna com efeitos glassmorphism
- Gradientes coloridos e animações suaves
- Sistema de notificações personalizado
- Tema escuro com acentos coloridos
- Tipografia otimizada para legibilidade

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/primeflix.git

# Entre no diretório
cd primeflix/flixx

# Instale as dependências
npm install

# Execute o projeto
npm start
```

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/
│   └── Notification/
├── pages/
│   ├── Home/
│   ├── Filme/
│   ├── Favoritos/
│   └── Error/
├── services/
│   └── api.js
└── routes.js
```

## 🎯 Funcionalidades Principais

### 🏠 Página Inicial
- Lista dos filmes em cartaz
- Cards interativos com hover effects
- Grid responsivo

### 🎬 Detalhes do Filme
- Informações completas do filme
- Botão para salvar nos favoritos
- Link para trailer no YouTube
- Sistema de notificações

### ⭐ Favoritos
- Lista de filmes salvos
- Persistência com localStorage
- Botão para remover filmes
- Mensagem personalizada quando vazio

### 🔔 Notificações
- Sistema personalizado substituindo alerts
- Diferentes tipos (sucesso, erro, info)
- Auto-fechamento e fechamento manual
- Design consistente com o tema

## 🎨 Tema Visual

O projeto utiliza um tema escuro moderno com:
- Efeitos glassmorphism (blur + transparência)
- Gradientes coloridos (azul, rosa, laranja)
- Animações suaves e transições
- Tipografia otimizada (SF Pro Display)
- Sombras e bordas sutis

## 📱 Responsividade Completa

Todos os componentes são totalmente responsivos:
- Header adaptável
- Grid de filmes flexível
- Botões touch-friendly
- Notificações responsivas
- Imagens otimizadas

## 🔧 API

Utiliza a **TMDB API** para:
- Buscar filmes em cartaz
- Obter detalhes dos filmes
- Carregar imagens em alta qualidade

## 📄 Licença

Este projeto está sob a licença MIT.