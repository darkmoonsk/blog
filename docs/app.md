# APP

A pasta app é responsável por gerar as rotas do projeto.

- (about) - Usa o [sistema de layout compartilhado do Next](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts), o que no caso do blog está compartilhando o componente `InsightRoll` com as paginas `about` e `contact`
- blogs - Usa o [sistema de rotas dinâmicas do Next](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) para gerar dinamicamente as rotas para as páginas dos blogs, nesse caso usando o padrão [slug], que corresponde a `blogs/nome-do-blog`
- categories - Também usa as rotas dinâmicas para gerar as paginas das categorias.

## (about)/about/page.tsx

Este arquivo gera os metadados da página Sobre para otimizar o SEO e renderiza os componentes `AboutCoverSection` e `Skills` .

## (about)/contact/page.tsx

Este arquivo gera os metadados da página Contato, renderiza a animação `LottieAnimation` e o formulario de contato `ContactForm`

## blogs/[slug]/page.tsx

Aqui está sendo usado a função do Next `generateStaticParams()` para gerar estaticamente as paginas no momento de build em vez de gerar dinamicamente a cada requisição.

Também está sendo gerado dinamicamente os metadados da pagina, com o objetivo de otimizar o SEO.

Por fim está sendo gerado a `BlogPage` com a imagem de capa usando Next Image, o componente `BlogDetails` o sumario com os principais assuntos do blog e por fim o componente `RenderMdx` que renderiza o blog em si.

## categories/[slug]/page.tsx

Arquivo responsável por renderizar os blogs por categoria, gera estaticamente as paginas com a função Next `generateStaticParams()` , renderiza as categorias usando o componente `Categories`  e o `BlogLayoutThree` para renderizar cada blog.

## layout.tsx

Componente do layout principal do blog, gera os metadados para os algoritmos de busca, define as fontes do projeto, os componentes `ThemeScript` , `Header` e `Footer` em todas as páginas.

## manifest.ts

Responsável por gerar as configurações de manifesto do blog.

## page.tsx

É o componente da pagina principal, que renderiza as seções `HomeCoverSection` (Gera o post principal), `FeaturedPosts` (Gera os posts em destaque) e `RecentPosts` (Gera os posts mais recentes).