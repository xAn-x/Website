const deep_learning_projects = [
  {
    name: "Football Shoot-out Analysis",
    description: "A tool for analyzing football shootouts, focusing on tracking players and the ball, identifying the player with the ball, and dividing teams by jersey color using advanced techniques like SigLip, UMAP, and KMeans clustering and much more.",
    banner: "/images/projects/shootout-analysis.gif",
    links: [{
      name: "Github",
      link: "https://github.com/xAn-x/Football-Shootout-Analysis"
    }]
  },
  {
    "name": "Polyp Segmentation",
    "description": "A deep learning model built from scratch for accurate polyp segmentation in medical imaging. This project utilizes a U-Net architecture to segment polyps, achieving strong metrics such as a validation loss of 0.1611, F1 score of 0.8212, accuracy of 0.9482, and IoU of 0.6640, contributing to more precise and effective medical image analysis.",
    "banner": "/images/projects/polyp-segmentation.png",
    "links": [
        {
            "name": "Colab",
            "link": "https://colab.research.google.com/drive/1PelXstjgT1x8yrw_2HvURQU7CHfIHkbD?usp=sharing"
        }
    ]
  },
  {
    name: "Vision Lab",
    description: "The Vision Lab repository features a collection of computer vision models and architectures I’ve developed from scratch, including Autoencoders, Generative Adversarial Networks (GANs), and more. Each project highlights foundational techniques and their applications, aimed at providing clear insights for both beginners and experienced practitioners. Explore my journey into computer vision as I continuously expand the repository with new implementations like ResNets and advanced GAN architectures.",
    banner: "/images/projects/vision-lab.webp",
    links: [{
      name: "Github",
      link: "https://github.com/xAn-x/Vision-Lab"
    }]
  },
  {
    name: "MyGPT",
    description: "This repository presents my in-depth journey of implementing a Language Model (GPT) from scratch. Starting with a fundamental bigram model, I progressively evolved the project into a sophisticated transformer model. This progression not only highlights the mechanics behind language modeling but also demonstrates how each iteration builds upon the previous one to improve performance and understanding of natural language processing techniques.",
    banner: "/images/projects/MyGPT.jpg",
    links: [{
      name: "Github",
      link: "https://github.com/xAn-x/Language-Modelling-Zero-to-One"
    }]
  },
  {
  name: "Animal Surveillance System",
  description: "This project leverages the YOLOv5 architecture to develop an animal surveillance system capable of accurately detecting and localizing various animal species in real-time. Trained on a custom animal dataset, the model maintains over 90% precision despite limited examples per class, making it highly effective for wildlife monitoring, conservation efforts, and similar applications.",
    banner: "/images/projects/object-detection.png",
    links: [{
      name: "Github",
      link: "https://github.com/xAn-x/YOLO-Models"
    }]
  },
  {
    name: "Duplicate Question Pair Detector",
    description: "In this project, I developed a model capable of detecting whether two questions have the same intent or meaning. I explored two distinct approaches: a machine learning model that uses advanced feature engineering techniques such as fuzzy matching, and a deep learning model built with LSTM layers. The models were evaluated rigorously, and the best-performing approach achieved an accuracy of 78%, showcasing its effectiveness in understanding and comparing natural language queries.",
    banner: "/images/projects/duplicate-questions.webp",
    links: [{
      name: "Github",
      link: "https://github.com/xAn-x/Duplicate-Question-Pairs"
    }]
  },
  {
    name: "Malaria Classification",
    description: "This project involves creating a Convolutional Neural Network (CNN) model to accurately classify whether a cell is infected with malaria. By employing strategies such as data augmentation and designing a custom neural network architecture, the model was able to achieve a remarkable accuracy of 90%. This model is particularly significant for aiding in the quick and reliable diagnosis of malaria in medical settings, potentially saving lives by enabling early detection.",
    banner: "/images/projects/malaria.png",
    links: [{
      name: "Github",
      link: "https://github.com/xAn-x/Malaria-Classification"
    }]
  },
  {
    name: "Recommender System",
    description: "This content-based recommender system is designed to help users discover movies that are similar in nature. By using embeddings and Cosine Similarity, the model evaluates and compares movies based on their descriptions and additional features. Trained on the extensive IMDB dataset, this system provides personalized recommendations by identifying how closely related two movies are, making it an effective tool for enhancing user experience in movie selection.",
    banner: "/images/projects/recommender-system.png",
    links: [{
      name: "Github",
      link: "https://github.com/xAn-x/Movie-Recommender-System"
    },{
      name: "Website",
      link: "https://db-movie-recommender-sys.streamlit.app/"
    }]
  },
];



const web_dev_projects = [
  {
    name: "E-commerce Website",
    description:
      "This feature-rich E-commerce website is built using the MERN (MongoDB, Express, React, Node.js) stack, combined with Material-UI to deliver an elegant and fully responsive user interface. The platform is designed for a seamless shopping experience, utilizing Redux for efficient state management. It includes essential e-commerce functionalities such as product search, detailed product pages, cart management, and a streamlined checkout process. The website not only ensures a user-friendly experience but also offers robust backend integration, making it scalable and easy to maintain.",
    banner: "/images/projects/ecom.png",
    links:  [
      {
        name: "Website",
        link: "https://deepanshu-bhatt-amazekart.netlify.app/",
      },
      { name: "Github", link: "https://github.com/xAn-x/E-Com-Website" },
    ],
  },
  {
    name: "Movie-Streaming Platform",
    description:
      "This dynamic movie streaming platform was developed using Next.js to leverage server-side rendering for optimal performance. It features real-time movie retrieval through the TMDB API, providing users with up-to-date content at their fingertips. Tailwind CSS was employed to create a sleek, modern user interface, while NextAuth ensures secure and reliable user authentication. The platform is designed to deliver an immersive movie-watching experience, offering smooth navigation, personalized recommendations, and high-quality streaming capabilities.",
    banner: "/images/projects/movieFlix.png",
    links: [
      {
        name: "Website",
        link: "https://deepanshu-bhatt-movie-flix.vercel.app/",
      },
      { name: "Github", link: "https://github.com/xAn-x/Movie-Flix" },
    ],
  },
  {
    name: "Notes-On-Go",
    description:
      "Notes-On-Go is an advanced Task Management application built with React, focusing on productivity and user convenience. The app allows users to efficiently manage their tasks by adding, deleting, and prioritizing them with ease. The responsive design ensures a seamless experience across all devices, and the intuitive interface enhances user engagement. The project highlights React's powerful capabilities in building interactive, dynamic applications, making it an essential tool for users who need to keep their tasks organized and accessible.",
    banner: "/images/projects/notesOnGo.png",
    links: [
      {
        name: "Website",
        link: "https://deepanshu-bhatt-notes-on-go.netlify.app/",
      },
      { name: "Github", link: "https://github.com/xAn-x/Notes-on-go" },
    ],
  },
  {
    name: "News-Fetching Website",
    description:
      "InShorts is a sophisticated news platform developed with React-JS, offering users a quick and efficient way to stay updated with the latest news. The platform fetches real-time news articles using a news API and processes requests through AXIOS, ensuring fast and reliable content delivery. Styled with Material UI, the website provides a modern, user-friendly interface that adapts seamlessly to various devices. InShorts is designed for users who demand quick access to current events, providing a clutter-free experience with concise news summaries.",
    banner: "/images/projects/inshorts.png",
    links: [
      {
        name: "Website",
        link: "https://github.com/xAn-x/IN-SHORTS-CLONE",
      },
      { name: "Github", link: "https://github.com/xAn-x/IN-SHORTS-CLONE" },
    ],
  },
];


module.exports = {
  deep_learning_projects,
  web_dev_projects,
};
