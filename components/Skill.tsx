export default function Skill({ skill, percentage }: { skill: string, percentage: number }) {
  return (
    <div className="w-full bg-white min-h-16 border-l-2 border-l-gray-400 relative">
      <div
        className="h-full bg-gray-300 absolute top-0 left-0 flex flex-row justify-start items-center p-3 overflow-x-visible whitespace-nowrap"
        style={{
          width: `${percentage}%`
        }}
      >
        <h1 className="text-slate-500 font-extralight text-xl z-1">{skill}</h1>
      </div>
    </div>
  )
}