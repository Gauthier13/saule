"use client"
import { RefreshCcw, Settings2 } from "lucide-react"
import React, { useState } from "react"
import { useTimer } from "react-timer-hook"
import { Modal } from "./Modal"

function Countdown({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const [pausedTime, setPausedTime] = useState<number | null>(null)
  const [initialDuration, setInitialDuration] = React.useState(25 * 60)
  const [inputHours, setInputHours] = useState<string>("0")
  const [inputMinutes, setInputMinutes] = useState<string>("25")
  const [inputSeconds, setInputSeconds] = useState<string>("0")

  const { seconds, minutes, hours, isRunning, start, pause, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
      interval: 20,
      autoStart: false,
    })

  const handlePause = () => {
    // Enregistrer combien de temps il reste quand on pause
    setPausedTime(hours * 3600 + minutes * 60 + seconds)
    pause()
  }

  const handleStart = () => {
    if (pausedTime !== null) {
      const newExpiryTime = new Date()
      newExpiryTime.setSeconds(newExpiryTime.getSeconds() + pausedTime)
      restart(newExpiryTime)
      setPausedTime(null)
    } else {
      start()
    }
  }

  const handleReset = () => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + initialDuration)
    restart(time, false)
    setPausedTime(null)
  }

  const setNewDuration = () => {
    const hours = parseInt(inputHours) || 0
    const minutes = parseInt(inputMinutes) || 0
    const seconds = parseInt(inputSeconds) || 0

    const newDuration = hours * 3600 + minutes * 60 + seconds
    setInitialDuration(newDuration)

    const time = new Date()
    time.setSeconds(time.getSeconds() + newDuration)
    restart(time, false)
    setPausedTime(null)
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="text-[124px] font-bold text-ctp-text mt-28">
        <span>{String(hours).padStart(2, "0")}</span>:
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={isRunning ? handlePause : handleStart}
          className={
            isRunning
              ? "btn rounded-full bg-ctp-base text-ctp-red w-28"
              : "btn rounded-full bg-ctp-base text-ctp-lavender w-28"
          }
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="bg-ctp-base hover:bg-ctp-surface1 active:bg-ctp-surface2 btn btn-circle"
          >
            <RefreshCcw size={18} />
          </button>

          <Modal
            icon={
              <div className="bg-ctp-base hover:bg-ctp-surface1 active:bg-ctp-surface2 btn btn-circle">
                <Settings2 size={18} />
              </div>
            }
          >
            <p className="font-medium mb-3">Réglages du minuteur</p>

            <div className="flex gap-2 items-center w-full">
              <input
                className="rounded-lg px-2 w-24 input validator"
                placeholder="h"
                aria-label="heures"
                type="number"
                min={0}
                max={24}
                value={inputHours}
                onChange={(e) => setInputHours(e.target.value)}
              />
              <span>:</span>
              <input
                className="rounded-lg px-2 w-24  input validator"
                placeholder="min"
                aria-label="minutes"
                type="number"
                min={0}
                max={60}
                value={inputMinutes}
                onChange={(e) => setInputMinutes(e.target.value)}
              />
              <span>:</span>
              <input
                className="rounded-lg px-2 w-24 input validator"
                placeholder="sec"
                aria-label="secondes"
                type="number"
                min={0}
                max={60}
                value={inputSeconds}
                onChange={(e) => setInputSeconds(e.target.value)}
              />
              <button
                onClick={setNewDuration}
                className="bg-ctp-surface0 text-ctp-lavender rounded-lg px-4 py-2 w-fit text-cpt-mantle hover:bg-ctp-surface1 active:bg-ctp-surface2"
              >
                Appliquer
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default function Timer() {
  const time = new Date()
  time.setMinutes(time.getMinutes() + 25) // 25 minutes par défaut
  return (
    <div>
      <Countdown expiryTimestamp={time} />
    </div>
  )
}
