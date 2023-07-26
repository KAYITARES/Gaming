import '../App.css';
import Navbar from "../components/Navbar"

const Home=()=>{
    return(
        <div className="home-container">
            <Navbar help="HELP"/>
            <div className='flex-center-alignment'>
<div className="btn-containers">
    <a className='btns btn-lg' href='/login'>Play Now</a>
</div>
        </div>
            </div>

    )
}
export default Home;