import Servestypeauto from "./auto-servpart-temp";
import Autoservdata from "./auto-servpart-data";
import { Link } from "react-router-dom";

function autoservcard (Autocarddata){
   return(
     <Servestypeauto
      key={Autocarddata.id}
      autoimg={Autocarddata.autosybimg}
      autoservheading={Autocarddata.auyoservheadin}
      autoservphara={Autocarddata.autocardphara}
     />
   );
}

function Automotivecardservices() {
      
    return (
        <div>
     <div className="auto-flex-table-autoservice">
         {Autoservdata.map(autoservcard)}
         </div>
         <div className="formor-button-div-serv">
         <Link to="/contactus">
                     <button className='auto-ctas-formore-button'>For More</button>
                     </Link>
         </div>
         </div>
    );
  }
  
export default Automotivecardservices ;