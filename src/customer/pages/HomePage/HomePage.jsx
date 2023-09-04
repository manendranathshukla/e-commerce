import React from 'react'
import MainCarosel from '../../components/HomeCarousel/MainCarosel'
import HomeSectionCarosuel from '../../components/HomeSectionCarosuel/HomeSectionCarosuel';
import { mens_kurta } from '../../../Data/mens_kurta';
import men_jeans from '../../../Data/men_jeans.json'
import men_shirt from '../../../Data/men_shirt.json'
import Footer from '../../components/Footer/Footer';


export const HomePage = () => {
  return (
    <div  >
        <MainCarosel/>
       
       <div className='space-y-10  py-20 flex flex-col justify-center px-5 lg:px-10'>

       <HomeSectionCarosuel data={mens_kurta} sectionName={"Men's Kurta"}/>
       <HomeSectionCarosuel  data={men_jeans}  sectionName={"Men's Jeans"}/>
       <HomeSectionCarosuel data={men_shirt}  sectionName={"Men's Shirt"} />
       
       </div>
      
    </div>
  )
}
