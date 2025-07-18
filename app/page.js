import ActivitiesPage from "@/components/Activities";
import LocalAttraction from "@/components/Attraction";
import Hero from "@/components/Hero";
import LaptopVideo from "@/components/Laptop";
import Services from "@/components/Services";
import DiningSection from "@/components/Dishes";
import ComfortSection from "@/components/Rooms";
import RoomShowcase from "@/components/Ourrooms";
import TestimonialsCarousel from "@/components/Testimonials";



export default function Home() {
  return (
    <>
      <Hero />
      {/* <ActivitiesPage /> */}
      <RoomShowcase />
      <ComfortSection />
      <LocalAttraction />
      <Services />
      <LaptopVideo />
      <DiningSection />
      <TestimonialsCarousel/>


    </>
  );
}
