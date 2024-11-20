type Props = {
  progress: number;
};

export default function StatusTag({ progress }: Props) {
  return (
    <>
      {progress === 100 ? (
        <div className="w-[93px] h-[27px] rounded-sm bg-green-200">
          <p className="text-secondary-green flex items-center justify-center">
            complete
          </p>
        </div>
      ) : progress < 100 ? (
        <div className="w-[93px] h-[27px] rounded-sm bg-blue-200">
          <p className="text-secondary-blue flex items-center justify-center">
            processing
          </p>
        </div>
      ) : (
        <div className="w-[93px] h-[27px] rounded-sm bg-red-200">
          <p className="text-primary-red flex items-center justify-center">
            rejected
          </p>
        </div>
      )}
    </>
  );
}
