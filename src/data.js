import heroImgDesktop from "./assets/images/image-web-3-desktop.jpg";
import heroImgMobile from "./assets/images/image-web-3-mobile.jpg";
import featuredImg1 from "./assets/images/image-retro-pcs.jpg";
import featuredImg2 from "./assets/images/image-top-laptops.jpg";
import featuredImg3 from "./assets/images/image-gaming-growth.jpg";

const articles = {
  hero: {
    id: "hero-001",
    title: "The Bright Future of Web 3.0?",
    description:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    cta: "READ MORE",
    image: {
      desktop: heroImgDesktop,
      mobile: heroImgMobile,
    },
  },
  trending: [
    {
      id: "trend-01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      image: featuredImg1,
    },
    {
      id: "trend-02",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets",
      image: featuredImg2,
    },
    {
      id: "trend-03",
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      image: featuredImg3,
    },
  ],
  new: [
    {
      id: "new-01",
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
      isNew: true,
    },
    {
      id: "new-02",
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: "new-03",
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means",
    },
  ],
};

const fullArticles = {
  hero: {
    id: "hero-001",
    title: "The Bright Future of Web 3.0?",
    description: "We dive into the next evolution of the web...",
    cta: "READ MORE",
    image: {
      desktop: heroImgDesktop,
      mobile: heroImgMobile,
    },
    content: `
      <p>The decentralized web promises to revolutionize how we interact online, shifting power from tech giants to individual users. 
      Through blockchain technology and token-based economics, Web 3.0 enables true digital ownership.</p>
      <p>However, challenges remain in scalability, user experience, and regulatory frameworks. 
      While platforms like Ethereum and Solana show promise, mainstream adoption still faces significant hurdles.</p>
      <p>This article explores both the revolutionary potential and practical limitations of Web 3.0 technologies.</p>
    `,
    author: "Sarah Johnson",
    date: "2023-10-15",
    category: "Technology",
    readTime: "8 min",
  },
  trending: [
    {
      id: "trend-01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      image: featuredImg1,
      content: `
        <p>Retro computing has evolved from nostalgia to a full-fledged movement. 
        Enthusiasts are breathing new life into classic machines like the Commodore 64 and early Macintosh models.</p>
        <p>Modern upgrades include SSDs replacing floppy drives, WiFi adapters for old serial ports, 
        and even Raspberry Pi emulation boards that maintain the original look while providing modern functionality.</p>
        <p>We interview collectors who've spent thousands restoring these machines to their former glory.</p>
      `,
      author: "Mike Chen",
      date: "2023-09-22",
      category: "Hardware",
      readTime: "6 min",
    },
    // ... other trending articles with similar structure
  ],
  new: [
    {
      id: "new-01",
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
      isNew: true,
      content: `
        <p>While electric vehicles dominate the green transportation conversation, 
        hydrogen fuel cell technology continues to make steady progress.</p>
        <p>Major automakers like Toyota and Hyundai are investing heavily in hydrogen infrastructure, 
        particularly for commercial vehicles where battery weight becomes problematic.</p>
        <p>This analysis compares charging times, range, and environmental impact of both technologies.</p>
      `,
      author: "Lisa Rodriguez",
      date: "2023-10-18",
      category: "Automotive",
      readTime: "7 min",
    },
    // ... other new articles
  ],
  // Added a featured category
  featured: [
    {
      id: "feat-01",
      title: "The Ethics of AI Art",
      description: "Exploring the moral implications of generative AI",
      content: `
        <p>As AI art generators like Midjourney and Stable Diffusion become more powerful, 
        artists are raising concerns about copyright and originality.</p>
        <p>This piece examines both sides of the debate, from those who see AI as a tool 
        to those who view it as theft of human creativity.</p>
      `,
      author: "David Kim",
      date: "2023-10-10",
      category: "AI",
      readTime: "9 min",
    },
  ],
};

export default articles;
export { fullArticles };
