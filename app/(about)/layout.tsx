import InsightRoll from "@/components/About/InsightRoll";

export default function AboutLayout({children}: any) {
  const insights = [
    "10+ Projetos Completados",
    "3+ anos de Freelancing",
    "2+ anos de experiencia com Dev. FullStack",
    "99% de Satisfação dos clientes",
    "1+ projetos de pesquisa ciêntifica",
  ];

  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  )
}