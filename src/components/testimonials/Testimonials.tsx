// import React from 'react'
// import './testimonials.css'
// import IMG1 from "/public/assets/avatar1.jpg";
// import IMG2 from "/public/assets/avatar2.jpg";
// import IMG3 from "/public/assets/avatar3.jpg";
// import IMG4 from "/public/assets/avatar4.jpg";
// import { Pagination} from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// const data = [
//   {
//     id:1,
//     avatar:IMG1,
//     name : "tina snow",
//     review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro similique eveniet accusamus nulla voluptates quibusdam ratione dolor. Accusamus placeat ut beatae non. Consequuntur eius totam beatae ipsam excepturi ullam"
//   },
//   {
//     id:2,
//     avatar:IMG2,
//     name : "tina snow",
//     review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro similique eveniet accusamus nulla voluptates quibusdam ratione dolor. Accusamus placeat ut beatae non. Consequuntur eius totam beatae ipsam excepturi ullam"
//   },
//   {
//     id:3,
//     avatar:IMG3,
//     name : "tina snow",
//     review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro similique eveniet accusamus nulla voluptates quibusdam ratione dolor. Accusamus placeat ut beatae non. Consequuntur eius totam beatae ipsam excepturi ullam"
//   },
//   {
//     id:4,
//     avatar:IMG4 ,
//     name : "tina snow",
//     review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro similique eveniet accusamus nulla voluptates quibusdam ratione dolor. Accusamus placeat ut beatae non. Consequuntur eius totam beatae ipsam excepturi ullam"
//   },
// ]
// const Testimonials = () => {
//   return (
//     <section id='testimonials' >
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper className="container testimonials__container"
//        // install Swiper modules
//        modules={[ Pagination]}
//        spaceBetween={40}
//        slidesPerView={1}
//        pagination={{ clickable: true }}
//        >
//         {
//           data.map (({avatar, id, review,name}) => {
//             return (
//               <SwiperSlide key={id} className="testimonial">
//                 <div className="client__avatar">
//                   <img src={avatar} alt="Avatar one" />
//                 </div>
//                   <h5 className="client__name">{name}</h5>
//                   <small className="client__review">{review}</small>
//               </SwiperSlide>
//             )
//           })
//         }
//       </Swiper>

//     </section >
//   )
// }

// export default Testimonials
