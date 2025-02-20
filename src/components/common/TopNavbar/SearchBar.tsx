import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

type Props = {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * SearchBar
 * @param placeholder: (optional) pass the placeholder of the search bar
 * @param value: (optional) pass the value of the search bar
 * @param className: (optional) pass all classes that you want to apply to the search bar
 * @param onChange: (optional) pass the function that will be called when the value of the search bar changes
 * @returns
 */

export function SearchBar({
  placeholder = 'Search',
  value,
  className = '',
  onChange,
}: Props) {
  return (
    <div className={cn('', className)}>
      <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
      <Input
        type='search'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='pl-8  rounded-[19px] bg-secondary-light-gray'
      />
    </div>
  );
}
