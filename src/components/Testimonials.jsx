import { useEffect, useState } from 'react';
import Section from './Section';
import Heading from './Heading';
import { gradient } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
  {
    name: "Sarah Miller",
    role: "Puppy Parent",
    content: "This app is a game-changer! It predicted exactly when my Golden Retriever puppy needed to go out. We went from 5 accidents a day to zero in just a week!",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Mike Thompson",
    role: "First-time Dog Owner",
    content: "As a new dog owner, I was struggling with house training my Labrador puppy. The AI predictions are scary accurate - it's like the app knows my pup better than I do!",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Emma Davis",
    role: "Professional Dog Trainer",
    content: "I recommend this app to all my clients. The AI-driven schedule has revolutionized how we approach puppy potty training. It's backed by science and it works!",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "James Wilson",
    role: "Busy Pet Parent",
    content: "Working from home with a new puppy was challenging until I found this app. The timely alerts helped me prevent accidents during important meetings!",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Lisa Chen",
    role: "Dog Mom",
    content: "My apartment-dwelling Corgi was struggling with potty training. This app's predictions helped us establish a perfect routine. No more accidents on my carpet!",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    name: "David Parker",
    role: "Family Dog Owner",
    content: "The kids wanted a puppy but I was worried about the house training. This app made it so easy - even my 10-year-old can follow the AI's predictions!",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  }
];

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <style>
        {`
          .testimonials-swiper {
            padding: 60px 0;
          }

          .testimonials-swiper .swiper-slide {
            transition: all 0.3s ease-in-out;
            width: 400px !important;
          }

          .testimonials-swiper .swiper-slide-active {
            z-index: 10;
          }

          .testimonial-card {
            transform-origin: center;
            transition: all 0.3s ease-in-out;
          }

          .testimonial-card.active {
            transform: scale(1.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }

          .testimonial-card.inactive {
            transform: scale(0.9);
            opacity: 0.5;
          }
        `}
      </style>

      <Section className="overflow-hidden">
        <div className="container relative z-2">
          <Heading
            className="md:max-w-md lg:max-w-2xl mb-16"
            title="Join thousands of happy puppy parents"
          />

          <div className="px-4 sm:px-8 lg:px-16">
            <Swiper
              onSwiper={setSwiper}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              centeredSlides={true}
              slidesPerView={'auto'}
              initialSlide={1}
              loop={true}
              loopedSlides={testimonials.length}
              slideToClickedSlide={true}
              speed={500}
              className="testimonials-swiper !overflow-visible"
              breakpoints={{
                320: {
                  slidesPerView: 'auto',
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 'auto',
                  spaceBetween: 30
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`testimonial-card relative flex flex-col p-6 bg-white rounded-3xl border border-n-6
                      ${activeIndex === index ? 'active' : 'inactive'}`}
                  >
                    <div className="mb-6">
                      <p className="text-n-8 leading-relaxed">"{testimonial.content}"</p>
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h5 className="font-semibold text-n-8">{testimonial.name}</h5>
                        <p className="text-n-6 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-6 text-6xl leading-none text-n-3 opacity-20">"</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* <div className="absolute top-1/2 left-1/2 w-full aspect-square -translate-x-1/2 -translate-y-1/2">
            <img
              src={gradient}
              className="w-full h-full object-cover opacity-40"
              alt="Gradient"
            />
          </div> */}
        </div>
      </Section>
    </>
  );
};

export default Testimonials; 