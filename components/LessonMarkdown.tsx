import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Renders a lesson body (markdown) with the brand "prose" styles from
// globals.css (.lesson-body). Used by the lesson player and the admin preview.
export function LessonMarkdown({ body }: { body: string }) {
  return (
    <div className="lesson-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </div>
  );
}
