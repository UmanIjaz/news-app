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

export default articles;
