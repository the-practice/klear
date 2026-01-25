interface ImagePlaceholderProps {
  id: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide" | "banner";
  description?: string;
  className?: string;
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[2/1]",
  banner: "aspect-[3/1]",
};

export default function ImagePlaceholder({
  id,
  aspectRatio = "video",
  description,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`img-placeholder ${aspectRatioClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={`Image placeholder ${id}${description ? `: ${description}` : ""}`}
    >
      <span className="img-placeholder-label">{id}</span>
      <div className="relative z-10 text-center p-4">
        <svg
          className="w-12 h-12 mx-auto text-[var(--klear-primary-300)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {description && (
          <p className="mt-2 text-sm text-[var(--klear-primary-600)] font-medium">
            {description}
          </p>
        )}
        <p className="mt-1 text-xs text-[var(--klear-neutral-500)]">
          Placeholder {id}
        </p>
      </div>
    </div>
  );
}
