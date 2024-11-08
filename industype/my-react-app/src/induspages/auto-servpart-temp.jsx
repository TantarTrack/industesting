const Servestypeauto = (props)=>
{
    return(
        <div>
            <div className="auto-servis-card">
                <div className="circle-for-img-auto-serv">
                <img src={props.autoimg} alt="auto-type-Image"/>
                </div>
                <div className="contant-auto-box">
                   <div className="autocard-cont">
                    <h1>{props.autoservheading}</h1>
                    <p>{props.autoservphara}</p>

                   </div>
                </div>

            </div>
        </div>

    );
};
export default Servestypeauto;