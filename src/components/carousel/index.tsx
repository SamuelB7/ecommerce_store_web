'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Advertising from '../advertising';

export default function CustomCarousel() {
    return (
        <div className='w-full'>
            <Carousel
                showThumbs={false}
                showStatus={false}
            >
                <Advertising />
                <Advertising />
                <Advertising />
            </Carousel>
        </div>
    )
}