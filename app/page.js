import ActivitiesPage from "@/components/Activities";
import LocalAttraction from "@/components/Attraction";
import Hero from "@/components/Hero";
import LaptopVideo from "@/components/Laptop";
import Services from "@/components/Services";
import DiningSection from "@/components/Dishes";
import Heropage from "@/components/Brands";
import QuoteCard from "@/components/QuoteCard";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ActivitiesPage /> */}
      <LocalAttraction />
      <Services />
      <LaptopVideo />
      <DiningSection />
      <Heropage />
      <QuoteCard />
    </>
  );
}
