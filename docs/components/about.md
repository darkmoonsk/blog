# About
Contem todos os componentes da pagina "Sobre"

---

## AboutCoverSection.tsx

### Descrição
O componente AboutCoverSection é um componente React que faz parte da página "Sobre" do blog. Ele é responsável por renderizar a seção de capa da página "Sobre".

### Estrutura
O componente é composto por uma seção que contém duas divisões principais:

A primeira divisão contém uma imagem de perfil, que é importada do arquivo avatar.jpeg localizado no diretório público.

A segunda divisão contém um título e um parágrafo que descrevem o autor do blog.

### Detalhes do Código
O componente utiliza a biblioteca next/image para otimizar a imagem de perfil. A imagem é carregada com prioridade e tem tamanhos diferentes dependendo da largura da janela do navegador.

O componente utiliza classes de estilo do Tailwind CSS para definir sua aparência e layout. Ele é responsivo e adapta seu layout dependendo do tamanho da tela.

### Uso
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

### Propriedades
O componente AboutCoverSection não aceita nenhuma propriedade. Ele é um componente autônomo que não depende de nenhum dado externo.

---

## InsightRoll.tsx

### Descrição
O componente InsightRoll é um componente React que recebe uma lista de insights e os exibe em um rolo animado. Este componente é usado na página "Sobre" do blog.

### Propriedades
insights: Este é um array de strings. Cada string representa um insight que será exibido no rolo.
### Estrutura
O componente InsightRoll retorna um elemento div que contém um rolo animado de insights. Cada insight é mapeado para um elemento div individual dentro do rolo. Entre cada insight, há um separador visual representado por uma barra vertical ("|").

### Estilo
O componente InsightRoll tem um estilo específico definido. Ele tem um fundo de cor de tema, com um texto claro. O texto tem uma sombra para dar um efeito de profundidade.

### Uso
Para usar o componente InsightRoll, você precisa passar um array de strings como propriedade insights. Cada string será exibida como um insight no rolo.

Exemplo:
```
<InsightRoll insights={["Insight 1", "Insight 2", "Insight 3"]} />
```
No exemplo acima, o componente InsightRoll exibirá um rolo animado com os insights "Insight 1", "Insight 2" e "Insight 3".

---

## Skills.tsx 

### Descrição
O componente Skills é um componente funcional React que exibe uma lista de habilidades. Cada habilidade é representada como um item de lista (`<li>`) dentro de uma lista não ordenada (`<ul>`).

### Estrutura
O componente Skills é composto por uma seção (`<section>`) que contém um título e uma lista não ordenada (`<ul>`). A lista é gerada dinamicamente a partir de um array de strings chamado skillList.

### Detalhes
skillList: Este é um array de strings que representa as habilidades a serem exibidas. Cada string é uma habilidade individual.

`<section>`: Este é o contêiner principal do componente. Ele tem várias classes CSS aplicadas para estilização.

`<span>`: Este é o texto da seção.

`<ul>`: Esta é a lista não ordenada que contém os itens da lista de habilidades. Cada item da lista é gerado dinamicamente a partir do array skillList.

`<li>`: Este é um item individual da lista. Ele é gerado dinamicamente para cada habilidade no array skillList. Cada item da lista tem várias classes CSS aplicadas para estilização e uma propriedade key que é igual ao seu índice no array skillList.

### Uso
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
### Estilos
Os estilos do componente são aplicados usando classes TailwindCSS. A estilização inclui tamanhos de fonte, cores de texto, cores de fundo, margens, preenchimento, bordas, transições e transformações. Além disso, o componente tem suporte para temas claros e escuros.

### Acessibilidade
O componente Skills é acessível por padrão. Cada item da lista tem um estado de foco visível e é acessível via navegação por teclado. Além disso, todos os textos são legíveis e têm contraste suficiente com o fundo.