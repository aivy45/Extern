import React from "react";
import './Graphics.css';
const ads = [
    {
        title: 'Maggie',
        img: 'https://m.media-amazon.com/images/I/81dpDHc95AL.jpg'
    },
    {
        title: 'Funfoods',
        img: 'https://www.bigbasket.com/media/uploads/p/l/40015829-2_7-dr-oetker-funfoods-peanut-butter-crunchy.jpg'
    }
]


const Graphics = () =>{

    return(

        <div className="g-con-main">
        <div className="g-con">

           {ads.map((ad) => 
            <div className="g-items">
                <img src={ad.img} style={{width:"300px" , height:"300px"}} alt="" />
                <h2>{ad.title}</h2> 
            </div>
           )}
             
        </div>
        </div>
    )
}
export default Graphics;