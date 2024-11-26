import { Caption } from "./text/Caption";

type Props = {
  progress: number;
};

export default function HorizontalProgressBar({ progress }: Props) {
  return (
    <>
      <div className="w-full h-[18px] bg-primary-gray">
        <div
          className="bg-secondary-green h-full flex items-center justify-center"
          style={{ width: `${progress}%` }}
        >
          {progress > 0 && (
            <Caption className="text-center text-primary-white ">
              {progress}%
            </Caption>
          )}
        </div>
      </div>
    </>
  );
}
