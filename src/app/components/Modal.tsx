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
        onClick={() => document.getElementById("my_modal_2")?.showModal()}
      >
        {icon}
        {buttonLabel}
      </button>

      <dialog
        id="my_modal_2"
        className="modal bg-ctp-surface0 p-4 rounded-lg text-ctp-text"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-ctp-text">{title}</h3>
          <div className="py-4">{children}</div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-ctp-overlay0 px-2 rounded-lg">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
