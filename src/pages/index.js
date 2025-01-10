import Hero from "@/components/home-page/Hero";
import HowItWorks from "@/components/home-page/HowItWorks";
import TopicsSection from "@/components/home-page/TopicsSection";
import Layout from "@/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TopicsSection />
      <HowItWorks />
    </Layout>
  );
}
