import { useEffect, useState } from 'react'
import Navbar from '../components/global/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ArrowBigLeftDash } from 'lucide-react';
import Loading from '../components/Atoms/Loading';
import { Place } from '../store/reducers/places.reducer';
import PlaceCard from '../components/Organisms/PlaceCard';
import { changeVisit } from '../store/actions/placesAction';


const PlaceDetailsScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { placeId } = useParams();
    const { places } = useSelector((state: RootState) => state.placesReducer);

    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    useEffect(() => {
        if (!placeId) return console.warn("Id needed.");
        getPlace(+placeId)
    }, [placeId, places]) // eslint-disable-line react-hooks/exhaustive-deps

    const getPlace = (placeId: number) => {
        const data = places.find((place) => place.id === +placeId)
        if (data) {
            setSelectedPlace(data)
        } else {
            navigate(-1)
        }
    }

    const handleMarkCLick = (id: Place["id"]) => dispatch(changeVisit(id));

    if (!selectedPlace) return <Loading />

    return (
        <div className='h-screen w-screen relative flex  items-center justify-center gradient-bg-services 
        text-white no-scrollbar pt-24'>
            <Navbar />
            <div>
                <div
                    onClick={() => navigate('/')}
                    className='flex text-black bg-white/80 backdrop-blur-lg w-1/5 rounded-lg p-2 mb-5 cursor-pointer'>
                    <ArrowBigLeftDash />
                    back</div>
                <PlaceCard
                    image={selectedPlace.image}
                    name={selectedPlace.name}
                    description={selectedPlace.description}
                    visited={selectedPlace.visited}
                    placeId={selectedPlace.id}
                    handleMarkClick={handleMarkCLick}
                />
            </div>

        </div>
    )
}

export default PlaceDetailsScreen