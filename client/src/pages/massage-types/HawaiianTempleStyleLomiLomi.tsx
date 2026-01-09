import MassageTypeTemplate from "./MassageTypeTemplate";
import { MassageTypeData } from "@/data/massageTypes";

const hawaiiantemplestylelomilomiData: MassageTypeData = {
  id: "hawaiian-temple-style-lomi-lomi",
  slug: "hawaiian-temple-style-lomi-lomi",
  name: "Hawaiian Temple Style Lomi Lomi",
  metaTitle: "Hawaiian Temple Style Lomi Lomi in Bali: Benefits, Techniques & Best Spas 2026",
  metaDescription: "Sacred healing practice incorporating prayer, intention, and intuitive flowing movements to restore harmony between body, mind, spirit, and environmen...",
  heroTitle: "Hawaiian Temple Style Lomi Lomi: Sacred healing practice incorporating prayer, intention, and intuitive flowing movements to restore harmony between body, mind, spirit, and environment",
  heroSubtitle: "Sacred healing practice incorporating prayer, intention, and intuitive flowing movements to restore harmony between body, mind, spirit, and environment.",
  category: "Therapeutic & Wellness",
  
  introduction: `<p>Sacred healing practice incorporating prayer, intention, and intuitive flowing movements to restore harmony between body, mind, spirit, and environment.</p>
  
<p>This comprehensive treatment offers unique benefits for those seeking specialized therapeutic care. Whether you're addressing specific health concerns or simply exploring new wellness modalities, Hawaiian Temple Style Lomi Lomi provides a distinctive approach to healing and relaxation.</p>`,
  
  benefitsList: [
    "Provides targeted therapeutic benefits",
    "Promotes relaxation and stress relief",
    "Improves circulation and overall wellbeing",
    "Addresses specific health concerns effectively"
  ],
  
  techniquesDescription: `<p>Hawaiian Temple Style Lomi Lomi employs specialized techniques designed to deliver optimal therapeutic results:</p>
  
<h3>Core Technique</h3>
<p>Sacred healing practice incorporating prayer, intention, and intuitive flowing movements to restore harmony between body, mind, spirit, and environment.</p>`,
  
  bestSuitedFor: [
    "Individuals seeking specialized therapeutic care",
    "Those with specific health conditions",
    "People interested in alternative wellness approaches",
    "Anyone looking to explore new massage modalities"
  ],
  
  duration: "60-90 minutes",
  priceRange: "$30-$80 USD / 300,000-800,000 IDR in Bali",
  
  whatToExpect: `<p>During your Hawaiian Temple Style Lomi Lomi session, you'll experience a carefully designed treatment protocol tailored to your individual needs. The therapist will begin with an assessment and consultation to understand your specific concerns and goals.</p>
  
<p>The session will incorporate specialized techniques unique to this modality, creating a therapeutic experience that addresses both physical and energetic aspects of healing. You can expect to feel relaxed, rejuvenated, and supported throughout the treatment.</p>`,
  
  comparisonTitle: "How Hawaiian Temple Style Lomi Lomi Compares to Other Massage Types",
  comparisonText: "Hawaiian Temple Style Lomi Lomi offers a unique approach that distinguishes it from traditional massage modalities. This specialized treatment focuses on specific therapeutic outcomes through targeted techniques and protocols.",
  
  contraindications: "Consult with your healthcare provider before receiving Hawaiian Temple Style Lomi Lomi if you have any medical conditions, are pregnant, or have recently undergone surgery. Always inform your therapist about any health concerns.",
  
  faqs: [
    {
      question: "What makes Hawaiian Temple Style Lomi Lomi different from other massage types?",
      answer: "Sacred healing practice incorporating prayer, intention, and intuitive flowing movements to restore harmony between body, mind, spirit, and environment. This specialized approach offers unique benefits that distinguish it from more traditional massage modalities."
    },
    {
      question: "How long does a Hawaiian Temple Style Lomi Lomi session typically last?",
      answer: "Most Hawaiian Temple Style Lomi Lomi sessions last between 60-90 minutes, allowing sufficient time for a comprehensive treatment that addresses your specific needs and goals."
    },
    {
      question: "Is Hawaiian Temple Style Lomi Lomi suitable for everyone?",
      answer: "While Hawaiian Temple Style Lomi Lomi can benefit many people, it's important to consult with a qualified therapist to determine if this treatment is appropriate for your individual health situation and goals."
    }
  ],
  
  ctaText: "Discover qualified practitioners offering Hawaiian Temple Style Lomi Lomi throughout Bali. Find the perfect therapist to experience this unique therapeutic modality.",
  
  competitors: [
    {
      name: "Bali Wellness Centers",
      description: "Offers Hawaiian Temple Style Lomi Lomi as part of comprehensive wellness programs, emphasizing therapeutic benefits and professional expertise."
    }
  ]
};

export default function HawaiianTempleStyleLomiLomi() {
  return <MassageTypeTemplate data={hawaiiantemplestylelomilomiData} />;
}
