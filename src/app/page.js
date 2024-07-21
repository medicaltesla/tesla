import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HomeSlider from "@/components/HomeSlider";
import Counter from "@/components/Counter";
import About from "@/components/About";
import Services from "@/components/Services";
import CounterSection from "@/components/CounterSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ_Heading from "@/components/FAQ/FAQ_Heading";
import FAQ_Prop from "@/components/FAQ/FAQ_Prop";
import HealthTips from "@/components/HealthTips";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Counter/>
      <Services />
      <WhyChooseUs />
      {/* <HealthTips /> */}
      <HomeSlider /> 
      <FAQ_Heading heading="F.A.Q." para="Although we have shared all the information with you on our website, if there are any queries that are unaddressed, you can find the answers to them below in our FAQs" />
      <FAQ_Prop question="What services does Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre offer? " answer="Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre offers a comprehensive range of diagnostic services including 3T MRI, 32-slice CT scans, CT guided interventional procedures, pathology lab services (blood tests), USG & color doppler, X-ray & X-ray procedures, ECG, stress tests, and 2D echo." />
      <FAQ_Prop question="Do I need a referral from my doctor to get a diagnostic test? " answer="Yes, a referral from a licensed healthcare provider is typically required for most diagnostic imaging tests. This ensures that the appropriate test is performed and that the results are sent to the correct healthcare provider for further evaluation and treatment." />
      <FAQ_Prop question="How long does it take to get my test results? " answer="The time it takes to get your test results can vary depending on the type of test and the urgency of the results. Typically, results for most imaging tests are available within 24-48 hours. Our radiologists will interpret the images and provide a detailed report to your referring physician." />
      <FAQ_Prop question="How do I schedule an appointment? " answer="You can schedule an appointment by calling our clinic directly or by using our online appointment booking system available on Contact Us page. Our staff will assist you in finding a convenient time for your visit and provide any necessary instructions for your appointment." />
      <FAQ_Prop question="Will my insurance cover the cost of the diagnostic tests? " answer="Coverage for diagnostic tests varies depending on your insurance plan. We recommend contacting your insurance provider to verify coverage and obtain any necessary pre-authorization before your appointment. Our billing department can also assist you with insurance questions and provide an estimate of out-of-pocket costs." />
{/* 
      <CounterSection />
      <HomeSlider />  */}
      
      <Footer />
    </>
  );
}
