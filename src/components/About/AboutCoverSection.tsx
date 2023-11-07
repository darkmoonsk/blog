import Image from "next/image"
import profileCharacter from "@/public/avatar.jpeg"

function AboutCoverSection() {
  return (
    <section className="w-full border-b-2 border-solid border-dark dark:border-light 
     flex flex-col lg:flex-row items-center justify-center text-dark dark:text-light
    ">
      <div className="w-/2 h-full border-b-2 lg:border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image src={profileCharacter} alt="Bruno Souza" 
        className="w-full h-full object-contain object-center"
        priority
        sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>
      <div className="w-full py-40 lg:py-0 lg:w-2/3 flex flex-col text-left items-start justify-center px-8 lg:px-16">
        <h2 className="font-bold capitalize text-3xl lg:text-6xl">
          Mais alto, mais longe, mais rapido!
        </h2>
        <p className="font-medium capitalize mt-4">
          Sou um programador apaixonado pelo que faz, participo de pesquisa cientifica e amo escrever 
          sobre o que eu gosto e faço, como: Programação, Ciência, Inteligência Artificial e Jogos. Estou sempre
          em busca de projetos que me desafiem. 
        </p>
      </div>
    </section>
  )
}

export default AboutCoverSection