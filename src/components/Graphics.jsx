import React from "react";

const ads = [
    {
        title: 'maggie',
        img: 'https://m.media-amazon.com/images/I/81dpDHc95AL.jpg'
    },
    {
        title: 'funfoods',
        img: 'https://www.bigbasket.com/media/uploads/p/l/40015829-2_7-dr-oetker-funfoods-peanut-butter-crunchy.jpg'
    }
]


const Graphics = () =>{

    return(
        <div className="g-con">

           {ads.map((ad) => 
            <div className="g-items">
                <img src={ad.img} width="300px" alt="" />
                <h2>{ad.title}</h2> 
            </div>
           )}
             
        </div>
    )
}
export default Graphics;