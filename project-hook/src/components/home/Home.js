import AboutUs from "./AboutUs";
import Pleasure from "./Pleasure";
import TypeProducts from "./TypeProducts";
import Something from "./Something";

const Home = () => {
    return (
        <>
            <div className="w-full mr-14">

                <Pleasure />
                <AboutUs />
                <TypeProducts />
                <Something />
            </div>
        </>
    )
}
export default Home;