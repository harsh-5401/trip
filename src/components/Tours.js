import Card from "./Card";
// import { useState } from 'react';

function Tours(props) {

    // let tour=props.dele

    return(
        <div>
            <div>
                <h1>Plan with Harsh</h1>
            </div>

            <div>
                {
                    props.tours.map(function(tour){
                        const certaintour={...tour};
                        return <Card certainTour={certaintour} key={tour.id} removeTour={props.deletetour}></Card>;
                    })
                }
            </div>
        </div>
    );

}









export default Tours;