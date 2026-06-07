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
import HomeProductSlider from "./src/component/homeelectronics";
import { CarouselPlugin2 } from "./src/component/Herosection2";

export default function Home() {
  return (
    <>
   
    <CarouselPlugin></CarouselPlugin>
    {/* <CarouselPlugin2></CarouselPlugin2> */}
    <ServiceSection/>

    <PromoSection></PromoSection>
    <Shopbycatagory></Shopbycatagory>
    <WaterHeaterSlider></WaterHeaterSlider>
    <TVSlider></TVSlider>
    <DiscountBanners></DiscountBanners>
    <ACSlider></ACSlider>
    <RefrigeSlider></RefrigeSlider>
    <HomeProductSlider></HomeProductSlider>
    <OfferSection></OfferSection>
    <ShopByBrand></ShopByBrand>
    <CustomerServiceBanner></CustomerServiceBanner>
    <AboutSection/>
    
    
    </>
  );
}
