import MassageTypeTemplate from "./MassageTypeTemplate";
import { MassageTypeData } from "@/data/massageTypes";

const thaioilmassageData: MassageTypeData = {
  id: "thai-oil-massage",
  slug: "thai-oil-massage",
  name: "Thai Oil Massage",
  metaTitle: "Thai Oil Massage in Bali: Benefits, Techniques & Best Spas 2026",
  metaDescription: "Gentler version of traditional Thai massage incorporating oil allowing smooth gliding strokes combined with stretching and pressure point work.",
  heroTitle: "Thai Oil Massage: Gentler version of traditional Thai massage incorporating oil allowing smooth gliding strokes combined with stretching and pressure point work.",
  heroSubtitle: "Gentler version of traditional Thai massage incorporating oil allowing smooth gliding strokes combined with stretching and pressure point work.",
  category: "Traditional & Wellness",
  
  introduction: `<p>Gentler version of traditional Thai massage incorporating oil allowing smooth gliding strokes combined with stretching and pressure point work.</p>
  
  <p>This comprehensive treatment offers unique benefits for those seeking specialized therapeutic care. Whether you're addressing specific health concerns or simply exploring new wellness modalities, Thai Oil Massage provides a distinctive approach to healing and relaxation.</p>`,
  
  benefitsList: [
    "Provides targeted therapeutic benefits",
    "Promotes relaxation and stress relief",
    "Improves circulation and overall wellbeing",
    "Addresses specific health concerns effectively"
  ],
  
  techniquesDescription: `<p>Thai Oil Massage employs specialized techniques designed to deliver optimal therapeutic results:</p>
  
  <h3>Core Technique</h3>
  <p>Gentler version of traditional Thai massage incorporating oil allowing smooth gliding strokes combined with stretching and pressure point work.</p>`,
  
  bestSuitedFor: [
    "Individuals seeking specialized therapeutic care",
    "Those with specific health conditions",
    "People interested in alternative wellness approaches",
    "Anyone looking to explore new massage modalities"
  ],
  
  duration: "60-90 minutes",
  priceRange: "$30-$80 USD / 300,000-800,000 IDR in Bali",
  
  whatToExpect: `<p>During your Thai Oil Massage session, you'll experience a carefully designed treatment protocol tailored to your individual needs. The therapist will begin with an assessment and consultation to understand your specific concerns and goals.</p>
  
  <p>The session will incorporate specialized techniques unique to this modality, creating a therapeutic experience that addresses both physical and energetic aspects of healing. You can expect to feel relaxed, rejuvenated, and supported throughout the treatment.</p>`,
  
  comparisonTitle: "How Thai Oil Massage Compares to Other Massage Types",
  comparisonText: "Thai Oil Massage offers a unique approach that distinguishes it from traditional massage modalities. This specialized treatment focuses on specific therapeutic outcomes through targeted techniques and protocols.",
  
  contraindications: "Consult with your healthcare provider before receiving Thai Oil Massage if you have any medical conditions, are pregnant, or have recently undergone surgery. Always inform your therapist about any health concerns.",
  
  faqs: [
    {
      question: "What makes Thai Oil Massage different from other massage types?",
      answer: "Gentler version of traditional Thai massage incorporating oil allowing smooth gliding strokes combined with stretching and pressure point work. This specialized approach offers unique benefits that distinguish it from more traditional massage modalities."
    },
    {
      question: "How long does a Thai Oil Massage session typically last?",
      answer: "Most Thai Oil Massage sessions last between 60-90 minutes, allowing sufficient time for a comprehensive treatment that addresses your specific needs and goals."
    },
    {
      question: "Is Thai Oil Massage suitable for everyone?",
      answer: "While Thai Oil Massage can benefit many people, it's important to consult with a qualified therapist to determine if this treatment is appropriate for your individual health situation and goals."
    }
  ],
  
  ctaText: "Discover qualified practitioners offering Thai Oil Massage throughout Bali. Find the perfect therapist to experience this unique therapeutic modality.",
  
  competitors: [
    {
      name: "Bali Wellness Centers",
      description: "Offers Thai Oil Massage as part of comprehensive wellness programs, emphasizing therapeutic benefits and professional expertise."
    }
  ]
};

export default function ThaiOilMassage() {
  return <MassageTypeTemplate data={thaioilmassageData} />;
}
