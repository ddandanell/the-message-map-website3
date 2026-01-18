import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { FileText, AlertCircle, CheckCircle, Scale, ShieldCheck } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Terms & Conditions - Massage Bali"
        description="Terms and conditions for using Massage Bali directory service. Read our user agreement, content policy, and service terms."
        canonicalUrl="/terms"
      />
      
      <Header />

      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Terms & Conditions</h1>
          <p className="text-xl text-slate-200 leading-relaxed">
            Please read these terms carefully before using our service.
          </p>
          <p className="text-sm text-slate-400 mt-4">Last updated: January 18, 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Quick Summary */}
          <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 mb-12">
            <h2 className="text-2xl font-bold text-teal-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Quick Summary
            </h2>
            <div className="prose prose-teal max-w-none">
              <ul className="space-y-2 text-teal-800">
                <li>Massage Bali is a directory service connecting users with massage providers</li>
                <li>We verify listings but are not responsible for services provided by third parties</li>
                <li>Users must be 18+ to use our booking and contact features</li>
                <li>Content on our platform is protected by copyright</li>
                <li>We reserve the right to remove listings or users who violate our policies</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-slate max-w-none space-y-12">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-teal-600" />
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-700 leading-relaxed">
                By accessing and using Massage Bali ("the Service"), you accept and agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our Service.
              </p>
              <p className="text-slate-700 leading-relaxed">
                These terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Service Description</h2>
              <p className="text-slate-700 leading-relaxed">
                Massage Bali is a directory and information platform that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Provides information about massage services and wellness providers in Bali</li>
                <li>Facilitates discovery of massage therapists, spas, and related services</li>
                <li>Offers verified reviews and ratings from real users</li>
                <li>Provides contact information to connect users with service providers</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                We are a platform connecting users with independent service providers. We do not directly provide massage services 
                and are not responsible for the quality, safety, or legality of services provided by third-party businesses listed on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Eligibility</h2>
              <p className="text-slate-700 leading-relaxed">
                You must be at least 18 years old to use our booking and contact features. By using these features, you represent 
                and warrant that you are of legal age to form a binding contract.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. User Accounts & Listings</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">For Service Providers:</h3>
              <p className="text-slate-700 leading-relaxed">
                If you list your business on our platform, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Provide accurate, complete, and up-to-date information about your services</li>
                <li>Maintain current pricing, hours, and contact information</li>
                <li>Operate legally and hold all required licenses and permits</li>
                <li>Respond professionally to customer inquiries and reviews</li>
                <li>Not engage in fraudulent or misleading practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Verification & Reviews</h2>
              <p className="text-slate-700 leading-relaxed">
                "Verified" badges indicate that our team has visited and assessed the establishment. However, this verification:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Does not guarantee quality, safety, or suitability for every user</li>
                <li>Reflects conditions at the time of our visit, which may change</li>
                <li>Is our opinion and assessment based on specific criteria</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                User reviews represent individual opinions and experiences. We moderate reviews for inappropriate content but 
                do not guarantee their accuracy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
              <p className="text-slate-700 leading-relaxed">
                All content on Massage Bali, including text, graphics, logos, images, and software, is the property of Massage Bali 
                or its content suppliers and is protected by international copyright laws.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-orange-900 mb-2">Important Notice</p>
                    <p className="text-orange-800 text-sm leading-relaxed">
                      Massage Bali is not liable for any direct, indirect, incidental, special, or consequential damages 
                      arising from your use of the Service or services provided by third-party businesses listed on our platform.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Quality, safety, or legality of services received from providers</li>
                <li>Personal injury or property damage</li>
                <li>Disputes between users and service providers</li>
                <li>Loss of data or business interruption</li>
                <li>Inaccurate or outdated information on our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Booking & Payments</h2>
              <p className="text-slate-700 leading-relaxed">
                When you book or arrange services through information provided on our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>You enter into a direct agreement with the service provider, not Massage Bali</li>
                <li>Payment terms, cancellation policies, and refunds are determined by the service provider</li>
                <li>We are not responsible for payment processing, disputes, or refunds</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Prohibited Conduct</h2>
              <p className="text-slate-700 leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Use the Service for any illegal purpose</li>
                <li>Post false, misleading, or defamatory content</li>
                <li>Harass, abuse, or threaten other users or providers</li>
                <li>Attempt to scrape, copy, or steal data from our platform</li>
                <li>Impersonate others or provide false information</li>
                <li>Interfere with the proper functioning of the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Third-Party Links</h2>
              <p className="text-slate-700 leading-relaxed">
                Our Service may contain links to third-party websites, including partner services like Home Massage Ubud. 
                We are not responsible for the content, privacy practices, or terms of service of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon 
                posting to this page. Your continued use of the Service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination</h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to terminate or suspend access to our Service immediately, without prior notice, 
                for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Governing Law</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Indonesia, without regard 
                to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-teal-600" />
                14. Contact Us
              </h2>
              <p className="text-slate-700 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mt-4 border border-slate-200">
                <p className="text-slate-700"><strong>Email:</strong> info@themassagemap.com</p>
                <p className="text-slate-700 mt-2"><strong>Website:</strong> <a href="https://themassagemap.com" className="text-teal-600 hover:underline">themassagemap.com</a></p>
              </div>
            </section>

          </div>

          {/* Footer CTA */}
          <div className="mt-16 p-8 bg-teal-50 rounded-2xl border border-teal-100 text-center">
            <h3 className="text-2xl font-bold text-teal-900 mb-3">Have Questions?</h3>
            <p className="text-teal-700 mb-6">
              Our team is here to help clarify any terms or policies.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
