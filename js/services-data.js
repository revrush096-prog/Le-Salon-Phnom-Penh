/**
 * Le Salon Phnom Penh - Service Catalogue Data
 * Parisian elegance meets modern Phnom Penh luxury.
 * Note: Prices are marked as 'Price available on request' per salon guidelines.
 */

const SALON_SERVICES = [
  // --- HAIR SERVICES ---
  {
    id: "haircut",
    name: "Precision Haircut",
    category: "hair",
    categoryLabel: "Hair Couture",
    shortDescription: "Modern cuts tailored to your personal facial architecture and natural hair movement.",
    fullDescription: "An architectural approach to hair design. Our precision haircuts begin with a diagnostic dialogue to understand your daily rhythm, personal aesthetic, and hair texture. Each cut is sculpted with deliberate Parisian precision to ensure effortless grow-out and timeless shape.",
    benefits: [
      "Tailored consultation analyzing bone structure and hair density",
      "Signature cleansing ritual and stress-relieving scalp preparation",
      "Bespoke cutting technique balancing weight, texture, and movement",
      "Blow-dry styling and personal maintenance styling recommendations"
    ],
    whatToExpect: [
      { step: "01. Consultation", detail: "A one-on-one discussion exploring your style preferences, texture, and maintenance goals." },
      { step: "02. Preparation", detail: "Sensory hair cleanse utilizing nourishing botanical formulations." },
      { step: "03. Precision Sculpting", detail: "Technical dry or wet cutting tailored specifically to your natural drape." },
      { step: "04. Refined Finish", detail: "Signature blowout finish demonstrating how to effortlessly recreate your look at home." }
    ],
    price: "Price available on request",
    duration: "Approx. 45 – 60 min",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["hair-styling", "hair-treatment", "blow-dry"]
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    category: "hair",
    categoryLabel: "Hair Couture",
    shortDescription: "Personalized styling designed around your look, evening occasions, or editorial appearances.",
    fullDescription: "From undone French waves to high-gloss architectural updos, our styling service crafts an elevated aesthetic for any moment. We combine heat-protecting elixirs with masterful touch to create long-lasting, touchable hair.",
    benefits: [
      "Custom thermal and volume styling suited to your event",
      "Weightless hold formulas providing natural bounce and luster",
      "Protection from Phnom Penh humidity with anti-frizz seals",
      "Complimentary accessory placement upon request"
    ],
    whatToExpect: [
      { step: "01. Aesthetic Alignment", detail: "Reviewing your attire, occasion, and desired movement." },
      { step: "02. Thermal Shielding", detail: "Application of premium heat defense serums and texture foundations." },
      { step: "03. Sculptural Styling", detail: "Curating waves, sleek forms, or bespoke updos with delicate artistry." },
      { step: "04. Long-Wear Setting", detail: "Weightless lacquer veil ensuring all-day confidence." }
    ],
    price: "Price available on request",
    duration: "Approx. 45 – 60 min",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["blow-dry", "special-occasion-styling", "haircut"]
  },
  {
    id: "blow-dry",
    name: "Signature Blow Dry",
    category: "hair",
    categoryLabel: "Hair Couture",
    shortDescription: "Voluminous, sleek, or textured blowout finishes crafted for polished everyday luxury.",
    fullDescription: "The ultimate Parisian salon ritual. Our signature blow dry delivers mirror-like gloss, root-lifted bounce, and seamless texture that elevates your everyday routine into a moment of pure indulgence.",
    benefits: [
      "Deep cleansing shampoo accompanied by restorative botanical conditioning",
      "Expert round-brush tension technique for durable root lift",
      "Anti-humidity shield designed for tropical elegance",
      "Silky softness with movement that lasts multiple days"
    ],
    whatToExpect: [
      { step: "01. Scalp Ritual", detail: "Invigorating cleanse followed by customized moisture therapy." },
      { step: "02. Priming", detail: "Distribution of lightweight smoothing tonics and root lifters." },
      { step: "03. Blowout Artistry", detail: "Hand-directed airflow creating smooth luster or effortless volume." },
      { step: "04. Finishing Elixir", detail: "Light-reflecting serum drop for luminous radiance." }
    ],
    price: "Price available on request",
    duration: "Approx. 40 – 50 min",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["hair-treatment", "hair-styling", "haircut"]
  },
  {
    id: "hair-color",
    name: "Professional Hair Color",
    category: "hair",
    categoryLabel: "Hair Couture",
    shortDescription: "Professional color services for a refined, multi-dimensional, and luminous new look.",
    fullDescription: "Harmonizing rich pigments with skin-tone chemistry. Whether deepening into velvety espresso, refreshing warm chestnut, or attaining seamless coverage, our salon colorists formulate exclusively with gentle, shine-enhancing conditioning color lines.",
    benefits: [
      "Custom shade consultation matched to complexion and eye undertones",
      "Gentle low-ammonia or ammonia-free formulation preserving hair integrity",
      "Complete grey coverage with radiant, multi-tonal reflection",
      "Post-color gloss treatment locking in pigment vibrancy"
    ],
    whatToExpect: [
      { step: "01. Color Diagnostic", detail: "Color chart analysis and strand assessment under natural lighting." },
      { step: "02. Precision Application", detail: "Zone-by-zone application ensuring uniform, vibrant coverage." },
      { step: "03. Color Lock & Basin Treatment", detail: "Acidic pH rinse to seal cuticles and optimize long-lasting shine." },
      { step: "04. Styled Reveal", detail: "Signature styling to illuminate the depth and nuances of your new shade." }
    ],
    price: "Price available on request",
    duration: "Approx. 90 – 120 min",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["balayage", "highlights", "hair-treatment"]
  },
  {
    id: "highlights",
    name: "Dimensional Highlights",
    category: "hair",
    categoryLabel: "Hair Couture",
    shortDescription: "Dimensional sun-kissed placement crafted to elevate tone, light, and movement.",
    fullDescription: "Delicate woven foils placed to catch natural light. Highlights at Le Salon are designed to accentuate the shape of your hair cut and add luminous depth without harsh lines or striations.",
    benefits: [
      "Micro-fine weaving techniques for seamless blend",
      "Customized toner treatment eliminating unwanted warm brassiness",
      "Bond-protecting additive infused in lightener to maintain hair strength",
      "Natural regrowth line allowing extended intervals between visits"
    ],
    whatToExpect: [
      { step: "01. Placement Mapping", detail: "Designing foil placement according to natural parting and hair fall." },
      { step: "02. Gentle Lightening", detail: "Bond-builder enriched lightening formula carefully monitored." },
      { step: "03. Bespoke Glaze", detail: "Custom glossing toner to curate champagne, pearlescent, or golden hues." },
      { step: "04. Nourishing Mask", detail: "Intensive lipid restoration prior to styling." }
    ],
    price: "Price available on request",
    duration: "Approx. 120 – 150 min",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["balayage", "hair-color", "hair-treatment"]
  },
  {
    id: "balayage",
    name: "French Balayage",
    category: "hair",
    categoryLabel: "Hair Couture",
    shortDescription: "Hand-painted seamless gradients with natural grow-out and Parisian subtlety.",
    fullDescription: "The quintessence of French hair artistry. Our master colorists freehand-paint ribbons of light through the mid-lengths and ends, creating a soft, sun-drenched luminescence that looks effortless, sophisticated, and completely bespoke.",
    benefits: [
      "Freehand artistic application mimicking natural sun-kissed highlights",
      "Ultra-soft transition at the root for low-maintenance longevity",
      "Custom gloss formulated to complement your complexion tone",
      "Preserves the organic health and vitality of your lengths"
    ],
    whatToExpect: [
      { step: "01. Color Architecture", detail: "Evaluating your natural base and determining gradation of lightness." },
      { step: "02. French Freehand Painting", detail: "Artisanal clay-lightener painting focused on contour ribbons." },
      { step: "03. Harmonizing Gloss", detail: "Refining tone with iridescent champagne or caramel gloss baths." },
      { step: "04. Editorial Style", detail: "Relaxed wave styling showcasing the luminous dimension." }
    ],
    price: "Price available on request",
    duration: "Approx. 150 – 180 min",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["hair-color", "highlights", "hair-treatment"]
  },
  {
    id: "hair-treatment",
    name: "Restorative Hair Treatment",
    category: "hair",
    categoryLabel: "Hair Couture",
    shortDescription: "Nourishing treatments designed to care deeply for your hair and scalp vitality.",
    fullDescription: "A transformative spa ritual for stressed, dry, or chemically processed strands. Concentrated botanical active ingredients, amino acids, and restorative oils are massaged deep into hair fibers under warm steam to restore elasticity, moisture, and mirror brilliance.",
    benefits: [
      "Repairs internal keratin bonds broken by heat and environmental stress",
      "Deeply hydrates and restores cuticle smoothness",
      "Calms and balances the scalp microbiome",
      "Provides noticeable softness and weightless resilience"
    ],
    whatToExpect: [
      { step: "01. Texture & Scalp Assessment", detail: "Microscopic analysis of hair porosity and scalp condition." },
      { step: "02. Purifying Pre-Cleanse", detail: "Gentle removal of mineral deposits, chlorine, and residue." },
      { step: "03. Warm Steam Infusion", detail: "Deep conditioning mask penetration enhanced by micro-mist." },
      { step: "04. Cold Shield Seal", detail: "Cold water seal locking nutrients into the cortex." }
    ],
    price: "Price available on request",
    duration: "Approx. 45 – 60 min",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["haircut", "blow-dry", "hair-color"]
  },
  {
    id: "special-occasion-styling",
    name: "Special Occasion Styling",
    category: "hair",
    categoryLabel: "Hair Couture",
    shortDescription: "Beautiful styling for important moments, galas, weddings, and celebrations.",
    fullDescription: "Created for memorable occasions where every angle matters. Our senior stylists curate romantic chignons, modern architectural pins, or cascading Hollywood waves that hold impeccably through the entire celebration.",
    benefits: [
      "Collaborative mood board session tailored to your outfit and accessories",
      "Architectural hold engineered for tropical climate endurance",
      "Complimentary trial consultation available prior to the event",
      "Dedicated tranquil private styling booth available"
    ],
    whatToExpect: [
      { step: "01. Occasion Preview", detail: "Reviewing neckline, accessories, veil, or event lighting." },
      { step: "02. Foundation Building", detail: "Texture prep to create durability and hold without stiffness." },
      { step: "03. Haute Coiffure", detail: "Detailed sculpting with precision pinning and shaping." },
      { step: "04. 360 Degree Check", detail: "Full mirror review from every perspective for absolute perfection." }
    ],
    price: "Price available on request",
    duration: "Approx. 60 – 90 min",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["hair-styling", "special-occasion-beauty", "blow-dry"]
  },

  // --- NAIL SERVICES ---
  {
    id: "manicure",
    name: "Classic Luxury Manicure",
    category: "nails",
    categoryLabel: "Nail Atelier",
    shortDescription: "Elegant nail care for a polished finish with delicate hand scrub and cuticle detailing.",
    fullDescription: "An indulgent hand sanctuary. Nails are meticulously shaped, cuticles refined with Parisian delicacy, and hands pampered with an organic exfoliating scrub and massage before a high-gloss lacquer finish.",
    benefits: [
      "Gentle European dry or warm bath cuticle refinement",
      "Organic hand polish with sweet almond and rosehip extracts",
      "Aromatherapy hand and forearm acupressure massage",
      "Long-wearing 10-free lacquer with chip-resistant top coat"
    ],
    whatToExpect: [
      { step: "01. Nail Shaping", detail: "Precision filing into almond, square, or oval symmetry." },
      { step: "02. Cuticle Care", detail: "Softening and gentle grooming without harsh cutting." },
      { step: "03. Hand Exfoliation", detail: "Warm towel wrap and restorative botanical hydration." },
      { step: "04. Lacquer Polish", detail: "Base shield, dual pigment coats, and mirror-finish gloss." }
    ],
    price: "Price available on request",
    duration: "Approx. 45 min",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["pedicure", "gel-nails", "nail-art"]
  },
  {
    id: "pedicure",
    name: "Restorative Spa Pedicure",
    category: "nails",
    categoryLabel: "Nail Atelier",
    shortDescription: "Restorative foot ritual and immaculate cuticle detailing in a peaceful setting.",
    fullDescription: "Escape into comfort. Settle into our plush lounge while your feet enjoy an aromatherapy magnesium soak, delicate callus smoothing, invigorating organic salt scrub, and an ultra-relaxing massage followed by pristine nail painting.",
    benefits: [
      "Aromatherapy soak infused with essential lavender and cypress oils",
      "Gentle dual-grit foot buffing restoring silky softness",
      "Extensive reflex-point foot and lower calf massage",
      "Flawlessly painted toes with long-lasting high shine"
    ],
    whatToExpect: [
      { step: "01. Botanical Soak", detail: "Warm magnesium bath calming tiredness and softening skin." },
      { step: "02. Foot Smoothing", detail: "Precision heel smoothing and revitalizing scrub." },
      { step: "03. Deep Hydration", detail: "Rich shea butter massage addressing tension points." },
      { step: "04. Precision Finish", detail: "Perfect toe polish application with rapid drying drops." }
    ],
    price: "Price available on request",
    duration: "Approx. 60 min",
    image: "https://images.unsplash.com/photo-1519014816548-bf785179c2ff?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["manicure", "gel-nails", "nail-art"]
  },
  {
    id: "gel-nails",
    name: "Long-Wear Gel Nails",
    category: "nails",
    categoryLabel: "Nail Atelier",
    shortDescription: "Long-wearing high-gloss gel application with gentle, damage-free removal.",
    fullDescription: "Combining the longevity of modern gel systems with our salon’s priority for natural nail health. Enjoy up to 3 weeks of high-shine, chip-free color cured under safe LED light, with zero dry time.",
    benefits: [
      "Ultra-durable, zero dry time finish with high-gloss mirror shine",
      "Formulated without harmful toxins, prioritizing the natural nail bed",
      "Extensive palette of Parisian neutrals, bold reds, and modern accents",
      "Gentle removal protocols ensuring no nail thinning or damage"
    ],
    whatToExpect: [
      { step: "01. Nail Bed Prep", detail: "Meticulous surface decontamination and dehydration." },
      { step: "02. Protective Base", detail: "Keratin-friendly base gel cured under cool LED." },
      { step: "03. Rich Color Layers", detail: "Two coats of pigmented gel color with precision edge capping." },
      { step: "04. Glass Top Coat", detail: "High-shine scratch-proof sealant and nourishing cuticle elixir." }
    ],
    price: "Price available on request",
    duration: "Approx. 60 min",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["nail-art", "manicure", "pedicure"]
  },
  {
    id: "nail-art",
    name: "Bespoke Editorial Nail Art",
    category: "nails",
    categoryLabel: "Nail Atelier",
    shortDescription: "Creative details designed to complement your style with subtle minimalist elegance.",
    fullDescription: "Understated luxury at your fingertips. We specialize in micro French tips, minimalist chrome accents, fine-line geometric work, and negative space aesthetics that speak volumes through restraint and craftsmanship.",
    benefits: [
      "Hand-painted custom designs tailored to your aesthetic",
      "High-precision fine line brushes and premium Japanese pigments",
      "Understated editorial elegance suitable for professional and social events",
      "Encapsulated protective gel finish preserving intricate details"
    ],
    whatToExpect: [
      { step: "01. Design Consultation", detail: "Selecting art motifs, chrome powders, or fine lines." },
      { step: "02. Canvas Prep", detail: "Immaculate manicure foundation and base color application." },
      { step: "03. Hand Artistry", detail: "Micro-brush painting and precision placement of accents." },
      { step: "04. Encapsulation", detail: "Smooth clear gel top layer locking in your custom art." }
    ],
    price: "Price available on request",
    duration: "Approx. 60 – 75 min",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["gel-nails", "manicure", "pedicure"]
  },

  // --- BEAUTY SERVICES ---
  {
    id: "beauty-treatments",
    name: "Personal Beauty Treatments",
    category: "beauty",
    categoryLabel: "Beauty Rituals",
    shortDescription: "Personal beauty experiences in a relaxing environment tailored to skin vitality.",
    fullDescription: "A serene sensory oasis in the heart of Phnom Penh. Our curated beauty rituals focus on skin revival, lymphatic facial drainage, and deep relaxation using gentle clean cosmetic formulations.",
    benefits: [
      "Customized botanical skincare rituals targeting glow and hydration",
      "Facial sculpting techniques promoting lymphatic drainage",
      "Serene private treatment suite with ambient soundscapes",
      "Restores radiance under tropical climatic conditions"
    ],
    whatToExpect: [
      { step: "01. Skin Consultation", detail: "Evaluating your skin balance, sensitivity, and hydration needs." },
      { step: "02. Gentle Cleanse & Mist", detail: "Botanical cleansing milk and floral hydrosol infusion." },
      { step: "03. Sculpting Facial Touch", detail: "Manual lifting massage enhancing natural contours." },
      { step: "04. Radiance Veil", detail: "Hydrating serum seal and lightweight UV barrier." }
    ],
    price: "Price available on request",
    duration: "Approx. 60 min",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["styling", "special-occasion-beauty", "hair-treatment"]
  },
  {
    id: "styling",
    name: "Refined Finishing & Styling",
    category: "beauty",
    categoryLabel: "Beauty Rituals",
    shortDescription: "Personalized finishing touches and custom beauty curation for daily elegance.",
    fullDescription: "The finishing touch that ties your entire presence together. From brow shaping and lash enhancement to complexion-enhancing luminizers, our stylists elevate your features while keeping your look authentic and fresh.",
    benefits: [
      "Brow framing designed to harmonize with your natural bone structure",
      "Featherweight finishing cosmetics that allow skin to breathe",
      "Expert tips for effortless day-to-evening transitions",
      "Comfort-first environment focused on your personal confidence"
    ],
    whatToExpect: [
      { step: "01. Feature Assessment", detail: "Identifying natural symmetry and focus elements." },
      { step: "02. Gentle Grooming", detail: "Delicate shaping, trimming, and definition." },
      { step: "03. Accentuation", detail: "Subtle color tinting or luminous highlight placement." },
      { step: "04. Setting", detail: "Weightless setting mist maintaining freshness." }
    ],
    price: "Price available on request",
    duration: "Approx. 30 – 45 min",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["special-occasion-beauty", "beauty-treatments", "hair-styling"]
  },
  {
    id: "special-occasion-beauty",
    name: "Special Occasion Beauty",
    category: "beauty",
    categoryLabel: "Beauty Rituals",
    shortDescription: "Red carpet, gala, and wedding beauty styling celebrating your radiant self.",
    fullDescription: "A comprehensive beauty service crafted for Phnom Penh’s most prestigious celebrations. We orchestrate timeless makeup aesthetics that look mesmerizing in daylight, indoor ballroom lighting, and professional photography alike.",
    benefits: [
      "Camera-ready, long-wearing formulations resistant to warmth and humidity",
      "Tailored color palette harmonizing with your couture gown and jewellery",
      "Skin preparation with depuffing cooling stones and intense hydration",
      "Touch-up kit provided for ongoing confidence throughout your event"
    ],
    whatToExpect: [
      { step: "01. Vision Dialogue", detail: "Reviewing event schedule, dress fabric, lighting, and mood." },
      { step: "02. Skin Priming", detail: "Cooling lymphatic prep and hydration lock." },
      { step: "03. Artful Application", detail: "Seamless foundation blending, eye contouring, and lip definition." },
      { step: "04. Precision Setting", detail: "Micro-fine setting powder and long-wear setting veil." }
    ],
    price: "Price available on request",
    duration: "Approx. 60 – 90 min",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80",
    relatedIds: ["special-occasion-styling", "beauty-treatments", "hair-styling"]
  }
];

// Helper to find service by ID
function getServiceById(id) {
  if (!id) return SALON_SERVICES[0];
  const found = SALON_SERVICES.find(s => s.id === id);
  return found || SALON_SERVICES[0];
}

// Export for browser
if (typeof window !== 'undefined') {
  window.SALON_SERVICES = SALON_SERVICES;
  window.getServiceById = getServiceById;
}
