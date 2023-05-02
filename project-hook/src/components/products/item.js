import { useEffect, useState } from "react";
import { Card } from 'antd'
import axios from "axios"
import { useSelector } from "react-redux";


const Item = () => {
    const user = useSelector((state) => state.auth.login.currentUser)

    const [dataItem, setDataItem] = useState([])
    useEffect(() => {
        const loadData = async () => {
            let res = await axios.get('http://localhost:8005/products')
            let data = res && res.data ? res.data : []
            setDataItem(data)
        };
        setTimeout(() => {
            loadData();

        }, 1000);
    }, []);
    return (

        <>
            <div className=" flex flex-row flex-wrap justify-center md:gap-4.4 sm:gap-2">
                {
                    dataItem && dataItem.length > 0 &&
                    dataItem.map(item => {
                        return (
                            <>
                                <Card key={item.id}
                                    hoverable
                                    className=" bg-teal-800 sm:w-60"
                                    style={{
                                        width: 260,

                                    }}
                                    cover={<img className="h-82" src={item.thumbnail} />}

                                >
                                    <div className="w-70">
                                        <div className=" font-Lobster text-2xl text-white">{item.nameCake}</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-xl text-white font-bold">{item.price}</div>
                                            <div className="w-8 h-8 mt-2">

                                                <svg className="-mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path d="M10.39 11.5C10.39 11.09 10.73 10.75 11.14 10.75H12.39V9.5C12.39 9.09 12.73 8.75 13.14 8.75C13.55 8.75 13.89 9.09 13.89 9.5V10.75H15.14C15.55 10.75 15.89 11.09 15.89 11.5C15.89 11.91 15.55 12.25 15.14 12.25H13.89V13.5C13.89 13.91 13.55 14.25 13.14 14.25C12.73 14.25 12.39 13.91 12.39 13.5V12.25H11.14C10.73 12.25 10.39 11.91 10.39 11.5ZM11.25 18.75C11.25 19.58 10.58 20.25 9.75 20.25C8.92 20.25 8.25 19.58 8.25 18.75C8.25 17.92 8.92 17.25 9.75 17.25C10.58 17.25 11.25 17.92 11.25 18.75ZM17.75 18.75C17.75 19.58 17.08 20.25 16.25 20.25C15.42 20.25 14.75 19.58 14.75 18.75C14.75 17.92 15.42 17.25 16.25 17.25C17.08 17.25 17.75 17.92 17.75 18.75ZM20.73 7.68L18.73 15.68C18.65 16.01 18.35 16.25 18 16.25H8C7.64 16.25 7.33 15.99 7.26 15.63L5.37 5.25H4C3.59 5.25 3.25 4.91 3.25 4.5C3.25 4.09 3.59 3.75 4 3.75H6C6.36 3.75 6.67 4.01 6.74 4.37L7.17 6.75H20C20.23 6.75 20.45 6.86 20.59 7.04C20.73 7.22 20.78 7.46 20.73 7.68ZM19.04 8.25H7.44L8.62 14.75H17.41L19.03 8.25H19.04Z" fill="#ffffff"></path> </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Item;