import Navbar from "../components/Navbar";
const Login=()=>{
    return(
        <div className="home-container">
            <Navbar home="HOME"/>
            <div className='flex-center-top-alignment'>
            <form action="" className="form">
                    <h1 className="heading-text">Log-In</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <div className="btn-containers btn-lgin">
    <button className='btns btn-md white'>Log-In</button>
</div>
<div className="sub-links">
    <a href="/signup" className="sub-link left-line">Sign-up</a>
    <a href="" className="sub-link">Help</a>
</div>
                </form>
                </div>
       
               
            </div>
            
    )
}
export default Login;