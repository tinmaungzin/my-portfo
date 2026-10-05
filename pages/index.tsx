import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import { personalInfo, experiences } from "@/lib/data";

const title = `${personalInfo.name} · ${personalInfo.role} (${personalInfo.focus})`;
const description =
    "Software engineer in Bangkok with 7 years in PHP, JavaScript and Python web development, plus conflict data research experience in Myanmar. Open to remote roles.";
const ogImage = `${personalInfo.siteUrl}/tmz-og.png`;

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    url: personalInfo.siteUrl,
    image: `${personalInfo.siteUrl}${personalInfo.profileImage}`,
    email: `mailto:${personalInfo.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" },
    alumniOf: { "@type": "CollegeOrUniversity", name: personalInfo.education.university },
    worksFor: { "@type": "Organization", name: experiences.find((e) => e.current)?.company },
    knowsLanguage: ["my", "en", "th"],
    knowsAbout: ["Web development", "PHP", "Drupal", "React", "Python", "Web crawling", "Conflict data research"],
    sameAs: [personalInfo.github, personalInfo.linkedin],
};

export default function Home() {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <link rel="canonical" href={`${personalInfo.siteUrl}/`} />
                <link rel="icon" href="/tmz-favicon.png" />
                <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${personalInfo.siteUrl}/`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="1024" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
            </Head>

            <Layout>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Footer />
            </Layout>
        </>
    );
}
