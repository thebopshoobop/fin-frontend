const articles = [
  {
    author: "Lee Hutchinson",
    feed: 1,
    id: 4,
    image: "img/f9719cd7-1cc1-4357-963a-67aee5fa5df4.jpg",
    published: "2017, 11, 30, 22, 5, 18",
    read: false,
    summary:
      "Video is going to be a thing at Ars from here on, and we’ll do our best to make it good.",
    title: "The state of video journalism on Ars Technica—and its future",
    url: "https://arstechnica.com/?p=1212845"
  },
  {
    author: "Beth Mole",
    feed: 1,
    id: 9,
    image: "img/9944cb7a-7f04-4308-8270-ee78d433dca0.jpeg",
    published: "2017, 11, 30, 21, 46, 34",
    read: true,
    summary:
      "Luckily, they dug up the paperwork in time to get the real answer.",
    title:
      "Real wish or drunken regret? A “Do Not Resuscitate” tattoo throws doctors",
    url: "https://arstechnica.com/?p=1213181"
  },
  {
    author: "Sean Gallagher",
    feed: 1,
    id: 3,
    image: "img/16cf1e64-5984-4a05-a637-cb62b2428748.jpg",
    published: "2017, 11, 30, 20, 28, 24",
    read: false,
    summary: "Trump says we'll handle it, but options are severely limited.",
    title: "North Korea can hit all of US with its new ICBM. Deal with it",
    url: "https://arstechnica.com/?p=1212043"
  },
  {
    author: "Megan Geuss",
    feed: 1,
    id: 2,
    image: "img/ff715806-7471-4bf3-969f-92538cc9c62e.jpg",
    published: "2017, 11, 30, 20, 15, 15",
    read: true,
    summary:
      "The initial stage asks for qualifications; winning companies will submit proposals.",
    title:
      "The Boring Company proposes 125-150mph “Loop” for Chicago express train request",
    url: "https://arstechnica.com/?p=1212731"
  },
  {
    author: "Beth Mole",
    feed: 1,
    id: 7,
    image: "img/3681d121-4480-4fed-9a02-3b3277a6c028.jpg",
    published: "2017, 11, 30, 19, 54, 28",
    read: true,
    summary:
      "Researchers suspect use of a similar antibiotic in food animals primed them for defense.",
    title:
      "Historical diarrhea bacteria blasted past antibiotics, scooped pre-resistance",
    url: "https://arstechnica.com/?p=1213011"
  },
  {
    author: "Samuel Axon",
    feed: 1,
    id: 1,
    image: "img/d2b80cd8-778f-4210-9081-fbf5a7c7d1fe.jpg",
    published: "2017, 11, 30, 19, 0, 25",
    read: true,
    summary:
      "Your Ghost will answer your Alexa-powered  Destiny 2  questions in his own voice.",
    title:
      "Destiny 2’s Ghost is actually an Amazon Alexa speaker and skill now",
    url: "https://arstechnica.com/?p=1212827"
  },
  {
    author: "Peter Bright",
    feed: 1,
    id: 10,
    image: "img/ea9eaac4-5f62-47b2-90b7-9b8727f3d6d4.png",
    published: "2017, 11, 30, 18, 34, 15",
    read: true,
    summary:
      "And Surface Laptop sales still look to be much lower than 2017 Surface Pro.",
    title: "Windows 10 now on 600 million machines, not all of them PCs",
    url: "https://arstechnica.com/?p=1212831"
  },
  {
    author: "Timothy B. Lee",
    feed: 1,
    id: 13,
    image: "img/25b70b0b-ca6d-4f48-91d5-cf90b4b51311.jpg",
    published: "2017, 11, 30, 17, 43, 27",
    read: true,
    summary:
      "Are Bitcoin Uranium and Super Bitcoin the future of cryptocurrency? Or a big joke?",
    title: "Get ready for a wave of Bitcoin forks",
    url: "https://arstechnica.com/?p=1212765"
  },
  {
    author: "Ron Amadeo",
    feed: 1,
    id: 5,
    image: "img/5fb55e27-1b42-4255-a1bb-f7caa202fcc1.jpg",
    published: "2017, 11, 30, 16, 42, 29",
    read: true,
    summary: "Nest might lose its status as an independent Alphabet company.",
    title: "Report: Nest might be folded into Google’s hardware team",
    url: "https://arstechnica.com/?p=1212737"
  },
  {
    author: "Diana Gitig",
    feed: 1,
    id: 14,
    image: "img/e69955aa-6e4c-4153-a405-e1cea342c892.jpg",
    published: "2017, 11, 30, 15, 43, 32",
    read: true,
    summary: "In central Florida, the prey remakes its predator.",
    title: "Big invasive snails are driving birds of prey to get bigger",
    url: "https://arstechnica.com/?p=1212439"
  },
  {
    author: "Timothy B. Lee",
    feed: 1,
    id: 12,
    image: "img/023bc67b-8fa7-42fe-b5fe-8f43cd9ac6e4.jpg",
    published: "2017, 11, 30, 15, 35, 14",
    read: true,
    summary:
      "Gorsuch: Unfettered access is 'exactly what the framers were concerned about.'",
    title:
      "Justices hear case that could reshape location privacy in the cellular age",
    url: "https://arstechnica.com/?p=1210941"
  },
  {
    author: "Kyle Orland",
    feed: 1,
    id: 11,
    image: "img/88c03613-4f7e-4a69-bd5c-9c2656041592.jpg",
    published: "2017, 11, 30, 15, 23, 51",
    read: true,
    summary: "Big changes coming for experience system and everything else.",
    title:
      "Bungie opens up about Destiny 2 changes after hidden “scaling” debacle",
    url: "https://arstechnica.com/?p=1212729"
  },
  {
    author: "Valentina Palladino",
    feed: 1,
    id: 16,
    image: "img/73cfdb5d-2e1b-4772-896f-201c0f8ae9ab.png",
    published: "2017, 11, 30, 14, 27, 34",
    read: true,
    summary:
      "KardiaBand uses a neural network and the Apple Watch to detect abnormal heart rate.",
    title:
      "FDA clears first medical accessory for the Apple Watch—an EKG sensor",
    url: "https://arstechnica.com/?p=1212647"
  },
  {
    author: "Eric Berger",
    feed: 1,
    id: 6,
    image: "img/22b13e8d-b675-4b2a-a7b2-f83a5ff6b2c6.jpg",
    published: "2017, 11, 30, 14, 22, 25",
    read: true,
    summary:
      "The Fregat upper stage sent its satellites back into Earth's atmosphere.",
    title:
      "This week’s failed Russian rocket had a pretty bad programming error",
    url: "https://arstechnica.com/?p=1212641"
  },
  {
    author: "Ron Amadeo",
    feed: 1,
    id: 8,
    image: "img/9e6863cc-b8b3-4b2c-a29d-8fc530a80a3a.jpg",
    published: "2017, 11, 30, 13, 51, 33",
    read: true,
    summary:
      "A report claims Rubin, the father of Android, left Google after an HR investigation.",
    title: "Essential CEO Andy Rubin goes on leave for “personal reasons”",
    url: "https://arstechnica.com/?p=1212583"
  },
  {
    author: "Ars Staff",
    feed: 1,
    id: 15,
    image: "img/e6d7ebb2-7fec-49d5-9edd-ae97d1591c05.jpg",
    published: "2017, 11, 30, 13, 0, 12",
    read: true,
    summary:
      "“It’s like riding a mountain bike”—except, you know, an 8,000-pound, 15-foot-tall bike.",
    title:
      "Inside the mechanics of building 8,000lb human-powered robo-athletes",
    url: "https://arstechnica.com/?p=1212227"
  },
  {
    author: "Jon Brodkin",
    feed: 1,
    id: 17,
    image: "img/119a7568-4176-48f8-aac5-e550e30cba6b.jpg",
    published: "2017, 11, 29, 21, 25, 15",
    read: true,
    summary:
      "Charter cites FCC preemption of state net neutrality rules in case filed by NY.",
    title:
      "Charter is using net neutrality repeal to fight lawsuit over slow speeds",
    url: "https://arstechnica.com/?p=1212457"
  },
  {
    author: "Dan Goodin",
    feed: 1,
    id: 20,
    image: "img/6e0defe4-d427-4a08-914c-05b469736273.gif",
    published: "2017, 11, 29, 21, 10, 44",
    read: true,
    summary:
      "Resource-draining code hides in pop-under windows that can remain open indefinitely.",
    title:
      "Websites use your CPU to mine cryptocurrency even when you close your browser",
    url: "https://arstechnica.com/?p=1212451"
  },
  {
    author: "Ars Staff",
    feed: 1,
    id: 19,
    image: "img/c48efda8-052e-4c60-baaf-4d175af43fa3.png",
    published: "2017, 11, 29, 20, 55, 51",
    read: true,
    summary:
      "There are still deals on Sonos speakers, Destiny 2, 4K TVs, and more.",
    title:
      "Dealmaster: Get an Echo Dot for $30 and more leftover Cyber Monday deals",
    url: "https://arstechnica.com/?p=1212453"
  },
  {
    author: "Megan Geuss",
    feed: 1,
    id: 18,
    image: "img/bd5864a2-0511-4898-b4cd-9ac0f49bccc1.jpg",
    published: "2017, 11, 29, 19, 30, 10",
    read: true,
    summary:
      "Truck isn’t due for at least 2 years, but these companies are looking to adopt early.",
    title: "Who’s putting money down for a Tesla Semi?",
    url: "https://arstechnica.com/?p=1212337"
  }
];

export default articles;
