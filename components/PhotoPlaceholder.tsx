import Image from "next/image";

interface PhotoPlaceholderProps {
  description: string;
  src?: string;
  alt?: string;
  aspectRatio?: "portrait" | "square" | "landscape" | "wide";
  className?: string;
  priority?: boolean;
}

export function PhotoPlaceholder({
  description,
  src,
  alt,
  aspectRatio = "portrait",
  className = "",
  priority = false,
}: PhotoPlaceholderProps) {
  const aspectClasses = {
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    landscape: "aspect-[4/3]",
    wide: "aspect-[16/9]",
  };

  if (src) {
    return (
      <div
        className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}
      >
        <Image
          src={src}
          alt={alt ?? description}
          fill
          className="object-cover object-center"
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center gap-4 p-8 ${aspectClasses[aspectRatio]} ${className}`}
    >
      {/* Camera icon */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="opacity-25 flex-shrink-0"
      >
        <path
          d="M14.5 7l-2.25 3.5H5.5A1.5 1.5 0 004 12v16a1.5 1.5 0 001.5 1.5h25A1.5 1.5 0 0032 28V12a1.5 1.5 0 00-1.5-1.5H23.75L21.5 7h-7z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="18"
          cy="19.5"
          r="5.5"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>

      <p className="text-center text-[11px] leading-relaxed font-sans opacity-40 max-w-[200px]">
        {description}
      </p>
    </div>
  );
}
