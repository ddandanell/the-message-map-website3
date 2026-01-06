import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Eye, Lock, UserCheck, Database, Globe } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-slate-200 leading-relaxed">
            Your privacy matters to us. Here's how we protect your data.
          </p>
          <p className="text-sm text-slate-400 mt-4">Last updated: January 6, 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Quick Summary */}
          <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 mb-12">
            <h2 className="text-2xl font-bold text-teal-900 mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6" />
              Quick Summary
            </h2>
            <div className="prose prose-teal max-w-none">
              <ul className="space-y-2 text-teal-800">
                <li>We collect minimal data: just what's needed to provide our service</li>
                <li>We never sell your personal information to third parties</li>
                <li>Cookies are used only for essential site functionality and analytics</li>
                <li>You can request deletion of your data at any time</li>
                <li>We're transparent about how we use your information</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-slate max-w-none space-y-12">

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold m-0">Information We Collect</h2>
              </div>
              <div className="bg-white p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mt-0">Information You Provide</h3>
                <p className="text-muted-foreground">
                  When you use The Massage Map, we may collect information you voluntarily provide, such as:
                </p>
                <ul className="text-muted-foreground">
                  <li>Name and email address when contacting us or subscribing to our newsletter</li>
                  <li>Business information if you're listing a spa or massage service</li>
                  <li>Feedback, reviews, or suggestions you submit</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground">Automatically Collected Information</h3>
                <p className="text-muted-foreground">
                  Like most websites, we automatically collect certain information, including:
                </p>
                <ul className="text-muted-foreground">
                  <li>IP address, browser type, and device information</li>
                  <li>Pages visited, time spent on site, and referral sources</li>
                  <li>Location data (city/region level only, if you enable location services)</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold m-0">How We Use Your Information</h2>
              </div>
              <div className="bg-white p-6 rounded-xl border border-border">
                <p className="text-muted-foreground">We use the information we collect to:</p>
                <ul className="text-muted-foreground">
                  <li><strong>Provide and improve our service:</strong> Maintain the directory, respond to inquiries, and enhance user experience</li>
                  <li><strong>Communicate with you:</strong> Send newsletters (if subscribed), respond to contact forms, and notify about updates</li>
                  <li><strong>Analytics:</strong> Understand how users interact with our site to improve features and content</li>
                  <li><strong>Safety and security:</strong> Prevent fraud, abuse, and ensure platform integrity</li>
                  <li><strong>Legal compliance:</strong> Comply with applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold m-0">Data Sharing & Disclosure</h2>
              </div>
              <div className="bg-white p-6 rounded-xl border border-border">
                <p className="text-muted-foreground">
                  We do not sell or rent your personal information. We may share data in these limited circumstances:
                </p>
                <ul className="text-muted-foreground">
                  <li><strong>Service providers:</strong> Trusted third parties who help us operate our website (hosting, analytics, email services)</li>
                  <li><strong>Legal requirements:</strong> When required by law, court order, or to protect our rights</li>
                  <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold m-0">Cookies & Tracking</h2>
              </div>
              <div className="bg-white p-6 rounded-xl border border-border">
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to:
                </p>
                <ul className="text-muted-foreground">
                  <li>Remember your preferences and settings</li>
                  <li>Understand site traffic and usage patterns (via Google Analytics)</li>
                  <li>Improve site performance and user experience</li>
                </ul>
                <p className="text-muted-foreground">
                  You can control cookies through your browser settings. However, disabling cookies may affect site functionality.
                </p>
              </div>
            </section>

            <section>
              <div className="bg-white p-6 rounded-xl border border-border">
                <h2 className="text-3xl font-bold text-foreground mt-0">Your Rights</h2>
                <p className="text-muted-foreground">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="text-muted-foreground">
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Ask us to correct inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Objection:</strong> Object to processing of your data for certain purposes</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise these rights, contact us at <a href="mailto:privacy@themassagemap.com" className="text-primary font-semibold hover:underline">privacy@themassagemap.com</a>
                </p>
              </div>
            </section>

            <section>
              <div className="bg-white p-6 rounded-xl border border-border">
                <h2 className="text-3xl font-bold text-foreground mt-0">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your information, including encryption,
                  secure servers, and regular security audits. However, no method of transmission over the internet
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <section>
              <div className="bg-white p-6 rounded-xl border border-border">
                <h2 className="text-3xl font-bold text-foreground mt-0">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our service is not intended for children under 13 years of age. We do not knowingly collect
                  personal information from children. If you believe we have collected data from a child, please
                  contact us immediately.
                </p>
              </div>
            </section>

            <section>
              <div className="bg-white p-6 rounded-xl border border-border">
                <h2 className="text-3xl font-bold text-foreground mt-0">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by
                  posting the new policy on this page and updating the "Last updated" date. We encourage you to
                  review this policy periodically.
                </p>
              </div>
            </section>

            <section>
              <div className="bg-gradient-to-br from-teal-50 to-purple-50 p-8 rounded-2xl border border-teal-100">
                <h2 className="text-3xl font-bold text-teal-900 mt-0">Contact Us</h2>
                <p className="text-teal-800">
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="text-teal-800 space-y-1 mt-4">
                  <p><strong>Email:</strong> <a href="mailto:privacy@themassagemap.com" className="text-primary font-semibold hover:underline">privacy@themassagemap.com</a></p>
                  <p><strong>Address:</strong> Jalan Pantai Batu Bolong, Canggu, Bali 80361, Indonesia</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
