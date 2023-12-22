# Blog Next.js

![social-banner](https://github.com/darkmoonsk/blog/assets/101902194/069d3312-0fef-4f56-9a73-f3d97108d19f)

Este é um projeto de blog construído com Next.js, usando diversas tecnologias como Tailwind CSS, Typescript e Content Layer.

## Como rodar o projeto

1. Clone o repositório com:
```
git clone https://github.com/darkmoonsk/blog.git
```
2. Instale as dependências com `npm install`
3. Rode o projeto com `npm run dev`
4. Acesse em http://localhost:3000/

## Documentação
Acesse a documentação do projeto [aqui](https://github.com/darkmoonsk/blog/blob/main/docs/main.md)

## Estrutura do Projeto

- `.editorconfig`: Arquivo de configuração do editor.
- `.eslintrc.json`: Arquivo de configuração do ESLint.
- `.gitignore`: Arquivo de ignore do Git.
- `.prettierrc`: Arquivo de configuração do Prettier.
- `app`: Diretório contendo o código principal da aplicação.
  - `about`: Diretório contendo código relacionado à página sobre.
    - `page.tsx`: Componente da página sobre.
  - `contact`: Diretório contendo código relacionado à página de contato.
    - `page.tsx`: Componente da página de contato.
  - `blogs`: Diretório contendo código relacionado ao blog.
    - `[slug]`: Diretório contendo código relacionado à página dinâmica do blog.
      - `page.tsx`: Componente da página dinâmica do blog.
  - `categories`: Diretório contendo código relacionado à categoria.
    - `[slug]`: Diretório contendo código relacionado à página dinâmica da categoria.
      - `page.tsx`: Componente da página dinâmica da categoria.
  - `favicon.ico`: Favicon do site.
  - `globals.css`: Estilos CSS globais.
  - `layout.tsx`: Componente principal do layout.
  - `manifest.ts`: Arquivo de manifesto para Progressive Web App.
  - `page.tsx`: Componente principal da página.
- `components`: Diretório contendo componentes reutilizáveis.
- `.contentlayer`: Contém arquivos de configuração do Contentlayer compilados e arquivos de dados gerados para o blog.
- `generated`: Contém arquivos JSON gerados para cada post do blog.
- `content`: Contém arquivos Markdown para cada post do blog.
- `public`: Contém imagens e recursos usados no blog.
- `utils`: Contém funções utilitárias.

<!-- ## Contribuindo

Contribuições são bem-vindas! Por favor, veja nossas [issues](link_para_as_issues) para saber como você pode ajudar. -->

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/darkmoonsk/blog/blob/main/LICENSE) para mais detalhes.