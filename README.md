# ReactChat App 🚀

## Resumo

Este é um aplicativo ReactChat simples construído com React e Firebase. Os usuários podem entrar com Google ou Microsoft, enviar e receber mensagens em tempo real.

## Funcionalidades

- **Autenticação:**
  - Os usuários podem entrar com Google ou Microsoft.
  - Opção para sair.

- **Chat em Tempo Real:**
  - Mensagens são exibidas em tempo real.
  - Carrega as últimas 25 mensagens inicialmente, com um efeito de rolagem suave para a parte inferior.

- **Interface do Usuário:**
  - Design de interface limpo e direto.
  - Mensagens são categorizadas como enviadas ou recebidas com estilo apropriado.

## Tecnologias Utilizadas

- React
- Autenticação Firebase
- Firebase Firestore
- React Hooks (useAuthState, useSignInWithGoogle, useSignInWithMicrosoft, useCollectionData, useRef, useState)
- ESLint para lintagem

## Como Executar

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Configure a sua chave Firebase em `./services/firebaseConfig.js`.
4. Execute o aplicativo com `npm start`.

## Componentes

### ChatRoom

- Exibe as mensagens do chat, fornece um formulário para enviar novas mensagens.
- Usa o Firebase Firestore para atualizações em tempo real.

### ChatMessage

- Representa uma mensagem de chat individual.
- Distingue entre mensagens enviadas e recebidas com estilos diferentes.

### SignIn

- Permite que os usuários entrem com Google ou Microsoft.

### SignOut

- Oferece uma opção para sair se o usuário estiver autenticado.
