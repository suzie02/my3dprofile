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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "3D Modeller and Animator",
      icon: web,
    },
    {
      title: "Vidoe Editor",
      icon: mobile,
    },
    {
      title: "Sound Designer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    
    {
      name: "CSS 3",
      icon: css,
    },
    
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
   
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "The Early Years",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2008 - April 2020",
      points: [
        "Participated and came as runners up for the state level throwball competiton, won competitions in shot put, javlin throw, and relays",
        "Participated and won many singing competitons both Solo and Battle of the Bands",
        "Competed in inter-school fest like the Scripture Union and won various prizes",
        "Was made House Caption in the 10th grade and was assistant conductor to the school choir",
      ],
    },
    {
      title: "Pursuing My Degree",
      company_name: "St. Joseph's University",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2022 - currently pursuing",
      points: [
        "Pursuing a course in Digital Media and Animation",
        "Participated and volanteered in various collegiate events like choir, art exhibitions and intra-college competitions",
        "My interests lie in Video Editing, Sound Design, Graphic Design, and 3D Modelling ",
        
      ],
    },
    {
      title: "Hobbies",
      icon: shopify,
      iconBg: "#383E56",
      date: "2010 - present",
      points: [
        "Passion for singing, playing the guitar and performing",
        "Making melodies and composing music have been a passion for mine for many years",
        "Enjoys baking and cooking and trying new recipies.",
        "Sketching mostly realism, and Art and Crafts are my form of therapy ",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Works well with others and always gets the work done on time.",
      name: "Jonathan John",
      designation: "Sales Manager",
      company: "Almabase",
      image: "https://media.licdn.com/dms/image/v2/C5603AQGHNveOMqisJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1612294352635?e=1735171200&v=beta&t=WCAgxWV9N2jT2RpT4JCIb0h0856jN33qk1ZRX6nBL8w",
    },
    {
      testimonial:
        "Always puts a 100%, and is incredibly dependent and fun to work with.",
      name: "Marsha Gojer",
      designation: "Art Director",
      company: "Cornerstone Design",
      image: "https://img.freepik.com/free-photo/confident-good-looking-beautiful-woman-with-blonde-dyed-hair-dressed-casual-clothes-looking-seriously_176420-15186.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "AR Flashcards",
      description:
        "Using AR wherein the user will be able to see a 3d model of the card scanned.",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Sketchfab",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/suzie02/AR_flashcards.git",
    },
    {
      name: "Logo Design",
      description:
        "Using a 3d application to model and animate a logo.",
      tags: [
        {
          name: "Blender",
          color: "blue-text-gradient",
        },
        {
          name: "AfterEffects",
          color: "green-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://www.playbook.com/s/suzanneliz/XsPM62EYkrGZ9ZZcAovxnEvf?assetToken=9SsDSN7BvHxG7wiic56N16jw",
    },
    {
      name: "Web Interaction",
      description:
        "A web-based platform that allowing users to witness digital elements in their physical space.",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "Verge3D",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/suzie02/blenderar.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };