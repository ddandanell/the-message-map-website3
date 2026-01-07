import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, DollarSign, Heart, AlertCircle, Users } from "lucide-react";
import { MassageTypeData } from "@/data/massageTypes";
import { Helmet } from "react-helmet";

interface MassageTypeTemplateProps {
  data: MassageTypeData;
}

export default function MassageTypeTemplate({ data }: MassageTypeTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
      </Helmet>
      
      <Header />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/"><a className="hover:text-primary">Home</a></Link>
          <span>/</span>
          <Link href="/massage-types"><a className="hover:text-primary">Massage Types</a></Link>
          <span>/</span>
          <span className="text-foreground">{data.name}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <Badge className="mb-4">{data.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {data.heroTitle}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {data.heroSubtitle}
          </p>
        </header>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
            <div className="flex items-center gap-2 text-teal-900 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Duration</span>
            </div>
            <p className="text-teal-800 text-sm">{data.duration}</p>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
            <div className="flex items-center gap-2 text-purple-900 mb-2">
              <DollarSign className="w-5 h-5" />
              <span className="font-bold">Price Range</span>
            </div>
            <p className="text-purple-800 text-sm">{data.priceRange}</p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <div className="flex items-center gap-2 text-blue-900 mb-2">
              <Users className="w-5 h-5" />
              <span className="font-bold">Best For</span>
            </div>
            <p className="text-blue-800 text-sm">{data.bestSuitedFor[0]}</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: data.introduction }} />
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-3xl p-8 my-12">
          <h2 className="text-3xl font-bold text-teal-900 mb-6 flex items-center gap-3">
            <Heart className="w-8 h-8" />
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.benefitsList.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-teal-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Techniques */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Techniques Used</h2>
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: data.techniquesDescription }} />
          </div>
        </div>

        {/* Who Is This For */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 my-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Who Should Try {data.name}?</h2>
          <div className="space-y-2">
            {data.bestSuitedFor.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">What to Expect During Your Session</h2>
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: data.whatToExpect }} />
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-white border border-border rounded-xl p-8 my-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">{data.comparisonTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{data.comparisonText}</p>
        </div>

        {/* Contraindications */}
        {data.contraindications && (
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8 rounded-r-lg">
            <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Safety & Contraindications
            </h3>
            <p className="text-amber-800 text-sm">{data.contraindications}</p>
          </div>
        )}

        {/* FAQ Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-border rounded-lg p-5 group cursor-pointer">
                <summary className="font-bold text-foreground list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Competitor Research */}
        {data.competitors.length > 0 && (
          <div className="my-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">How Others Offer {data.name}</h2>
            <p className="text-muted-foreground mb-6">
              Here's how leading spas and wellness centers present this treatment:
            </p>
            <div className="space-y-4">
              {data.competitors.map((competitor, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-2">{competitor.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{competitor.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-teal-50 to-purple-50 border border-teal-100 rounded-2xl p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-teal-900 mb-4">Ready to Book Your {data.name}?</h3>
          <p className="text-teal-800 mb-6 max-w-2xl mx-auto">
            {data.ctaText}
          </p>
          <Button size="lg" className="h-12 px-8">
            Find {data.name} Near You in Bali
          </Button>
        </div>
      </article>

      <Footer />
    </div>
  );
}
