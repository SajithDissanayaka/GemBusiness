import FeaturedGems from "../components/FeaturedGems"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ShopByGemType from "../components/ShopByGemType"

export default function Home(){
  return (
    <main>
      <Header/>
      <Hero/>
      <FeaturedGems/>
      <ShopByGemType />
      <section>
        <h1>Gem Business</h1>
      </section>
    </main>
  )
}