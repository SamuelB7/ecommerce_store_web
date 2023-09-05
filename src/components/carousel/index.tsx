'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type CustomCarouselProps = {
    children: React.ReactElement[]
}

export default function CustomCarousel({ children }: CustomCarouselProps) {
    return (
        <div className='w-full'>
            <Carousel
                showThumbs={false}
                showStatus={false}
                showArrows={false}
            >
                {children.map(child => {
                    return child
                })}
            </Carousel>
        </div>
    )
}