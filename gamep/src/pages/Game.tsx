import Navbar from "../components/Navbar";
import imgp from "../assets/cy.jpg"
const Game=()=>{
    return(
        <div className="home-container">
              <Navbar help="HELP"/>
             <div className='flex-center-top-alignment'>
             <div className="form-container">
                <form className="form-cont">
                    <div className="left-side">
                        <img src={imgp} alt="image"/>

         <div className="btn-containers">
    <button className='btns btn-md'>Next</button>
</div>
                    </div>
                    <div className="right-side">
                    <h1 className="heading-text sm-text">Guess Who I am?</h1>  
                    <div className="group">
                    <input type="checkbox" id="actor" name="actor" value="actor"/>
                    <label htmlFor="actor">Actor</label>
                    </div>
                    <div className="group">
                    <input type="checkbox" id="musician" name="musician" value="musician"/>
                    <label htmlFor="musician">Musician</label>
                    </div>
                 <div className="group">
                 <input type="checkbox" id="politician" name="politician" value="politician"/>
                    <label htmlFor="politician">Actor</label>
                 </div>
                   <div className="group">
                   <input type="checkbox" id="artist" name="artist" value="artist"/>
                    <label htmlFor="artist">Artist</label>
                   </div>
                   
                   
 
                    <div className="btn-containers mg-top">
    <button className='btns btn-md'>Next</button>
</div>
                    </div>
                </form>

             </div>
             </div>
            
        </div>
    )
}
export default Game