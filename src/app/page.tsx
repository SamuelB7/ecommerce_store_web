import Advertising from '@/components/advertising'
import CustomCarousel from '@/components/carousel'
import Categories from '@/components/categories'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Highlights from '@/components/highlights'

export default function Home() {
  return (
    <main>
      <Hero />
      <CustomCarousel>
        <Advertising />
        <Advertising />
        <Advertising />
      </CustomCarousel>
      <Highlights />
      <Categories />
    </main>
  )
}
