type Props = {
  progress: number;
};

export default function HoraizontalProgressBar({ progress }: Props) {
  return (
    <>
      <div className="w-full h-[18px] bg-primary-gray">
        <div
          className="bg-secondary-green h-full flex items-center justify-center"
          style={{ width: `${progress}%` }}
        >
          {progress > 0 && (
            <p className="text-center text-primary-white ">{progress}%</p>
          )}
        </div>
      </div>
    </>
  );
}
