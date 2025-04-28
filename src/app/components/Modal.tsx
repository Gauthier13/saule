import { JSX } from "react"

interface ModalProps {
  buttonLabel?: string
  title?: string
  icon?: JSX.Element
  children: React.ReactNode
}

export function Modal({ buttonLabel, title, icon, children }: ModalProps) {
  return (
    <>
      <button
        className="btn btn-circle flex items-center gap-2"
        onClick={() => document.getElementById("settings_modal")?.showModal()}
      >
        {icon}
        {buttonLabel}
      </button>

      <dialog
        id="settings_modal"
        className="modal p-4 rounded-lg text-ctp-text"
      >
        <div className="modal-box bg-ctp-base">
          <h3 className="font-bold text-lg text-ctp-text">{title}</h3>
          <div className="py-4">{children}</div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
