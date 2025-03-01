import { BeforeFooter } from "../components/BeforeFooter";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { MeetTheTeam } from "../components/MeetTheTeam";
import { WhyEthereun } from "../components/WhyEthereun";
export const Landing = () => {
  return (
    <section className="w-full">

      <Header />
      <Hero />
      <WhyEthereun />
      <MeetTheTeam />
      <FAQSection />
      <BeforeFooter />
      <Footer />

    </section>
  )
}
