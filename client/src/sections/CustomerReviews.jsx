import React from 'react'
import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className='max-container'>
       <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
      <span className='text-coral-red'> Customers</span> Say?
      </h3>
      <p className='font-circular text-slate-gray text-lg leading-7 font-medium m-auto mt-4 max-w-lg text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto'>
        {reviews.map((review)=>(
          <ReviewCard
          key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews;