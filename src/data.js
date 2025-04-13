import heroImgDesktop from "./assets/images/image-web-3-desktop.jpg";
import heroImgMobile from "./assets/images/image-web-3-mobile.jpg";
import trendingImg1 from "./assets/images/image-retro-pcs.jpg";
import trendingImg2 from "./assets/images/image-top-laptops.jpg";
import trendingImg3 from "./assets/images/image-gaming-growth.jpg";

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
      image: trendingImg1,
    },
    {
      id: "trend-02",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets",
      image: trendingImg2,
    },
    {
      id: "trend-03",
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      image: trendingImg3,
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
    description:
      "We dive into the next evolution of the web, examining its promises, pitfalls, and potential to redefine digital ownership and interaction.",
    cta: "READ MORE",
    image: {
      desktop: heroImgDesktop,
      mobile: heroImgMobile,
    },
    content: `The decentralized web promises to revolutionize how we interact online, shifting power from tech giants to individual users. Through blockchain technology and token-based economics, Web 3.0 enables true digital ownership and autonomy over digital assets.

Unlike traditional platforms that rely on centralized servers and gatekeepers, Web 3.0 envisions a user-controlled ecosystem where identity, data, and value exchange are owned by the individual. This means fewer middlemen, greater transparency, and more equitable participation in online platforms.

However, challenges remain in scalability, user experience, and regulatory frameworks. Many decentralized apps still face high transaction fees, long confirmation times, and technical barriers for average users. Governments, too, are grappling with how to regulate a space that is, by design, resistant to centralized control.

While platforms like Ethereum and Solana show promise with their vibrant development communities and growing ecosystems, mainstream adoption will depend on significant improvements in infrastructure and user onboarding experiences.

This article explores both the revolutionary potential and practical limitations of Web 3.0 technologies, asking whether the next generation of the web will truly deliver on its utopian promises or fall short in the face of real-world complexity.`,
    author: "Sarah Johnson",
    date: "2023-10-15",
    category: "Technology",
    readTime: "8 min",
  },
  trending: [
    {
      id: "trend-01",
      title: "Reviving Retro PCs",
      description:
        "What happens when old PCs are given modern upgrades and a second life through passionate hobbyists?",
      image: trendingImg1,
      content: `Retro computing has evolved from a niche hobby to a full-fledged movement. Enthusiasts around the world are breathing new life into classic machines like the Commodore 64, Amiga 500, and early Macintosh models. These computers, once forgotten relics, are now prized for their charm, simplicity, and design.

Modern upgrades include SSDs replacing floppy drives, WiFi adapters for old serial ports, and even Raspberry Pi emulation boards that maintain the original look while providing modern functionality. New software is even being written for these platforms, preserving their legacy in a meaningful way.

We interviewed collectors who've spent thousands restoring these machines to their former glory. For many, it's not just nostalgia—it's a way to reconnect with the early spirit of computing, when limitations inspired creativity and users truly understood their machines from the inside out.`,
      author: "Mike Chen",
      date: "2023-09-22",
      category: "Hardware",
      readTime: "6 min",
    },
    {
      id: "trend-02",
      title: "Top 10 Laptops of 2022",
      description:
        "Our best picks for various needs and budgets, from premium ultrabooks to budget-friendly workhorses.",
      image: trendingImg2,
      content: `After testing 35 laptops across all price ranges, we've identified the best models for students, professionals, and gamers. From battery life to build quality, every detail has been scrutinized to ensure maximum value for each category.

The Dell XPS 13 continues to dominate the ultrabook category with its sleek design and strong performance. Meanwhile, the Framework Laptop earns points for its exceptional repairability and customization options, appealing to users who want more control over their hardware.

Gamers will find the Razer Blade 15 a strong contender, offering an ideal mix of power and portability. On the budget side, the Acer Swift 3 surprises with solid specs under $700, proving you don't need to spend a fortune for quality.

Whether you're a student, creative professional, or business user, this list will help you find the right device for your needs.`,
      author: "Emma Wilson",
      date: "2023-09-15",
      category: "Hardware",
      readTime: "5 min",
    },
    {
      id: "trend-03",
      title: "The Growth of Gaming",
      description:
        "How the pandemic has sparked fresh opportunities and rapid growth in the gaming industry.",
      image: trendingImg3,
      content: `The gaming industry saw unprecedented growth during the pandemic, with platforms like Steam breaking concurrent user records month after month. As people spent more time indoors, gaming became both a source of entertainment and social connection.

Cloud gaming services such as Xbox Game Pass Ultimate and GeForce Now have made high-end gaming accessible to more users, eliminating the need for expensive hardware. This democratization of access is a key factor behind the industry's rapid expansion.

Independent developers are thriving through platforms like itch.io and Steam Direct, finding niche audiences and fostering creative innovation. At the same time, Web3 gaming introduces new economic models through play-to-earn systems and blockchain-based ownership of in-game assets.

Esports has also exploded in popularity, with competitive gaming events drawing millions of viewers and rivaling traditional sports in some demographics. The future of gaming looks bright, diversified, and more inclusive than ever before.`,
      author: "James Lee",
      date: "2023-09-08",
      category: "Gaming",
      readTime: "7 min",
    },
  ],
  new: [
    {
      id: "new-01",
      title: "Hydrogen VS Electric Cars",
      description:
        "Will hydrogen-fueled cars ever catch up to EVs in performance, efficiency, and adoption?",
      isNew: true,
      content: `While electric vehicles (EVs) dominate the green transportation conversation, hydrogen fuel cell technology is quietly making steady progress. Especially for long-haul commercial use, hydrogen's lightweight and fast refueling advantages may prove essential.

Major automakers like Toyota, Hyundai, and Honda are investing heavily in hydrogen infrastructure. Pilot programs are already running in select cities, testing the feasibility of hydrogen-powered buses and trucks.

This analysis compares the charging times, ranges, and environmental impacts of both EVs and hydrogen vehicles. While EVs are more mature and widespread, hydrogen may carve out a vital role in specific industries like logistics, where EV battery size becomes a limitation.

The article concludes that rather than competing, the future of sustainable transportation may rely on a mix of technologies tailored to different needs.`,
      author: "Lisa Rodriguez",
      date: "2023-10-18",
      category: "Automotive",
      readTime: "7 min",
    },
    {
      id: "new-02",
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation on artists and the art world?",
      content: `The rapid advancement of AI image generators like Midjourney, DALL·E, and Stable Diffusion has transformed how visual content is created. However, it raises important ethical and economic questions about artistic originality, ownership, and fairness.

Many working illustrators and graphic designers report losing commissions to AI-generated images that mimic popular styles. With training data scraped from the internet, AI systems often replicate recognizable artistic aesthetics—sometimes without the original artists’ consent.

Art galleries, publishers, and clients are struggling to differentiate human-made works from algorithmic ones. Some platforms have introduced AI-content tagging systems, but enforcement and accuracy remain inconsistent.

This article interviews artists whose styles have been copied, explores legal gray areas in current copyright laws, and suggests potential legislative paths forward to protect human creators while embracing technological innovation.`,
      author: "Alex Chen",
      date: "2023-10-12",
      category: "AI",
      readTime: "8 min",
    },
    {
      id: "new-03",
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% year-over-year. We take a look at what that means for the startup ecosystem.",
      content: `Venture capital investments have plummeted from their 2021 peaks, creating ripple effects throughout the startup world. With rising interest rates, inflation concerns, and a cooling stock market, early-stage startups are finding it harder to secure funding.

The shift has forced many founders to pivot from aggressive growth strategies to leaner, more sustainable business models. Investors are now emphasizing profitability, unit economics, and real-world traction over lofty projections and buzzwords.

While the funding crunch is painful for some, industry analysts argue that it may ultimately be beneficial—helping to weed out unsustainable ventures and foster a healthier, more mature startup environment.

We speak with founders who've adapted successfully and share lessons for navigating the current VC landscape.`,
      author: "Rachel Park",
      date: "2023-10-05",
      category: "Business",
      readTime: "6 min",
    },
  ],
  featured: [
    {
      id: "feat-01",
      title: "The Ethics of AI Art",
      description:
        "Exploring the moral implications of generative AI in the creative industry.",
      content: `As AI art generators become more powerful and accessible, the creative community is facing complex ethical questions. What does it mean to be an artist in a world where machines can produce stunning visuals in seconds?

This piece examines both sides of the debate through interviews with digital artists, AI researchers, and intellectual property lawyers. For some, AI is just another tool in the artistic process—like a digital brush or camera. For others, it represents a threat to livelihoods and artistic integrity.

Training AI on publicly available artwork without consent raises concerns about large-scale copyright infringement. Meanwhile, AI companies argue that their models only learn patterns and do not store or duplicate specific works.

The article concludes with proposed guidelines for ethical AI development: transparent training data, opt-out options for artists, and clearer attribution standards for generated content.`,
      author: "David Kim",
      date: "2023-10-10",
      category: "AI",
      readTime: "9 min",
    },
  ],
};

export default articles;
export { fullArticles };
