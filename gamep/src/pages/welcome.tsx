import '../App.css';
import Navbar from "../components/Navbar"

const Home=()=>{
    return(
        <div className="home-container">
            <Navbar help="HELP"/>
            <div className='flex-center-alignment'>
            <div className="button-container">
<button className='btn btn-lg'>Play Now</button>
</div>
        </div>
            </div>

    )
}
export default Home;