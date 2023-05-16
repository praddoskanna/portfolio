import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    graphql,
    solidity,
    python,
    etherjs,
    wipro,
    amepos,
    crsquare,
    review2earn,
    fundraise,
    ozone,
    sarma
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web3 Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Crypto Trader",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "Ether JS",
      icon: etherjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Graph QL",
      icon: graphql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Django",
      icon: python,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Project Engineer",
      company_name: "Wipro Technologies",
      icon: wipro,
      iconBg: "#ffffff",
      date: "July 2021 - July 2022",
      points: [
        "Delivered, analyzed and resolved technical issues and participated in continuous enhancement of established development process.",
        "Assisted in developing product features and providing specific suggestions that led to optimization of the client software.",
        "Learned company standards of application software development, Agile, and iterative development methodologies.",
        "Coded solutions and unit tests to deliver specific requirements for client software"
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "AMEPAY Pvt Ltd",
      icon: amepos,
      iconBg: "#ffffff",
      date: "November 2022 - Present",
      points: [
        "Developing scalable and maintainable database schemas using technologies such as MongoDB and integrating them with backend APIs.",
        "Creating and consuming GraphQL APIs to enable seamless communication between front-end and back-end systems, and implementing error handling and exception handling mechanisms to ensure application robustness.",
        "Collaborating with cross-functional teams such as product managers, designers, and other developers to ensure alignment of development efforts with business goals.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web3 Developer",
      company_name: "CR Square Finance",
      icon: crsquare,
      iconBg: "#ffffff",
      date: "December 2022 - Present",
      points: [
        "Developing decentralized applications (dApps) using blockchain technology and integrating them with front-end frameworks like React.js.",
        "Developing and implementing GraphQL APIs to integrate blockchain applications with external services and data sources",
        "Creating seamless user experiences by integrating wallet connectivity into application, enabling users to easily mint NFT on the blockchain.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
      "Praddos Kanna has done amazing work for us. He is great at creating things for our users to see and use on our product. He's also really good at working with blockchain technology, which is a big help. Praddos is more than just good at his job. He is also a great teammate. He's always ready to help others and share what he knows. We're really lucky to have someone as dedicated and talented as Praddos on our team.",   
      name: "Yasaswy Sarma Veluri",
      designation: "CFO",
      company: "CR Square Finance",
      image: sarma,
      social:"https://www.linkedin.com/in/vsy38/"
    },
    {
      testimonial:"Praddos is a highly skilled full stack and blockchain developer with a deep understanding of both the front-end and back-end of web development. He is also a highly motivated and dedicated individual who is willing to go the extra mile to get the job done, and he's always looking for ways to improve his skills and knowledge. A team player and is always willing to help out his colleagues.",
      name: "Praveen S",
      designation: "BA",
      company: "AMEPAY Pvt Ltd",
      image: "https://media.licdn.com/dms/image/C5603AQFQRiX_YArEGA/profile-displayphoto-shrink_800_800/0/1633003777560?e=1689811200&v=beta&t=xNX5Wd7Q76KdaKb3oqPqmv7driKTTkhCU2D2sh6tWaY",
      social:"https://www.linkedin.com/in/praveen-s-9b7b7016/"
    },
    {
      testimonial:
        "Working with Praddos, our full stack web3 developer, was a game changer. His expertise in blockchain and web development helped us build a top-notch platform. Their communication and problem-solving skills made the process smooth and enjoyable.",
      name: "Elangovan Gopal",
      designation: "Founder",
      company: "iLai Labs", 
      image: "https://media.licdn.com/dms/image/D5603AQFDgLciuuayQg/profile-displayphoto-shrink_400_400/0/1668956037769?e=1689811200&v=beta&t=pNHK5IWvQccW9A97YfbB7QRAzAsOOrNhR6cY3k7SBEk",
      social:"https://www.linkedin.com/in/elangovan-gopal/"
    },
  ];
  
  const projects = [
    {
      name: "Review2Earn Platform",
      description:
        "#Review2Earn platform that allows to users to review the projects anonymously and provide valuable feedback to founders and earn wCR2 Tokens as rewards.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "graphQL",
          color: "green-text-gradient",
        },
        {
          name: "web3",
          color: "pink-text-gradient",
        },
      ],
      image: review2earn,
      source_code_link: "https://dashboard.guardian.crsquare.finance/",
    },
    {
      name: "Fundraising Platform",
      description:
        "Web3 application that enables founders to fund raise and validate their product .Also Providing an Decentralized Due Diligence & Peer Review ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "graphQL",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: fundraise,
      source_code_link: "https://app.guardian.crsquare.finance/",
    },
    {
      name: "ICO Presale Application",
      description:
        "Presale ICO Application, which enables users to purchase OZO Tokens of Ozonechain seamlessly integrated with Coinbase e-commerce.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "web3",
          color: "pink-text-gradient",
        },
      ],
      image: ozone,
      source_code_link: "https://ico.ozonechain.io/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };