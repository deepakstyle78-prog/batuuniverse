import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BAT Vidyagram" },
      { name: "description", content: "BAT Vidyagram — full-screen embedded app." },
      { property: "og:title", content: "BAT Vidyagram" },
      { property: "og:description", content: "BAT Vidyagram — full-screen embedded app." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-background">
      <iframe
        src="https://bat.unuverse.workers.dev/"
        title="BAT Vidyagram"
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-read; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
