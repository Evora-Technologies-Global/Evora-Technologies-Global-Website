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

export default function PrivacyPolicy() {
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
            <Link href="/privacy" className="text-foreground hover:text-primary transition-colors font-semibold">
              Privacy
            </Link>
            <Link href="/terms" className="text-foreground hover:text-primary transition-colors">
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
              Privacy Policy
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
                  This Privacy Policy applies to all applications, services, SDKs, and digital products developed and published by Evora Technologies Global ("we", "our", "us").
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  We are committed to protecting user privacy, ensuring transparency, and providing safe and reliable digital experiences across all our products.
                </p>
              </section>

              {/* Section 1 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">1. 📊 Information We May Collect</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Depending on the product features, we may collect the following categories of data:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">1.1 Device &amp; Technical Data</h3>
                    <ul className="list-disc list-inside space-y-2 mt-3 text-base text-foreground">
                      <li>Device model</li>
                      <li>Operating system version</li>
                      <li>App version</li>
                      <li>Language settings</li>
                      <li>Network type</li>
                      <li>IP address (for security and analytics purposes)</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">1.2 Usage Data</h3>
                    <ul className="list-disc list-inside space-y-2 mt-3 text-base text-foreground">
                      <li>App interactions (screen views, button clicks)</li>
                      <li>Feature usage patterns</li>
                      <li>Session duration</li>
                      <li>Crash logs and diagnostics</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">1.3 Advertising Data</h3>
                    <ul className="list-disc list-inside space-y-2 mt-3 text-base text-foreground">
                      <li>Google Advertising ID</li>
                      <li>Ad interaction events</li>
                      <li>Approximate location (derived from IP or device settings)</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">1.4 Location Data (Optional)</h3>
                    <p className="text-base leading-relaxed text-foreground">When enabled by the user:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3 text-base text-foreground">
                      <li>Precise location (GPS)</li>
                      <li>Approximate location (network-based)</li>
                    </ul>
                    <p className="text-base leading-relaxed text-foreground mt-3">Used for:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3 text-base text-foreground">
                      <li>Location-based features</li>
                      <li>Geo-tagging content</li>
                      <li>Personalization</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">1.5 Media &amp; Storage Data (If applicable)</h3>
                    <ul className="list-disc list-inside space-y-2 mt-3 text-base text-foreground">
                      <li>Photos</li>
                      <li>Videos</li>
                      <li>Files created or selected by the user</li>
                    </ul>
                    <p className="text-base leading-relaxed text-foreground mt-3">Used only for:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3 text-base text-foreground">
                      <li>App core functionality (editing, saving, sharing)</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">1.6 Camera &amp; Microphone Data (If applicable)</h3>
                    <ul className="list-disc list-inside space-y-2 mt-3 text-base text-foreground">
                      <li>Camera input for capturing images or video</li>
                      <li>Microphone input for audio-related features</li>
                    </ul>
                    <p className="text-base leading-relaxed text-foreground mt-3">
                      We do not store raw camera/microphone data unless explicitly required by user action.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">2. 🚀 How We Use Information</h2>
                <p className="text-base leading-relaxed text-foreground">We use collected data to:</p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Provide and maintain core app functionality</li>
                  <li>Improve performance and user experience</li>
                  <li>Personalize content and features</li>
                  <li>Deliver relevant advertisements</li>
                  <li>Analyze usage trends and app stability</li>
                  <li>Detect, prevent, and resolve technical issues</li>
                  <li>Ensure security and prevent fraud or abuse</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">3. 🤝 Data Sharing</h2>
                <p className="text-base leading-relaxed text-foreground">
                  We do <strong>NOT</strong> sell personal data.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  We may share limited data with trusted third-party service providers strictly for operational purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Google Play Services</li>
                  <li>Google AdMob (advertising)</li>
                  <li>Google Firebase (analytics, crash reporting, messaging)</li>
                  <li>AppLovin / mediation partners (if applicable)</li>
                  <li>Cloud infrastructure providers</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  All third parties are required to comply with strict data protection standards.
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">4. 📢 Advertising</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Our applications may display advertisements through third-party advertising networks such as Google AdMob and other mediation platforms.
                </p>
                <p className="text-base leading-relaxed text-foreground">Advertising partners may collect:</p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Advertising ID</li>
                  <li>Device information</li>
                  <li>Interaction data</li>
                  <li>Approximate location</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  Users may reset or disable advertising personalization in device settings.
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">5. 📈 Analytics &amp; Performance Monitoring</h2>
                <p className="text-base leading-relaxed text-foreground">
                  We use analytics tools such as Firebase Analytics and similar platforms to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Understand user behavior</li>
                  <li>Improve product performance</li>
                  <li>Optimize user experience</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  Collected data is aggregated and anonymized where possible.
                </p>
              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">6. 🔐 Data Security</h2>
                <p className="text-base leading-relaxed text-foreground">
                  We implement industry-standard security measures including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Encryption in transit (HTTPS)</li>
                  <li>Secure backend infrastructure</li>
                  <li>Access control policies</li>
                  <li>Regular security reviews</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  However, no method of transmission or storage is 100% secure.
                </p>
              </section>

              {/* Section 7 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">7. 👶 Children's Privacy</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Some applications may be suitable for general audiences.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  We do not knowingly collect personal data from children under applicable age limits without parental consent.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  If such data is detected, it will be removed promptly.
                </p>
              </section>

              {/* Section 8 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">8. ⚙️ Permissions Usage</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Our applications may request the following permissions depending on features:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Location (precise / approximate)</li>
                  <li>Camera</li>
                  <li>Microphone</li>
                  <li>Storage / Media access</li>
                  <li>Notifications</li>
                  <li>Network access</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">All permissions are:</p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Optional where possible</li>
                  <li>Clearly explained in-app</li>
                  <li>Used only for stated functionality</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">9. ☁️ SDKs &amp; Third-Party Services</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Our products may integrate SDKs including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Google AdMob</li>
                  <li>Firebase (Analytics, Crashlytics, Messaging)</li>
                  <li>Google Play Services</li>
                  <li>AppLovin / MAX mediation</li>
                  <li>Other analytics or performance SDKs</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  Each SDK may independently collect and process data under its own privacy policy.
                </p>
              </section>

              {/* Section 10 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">10. 📦 Data Retention</h2>
                <p className="text-base leading-relaxed text-foreground">
                  We retain data only as long as necessary to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>Provide services</li>
                  <li>Comply with legal obligations</li>
                  <li>Improve product performance</li>
                </ul>
                <p className="text-base leading-relaxed text-foreground">
                  Users may request deletion where applicable.
                </p>
              </section>

              {/* Section 11 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">11. 🌍 International Data Transfers</h2>
                <p className="text-base leading-relaxed text-foreground">
                  Data may be processed on servers located in different countries depending on service providers.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  We ensure appropriate safeguards are in place for data protection compliance.
                </p>
              </section>

              {/* Section 12 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">12. 🔄 Updates to This Policy</h2>
                <p className="text-base leading-relaxed text-foreground">
                  We may update this Privacy Policy periodically.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  Users will be informed of significant changes through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-foreground">
                  <li>App updates</li>
                  <li>In-app notifications</li>
                  <li>Updated publication date</li>
                </ul>
              </section>

              {/* Section 13 */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">13. 📬 Contact Information</h2>
                <p className="text-base leading-relaxed text-foreground">
                  For privacy-related inquiries, please contact us at:
                </p>
                <div className="bg-secondary/50 p-6 rounded-lg mt-4 space-y-2">
                  <p className="font-semibold text-foreground">Evora Technologies Global Privacy Team</p>
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
