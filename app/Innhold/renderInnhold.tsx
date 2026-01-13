import type { innholdsTextType } from "../content/text/innholdsText";

interface HvemErJegPersonligProps {
  innholdsText: innholdsTextType;
  illustrationSrc?: string;
}
export default function RenderInnhold({
  innholdsText,
  illustrationSrc,
}: HvemErJegPersonligProps) {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        <div className="flex flex-col justify-center md:pr-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-8">
            {innholdsText.heading}
          </h1>
          <ul className="space-y-5">
            {innholdsText.paragraph.map((text, idx) => (
              <li
                key={idx}
                className="text-xl md:text-2xl font-medium flex items-center justify-start gap-3 motion-safe:opacity-0 motion-safe:animate-[fadeInUp_600ms_ease_forwards]"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 text-gray-900 flex-none"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="6" />
                </svg>
                <span className="text-left">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center md:pl-8">
          {illustrationSrc && (
            <img
              src={illustrationSrc}
              alt="Illustration"
              aria-hidden="true"
              className="max-w-full max-h-[60vh] object-contain drop-shadow-md opacity-90"
            />
          )}
        </div>
      </div>
    </main>
  );
}
