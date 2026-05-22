import { renderResumeMarkdown } from "@/lib/llms-full"

export const dynamic = "force-static"

export function GET(): Response {
  return new Response(renderResumeMarkdown(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
