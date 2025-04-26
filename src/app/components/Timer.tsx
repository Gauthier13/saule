"use client"

import { RefreshCcw, Settings2 } from "lucide-react"
import { useState } from "react"

export default function Timer() {
  const [timer, setTimer] = useState(25)

  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-[124px] font-bold text-ctp-text mt-28">25:00</p>
      <div className="flex gap-4">
        <button className="font-semibold bg-ctp-base rounded-full px-4 w-fit text-cpt-mantle text-2xl hover:bg-ctp-surface1 active:bg-ctp-lavender">
          Start
        </button>
        <div className="flex gap-2">
          <button className="bg-ctp-base hover:bg-ctp-surface1 active:bg-ctp-lavender w-fit p-2 rounded-full">
            <RefreshCcw size={18} />
          </button>
          <button className="bg-ctp-base hover:bg-ctp-surface1 active:bg-ctp-lavender w-fit p-2 rounded-full">
            <Settings2 size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
