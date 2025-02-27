import { Caption } from '@/components/common/text/Caption';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ColorCode } from '@/types/Calendar/ColorCodeType';

type Props = {
  colorCodes: ColorCode[];
};

/**
 * ColorCodeChart
 * @param colorCodes: pass the color and description of the color code
 * @returns
 */

export default function ColorCodeChart({ colorCodes }: Props) {
  return (
    <Card className={cn('rounded-lg bg-white p-4')}>
      <ul className='list-none space-y-2'>
        {colorCodes.map((colorCode, index) => (
          <li key={index} className='flex gap-2 items-center'>
            <div
              className={`w-3 h-3 rounded-full ${colorCode.colorClass}`}
            ></div>
            <Caption>{colorCode.description}</Caption>
          </li>
        ))}
      </ul>
    </Card>
  );
}
