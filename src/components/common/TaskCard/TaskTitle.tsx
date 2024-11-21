import { MicrotextSemi } from "../text/MicrotextSemi";

type Props = {
  title: string;
};

export function TaskTitle({ title }: Props) {
  return (
    <MicrotextSemi className="font-semibold text-xs">{title}</MicrotextSemi>
  );
}
