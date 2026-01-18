import MassageTypeTemplate from "./MassageTypeTemplate";
import { MassageTypeData } from "@/data/massageTypes";

const lomilomipohakuData: MassageTypeData = {
  id: "lomilomi-pohaku",
  slug: "lomilomi-pohaku",
  name: "Lomilomi Pohaku",
  metaTitle: "Lomilomi Pohaku in Bali: Benefits, Techniques & Best Spas 2026",
  metaDescription: "Traditional Hawaiian stone massage using heated volcanic rocks to deliver deep tissue work combined with spiritual healing elements and intentions.",
  heroTitle: "Lomilomi Pohaku: Traditional Hawaiian stone massage using heated volcanic rocks to deliver deep tissue work combined with spiritual healing elements and intentions.",
  heroSubtitle: "Traditional Hawaiian stone massage using heated volcanic rocks to deliver deep tissue work combined with spiritual healing elements and intentions.",
  category: "Traditional & Specialty",
  
  introduction: `<p>Traditional Hawaiian stone massage using heated volcanic rocks to deliver deep tissue work combined with spiritual healing elements and intentions.</p>
  
  <p>This comprehensive treatment offers unique benefits for those seeking specialized therapeutic care. Whether you're addressing specific health concerns or simply exploring new wellness modalities, Lomilomi Pohaku provides a distinctive approach to healing and relaxation.</p>`,
  
  benefitsList: [
    "Provides targeted therapeutic benefits",
    "Promotes relaxation and stress relief",
    "Improves circulation and overall wellbeing",
    "Addresses specific health concerns effectively"
  ],
  
  techniquesDescription: `<p>Lomilomi Pohaku employs specialized techniques designed to deliver optimal therapeutic results:</p>
  
  <h3>Core Technique</h3>
  <p>Traditional Hawaiian stone massage using heated volcanic rocks to deliver deep tissue work combined with spiritual healing elements and intentions.</p>`,
  
  bestSuitedFor: [
    "Individuals seeking specialized therapeutic care",
    "Those with specific health conditions",
    "People interested in alternative wellness approaches",
    "Anyone looking to explore new massage modalities"
  ],
  
  duration: "60-90 minutes",
  priceRange: "$30-$80 USD / 300,000-800,000 IDR in Bali",
  
  whatToExpect: `<p>During your Lomilomi Pohaku session, you'll experience a carefully designed treatment protocol tailored to your individual needs. The therapist will begin with an assessment and consultation to understand your specific concerns and goals.</p>
  
  <p>The session will incorporate specialized techniques unique to this modality, creating a therapeutic experience that addresses both physical and energetic aspects of healing. You can expect to feel relaxed, rejuvenated, and supported throughout the treatment.</p>`,
  
  comparisonTitle: "How Lomilomi Pohaku Compares to Other Massage Types",
  comparisonText: "Lomilomi Pohaku offers a unique approach that distinguishes it from traditional massage modalities. This specialized treatment focuses on specific therapeutic outcomes through targeted techniques and protocols.",
  
  contraindications: "Consult with your healthcare provider before receiving Lomilomi Pohaku if you have any medical conditions, are pregnant, or have recently undergone surgery. Always inform your therapist about any health concerns.",
  
  faqs: [
    {
      question: "What makes Lomilomi Pohaku different from other massage types?",
      answer: "Traditional Hawaiian stone massage using heated volcanic rocks to deliver deep tissue work combined with spiritual healing elements and intentions. This specialized approach offers unique benefits that distinguish it from more traditional massage modalities."
    },
    {
      question: "How long does a Lomilomi Pohaku session typically last?",
      answer: "Most Lomilomi Pohaku sessions last between 60-90 minutes, allowing sufficient time for a comprehensive treatment that addresses your specific needs and goals."
    },
    {
      question: "Is Lomilomi Pohaku suitable for everyone?",
      answer: "While Lomilomi Pohaku can benefit many people, it's important to consult with a qualified therapist to determine if this treatment is appropriate for your individual health situation and goals."
    }
  ],
  
  ctaText: "Discover qualified practitioners offering Lomilomi Pohaku throughout Bali. Find the perfect therapist to experience this unique therapeutic modality.",
  
  competitors: [
    {
      name: "Bali Wellness Centers",
      description: "Offers Lomilomi Pohaku as part of comprehensive wellness programs, emphasizing therapeutic benefits and professional expertise."
    }
  ]
};

export default function LomilomiPohaku() {
  return <MassageTypeTemplate data={lomilomipohakuData} />;
}
