import { useState } from "react"
import Candies from './Candies'
import candy from "../../assets/anise-candy.png"
import biscuits from "../../assets/biscuits.png"
import croissant from "../../assets/croissant.png"
import lollipop from "../../assets/lollipop.png"
import cake from "../../assets/piece-of-cake.png"
import toast from "../../assets/toast.png"


const TypeProducts = () => {
    const typeProducts = [
        { id: 1, image: candy, title: 'Candies', content: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
        { id: 2, image: cake, title: 'Cake', content: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
        { id: 3, image: biscuits, title: 'Biscuits', content: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
        { id: 4, image: toast, title: 'Bread', content: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
        { id: 5, image: croissant, title: 'Croissant', content: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
        { id: 6, image: lollipop, title: 'Lollipop', content: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' }

    ]
    return (
        <>
            <div className='-ml-14 bg-stone-800 '>
                <div className='ml-14 flex'>

                    <Candies typeProducts={typeProducts} />
                </div>
            </div>
        </>
    )
}
export default TypeProducts;