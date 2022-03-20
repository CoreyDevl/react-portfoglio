import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Burner',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque consequatur illum voluptatibus beatae voluptatum iste sint ratione ullam neque repellendus possimus magni totam ducimus accusamus, obcaecati fugiat, in hic maxime!'
  },
  {
    avatar: AVTR2,
    name: 'Cab Calowey',
    review: 'Hide Hide Hire Hi, consectetur, adipisicing elit. Eaque consequatur illum voluptatibus beatae voluptatum iste sint ratione ullam neque repellendus possimus magni totam ducimus accusamus, obcaecati fugiat, in hic maxime!'
  },
  {
    avatar: AVTR3,
    name: 'Craig Ventura',
    review: 'BumbleBley Tuna consectetur, adipisicing elit. Eaque consequatur illum voluptatibus beatae voluptatum iste sint ratione ullam neque repellendus possimus magni totam ducimus accusamus, obcaecati fugiat, in hic maxime!'
  },
  {
    avatar: AVTR4,
    name: 'Silvio Santos',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque consequatur illum voluptatibus beatae voluptatum iste sint ratione ullam neque repellendus possimus magni totam ducimus accusamus, obcaecati fugiat, in hic maxime!'
  },
]



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >
        {
          data.map(({ avatar, name, review, index }) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials