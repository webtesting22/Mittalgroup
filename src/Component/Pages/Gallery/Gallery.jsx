import React from 'react'
import './Gallery.css'
/*import gallery1 from '../../assets/images/gallery1.jpg'*/
import gallery1 from   "../../../assets/images/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery2.jpg"
import gallery3 from "../../../assets/images/gallery3.jpg"
import gallery4 from "../../../assets/images/gallery4.jpg"
import gallery5 from "../../../assets/images/gallery5.jpg"
import gallery6 from "../../../assets/images/gallery6.jpg"
import gallery7 from "../../../assets/images/gallery7.jpg"
import gallery8 from "../../../assets/images/gallery8.jpg"
import gallery9 from "../../../assets/images/gallery9.jpg"
import gallery10 from "../../../assets/images/gallery10.jpg"
import gallery11 from "../../../assets/images/gallery11.jpg"
import gallery12 from "../../../assets/images/gallery12.jpg"


const Gallery = () => {
  return (
      <div className='img-gallery'>
                <img src={gallery1} alt="img" />
                <img src={gallery2} alt="img" />
                <img src={gallery3} alt="img" />
                <img src={gallery4} alt="img" />
                <img src={gallery5} alt="img" />
                <img src={gallery6} alt="img" />
                <img src={gallery7} alt="img" />
                <img src={gallery8} alt="img" />
                <img src={gallery9} alt="img" />
                <img src={gallery10} alt="img" />
                <img src={gallery11} alt="img" />
                <img src={gallery12} alt="img" />
            </div>
    
  )
}

export default Gallery
