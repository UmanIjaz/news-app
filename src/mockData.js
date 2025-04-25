const mockData = {
  result: {
    response: "",
    newsCount: 8,
    skipped: 0,
  },
  news: [
    {
      Title: "Elon Musk launches new AI company",
      Source: "MockNews",
      Url: "https://example.com/elon-ai",
      PublishedOn: "2025-04-20T00:00:00.000Z",
      Description: "The new venture will focus on advanced AI systems.",
      Image: "/fallbackImage.jpg",
      SourceNationality: "",
      TitleSentiment: {
        sentiment: "",
        score: 0,
      },
      Summary:
        "Elon Musk, the billionaire entrepreneur behind Tesla and SpaceX, has announced the launch of a groundbreaking artificial intelligence company that aims to revolutionize the field of AI. The company’s mission is to develop cutting-edge AI models that are not only powerful but also aligned with human values and safety. Musk has long expressed concerns about the unchecked growth of AI and the potential existential risks it could pose. His new company will prioritize transparency, open research, and collaboration with the broader tech community. Analysts expect this venture to intensify competition with established players like OpenAI, Google DeepMind, and Meta’s FAIR division. With Musk’s ambitious vision and track record of disrupting industries, this AI company could reshape the future of intelligent technologies.\n\n Sint et non deserunt laboris irure Lorem. Pariatur id nisi consectetur fugiat. Dolore non reprehenderit veniam id sit ea id officia ipsum consectetur esse ad in officia. Occaecat culpa adipisicing sint pariatur.",
      Countries: [],
      Cities: [],
      Categories: {
        label: "Tech",
        IPTCCode: "",
      },
    },
    {
      Title: "Climate change report shows alarming trends",
      Source: "MockNews",
      Url: "https://example.com/climate-repor",
      PublishedOn: "2025-04-20T00:00:00.000Z",
      Description: "Global temperatures continue to rise as per latest study.",
      Image: "/fallbackImage.jpg",
      SourceNationality: "",
      TitleSentiment: {
        sentiment: "",
        score: 0,
      },
      Summary:
        "A comprehensive new report from leading climate scientists across the globe has raised serious alarms about the escalating effects of climate change. The data indicates that average global temperatures have reached record highs, polar ice caps are melting at unprecedented rates, and the frequency of natural disasters such as floods, wildfires, and hurricanes is increasing. The report emphasizes the need for immediate action from governments, corporations, and individuals to reduce carbon emissions, transition to renewable energy, and implement sustainable practices. It also warns that failure to act within the next decade could lead to catastrophic consequences for ecosystems, biodiversity, and human health. Experts stress that climate adaptation and resilience must become central to national policy agendas moving forward.",
      Countries: [],
      Cities: [],
      Categories: {
        label: "Tech",
        IPTCCode: "",
      },
    },
    {
      Title: "Tech companies face new regulations in the EU",
      Source: "MockNews",
      Url: "https://example.com/eu-regulation",
      PublishedOn: "2025-04-20T00:00:00.000Z",
      Description: "European Union passes new digital market regulations.",
      Image: "/fallbackImage.jpg",
      SourceNationality: "",
      TitleSentiment: {
        sentiment: "",
        score: 0,
      },
      Summary:
        "The European Union has taken a bold step to rein in the dominance of big tech companies by passing comprehensive new legislation known as the Digital Markets Act (DMA) and the Digital Services Act (DSA). These laws aim to promote fair competition, safeguard consumer data, and ensure transparency in algorithmic decision-making. Under the new framework, tech giants like Apple, Amazon, Google, and Meta will be required to open up their platforms to competitors, disclose how content is moderated, and allow users more control over their personal data. Non-compliance could result in fines of up to 10% of a company’s global annual revenue. This regulatory shift is expected to inspire similar initiatives in other regions and marks a new era in the governance of digital platforms.",
      Countries: [],
      Cities: [],
      Categories: {
        label: "Tech",
        IPTCCode: "",
      },
    },
    {
      Title: "Scientists discover water on Mars",
      Source: "MockNews",
      Url: "https://example.com/mars-water",
      PublishedOn: "2025-04-20T00:00:00.000Z",
      Description:
        "New research finds potential sources of water on the Red Planet.",
      Image: "/fallbackImage.jpg",
      SourceNationality: "",
      TitleSentiment: {
        sentiment: "",
        score: 0,
      },
      Summary:
        "A team of international researchers has made a significant breakthrough in the search for extraterrestrial life by uncovering compelling evidence of water reservoirs beneath the surface of Mars. Using data collected from orbiters equipped with ground-penetrating radar, scientists detected signals that strongly suggest the presence of briny liquid water trapped under layers of Martian ice near the planet's south pole. This discovery supports the long-standing hypothesis that Mars may once have supported microbial life and raises the possibility that it still could. The findings also have major implications for future manned missions to Mars, as access to local water sources would greatly reduce the need for resupply missions from Earth. The scientific community is calling this one of the most promising leads in decades.",
      Countries: [],
      Cities: [],
      Categories: {
        label: "Tech",
        IPTCCode: "",
      },
    },
    {
      Title: "Breakthrough in quantum computing",
      Source: "MockNews",
      Url: "https://example.com/quantum-breakrough",
      PublishedOn: "2025-04-20T00:00:00.000Z",
      Description:
        "Quantum processors may soon outperform classical supercomputers.",
      Image: "/fallbackImage.jpg",
      SourceNationality: "",
      TitleSentiment: {
        sentiment: "",
        score: 0,
      },
      Summary:
        "In a major leap forward for the tech industry, researchers have unveiled a quantum computing prototype that demonstrates processing power far beyond what classical computers can achieve. This breakthrough device, built using superconducting qubits and complex error correction algorithms, successfully solved computations that would take traditional supercomputers years to complete. Experts believe that this could mark the dawn of the quantum era, where problems in fields like cryptography, material science, and drug discovery could be solved in minutes. The team behind the project emphasizes the importance of continuing to refine quantum hardware and scale up the number of stable qubits. Governments and private companies alike are investing billions into quantum R&D, foreseeing massive changes across nearly every scientific and industrial domain.",
      Countries: [],
      Cities: [],
      Categories: {
        label: "Tech",
        IPTCCode: "",
      },
    },
    {
      Title: "Global markets show signs of recovery",
      Source: "MockNews",
      Url: "https://example.com/market-recove",
      PublishedOn: "2025-04-20T00:00:00.000Z",
      Description:
        "Economic indicators suggest a rebound in global financial markets.",
      Image: "/fallbackImage.jpg",
      SourceNationality: "",
      TitleSentiment: {
        sentiment: "",
        score: 0,
      },
      Summary:
        "Following a prolonged period of economic uncertainty caused by the pandemic and geopolitical tensions, global financial markets are finally showing signs of recovery. Key indicators such as employment rates, consumer spending, and manufacturing output have all experienced noticeable growth in recent quarters. Central banks in various countries have cautiously begun adjusting interest rates, and investor confidence is steadily returning. Economists warn, however, that this recovery is uneven across regions, with developing economies still facing challenges due to inflation and debt. Nevertheless, the overall outlook is optimistic as governments implement stimulus measures, tech innovation drives growth, and the green energy sector expands. Market analysts are keeping a close eye on potential risks including energy supply disruptions and ongoing trade disputes.",
      Countries: [],
      Cities: [],
      Categories: {
        label: "Tech",
        IPTCCode: "",
      },
    },
    {
      Title: "New vaccine shows promise against emerging virus",
      Source: "MockNews",
      Url: "https://example.com/vaccine-trial",
      PublishedOn: "2025-04-20T00:00:00.000Z",
      Description: "Early trials of the vaccine show strong immune response.",
      Image: "/fallbackImage.jpg",
      SourceNationality: "",
      TitleSentiment: {
        sentiment: "",
        score: 0,
      },
      Summary:
        "A newly developed vaccine targeting a rapidly spreading virus has shown encouraging results in early clinical trials, offering hope for controlling future outbreaks. Developed by a team of immunologists and biotech experts, the vaccine employs a novel delivery system that enhances immune response and durability. Participants in the Phase I trial exhibited robust production of neutralizing antibodies with minimal side effects. The research team is now preparing for Phase II and III trials across multiple countries. Public health officials are closely monitoring progress, as the virus has already been reported in several regions. If successful, the vaccine could be fast-tracked for emergency use authorization and become a vital tool in global pandemic preparedness efforts.",
      Countries: [],
      Cities: [],
      Categories: {
        label: "Tech",
        IPTCCode: "",
      },
    },
    {
      Title: "Artificial intelligence powers next-gen search engines",
      Source: "MockNews",
      Url: "https://example.com/ai-search",
      PublishedOn: "2025-04-20T00:00:00.000Z",
      Description:
        "AI is being used to improve search relevance and user experience.",
      SourceNationality: "",
      Image: "/fallbackImage.jpg",
      TitleSentiment: {
        sentiment: "",
        score: 0,
      },
      Summary:
        "Search engines are undergoing a major transformation thanks to advances in artificial intelligence and machine learning. Major tech firms have begun integrating large language models, natural language processing, and neural ranking algorithms to deliver more context-aware and personalized results. These next-generation engines can now understand user intent more accurately, provide conversational responses, and suggest content proactively. The shift is expected to reshape how users interact with digital information, making search more intuitive and efficient. Experts caution, however, that these systems must be carefully designed to avoid bias and misinformation. Ongoing research is focused on ensuring fairness, transparency, and user trust in AI-driven search platforms.",
      Countries: [],
      Cities: [],
      Categories: {
        label: "Tech",
        IPTCCode: "",
      },
    },
  ],
};

export default mockData;
