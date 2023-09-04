import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroseData';



    


const MainCarosel = () => {
    // const navigate = useNavigate
    const items = MainCaroselData.map((item)=> <img className='cursor-pointer -z-10 relative w-full h-full' role='presentation' src={item.image} alt="" />)

    return (    <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
       
    />)
};


export default MainCarosel;