// Complete list of all treatments with their descriptions
export interface Treatment {
  name: string;
  slug: string;
  description: string;
  category: string;
}

export const ALL_TREATMENTS: Treatment[] = [
  {
    name: "Fire Cupping",
    slug: "fire-cupping",
    description: "Traditional therapy using flame to create suction in glass cups placed on skin, increasing blood flow and releasing fascial restrictions.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Foot Massage",
    slug: "foot-massage",
    description: "Concentrated work on feet using various techniques to relieve tension, improve circulation, address reflexology points, and promote overall relaxation and wellbeing.",
    category: "Reflexology & Wellness"
  },
  {
    name: "Four-Hand Massage",
    slug: "four-hand-massage",
    description: "Two therapists work simultaneously on one person creating choreographed, flowing experience with doubled sensation, deeper relaxation, and enhanced therapeutic benefits.",
    category: "Luxury & Specialty"
  },
  {
    name: "Friction Massage",
    slug: "friction-massage",
    description: "Deep circular or transverse movements generating heat, breaking down adhesions, improving circulation, and treating chronic tendon and ligament injuries effectively.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Geriatric Massage",
    slug: "geriatric-massage",
    description: "Gentle techniques adapted for elderly clients addressing age-related conditions, improving circulation, maintaining mobility, reducing pain, and enhancing quality of life.",
    category: "Specialized & Therapeutic"
  },
  {
    name: "Graston Technique",
    slug: "graston-technique",
    description: "Instrument-assisted soft tissue mobilization using stainless steel tools to detect and treat fascial restrictions, scar tissue, and chronic inflammation patterns.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Hammam Massage",
    slug: "hammam-massage",
    description: "Traditional Middle Eastern bath house treatment combining steam, exfoliation, soap massage, and relaxation promoting deep cleansing and cultural wellness experience.",
    category: "Traditional & Cultural"
  },
  {
    name: "Hand Massage",
    slug: "hand-massage",
    description: "Focused treatment on hands, wrists, and forearms relieving repetitive strain, arthritis pain, improving flexibility, and providing relaxation through accessible contact.",
    category: "Therapeutic & Wellness"
  },
  {
    name: "Hawaiian Temple Style Lomi Lomi",
    slug: "hawaiian-temple-style-lomi-lomi",
    description: "Sacred healing practice incorporating prayer, intention, and intuitive flowing movements to restore harmony between body, mind, spirit, and environment.",
    category: "Traditional & Spiritual"
  },
  {
    name: "Healing Touch Massage",
    slug: "healing-touch-massage",
    description: "Energy therapy using gentle touch to influence body's energy system, supporting physical, emotional, mental, and spiritual health through biofield balancing.",
    category: "Energy Work & Holistic"
  },
  {
    name: "Hilot Massage",
    slug: "hilot-massage",
    description: "Traditional Filipino healing art using banana leaves, warm compresses, and manipulation techniques to treat musculoskeletal problems and restore body balance.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Honey Massage",
    slug: "honey-massage",
    description: "Uses pure honey as massage medium, drawing out toxins, improving skin texture, increasing circulation, and providing antibacterial benefits during rhythmic application.",
    category: "Specialty & Wellness"
  },
  {
    name: "Hydrotherapy Massage",
    slug: "hydrotherapy-massage",
    description: "Performed in or with water using jets, underwater massage, or aquatic bodywork to reduce gravity's effects and enhance therapeutic benefits.",
    category: "Specialty & Therapeutic"
  },
  {
    name: "Infant Massage",
    slug: "infant-massage",
    description: "Gentle techniques teaching parents to massage babies, promoting bonding, relieving colic, improving sleep, supporting development, and reducing parental stress.",
    category: "Specialized & Wellness"
  },
  {
    name: "Integrated Manual Therapy",
    slug: "integrated-manual-therapy",
    description: "Combines multiple modalities including myofascial release, craniosacral therapy, visceral manipulation, and lymphatic drainage for comprehensive treatment addressing whole person.",
    category: "Holistic & Therapeutic"
  },
  {
    name: "Integrative Massage",
    slug: "integrative-massage",
    description: "Customized treatment drawing from multiple techniques and modalities, tailored to individual client's specific needs, preferences, and therapeutic goals each session.",
    category: "Holistic & Customized"
  },
  {
    name: "Intraoral Massage",
    slug: "intraoral-massage",
    description: "Therapist works inside mouth addressing jaw muscles, TMJ dysfunction, headaches, and facial pain through gloved manual therapy of internal structures.",
    category: "Specialized & Therapeutic"
  },
  {
    name: "Jin Shin Jyutsu",
    slug: "jin-shin-jyutsu",
    description: "Japanese healing art using gentle finger pressure on specific points along energy pathways to balance body's vital energy and promote healing.",
    category: "Energy Work & Traditional"
  },
  {
    name: "Kahuna Massage",
    slug: "kahuna-massage",
    description: "Ancient Hawaiian healing tradition incorporating prayer, dance-like movements, joint mobilization, and deep tissue work for physical and spiritual transformation.",
    category: "Traditional & Spiritual"
  },
  {
    name: "Kalaripayattu Massage",
    slug: "kalaripayattu-massage",
    description: "Traditional Kerala martial arts massage using feet to deliver deep pressure, improve flexibility, strengthen muscles, and promote warrior physical conditioning.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Kati Basti",
    slug: "kati-basti",
    description: "Ayurvedic treatment creating warm oil reservoir on lower back using dough dam, relieving chronic back pain and nourishing spinal tissues.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Kinetic Chain Release",
    slug: "kinetic-chain-release",
    description: "Gentle protocol using specific positions and gentle stretches to release compensatory patterns throughout body's interconnected movement system naturally.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Kneading Massage",
    slug: "kneading-massage",
    description: "Rhythmic lifting, squeezing, and rolling of muscles promoting circulation, reducing adhesions, and releasing muscle tension through compression and lifting.",
    category: "Therapeutic & Wellness"
  },
  {
    name: "Korean Hand Therapy",
    slug: "korean-hand-therapy",
    description: "Microsystem therapy treating entire body through reflex points on hands, using seeds, magnets, or pressure for pain relief and healing.",
    category: "Traditional & Reflexology"
  },
  {
    name: "Kundalini Massage",
    slug: "kundalini-massage",
    description: "Integrates energy work with bodywork to awaken dormant spiritual energy at spine's base, promoting consciousness expansion and energetic release.",
    category: "Energy Work & Spiritual"
  },
  {
    name: "La Stone Therapy",
    slug: "la-stone-therapy",
    description: "Comprehensive hot and cold stone massage system combining thermotherapy with Swedish techniques, chakra balancing, and deep tissue work systematically.",
    category: "Specialty & Holistic"
  },
  {
    name: "Laotian Massage",
    slug: "laotian-massage",
    description: "Traditional Southeast Asian bodywork combining stretching, acupressure, and compression techniques performed on mat, promoting flexibility and energy flow.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Lavender Oil Massage",
    slug: "lavender-oil-massage",
    description: "Aromatherapy massage using lavender essential oil known for calming properties, promoting deep relaxation, reducing anxiety, and improving sleep quality.",
    category: "Aromatherapy & Wellness"
  },
  {
    name: "Leg Massage",
    slug: "leg-massage",
    description: "Focused treatment on legs addressing circulation, muscle fatigue, restless legs, edema, and providing relief for standing professionals and athletes.",
    category: "Therapeutic & Wellness"
  },
  {
    name: "Lomilomi Pohaku",
    slug: "lomilomi-pohaku",
    description: "Traditional Hawaiian stone massage using heated volcanic rocks to deliver deep tissue work combined with spiritual healing elements and intentions.",
    category: "Traditional & Specialty"
  },
  {
    name: "Low-Level Laser Massage",
    slug: "low-level-laser-massage",
    description: "Combines massage with therapeutic laser light reducing inflammation, accelerating healing, and providing pain relief for injuries and chronic conditions.",
    category: "Therapeutic & Technology"
  },
  {
    name: "Lymph Massage",
    slug: "lymph-massage",
    description: "Gentle rhythmic technique following lymphatic system pathways, supporting immune function, reducing swelling, and promoting detoxification throughout entire body.",
    category: "Therapeutic & Wellness"
  },
  {
    name: "Makko-Ho Massage",
    slug: "makko-ho-massage",
    description: "Japanese stretching technique combined with massage working along meridians to balance energy, improve flexibility, and promote organ health naturally.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Marnitz Therapy",
    slug: "marnitz-therapy",
    description: "German manual therapy combining specific massage techniques with active and passive movements addressing internal organs through external fascial manipulation systematically.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Massage Envy Style",
    slug: "massage-envy-style",
    description: "Franchise model offering affordable membership-based therapeutic massage combining Swedish, deep tissue, and personalized techniques in convenient spa-like settings.",
    category: "Therapeutic & Wellness"
  },
  {
    name: "Medical Qi Gong Massage",
    slug: "medical-qi-gong-massage",
    description: "Traditional Chinese medicine combining Qi Gong energy cultivation with massage techniques, balancing vital energy and treating illness through energetic manipulation.",
    category: "Traditional & Energy Work"
  },
  {
    name: "Meridian Massage",
    slug: "meridian-massage",
    description: "Works along traditional Chinese medicine energy pathways using various pressure and stroking techniques to balance Qi flow and promote organ health.",
    category: "Traditional & Energy Work"
  },
  {
    name: "Migraine Relief Massage",
    slug: "migraine-relief-massage",
    description: "Specialized head, neck, shoulder, and facial techniques addressing trigger points and tension patterns contributing to migraine headaches and frequency reduction.",
    category: "Specialized & Therapeutic"
  },
  {
    name: "Mobilization Massage",
    slug: "mobilization-massage",
    description: "Incorporates joint mobilization techniques with soft tissue work, improving range of motion, reducing stiffness, and restoring proper movement patterns safely.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Mother Roasting",
    slug: "mother-roasting",
    description: "Traditional Korean postpartum care combining heat therapy, massage, and binding to support recovery, milk production, and new mother wellbeing.",
    category: "Traditional & Specialized"
  },
  {
    name: "Moxibustion Massage",
    slug: "moxibustion-massage",
    description: "Combines burning mugwort herb near acupuncture points with massage techniques, warming meridians, improving circulation, and promoting healing in traditional medicine.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Muscle Energy Technique",
    slug: "muscle-energy-technique",
    description: "Osteopathic manual therapy using patient's muscle contractions against controlled resistance to restore normal range of motion and reduce pain.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Nadi Vigyan Massage",
    slug: "nadi-vigyan-massage",
    description: "Ayurvedic pulse diagnosis combined with massage therapy, identifying imbalances through pulse reading and treating with customized techniques and herbal oils.",
    category: "Traditional & Holistic"
  },
  {
    name: "Naga Massage",
    slug: "naga-massage",
    description: "Thai-influenced technique using practitioner's forearms delivering broad, deep pressure while incorporating stretching and compression for profound muscle release and relaxation.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Nuat Phaen Boran",
    slug: "nuat-phaen-boran",
    description: "Traditional Thai massage ancient name, emphasizing classical approach working along energy lines with assisted yoga postures on mat systematically.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Nursing Massage",
    slug: "nursing-massage",
    description: "Specialized techniques for breastfeeding mothers addressing blocked ducts, engorgement, mastitis prevention, and promoting healthy milk flow and breast tissue.",
    category: "Specialized & Therapeutic"
  },
  {
    name: "Oiled Massage",
    slug: "oiled-massage",
    description: "Full-body massage using warm medicated oils selected for dosha type, promoting detoxification, nourishment, relaxation, and balancing body energies.",
    category: "Traditional & Wellness"
  },
  {
    name: "Osteopathic Manipulative Treatment",
    slug: "osteopathic-manipulative-treatment",
    description: "Hands-on technique used by osteopathic physicians diagnosing, treating, and preventing illness through manipulation of musculoskeletal system affecting whole body.",
    category: "Therapeutic & Medical"
  },
  {
    name: "Palming",
    slug: "palming",
    description: "Gentle massage technique using palm of hand providing broad sustained pressure, warmth, and nurturing contact for sensitive areas or relaxation.",
    category: "Gentle & Wellness"
  },
  {
    name: "Passive Movement Therapy",
    slug: "passive-movement-therapy",
    description: "Therapist moves client's body parts through range of motion without client effort, improving flexibility, reducing stiffness, maintaining joint health.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Pediatric Massage",
    slug: "pediatric-massage",
    description: "Age-appropriate techniques for children addressing growing pains, sports injuries, anxiety, sensory processing issues, and promoting healthy development and relaxation.",
    category: "Specialized & Therapeutic"
  },
  {
    name: "Percussion Massage",
    slug: "percussion-massage",
    description: "Rhythmic tapping, cupping, hacking movements stimulating muscles, improving circulation, loosening congestion, and energizing body through vibration and movement.",
    category: "Therapeutic & Wellness"
  },
  {
    name: "Perineal Massage",
    slug: "perineal-massage",
    description: "Gentle stretching and massage of perineum during pregnancy preparing tissues for childbirth, potentially reducing tearing and episiotomy need.",
    category: "Specialized & Therapeutic"
  },
  {
    name: "Pet Massage",
    slug: "pet-massage",
    description: "Specialized techniques for dogs, cats, and other animals reducing anxiety, improving circulation, enhancing bond, and supporting overall pet health.",
    category: "Specialized & Wellness"
  },
  {
    name: "Pinch and Roll Massage",
    slug: "pinch-and-roll-massage",
    description: "Technique grasping skin and underlying tissue, rolling between fingers to release fascial adhesions, improve circulation, and reduce cellulite appearance.",
    category: "Therapeutic & Wellness"
  },
  {
    name: "Pinda Sweda",
    slug: "pinda-sweda",
    description: "Ayurvedic massage using warm herbal poultices pounded over body rhythmically, inducing sweating, reducing inflammation, and treating musculoskeletal conditions effectively.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Plantar Fasciitis Massage",
    slug: "plantar-fasciitis-massage",
    description: "Targeted foot massage addressing heel and arch pain through specific techniques releasing plantar fascia tension and reducing inflammation naturally.",
    category: "Specialized & Therapeutic"
  },
  {
    name: "Positional Release Therapy",
    slug: "positional-release-therapy",
    description: "Gentle technique placing body in comfortable position reducing pain, holding until tissue releases, treating trigger points and muscle spasms effectively.",
    category: "Therapeutic & Gentle"
  },
  {
    name: "Post-Surgical Massage",
    slug: "post-surgical-massage",
    description: "Specialized gentle techniques supporting recovery after surgery, reducing swelling, minimizing scar tissue, improving circulation, and managing pain appropriately.",
    category: "Specialized & Therapeutic"
  },
  {
    name: "Postpartum Abdominal Massage",
    slug: "postpartum-abdominal-massage",
    description: "Traditional techniques supporting uterine involution, strengthening abdominal muscles, reducing swelling, and promoting recovery after childbirth through gentle manipulation.",
    category: "Traditional & Specialized"
  },
  {
    name: "Poultice Massage",
    slug: "poultice-massage",
    description: "Uses heated herbal compresses during massage delivering therapeutic plant properties, warmth, and moisture to muscles and joints for healing.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Pregnancy Acupressure",
    slug: "pregnancy-acupressure",
    description: "Gentle pressure applied to specific points safe during pregnancy, reducing nausea, back pain, swelling, and preparing body for labor.",
    category: "Specialized & Therapeutic"
  },
  {
    name: "Pressure Point Massage",
    slug: "pressure-point-massage",
    description: "Focuses on specific tender spots in muscles that refer pain elsewhere, holding sustained pressure until release occurs reducing chronic pain.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Pulsing Therapy",
    slug: "pulsing-therapy",
    description: "Gentle rhythmic rocking movements applied to body promoting deep relaxation, releasing holding patterns, and supporting energetic balance through wave-like motions.",
    category: "Energy Work & Gentle"
  },
  {
    name: "Qi Healing Massage",
    slug: "qi-healing-massage",
    description: "Traditional Chinese technique channeling healing Qi energy through practitioner's hands during massage, balancing body's vital energy and promoting natural healing.",
    category: "Traditional & Energy Work"
  },
  {
    name: "Quantum Touch Massage",
    slug: "quantum-touch-massage",
    description: "Energy healing combined with light touch massage using breathing and body awareness techniques to amplify life-force energy promoting accelerated healing.",
    category: "Energy Work & Holistic"
  },
  {
    name: "Raindrop Therapy",
    slug: "raindrop-therapy",
    description: "Specialized aromatherapy technique dropping therapeutic-grade essential oils along spine, followed by massage promoting detoxification, immune support, and energetic balance.",
    category: "Aromatherapy & Energy Work"
  },
  {
    name: "Rapid Neurofascial Reset",
    slug: "rapid-neurofascial-reset",
    description: "Quick technique using specific neurological inputs to reset muscle tension, reduce pain, and restore range of motion through nerve-muscle communication.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Rasul Massage",
    slug: "rasul-massage",
    description: "Middle Eastern mud treatment combining mineral-rich mud application with steam therapy and massage, detoxifying, exfoliating, and deeply nourishing skin.",
    category: "Traditional & Specialty"
  },
  {
    name: "Reconstructive Therapy Massage",
    slug: "reconstructive-therapy-massage",
    description: "Addresses scar tissue and adhesions from surgery or injury using specific techniques promoting proper healing, reducing restrictions, and restoring function.",
    category: "Therapeutic & Specialized"
  },
  {
    name: "Rejuvenation Massage",
    slug: "rejuvenation-massage",
    description: "Anti-aging focused treatment combining lymphatic drainage, facial massage, and acupressure promoting collagen production, improving skin tone, and reducing stress signs.",
    category: "Specialty & Wellness"
  },
  {
    name: "Restorative Massage",
    slug: "restorative-massage",
    description: "Gentle nurturing techniques focusing on parasympathetic nervous system activation, deep relaxation, and supporting body's natural healing and recovery processes.",
    category: "Wellness & Gentle"
  },
  {
    name: "Rhythmic Massage",
    slug: "rhythmic-massage",
    description: "Uses consistent flowing rhythm throughout treatment creating meditative state, promoting deep relaxation, and addressing body's natural energetic rhythms therapeutically.",
    category: "Wellness & Energy Work"
  },
  {
    name: "Rosen Method Bodywork",
    slug: "rosen-method-bodywork",
    description: "Gentle touch combined with verbal dialogue accessing emotions held in muscular tension, supporting psychological integration and releasing unconscious holding patterns.",
    category: "Holistic & Psychosomatic"
  },
  {
    name: "Sacro-Occipital Technique",
    slug: "sacro-occipital-technique",
    description: "Chiropractic method using massage and wedge-shaped blocks under pelvis balancing craniosacral system and addressing pelvic dysfunction through positional therapy.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Salt Glow Massage",
    slug: "salt-glow-massage",
    description: "Exfoliating treatment using salt scrub removing dead skin followed by massage, improving circulation, skin texture, and promoting detoxification naturally.",
    category: "Specialty & Wellness"
  },
  {
    name: "Scalp Massage",
    slug: "scalp-massage",
    description: "Focuses on head using circular pressure promoting relaxation, improving hair health, relieving headaches, reducing stress, and stimulating blood circulation.",
    category: "Wellness & Therapeutic"
  },
  {
    name: "Scar Tissue Massage",
    slug: "scar-tissue-massage",
    description: "Specialized techniques breaking down adhesions, improving mobility, reducing appearance of scars, and promoting proper collagen alignment during healing process.",
    category: "Therapeutic & Specialized"
  },
  {
    name: "Seated Acupressure",
    slug: "seated-acupressure",
    description: "Chair-based treatment applying pressure to acupoints through clothing addressing energy meridians, relieving tension, and balancing Qi in accessible format.",
    category: "Traditional & Convenient"
  },
  {
    name: "Self-Massage",
    slug: "self-massage",
    description: "Techniques individuals perform on themselves using hands, tools, or devices for ongoing self-care, pain management, and wellness maintenance between professional sessions.",
    category: "Wellness & Education"
  },
  {
    name: "Sensory Massage",
    slug: "sensory-massage",
    description: "Adapted for individuals with autism, sensory processing disorders, or heightened sensitivities using predictable pressure, rhythm, and communication supporting nervous system regulation.",
    category: "Specialized & Therapeutic"
  },
  {
    name: "Senobi Massage",
    slug: "senobi-massage",
    description: "Japanese stretching massage promoting spine lengthening, improving posture, relieving back pain, and enhancing overall body alignment through gentle traction techniques.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Shantala Baby Massage",
    slug: "shantala-baby-massage",
    description: "Indian tradition teaching parents systematic massage strokes for infants promoting bonding, digestion, sleep, and neurological development through nurturing touch.",
    category: "Traditional & Specialized"
  },
  {
    name: "Shirodhara",
    slug: "shirodhara",
    description: "Ayurvedic treatment streaming warm oil across forehead in continuous flow inducing deep meditative state, calming mind, and balancing nervous system profoundly.",
    category: "Traditional & Spiritual"
  },
  {
    name: "Silicone Cupping",
    slug: "silicone-cupping",
    description: "Modern cupping using flexible silicone cups creating suction through squeezing, improving circulation, releasing fascial restrictions, and reducing muscle tension safely.",
    category: "Therapeutic & Modern"
  },
  {
    name: "Singing Bowl Massage",
    slug: "singing-bowl-massage",
    description: "Tibetan metal bowls placed on body creating vibrations and sound waves during massage, promoting deep relaxation and energetic balancing naturally.",
    category: "Energy Work & Specialty"
  },
  {
    name: "Skin Rolling",
    slug: "skin-rolling",
    description: "Technique lifting and rolling skin between fingers releasing superficial fascial adhesions, improving circulation, and enhancing lymphatic flow systematically across body.",
    category: "Therapeutic & Wellness"
  },
  {
    name: "Slow Stroke Massage",
    slug: "slow-stroke-massage",
    description: "Extremely slow, mindful strokes promoting parasympathetic activation, deep relaxation, reduced anxiety, and meditative state through deliberate unhurried touch.",
    category: "Wellness & Gentle"
  },
  {
    name: "Somatic Experiencing Massage",
    slug: "somatic-experiencing-massage",
    description: "Trauma-informed bodywork combining gentle touch with awareness practices helping resolve traumatic stress held in nervous system and body tissues.",
    category: "Holistic & Specialized"
  },
  {
    name: "Sound Therapy Massage",
    slug: "sound-therapy-massage",
    description: "Integrates healing sounds, vibrations, or music with massage techniques enhancing relaxation, reducing stress, and promoting energetic balance through sonic frequencies.",
    category: "Energy Work & Specialty"
  },
  {
    name: "Spa Massage",
    slug: "spa-massage",
    description: "General relaxation-focused treatments in spa settings combining various techniques, aromatherapy, ambiance, and pampering elements for stress relief and enjoyment.",
    category: "Wellness & Relaxation"
  },
  {
    name: "Spinal Touch Therapy",
    slug: "spinal-touch-therapy",
    description: "Gentle technique using light touch along spine detecting and correcting misalignments, promoting nervous system balance, and supporting body's self-healing abilities.",
    category: "Therapeutic & Gentle"
  },
  {
    name: "Sport-Specific Massage",
    slug: "sport-specific-massage",
    description: "Customized for particular sports addressing muscles used, common injuries, and performance needs of specific athletic activities like running, swimming, cycling.",
    category: "Therapeutic & Sports"
  },
  {
    name: "Strain-Counterstrain",
    slug: "strain-counterstrain",
    description: "Passive positional technique placing body in position of greatest comfort, holding until proprioceptive change occurs, treating painful tender points effectively.",
    category: "Therapeutic & Gentle"
  },
  {
    name: "Stress Relief Massage",
    slug: "stress-relief-massage",
    description: "General therapeutic approach combining techniques specifically addressing stress-related tension, promoting relaxation, reducing cortisol, and improving overall wellbeing significantly.",
    category: "Wellness & Therapeutic"
  },
  {
    name: "Stretching Massage",
    slug: "stretching-massage",
    description: "Combines passive stretching with massage techniques improving flexibility, range of motion, reducing muscle tightness, and enhancing overall movement quality.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Suboccipital Release",
    slug: "suboccipital-release",
    description: "Gentle sustained pressure on muscles at skull base relieving headaches, neck tension, and promoting craniosacral fluid flow and relaxation.",
    category: "Therapeutic & Specialized"
  },
  {
    name: "Suction Cup Massage",
    slug: "suction-cup-massage",
    description: "Uses cups creating vacuum suction on skin lifting tissues, improving circulation, releasing fascial adhesions, and reducing muscle tension effectively.",
    category: "Therapeutic & Wellness"
  },
  {
    name: "Swedish-Esalen Fusion",
    slug: "swedish-esalen-fusion",
    description: "Combines classic Swedish massage techniques with flowing Esalen style movements creating deeply relaxing yet therapeutically effective integrated approach.",
    category: "Wellness & Holistic"
  },
  {
    name: "Synergistic Massage",
    slug: "synergistic-massage",
    description: "Blends multiple modalities seamlessly within one session addressing various tissue layers, energy systems, and therapeutic goals for comprehensive holistic treatment.",
    category: "Holistic & Customized"
  },
  {
    name: "Table Thai Massage",
    slug: "table-thai-massage",
    description: "Adapts traditional Thai techniques for standard massage table making assisted stretches and compression more accessible while maintaining therapeutic effectiveness.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Tapas Acupressure Technique",
    slug: "tapas-acupressure-technique",
    description: "Gentle touch on specific facial points while focusing on issue creating energetic shift, reducing stress, and supporting emotional clearing.",
    category: "Energy Work & Facial"
  },
  {
    name: "Target-Specific Massage",
    slug: "target-specific-massage",
    description: "Focuses intensively on particular problem area, muscle group, or condition using appropriate techniques for concentrated therapeutic intervention and results.",
    category: "Therapeutic & Focused"
  },
  {
    name: "Tension Relief Massage",
    slug: "tension-relief-massage",
    description: "Addresses accumulated stress and tightness using combination of techniques relieving muscle tension, promoting relaxation, and restoring balance to body.",
    category: "Therapeutic & Wellness"
  },
  {
    name: "Thai Aromatherapy Massage",
    slug: "thai-aromatherapy-massage",
    description: "Combines traditional Thai techniques with aromatic essential oils applied through compresses, creating enhanced relaxation and therapeutic benefits synergistically.",
    category: "Traditional & Aromatherapy"
  },
  {
    name: "Thai Foot Massage",
    slug: "thai-foot-massage",
    description: "Traditional therapy using wooden stick and hands on feet, lower legs, and reflex points promoting circulation, relaxation, and organ health.",
    category: "Traditional & Reflexology"
  },
  {
    name: "Thai Herbal Compress Massage",
    slug: "thai-herbal-compress-massage",
    description: "Heated muslin balls filled with therapeutic herbs pressed and rolled on body releasing healing properties, warmth, reducing inflammation effectively.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Thai Oil Massage",
    slug: "thai-oil-massage",
    description: "Gentler version of traditional Thai massage incorporating oil allowing smooth gliding strokes combined with stretching and pressure point work.",
    category: "Traditional & Wellness"
  },
  {
    name: "Thai Tok Sen",
    slug: "thai-tok-sen",
    description: "Ancient northern Thai technique using wooden hammer and wedge tapping along energy lines releasing deep blockages and vibrating tissues therapeutically.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Therapeutic Massage",
    slug: "therapeutic-massage",
    description: "Medical-oriented approach addressing specific conditions, pain, or dysfunction using evidence-based techniques for measurable health outcomes and functional improvement.",
    category: "Therapeutic & Medical"
  },
  {
    name: "Therapeutic Touch",
    slug: "therapeutic-touch",
    description: "Energy therapy using hands held near body without physical contact, balancing energy field promoting healing, relaxation, and pain relief.",
    category: "Energy Work & Non-Contact"
  },
  {
    name: "Thermal Stone Massage",
    slug: "thermal-stone-massage",
    description: "Systematic application of heated and cooled stones during massage improving circulation, reducing inflammation, and providing deep tissue work through thermal therapy.",
    category: "Specialty & Therapeutic"
  },
  {
    name: "Tibetan Ku Nye Massage",
    slug: "tibetan-ku-nye-massage",
    description: "Ancient healing art combining massage, acupressure, and subtle energy work balancing wind, bile, and phlegm humors in Tibetan medicine tradition.",
    category: "Traditional & Holistic"
  },
  {
    name: "Tissue Mobilization",
    slug: "tissue-mobilization",
    description: "Systematic approach moving through fascial layers releasing restrictions, improving tissue glide, reducing adhesions, and restoring normal movement patterns throughout body.",
    category: "Therapeutic & Structural"
  },
  {
    name: "Token Ring Massage",
    slug: "token-ring-massage",
    description: "Uses small heated rings as massage tools delivering concentrated pressure and warmth to specific points, muscles, and energy pathways effectively.",
    category: "Traditional & Specialty"
  },
  {
    name: "Traditional Chinese Massage",
    slug: "traditional-chinese-massage",
    description: "Ancient healing system using rolling, kneading, pressing techniques along meridians balancing Qi, treating specific conditions, and promoting health.",
    category: "Traditional & Therapeutic"
  },
  {
    name: "Trager Psychophysical Integration",
    slug: "trager-psychophysical-integration",
    description: "Gentle rocking, cradling, and movement combined with Mentastics exercises releasing restrictive patterns, improving ease of movement, and enhancing body awareness.",
    category: "Holistic & Movement"
  },
  {
    name: "Transcutaneous Electrical Nerve Stimulation Massage",
    slug: "transcutaneous-electrical-nerve-stimulation-massage",
    description: "Combines TENS electrical stimulation with massage techniques blocking pain signals and promoting endorphin release for pain management.",
    category: "Therapeutic & Technology"
  },
  {
    name: "Trauma-Informed Massage",
    slug: "trauma-informed-massage",
    description: "Specialized approach ensuring safety, choice, and empowerment for trauma survivors through adapted techniques, communication, and awareness of triggers.",
    category: "Specialized & Holistic"
  },
  {
    name: "Trigger Point Dry Needling with Massage",
    slug: "trigger-point-dry-needling-with-massage",
    description: "Integrates acupuncture needles into trigger points followed by massage releasing muscle knots and referred pain patterns effectively.",
    category: "Therapeutic & Acupuncture"
  },
  {
    name: "Turkish Bath Massage",
    slug: "turkish-bath-massage",
    description: "Traditional hammam experience combining heat, scrubbing, foam washing, and massage cleansing body, improving circulation, and promoting deep relaxation.",
    category: "Traditional & Cultural"
  },
  {
    name: "Udvartana",
    slug: "udvartana",
    description: "Ayurvedic powder massage using herbal powders rubbed vigorously reducing cellulite, improving skin tone, stimulating lymphatic drainage, and supporting weight management.",
    category: "Traditional & Wellness"
  }
];
