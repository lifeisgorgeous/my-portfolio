import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Solaiman Hridoy',
  title: "Hi! I'm Solaiman",
  description:
      "I'm a passionate Data professional born in vibrant Chittagong and working in Dhaka. By day, I harness Analytics, Automation, SQL, Python, and R to elevate digital media, ensuring decisions are made 50% faster and client satisfaction gets a 15% boost. Beyond the data, I am someone who loves music, enjoys traveling to different places & foods, blending insights with melody, and letting data analysis dance to the rhythm of exploration. Join me on this journey where the world of analytics meets the thrill of adventure!",
  resumeLink:
    'https://www.canva.com/design/DAExkMYMIDw/L0ryYqGCOjf0AAYrdh_0Gg/view?utm_content=DAExkMYMIDw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
};

export const openSource = {
  githubUserName: 'solaimanhridoy',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://solaimanhridoy.com/',
  linkedin: 'https://www.linkedin.com/in/solaimanhridoy/',
  github: 'https://github.com/solaimanhridoy',
  instagram: 'https://www.instagram.com/solaiman_hridoy/',
  facebook: 'https://www.facebook.com/solaimanhrid0y',
  twitter: 'https://twitter.com/SolaimanHridoy1',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'An Analyst Who Loves To Explore Tech and Data',
  data: [
    {
      title: 'Data, Information, Insight',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Automating reports and dashboards.'
        ),
        emoji('⚡ Providing insights and recommendations from campaign data.'),
        emoji('⚡ Communicating technical results and collaborate cross-functionally.'),
      ],
      softwareSkills: [
        {
          skillName: 'Statistics',
          iconifyTag: 'noto-v1:input-numbers',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'R',
          iconifyTag: 'vscode-icons:file-type-r',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'vscode-icons:file-type-pgsql',
        },
        {
          skillName: 'Excel or Spreadsheet',
          iconifyTag: 'vscode-icons:file-type-excel2',
        },
        {
          skillName: 'Looker or Data Studio',
          iconifyTag: 'logos:google-data-studio',
        },
        {
          skillName: 'Tableau',
          iconifyTag: 'logos:tableau-icon',
        },
        {
          skillName: 'Presentation',
          iconifyTag: 'vscode-icons:file-type-powerpoint',
        },
        {
          skillName: 'Canva',
          iconifyTag: 'devicon:canva',
        },
        {
          skillName: 'GA4',
          iconifyTag: 'logos:google-analytics',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Big Data Cleaning and Preprocessing', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Data Visualization and Insights',
    progressPercentage: '80',
  },
  {
    Stack: 'Automation with Programming Scripts',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of Science and Technology Chittagong',
    subHeader: 'Bachelor of Science in Computer Science and Engineering',
    duration: 'Jan 2017 - November 2021',
    desc: 'Competitive Programming Contestant and Participated in the research works.',
    grade: 'Grade B+',
    descBullets: [
      'Inter-University Programming Contestant',
      'ICPC Regional Dhaka Participant (USTC_BLACK), 2018',
      'Runner-Up Team (USTC_BLACK), Intra-Faculty Programming Contest, 2018',
      'Asst. Media & Communication Secretary, Executive Member, Graphics Designer at FSET Research Club, USTC, 2018-2020',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Analytics Executive',
    company: 'Bongo (Stellar Digital Limited)',
    companyLogo: '/img/icons/common/bongo.png',
    date: 'Feb 2022 – Present',
    desc: 'Skills: Web Analytics · Data Analytics · Dashboard · Analytical Skills · Google Data Studio · Video Analytics · Google Sheets · Google Analytics · Problem Solving · Tableau',
    descBullets: [
      "Automated monthly and weekly content reports and dashboards, reducing reporting time by 50% and saving the team 20 hours per week.",
      "Generated comprehensive reports summarizing campaign data and key insights using SQL query, leading to a 25% increase in campaign optimization efficiency and a 15% boost in client satisfaction",
      "Utilized Python programming and R script for data automation, resulting in a 30% reduction in manual workload and increased report accuracy.",
      "Conducted in-depth web analytics and leveraged Google Analytics to drive a 15% increase in website traffic, leading to a 10% rise in online sasles conversions."
    ],
  },
  {
    role: 'Data Anlyst Intern',
    company: 'Upskill Bangladesh',
    companyLogo: '/img/icons/common/upskill.jpeg',
    date: 'Dec 2021 - Jan 2022',
    desc: 'Google Sheets · Tableau · Microsoft Excel · Google Analytics · Problem Solving · Data Analysis · Data Visualization',
    descBullets: [
      'Performing analysis of EdTech project datasets including data collection, data management, data cleanup & data visualization',
      'Implementation of web analytics by setting goals and tracking funnels on google analytics.',
      'Creating reports by analyzing historical data to drive business insights and communicate findings with the core team.',
    ],
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Rfera Technology',
    companyLogo: '/img/icons/common/rfera.jpeg',
    date: 'Mar 2021 - June 2021',
    desc: 'Skills: Vuex · Django REST Framework · Internet of Things (IoT) · Sigfox · Python (Programming Language) · Problem Solving · JavaScript · Django · SQL · PostgreSQL · Vue.js',
    descBullets: [
      "Writing the source code and documentation for an IOT-based project using Python, Django, and Vuejs.",
      "Testing API with Postman Tool",
      "Aligning with the company's core values and other disciplines by teamwork."
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Covid 19 Data Exploration',
    desc: 'Analysis of Covid-19',
    github: 'https://github.com/solaimanhridoy/covid-19-data-exploration',
  },
  {
    name: 'CO2 Emission By Country',
    desc: 'Visulaizations of CO2 Emission By Country',
    link: 'https://public.tableau.com/shared/MNQP4MHDZ?:display_count=n&:origin=viz_share_link',
  },
  {
    name: 'Cyclistic Bike Share',
    desc: 'Google Data Anlytics Specialities Hands On Porject',
    github: 'https://github.com/solaimanhridoy/cyclistic-bike-share/blob/master/cyclistic-bike-share.ipynb',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: '',
    feedback:
      '',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Solaiman Hridoy',
  description:
    'A passionate Full Stack Data Analyst and Analytics Developer.',
  author: 'Solaiman Hridoy',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://solaimanhridoy.com',
  keywords: [
    'Solaiman',
    'Solaiman Hridoy',
    'Portfolio',
    'Solaiman Portfolio ',
    'Solaiman Hridoy Portfolio',
  ],
};
