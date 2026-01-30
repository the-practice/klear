export interface FloridaCityData {
  slug: string;
  name: string;
  county: string;
  neighborhoods: string[];
  subheadline: string;
  localContext: string;
  demographicNote?: string;
  nearbyCities: string[];
  testimonial: {
    quote: string;
    author: string;
    location: string;
  };
}

export const floridaCities: Record<string, FloridaCityData> = {
  jacksonville: {
    slug: "jacksonville",
    name: "Jacksonville",
    county: "Duval County",
    neighborhoods: ["Riverside", "San Marco", "Mandarin", "Orange Park", "Fleming Island", "St. Johns County", "The Beaches"],
    subheadline: "Professional psychiatric care delivered to your Jacksonville home",
    localContext: `Serving the entire Jacksonville metro area including the Beaches, Riverside, San Marco, Mandarin, Orange Park, and St. Johns County. As Florida's largest city by area, getting to specialized mental health treatment has always meant significant travel time for many Jax residents. Our at-home ketamine program eliminates that barrier entirely - whether you're in Downtown Jacksonville or out in Fleming Island, quality psychiatric care comes to you.

With Jacksonville's large military community and active-duty population, we understand the unique challenges veterans face when seeking mental health treatment. Our providers have experience working with service members and understand PTSD treatment needs specific to military personnel.

No need to drive across town in Jacksonville traffic or navigate the bridges connecting our sprawling city. We bring effective ketamine therapy directly to your door, whether you're near NAS Jax, in the Southside, or out at the beaches.`,
    demographicNote: "Home to a large veteran and military population",
    nearbyCities: ["St. Augustine", "Gainesville", "Daytona Beach"],
    testimonial: {
      quote: "Living in Riverside, I was driving 45 minutes each way to therapy appointments. Between the bridges and Jacksonville traffic, it was exhausting. Klear® changed everything—I do my sessions in my living room now, and the results have been incredible for my depression.",
      author: "Michael T.",
      location: "Jacksonville, Florida"
    }
  },

  miami: {
    slug: "miami",
    name: "Miami",
    county: "Miami-Dade County",
    neighborhoods: ["South Beach", "Coral Gables", "Coconut Grove", "Brickell", "Key Biscayne", "Pinecrest", "Doral", "Kendall"],
    subheadline: "Effective ketamine therapy for Miami area patients",
    localContext: `Proudly serving Miami-Dade County from South Beach to Kendall, Coral Gables to Doral, and all greater Miami neighborhoods. Miami's vibrant culture and fast-paced lifestyle come with unique stressors—from the pressures of our international business hub to the emotional toll of hurricane seasons. Our at-home ketamine program offers relief without navigating Miami's notorious traffic or finding parking in Brickell or South Beach.

Many Miami residents previously had limited options for ketamine therapy, with only a handful of clinics spread across our sprawling metro area. Now you can receive the same effective treatment from the comfort of your home, whether you're in a high-rise in Downtown Miami or a single-family home in the suburbs.

Our bilingual team understands Miami's diverse community. We provide culturally competent care in English and Spanish, ensuring you feel comfortable discussing your mental health journey in your preferred language.`,
    demographicNote: "Diverse multicultural community with large Hispanic and Latinx population",
    nearbyCities: ["Fort Lauderdale", "Hialeah", "Coral Gables"],
    testimonial: {
      quote: "Between work in Brickell and the traffic on I-95, the last thing I wanted to do was drive across Miami for medical appointments. Being able to do my ketamine sessions at home in Coral Gables has been a blessing. I finally feel like myself again after years of depression.",
      author: "Elena R.",
      location: "Miami, Florida"
    }
  },

  tampa: {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    neighborhoods: ["South Tampa", "Westchase", "Brandon", "Carrollwood", "Temple Terrace", "Hyde Park", "Davis Islands"],
    subheadline: "Skip the clinic. Get treatment in your Tampa residence",
    localContext: `We proudly serve patients throughout Hillsborough County, including South Tampa, Westchase, Brandon, Carrollwood, and the Temple Terrace area. Tampa Bay residents face unique mental health challenges—from the pressures of our growing tech sector to the stress of hurricane seasons. With limited ketamine clinics in the Tampa area, many patients previously faced long drives to receive treatment. Now you can receive the same effective therapy from the comfort of your Tampa home.

Tampa's rapid growth has brought opportunity but also increased stress, anxiety, and depression. Our providers understand the pressures facing Tampa Bay professionals, healthcare workers, and entrepreneurs. We offer flexible scheduling that works around your busy life, not traditional clinic hours.

Skip the drive across the Howard Frankland Bridge or the traffic on the Selmon Expressway. Whether you're in South Tampa near Bayshore Boulevard, out in Brandon, or up in Carrollwood, we bring ketamine treatment to you.`,
    demographicNote: "Growing tech hub with young professional population",
    nearbyCities: ["St. Petersburg", "Clearwater", "Lakeland"],
    testimonial: {
      quote: "The heat and traffic here make leaving home for appointments tough. Having my treatment delivered and doing sessions in my living room has been a game-changer for my depression. I can't believe how quickly I started feeling better.",
      author: "Maria S.",
      location: "Tampa, Florida"
    }
  },

  orlando: {
    slug: "orlando",
    name: "Orlando",
    county: "Orange County",
    neighborhoods: ["Winter Park", "Lake Mary", "Dr. Phillips", "Altamonte Springs", "Oviedo", "Windermere", "Celebration"],
    subheadline: "Professional psychiatric care delivered to your Orlando home",
    localContext: `Serving the greater Orlando area including Orange and Seminole Counties, from Winter Park to Lake Mary, Dr. Phillips to Oviedo. While Orlando is known as the theme park capital of the world, the service industry pressures and tourism-driven economy create unique mental health challenges for residents. Our at-home ketamine program offers relief without navigating I-4 traffic or tourist crowds.

Many Orlando residents working in the hospitality and entertainment industries face burnout, depression, and anxiety at higher rates. Our providers understand these unique stressors and offer treatment plans tailored to your situation. Whether you're a Disney or Universal employee, a healthcare professional at one of our major hospitals, or work in Orlando's growing tech scene, we're here to help.

From the Lake Nona medical community to the suburbs of Seminole County, we bring effective ketamine therapy to your door. No need to fight tourist traffic on I-Drive or navigate construction on our ever-growing highways.`,
    demographicNote: "Large service industry and tourism workforce",
    nearbyCities: ["Daytona Beach", "Melbourne", "Lakeland"],
    testimonial: {
      quote: "Working in the hospitality industry here in Orlando, I was burning out fast. The depression was getting worse, but the thought of sitting in traffic to get to another appointment was overwhelming. Doing treatment at home in Lake Mary changed my life.",
      author: "David K.",
      location: "Orlando, Florida"
    }
  },

  "st-petersburg": {
    slug: "st-petersburg",
    name: "St. Petersburg",
    county: "Pinellas County",
    neighborhoods: ["Downtown St. Pete", "Snell Isle", "Historic Old Northeast", "Tyrone", "Gulfport", "Madeira Beach", "Treasure Island"],
    subheadline: "Effective ketamine therapy for St. Petersburg area patients",
    localContext: `Serving St. Petersburg and all of Pinellas County, from Downtown St. Pete and the Historic Old Northeast to Treasure Island, Madeira Beach, and Gulfport. St. Pete's revitalization has brought growth and opportunity, but also the stress of rapid change in a close-knit community. Our at-home ketamine program allows you to focus on healing without crossing the bridge to Tampa or navigating beach traffic.

St. Petersburg's active arts community, growing tech scene, and beautiful waterfront lifestyle attract many residents—but depression and anxiety don't discriminate based on zip code. Whether you're a young professional in the burgeoning downtown tech corridor, an artist in the Warehouse Arts District, or enjoying retirement along the Gulf, we provide personalized ketamine therapy in your own space.

Our providers understand St. Pete's unique culture—the blend of creativity, outdoor lifestyle, and community connection that makes our city special. We offer treatment that respects your individuality and helps you get back to enjoying the St. Pete life you love.`,
    demographicNote: "Active arts community and growing tech corridor",
    nearbyCities: ["Tampa", "Clearwater", "Sarasota"],
    testimonial: {
      quote: "I love living in the Old Northeast, but crossing the bridge to Tampa for medical appointments was miserable. Being able to do my ketamine sessions at home, looking out at Tampa Bay, made the whole experience so much more healing. I'm finally free from the depression I've carried for years.",
      author: "Jennifer L.",
      location: "St. Petersburg, Florida"
    }
  },

  "fort-lauderdale": {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    county: "Broward County",
    neighborhoods: ["Victoria Park", "Rio Vista", "Harbor Beach", "Las Olas", "Wilton Manors", "Pompano Beach", "Coral Springs"],
    subheadline: "Skip the clinic. Get treatment in your Fort Lauderdale residence",
    localContext: `Serving Fort Lauderdale and Broward County from Victoria Park and Rio Vista to Harbor Beach, Las Olas, and surrounding communities. As the heart of the Gold Coast, Fort Lauderdale residents enjoy a beautiful coastal lifestyle—but the pressures of our tourism-driven economy, hurricane seasons, and rapid growth can take a toll on mental health.

Many Fort Lauderdale residents previously had to travel to Miami for ketamine therapy, or face limited local options. Our at-home program brings effective treatment directly to you, whether you're in a waterfront home in Harbor Beach, a condo in Victoria Park, or anywhere in greater Broward County.

Fort Lauderdale's boating community, yachting industry, and seasonal residents face unique challenges—from the stress of high-pressure careers to the isolation that can come with wealth. Our providers offer confidential, discreet treatment that respects your privacy and helps you reclaim your wellbeing without anyone knowing unless you choose to tell them.`,
    demographicNote: "Large boating and marine industry community",
    nearbyCities: ["Miami", "Pompano Beach", "Hollywood"],
    testimonial: {
      quote: "As a yacht captain, my schedule is unpredictable and I'm constantly on the move. Klear® worked around my life instead of the other way around. I did my sessions at home in Rio Vista when I was between charters, and the results have been remarkable.",
      author: "Robert M.",
      location: "Fort Lauderdale, Florida"
    }
  },

  hialeah: {
    slug: "hialeah",
    name: "Hialeah",
    county: "Miami-Dade County",
    neighborhoods: ["Miami Springs", "Medley", "Hialeah Gardens", "Doral", "Miami Lakes"],
    subheadline: "Professional psychiatric care delivered to your Hialeah home",
    localContext: `Serving Hialeah and surrounding Miami-Dade County communities including Miami Springs, Medley, Hialeah Gardens, and Miami Lakes. As one of Florida's largest cities with a predominantly Spanish-speaking population, Hialeah deserves culturally competent mental health care that understands our community.

Our bilingual team provides ketamine therapy with full Spanish language support, ensuring you can discuss your symptoms, fears, and hopes in the language you're most comfortable with. No translation needed, no cultural barriers—just direct, understanding communication about your mental health.

Many Hialeah residents previously faced a choice between driving into Miami for treatment or going without. Now you can receive the same effective ketamine therapy at home, surrounded by family and in a familiar environment. We respect the importance of family and community in Hispanic culture and welcome support systems into your treatment journey.

From the industrial areas of Medley to the residential streets of Hialeah Gardens, we bring quality psychiatric care to your door without the need to navigate Palmetto Expressway traffic or find parking in Miami.`,
    demographicNote: "Predominantly Hispanic/Latinx community with strong family values",
    nearbyCities: ["Miami", "Doral", "Miami Lakes"],
    testimonial: {
      quote: "Como madre y trabajadora, el tiempo es muy precioso para mí. Poder hacer mis sesiones en casa con mis hijos cerca fue lo mejor que pudo pasar. El poder hablar con los doctores en español me hizo sentir tan comprendida. Por fin siento que mi depresión no me controla más.",
      author: "Carmen R.",
      location: "Hialeah, Florida"
    }
  },

  "port-st-lucie": {
    slug: "port-st-lucie",
    name: "Port St. Lucie",
    county: "St. Lucie County",
    neighborhoods: ["Tradition", "St. Lucie West", "River Park", "Fort Pierce", "Jensen Beach", "Vero Beach"],
    subheadline: "Effective ketamine therapy for Port St. Lucie area patients",
    localContext: `Serving Port St. Lucie and the Treasure Coast, including Tradition, St. Lucie West, River Park, Fort Pierce, and nearby Jensen Beach and Vero Beach. As one of Florida's fastest-growing cities, Port St. Lucie has attracted many families and retirees seeking a slower pace—but quality mental health care has often required traveling south to Palm Beach County or even Miami.

The Treasure Coast's relaxed lifestyle doesn't make residents immune to depression, anxiety, and PTSD. In fact, many retirees dealing with life transitions, veterans in our large military community, and families facing the pressures of modern life find themselves needing help. Our at-home ketamine program brings treatment to you, without the long drive on I-95 or Florida's Turnpike.

Whether you're in the master-planned community of Tradition, established neighborhoods in St. Lucie West, or anywhere in between, we deliver effective ketamine therapy to your door. No need to fight rush hour traffic heading south or spend hours in the car for treatment sessions.`,
    demographicNote: "Large retiree population and growing family communities",
    nearbyCities: ["Vero Beach", "Fort Pierce", "Jupiter"],
    testimonial: {
      quote: "We moved to Tradition for retirement, but my depression actually got worse. The thought of driving all the way to West Palm or Miami for treatment was overwhelming. Klear® coming right to my door made all the difference. I'm finally enjoying the retirement we worked so hard for.",
      author: "Patricia B.",
      location: "Port St. Lucie, Florida"
    }
  },

  "cape-coral": {
    slug: "cape-coral",
    name: "Cape Coral",
    county: "Lee County",
    neighborhoods: ["Fort Myers", "Estero", "Bonita Springs", "Sanibel", "Captiva", "North Fort Myers"],
    subheadline: "Skip the clinic. Get treatment in your Cape Coral residence",
    localContext: `Serving Cape Coral and Lee County, including Fort Myers, Estero, Bonita Springs, and the islands of Sanibel and Captiva. As Florida's largest city by area geographically, Cape Coral's canal-filled layout means getting anywhere can take time—especially when you need to cross the bridge to Fort Myers for medical appointments.

Southwest Florida's seasonal population, large retiree community, and service-industry workforce all face unique mental health challenges. Our providers understand the specific stressors of living in paradise—from hurricane anxiety to the isolation that can come with seasonal living. We offer ketamine therapy that fits your real life, whether you're here year-round or part-time.

Many Cape Coral residents previously had limited options for specialized mental health treatment, with most ketamine clinics located in Naples or Sarasota. Now you can access the same effective therapy at home, whether you're on a canal in SE Cape Coral, near the waterfront in Southwest Cape, or anywhere in our sprawling city.

Skip the bridge traffic to Fort Myers and enjoy your treatment sessions in the comfort of your own home. We're here to help you reclaim your wellbeing and get back to enjoying the Southwest Florida lifestyle.`,
    demographicNote: "Large seasonal population and retiree community",
    nearbyCities: ["Fort Myers", "Naples", "Sarasota"],
    testimonial: {
      quote: "Living on a canal in SE Cape Coral is great, but getting to Fort Myers for appointments meant dealing with the bridge and traffic every time. Having treatment at home has been wonderful. I can look out at my backyard while doing sessions, and it's so much more relaxing than a sterile clinic.",
      author: "Thomas W.",
      location: "Cape Coral, Florida"
    }
  },

  tallahassee: {
    slug: "tallahassee",
    name: "Tallahassee",
    county: "Leon County",
    neighborhoods: ["Midtown", "Betton Hills", "Killearn", "SouthWood", "Thomasville", "Crawfordville", "Monticello"],
    subheadline: "Professional psychiatric care delivered to your Tallahassee home",
    localContext: `Serving Tallahassee and the Big Bend region, including Midtown, Betton Hills, Killearn, SouthWood, and surrounding areas. As Florida's capital city with two major universities, Tallahassee's unique blend of politics, academia, and Southern charm creates specific mental health challenges that our providers understand.

With a large student population facing academic pressures, state workers navigating high-stress careers, and a community that values privacy, Tallahassee residents often struggle to find convenient mental health care. Our at-home ketamine program eliminates the need to explain where you're going or run into constituents, students, or colleagues in waiting rooms.

For many in North Florida and the Big Bend region, access to specialized mental health treatment has meant traveling to Jacksonville, Gainesville, or even out of state. Now you can receive effective ketamine therapy at home in Tallahassee, whether you're a student near FSU or FAMU, working near the Capitol, or enjoying life in Killearn Estates.

Our providers understand the unique culture of Tallahassee—from the academic calendar rhythms to the legislative session pressures. We offer flexible scheduling that works around exams, session, and your actual life—not 9-to-5 clinic hours.`,
    demographicNote: "Large university student population and government workers",
    nearbyCities: ["Thomasville, GA", "Crawfordville", "Monticello"],
    testimonial: {
      quote: "As a lobbyist, privacy is everything to me. I couldn't risk running into people at a clinic or having my treatment become public knowledge. Klear® gave me complete confidentiality—no one knew unless I told them. And doing sessions at home in Betton Hills meant I could work my treatment around session days.",
      author: "Sarah D.",
      location: "Tallahassee, Florida"
    }
  }
};

export const tier2Cities = [
  { slug: "pembroke-pines", name: "Pembroke Pines", county: "Broward County" },
  { slug: "hollywood", name: "Hollywood", county: "Broward County" },
  { slug: "gainesville", name: "Gainesville", county: "Alachua County" },
  { slug: "miramar", name: "Miramar", county: "Broward County" },
  { slug: "coral-springs", name: "Coral Springs", county: "Broward County" },
  { slug: "palm-bay", name: "Palm Bay", county: "Brevard County" },
  { slug: "west-palm-beach", name: "West Palm Beach", county: "Palm Beach County" },
  { slug: "clearwater", name: "Clearwater", county: "Pinellas County" },
  { slug: "lakeland", name: "Lakeland", county: "Polk County" },
  { slug: "pompano-beach", name: "Pompano Beach", county: "Broward County" }
];
