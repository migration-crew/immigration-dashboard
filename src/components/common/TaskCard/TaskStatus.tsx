import { MicrotextSemi } from "../text/MicrotextSemi";

type Props = {
  status: string;
};

export function TaskStatus({ status }: Props) {
  return <MicrotextSemi>{status}</MicrotextSemi>;
}
