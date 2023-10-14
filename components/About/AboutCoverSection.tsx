import Image from "next/image"
import profileCharacter from "@/public/avatar.jpeg"

function AboutCoverSection() {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row
      items-center justify-center text-dark
    ">
      <div className="w-/2 h-full border-r-2 border-solid border-dark flex justify-center">
        <Image src={profileCharacter} alt="Bruno Souza" 
        className=" w-full h-full object-contain object-center"
        />
      </div>
      <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
        <h2 className="font-bold capitalize text-6xl">
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