"use client"

import { RefreshCcw, Settings2 } from "lucide-react"
import { Modal } from "./Modal"
import useTimer from "easytimer-react-hook"
import { useState } from "react"

export default function Timer() {
  const [countdown, setCountdown] = useState(25)
  const [timer, isTargetAchieved] = useTimer({
    countdown: true,
    /* Hook configuration */
  })
  timer.start({
    /* EasyTimer start configuration */
    startValues: { minutes: countdown },
  })

  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-[124px] font-bold text-ctp-text mt-28">
        {timer.getTimeValues().toString()}
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => timer.start()}
          className="font-semibold bg-ctp-base rounded-full px-4 w-fit text-cpt-mantle text-2xl hover:bg-ctp-surface1 active:bg-ctp-surface2"
        >
          Start
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => timer.reset()}
            className="bg-ctp-base hover:bg-ctp-surface1 active:bg-ctp-surface2 w-fit p-2 rounded-full"
          >
            <RefreshCcw size={18} />
          </button>
          <Modal
            icon={
              <div className="bg-ctp-base hover:bg-ctp-surface1 active:bg-ctp-surface2 w-fit p-2 rounded-full">
                <Settings2 size={18} />
              </div>
            }
          >
            <p>Réglages du minuteur à venir ici !</p>
            <div className="flex gap-2 w-72">
              <input
                className="rounded-lg px-2"
                placeholder="h"
                aria-label="minutes"
                type="number"
                min={0}
                max={24}
              />
              <input
                className="rounded-lg px-2 "
                placeholder="min"
                aria-label="minutes"
                type="number"
                min={0}
                max={60}
              />
              <input
                className="rounded-lg px-2"
                placeholder="sec"
                aria-label="minutes"
                type="number"
                min={0}
                max={60}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}
