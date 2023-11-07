# Blogs
Contem todos os componentes associados com os blog posts e sua renderização.

---

## BlogDetails.tsx

### Descrição
O componente BlogDetails é responsável por exibir os detalhes de um blog específico. Ele recebe como propriedades um objeto `blog` e uma `slug` do blog.

### Propriedades
`blog`: Um objeto que contém as informações do blog. Ele inclui detalhes como a data de publicação (`publishedAt`), o tempo de leitura (`readingTime`) e as tags (`tags`).

`slug`: Uma string que representa a slug do blog. Esta é usada para identificar o blog de forma única.

### Funcionalidades
O componente `BlogDetails` realiza as seguintes operações:

Exibe a data de publicação do blog, formatada para o formato "d 'de' LLLL, yyyy" e localizada para o português do Brasil.

Exibe um contador de visualizações para o blog, que é implementado pelo componente `ViewCounter`.

Exibe o tempo de leitura do blog, substituindo a palavra "read" por "de leitura".

Exibe um link para a categoria do blog, que é determinada pela primeira tag do blog. A slug da tag é usada para criar o URL.

### Uso
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
### Dependências
O componente `BlogDetails` depende dos seguintes pacotes:

- `date-fns` e `date-fns/locale/pt-BR` para formatar e localizar a data de publicação.
- `next/link` para criar o link para a categoria do blog.
- `github-slugger` para gerar a slug da tag do blog.
- `./ViewCounter` para exibir o contador de visualizações do blog.

---

## BlotLayoutOne.tsx

### Descrição
O componente `BlogLayoutOne` é um componente React que é usado para exibir um layout de blog individual em um projeto Next.js. Ele é usado para exibir a imagem do blog, o título e a tag associada.

### Importações
O componente importa vários pacotes e componentes:

- `Image` do pacote `next/image` para lidar com imagens otimizadas.
- `Tag` do diretório `../Elements/Tag` para exibir a tag do blog.
- `Link` do pacote `next/link` para lidar com a navegação entre páginas.
- `slug` do pacote `github-slugger` para gerar slugs a partir de strings.
### Props
O componente recebe um objeto `blog` como prop. Este objeto contém informações sobre o blog, incluindo a imagem, o título e a tag.

### Estrutura
O componente retorna um bloco de código JSX que contém a estrutura do layout do blog. Ele inclui:

Um contêiner `div` que envolve todo o layout do blog.
Um componente `Image` que exibe a imagem do blog.
Um componente `Tag` que exibe a tag do blog.
Um componente `Link` que envolve o título do blog e fornece navegação para a página do blog.

### Estilos
O componente usa classes Tailwind CSS para estilização. Ele também usa classes personalizadas para estilização específica, como animações e gradientes.

### Uso
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

---

## BlogLayoutTwo.tsx

### Descrição
O componente `BlogLayoutTwo` é um componente React que é usado para exibir um layout específico de um blog no projeto Next.js. Este componente é usado para exibir detalhes de um blog, incluindo a imagem do blog, o título, a data de publicação e as tags associadas.

### Importações
O componente importa várias bibliotecas e componentes:

- `Image` do `next/image`: Usado para exibir a imagem do blog.
- `Link` do `next/link`: Usado para criar links para a página do blog.
- `Tag` de `../Elements/Tag`: Componente personalizado usado para exibir as tags do blog.
- `format` do `date-fns`: Usado para formatar a data de publicação do blog.

### Props
O componente aceita as seguintes props:

`blog`: um objeto que contém detalhes sobre o blog. Este é um objeto complexo que inclui várias propriedades, como `url_path`, `image`, `title`, `tags` e `publishedAt`.

### Uso
O componente é usado da seguinte maneira:
```
<BlogLayoutTwo blog={blog} />
```
Onde `blog` é um objeto que contém detalhes sobre o blog.

### Estrutura
O componente retorna um elemento `div` que contém um link para a página do blog com a imagem do blog e um `div` que contém os detalhes do blog, como o título, as tags e a data de publicação.

### Estilos
O componente usa Tailwind CSS para estilização. Ele usa várias classes de utilitários para estilizar os elementos.

**...work in progress**