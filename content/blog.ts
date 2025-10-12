export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  tags?: string[];
  content: string; // simple HTML content for now
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-use-pre-wash-oil",
    title: "Why Use a Pre-Wash Oil? Benefits Backed by Science",
    excerpt:
      "Learn how pre-wash oils protect hair, reduce hygral fatigue, and boost shine before you shampoo.",
    date: "2025-09-01",
    tags: ["pre-wash", "hair care", "shine"],
    content: `
      <p>Pre-wash oils create a protective barrier that helps reduce <strong>hygral fatigue</strong>—the repeated swelling and deswelling of hair when it gets wet. This protects the cuticle, limiting frizz and breakage.</p>
      <h2>Key Benefits</h2>
      <ul>
        <li>Reduces friction and mechanical damage while washing</li>
        <li>Helps retain moisture for softer, smoother strands</li>
        <li>Boosts visible shine after rinse-out</li>
      </ul>
      <p>Apply a light layer to mid-lengths and ends 5–20 minutes before shampooing. Rinse and cleanse as normal.</p>
    `,
  },
  {
    slug: "how-oil-helps-with-tangles",
    title: "How Pre-Wash Oil Helps with Tangles and Knots",
    excerpt:
      "Tangles come from raised cuticles and friction. Here’s how pre-wash oil melts them fast.",
    date: "2025-09-05",
    tags: ["detangling", "pre-wash", "smooth"],
    content: `
      <p>Oils reduce surface roughness so hair glides instead of snags. This means less force is needed to detangle, preventing breakage.</p>
      <h2>Pro Tips</h2>
      <ul>
        <li>Work in sections from ends upward</li>
        <li>Use a wide-tooth comb on damp hair</li>
        <li>Rinse thoroughly, then shampoo</li>
      </ul>
    `,
  },
  {
    slug: "pre-wash-vs-leave-in",
    title: "Pre-Wash Oil vs Leave-In Oil: What’s the Difference?",
    excerpt:
      "Both add slip and shine, but they’re used at different times for different outcomes.",
    date: "2025-09-12",
    tags: ["pre-wash", "leave-in", "routine"],
    content: `
      <p>Pre-wash oil is applied <em>before</em> shampoo to protect during cleansing. Leave-in oil is applied <em>after</em> styling to seal and add gloss.</p>
      <h2>When to Choose Which</h2>
      <ul>
        <li><strong>Pre-wash:</strong> Reduce frizz and breakage from washing</li>
        <li><strong>Leave-in:</strong> Finish styles, tame flyaways, add shine</li>
      </ul>
    `,
  },
  {
    slug: "is-pre-wash-good-for-fine-hair",
    title: "Is Pre-Wash Oil Good for Fine Hair?",
    excerpt:
      "Yes—use a small amount and focus on mid-lengths to ends to avoid weight.",
    date: "2025-09-20",
    tags: ["fine hair", "lightweight", "volume"],
    content: `
      <p>Fine hair benefits from pre-wash protection—just keep it light. Apply sparingly and avoid roots to maintain volume.</p>
      <h2>Application Guide</h2>
      <ul>
        <li>1–3 pumps depending on length and density</li>
        <li>Comb through for even distribution</li>
        <li>Rinse well before shampoo</li>
      </ul>
    `,
  },
  {
    slug: "how-often-to-use-pre-wash",
    title: "How Often Should You Use a Pre-Wash Oil?",
    excerpt:
      "Most see best results using it every wash—adjust based on dryness and routine.",
    date: "2025-09-28",
    tags: ["frequency", "routine", "damage prevention"],
    content: `
      <p>If you wash daily, use lighter amounts. If you wash weekly, use a bit more to protect hair during the full cleanse.</p>
      <h2>Suggested Frequency</h2>
      <ul>
        <li>Fine/straight: every wash, very light</li>
        <li>Wavy/curly: every wash, moderate</li>
        <li>Coily: every wash, generous ends focus</li>
      </ul>
    `,
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}



