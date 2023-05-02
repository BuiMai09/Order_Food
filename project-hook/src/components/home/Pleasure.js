import logo from '../../assets/logo.png'
import Cake1 from '../../assets/Cake1.PNG'
import Cake2 from '../../assets/Cake2.PNG'
import Cake3 from '../../assets/Cake3.PNG'

const Pleasure = () => {
    return (
        <>
            <div className=''>
                <img src={logo} className="mt-8 w-32 h-22"></img>
                <div className=" flex flex-row   items-center mb-18">
                    <div className='pr-2 w-1/2'>

                        <div className='text-4xl font-extrabold text-gray-800/25'>Your Sweet</div>
                        <div className='font-Lobster text-5xl text-gray-900 py-6'>Pleasure...</div>
                        <p className='text-lg'>Whether for its signature fruit pasta, chestnuts, calissons or nougats,
                            Hediard pays particular attention to the choice of products that make up its small sweets.</p>
                    </div>
                    <div className='w-1/2 ml-20'>
                        <img className='mb-4 ' src={Cake1}></img>
                        <div className='flex  items-center'>
                            <img className='mr-2  w-40 h-40' src={Cake2}></img>
                            <img className=' w-40 h-40' src={Cake3}></img>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Pleasure