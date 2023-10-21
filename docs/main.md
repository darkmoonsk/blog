# Documentação do Blog

Este projeto está estruturado da seguinte maneira:

- [`app`](https://github.com/darkmoonsk/blog/blob/main/docs/app.md): Contém as rotas do blog.
- [`components`](https://github.com/darkmoonsk/blog/blob/main/docs/components.md):
    - `About`: Componentes associados à página "Sobre".
    - `Blogs`: Componentes utilizados para renderizar os posts e o conteúdo do blog.
    - `Contact`: Componentes da página de contato, incluindo o formulário e o player LottieAnimation.
    - `Elements`: Componentes mais genéricos, como o componente de tag do blog.
    - `Footer`: Componentes relacionados ao rodapé do blog.
    - `Header`: Componentes que compõem o menu e o logo.
    - `Home`: Componentes principais da página inicial.
    - `Hooks`: Hooks personalizados utilizados no projeto.
    - `Icones`: Ícones SVG utilizados no projeto.
    - `ThemeScript.tsx`: Script responsável pela inicialização do modo escuro (dark mode) no HTML.
- `content`: Posts do blog em formato markdown que serão compilados para JSON.
- `.contentlayer`: Pasta gerada ao compilar os arquivos .mdx do blog para JSON, utilizado pelo renderizador do Content Layer para apresentar os posts.
- `public`: Todos os recursos públicos do blog, incluindo imagens e animações.
- `utils`: Funções utilitárias.
- `.prettierrc` e `.editorconfig`: Padrões de estilização de código adotados no projeto.
- `declarations.d.ts`: Namespace para permitir que as propriedades utilizadas nos ícones SVG em React funcionem corretamente com TypeScript.
- `next-sitemap.config.js`: Configurações do gerador de sitemap do blog.
- `tailwind.config.ts`: Todas as configurações personalizadas do Tailwind usadas no projeto, incluindo temas, fontes, animações, breakpoints, backgrounds e plugins.
