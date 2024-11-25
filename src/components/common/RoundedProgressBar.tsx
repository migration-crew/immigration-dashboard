type Props = {
  progressBar: number;
};

export default function RoundedProgressBar({ progressBar }: Props) {
  return (
    <div className="flex gap-2">
      <div className="w-[60px] h-[16px] rounded-lg bg-primary-gray overflow-hidden">
        <div
          className="bg-secondary-green h-full rounded-lg"
          style={{ width: `${progressBar}%` }}
        ></div>
      </div>
      <p className="text-center text-primary-black text-caption ">
        {progressBar}%
      </p>
    </div>
  );
}
