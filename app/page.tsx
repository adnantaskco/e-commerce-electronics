import Image from "next/image";
import { CarouselPlugin } from "./src/component/herosection";
import Navbar from "./src/component/navbar1";
import Navbar2 from "./src/component/navbar2";
import Navbar3 from "./src/component/Navbar3";
import Footer from "./src/component/FooterSection";
import Shopbycatagory from "./src/component/Shopbycatagory";
import ServiceSection from "./src/ServiceSection";
import ShopByBrand from "./src/component/ShopbyBrand";
import AboutSection from "./src/component/About";
import WaterHeaterSlider from "./src/component/waterheater";
import TVSlider from "./src/component/tv";
import ACSlider from "./src/component/Ac";
import DiscountBanners from "./src/component/Banner";
import RefrigeSlider from "./src/component/refrigerator";
import CustomerServiceBanner from "./src/component/customerservicebanner";
import OfferSection from "./src/component/champign";
import PromoSection from "./src/component/gallery";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Navbar2/>
    <Navbar3></Navbar3>
    <CarouselPlugin></CarouselPlugin>
    <ServiceSection/>

    <PromoSection></PromoSection>
    <Shopbycatagory></Shopbycatagory>
    <WaterHeaterSlider></WaterHeaterSlider>
    <TVSlider></TVSlider>
    <DiscountBanners></DiscountBanners>
    <ACSlider></ACSlider>
    <RefrigeSlider></RefrigeSlider>
    <OfferSection></OfferSection>
    <ShopByBrand></ShopByBrand>
    <CustomerServiceBanner></CustomerServiceBanner>
    <AboutSection/>
    <Footer/>
    
    </>
  );
}
