import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
//import Services from '../components/Services';
//import FeaturedRooms from '../components/FeaturedRooms';
import { Link } from 'react-router-dom';

export default function ContactUs() {
    return (
        <div>
            <Hero>
                <Banner
                    title='Make a reservation now!'
                    subtitle='Tel. number: 123456789 | Email : abcd@1234' >
                    <Link to='/rooms' className='btn-primary'>our rooms</Link>
                </Banner>
            </Hero>
        </div>
    )
}