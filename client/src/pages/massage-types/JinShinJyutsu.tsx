import MassageTypeTemplate from "./MassageTypeTemplate";
import { MassageTypeData } from "@/data/massageTypes";

const jinshinjyutsuData: MassageTypeData = {
  id: "jin-shin-jyutsu",
  slug: "jin-shin-jyutsu",
  name: "Jin Shin Jyutsu",
  metaTitle: "Jin Shin Jyutsu in Bali: Benefits, Techniques & Best Spas 2026",
  metaDescription: "Japanese healing art using gentle finger pressure on specific points along energy pathways to balance body's vital energy and promote healing.",
  heroTitle: "Jin Shin Jyutsu: Japanese healing art using gentle finger pressure on specific points along energy pathways to balance body's vital energy and promote healing.",
  heroSubtitle: "Japanese healing art using gentle finger pressure on specific points along energy pathways to balance body's vital energy and promote healing.",
  category: "Energy Work & Traditional",
  
  introduction: `<p>Japanese healing art using gentle finger pressure on specific points along energy pathways to balance body's vital energy and promote healing.</p>
  
  <p>This comprehensive treatment offers unique benefits for those seeking specialized therapeutic care. Whether you're addressing specific health concerns or simply exploring new wellness modalities, Jin Shin Jyutsu provides a distinctive approach to healing and relaxation.</p>`,
  
  benefitsList: [
    "Provides targeted therapeutic benefits",
    "Promotes relaxation and stress relief",
    "Improves circulation and overall wellbeing",
    "Addresses specific health concerns effectively"
  ],
  
  techniquesDescription: `<p>Jin Shin Jyutsu employs specialized techniques designed to deliver optimal therapeutic results:</p>
  
  <h3>Core Technique</h3>
  <p>Japanese healing art using gentle finger pressure on specific points along energy pathways to balance body's vital energy and promote healing.</p>`,
  
  bestSuitedFor: [
    "Individuals seeking specialized therapeutic care",
    "Those with specific health conditions",
    "People interested in alternative wellness approaches",
    "Anyone looking to explore new massage modalities"
  ],
  
  duration: "60-90 minutes",
  priceRange: "$30-$80 USD / 300,000-800,000 IDR in Bali",
  
  whatToExpect: `<p>During your Jin Shin Jyutsu session, you'll experience a carefully designed treatment protocol tailored to your individual needs. The therapist will begin with an assessment and consultation to understand your specific concerns and goals.</p>
  
  <p>The session will incorporate specialized techniques unique to this modality, creating a therapeutic experience that addresses both physical and energetic aspects of healing. You can expect to feel relaxed, rejuvenated, and supported throughout the treatment.</p>`,
  
  comparisonTitle: "How Jin Shin Jyutsu Compares to Other Massage Types",
  comparisonText: "Jin Shin Jyutsu offers a unique approach that distinguishes it from traditional massage modalities. This specialized treatment focuses on specific therapeutic outcomes through targeted techniques and protocols.",
  
  contraindications: "Consult with your healthcare provider before receiving Jin Shin Jyutsu if you have any medical conditions, are pregnant, or have recently undergone surgery. Always inform your therapist about any health concerns.",
  
  faqs: [
    {
      question: "What makes Jin Shin Jyutsu different from other massage types?",
      answer: "Japanese healing art using gentle finger pressure on specific points along energy pathways to balance body's vital energy and promote healing. This specialized approach offers unique benefits that distinguish it from more traditional massage modalities."
    },
    {
      question: "How long does a Jin Shin Jyutsu session typically last?",
      answer: "Most Jin Shin Jyutsu sessions last between 60-90 minutes, allowing sufficient time for a comprehensive treatment that addresses your specific needs and goals."
    },
    {
      question: "Is Jin Shin Jyutsu suitable for everyone?",
      answer: "While Jin Shin Jyutsu can benefit many people, it's important to consult with a qualified therapist to determine if this treatment is appropriate for your individual health situation and goals."
    }
  ],
  
  ctaText: "Discover qualified practitioners offering Jin Shin Jyutsu throughout Bali. Find the perfect therapist to experience this unique therapeutic modality.",
  
  competitors: [
    {
      name: "Bali Wellness Centers",
      description: "Offers Jin Shin Jyutsu as part of comprehensive wellness programs, emphasizing therapeutic benefits and professional expertise."
    }
  ]
};

export default function JinShinJyutsu() {
  return <MassageTypeTemplate data={jinshinjyutsuData} />;
}
