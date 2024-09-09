import { Loader } from 'lucide-react'

const Loading = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center bg-black text-white'>
            <p className='animate-pulse text-xl'>Loading...</p>
            <Loader className='animate-spin ml-3' />
        </div>
    )
}

export default Loading