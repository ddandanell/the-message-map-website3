import MassageTypeTemplate from "./MassageTypeTemplate";
import { MassageTypeData } from "@/data/massageTypes";

const thermalstonemassageData: MassageTypeData = {
  id: "thermal-stone-massage",
  slug: "thermal-stone-massage",
  name: "Thermal Stone Massage",
  metaTitle: "Thermal Stone Massage in Bali: Benefits, Techniques & Best Spas 2026",
  metaDescription: "Systematic application of heated and cooled stones during massage improving circulation, reducing inflammation, and providing deep tissue work through thermal therapy.",
  heroTitle: "Thermal Stone Massage: Systematic application of heated and cooled stones during massage improving circulation, reducing inflammation, and providing deep tissue work through thermal therapy.",
  heroSubtitle: "Systematic application of heated and cooled stones during massage improving circulation, reducing inflammation, and providing deep tissue work through thermal therapy.",
  category: "Specialty & Therapeutic",
  
  introduction: `<p>Systematic application of heated and cooled stones during massage improving circulation, reducing inflammation, and providing deep tissue work through thermal therapy.</p>
  
  <p>This comprehensive treatment offers unique benefits for those seeking specialized therapeutic care. Whether you're addressing specific health concerns or simply exploring new wellness modalities, Thermal Stone Massage provides a distinctive approach to healing and relaxation.</p>`,
  
  benefitsList: [
    "Provides targeted therapeutic benefits",
    "Promotes relaxation and stress relief",
    "Improves circulation and overall wellbeing",
    "Addresses specific health concerns effectively"
  ],
  
  techniquesDescription: `<p>Thermal Stone Massage employs specialized techniques designed to deliver optimal therapeutic results:</p>
  
  <h3>Core Technique</h3>
  <p>Systematic application of heated and cooled stones during massage improving circulation, reducing inflammation, and providing deep tissue work through thermal therapy.</p>`,
  
  bestSuitedFor: [
    "Individuals seeking specialized therapeutic care",
    "Those with specific health conditions",
    "People interested in alternative wellness approaches",
    "Anyone looking to explore new massage modalities"
  ],
  
  duration: "60-90 minutes",
  priceRange: "$30-$80 USD / 300,000-800,000 IDR in Bali",
  
  whatToExpect: `<p>During your Thermal Stone Massage session, you'll experience a carefully designed treatment protocol tailored to your individual needs. The therapist will begin with an assessment and consultation to understand your specific concerns and goals.</p>
  
  <p>The session will incorporate specialized techniques unique to this modality, creating a therapeutic experience that addresses both physical and energetic aspects of healing. You can expect to feel relaxed, rejuvenated, and supported throughout the treatment.</p>`,
  
  comparisonTitle: "How Thermal Stone Massage Compares to Other Massage Types",
  comparisonText: "Thermal Stone Massage offers a unique approach that distinguishes it from traditional massage modalities. This specialized treatment focuses on specific therapeutic outcomes through targeted techniques and protocols.",
  
  contraindications: "Consult with your healthcare provider before receiving Thermal Stone Massage if you have any medical conditions, are pregnant, or have recently undergone surgery. Always inform your therapist about any health concerns.",
  
  faqs: [
    {
      question: "What makes Thermal Stone Massage different from other massage types?",
      answer: "Systematic application of heated and cooled stones during massage improving circulation, reducing inflammation, and providing deep tissue work through thermal therapy. This specialized approach offers unique benefits that distinguish it from more traditional massage modalities."
    },
    {
      question: "How long does a Thermal Stone Massage session typically last?",
      answer: "Most Thermal Stone Massage sessions last between 60-90 minutes, allowing sufficient time for a comprehensive treatment that addresses your specific needs and goals."
    },
    {
      question: "Is Thermal Stone Massage suitable for everyone?",
      answer: "While Thermal Stone Massage can benefit many people, it's important to consult with a qualified therapist to determine if this treatment is appropriate for your individual health situation and goals."
    }
  ],
  
  ctaText: "Discover qualified practitioners offering Thermal Stone Massage throughout Bali. Find the perfect therapist to experience this unique therapeutic modality.",
  
  competitors: [
    {
      name: "Bali Wellness Centers",
      description: "Offers Thermal Stone Massage as part of comprehensive wellness programs, emphasizing therapeutic benefits and professional expertise."
    }
  ]
};

export default function ThermalStoneMassage() {
  return <MassageTypeTemplate data={thermalstonemassageData} />;
}
