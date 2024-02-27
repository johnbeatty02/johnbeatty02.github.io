/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "John Beatty",
  title: "Hi, I'm John",
  subTitle: emoji(
    "A passionate Mechanical Engineer 🔧 leveraging innovative design and analysis to solve complex engineering challenges and drive technological advancement."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1n29uR-xzNVjysHEmpzOL7IHYZs5vq-po/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/johnbeatty02",
  linkedin: "https://www.linkedin.com/in/johnbeatty02/",
  gmail: "beatty.j@northeastern.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CREATIVE MECHANICAL ENGINEER WHO LOVES TO INNOVATE AND SOLVE PROBLEMS",
  skills: [
    emoji(
      "⚡ Design and simulation of mechanical systems using software like SOLIDWORKS, Fusion 360, and ANSYS"
    ),
    emoji("⚡ Development of prototypes and conducting various tests to validate the mechanical design"),
    emoji(
      "⚡ A passion for hands-on work"
    ),
    emoji(
      "⚡ Application of engineering principles to solve complex mechanical problems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "",
    fontAwesomeClassname: "fas fa-wrench"
  },
  {
    skillName: "",
    fontAwesomeClassname: "fas fa-hammer"
  },

],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternLogo.png"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "September 2020 - May 2024",
      desc: "GPA of 3.22, Dean's List Fall 2023",
      descBullets: [
        "Member, American Society of Mechanical Engineers",
        "Member, Northeastern University Wind Ensemble",
        'Member, Boston College "Screaming Eagles" Marching Band'
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mechanical Engineering Co-op",
      company: "Shell TechWorks",
      companylogo: require("./assets/images/stwLogo.png"),
      date: "January 2023 – June 2023",
      desc: "Shell TechWorks is a small branch of Shell focused on adapting and developing advanced technologies from other industries to meet the energy sector's unique challenges.",
      descBullets: [
        "Designed and manufactured test fixtures and test plan for new mechanical design; consulted with vendors to optimize component design",
        "Approved large mechanical assembly drawings and ensured manufacturability and compliance with technical standards for accurate drawings, including GD&T and welding symbols",
        "Designed, tested, and implemented a streamlined workflow for internal document approval in SOLIDWORKS PDM",
        "Selected internal lab tool based on technical requirements, user needs, and ergonomics and designed and manufactured adapters to ensure compatibility with existing equipment"
      ]
    },
    {
      role: "Mechanical Engineering Co-op",
      company: "Waters Corporation",
      companylogo: require("./assets/images/watersLogo.png"),
      date: "January 2021 – June 2021",
      desc: "The Instrument Development Group at Waters Corporation specializes in designing, testing, and refining analytical instruments and technologies to advance scientific research and address complex analytical challenges.",
      descBullets: [
        "Conducted tests, analyzed data, and reconfigured hardware to improve thermal performance in electromechanical instruments",
        "Performed feasibility study, concept development, component selection, prototype, and test of a fixture to verify various performance characteristics of axial fans on time and within budget",
        "Streamlined measurement process and increased data accuracy by designing and 3D-printing fixtures to hold components under test",
        "Performed cycle tests on prototype components, prepared solvents, led troubleshooting process, and analyzed performance over time using chromatograms",
        "Guided selection of components for alignment of an optomechanical structure using SOLIDWORKS FEA",
        "Performed surface roughness measurements using Keyence VK-X200 laser microscope and analyzed data"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of the big projects I have worked on",
  projects: [
    {
      image: require("./assets/images/ski.png"),
      projectName: "Foldable Cross Country Skis",
      projectDesc: "Worked with a team of 6 Northeastern University students to design a foldable cross-country ski with universal binding compatibility for use by the U.S. Army in tundra regions. Completed project through background research, concept development, component selection, and prototype phases.",
      footerLink: [
        { name: "More Information", url: "https://www.johnbeatty.net/projects/capstone" }
      ],
      descBullets: [
        "Developed innovative foldable design to enhance portability",
        "Conducted rigorous stress testing to ensure durability",
        "Utilized CAD software for precise engineering and design"
      ]
    },
    {
      image: require("./assets/images/boat_in_water.png"),
      projectName: "Optimizing Hydrodynamic Nosecone Design of an Autonomous Omnidirectional Catamaran Vehicle",
      projectDesc: "Performed analysis in ANSYS Fluent to select the best nose cone design for an autonomous catamaran vessel and utilized a parameter sweep to determine the drag force and heat flux for each nose cone geometry",
      footerLink: [
        { name: "More Information", url: "https://www.johnbeatty.net/projects/cfd" }
      ],
      descBullets: [
        "Implemented a microservices architecture to improve scalability",
        "Developed a responsive web application using React and Node.js",
        "Integrated with several university databases for real-time data access"
      ]
    }
    // Add more projects as needed
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications,and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Engineer-in-Training Certification (Pending)",
      subtitle:
        "Pending successful FE Exam on March 13 and graduation from Northeastern University on May 5.",
      image: require("./assets/images/manwriting.png"),
      imageAlt: "Man writing on glass surface",
      footerLink: [
        {
          name: "About the FE Exam",
          url: "https://ncees.org/exams/fe-exam/"
        }
      ]
    },
    {
      title: "Certified SOLIDWORKS Professional",
      subtitle:
        "Proficient in advanced SOLIDWORKS techniques.",
      image: require("./assets/images/solidworks.png"),
      imageAlt: "SOLIDWORKS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/17yWQJ-TLzesfeg1h6NaUBg-0WUDTLnYc/view?usp=sharing"
        }
      ]
    },

    {
      title: "Notary Public",
      subtitle: "Certified Notary Public in Massachusetts, authorized to certify documents and authenticate signatures for legal proceedings.",
      image: require("./assets/images/mass.png"),
      imageAlt: "Seal of Massachusetts",
      footerLink: [
        {name: "About", url: "https://www.notarize.com/blog/what-is-a-notary-public"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss an opening or just say hi? My Inbox is open to all!",
  number: "(508) 954-4798",
  email_address: "beatty.j@northeastern.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
