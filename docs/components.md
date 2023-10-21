# Components
Pasta com todos os componentes usados no blog

## About
Contem todos os componentes da pagina "Sobre"
### AboutCoverSection.tsx
#### Descrição
O componente AboutCoverSection é um componente React que faz parte da página "Sobre" do blog. Ele é responsável por renderizar a seção de capa da página "Sobre".

#### Estrutura
O componente é composto por uma seção que contém duas divisões principais:

A primeira divisão contém uma imagem de perfil, que é importada do arquivo avatar.jpeg localizado no diretório público.

A segunda divisão contém um título e um parágrafo que descrevem o autor do blog.

#### Detalhes do Código
O componente utiliza a biblioteca next/image para otimizar a imagem de perfil. A imagem é carregada com prioridade e tem tamanhos diferentes dependendo da largura da janela do navegador.

O componente utiliza classes de estilo do Tailwind CSS para definir sua aparência e layout. Ele é responsivo e adapta seu layout dependendo do tamanho da tela.

#### Uso
Para usar o componente AboutCoverSection, você pode importá-lo e usá-lo em qualquer componente React. Aqui está um exemplo:

```
import AboutCoverSection from './components/About/AboutCoverSection';

function About() {
  return (
    <div>
      <AboutCoverSection />
      // outros componentes...
    </div>
  );
}

export default AboutPage;
```

#### Propriedades
O componente AboutCoverSection não aceita nenhuma propriedade. Ele é um componente autônomo que não depende de nenhum dado externo.

### InsightRoll.tsx
#### Descrição
O componente InsightRoll é um componente React que recebe uma lista de insights e os exibe em um rolo animado. Este componente é usado na página "Sobre" do blog.

#### Propriedades
insights: Este é um array de strings. Cada string representa um insight que será exibido no rolo.
#### Estrutura
O componente InsightRoll retorna um elemento div que contém um rolo animado de insights. Cada insight é mapeado para um elemento div individual dentro do rolo. Entre cada insight, há um separador visual representado por uma barra vertical ("|").

#### Estilo
O componente InsightRoll tem um estilo específico definido. Ele tem um fundo de cor de tema, com um texto claro. O texto tem uma sombra para dar um efeito de profundidade.

#### Uso
Para usar o componente InsightRoll, você precisa passar um array de strings como propriedade insights. Cada string será exibida como um insight no rolo.

Exemplo:
```
<InsightRoll insights={["Insight 1", "Insight 2", "Insight 3"]} />
```
No exemplo acima, o componente InsightRoll exibirá um rolo animado com os insights "Insight 1", "Insight 2" e "Insight 3".

### Skills.tsx 
#### Descrição
O componente Skills é um componente funcional React que exibe uma lista de habilidades. Cada habilidade é representada como um item de lista (`<li>`) dentro de uma lista não ordenada (`<ul>`).

#### Estrutura
O componente Skills é composto por uma seção (`<section>`) que contém um título e uma lista não ordenada (`<ul>`). A lista é gerada dinamicamente a partir de um array de strings chamado skillList.

#### Detalhes
skillList: Este é um array de strings que representa as habilidades a serem exibidas. Cada string é uma habilidade individual.

`<section>`: Este é o contêiner principal do componente. Ele tem várias classes CSS aplicadas para estilização.

`<span>`: Este é o texto da seção.

`<ul>`: Esta é a lista não ordenada que contém os itens da lista de habilidades. Cada item da lista é gerado dinamicamente a partir do array skillList.

`<li>`: Este é um item individual da lista. Ele é gerado dinamicamente para cada habilidade no array skillList. Cada item da lista tem várias classes CSS aplicadas para estilização e uma propriedade key que é igual ao seu índice no array skillList.

#### Uso
Para usar o componente Skills, basta importá-lo e renderizá-lo como qualquer outro componente React. Não requer quaisquer props.
```
import Skills from './components/About/Skills';

function App() {
  return (
    <div>
      <Skills />
    </div>
  );
}

export default App;
```
#### Estilos
Os estilos do componente são aplicados usando classes TailwindCSS. A estilização inclui tamanhos de fonte, cores de texto, cores de fundo, margens, preenchimento, bordas, transições e transformações. Além disso, o componente tem suporte para temas claros e escuros.

#### Acessibilidade
O componente Skills é acessível por padrão. Cada item da lista tem um estado de foco visível e é acessível via navegação por teclado. Além disso, todos os textos são legíveis e têm contraste suficiente com o fundo.

## Blogs
Contem todos os componentes associados com os blog posts e sua renderização.

### BlogDetails.tsx
#### Descrição
O componente BlogDetails é responsável por exibir os detalhes de um blog específico. Ele recebe como propriedades um objeto `blog` e uma `slug` do blog.

#### Propriedades
`blog`: Um objeto que contém as informações do blog. Ele inclui detalhes como a data de publicação (`publishedAt`), o tempo de leitura (`readingTime`) e as tags (`tags`).

`slug`: Uma string que representa a slug do blog. Esta é usada para identificar o blog de forma única.

#### Funcionalidades
O componente `BlogDetails` realiza as seguintes operações:

Exibe a data de publicação do blog, formatada para o formato "d 'de' LLLL, yyyy" e localizada para o português do Brasil.

Exibe um contador de visualizações para o blog, que é implementado pelo componente `ViewCounter`.

Exibe o tempo de leitura do blog, substituindo a palavra "read" por "de leitura".

Exibe um link para a categoria do blog, que é determinada pela primeira tag do blog. A slug da tag é usada para criar o URL.

#### Uso
Para usar o componente `BlogDetails`, você deve importá-lo e então usá-lo em seu código JSX, passando um objeto `blog` e uma `slug` como propriedades.
```
import BlogDetails from './BlogDetails';

function MyComponent() {
  const blog = {
    // detalhes do blog
  };
  const slug = 'meu-blog';

  return (
    <div>
      <BlogDetails blog={blog} slug={slug} />
    </div>
  );
}
```
#### Dependências
O componente `BlogDetails` depende dos seguintes pacotes:

- `date-fns` e `date-fns/locale/pt-BR` para formatar e localizar a data de publicação.
- `next/link` para criar o link para a categoria do blog.
- `github-slugger` para gerar a slug da tag do blog.
- `./ViewCounter` para exibir o contador de visualizações do blog.

### BlotLayoutOne.tsx
#### Descrição
O componente `BlogLayoutOne` é um componente React que é usado para exibir um layout de blog individual em um projeto Next.js. Ele é usado para exibir a imagem do blog, o título e a tag associada.

#### Importações
O componente importa vários pacotes e componentes:

- `Image` do pacote `next/image` para lidar com imagens otimizadas.
- `Tag` do diretório `../Elements/Tag` para exibir a tag do blog.
- `Link` do pacote `next/link` para lidar com a navegação entre páginas.
- `slug` do pacote `github-slugger` para gerar slugs a partir de strings.
#### Props
O componente recebe um objeto `blog` como prop. Este objeto contém informações sobre o blog, incluindo a imagem, o título e a tag.

#### Estrutura
O componente retorna um bloco de código JSX que contém a estrutura do layout do blog. Ele inclui:

Um contêiner `div` que envolve todo o layout do blog.
Um componente `Image` que exibe a imagem do blog.
Um componente `Tag` que exibe a tag do blog.
Um componente `Link` que envolve o título do blog e fornece navegação para a página do blog.
#### Estilos
O componente usa classes Tailwind CSS para estilização. Ele também usa classes personalizadas para estilização específica, como animações e gradientes.

#### Uso
Para usar o componente, importe-o de seu arquivo e passe um objeto `blog` como prop. O objeto `blog` deve ter obrigatoriamente os seguintes dados:
```
{
  image: {
    filePath: string,
    width: number,
    height: number
  },
  title: string,
  tags: string[],
  url_path: string
}
```
Exemplo de uso:
```
import BlogLayoutOne from './components/Blogs/BlogLayoutOne';

function App() {
  const blog = {
    image: {
      filePath: '/path/to/image.jpg',
      width: 500,
      height: 300
    },
    title: 'Título do Blog',
    tags: ['Tag1'],
    url_path: '/path/to/blog'
  };

  return <BlogLayoutOne blog={blog} />;
}

export default App;
```
Usando o `ContentLayer` com a configuração deste projeto, ele já gerara o objeto blog com esses dados.

### BlogLayoutTwo.tsx
#### Descrição
O componente `BlogLayoutTwo` é um componente React que é usado para exibir um layout específico de um blog no projeto Next.js. Este componente é usado para exibir detalhes de um blog, incluindo a imagem do blog, o título, a data de publicação e as tags associadas.

#### Importações
O componente importa várias bibliotecas e componentes:

- `Image` do `next/image`: Usado para exibir a imagem do blog.
- `Link` do `next/link`: Usado para criar links para a página do blog.
- `Tag` de `../Elements/Tag`: Componente personalizado usado para exibir as tags do blog.
- `format` do `date-fns`: Usado para formatar a data de publicação do blog.
#### Props
O componente aceita as seguintes props:

`blog`: um objeto que contém detalhes sobre o blog. Este é um objeto complexo que inclui várias propriedades, como `url_path`, `image`, `title`, `tags` e `publishedAt`.
#### Uso
O componente é usado da seguinte maneira:
```
<BlogLayoutTwo blog={blog} />
```
Onde `blog` é um objeto que contém detalhes sobre o blog.

#### Estrutura
O componente retorna um elemento `div` que contém um link para a página do blog com a imagem do blog e um `div` que contém os detalhes do blog, como o título, as tags e a data de publicação.

#### Estilos
O componente usa Tailwind CSS para estilização. Ele usa várias classes de utilitários para estilizar os elementos.

**...work in progress**