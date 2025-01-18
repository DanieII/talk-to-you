type MessageProps = {
  role: string;
  content: string;
};

export default function Message({ role, content }: MessageProps) {
  return (
    <div
      className={`rounded-xl p-4 text-xl ${role === "user" ? "ml-auto bg-secondary" : "bg-primary"}`}
    >
      {content}
    </div>
  );
}
