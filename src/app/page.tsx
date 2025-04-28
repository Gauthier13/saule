import Music from "./components/Music"
import Notion from "./components/Notion"
import Timer from "./components/Timer"

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-xl flex flex-col items-center mx-auto p-10 gap-12">
      <Timer />
      <Notion />
      <Music />
    </div>
  )
}
