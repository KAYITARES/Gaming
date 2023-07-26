import Navbar from "../components/Navbar";

const Rank=()=>{
    return (
        <div className="home-container">
          <Navbar help="HELP" home="HOME"/>
             <div className='flex-center-top-alignment'>
             <div className="form-container">
                <table>
                    <tr>
                        <th>N0</th>
                        <th>Username</th>
                        <th>Point</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>KAYITARE</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Faustin</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Virgile</td>
                        <td>10</td>
                    </tr>
                </table>
                </div>   
             </div>
             </div>
    )
}
export default Rank