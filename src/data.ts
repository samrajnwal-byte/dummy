import { BlogPost, FAQ, Product, Review, Stat, TeamMember } from './types';
import imgWhey from './assets/images/alpha_whey_pro_1782021243874.jpg';
import imgIsolate from './assets/images/alpha_isolate_x_1782021259934.jpg';
import imgCreatine from './assets/images/alpha_creatine_1782021275132.jpg';
import imgMassGainer from './assets/images/alpha_mass_gainer_1782021288363.jpg';
import imgPreWorkout from './assets/images/alpha_pre_workout_1782021301538.jpg';
import imgBcaa from './assets/images/alpha_bcaa_recovery_1782021316539.jpg';
import imgVitamins from './assets/images/alpha_multivitamin_1782021330487.jpg';
import imgFishOil from './assets/images/alpha_fish_oil_1782021343652.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: "Alpha Whey Pro",
    category: "Whey Protein",
    price: 2199,
    originalPrice: 2799,
    rating: 4.8,
    reviewCount: 142,
    description: "Premium whey protein concentrate formulated for ultra-fast muscle recovery, lean muscle growth, and protein synthesis.",
    overview: "Alpha Whey Pro delivers 24g of high-biological value protein sourced from grass-fed cows. Utilizing micro-filtration technology, it retains vital peptide fractions while filtering out excess lactose and fat. Enhanced with digestive enzymes (DigeZyme®), it ensures zero bloating and rapid amino acid spike post-workout.",
    benefits: [
      "24g pure fast-absorbing whey protein per scoop",
      "5.5g naturally occurring BCAAs to trigger muscle repair",
      "4.2g Glutamic acid for immune support and reduced soreness",
      "Added DigeZyme® digestive enzyme blend for effortless digestion",
      "No added sugar or banned substances (Informed Sport certified)"
    ],
    ingredients: "Whey Protein Concentrate (88%), Cocoa Powder, Natural and Artificial Flavors, Sunflower Lecithin, Xanthan Gum, DigeZyme® Enzyme Blend (Amylase, Protease, Lactase, Lipase, Cellulase), Sucralose, Sea Salt.",
    nutritionFacts: {
      servingSize: "33g (1 Powder Scoop)",
      servingsPerContainer: 30,
      calories: 128,
      protein: "24.0g",
      carbs: "3.2g",
      fat: "2.1g",
      otherKeyNutrients: [
        { label: "BCAAs", value: "5.5g" },
        { label: "L-Leucine", value: "2.6g" },
        { label: "Glutamic Acid", value: "4.2g" },
        { label: "Calcium", value: "140mg" }
      ]
    },
    usageDirections: "Mix 1 rounded scoop (33g) with 200-250ml of cold water or skimmed milk in a shaker bottle. Shake vigorously for 15-20 seconds until smooth.",
    recommendedTiming: ["Immediately post-workout", "First thing in the morning", "Between major meals to fulfill daily protein quota"],
    whoShouldUse: ["Gym beginners and advanced bodybuilders", "Athletes participating in high-intensity sports", "Fitness enthusiasts wanting to maintain muscle mass"],
    sizes: ["1 kg (30 Servings)", "2 kg (60 Servings)"],
    flavors: ["Rich Belgian Chocolate", "French Vanilla", "Alphonso Mango"],
    image: imgWhey,
    faqs: [
      { question: "Can beginners consume Alpha Whey Pro?", answer: "Yes! It is completely safe and highly beneficial for gym beginners to meet daily protein needs without indigestion." },
      { question: "Does this protein cause acne or bloating?", answer: "No. Because it contains DigeZyme lactase and protease enzymes, lactose breakdown is streamlined, minimizing stomach discomfort." },
      { question: "Is scoop included inside the tub?", answer: "Yes, an accurate 33g measuring scoop is packed inside every sealed container." }
    ],
    customerReviews: [
      { id: 101, author: "Rahul Sharma", rating: 5, date: "14 June 2026", title: "Flawless mixing and awesome taste!", text: "I tried the Belgian Chocolate flavor. Zero clumps in cold water. Results in recovery have been visible within 3 weeks of strict clean diet." },
      { id: 102, author: "Karan Singh", rating: 5, date: "02 June 2026", title: "Value for money supplement", text: "Comparing this to imported brands, Alpha Whey Pro holds its own. Highly digestible and no heavy feeling in the stomach." }
    ]
  },
  {
    id: 2,
    name: "Alpha Isolate X",
    category: "Whey Isolate",
    price: 3499,
    originalPrice: 4299,
    rating: 4.9,
    reviewCount: 98,
    description: "Ultra-pure 100% Whey Protein Isolate designed for competitive athletes and extreme cutting cycles. Zero fat, near-zero carbs.",
    overview: "Alpha Isolate X undergoes cold cross-flow microfiltration to isolate the purest protein ratio (90%+). By stripping out carbs, lactose, and fat, you get 28g of pristine isolate per serving. Ideal for athletes preparing for stage shows or individuals with lactose sensitivity.",
    benefits: [
      "28g ultra-pure Whey Protein Isolate per scoop",
      "6.4g BCAAs for maximum anti-catabolic protection",
      "Zero fat and less than 1g carbohydrate",
      "Virtually lactose-free for sensitive stomachs",
      "Instantized powder that mixes effortlessly with a spoon"
    ],
    ingredients: "Cross-Flow Microfitered Whey Protein Isolate (96%), Alkalized Cocoa, Natural Flavors, Sunflower Lecithin, Stevia Leaf Extract.",
    nutritionFacts: {
      servingSize: "31g (1 Scoop)",
      servingsPerContainer: 32,
      calories: 114,
      protein: "28.0g",
      carbs: "0.8g",
      fat: "0.2g",
      otherKeyNutrients: [
        { label: "BCAAs", value: "6.4g" },
        { label: "L-Glutamine", value: "5.1g" }
      ]
    },
    usageDirections: "Mix 1 scoop (31g) with 180-220ml of chilled water. Best consumed within 30 minutes of training.",
    recommendedTiming: ["Post-workout recovery window", "Pre-workout during fasted cardio sessions"],
    whoShouldUse: ["Athletes on strict calorie deficit or keto diets", "Individuals with lactose intolerance or dairy sensitivity", "Bodybuilders in peak prep week"],
    sizes: ["1 kg (32 Servings)", "2 kg (64 Servings)"],
    flavors: ["Dark Cocoa Supreme", "Ice Cream Vanilla", "Strawberry Swirl"],
    image: imgIsolate,
    faqs: [
      { question: "What is the difference between Whey Pro and Isolate X?", answer: "Whey Pro is a concentrate (24g protein, slight carbs/fats) great for general fitness. Isolate X is ultra-filtered (28g protein, virtually zero carbs/fats) for strict shredding." },
      { question: "Can I drink Isolate X with milk?", answer: "You can, but mixing with cold water preserves higher absorption speed and keeps total calories lowest." }
    ],
    customerReviews: [
      { id: 201, author: "Vikramaditya Rao", rating: 5, date: "18 June 2026", title: "Purity you can feel", text: "Switched to Isolate X during my shredding phase. Dropped 4% body fat while retaining full strength on bench press." }
    ]
  },
  {
    id: 3,
    name: "Alpha Creatine Monohydrate",
    category: "Creatine",
    price: 799,
    originalPrice: 1199,
    rating: 4.7,
    reviewCount: 230,
    description: "100% micronized pure Creatine Monohydrate for explosive power, ATP replenishment, and increased muscular volume.",
    overview: "Alpha Creatine delivers 5,000mg of 200-mesh micronized creatine monohydrate. Backed by over clinical studies, creatine increases intramuscular phosphocreatine storage, allowing you to grind out extra reps and lift heavier weights safely.",
    benefits: [
      "5g pure micronized Creatine Monohydrate per serving",
      "Significantly boosts high-intensity athletic performance",
      "Accelerates muscle cell hydration and fuller look",
      "Unflavored and ultra-micronized for zero tasteless residue",
      "Improves cognitive fatigue resistance during heavy workouts"
    ],
    ingredients: "100% Pure Creatine Monohydrate (Micronized 200 Mesh).",
    nutritionFacts: {
      servingSize: "5g (1 Scoop)",
      servingsPerContainer: 60,
      calories: 0,
      protein: "0g",
      carbs: "0g",
      fat: "0g",
      otherKeyNutrients: [
        { label: "Creatine Monohydrate", value: "5000mg" }
      ]
    },
    usageDirections: "Mix 1 scoop (5g) into 250ml of water, juice, or your protein shake. Consume daily to maintain saturation.",
    recommendedTiming: ["Post-workout alongside carbs/protein", "Any time of day on non-workout days"],
    whoShouldUse: ["Powerlifters, weightlifters, and crossfitters", "Sprinters and football/cricket players", "Anyone aiming to break strength plateaus"],
    sizes: ["250g (50 Servings)", "300g (60 Servings)"],
    flavors: ["Unflavored Pure"],
    image: imgCreatine,
    faqs: [
      { question: "Is a creatine loading phase mandatory?", answer: "No. You can take 5g daily steadily. Full muscle saturation will occur in ~21 days without any stomach cramping." },
      { question: "Does creatine cause hair loss or kidney damage?", answer: "Extensive scientific research confirms pure creatine monohydrate is entirely safe for healthy kidneys and has no direct link to hair loss." }
    ],
    customerReviews: [
      { id: 301, author: "Aman Verma", rating: 5, date: "10 June 2026", title: "Strength went up by 15kg!", text: "Been taking 5g everyday. My squat went from 110kg to 125kg for reps in 6 weeks. Essential staple." }
    ]
  },
  {
    id: 4,
    name: "Alpha Mass Gainer",
    category: "Mass Gainer",
    price: 1999,
    originalPrice: 2499,
    rating: 4.6,
    reviewCount: 112,
    description: "High-calorie clean bulking matrix with complex carbohydrates, quality protein, and essential muscle-building vitamins.",
    overview: "Alpha Mass Gainer is formulated specifically for 'hardgainers' with fast metabolisms. Every massive serving feeds your body 600 clean calories derived from oats, sweet potato starch, and multivitamins, providing sustained fuel for rapid weight and size gains.",
    benefits: [
      "600 dense calories per serving to kickstart bulking",
      "32g multi-phase muscle protein matrix",
      "105g complex clean carb blend for glycogen restoration",
      "Enriched with 22 vitamins and minerals",
      "Added MCT oil for calorie density and cellular energy"
    ],
    ingredients: "Maltodextrin, Oat Flour, Whey Protein Concentrate, Milk Protein Isolate, Sweet Potato Powder, MCT Oil Powder, Cocoa, Vitamin & Mineral Blend.",
    nutritionFacts: {
      servingSize: "150g (3 Scoops)",
      servingsPerContainer: 20,
      calories: 600,
      protein: "32.0g",
      carbs: "105.0g",
      fat: "5.5g",
      otherKeyNutrients: [
        { label: "Dietary Fiber", value: "4.0g" },
        { label: "Added L-Glutamine", value: "2.0g" }
      ]
    },
    usageDirections: "Blend 3 level scoops (150g) in 400-500ml of full-cream milk or water. Drink 1 serving daily between meals or post-workout.",
    recommendedTiming: ["Post-workout recovery", "Mid-morning or afternoon snack boost"],
    whoShouldUse: ["Ectomorphs and skinny gym-goers struggling to gain weight", "Athletes burning high calories daily in endurance sports"],
    sizes: ["3 kg (20 Servings)", "5 kg (33 Servings)"],
    flavors: ["Double Chocolate Chunk", "Banana Creme"],
    image: imgMassGainer,
    faqs: [
      { question: "Will mass gainer make me fat?", answer: "When paired with heavy resistance training, the surplus calories go directly to muscle tissue synthesis and glycogen replenishment." }
    ],
    customerReviews: [
      { id: 401, author: "Deepak Saini", rating: 5, date: "05 June 2026", title: "Finally gained 4.5 kgs!", text: "I have always been underweight (54kg at 5'11). Two tubs of Alpha Mass Gainer and consistent eating got me to nearly 59kg safely." }
    ]
  },
  {
    id: 5,
    name: "Alpha Pre-Workout",
    category: "Pre Workout",
    price: 1299,
    originalPrice: 1699,
    rating: 4.7,
    reviewCount: 184,
    description: "High-octane pre-workout igniter loaded with L-Citrulline, Beta-Alanine, and clean Caffeine for tunnel-vision focus.",
    overview: "Alpha Pre-Workout primes your central nervous system for war. Containing clinical dosages of L-Citrulline Malate (6g) for skin-tearing nitric oxide pumps, Beta-Alanine (3.2g) to buffer lactic acid burn, and 250mg of anhydrous caffeine for unstoppable intensity.",
    benefits: [
      "6,000mg L-Citrulline Malate (2:1) for insane vascularity",
      "3,200mg Beta-Alanine for prolonged muscular endurance",
      "250mg clean caffeine paired with L-Theanine for smooth energy",
      "Zero crash, zero sugar, and fast neuro-activation"
    ],
    ingredients: "L-Citrulline Malate 2:1, Beta-Alanine, Taurine, Caffeine Anhydrous, L-Tyrosine, L-Theanine, Pink Himalayan Salt, Silicon Dioxide, Sucralose.",
    nutritionFacts: {
      servingSize: "12g (1 Scoop)",
      servingsPerContainer: 30,
      calories: 10,
      protein: "0g",
      carbs: "1g",
      fat: "0g",
      otherKeyNutrients: [
        { label: "L-Citrulline Malate", value: "6000mg" },
        { label: "Beta-Alanine", value: "3200mg" },
        { label: "Caffeine", value: "250mg" },
        { label: "Taurine", value: "1000mg" }
      ]
    },
    usageDirections: "Mix 1 scoop (12g) in 250ml of cold water 20-30 minutes prior to intense physical exercise. Assess tolerance with half scoop initially.",
    recommendedTiming: ["20-30 minutes before workout"],
    whoShouldUse: ["Experienced lifters wanting extreme energy and focus", "Morning workout athletes needing an instant wake-up charge"],
    sizes: ["360g (30 Servings)"],
    flavors: ["Fruit Punch Fury", "Electric Blue Raspberry", "Watermelon Blitz"],
    image: imgPreWorkout,
    faqs: [
      { question: "Why do I feel a harmless tingling sensation on my skin?", answer: "That is paresthesia, caused naturally by Beta-Alanine binding to nerve receptors. It confirms the active ingredient is working and subsides during the workout." }
    ],
    customerReviews: [
      { id: 501, author: "Siddharth K.", rating: 5, date: "11 June 2026", title: "Crazy pump and focus", text: "Best pre-workout I have used in India. The L-Citrulline dosage is actually legit. Vascularity in arms during biceps day was unreal." }
    ]
  },
  {
    id: 6,
    name: "Alpha BCAA Recovery",
    category: "BCAA",
    price: 1099,
    originalPrice: 1499,
    rating: 4.5,
    reviewCount: 76,
    description: "Intra-workout hydration and recovery matrix featuring 2:1:1 BCAAs, Essential Electrolytes, and Coconut Water powder.",
    overview: "Alpha BCAA Recovery keeps fatigue at bay during exhausting training bouts. Offering 7g of fermented BCAAs in the proven golden ratio (2:1:1), alongside sodium, potassium, and magnesium to prevent dehydration and muscle cramping.",
    benefits: [
      "7g 100% vegan fermented BCAAs (2:1:1)",
      "Hydrating electrolyte complex with raw coconut water minerals",
      "Reduces intra-workout muscle breakdown (catabolism)",
      "Refreshing delicious taste to sip throughout heavy training"
    ],
    ingredients: "Instanized BCAA 2:1:1 (L-Leucine, L-Isoleucine, L-Valine), Coconut Water Powder, Sodium Chloride, Potassium Citrate, Citric Acid.",
    nutritionFacts: {
      servingSize: "10g (1 Scoop)",
      servingsPerContainer: 35,
      calories: 5,
      protein: "0g",
      carbs: "1g",
      fat: "0g",
      otherKeyNutrients: [
        { label: "Total BCAAs", value: "7000mg" },
        { label: "L-Leucine", value: "3500mg" },
        { label: "Electrolyte Blend", value: "500mg" }
      ]
    },
    usageDirections: "Mix 1 scoop (10g) inside 500-600ml of cold water. Sip steadily during your workout session.",
    recommendedTiming: ["During workout (Intra-workout)", "Throughout hot summer days for hydration"],
    whoShouldUse: ["Endurance runners, cyclists, and footballers", "Lifters training longer than 60 minutes"],
    sizes: ["350g (35 Servings)"],
    flavors: ["Tangy Green Apple", "Lemon Lime Spark"],
    image: imgBcaa,
    faqs: [
      { question: "Can I take BCAA with pre-workout?", answer: "Yes, you can sip BCAA right after pre-workout starts wearing off mid-session." }
    ],
    customerReviews: [
      { id: 601, author: "Megha T.", rating: 5, date: "09 June 2026", title: "Lifesaver for long HIIT sessions", text: "Stops my legs from cramping up during Sunday morning soccer leagues. Green apple flavor tastes like candy." }
    ]
  },
  {
    id: 7,
    name: "Alpha Multivitamin",
    category: "Vitamins",
    price: 699,
    originalPrice: 999,
    rating: 4.6,
    reviewCount: 165,
    description: "Daily high-potency micronutrient armor with 32 essential vitamins, minerals, antioxidants, and joint health boosters.",
    overview: "Hard training depletes vital trace minerals. Alpha Multivitamin fills nutritional gaps with 100% RDA of B-complex vitamins for cellular energy, Zinc and Vitamin D3 for hormonal balance, plus Ginseng and Ashwagandha for vitality.",
    benefits: [
      "Comprehensive 32-in-1 athlete multivitamin formula",
      "100% daily RDA of Vitamin D3, B12, C, and E",
      "Added Ashwagandha and Ginseng for stress and cortisol reduction",
      "Supports joint flexibility, bone strength, and immunity"
    ],
    ingredients: "Vitamin A, B-Complex, C, D3, E, K, Zinc, Magnesium, Chelated Iron, Ashwagandha Root Extract, Panax Ginseng, Biotin.",
    nutritionFacts: {
      servingSize: "1 Tablet",
      servingsPerContainer: 60,
      calories: 2,
      protein: "0g",
      carbs: "0.5g",
      fat: "0g",
      otherKeyNutrients: [
        { label: "Vitamin D3", value: "600 IU" },
        { label: "Zinc", value: "12mg" },
        { label: "Ashwagandha (KSM-66)", value: "100mg" }
      ]
    },
    usageDirections: "Take 1 tablet daily with breakfast or lunch alongside a full glass of water.",
    recommendedTiming: ["Morning with breakfast"],
    whoShouldUse: ["Active men and women leading busy lifestyles", "Anyone wanting to prevent micronutrient deficiencies"],
    sizes: ["60 Tablets"],
    flavors: ["Unflavored"],
    image: imgVitamins,
    faqs: [
      { question: "Should I take this on an empty stomach?", answer: "It is best taken with food to maximize absorption of fat-soluble vitamins (A, D, E, K)." }
    ],
    customerReviews: [
      { id: 701, author: "Rohit P.", rating: 5, date: "01 June 2026", title: "Energy levels improved", text: "Great quality tablets. No bad smell. I feel far more alert throughout the afternoon office hours." }
    ]
  },
  {
    id: 8,
    name: "Alpha Fish Oil",
    category: "Omega-3",
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviewCount: 205,
    description: "Triple-strength molecularly distilled Omega-3 Fish Oil (1000mg) packing 540mg EPA & 360mg DHA per softgel.",
    overview: "Alpha Fish Oil provides elite cardiovascular and joint shielding. Ultra-distilled to eliminate mercury and heavy metals, each burp-less softgel contains a massive 900mg total Omega-3 fatty acids to reduce joint inflammation and support cardiovascular wellness.",
    benefits: [
      "Ultra-high potency 540mg EPA / 360mg DHA ratio",
      "Molecularly distilled for zero mercury and heavy metals",
      "Enteric-coated citrus softgels for zero fishy aftertaste or burps",
      "Lubricates heavy-duty lifting joints and promotes brain focus"
    ],
    ingredients: "Deep Sea Anchovy Fish Oil Concentrate, Gelatin Softgel shell, Glycerin, Purified Water, Lemon Oil.",
    nutritionFacts: {
      servingSize: "1 Softgel",
      servingsPerContainer: 60,
      calories: 10,
      protein: "0g",
      carbs: "0g",
      fat: "1g",
      otherKeyNutrients: [
        { label: "Total Omega-3", value: "900mg" },
        { label: "EPA (Eicosapentaenoic Acid)", value: "540mg" },
        { label: "DHA (Docosahexaenoic Acid)", value: "360mg" }
      ]
    },
    usageDirections: "Swallow 1 softgel 1-2 times daily with meals.",
    recommendedTiming: ["Lunch or Dinner with healthy dietary fats"],
    whoShouldUse: ["Heavy lifters dealing with elbow, knee, or shoulder stiffness", "Anyone looking to optimize heart health and cholesterol levels"],
    sizes: ["60 Softgels"],
    flavors: ["Citrus Enteric Coated"],
    image: imgFishOil,
    faqs: [
      { question: "Do these fish oil softgels cause fishy burps?", answer: "No! Due to enteric coating infused with natural lemon oil, they dissolve deeper in the digestive tract, completely eliminating fishy reflux." }
    ],
    customerReviews: [
      { id: 801, author: "Neha K.", rating: 5, date: "12 June 2026", title: "Knee pain reduced after squatting", text: "High EPA DHA content makes a genuine difference. My creaky knees feel much smoother after 1 month." }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    author: "Rahul Sharma",
    rating: 5,
    text: "Excellent taste and great results after 2 months."
  },
  {
    id: 2,
    author: "Aman Verma",
    rating: 5,
    text: "Creatine mixes well and improved my workout performance."
  },
  {
    id: 3,
    author: "Karan Singh",
    rating: 5,
    text: "Best value-for-money protein supplement."
  }
];

export const stats: Stat[] = [
  { id: 1, value: "10,000+", label: "Happy Customers" },
  { id: 2, value: "50,000+", label: "Orders Delivered" },
  { id: 3, value: "25+", label: "Premium Products" },
  { id: 4, value: "4.8/5", label: "Average Rating" }
];

export const team: TeamMember[] = [
  { id: 1, name: "Aryan Mehta", role: "Founder & CEO" },
  { id: 2, name: "Neha Kapoor", role: "Nutrition Specialist" },
  { id: 3, name: "Rohit Yadav", role: "Head of Product Development" },
  { id: 4, name: "Priya Verma", role: "Customer Success Manager" }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Benefits of Whey Protein",
    publishedDate: "15 June 2026",
    excerpt: "Learn how whey protein supports muscle growth, recovery, and overall fitness performance."
  },
  {
    id: 2,
    title: "Creatine: Myths vs Facts",
    publishedDate: "10 June 2026",
    excerpt: "Discover the truth behind one of the most researched supplements in sports nutrition."
  },
  {
    id: 3,
    title: "Beginner's Guide to Muscle Building",
    publishedDate: "5 June 2026",
    excerpt: "Everything you need to know about training, nutrition, and recovery."
  },
  {
    id: 4,
    title: "Pre-Workout Supplements Explained",
    publishedDate: "1 June 2026",
    excerpt: "Understand ingredients, benefits, and how to use them safely."
  },
  {
    id: 5,
    title: "High Protein Diet for Gym Beginners",
    publishedDate: "28 May 2026",
    excerpt: "A complete guide to planning your daily protein intake."
  }
];

export const faqs: FAQ[] = [
  { id: 1, question: "How long does delivery take?", answer: "Typically 3–7 business days." },
  { id: 2, question: "Are your products lab tested?", answer: "Yes, all products undergo third-party quality testing." },
  { id: 3, question: "Do you offer refunds?", answer: "Yes, within 7 days for eligible products." }
];

