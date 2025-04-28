"use client"
import { RefreshCcw, Settings2 } from "lucide-react"
import React, { useState } from "react"
import { useTimer } from "react-timer-hook"
import { Modal } from "./Modal"

function Countdown({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const [pausedTime, setPausedTime] = useState<number | null>(null)
  const [initialDuration, setInitialDuration] = React.useState(25 * 60)

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
      // Calculer une nouvelle date d'expiration basée sur le temps restant
      const newExpiryTime = new Date()
      newExpiryTime.setSeconds(newExpiryTime.getSeconds() + pausedTime)
      restart(newExpiryTime)
      setPausedTime(null)
    } else {
      start()
    }
  }

  const handleReset = () => {
    // Créer une nouvelle date d'expiration basée sur la durée initiale
    const time = new Date()
    time.setSeconds(time.getSeconds() + initialDuration)
    restart(time, false)

    setPausedTime(null) // Réinitialiser le temps de pause
  }

  // Fonction pour changer la durée initiale (utile pour les réglages)
  const setNewDuration = (hours: number, minutes: number, seconds: number) => {
    const newDuration = hours * 3600 + minutes * 60 + seconds
    setInitialDuration(newDuration)
    const time = new Date()
    time.setSeconds(time.getSeconds() + newDuration)
    restart(time, false)
    pause()
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
          className="font-semibold bg-ctp-base rounded-full px-4 w-fit text-cpt-mantle text-2xl hover:bg-ctp-surface1 active:bg-ctp-surface2"
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <div className="flex gap-2">
          <button
            onClick={handleReset}
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
