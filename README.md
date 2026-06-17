# 🥟 Esfiharia

Um site web completo e interativo para uma **Esfiharia** (lanchonete especializada em esfihas), desenvolvido com HTML, CSS e JavaScript puro.

O projeto simula o fluxo completo de um cliente em uma lanchonete de esfihas: navegar pelo cardápio, montar sua própria esfiha personalizada e gerenciar/finalizar o pedido.

---

## 📌 Sobre o Projeto

Este é um projeto front-end educacional criado para demonstrar como construir uma aplicação web funcional usando apenas tecnologias básicas (HTML + CSS + JavaScript vanilla), sem frameworks.

O site possui **quatro páginas principais** que formam uma experiência completa:

- **Página Inicial / Cardápio** (`index.html`)
- **Cardápio Alternativo** (`cardapio2.html`)
- **Monte sua Esfiha** (`montagem.html`)
- **Pedidos / Carrinho** (`pedidos.html`)

---

## ✨ Funcionalidades

### 1. Cardápio e Menu
- Hero section atraente ("A melhor esfiha, feita com amor.")
- Categorias: **Salgadas** e **Doces**
- Seção de **Combos**
- Grid de produtos com imagens, nomes, descrições e preços
- Design moderno com botões de chamada para ação

### 2. Monte sua Esfiha (`montagem.html`)
- 3 slots visuais para escolher ingredientes
- Botões de ingredientes prontos (Carne, Queijo, Presunto, Tomate, Cebola, Azeitona, Orégano, Catupiry, etc.)
- Slots amarelos = montagem da esfiha
- Slots brancos = itens no carrinho
- Botão "Adicionar ao Carrinho"
- Remoção de ingredientes clicando nos slots
- Adição ao carrinho com limpeza automática dos slots

### 3. Pedidos e Finalização (`pedidos.html`)
- Visualização do carrinho
- Remoção de itens
- Seções de categorias com cards
- Botões de navegação (Voltar, Montagem, Finalizar)

### 4. Design
- Paleta de cores marcante (vermelho escuro + amarelo/dourado)
- Layout organizado e intuitivo
- Botões de Voltar e Finalizar em todas as páginas

---

## 📁 Estrutura de Arquivos

```
esfiharia/
├── index.html              # Página inicial + Cardápio principal
├── cardapio2.html          # Versão alternativa do cardápio e mais completa
├── montagem.html           # Página "Monte sua Esfiha"
├── pedidos.html            # Página de Pedidos / Carrinho
│
├── style.css               # Estilos principais
├── style2.css              # Estilos do cardápio alternativo
├── montagem.css            # Estilos da página de montagem
├── estilo.css              # Estilos gerais (pedidos)
│
├── script.js               # Lógica JavaScript da primeira pagina
├── cardapio2.js            # Lógica JavaScript 
├── montagem.js              # Lógica JavaScript 
├── pedidos.js               # Lógica JavaScript 
│
├── README.md               # Este arquivo
└── img                # Imagens de referência das telas originais
```

---

## 🚀 Como Executar

1. Coloque todos os arquivos em uma mesma pasta
2. Abra o arquivo **`index.html`** no navegador (duplo clique)
3. (Recomendado) Use a extensão **Live Server** do VS Code para melhor experiência

O site funciona **100% offline** — não é necessário servidor.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura das páginas
- **CSS3** – Estilização e layout (Flexbox)
- **JavaScript (Vanilla)** – Interatividade e lógica
- Design focado em **simplicidade** e **mobile-first**

---

## 📄 Páginas do Site

| Página                  | Arquivo            | Descrição |
|-------------------------|--------------------|---------|
| Home + Cardápio         | `index.html`       | Hero + menu principal com produtos e combos |
| Cardápio Alternativo    | `cardapio2.html`   | Versão com layout de abas e caixas coloridas |
| Monte sua Esfiha        | `montagem.html`    | Personalização com até 3 ingredientes + slots visuais |
| Pedidos / Carrinho      | `pedidos.html`     | Visualização do carrinho, categorias e finalização |

---

## 🔄 Fluxo do Usuário

1. Acessa a página inicial e vê o cardápio
2. Explora as opções de **salgadas** ou **doces**
3. Vai para **"Monte sua Esfiha"** e escolhe os ingredientes
4. Adiciona ao carrinho
5. Acessa a página de **Pedidos**
6. Visualiza o pedido e finaliza

---

## 💡 Ideias de Melhorias Futuras

- Adicionar imagens reais dos produtos
- Sistema de quantidade por item
- Preços diferentes por ingrediente
- Integração com WhatsApp (envio do pedido)
- Login do cliente
- Histórico de pedidos
- Pagamento simulado

---

## 📝 Notas Técnicas

- Preço fixo de **R$ 5,90** por esfiha (fácil de modificar no código)
- Código desenvolvido no estilo **W3Schools** (simples e direto)
- Usa apenas recursos básicos de JavaScript (`var`, `if`, `function`, `innerHTML`)
- Sem frameworks (React, Vue, Angular, etc.)

---

Projeto desenvolvido como exercício prático de desenvolvimento web front-end.

Qualquer dúvida ou sugestão, é só pedir!