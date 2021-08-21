// Importing all sponsors logos from Assets
import taskade from "./Assets/sponsorsLogos/taskade.png";
import Replit from "./Assets/sponsorsLogos/replit.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import ll from "./Assets/sponsorsLogos/ll.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import farhan from "./Assets/teami/farhan.jpg";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import lyin from "./Assets/teami/lyin.jpg";
import Pravallika from "./Assets/teami/pravallika.jpg";
//import keshav from "./Assets/teami/keshav.jpg";
import sidra from "./Assets/teami/Sidra.png";
import usama from "./Assets/teami/usama.png";
import usman from "./Assets/teami/usman.png";
import kk from "./Assets/teami/kk.png";
import keshav from "./Assets/teami/keshav.jpg";




/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";

const TOP_SECTION = {
  TITLE: "HackmaFest",
  Typed_effect: ["Hack For Community", "Hack For Diversity","Hack For Inclusion"],
  SHORT_DESCRIPTION:
    "Join us on 20th October 2021 with over 1000 students from across the world for 5 days of learning and 36 hours of creation, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/limbohacks/",
  discord: "https://discord.com/invite/8XJSzmtWPp",
  linkedin: "https://www.linkedin.com/company/limbo-hacks/",
  twitter: "https://twitter.com/HacksLimbo",
  devpost: "https://limbo-hacks-12968.devpost.com/",
  email: "mailto:hi@limbohacks.tech",
  mail: "hi@hackmafest.tech"
};

const MIDDLE_SECTION = {
  TITLE: "What is Hackmafest?",
  LONG_DESCRIPTION:
    "Hackmafest is a weeklong festival to welcome beginners hacker to hackers communities and hackathons followed by a 36 hour long running hackathon will be held on October 20th & 21th , We calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at Hackmafest will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u"
  },
  JOIN_TEAM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "overall First",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "overall Second",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Second",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Solo",
      content:
        "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team"
    },
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: " Best Beginner",
      content: "Your project will qualify for this category if atleast 50% "
    },
    {
      icon: <i class=" fifth fa-3x fas fa-book-open"></i>,
      type: "Best UI/UX",
      content: "Project with most creative designs will be UI/UX track"
    }
  ],
  [
    //Array 3
    {
      icon: <i class="fas fa-4x sixth fa-male"></i>,
      type: "Best Web App with Qoom",
      content: "Must use qoom in your project to win this category"
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Farhan Ashraf",
      role: "Lead Organizer",
      github: "github.com/mriceflame",
      linkedin: "linkedin.com/s4a",
      img: farhan
    },
    {
      Name: "Awais",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Usman Hamid",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: usman
    }
  ],
  [
    //Array 2
    {
      Name: "Sameer",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Sidra",
      role: "Head Promotions",
      github: "",
      linkedin: "",
      img: sidra
    },
    {
      Name: "Tauqeer",
      role: "Event Head",
      github: "",
      linkedin: "",
      img: kk
    }
  ],
  [
    //Array 3
    {
      Name: "Usama Rafay",
      role: "Technical Support Team head",
      github: "",
      linkedin: "",
      img: usama
    },
    {
      Name: "Asim Nawaz",
      role: "Resource Team head",
      github: "",
      linkedin: "",
      img: keshav
    }
  ],
  [
    //Array 3
    {
      Name: "Taskeen Fatima",
      role: "Community Manager",
      github: "",
      linkedin: "",
      img: Pravallika
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
        'Hackathons are community events, where you get to interact with students from all around the world as well as forming teams to create future tech'      },
      {
        label: "I have no idea what coding is?",
        content: "Thats why you must attend our event, we will guide you through everything with awesome workshops,tech talk and many more"
      },
      {
        label: "Do i need to pay any money?",
        content: "Absolutely not ! our event is free and open for all , if incase anyone asks for money you can dm any of our moderator"
      },
      {
        label: "I dont have a team to participate?",
        content: "You dont need one, prior to our event in discord you will meet many hackers exactly like you and join to form a team, if not you can participate alone and fun fact we are running special best solo prize."
      }
    ],
    [
      {
        label: "How to participate?",
        content: "All you need is to fill our form above and join Discord, we will guide you through everything there"
      },
      {
        label: "I have more doubts?",
        content: "Reach us directly at (hi@hackmafest.tech) we would happy to help you."
      }
      ,
      {
        label: "Can i volunteer?",
        content: "Yes we are looking for volunteers, fill the form (in footer section) we would be glad to have you."
      }
      ,
      {
        label: "What are the conduct of guidlines?",
        content: "We strongly follow the MLH code of conduct, Our team members will enforce this code throughout the event. "
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions
};
