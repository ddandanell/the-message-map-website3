import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Share2, BookmarkPlus, Heart, Sparkles, CheckCircle, History, Leaf, Hand } from "lucide-react";
import spaInterior from '@assets/generated_images/professional_massage_therapy_room.png';
import detailImage from '@assets/generated_images/spa_oils_and_flowers_detail.png';
import heroImage from '@assets/generated_images/luxury_tropical_spa_in_bali.png';

export default function TraditionalBalineseMassage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/"><a className="hover:text-primary">Home</a></Link>
          <span>/</span>
          <Link href="/guides"><a className="hover:text-primary">Guides</a></Link>
          <span>/</span>
          <span className="text-foreground">Traditional Balinese Massage</span>
        </nav>

        <header className="mb-8">
          <Badge className="mb-4">Massage Types</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Traditional Balinese Massage: Complete Guide to History, Techniques & Benefits
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By Jessica Lim</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 3, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <BookmarkPlus className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </header>

        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
          <img
            src={spaInterior}
            alt="Traditional Balinese Massage Therapy Room"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Traditional Balinese massage, known locally as "Pijat Bali," is more than just a relaxation technique – it's an
            ancient healing art passed down through generations of Balinese healers. Combining gentle stretches, acupressure,
            aromatherapy, and reflexology principles, this holistic practice treats the body, mind, and spirit as interconnected
            elements requiring balance and harmony.
          </p>

          <p className="mb-6">
            If you've ever experienced a Balinese massage, you know the profound sense of wellbeing it creates. But understanding
            the history, philosophy, and techniques behind this practice deepens the experience and helps you know what to expect
            during your next treatment. This comprehensive guide covers everything from ancient origins to modern applications,
            what happens during a session, and how to find authentic Balinese massage in Bali.
          </p>

          <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 my-8 not-prose">
            <h3 className="font-bold text-lg text-teal-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              What Makes Balinese Massage Unique?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-teal-800">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span><strong>Holistic approach</strong> treating physical, emotional and spiritual wellbeing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span><strong>Gentle yet effective</strong> pressure suitable for most people</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span><strong>Aromatherapy oils</strong> using traditional Balinese essential blends</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span><strong>Acupressure points</strong> releasing energy blockages and tension</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
            <History className="w-8 h-8 text-primary" />
            Ancient Origins & Cultural Significance
          </h2>

          <p className="mb-6">
            Balinese massage traditions date back over 1,000 years, rooted in ancient Javanese healing practices brought to Bali
            through Indian, Chinese, and Ayurvedic influences. In traditional Balinese culture, massage wasn't a luxury spa treatment
            – it was essential healthcare practiced by village healers called "balian" or "dukun."
          </p>

          <p className="mb-6">
            These healers used massage combined with herbal medicines, prayer, and energy work to treat everything from muscle
            injuries to spiritual imbalances. Mothers would massage newborn babies daily to promote healthy growth. Farmers received
            massage after long days in the rice paddies to prevent injury and maintain strength. Dancers prepared for temple
            ceremonies with massage to achieve flexibility and grace.
          </p>

          <p className="mb-6">
            The philosophy behind traditional Balinese massage stems from the concept of "Tri Hita Karana" – three causes of wellbeing:
            harmony with God, harmony with other people, and harmony with nature. This holistic worldview sees physical ailments as
            manifestations of imbalance in one's life energy (known as "prana" or "shakti"). Massage helps restore the natural flow
            of energy through the body's channels called "nadis."
          </p>

          <div className="relative h-[300px] rounded-xl overflow-hidden my-8">
            <img
              src={heroImage}
              alt="Luxury tropical spa in Bali"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
            <Hand className="w-8 h-8 text-primary" />
            Techniques & Methods
          </h2>

          <p className="mb-6">
            Traditional Balinese massage employs a sophisticated combination of techniques, each serving a specific purpose in the
            healing process:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">1. Long Massage Strokes (Effleurage)</h3>
          <p className="mb-6">
            The foundation of Balinese massage uses slow, firm strokes along the muscles in the direction of blood flow toward the
            heart. These long, gliding movements warm the tissue, increase circulation, and promote lymphatic drainage. The rhythmic
            nature induces deep relaxation and helps identify areas of tension requiring more attention.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">2. Acupressure (Marma Point Stimulation)</h3>
          <p className="mb-6">
            Drawing from Ayurvedic traditions, therapists apply firm pressure to specific energy points throughout the body. These
            "marma points" are similar to acupuncture points in Traditional Chinese Medicine. Stimulating these points releases
            blocked energy, reduces pain, and promotes healing in corresponding organs and body systems. Common points include the
            temples (for headaches), between the eyebrows (for mental clarity), and along the spine (for nervous system balance).
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">3. Skin Rolling & Kneading</h3>
          <p className="mb-6">
            Therapists lift and roll the skin and underlying tissue between their fingers, breaking up fascial adhesions and
            stimulating blood flow to superficial layers. This technique is particularly effective for areas with reduced circulation
            or stiff connective tissue. The kneading motion resembles making bread dough – compressing and releasing muscle tissue
            to improve flexibility and reduce tension.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">4. Gentle Stretching (Yoga-Inspired)</h3>
          <p className="mb-6">
            Passive stretching techniques borrowed from yoga gently extend muscles and joints beyond their usual range of motion.
            The therapist may manipulate your arms, legs, neck, and spine through various positions while you remain relaxed. These
            stretches improve flexibility, release tension, and promote energy flow. Unlike active stretching, you don't need to do
            anything – just relax and let the therapist move your body.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">5. Palm & Thumb Pressure</h3>
          <p className="mb-6">
            Therapists use their palms, thumbs, and even forearms to apply varying degrees of pressure across large muscle groups.
            The heel of the palm creates broad, deep pressure perfect for the back and thighs. Thumbs allow precise work on smaller
            areas like the feet, hands, and along the spine. Experienced therapists can maintain consistent pressure for extended
            periods, creating a meditative rhythm.
          </p>

          <div className="relative h-[300px] rounded-xl overflow-hidden my-8">
            <img
              src={detailImage}
              alt="Spa treatment oils and flowers"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
            <Leaf className="w-8 h-8 text-primary" />
            Traditional Aromatherapy Oils
          </h2>

          <p className="mb-6">
            Essential oils are integral to authentic Balinese massage, chosen not just for pleasant scents but for specific
            therapeutic properties:
          </p>

          <div className="bg-white border border-border rounded-xl p-6 my-6">
            <h4 className="font-bold text-foreground mb-3">Common Traditional Oil Blends:</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">Frangipani:</span>
                <span>The signature Bali scent, deeply relaxing and stress-relieving. Often combined with coconut oil base.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">Lavender:</span>
                <span>Calming and sedative properties, excellent for anxiety, insomnia, and nervous tension.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">Sandalwood:</span>
                <span>Grounding and centering, used to promote mental clarity and spiritual awareness.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">Ylang Ylang:</span>
                <span>Sweet, floral scent with aphrodisiac qualities. Balances emotions and reduces blood pressure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">Ginger & Lemongrass:</span>
                <span>Warming and stimulating, perfect for muscle soreness, arthritis, and poor circulation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-foreground min-w-32">Eucalyptus & Mint:</span>
                <span>Cooling and refreshing, helps respiratory issues and provides an energizing effect.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
            <Heart className="w-8 h-8 text-primary" />
            Health Benefits & Therapeutic Effects
          </h2>

          <p className="mb-6">
            Research and centuries of traditional use support numerous health benefits from regular Balinese massage:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
              <h3 className="font-bold text-lg text-teal-900 mb-4">Physical Benefits</h3>
              <ul className="space-y-2 text-sm text-teal-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Improved blood circulation and lymphatic drainage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Reduced muscle tension and pain relief</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Enhanced flexibility and range of motion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Faster recovery from injuries and workouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Boosted immune system function</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Better sleep quality and duration</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
              <h3 className="font-bold text-lg text-purple-900 mb-4">Mental & Emotional Benefits</h3>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Significant stress and anxiety reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Lowered cortisol (stress hormone) levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Enhanced mood and emotional balance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Increased mental clarity and focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Greater body awareness and mindfulness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Relief from symptoms of depression</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">What to Expect During Your Session</h2>

          <p className="mb-6">
            Understanding the typical flow of a traditional Balinese massage helps you relax and fully enjoy the experience:
          </p>

          <div className="space-y-6 my-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Consultation (5-10 minutes)</h4>
                <p className="text-muted-foreground">
                  Your therapist will ask about health conditions, problem areas, and pressure preferences. Be honest about injuries,
                  pregnancy, or medical conditions. This is your chance to communicate specific needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Preparation (5 minutes)</h4>
                <p className="text-muted-foreground">
                  You'll be shown to a private room and given disposable underwear or asked to undress to your comfort level (most
                  people keep underwear on). The therapist will leave while you prepare and lie face-down on the massage table under a sheet.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Foot Ritual (5-10 minutes)</h4>
                <p className="text-muted-foreground">
                  Many sessions begin with a foot washing ceremony using warm water infused with flowers and essential oils. This
                  traditional ritual symbolizes cleansing and prepares you mentally for the treatment. Some spas include a brief foot
                  massage or scrub.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-foreground mb-2">The Massage (60-120 minutes)</h4>
                <p className="text-muted-foreground mb-3">
                  The therapist begins by applying warm oil and using long, flowing strokes to relax your body. The typical sequence:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                  <li>Back and shoulders (most time is spent here)</li>
                  <li>Arms and hands with stretching</li>
                  <li>Legs and feet with acupressure points</li>
                  <li>You flip over – face, scalp, and neck massage</li>
                  <li>Front of legs and arms</li>
                  <li>Gentle abdominal massage (optional)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Post-Treatment (5-10 minutes)</h4>
                <p className="text-muted-foreground">
                  After the massage, you'll be given time to rest and slowly return to awareness. Most spas serve herbal tea (usually
                  ginger or lemongrass) and allow you to use the shower facilities. Drink the tea – it helps flush toxins released
                  during massage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              💡 Pro Tip: Communication During Your Massage
            </h3>
            <p className="text-blue-800 text-sm mb-0">
              Don't hesitate to speak up if pressure is too light or too firm. Simply say "lebih keras" (more pressure) or "lebih
              pelan" (lighter pressure). Good therapists appreciate feedback and want you to have the best experience. Also, if you
              need to use the bathroom or feel uncomfortable, it's completely fine to pause the session.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Balinese Massage vs Other Massage Types</h2>

          <p className="mb-6">
            Understanding how Balinese massage compares to other popular modalities helps you choose the right treatment:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-4 text-left font-bold text-foreground border-b border-border">Type</th>
                  <th className="p-4 text-left font-bold text-foreground border-b border-border">Pressure</th>
                  <th className="p-4 text-left font-bold text-foreground border-b border-border">Techniques</th>
                  <th className="p-4 text-left font-bold text-foreground border-b border-border">Best For</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground">Balinese</td>
                  <td className="p-4 text-muted-foreground">Gentle to Medium</td>
                  <td className="p-4 text-muted-foreground">Long strokes, acupressure, stretching, aromatherapy</td>
                  <td className="p-4 text-muted-foreground">Relaxation, stress relief, overall wellness</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground">Swedish</td>
                  <td className="p-4 text-muted-foreground">Light to Medium</td>
                  <td className="p-4 text-muted-foreground">Five basic strokes, kneading, circular motions</td>
                  <td className="p-4 text-muted-foreground">First-time massage, gentle relaxation</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground">Thai</td>
                  <td className="p-4 text-muted-foreground">Medium to Firm</td>
                  <td className="p-4 text-muted-foreground">Yoga-like stretching, no oils, floor mat</td>
                  <td className="p-4 text-muted-foreground">Flexibility, energy boost, active therapy</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground">Deep Tissue</td>
                  <td className="p-4 text-muted-foreground">Firm to Very Firm</td>
                  <td className="p-4 text-muted-foreground">Slow, deep pressure on muscle layers</td>
                  <td className="p-4 text-muted-foreground">Chronic pain, muscle knots, injury recovery</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground">Hot Stone</td>
                  <td className="p-4 text-muted-foreground">Light to Medium</td>
                  <td className="p-4 text-muted-foreground">Heated stones, gentle gliding strokes</td>
                  <td className="p-4 text-muted-foreground">Deep relaxation, poor circulation, cold climates</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">How to Find Authentic Balinese Massage</h2>

          <p className="mb-6">
            Not all "Balinese massage" offerings are created equal. Here's how to identify authentic, quality treatments:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">✓ Signs of Authentic Quality</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>• Therapists trained in traditional Balinese techniques</li>
                <li>• Use of natural, aromatic essential oils</li>
                <li>• Clean, peaceful environment (even if simple)</li>
                <li>• Consultation about health and preferences</li>
                <li>• Foot washing or cleansing ritual included</li>
                <li>• Reasonable pricing (150k-600k IDR in 2026)</li>
                <li>• Professional draping and respect for boundaries</li>
                <li>• Post-treatment tea and relaxation time</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-red-900 mb-4">✗ Red Flags to Avoid</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li>• Extremely low prices (under 100k IDR)</li>
                <li>• Suggestive advertising or inappropriate behavior</li>
                <li>• Rushed treatment or lack of proper consultation</li>
                <li>• Dirty facilities or poor hygiene standards</li>
                <li>• Unlicensed or untrained "therapists"</li>
                <li>• Pressure to buy products or additional services</li>
                <li>• No established location or temporary setup</li>
                <li>• Therapists who don't speak about techniques used</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Frequently Asked Questions</h2>

          <div className="space-y-4 my-8">
            {[
              {
                q: "How often should I get Balinese massage?",
                a: "For general wellness, once a week to once a month is beneficial. If addressing specific issues like chronic pain or high stress, twice weekly sessions for 4-6 weeks can provide significant improvement. Listen to your body – some people thrive on weekly massage, while others prefer monthly treatments."
              },
              {
                q: "Is Balinese massage painful?",
                a: "Traditional Balinese massage uses gentle to medium pressure and should not be painful. You may experience some discomfort when the therapist works on areas with significant tension, but it should be a 'good pain' feeling. Always communicate if pressure is uncomfortable – good therapists will adjust immediately."
              },
              {
                q: "Can pregnant women get Balinese massage?",
                a: "Yes, but only after the first trimester and from therapists specifically trained in prenatal massage. Traditional Balinese culture has special massage protocols for pregnant women that focus on safer areas and gentler techniques. Always inform your therapist if you're pregnant."
              },
              {
                q: "What should I do after a Balinese massage?",
                a: "Drink plenty of water to help flush released toxins. Avoid alcohol, heavy meals, and intense exercise for a few hours. Many people feel slightly drowsy – this is normal and a good time to rest. The therapeutic effects can last 3-7 days, with benefits accumulating over regular sessions."
              },
              {
                q: "How is the pressure determined?",
                a: "Therapists assess your body type, muscle condition, and stated preferences. Generally, they start with medium pressure and adjust based on your feedback and how your muscles respond. Don't be shy about asking for adjustments – what feels perfect to one person might be too light or too firm for another."
              },
              {
                q: "Do I need to remove all my clothes?",
                a: "You'll be asked to undress to your comfort level. Most people remove all clothes except underwear and are covered with a sheet that's only moved to expose the area being worked on. You can keep undergarments or wear provided disposable underwear. Professional therapists maintain strict draping protocols."
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white border border-border rounded-lg p-5 group cursor-pointer">
                <summary className="font-bold text-foreground list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 mb-0 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Final Thoughts: Experiencing Authentic Balinese Healing</h2>

          <p className="mb-6">
            Traditional Balinese massage is far more than a tourist activity or spa indulgence – it's a genuine healing art that
            has sustained Balinese health and wellbeing for centuries. When you receive an authentic Balinese massage from a skilled
            practitioner, you're participating in an ancient tradition that honors the interconnection of body, mind, and spirit.
          </p>

          <p className="mb-6">
            The beauty of Balinese massage lies in its accessibility and gentleness. Unlike more intense modalities that might be
            intimidating for first-timers or uncomfortable for sensitive individuals, Balinese massage welcomes everyone. The
            combination of soothing aromatherapy, flowing strokes, and spiritual mindfulness creates an experience that nurtures
            on multiple levels.
          </p>

          <p className="mb-6">
            If you're visiting Bali, make traditional Balinese massage a priority in your itinerary. And if you're a resident,
            consider making it part of your regular self-care routine. The therapeutic benefits extend far beyond the treatment
            table, potentially improving your sleep, reducing stress levels, enhancing flexibility, and contributing to overall
            quality of life.
          </p>

          <p className="mb-8">
            Choose your spa carefully, communicate openly with your therapist, and allow yourself to fully surrender to the
            experience. In our fast-paced, high-stress modern world, the ancient wisdom of Balinese massage offers a pathway
            back to balance, presence, and deep relaxation – gifts that are truly priceless.
          </p>

          <div className="bg-gradient-to-br from-teal-50 to-purple-50 border border-teal-100 rounded-2xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">Ready to Experience Authentic Balinese Massage?</h3>
            <p className="text-teal-800 mb-6 max-w-2xl mx-auto">
              Browse our curated selection of verified spas offering traditional Balinese massage across all areas of Bali.
            </p>
            <Button size="lg" className="h-12 px-8">
              Find Traditional Balinese Massage Near You
            </Button>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <div className="flex items-start gap-4">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Jessica Lim"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h4 className="font-bold text-lg text-foreground mb-1">Jessica Lim</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Content Editor at The Massage Map. Jessica is a certified massage therapist and wellness researcher who
                  has studied traditional healing practices across Southeast Asia.
                </p>
                <div className="flex gap-3 text-sm">
                  <a href="#" className="text-primary hover:underline">More articles by Jessica</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/massage-types" className="text-primary hover:underline">Explore Massage Types</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
