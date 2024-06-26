import { StarIcon } from '@heroicons/react/24/outline';


const FavoriteButton = ({isFavorite}) => {
    return (
        <button
            className="inline-flex items-center justify-center appearance-none select-none  font-normal   rounded-full px-0 !gap-0   min-w-8 w-8 h-8  absolute right-6 top-6 z-20 hover:bg-accent "
            type="button"
        >
            <StarIcon className={`w-6 h-6 ${isFavorite ? 'fill-blue-500' : 'text-default-400'}`} />
        </button>
    );
}


export default FavoriteButton;