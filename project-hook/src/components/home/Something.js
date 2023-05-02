import Cake5 from "../../assets/cake5.jpeg"

const Something = () => {
    return (
        <>
            <div className="-ml-14">
                <div className="relative h-full">
                    <img className="w-full" src={Cake5}>
                    </img>
                    <div className='w-full ml-65 items-center  bottom-36   absolute  '>
                        <div className='text-center  font-Lobster text-8xl text-pink-400'>
                            We are waiting for you
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Something;