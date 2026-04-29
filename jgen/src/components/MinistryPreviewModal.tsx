type MinistryPreviewModalProps = {
  open: boolean
  title: string
  image: string
  onClose: () => void
}

function MinistryPreviewModal({ open, title, image, onClose }: MinistryPreviewModalProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-80 flex items-center justify-center bg-black/65 p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative flex h-[calc(100vh-1.5rem)] w-[calc(100vw-1.5rem)] max-h-225 max-w-225 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close ministry preview"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
        >
          ×
        </button>

        <div className="flex-1 overflow-hidden bg-[#0b0d10]">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>

        <div className="border-t border-black/10 bg-white px-4 py-3 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--forest)/80">
            Ministries
          </p>
          <h3 className="mt-1 font-display text-xl text-(--ink) sm:text-2xl">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default MinistryPreviewModal
