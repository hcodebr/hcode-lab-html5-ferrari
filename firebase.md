# Firebase Host

Instalar ferramenta na linha de comando:

    npm install -g firebase-tools

Autenticação do terminal:

    firebase login
 
Verificar projetos criados na sua conta:

    firebase projects:list

Na pasta raíz do projeto inicie o Firebase:

    fireabse init

Selecione a opção de hospedagem:

     ( ) Database: Deploy Firebase Realtime Database Rules
     ( ) Firestore: Deploy rules and create indexes for Firestore
     ( ) Functions: Configure and deploy Cloud Functions
     (X) Hosting: Configure and deploy Firebase Hosting sites
     ( ) Storage: Deploy Cloud Storage security rules
     ( ) Emulators: Set up local emulators for Firebase features

Selecione ou crie um projeto.
Faça o deploy:

    fireabse deploy
