import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding bg-background mt-[30px] sm:mt-0">
        <div className="section-container max-w-4xl px-4 sm:px-6">
          <h1 className="heading-section text-foreground mb-3 sm:mb-4 text-2xl sm:text-3xl">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-6 sm:space-y-8">
            <p className="body-base">
              At <strong>AVERIX</strong>, we value your privacy and are committed to protecting the personal and business information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">1. Information We Collect</h2>
              <p className="body-base text-sm sm:text-base">We may collect the following types of information:</p>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">a. Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 sm:ml-4 text-sm sm:text-base">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Any information submitted through contact forms or consultation requests</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">b. Business & Technical Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Project requirements</li>
                    <li>Admin portal or system-related data (where applicable)</li>
                    <li>Website usage data (IP address, browser type, pages visited)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">2. How We Use Your Information</h2>
              <p className="body-base text-sm sm:text-base">We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Respond to inquiries and consultation requests</li>
                <li>Provide and improve our services</li>
                <li>Design, develop, and manage digital systems and admin portals</li>
                <li>Communicate project updates and service-related information</li>
                <li>Improve website performance and user experience</li>
                <li>Comply with legal or regulatory requirements</li>
              </ul>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">3. Data Sharing & Disclosure</h2>
              <p className="body-base text-sm sm:text-base">We do <strong>not</strong> sell or rent your personal information.</p>
              <p className="body-base text-sm sm:text-base">Information may be shared only:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 sm:ml-4 text-sm sm:text-base">
                <li>With trusted partners or service providers involved in project delivery</li>
                <li>When required by law or legal process</li>
                <li>To protect Averix's rights, security, or property</li>
              </ul>
              <p className="body-base">All third parties are required to maintain confidentiality and security.</p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">4. Data Security</h2>
              <p className="body-base text-sm sm:text-base">
                We implement reasonable administrative, technical, and organizational measures to protect your data.
                However, no digital system is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">5. Cookies & Tracking</h2>
              <p className="body-base text-sm sm:text-base">Our website may use cookies or similar technologies to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Analyze traffic</li>
                <li>Improve user experience</li>
                <li>Optimize website performance</li>
              </ul>
              <p className="body-base text-sm sm:text-base">You may control cookies through your browser settings.</p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">6. Your Rights</h2>
              <p className="body-base text-sm sm:text-base">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent</li>
                <li>Request data portability</li>
              </ul>
              <p className="body-base text-sm sm:text-base">To exercise your rights, contact us at <a href="mailto:hello@averix.technology" className="text-accent hover:underline">hello@averix.technology</a>.</p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">7. Third-Party Links</h2>
              <p className="body-base text-sm sm:text-base">
                Our website may contain links to third-party websites.
                Averix is not responsible for the privacy practices of external sites.
              </p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">8. Policy Updates</h2>
              <p className="body-base text-sm sm:text-base">
                We may update this Privacy Policy from time to time.
                Changes will be reflected on this page with an updated revision date.
              </p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">9. Contact Us</h2>
              <p className="body-base text-sm sm:text-base">For questions regarding this Privacy Policy, contact:</p>
              <div className="bg-secondary p-4 sm:p-6 rounded-lg">
                <p className="font-semibold text-foreground mb-2">AVERIX</p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:hello@averix.technology.com" className="text-accent hover:underline">hello@averix.technology.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

