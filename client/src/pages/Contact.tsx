import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-teal-100 leading-relaxed">
            Have a question, suggestion, or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto h-12 px-8">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-3">
                We typically respond within 24 hours
              </p>
              <a href="mailto:hello@themassagemap.com" className="text-primary font-medium hover:underline">
                hello@themassagemap.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Quick questions? Message us
              </p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                +62 812-3456-7890
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Come say hi at our Canggu office
              </p>
              <p className="text-foreground">
                Jalan Pantai Batu Bolong<br />
                Canggu, Bali 80361<br />
                Indonesia
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-purple-50 p-6 rounded-2xl border border-teal-100">
              <h3 className="font-bold text-lg mb-2 text-teal-900">Business Inquiries</h3>
              <p className="text-teal-700 text-sm">
                Interested in listing your spa or partnering with us? Check out our{" "}
                <a href="/list-business" className="font-semibold underline">
                  Business Listings page
                </a>
                {" "}for more info.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Answers</h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl border border-border shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                How do I suggest a spa to be added?
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                You can use the contact form above or email us directly at hello@themassagemap.com with the spa's name, location, and why you think it deserves to be listed. We review all suggestions!
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl border border-border shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                Can I advertise on The Massage Map?
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Yes! We offer featured listings, sponsored guides, and banner advertising. Contact us at partnerships@themassagemap.com for our media kit.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl border border-border shadow-sm group">
              <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                Do you have an app?
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Not yet, but it's in the works! For now, our mobile website is fully optimized for browsing on your phone. You can add it to your home screen for easy access.
              </p>
            </details>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
