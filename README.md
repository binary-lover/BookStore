# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Usage

### Installation

#### clone the repository

```bash
git clone https://github.com/binary-lover/BookStore
```

#### Install dependencies

```bash
cd BookStore
cd Frontend
npm install
```

### add .env file in the Frontend folder

```bash
touch .env
```
- add variable:
    -  PORT
    - REACT_APP_API_URL (from mongodb compass/atlas)

#### Start the Front End 

```bash
npm run dev
```

#### Start the Backend server

```bash
cd Backend
npm run start
```

### Sample

![](/Frontend/public/sample1.jpg)
![](/Frontend/public/sample3.jpg)
![](/Frontend/public/sample2.jpg) 