import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/global/Navbar';
import { changeVisit } from '../store/actions/placesAction';
import PlaceCard from '../components/Organisms/PlaceCard';
import { Place } from '../store/reducers/places.reducer';

const PlacesListScreen = () => {
    const dispatch = useDispatch();
    const { places } = useSelector((state: RootState) => state.placesReducer);

    const handleMarkCLick = (id: Place["id"]) => dispatch(changeVisit(id));

    return (
        <div className='h-screen w-screen !overflow-auto relative flex flex-col items-center gradient-bg-services 
        text-white no-scrollbar pt-24'>
            <Navbar />
            <div className='flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 py-6'>
                {places &&
                    places.length > 0 &&
                    places.map((place) =>
                        <PlaceCard
                            image={place.image}
                            name={place.name}
                            description={place.description}
                            visited={place.visited}
                            placeId={place.id}
                            handleMarkClick={handleMarkCLick}
                        />

                    )}
            </div>
        </div>
    )
}

export default PlacesListScreen
