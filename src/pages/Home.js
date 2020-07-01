import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Hero>
                <Banner
                    title='Luxurious rooms'
                    subtitle='Deluxe rooms starting at &#8369;499'>
                    <Link to='/rooms' className='btn-primary'>our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </div>
    )
}