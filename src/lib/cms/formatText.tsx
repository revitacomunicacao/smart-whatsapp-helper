import { splitLines } from "./normalize";

export function MultilineText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const lines = splitLines(text);
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </span>
  );
}

export function HeroTitle({ subtitle }: { subtitle: string }) {
  const lines = splitLines(subtitle);

  return (
    <span className="block lg:translate-x-1 text-[#7A94A2]">
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line.split(/(inteligência)/i).map((part, j) =>
            part.toLowerCase() === "inteligência" ? (
              <span key={j} className="text-white">
                {part}
              </span>
            ) : (
              <span key={j}>{part}</span>
            ),
          )}
        </span>
      ))}
    </span>
  );
}

export function SuporteTitle({ subtitle }: { subtitle: string }) {
  const lines = splitLines(subtitle);
  if (lines.length === 0) return null;

  const coloredLines = lines.slice(0, -1);
  const lastLine = lines[lines.length - 1];

  return (
    <>
      {coloredLines.length > 0 && (
        <span className="text-[#7A94A2]">
          {coloredLines.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </span>
      )}
      {coloredLines.length > 0 && lastLine && <br />}
      {lastLine}
    </>
  );
}

export function DescriptionWithBreaks({
  text,
  paragraphClassName,
}: {
  text: string;
  paragraphClassName?: string;
}) {
  const parts = text.split(/\r\n\r\n|\n\n/);
  const hasDoubleBreak = parts.length > 1;

  if (hasDoubleBreak) {
    return (
      <>
        {parts.map((part, i) => (
          <span key={i}>
            {i > 0 && (
              <>
                <br />
                <br />
              </>
            )}
            <MultilineText text={part} className={paragraphClassName} />
          </span>
        ))}
      </>
    );
  }

  const lines = splitLines(text);
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}
