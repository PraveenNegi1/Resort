import ActivitiesPage from "@/components/Activities";
import LocalAttraction from "@/components/Attraction";
import Hero from "@/components/Hero";
import LaptopVideo from "@/components/Laptop";
import Services from "@/components/Services";
import DiningSection from "@/components/Dishes";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ActivitiesPage /> */}
      <LocalAttraction />
      <Services />
      <LaptopVideo />
      <DiningSection />
    </>
  );
}
