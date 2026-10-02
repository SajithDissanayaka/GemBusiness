import CutPolishSection from "../components/CutPolishSection"
import FeaturedGems from "../components/FeaturedGems"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import InquirySection from "../components/InquirySection"
import ShopByGemType from "../components/ShopByGemType"
import StoreSection from "../components/StoreSection"
import WhyChooseUs from "../components/WhyChooseUs"

export default function Home(){
  return (
    <main>
      <Header/>
        <Hero/>
        <FeaturedGems/>
        <ShopByGemType />
        <WhyChooseUs/>
        <CutPolishSection/>
         <InquirySection />
         <StoreSection/>
         <Footer/>
      <section>
        
      </section>
    </main>
  )
}