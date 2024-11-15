import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  puppyypottypal,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Attributes",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Testimonials",
    url: "#testimonials",
  }
  // },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Predicts when your puppy will next need the toilet",
  "Advice on training dependent on toilet trip results",
  "Overall training help",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the app to understand and respond to voice commands, making it easier for users to input their puppy's toilet trips.",
    date: "October 2024",
    status: "In Progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the app more frequently and reward you or your puppy!.",
    date: "November 2024",
    status: "In Progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Puppy Potty Pal Customization",
    text: "Allow users to customize the app's appearance and ai behavior, making it more engaging and fun to interact with.",
    date: "August 2024",
    status: "In Progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the spp to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "September 2024",
    status: "In progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Create a 'family' on the app to share your dog's bathroom logs and updates across multiple phones and users, keeping everyone in the loop.";
export const integrationText = "Our smart algorithm and integration with AI learns from your puppy's routine to predict their next bathroom break.";
export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: integrationText,
  },
  {
    id: "1",
    title: "Notifications & Alerts",
  },
  {
    id: "2",
    title: "Toilet Training Insights",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Free version of Puppy Potty Pal..",
    price: "0",
    features: [
      "Log potty times for 1 dog",
      "Daily predictions for potty tracking",
      "Access to social media features (upload photos, like other users' pictures)",
      "Ad-supported",
    ],
  },
  {
    id: "1",
    title: "Premium Plan",
    description: "Get the premium plan of Puppy Potty Pal..",
    price: "9.99",
    features: [
      "Log potty times for unlimited dogs",
      "AI predictions and recommendations from Arlo",
      "Family sharing: Sync your dog’s potty data with multiple users/devices",
      "Custom notifications for potty breaks",
      "Add free experience",
      "Priority access to new features and updates",
    ],
  },
  {
    id: "2",
    title: "Lifetime Plan",
    description: "Get access to Puppy Potty Pal forever with the one time fee!",
    price: "49.99",
    features: [
      "All features of the Premium Plan with no ongoing subscription",
      "Lifetime access to any future feature updates and improvements",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Track every moment",
    text: "Easily log each of your puppy's bathroom breaks and keep a record of their routine in one place.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: puppyypottypal,
  },
  {
    id: "1",
    title: "AI-powered predictions",
    text: "Let our smart algorithm analyze your puppy's habits and predict when they’ll need to go next, helping you stay ahead of accidents.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: puppyypottypal,
    light: true,
  },
  {
    id: "2",
    title: "Social sharing",
    text: "Upload and share adorable puppy pictures with the community, and like your favorite posts from fellow dog parents.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: puppyypottypal,
  },
  {
    id: "3",
    title: "Family sharing",
    text: "Create a 'family' on the app to share your dog's bathroom logs and updates across multiple phones and users, keeping everyone in the loop.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: puppyypottypal,
    light: true,
  },
  {
    id: "4",
    title: "Speed up training",
    text: "Using AI insights, quickly improve your puppy’s toilet training and avoid unnecessary stress and mess.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: puppyypottypal,
  },
  {
    id: "5",
    title: "Personalized insights",
    text: "Receive personalized training tips and insights based on your puppy’s specific behavior and bathroom patterns.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: puppyypottypal,
  },
];


export const socials = [
  {
   id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/PuppyPottyPal",
   }
  // {
  //   id: "0",
  //   title: "Discord",
  //   iconUrl: discordBlack,
  //   url: "#",
  // },
  // {
  //   id: "2",
  //   title: "Instagram",
  //   iconUrl: instagram,
  //   url: "#",
  // },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  // {
  //   id: "4",
  //   title: "Facebook",
  //   iconUrl: facebook,
  //   url: "#",
  // },
];
