import {
    ChangeEventHandler,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from 'react';
import { Search, LoaderCircle } from 'lucide-react';

type SearchBarProps = Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange'
> & {
    onChange: (value: string) => void;
    isLoading?: boolean;
};

const SearchBar = (props: SearchBarProps) => {
    const { onChange, isLoading, ...p } = props;
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
        onChange(e.target.value);

    return (
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-4" />
            <input
                className="h-11 bg-gray-100 w-full border border-gray-100 rounded-lg p-3 pl-10 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-500"
                type="text"
                onChange={handleChange}
                {...p}
            />
            {isLoading && (
                <LoaderCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-spin text-purple-400" />
            )}
        </div>
    );
};

export default SearchBar;
