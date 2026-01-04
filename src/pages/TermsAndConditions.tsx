import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding bg-background mt-[30px] sm:mt-0">
        <div className="section-container max-w-4xl px-4 sm:px-6">
          <h1 className="heading-section text-foreground mb-3 sm:mb-4 text-2xl sm:text-3xl">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-6 sm:space-y-8">
            <p className="body-base">
              These Terms & Conditions govern your use of the <strong>AVERIX</strong> website and services. By accessing or using our website or services, you agree to these terms.
            </p>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">1. Services</h2>
              <p className="body-base text-sm sm:text-base">
                AVERIX provides consulting, technology, development, admin portal solutions, branding, and digital growth services.
                All services are subject to agreed scopes, timelines, and deliverables.
              </p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">2. Use of Website</h2>
              <p className="body-base text-sm sm:text-base">You agree to use this website:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 sm:ml-4 text-sm sm:text-base">
                <li>For lawful purposes only</li>
                <li>Without violating any applicable laws or regulations</li>
                <li>Without attempting to access restricted systems or data</li>
              </ul>
              <p className="body-base text-sm sm:text-base">Unauthorized use may result in termination of access.</p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">3. Intellectual Property</h2>
              <p className="body-base text-sm sm:text-base">
                All content on this website, including text, designs, graphics, and logos, is the intellectual property of <strong>AVERIX</strong> unless otherwise stated.
              </p>
              <p className="body-base text-sm sm:text-base">
                You may not copy, reproduce, or distribute any content without prior written consent.
              </p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">4. Client Responsibilities</h2>
              <p className="body-base text-sm sm:text-base">Clients agree to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Provide accurate and timely information</li>
                <li>Review and approve deliverables within agreed timelines</li>
                <li>Use delivered systems responsibly and lawfully</li>
              </ul>
              <p className="body-base text-sm sm:text-base">Delays caused by missing inputs may impact timelines.</p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">5. Payments & Pricing</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Project fees and payment schedules are defined in written agreements</li>
                <li>Payments are non-refundable unless explicitly stated</li>
                <li>Late payments may delay project delivery</li>
              </ul>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">6. Limitation of Liability</h2>
              <p className="body-base text-sm sm:text-base">AVERIX shall not be liable for:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Indirect or consequential damages</li>
                <li>Business losses due to misuse of delivered systems</li>
                <li>Downtime caused by third-party platforms or hosting providers</li>
              </ul>
              <p className="body-base text-sm sm:text-base">Our liability is limited to the amount paid for the specific service.</p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">7. Confidentiality</h2>
              <p className="body-base text-sm sm:text-base">
                Both parties agree to maintain confidentiality of proprietary, business, and project-related information shared during engagement.
              </p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">8. Termination</h2>
              <p className="body-base text-sm sm:text-base">
                Either party may terminate services with written notice, subject to contractual terms.
                Completed work and payments up to the termination date remain payable.
              </p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">9. Governing Law</h2>
              <p className="body-base text-sm sm:text-base">
                These Terms are governed by the laws of <strong>India</strong>, without regard to conflict of law principles.
              </p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">10. Changes to Terms</h2>
              <p className="body-base text-sm sm:text-base">
                AVERIX reserves the right to modify these Terms & Conditions at any time.
                Continued use of the website constitutes acceptance of updated terms.
              </p>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="heading-subsection text-foreground text-lg sm:text-xl md:text-2xl">11. Contact Information</h2>
              <p className="body-base text-sm sm:text-base">For any questions regarding these Terms:</p>
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

export default TermsAndConditions;

