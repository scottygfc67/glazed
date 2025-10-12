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
      "Discover the optimal frequency for using pre-wash oils based on your hair type, washing routine, and lifestyle. Get expert tips for maximum benefits.",
    date: "2025-09-28",
    tags: ["frequency", "routine", "damage prevention", "hair care tips"],
    content: `
      <p>If you've discovered the magic of pre-wash oils, you're probably wondering: <em>How often should I actually use this stuff?</em> The answer isn't one-size-fits-all, but we're here to break it down so you can create the perfect routine for your hair.</p>

      <p>Pre-wash oils work by creating a protective barrier around your hair before you shampoo, preventing damage and moisture loss during the washing process. But like any good thing, there's a sweet spot for frequency that depends on your hair type, lifestyle, and washing habits.</p>

      <h2>The Simple Answer: Every Wash</h2>
      
      <p>For most people, using a pre-wash oil every time you shampoo is the gold standard. Think of it like sunscreen for your hair—you wouldn't skip it just because you used it yesterday, right?</p>

      <p>Here's why consistency matters: Your hair is most vulnerable when it's wet and being manipulated. That's exactly when pre-wash oils shine, creating a protective layer that prevents breakage and maintains your hair's natural moisture.</p>

      <h2>How Much Should You Use?</h2>
      
      <p>The amount depends on your hair type and length. Here's a quick guide:</p>

      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 30px 0;">
        <h3 style="margin-top: 0; color: #333;">Quick Reference Guide</h3>
        <p><strong>Fine/Straight Hair:</strong> 1-2 pumps, focus on ends only</p>
        <p><strong>Wavy Hair:</strong> 2-3 pumps, mid-lengths to ends</p>
        <p><strong>Curly Hair:</strong> 3-4 pumps, extra attention to ends</p>
        <p><strong>Coily Hair:</strong> 4-5 pumps, generous application</p>
      </div>

      <h2>Adjusting for Your Washing Schedule</h2>

      <h3>If You Wash Daily</h3>
      <p>You can still use pre-wash oil every wash, but stick to lighter amounts. Your hair gets regular protection, so you don't need to go heavy on the product.</p>

      <h3>If You Wash Every Other Day</h3>
      <p>This is actually the sweet spot for most people. You get the benefits of regular protection without overdoing it, and your hair has time to breathe between treatments.</p>

      <h3>If You Wash Weekly</h3>
      <p>Use a bit more product to ensure your hair stays protected throughout the week. The extra oil will help maintain moisture between washes and prevent your hair from becoming too dry.</p>

      <h2>Special Situations</h2>

      <p><strong>Damaged or color-treated hair?</strong> Use it every wash with slightly more product. Your hair needs all the help it can get.</p>

      <p><strong>Oily scalp?</strong> Still use pre-wash oil, but focus only on mid-lengths to ends. Avoid the scalp area to prevent excess oiliness.</p>

      <p><strong>Dry scalp?</strong> You can apply a small amount to the scalp too, but keep the focus on your hair shaft for best results.</p>

      <h2>How to Know If You're Doing It Right</h2>

      <p><strong>You're using too much if:</strong></p>
      <ul>
        <li>Your hair feels heavy or greasy after washing</li>
        <li>Other products don't seem to work as well</li>
        <li>Your hair looks limp or lacks volume</li>
      </ul>

      <p><strong>You're not using enough if:</strong></p>
      <ul>
        <li>Your hair feels rough or tangled after washing</li>
        <li>You notice more breakage during styling</li>
        <li>Your hair looks dull or lacks shine</li>
      </ul>

      <h2>Pro Tips for Best Results</h2>

      <p><strong>Timing is everything:</strong> Apply your pre-wash oil 5-20 minutes before shampooing. This gives it time to penetrate and create that protective barrier.</p>

      <p><strong>Start with dry hair:</strong> Work the oil through from mid-lengths to ends using your fingers or a wide-tooth comb for even distribution.</p>

      <p><strong>Rinse well:</strong> Always rinse thoroughly before shampooing to ensure your shampoo can effectively clean your hair and scalp.</p>

      <h2>The Bottom Line</h2>

      <p>Start with every wash and adjust based on how your hair responds. Most people see healthier, shinier, more manageable hair within 2-4 weeks of consistent use.</p>

      <p>Remember: The goal is to protect your hair during its most vulnerable moment. A little pre-wash oil goes a long way in preventing damage and maintaining your hair's health and beauty. Your future self will thank you!</p>
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



