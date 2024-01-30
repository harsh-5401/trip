import { useState } from "react";


function Card(props) {

  let des=props.certainTour.info;
  let description=des.substring(0,200);
  const show=`${description}...`;


  const[readmore,setreadmore]=useState(false);

  const finalshow=readmore? des : show;

//   const identity=props.certainTour.id;


  function showmorehandler(){
    setreadmore(!readmore);
  }

  
     return(
        <div>
            <div>
                <img src={props.certainTour.image} alt="img"></img>
            </div>

            <div className="price">
                {props.certainTour.price}
            </div>

            <div className="title">
            {props.certainTour.name}
            </div>

            <div className="description">
                {finalshow}
                <span onClick={showmorehandler}>
                    {readmore? ` show less` : `  show more`}
                </span>
            </div>

            <button className="not-intrested-button" onClick={()=>props.removeTour(props.certainTour.id)}>
                Not intrested
            </button>

        </div>
    );
}








export default Card;