
function InsightRoll({insights}: any) {

  return (
    <div className="w-full bg-accent dark:bg-accentDark/70 text-light whitespace-nowrap overflow-hidden">
      <div className="animate-roll w-full py-3 flex items-center justify-center capitalize font-semibold tracking-wider
        text-base
      "
      style={{
        textShadow: "4px 3px 6px rgba(0, 0, 0, 1)"
      }}
      >
        {
          insights.map((text: string, index: number) => <div key={index}>{text} <span className="px-4">|</span></div>)
        }
      </div>
    </div>
  )
}

export default InsightRoll