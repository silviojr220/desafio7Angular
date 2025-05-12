# Desafio 7 - Sprint Angular
## 🧰 Tecnologias Utilizadas

- [Angular](https://angular.io/) - 19.2.9
- [Node.js](https://nodejs.org/) - 10.9.2
- [Bootstrap](https://getbootstrap.com/) - 5.3.6

## ⚙️ Pré-requisitos

Antes de iniciar, verifique se você tem os seguintes softwares instalados em sua máquina:

- [Angular CLI](https://angular.io/cli)
- [Git (opcional, mas recomendado)](https://git-scm.com/)

Você pode verificar se já possui o Node.js instalado com o comando:

```bash
node -v
```

E o npm (gerenciador de pacotes que vem com o Node.js):
```bash
npm -v
```
🚀 Instalação
Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio-angular.git
cd seu-repositorio-angular
```

2. Instale o Angular CLI (caso ainda não tenha instalado):
```bash
npm install -g @angular/cli
```

3. Instale as dependências do projeto:
```bash
npm install
```

4. Instale o Bootstrap:
```bash
npm install bootstrap
```
E importe os icones do bootstrap, no index.html:
```bash
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
```

Adicione o CSS do Bootstrap (e tambpem os icons) no arquivo angular.json:
```bash
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```
E o JS do Bootstrap também, no mesmo arquivo:
```bash
 "scripts": [
"node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

5. Inicie o servidor de desenvolvimento:
```bash
ng serve
```
