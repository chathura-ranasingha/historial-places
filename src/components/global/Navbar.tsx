import { MenuIcon } from 'lucide-react'
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate()
    const { places } = useSelector((state: RootState) => state.placesReducer);

    const handleSuggestionClick = () => {
        const randomIndex = Math.floor(Math.random() * places.length);
        navigate(`/place/${places[randomIndex].id}`)
    }

    return (
        <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/20 backdrop-blur-lg z-[100]
        flex items-center border-b-[1px] border-neutral-700 justify-between text-white
        '>
            <aside>
                <p className='text-3xl font-bold hidden md:block'>Historical Places</p>
            </aside>
            <aside className='flex items-center gap-4'>
                <div
                    onClick={() => handleSuggestionClick()}
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Suggestion Place
                    </span>
                </div>
                <MenuIcon className='md:hidden' />
            </aside>
        </header>
    )
}

export default Navbar