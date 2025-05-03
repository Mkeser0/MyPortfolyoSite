const data = {
  en:{
    titles: {
      profile: "Profile",
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      
    },
    footer: {
      title: "Send me a message!",
      desc1: "Got a question or proposal?",
      desc2: "Or just want to say hello? Go ahead.",
    },
    heroSection: {
      greeting: "Hi!",
      name: "Mustafa",
      intro: `I'm Mustafa.`,
      intro2: `I'm a full-stack developer.`,
      description: "I can craft solid and scalable",
      description2: "frontend products. Let's meet.",
      profileImage: "https://via.placeholder.com/150",
      social: [
        {
          logo: "https://via.placeholder.com/50",
          name: "LinkedIn",
          url: "https://linkedin.com",
          altText: "LinkedIn Profile",
        },
        {
          logo: "https://via.placeholder.com/50",
          name: "GitHub",
          url: "https://github.com",
          altText: "GitHub Profile",
        },
      ],
    },
    skillSection: [
      {name: "FİGMA", logo: "figma-log.jpg"},
      {name: "JAVASCRİPT", logo: "javaScript-logo.jpg"},
      {name: "REACT", logo: "react-logo.png"},
      {name: "NODE", logo: "nodejs-logo.jpg"},
      {name: "REDUX", logo: "redux-logo.png"},
      {name: "VS CODE", logo: "vStudio-logo.png"},

    ],
    projectSection: [
      {url:"project2.png", title:"Workintech", description:"A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible."},
      {url:"project1.png", title:"Journey", description:"A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible."},
    ],
    aboutMe: 
    {intro: "I completed a 900-hour Full Stack Web Development training at Workintech, gaining in-depth knowledge in both frontend and backend development.",
    desc: "With a passion for technology, I focus on creating innovative and efficient projects. I'm a developer who values continuous growth and teamwork."}
  ,
    profileSection: [
      { title: "Date of Birth", description: "15.07.1989" },
      { title: "City of Residence", description: "Antalya" },
      { title: "Education", description: "Pamukkale University, B.A. in Guidance and Psychological Counseling (GPC), 2011" },
      { title: "Preferred Roles", description: "Frontend, UI, Backend" },
    ],    
  },
  tr: {
    titles: {
      profile: "Profil",
      about: "Hakkımda",
      skills: "Yetenekler",
      projects: "Projeler",
      
    },
    footer: {
      title: "Bana bir mesaj gönder! ",
      desc1: "Bir sorunuz mu var, bir teklifiniz mi var?",
      desc2: "Ya da sadece merhaba mı demek istiyorsunuz? Çekinmeyin, yazın!",
    },
    heroSection: {
      greeting: "Merhaba!",
      name: "Mustafa",
      intro: `Ben Mustafa.`,
      intro2: `Full-stack Web geliştiricisiyim.`,
      description: "Sağlam ve ölçeklenebilir",
      description2: "frontend ürünleri geliştirebilirim. Hadi tanışalım!",
      profileImage: "https://via.placeholder.com/150",
      social: [
        {
          logo: "https://via.placeholder.com/50",
          name: "LinkedIn",
          url: "https://linkedin.com",
          altText: "LinkedIn Profili",
        },
        {
          logo: "https://via.placeholder.com/50",
          name: "GitHub",
          url: "https://github.com",
          altText: "GitHub Profili",
        },
      ],
    },
    skillSection: [
      { name: "FİGMA", logo: "figma-log.jpg" },
      { name: "JAVASCRİPT", logo: "javaScript-logo.jpg" },
      { name: "REACT", logo: "react-logo.png" },
      { name: "NODEJS", logo: "nodejs-logo.jpg" },
      { name: "REDUX", logo: "redux-logo.png" },
      { name: "VS CODE", logo: "vStudio-logo.png" },
    ],
    projectSection: [
      {
        url: "project2.png",
        title: "Workintech",
        description:
          "Kullanıcıların hangi çerezleri kabul edip hangilerini reddedeceğini seçmesini sağlayan, basit, özelleştirilebilir ve minimal kurulumlu bir çerez eklentisi. Bu araç vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur, bir NPM paketi olarak mevcuttur ve Git deposu üzerinden tema ve kod özelleştirmeleri yapılabilir.",
      },
      {
        url: "project1.png",
        title: "Journey",
        description:
          "Kullanıcıların hangi çerezleri kabul edip hangilerini reddedeceğini seçmesini sağlayan, basit, özelleştirilebilir ve minimal kurulumlu bir çerez eklentisi. Bu araç vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur, bir NPM paketi olarak mevcuttur ve Git deposu üzerinden tema ve kod özelleştirmeleri yapılabilir.",
      },
    ],
    aboutMe: 
      {intro: "Workintech'ten 900 saatlik Full Stack Web Development eğitimi aldım ve bu süreçte hem frontend hem de backend alanlarında derinlemesine bilgi sahibi oldum. ",
      desc: "Teknolojiye olan tutkumla yaratıcı ve verimli projeler geliştirmeye odaklanıyorum. Sürekli gelişim ve takım çalışmasına değer veren bir geliştiriciyim."}
    ,
    profileSection: [
      { title: "Doğum Tarihi", description: "15.07.1989" },
      { title: "İkamet Şehri", description: "Antalya" },
      { title: "Eğitim Durumu", description: "Pamukkale Üniversitesi, Psikolojik Danışmanlık ve Rehberlik (PDR) Lisans, 2011" },
      { title: "Tercih Ettiği Roller", description: "Frontend, UI, Backend" },
    ],
  }
  
};

export default data;