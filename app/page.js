import ActivitiesPage from "@/components/Activities";
import LocalAttraction from "@/components/Attraction";
import Hero from "@/components/Hero";
import LaptopVideo from "@/components/Laptop";
import Services from "@/components/Services";
import DiningSection from "@/components/Dishes";
import ComfortSection from "@/components/Rooms";
import RoomShowcase from "@/components/Ourrooms";
import TestimonialsCarousel from "@/components/Testimonials";
import FormOtp from "@/components/FormOtp";
import Testcomp from "@/components/Testcomp";

export default function Home() {
  return (
    <>
   
      <Hero />
       {/* <Testcomp /> */}
      {/* <ActivitiesPage /> */}
      <RoomShowcase />
      <ComfortSection />
      <LocalAttraction />
      <Services />
      <div className="w-full   ">
        <LaptopVideo />
      </div>

      <div className="w-full  mt-20 ">
        <DiningSection />
      </div>
      <TestimonialsCarousel />
      {/* <FormOtp/> */}
    </>
  );
}
