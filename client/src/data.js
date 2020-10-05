import cnet from "./assets/cnet2.png";
import angular from "./assets/angular3.png";
import js from "./assets/js.png";
import sql from "./assets/sql.png";
import react from "./assets/react.png";
import java from "./assets/java.png";

import pap from "./assets/pap2.jpg";
import album from "./assets/album.jpg";
import checkit from "./assets/checkit.jpg";
import office from "./assets/office.jpg";
import downloader from "./assets/downloader.jpg";
import nothing from "./assets/nothing.jpg";
import shitw from "./assets/shitw.jpg";
import port from "./assets/port.jpg";

const projectsDetails = [
  {
    title: "Pen & Paper",
    gitURL: "https://github.com/mspas/Pen-and-paper",
    link: "",
    text: "Social media, forum",
    tech: "Angular 8, C#, .NET Core 2.0",
    img: pap,
    desc:
      "The 'social media' module of this app I made for my thesis. What I mean by 'social-media' is user profiles, friends lists, creating events " +
      "and private messages. Client APP was made with Angular 5, when API with .NET Core 2.0 and Entity Framework. After that I created also a forum module. " +
      "Then I reworked the whole graphic desing. After that I reworked API, since I wasn't really happy how it was done. Then I reworked the whole " +
      "graphic desing again... Currently, after a break that I've made for other projects, I came back to this one and with gained expirience and knowledge, " +
      "I'm refactoring code and adding new features. I also updated client APP to 8th version of Angular, and converted styles to use preprocessor SASS." +
      "Due to all that reworks, the app is not finished yet. Also I'm not satisfied enough to publish a live demo yet, but I'm working on that.",
  },
  {
    title: "Album",
    gitURL: "https://github.com/mspas/Album",
    link: "https://www.paradyzalbum.com/",
    text: "Photo album with CMS",
    tech: "React, Redux, Node.js, MongoDB",
    img: album,
    desc:
      "That one is my latest project, which I made for a local school. They collected quite a few old, historical photos and prepared a exhibition in local school. Then I decided that " +
      "I can help with publishing it to the whole local community. App is made with React with slight use of Redux. API is made with Node.js, with MongoDB database. " +
      "I've prepared whole admin panel (a 'CMS', if I am not mistaken) for uploading new photos and editing existing ones. To store images I'm using a 3rd party API - Cloudinary. " +
      "I used this project to play a bit with well known features for that kind of photo albums, but made all myself instead of using libraries, like - sliding gallery, " +
      "tumbnails-subgallery, swiping images on mobile, fetching data from API with pagination but fired on scrolling down the content, etc.",
  },
  {
    title: "CheckIT",
    gitURL: "https://github.com/mspas/CheckIT-Demo",
    link: "https://mspas.github.io/CheckIT-Demo",
    text: "Tracker of attendence in lectures",
    tech: "React, Redux",
    img: checkit,
    desc:
      "University group project where I was responsible for a front-end module. Story time - student is entering a classroom and he's putting his " +
      "phone close enough to the lecturer's phone, to mark his presence. This is the responsibility of the moblie module. Lecturer is using the browser app. He can check the " +
      "attendence list and for ex. export it to a file. Browser APP was my part of a project. Other modules are not deployed so you can see ony a demo version of my " +
      "module. This project was really fun that we needed to cooperate and manage our workflow. To sign in on demo version just type whatever as a login and password.",
  },
  {
    title: "Office Pathfinder",
    gitURL: "https://github.com/mspas/office-pathfinder",
    link: "",
    text: "Interactive map",
    tech: "Angular 5, C# .NET Core 2",
    img: office,
    desc:
      "Another university group project developed with a company that submitted an idea for it. We tried to work like professional-ish team with 2 persons responsible " +
      "for client APP (I was one of them), 2 other for API and someone like project manager responsible for contacting with a company. We worked in a SCRUM-like workflow " +
      "with meetings in the company's office. And yes, it was as interesting expirience as it sounds. The application was a SVG map of the office where users could click " +
      "on each desk or room to check who they can found there or type a name and find person's workplace on map. APP also contained a Admin-Panel to manage whole necessary data.",
  },
  {
    title: "Clip Downloader",
    gitURL: "https://github.com/mspas/Clip-downloader",
    link: "https://clipzzz.herokuapp.com/",
    text: "Video downloader",
    tech: "React, Node.js",
    img: downloader,
    desc:
      "I was thinking about some bigger project connected to Twitch clips, so to get a little bit into the topic i decided to make this app. User is " +
      "pasting URL of a Twitch clip or a YouTube video, after some validation, server is calling Twitch/YouTube APIs to get the video's informations " +
      "and then download it.",
  },
  {
    title: "Nothing.",
    gitURL: "https://github.com/mspas/Nothing",
    link: "https://mspas.github.io/Nothing/",
    text: "Landing page",
    tech: "React, Sass",
    img: nothing,
    desc:
      "Landing page made while learning React. It was first time with React ever. I just wanted to have some fun during getting a really brief overview of this library.",
  },
  {
    title: "So How Is The Weather",
    gitURL: "https://github.com/mspas/So-How-Is-The-Weather",
    link: "https://mspas.github.io/So-How-Is-The-Weather/",
    text: "Weather app",
    tech: "Angular 8, Sass",
    img: shitw,
    desc:
      "I wanted to make some simple project to refresh my Angular knowledge. So I did. The application is using OpenWeather API. User can check " +
      "weather due to the location data from the browser or search for any another city.",
  },
  {
    title: "About Me",
    gitURL: "https://github.com/mspas/Portfolio",
    link: "",
    text: "Portfolio",
    tech: "React, Sass",
    img: port,
    desc:
      "You are here right now. I wanted to make something nice with 3D-ish effects. It was quite fun, after all, especially when it finally worked. To make those boxes in " +
      "skills section I needed to use some tutorials, not gonna lie. But after getting that knowledge, the best part of this project was figuring out how to make this " +
      "project-slider that you're looking at right now. The 'About' view is made of backgrounds which positions are changing based on a coursor positions. Mouse " +
      "handler that I used, I made previously for the project called 'Nothing'.",
  },
];

const cardsData = [
  {
    name: "Angular",
    img: angular,
    text:
      "Angular was the first JS framework that I've met. My thesis project (still not fully finished tho) was build in Angular. Since I came to " +
      "front-end technologies from other OOP languages rather than JavaScript itself, thanks for Angular, my begginings were easier.",
    comment:
      "Louis XIV, the Sun King, the symbol of absolute power in Europe. During his long reign France was the leading European power. " +
      "Despite his powerful image he sufferd a number of diseases. Louis outlived most of his legitimate sons. Napoleon " +
      "described him 'the only King of France worthy of the name'.",
    progress: 60,
    develop: true,
  },
  {
    name: "C# + .NET",
    img: cnet,
    text:
      "Honestly, I run into C# and .NET by accident. That was due to tech stack of group project on university where I was responsible for " +
      "front-end layer ('Office Pathfinder' in project's section). I've also tried a Java Spring, it wasn't bad, but at the end of the day " +
      "struggles with Maven project configuration (especially when you need to install a library from outside of the marketplace) made for me " +
      "a assumption about C# and .NET as a royal couple bringing peace and prosperity.",
    comment:
      "Marriage between Henry VII Tudor and Elizabeth of York ended War of the Roses - last episode of 100-Years War. Tudors eventually came victorious " +
      "among the other noble families competeting for the English crown. Marriage between the members of two opposite factions bring finally " +
      "a peace and prosperity for England.",
    progress: 50,
    develop: true,
  },
  {
    name: "React",
    img: react,
    text:
      "After Angular, I moved to React, which I was learning while making some smaller projects. It's my most recent and also the biggest intrest for now. " +
      "Mainly because it's more flexible, since it's more like a library than a framework. But still it can " +
      "be really powerfull tool, React with Redux can surely compete with Angular in case of bigger projects.",
    comment:
      "Young Peter Romanov was a first heir to the Russian crown who traveled around Europe. During his journey he focused on learning foregin " +
      "cultures and policies. All for great modernization of his country after taking the rule. In the future, " +
      "deservedly, will be called 'the Great'.",
    progress: 70,
    develop: true,
  },
  {
    name: "JavaScript",
    img: js,
    text:
      "I wasn't learning JS from scratch, because I had some knowledge of programming, I started straight up with the frameworks " +
      "simultaniously filling my lack of knowledge in JS.",
    comment:
      "I just wanted to mention Żółkiewski here for any reason. Especially when JS icon goes so well with jaguar skin on his armour.",
    progress: 50,
    develop: true,
  },
  {
    name: "SQL",
    img: sql,
    text:
      "I'm not gonna lie, Entity Framework makes you a bit lazy in case of SQL. However, I was learning about creation and maintanance of relational databases." +
      "So writing some queries in SQL or SPARQL won't be a huge surprise for me.",
    comment:
      "Edward the Confessor reign was remembered as a peaceful time, but in reality even though the king was a honest man, he wasn't a independent " +
      "ruler, when three english earls held true power. Edward did not have any child and with his death the succession war fired. Eventually England " +
      "was conquered by the Normans under rule of William the Bastard.",
    progress: 30,
    develop: false,
  },
  {
    name: "Java",
    img: java,
    text:
      "First typically OOP language that I was learning. I left Java for C# and get into .NET framework. Recently, due to my university courses, I got some basic knowledge abot Spring. Return to Java is still possible.",
    comment:
      "Henry V Lancaster ruled at the late phase of 100-Years War. His reign was remember due to his victorious campaigns in France, which effected " +
      "with marriage with french princess assuring french throne for Henry's son. Unfortunetely Henry V died when his only son was an infant. Rule of baby " +
      "king came with the chaos in english-french relation and breaks previous agreement. Lately, Henry VI will be called mad and dethroned. " +
      "Finally House of Tudors took over the english crown.",
    progress: 30,
    develop: false,
  },
];

export { projectsDetails, cardsData };
