# Documentação do Blog

O projeto está organizado da seguinte maneira:

- (`app`)[https://github.com/darkmoonsk/blog/blob/main/docs/app.md] - rotas do blog
- `components`
    - `About` - Componentes relacionados com a pagina sobre
    - `Blogs` - Componentes usados para renderizar os blog posts e o conteúdo do blog em si.
    - `Contact` - Componentes da pagina de contato, como formulario e o LottieAnimation player
    - `Elements` - Componentes mais genéricos, atual o componente de tag do blog
    - `Footer` - Componentes relacionados ao rodapé do blog
    - `Header` - Componentes de menu e logo
    - `Home` - Componentes principais da página de inicio
    - `Hooks` - Hooks personalizados do projeto
    - `Icones` - Ícones svg usados no projeto
    - `ThemeScript.tsx` - Script usado para iniciar o darkmode no html
- `content` - posts do blog em markdown que serão compilados para JSON
- `.contentlayer` - Pasta gerada ao compilar os arquivos .mdx do blog em JSON que é usado pelo renderizador do Content Layer para renderizar os blogs
- `public` - todos os recursos publicos do blog, incluindo imagens e animações
- `utils` - funções utilitarias
- `.prettierrc` e `.editorconfig` - padrões de estilização do código usado no projeto
- `declarations.d.ts` - namespace para as propriedades usadas no svg dos ícones em React funcionar com Typescript
- `next-sitemap.config.js` - Configurações do gerador de sitemap do blog
- `tailwind.config.ts` - Todas as configurações personalizadas do Tailwind usadas no projeto incluido Temas, Fontes, Animações, Breakpoints e Background e Plugins.