/**
 * Design Philosophy: Clean Enterprise + Geometric Accent
 * - Single column layout with max-width for readability
 * - Accent bar on the left for visual hierarchy
 * - Clear typography hierarchy
 * - Professional, trustworthy aesthetic
 */

import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Evora Technologies Global</div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="text-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-foreground hover:text-primary transition-colors font-semibold">
              Terms
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="container">
          {/* Back button */}
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12 pb-8 border-b border-border">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: June 2026
            </p>
          </div>

          {/* Content with accent bar */}
          <div className="flex gap-8">
            {/* Accent bar */}
            <div className="hidden md:block w-1 bg-primary flex-shrink-0 rounded-full"></div>

            {/* Main content */}
            <div className="flex-1 max-w-3xl space-y-8">
              {/* Intro */}
              <section className="space-y-4">
                <p className="text-base leading-relaxed text-foreground">
                  These Terms of Service ("Terms") govern your access to and use of the websites, mobile applications, software products, web services, APIs, software development kits (SDKs), cloud-based features, and related digital services operated or published by Evora Technologies Global ("we", "our", "us", or the "Service").
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  By accessing or using any part of the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use the Service.
                </p>
              </section>

              {/* Section 1 - Service Scope */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">1. 🌐 Service Scope</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Evora Technologies Global develops and operates a portfolio of mobile applications, software products, web services, software development kits (SDKs), cloud-based features, and related digital services.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  These Terms apply to all products, applications, websites, APIs, and services operated or published by Evora Technologies Global unless otherwise stated.
                </p>
              </section>

              {/* Section 2 - User Responsibilities */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">2. ✅ User Responsibilities</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Users are responsible for ensuring that their use of the Service complies with all applicable laws, regulations, and third-party rights.
                </p>
                <p className="text-base leading-relaxed text-foreground">Users agree not to:</p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Use the Service for unlawful, fraudulent, harmful, or abusive purposes.</li>
                  <li>Circumvent, disable, or interfere with security-related features.</li>
                  <li>Attempt to exploit vulnerabilities, gain unauthorized access, or disrupt service operations.</li>
                  <li>Use automated systems, bots, scrapers, or similar technologies in a manner that imposes unreasonable load on the Service.</li>
                  <li>Misrepresent identity or impersonate another person or organization.</li>
                  <li>Use the Service in a manner that violates intellectual property rights, privacy rights, or other legal protections.</li>
                </ul>
              </section>

              {/* Section 3 - User Generated Content */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">3. 📝 User Generated Content</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Certain Services may allow users to create, upload, store, share, or transmit content including text, images, videos, audio, metadata, documents, and other materials.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  Users retain ownership of their content.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  By submitting content through the Service, users grant Evora Technologies Global a limited, non-exclusive, worldwide license to process, store, transmit, display, and use such content solely for the purpose of operating, improving, securing, and providing the Service.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  Users are solely responsible for content they upload and warrant that they possess all necessary rights to such content.
                </p>
              </section>

              {/* Section 4 - Artificial Intelligence Features */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">4. 🤖 Artificial Intelligence Features</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Certain Services may incorporate artificial intelligence, machine learning, computer vision, generative AI, recommendation systems, or automated decision-making technologies.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  AI-generated outputs are provided for informational and convenience purposes only.
                </p>
                <p className="text-base leading-relaxed text-foreground">Evora Technologies Global does not guarantee:</p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Accuracy of AI-generated results.</li>
                  <li>Completeness of AI-generated content.</li>
                  <li>Suitability for legal, financial, medical, professional, or safety-critical decisions.</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  Users remain solely responsible for evaluating and validating any AI-generated output before relying on it.
                </p>
              </section>

              {/* Section 5 - Third-Party Services and Integrations */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">5. 🔗 Third-Party Services and Integrations</h2>
                <p className="text-base leading-relaxed text-foreground">
                  The Service may integrate or interact with third-party services, platforms, advertising networks, payment providers, analytics providers, authentication services, cloud providers, and software development kits.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  Evora Technologies Global does not control and is not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Availability of third-party services.</li>
                  <li>Third-party privacy practices.</li>
                  <li>Content provided by third parties.</li>
                  <li>Business practices of third-party providers.</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  Use of third-party services may be subject to additional terms and policies established by those providers.
                </p>
              </section>

              {/* Section 6 - Advertising and Sponsored Content */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">6. 📢 Advertising and Sponsored Content</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Certain Services may display advertisements, sponsored content, promotional offers, or recommendations.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  Advertising content may be provided by third-party advertising partners.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  Evora Technologies Global does not guarantee the accuracy, quality, legality, safety, or suitability of third-party advertisements or advertised products and services.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  Any transactions entered into between users and advertisers are solely between those parties.
                </p>
              </section>

              {/* Section 7 - Subscription and Digital Purchases */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">7. 💳 Subscription and Digital Purchases</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Some Services may offer premium features, subscriptions, consumable purchases, non-consumable purchases, or other paid digital products.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  Subscription fees, billing cycles, renewal terms, and cancellation procedures will be disclosed at the point of purchase.
                </p>
                <p className="text-base leading-relaxed text-foreground">Unless otherwise required by applicable law:</p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Fees are non-refundable.</li>
                  <li>Subscriptions automatically renew until canceled.</li>
                  <li>Pricing may change with advance notice where required.</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  Digital purchases are subject to the policies of the applicable app store or payment provider.
                </p>
              </section>

              {/* Section 8 - Availability of Services */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">8. ⚙️ Availability of Services</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Evora Technologies Global strives to maintain uninterrupted access to the Service but does not guarantee continuous availability.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  The Service may be interrupted, modified, suspended, restricted, or discontinued at any time for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Maintenance</li>
                  <li>Security reasons</li>
                  <li>Technical upgrades</li>
                  <li>Regulatory requirements</li>
                  <li>Operational considerations</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  No compensation shall be owed for temporary or permanent service interruptions.
                </p>
              </section>

              {/* Section 9 - Security and Abuse Prevention */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">9. 🛡️ Security and Abuse Prevention</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Evora Technologies Global reserves the right to monitor, investigate, suspend, restrict, or terminate access to the Service where necessary to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Protect platform integrity.</li>
                  <li>Prevent abuse, fraud, spam, or malicious activity.</li>
                  <li>Comply with legal obligations.</li>
                  <li>Protect users, partners, and infrastructure.</li>
                </ul>
              </section>

              {/* Section 10 - Compliance With Platform Policies */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">10. 📋 Compliance With Platform Policies</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Users agree that their use of the Service must comply with applicable platform policies, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Google Play Developer Program Policies</li>
                  <li>Apple App Store Review Guidelines</li>
                  <li>Advertising Network Policies</li>
                  <li>Applicable Data Protection Regulations</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  Violation of applicable platform requirements may result in suspension or termination of access.
                </p>
              </section>

              {/* Section 11 - Data Protection and Privacy */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">11. 🔐 Data Protection and Privacy</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Collection, processing, storage, and sharing of personal information are governed by our{" "}
                  <Link href="/privacy" className="text-primary hover:text-primary/80 underline transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  By using the Service, users acknowledge that data may be processed as described in the Privacy Policy and applicable legal requirements.
                </p>
              </section>

              {/* Section 12 - Export Controls and International Compliance */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">12. 🌍 Export Controls and International Compliance</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Users agree to comply with all applicable export control, sanctions, trade restrictions, and international regulations governing the use of software and digital services.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  The Service may not be used where prohibited by applicable law.
                </p>
              </section>

              {/* Section 13 - Force Majeure */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">13. ⛈️ Force Majeure</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Evora Technologies Global shall not be liable for any delay or failure to perform resulting from causes beyond reasonable control, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Natural disasters</li>
                  <li>Government actions</li>
                  <li>War</li>
                  <li>Labor disputes</li>
                  <li>Internet outages</li>
                  <li>Infrastructure failures</li>
                  <li>Cybersecurity incidents</li>
                  <li>Third-party service disruptions</li>
                </ul>
              </section>

              {/* Section 14 - Disclaimer & Limitation of Liability */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">14. ⚖️ Disclaimer &amp; Limitation of Liability</h2>
                <p className="text-base leading-relaxed text-foreground">
                  The Service is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, Evora Technologies Global disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  In no event shall Evora Technologies Global, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data or profits, arising from your use of or inability to use the Service, even if advised of the possibility of such damages.
                </p>
              </section>

              {/* Section 15 - Severability */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">15. 🧩 Severability</h2>
                <p className="text-base leading-relaxed text-foreground">
                  If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              {/* Section 16 - Updates to These Terms */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">16. 🔄 Updates to These Terms</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Evora Technologies Global may revise these Terms at any time. Significant changes will be communicated through app updates, in-app notifications, or an updated publication date.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  By continuing to use the Service after changes take effect, you agree to be bound by the revised Terms.
                </p>
              </section>

              {/* Section 17 - Entire Agreement */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">17. 📄 Entire Agreement</h2>
                <p className="text-base leading-relaxed text-foreground">
                  These Terms, together with the Privacy Policy and any additional legal notices published by Evora Technologies Global, constitute the entire agreement between users and Evora Technologies Global regarding use of the Service.
                </p>
              </section>

              {/* Section 18 - Contact Information */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">18. 📬 Contact Information</h2>
                <p className="text-base leading-relaxed text-foreground">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-secondary/50 p-6 rounded-lg mt-4 space-y-2">
                  <p className="font-semibold text-foreground">Evora Technologies Global Legal Team</p>
                  <p className="text-foreground">Email: beedyto@gmail.com</p>
                  <p className="text-foreground">Address: 20 Đ. Đình Thôn, Đình Thôn, Từ Liêm, Hà Nội, Việt Nam</p>
                  <p className="text-foreground">Phone: +84363378799</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer className="mt-20" />
    </div>
  );
}
