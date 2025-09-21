import { Helmet } from 'react-helmet-async';
 // For managing head/meta tags dynamically

const InvestorsLanding = () => {
  return (
    <>
      {/* --- Head Section: SEO, Social, and JSON-LD --- */}
      <Helmet>
        {/* Page title */}
        <title>Invest or Donate – SmartEd Africa EdTech Opportunities</title>

        {/* Meta description */}
        <meta
          name="description"
          content="Partner, invest, or donate to SmartEd Africa, revolutionizing education in Africa with AI-powered learning. Explore funding and partnership opportunities."
        />

        {/* Keywords for search engines */}
        <meta
          name="keywords"
          content="SmartEd Africa, EdTech investment Africa, donate Africa education, AI learning Africa, invest in African education, WAEC prep startup, JAMB prep investment"
        />

        {/* Open Graph for social media previews */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smarted-africa-app.vercel.app/investors" />
        <meta property="og:title" content="Invest or Donate – SmartEd Africa EdTech Opportunities" />
        <meta
          property="og:description"
          content="SmartEd Africa is seeking investors and donors to scale affordable AI-powered e-learning across Africa."
        />
        <meta
          property="og:image"
          content="https://smarted-africa-app.vercel.app/screenshots/smarted-africa-landing-page.png"
        />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Invest or Donate – SmartEd Africa EdTech Opportunities" />
        <meta
          name="twitter:description"
          content="Partner, invest, or donate to SmartEd Africa to expand AI-powered learning in Africa."
        />
        <meta
          name="twitter:image"
          content="https://smarted-africa-app.vercel.app/screenshots/smarted-africa-student-dashboard.png"
        />

        {/* --- JSON-LD Structured Data --- */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "SmartEd Africa",
              "url": "https://smarted-africa-app.vercel.app/",
              "logo": "https://smarted-africa-app.vercel.app/logo192.png",
              "description": "SmartEd Africa – A mobile-first e-learning platform for African students, featuring AI tutors, localized lessons, teacher microlearning, and offline learning for IDP camps.",
              "sameAs": [
                "https://www.linkedin.com/in/ojobor-jude-ik-292b9612b/",
                "https://github.com/judeik",
                "https://twitter.com/"
              ],
              "founder": {
                "@type": "Person",
                "name": "Ojobor Jude Ikechukwu",
                "jobTitle": "Team Lead, Product Manager & Full-Stack Developer",
                "url": "https://www.linkedin.com/in/ojobor-jude-ik-292b9612b/"
              },
              "foundingDate": "2025-09-16",
              "foundingLocation": {
                "@type": "Place",
                "name": "Nigeria",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Nsukka",
                  "addressRegion": "Enugu",
                  "addressCountry": "NG"
                }
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Investor Relations",
                "email": "investors@smarted-africa-app.vercel.app"
              },
              "makesOffer": {
                "@type": "Offer",
                "name": "Investor Briefing",
                "description": "Exclusive insight into SmartEd Africa investment opportunities, packages, and growth plans.",
                "url": "https://smarted-africa-app.vercel.app/invest",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Helmet>

      {/* --- Main Content --- */}
      <main className="container mx-auto p-6">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Partner, Invest, or Donate
        </h1>

        {/* Intro Text */}
        <p className="text-lg mb-6">
          SmartEd Africa is revolutionizing education in Africa with AI-powered learning. Join us to expand access, support teachers, and impact millions of students.
        </p>

        {/* Screenshots Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Screenshot 1 */}
          <div>
            <img
              src="/screenshots/smarted-africa-landing-page.png"
              alt="Landing Page"
              className="rounded shadow"
            />
            <p className="mt-2 text-sm text-gray-600">Landing page overview</p>
          </div>

          {/* Screenshot 2 */}
          <div>
            <img
              src="/screenshots/smarted-africa-student-dashboard.png"
              alt="Student Dashboard"
              className="rounded shadow"
            />
            <p className="mt-2 text-sm text-gray-600">Student dashboard</p>
          </div>

          {/* Screenshot 3 */}
          <div>
            <img
              src="/screenshots/smarted-africa-ai-tutor.png"
              alt="AI Tutor Interface"
              className="rounded shadow"
            />
            <p className="mt-2 text-sm text-gray-600">AI tutor interface</p>
          </div>

          {/* Screenshot 4 */}
          <div>
            <img
              src="/screenshots/smarted-africa-offline-lessons.png"
              alt="Offline Lessons"
              className="rounded shadow"
            />
            <p className="mt-2 text-sm text-gray-600">Offline lessons view</p>
          </div>
        </section>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          {/* Contact Investor Relations */}
          <a
            href="mailto:smartedafrica01@gmail.com"
            className="bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 transition"
          >
            Contact Investor Relations
          </a>

          {/* Donate CTA */}
          <a
            href="/donate"
            className="bg-yellow-600 text-white px-6 py-3 rounded shadow hover:bg-yellow-700 transition"
          >
            Donate Now
          </a>
        </div>
      </main>
    </>
  );
};

export default InvestorsLanding;
