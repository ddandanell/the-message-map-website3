import MassageTypeTemplate from "./MassageTypeTemplate";
import { MassageTypeData } from "@/data/massageTypes";

const fireCuppingData: MassageTypeData = {
  id: "fire-cupping",
  slug: "fire-cupping",
  name: "Fire Cupping",
  metaTitle: "Fire Cupping in Bali: Benefits, Techniques & Best Spas 2026",
  metaDescription: "Traditional therapy using flame to create suction in glass cups placed on skin, increasing blood flow and releasing fascial restrictions.",
  heroTitle: "Fire Cupping: Traditional Therapy for Deep Healing",
  heroSubtitle: "Traditional therapy using flame to create suction in glass cups placed on skin, increasing blood flow and releasing fascial restrictions.",
  category: "Traditional & Therapeutic",
  
  introduction: `<p>Fire cupping is an ancient therapeutic technique that has been practiced for thousands of years across various cultures, most notably in Traditional Chinese Medicine and Middle Eastern healing traditions. This distinctive treatment involves creating suction in glass or bamboo cups using flame, then placing them on the skin to draw blood to the surface, increase circulation, and release fascial restrictions.</p>

<p>The visual result—circular marks left on the skin—often surprises first-time recipients, but these marks are not bruises. They're evidence of increased blood flow and the release of toxins and stagnation from deeper tissue layers. Fire cupping works by creating negative pressure that lifts the skin and underlying fascia, promoting healing at a cellular level.</p>

<p>In Bali, fire cupping has gained popularity as both a standalone treatment and as part of comprehensive wellness programs. Many spas combine cupping with traditional Balinese massage or Thai massage for enhanced therapeutic benefits. The technique is particularly valued for addressing chronic pain, respiratory conditions, and promoting overall detoxification.</p>`,
  
  benefitsList: [
    "Increases local blood circulation and oxygen flow",
    "Releases fascial restrictions and muscle tension",
    "Promotes detoxification and waste removal",
    "Reduces pain and inflammation in affected areas",
    "Improves respiratory function and lung capacity",
    "Enhances skin health and appearance",
    "Stimulates the immune system naturally",
    "Provides deep relaxation and stress relief"
  ],
  
  techniquesDescription: `<p>Fire cupping employs several specialized techniques to achieve therapeutic results:</p>

<h3>Static Cupping</h3>
<p>Cups are placed on specific points and left in position for 5-15 minutes. This creates sustained suction that draws blood to the surface, releases fascial adhesions, and promotes healing. The therapist may place multiple cups simultaneously on different areas of the body.</p>

<h3>Moving Cupping (Sliding Cupping)</h3>
<p>Oil is applied to the skin first, then cups are moved across the body in gliding motions. This technique combines the benefits of cupping with massage-like movements, creating a unique therapeutic experience that addresses larger muscle groups and fascial planes.</p>

<h3>Flash Cupping</h3>
<p>Cups are quickly applied and removed repeatedly in the same area. This creates a pumping action that stimulates circulation and breaks up stagnation more aggressively than static cupping.</p>

<h3>Wet Cupping (Hijama)</h3>
<p>After initial cupping, small incisions are made and cups are reapplied to draw out small amounts of blood. This traditional technique is used for specific therapeutic purposes and should only be performed by highly trained practitioners.</p>`,
  
  bestSuitedFor: [
    "Individuals with chronic muscle tension and pain",
    "People experiencing respiratory conditions",
    "Those seeking detoxification and improved circulation",
    "Athletes recovering from intense training",
    "Individuals with fascial restrictions",
    "People with poor circulation",
    "Those interested in traditional healing modalities"
  ],
  
  duration: "30-60 minutes (often combined with massage for 90-minute sessions)",
  priceRange: "$25-$60 USD / 250,000-600,000 IDR in Bali",
  
  whatToExpect: `<p>Your fire cupping session begins with a consultation where the therapist assesses your needs and explains the process. You'll be asked to lie face-down on a massage table, and the therapist will apply oil to your back or other treatment areas.</p>

<p>The therapist ignites a cotton ball soaked in alcohol, quickly places it inside a glass cup to create vacuum, then immediately applies the cup to your skin. You'll feel a strong suction sensation—initially intense but typically becoming comfortable within moments. Multiple cups may be placed across your back, shoulders, or other areas.</p>

<p>During static cupping, you'll rest with the cups in place for 5-15 minutes. For moving cupping, the therapist will glide the cups across oiled skin. The sensation is unique—a combination of suction, warmth, and gentle pulling that many find deeply relaxing.</p>

<p>After removal, you may notice circular marks ranging from light pink to deep red or purple. These marks typically fade within 3-7 days and indicate the depth of stagnation released. The treatment area may feel warm and slightly sensitive, but most people experience immediate relief from tension and pain.</p>`,
  
  comparisonTitle: "Fire Cupping vs. Other Massage and Bodywork Techniques",
  comparisonText: "Fire cupping differs significantly from traditional massage in that it creates negative pressure rather than applying direct pressure to tissue. Unlike deep tissue massage that works muscles directly, cupping lifts tissue away from underlying structures, creating space and promoting circulation from within. Compared to acupuncture, cupping addresses larger areas and works with fascial planes rather than specific points. The technique complements massage beautifully—many therapists combine both for enhanced results.",
  
  contraindications: "Avoid fire cupping if you have open wounds, skin infections, severe varicose veins, or are taking blood-thinning medications. Pregnant women should avoid cupping on the abdomen and lower back. Those with heart conditions, high blood pressure, or bleeding disorders need medical clearance. Never apply cups over broken skin, rashes, or areas with recent surgery.",
  
  faqs: [
    {
      question: "Will fire cupping leave marks on my skin?",
      answer: "Yes, fire cupping typically leaves circular marks that range from light pink to deep red or purple. These are not bruises but evidence of increased blood flow and released stagnation. The marks usually fade within 3-7 days. Darker marks indicate deeper stagnation that has been released—this is actually a positive sign of effective treatment."
    },
    {
      question: "Does fire cupping hurt?",
      answer: "The initial suction sensation can feel intense, but most people find it becomes comfortable within moments. The sensation is more of a strong pulling or lifting feeling rather than pain. If discomfort is too intense, the therapist can adjust the suction. Many people find the treatment deeply relaxing once the cups are in place."
    },
    {
      question: "How often should I get fire cupping?",
      answer: "For chronic conditions, weekly sessions for 4-6 weeks provide optimal results, followed by monthly maintenance. For general wellness, monthly cupping sessions work well. Acute conditions may benefit from more frequent initial treatments. Always allow marks from previous sessions to fade before receiving cupping again in the same area."
    },
    {
      question: "Can fire cupping help with respiratory conditions?",
      answer: "Yes, fire cupping is particularly effective for respiratory conditions like asthma, bronchitis, and congestion. The technique applied to the back helps open the chest, improve lung function, and promote expectoration. Many people experience improved breathing immediately after treatment."
    }
  ],
  
  ctaText: "Experience the ancient healing power of fire cupping from qualified practitioners throughout Bali. Find therapists trained in traditional cupping techniques for safe, effective treatment.",
  
  competitors: [
    {
      name: "Traditional Chinese Medicine Clinics",
      description: "Offer fire cupping as part of comprehensive TCM treatments, emphasizing its role in balancing Qi and treating specific conditions according to traditional diagnosis."
    },
    {
      name: "Bali Wellness Spas",
      description: "Combine fire cupping with massage and other bodywork, marketing it as a detoxifying and therapeutic enhancement to traditional spa treatments."
    }
  ]
};

export default function FireCupping() {
  return <MassageTypeTemplate data={fireCuppingData} />;
}
