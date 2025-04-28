"use client"
import { RefreshCcw, Settings2 } from "lucide-react"
import React from "react"
import { useTimer } from "react-timer-hook"
import { Modal } from "./Modal"

function Countdown({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const { seconds, minutes, hours, isRunning, start, pause, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
      interval: 20,
      autoStart: false,
    })

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="text-[124px] font-bold text-ctp-text mt-28">
        <span>{String(hours).padStart(2, "0")}</span>:
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={isRunning ? pause : start}
          className="font-semibold bg-ctp-base rounded-full px-4 w-fit text-cpt-mantle text-2xl hover:bg-ctp-surface1 active:bg-ctp-surface2"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => {
              const time = new Date()
              time.setSeconds(time.getSeconds() + 300)
              restart(time)
              pause()
            }}
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

export default function Timer() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 600)
  return (
    <div>
      <Countdown expiryTimestamp={time} />
    </div>
  )
}
