
import React ,{useContext} from 'react'
import Layout from '../../components/Layout/Layout'
import myContext from '../../context/data/MyContext'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/ProductCard/ProductCard'
import Testimonial from '../../components/testimonials/Testimonial'

function Home() {
  const context = useContext(myContext)
  console.log(context,"context") // {name: 'Kamal Nayan', class: '9 C'}
  // Destructure 
  const { name } = context || {};
  console.log(name,"contectname") // Kamal Nayan
  return (
    <Layout>
 
 <HeroSection/>
 <Filter/>
 <ProductCard/>
 <Testimonial/>
    </Layout>
  )
}
export default Home