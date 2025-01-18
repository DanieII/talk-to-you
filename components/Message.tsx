type MessageProps = {
  content: string;
};

export default function Message({ content: message }: MessageProps) {
  return <div>{message}</div>;
}
