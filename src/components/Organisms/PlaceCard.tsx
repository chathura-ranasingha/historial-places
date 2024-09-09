import { ArrowRight } from 'lucide-react';
import { CardBody, CardContainer } from '../Molecules/3d-card';

interface PlaceCardProps {
    image: string;
    name: string;
    description: string;
    visited: boolean;
    placeId: number;
    handleMarkClick: (id: number) => void;
}

const PlaceCard = ({
    image,
    name,
    description,
    visited,
    placeId,
    handleMarkClick,
}: PlaceCardProps) => {
    return (
        <CardContainer className='rounded-xl bg-white/5 backdrop-blur-lg text-center'>
            <CardBody>
                <img src={image} alt="load" className='w-full h-[200px]  rounded-t-xl' />
                <div className=' px-3'>
                    <p className='font-mono text-xl font-semibold mt-3'>{name}</p>
                    <p className='text-base'>{description}</p>
                    <p className='text-red-400 text-base font-medium mt-2'>{visited ? 'Visited' : 'Not Visited'}</p>
                    <div className='flex justify-between items-center mt-2.5'>
                        <button
                            onClick={() => handleMarkClick(placeId)}
                            className='flex px-4 py-2 rounded-xl bg-white text-black text-sm font-bold hover:bg-green-100 '
                        >
                            {`${visited ? 'Unmark' : 'Mark'} as Visited`}
                        </button>
                        <a
                            href={`/place/${placeId}`}
                            className='flex px-4 py-2.5 rounded-xl bg-black text-white text-sm font-bold hover:animate-pulse'
                        >
                            View Details <ArrowRight size={20} className='ml-1' />
                        </a>
                    </div>
                </div>
            </CardBody>
        </CardContainer>
    );
};
export default PlaceCard;
