import { useEffect } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  src: string
}

export default function GoogleFormModal({ open, onClose, src }: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-2 py-2 sm:px-4 sm:py-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative z-10 flex h-[calc(100vh-1rem)] w-[calc(100vw-1rem)] max-h-[900px] max-w-[820px] overflow-hidden rounded-lg bg-white shadow-lg sm:h-[calc(100vh-2rem)] sm:w-[calc(100vw-2rem)]">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-[#0b0d10] shadow hover:bg-white"
          aria-label="Close form"
        >
          ✕
        </button>

        <iframe
          title="Google Form"
          src={src}
          className="h-full w-full border-0"
        />
      </div>
    </div>
  )
}
