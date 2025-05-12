# Desafio 7 - Sprint Angular

Este é um projeto desenvolvido com o framework Angular, utilizando Node.js como ambiente de execução e o Bootstrap para estilização da interface. Este README fornece um guia passo a passo para configurar o ambiente e executar o projeto localmente.

## 🧰 Tecnologias Utilizadas

- [Angular](https://angular.io/) - 
- [Node.js](https://nodejs.org/) - 
- [Bootstrap](https://getbootstrap.com/) - 5.3.6

## ⚙️ Pré-requisitos

Antes de iniciar, verifique se você tem os seguintes softwares instalados em sua máquina:

- [Node.js (versão LTS recomendada)](https://nodejs.org/)
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
E adicione o CSS do Bootstrap no arquivo angular.json:
´´´bash
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
```
