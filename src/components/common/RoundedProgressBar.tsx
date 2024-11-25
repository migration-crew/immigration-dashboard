type Props = {
  progress: number;
};

export default function RoundedProgressBar({ progress }: Props) {
  return (
    <div className="flex gap-2">
      <div className="w-[60px] h-[16px] rounded-lg bg-primary-gray overflow-hidden">
        <div
          className="bg-secondary-green h-full rounded-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {progress > 0 && (
        <p className="text-center text-primary-black text-caption ">
          {progress}%
        </p>
      )}
    </div>
  );
}
