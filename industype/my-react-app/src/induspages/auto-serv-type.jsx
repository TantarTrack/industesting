import Servestypeauto from "./auto-servpart-temp";
import Autoservdata from "./auto-servpart-data";

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
     <div className="auto-flex-table-autoservice">
         {Autoservdata.map(autoservcard)}
         </div>
    );
  }
  
export default Automotivecardservices ;