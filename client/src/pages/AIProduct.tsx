import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Bot,
  BrainCircuit,
  CalendarCheck,
  ChevronRight,
  CircleCheck,
  Clock,
  Database,
  LineChart,
  Mail,
  MessageSquare,
  RefreshCw,
  Repeat2,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const faqs = [
  {
    q: "How long does it take to get up and running?",
    a: "Most businesses are live within a few days. We configure your knowledge center, connect your channels, and run a validation round before going live — no technical team required on your end.",
  },
  {
    q: "Does it work with WhatsApp, email, and website chat?",
    a: "Yes. The system connects to the channels your customers already use, so there's no friction for them and no change needed on your side.",
  },
  {
    q: "What if the AI gives a wrong answer?",
    a: "The system is grounded in your structured knowledge center — it only responds based on what you've approved. And because every interaction feeds back in, accuracy improves continuously. You're always in control.",
  },
  {
    q: "Can I still handle conversations manually if I want to?",
    a: "Absolutely. You can monitor all conversations, step in at any point, and set rules for which types of inquiries always get escalated to a human.",
  },
  {
    q: "Is this just a chatbot?",
    a: "No. A chatbot follows a fixed script. This system understands context, follows up proactively, runs remarketing sequences, and learns from every conversation via RAG architecture. It's an autonomous communication engine.",
  },
];

const stats = [
  { value: "90%", label: "Reduction in manual workload" },
  { value: "24/7", label: "Instant response, every day" },
  { value: "0", label: "Leads lost" },
  { value: "∞", label: "Scales without extra staff" },
];

const steps = [
  {
    icon: MessageSquare,
    title: "Customer sends a message",
    description:
      "Any channel — WhatsApp, email, website chat. The system picks it up instantly.",
  },
  {
    icon: BrainCircuit,
    title: "AI understands & responds",
    description:
      "Using your structured knowledge center, it answers accurately and on-brand — every time.",
  },
  {
    icon: CalendarCheck,
    title: "Booking or action triggered",
    description:
      "If the conversation is ripe, the system guides the customer toward booking or purchase.",
  },
  {
    icon: RefreshCw,
    title: "Automated follow-up & remarketing",
    description:
      "No lead goes cold. The system sends timely follow-ups, reminders, and re-engagement messages.",
  },
  {
    icon: Database,
    title: "Everything stored & learned",
    description:
      "Every interaction enriches the knowledge base, making the system smarter over time.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Response",
    description:
      "Reply to every inquiry in seconds — day or night, weekday or holiday.",
  },
  {
    icon: Users,
    title: "Lead Follow-Up",
    description:
      "Automatically follow up with prospects who haven't converted yet.",
  },
  {
    icon: Repeat2,
    title: "Repeat Business",
    description:
      "Send smart reminders that bring existing customers back before they forget you.",
  },
  {
    icon: Mail,
    title: "Remarketing",
    description:
      "Re-engage inactive customers with personalised, timely outreach.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Guidance",
    description:
      "Steer every conversation toward a booking, quote, or sale — naturally.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent Quality",
    description:
      "Every customer gets the same accurate, professional experience regardless of volume.",
  },
  {
    icon: LineChart,
    title: "RAG-Based Learning",
    description:
      "The system learns from real conversations, not static scripts, improving accuracy over time.",
  },
  {
    icon: Clock,
    title: "Zero Manual Overhead",
    description:
      "Free your team from repetitive inbox work so they can focus on high-value tasks.",
  },
];

const outcomes = [
  "No lead is ever lost or forgotten",
  "Conversion rates increase with every conversation cycle",
  "Customer experience is consistent at any scale",
  "Your team focuses on work that actually requires humans",
  "The system gets smarter the more it runs",
];

export default function AIProduct() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="AI Customer System — Automate Your Entire Customer Journey"
        description="An AI system that handles every customer interaction from first message to booking, follow-up, and remarketing. Reduce manual workload by up to 90% while increasing conversions."
        canonicalUrl="/ai-customer-system"
      />
      <Header />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative py-24 md:py-36 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 overflow-hidden">
        {/* Decorative glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] bg-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-60px] right-[-60px] w-[380px] h-[380px] bg-cyan-400/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/20 border border-teal-500/40 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-teal-300 text-sm font-medium tracking-wide uppercase">
                AI-Powered Customer Engine
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Business, Running on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                Autopilot
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              An AI system that automatically handles your customers and grows
              your sales — from the first message all the way to booking,
              follow-up, and remarketing.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-400/40 hover:-translate-y-0.5"
              >
                Book a Free Demo <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all hover:-translate-y-0.5"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section className="bg-teal-600 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-1">
                  {s.value}
                </p>
                <p className="text-teal-100 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Every missed message is a missed sale
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Most businesses lose leads not because their product is bad — but
              because they're too slow to respond, too inconsistent to follow
              up, and too stretched to do remarketing properly. This system
              solves all three, automatically.
            </p>
          </div>

          {/* Two-column contrast */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without */}
            <div className="rounded-2xl border border-red-100 bg-red-50 p-8">
              <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">
                  ✕
                </span>
                Without the system
              </h3>
              <ul className="space-y-3 text-red-800">
                {[
                  "Slow or missed responses lose warm leads",
                  "Inconsistent answers damage trust",
                  "Follow-ups never happen",
                  "Staff waste hours on repetitive messages",
                  "Inactive customers disappear silently",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-red-400 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8">
              <h3 className="text-xl font-bold text-teal-700 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-sm">
                  ✓
                </span>
                With the system
              </h3>
              <ul className="space-y-3 text-teal-900">
                {[
                  "Every inquiry answered instantly, 24/7",
                  "Accurate, on-brand responses every time",
                  "Automated follow-ups — nothing slips through",
                  "Staff focus only on high-value conversations",
                  "Inactive customers re-engaged automatically",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CircleCheck className="w-4 h-4 mt-0.5 text-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The entire customer journey, handled
            </h2>
            <p className="text-gray-500 text-lg">
              From first contact to repeat business — every step automated,
              every interaction stored and learned from.
            </p>
          </div>

          {/* Timeline steps */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-teal-100 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-6 items-start group"
                  >
                    {/* Icon circle */}
                    <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:bg-teal-500 transition-colors z-10">
                      <Icon className="w-5 h-5 text-white" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-teal-600 text-teal-700 text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex-1 group-hover:border-teal-200 group-hover:shadow-md transition-all">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ─────────────────────────────────── */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything in one intelligent system
            </h2>
            <p className="text-gray-500 text-lg">
              Built on a RAG-based architecture that learns from real
              conversations — not static scripts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all bg-white cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                    <Icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RAG EXPLAINER ─────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full mb-6">
                <BrainCircuit className="w-4 h-4 text-teal-400" />
                <span className="text-teal-300 text-xs font-medium uppercase tracking-wider">
                  RAG Architecture
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                A system that gets smarter the longer it runs
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Unlike rigid chatbots that follow scripts, this system uses
                Retrieval-Augmented Generation (RAG) — meaning it draws on a
                continuously evolving knowledge base built from your actual
                customer conversations.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Every interaction is stored, analysed, and fed back in. The
                result is a communication engine that improves its accuracy,
                timing, and conversion performance automatically — with zero
                manual input from your team.
              </p>
            </div>

            {/* Visual card */}
            <div className="space-y-4">
              {[
                {
                  icon: MessageSquare,
                  label: "Real conversation stored",
                  sub: "Customer intent, questions, objections",
                },
                {
                  icon: Database,
                  label: "Knowledge base updated",
                  sub: "Patterns recognised, gaps filled",
                },
                {
                  icon: Bot,
                  label: "AI response improves",
                  sub: "Better timing, better accuracy, higher conversion",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {item.label}
                      </p>
                      <p className="text-slate-400 text-xs">{item.sub}</p>
                    </div>
                    {i < 2 && (
                      <ChevronRight className="w-4 h-4 text-teal-500 ml-auto" />
                    )}
                  </div>
                );
              })}
              <p className="text-center text-teal-400 text-xs font-medium pt-2 tracking-wide uppercase">
                ↑ Loop repeats with every conversation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The result
            </h2>
            <p className="text-gray-500 text-lg">
              A self-improving communication engine running silently in the
              background — so your business never stops converting.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-center gap-4 p-5 rounded-xl border border-teal-100 bg-teal-50 hover:bg-teal-100 transition-colors"
              >
                <CircleCheck className="w-6 h-6 text-teal-600 flex-shrink-0" />
                <p className="text-gray-800 font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-teal-500 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO FORM ─────────────────────────────────────── */}
      <section id="demo" className="py-24 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

            {/* Left — pitch */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full mb-6">
                <CalendarCheck className="w-4 h-4 text-teal-400" />
                <span className="text-teal-300 text-xs font-medium uppercase tracking-wider">
                  Book a Free Demo
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                See it handle a real conversation — live
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Tell us a bit about your business and we'll walk you through a
                live demo tailored to your customer journey. No slides. No
                fluff. Just the system doing its thing.
              </p>

              <ul className="space-y-3">
                {[
                  "30-minute live walkthrough",
                  "Configured for your industry",
                  "No commitment required",
                  "See RAG learning in real time",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CircleCheck className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CircleCheck className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-500">
                    We'll reach out within one business day to confirm your
                    demo slot.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Request your demo
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Your name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="business">Business name *</Label>
                      <Input
                        id="business"
                        name="business"
                        placeholder="Acme Co."
                        value={form.business}
                        onChange={handleChange}
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message">
                        Biggest challenge with customer communication?
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="e.g. We miss too many leads after hours..."
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 bg-teal-600 hover:bg-teal-500 text-white font-bold"
                    >
                      Book My Free Demo <Send className="w-4 h-4 ml-2" />
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      No credit card. No obligation. Cancel anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
