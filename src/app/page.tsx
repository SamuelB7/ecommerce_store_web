import Advertising from '@/components/advertising'
import CustomCarousel from '@/components/carousel'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Highlights from '@/components/highlights'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CustomCarousel />
      <Highlights />
      <Footer />
    </main>
  )
}
