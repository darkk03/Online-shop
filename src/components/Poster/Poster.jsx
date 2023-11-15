import React from "react";

import '../../styles/Poster.css'
import pc from '../../images/pc.png';


const Poster = () => {
    return (
        <div className="Poster">
            <div className="Poster-content">
                <div className="titel-poster">
                    BIG SALE 20%
                </div>
                <div className="product">
                    <div className="poster-text">
                        <div className="poster-subtext">
                            the bestseller of 2023
                        </div>
                        <h1 className="h1-poster">
                            LENOVO LEGION 
                        </h1>
                        <h2 className="h2-poster">
                            WITH 4090Ti
                        </h2>
                    </div>
                    <div className="poster-image">
                        <img src={pc} alt="Description of the image" />
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Poster