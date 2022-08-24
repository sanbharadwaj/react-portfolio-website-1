import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { A11y, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const data = [
  {
    avatar: AVTR1,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi temporibus, eum possimus ducimus tenetur debitis.'
  },
  {
    avatar: AVTR2,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi temporibus, eum possimus ducimus tenetur debitis.'
  },
  {
    avatar: AVTR3,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi temporibus, eum possimus ducimus tenetur debitis.'
  },

  {
    avatar: AVTR4,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi temporibus, eum possimus ducimus tenetur debitis.'
  }
]


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Courses Completed</h5>
      <h2>Certifications</h2>

      <Swiper className='container testimonial__container'
      modules={[Pagination]}
      spaceBetween = {40}
      slidesPerView = {1}
      pagination={{clickable:true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (

            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
    }
      </Swiper>
    </section>
  )
}

export default Testimonial