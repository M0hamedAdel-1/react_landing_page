import React, {  useContext, useState } from 'react'
import imageone from '../images/1.jpg'
import imagetwo from '../images/3.jpg'
import imagethree from '../images/2.jpg'
import { Ismobilecontext } from '../../utiles/Ismobilecontext'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Autoplay, Thumbs} from 'swiper/modules'
import "swiper/css";
import "swiper/css/thumbs"
import {motion} from "framer-motion"
const Banner = () => {

  const [ThumbsSwiper,setThumbsSwiper] = useState(null)
  const {Ismobile} = useContext(Ismobilecontext)
  return (
    <div className='banner'>
      <Swiper slidesPerView={1} modules={[Thumbs,Autoplay]} thumbs={{swiper:ThumbsSwiper}} autoplay={{delay:4000,}} loop={true} onSwiper={(e)=> console.log("yesssssss")}>
        <SwiperSlide>
            <div className='banner-image'>
              <motion.img initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0,duration:1}} src={imageone} alt=''/>
              <div className='banner-text'>
                <motion.h2 initial={{opacity:0,y:20}}  whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}}>Mohamed adel</motion.h2>
                <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}} >Marvel Comics is an American media and entertainment company regarded as one of the “big two” publishers in the comics industry. Its parent company, Marvel Entertainment, is a wholly owned subsidiary of the Disney Company</motion.p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='banner-image'>
              <motion.img initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0,duration:1}} src={imagetwo} alt=''/>
              <div className='banner-text'>
                <motion.h2 initial={{opacity:0,y:20}}  whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}}>Mohamed adel</motion.h2>
                <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}} >Marvel Comics is an American media and entertainment company regarded as one of the “big two” publishers in the comics industry. Its parent company, Marvel Entertainment, is a wholly owned subsidiary of the Disney Company</motion.p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='banner-image'>
              <motion.img initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0,duration:1}} src={imagethree} alt=''/>
              <div className='banner-text'>
                <motion.h2 initial={{opacity:0,y:20}}  whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}}>Mohamed adel</motion.h2>
                <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}} >Marvel Comics is an American media and entertainment company regarded as one of the “big two” publishers in the comics industry. Its parent company, Marvel Entertainment, is a wholly owned subsidiary of the Disney Company</motion.p>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>


      {!Ismobile&&<Swiper className='banner-gallary' modules={[Thumbs]} slidesPerView={3} spaceBetween={10} onSwiper={setThumbsSwiper} watchSlidesProgress={true}>
        <SwiperSlide>
        <motion.div initial={{opacity:0,y:20}}  whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}}    className='gallary active'>
          <img  src={imageone} alt=''/>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide>
        <motion.div initial={{opacity:0,y:20}}  whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}} className='gallary'>
          <img src={imagetwo} alt=''/>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide>
        <motion.div initial={{opacity:0,y:20}}  whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}} className='gallary'>
          <img src={imagethree} alt=''/>
        </motion.div>
        </SwiperSlide>
      </Swiper>}

      

    </div>
  )
}

export default Banner
