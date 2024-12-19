import StatusTag from "../StatusTag";

type Props = {
  status: string;
};

export function TaskStatus({ status }: Props) {
  return <StatusTag status={status}/>
}
