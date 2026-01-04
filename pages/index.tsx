import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import Head from "next/head";
import { personalInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${personalInfo.name} | ${personalInfo.role}`}</title>
        <meta name="description" content={personalInfo.tagline} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tmz-favicon.png" />

        {/* Open Graph */}
        <meta property="og:title" content={`${personalInfo.name} | ${personalInfo.role}`} />
        <meta property="og:description" content={personalInfo.tagline} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/tmz-og.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} | ${personalInfo.role}`} />
        <meta name="twitter:description" content={personalInfo.tagline} />
        <meta name="twitter:image" content="/tmz-og.png" />
      </Head>

      <Layout>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </Layout>
    </>
  );
}
