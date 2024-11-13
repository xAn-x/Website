const deep_learning_projects = [
  {
    name: "Football Shoot-out Analysis",
    description: "A sophisticated tool for analyzing football shootouts by tracking players and the ball, recognizing possession, and differentiating teams by jersey color using advanced techniques such as SiGML, UMAP, and KMeans clustering.",
    banner: "/images/projects/shootout-analysis.gif",
    links: [
      {
        name: "Github",
        link: "https://github.com/xAn-x/Football-Shootout-Analysis"
      }
    ]
  },
  {
    name: "Polyp Segmentation",
    description: "A custom deep learning model built for precise polyp segmentation in medical imaging using a U-Net architecture. This model achieves impressive metrics, including a validation loss of 0.1611, F1 score of 0.8212, accuracy of 0.9482, and IoU of 0.6640, enhancing medical image analysis.",
    banner: "/images/projects/polyp-segmentation.png",
    links: [
      {
        name: "Colab",
        link: "https://colab.research.google.com/drive/1PelXstjgT1x8yrw_2HvURQU7CHfIHkbD?usp=sharing"
      }
    ]
  },
  {
    name: "Vision Lab",
    description: "A collection of computer vision models and architectures developed from scratch, including Autoencoders, Generative Adversarial Networks (GANs), and more. This repository, which is continuously updated with new implementations like ResNets and advanced GANs, provides valuable insights for both beginners and experienced practitioners.",
    banner: "/images/projects/vision-lab.webp",
    links: [
      {
        name: "Github",
        link: "https://github.com/xAn-x/Vision-Lab"
      }
    ]
  },
  {
    name: "MyGPT",
    description: "This repository documents the creation of a Language Model (GPT) from scratch, starting with a basic bigram model and evolving into a sophisticated transformer model. This journey showcases the mechanics behind language modeling and the improvements in natural language processing techniques with each iteration.",
    banner: "/images/projects/MyGPT.jpg",
    links: [
      {
        name: "Github",
        link: "https://github.com/xAn-x/Language-Modelling-Zero-to-One"
      }
    ]
  },
  {
    name: "Animal Surveillance System",
    description: "An animal surveillance system leveraging the YOLOv5 architecture for real-time detection and localization of various animal species. Trained on a custom dataset, the model maintains over 90% precision, making it highly effective for wildlife monitoring and conservation efforts.",
    banner: "/images/projects/object-detection.png",
    links: [
      {
        name: "Github",
        link: "https://github.com/xAn-x/YOLO-Models"
      }
    ]
  },
  {
    name: "Duplicate Question Pair Detector",
    description: "A model developed to determine whether two questions have the same intent or meaning. The project explores both machine learning and deep learning approaches, achieving an accuracy of 78% with the best-performing model, showcasing its effectiveness in understanding and comparing natural language queries.",
    banner: "/images/projects/duplicate-questions.webp",
    links: [
      {
        name: "Github",
        link: "https://github.com/xAn-x/Duplicate-Question-Pairs"
      }
    ]
  },
  {
    name: "Malaria Classification",
    description: "A Convolutional Neural Network (CNN) model designed to classify whether a cell is infected with malaria. By employing data augmentation and a custom neural network architecture, the model achieved an accuracy of 90%, providing a quick and reliable tool for malaria diagnosis in medical settings.",
    banner: "/images/projects/malaria.png",
    links: [
      {
        name: "Github",
        link: "https://github.com/xAn-x/Malaria-Classification"
      }
    ]
  },
  {
    name: "Recommender System",
    description: "A content-based recommender system designed to help users discover similar movies. Using embeddings and Cosine Similarity, the model evaluates and compares movies based on their descriptions and additional features. Trained on the extensive IMDB dataset, this system provides personalized recommendations, enhancing user experience in movie selection.",
    banner: "/images/projects/recommender-system.png",
    links: [
      {
        name: "Github",
        link: "https://github.com/xAn-x/Movie-Recommender-System"
      },
      {
        name: "Website",
        link: "https://db-movie-recommender-sys.streamlit.app/"
      }
    ]
  }
];

const web_dev_projects = [
  {
    name: "E-commerce Website",
    description: "A feature-rich e-commerce website built using the MERN (MongoDB, Express, React, Node.js) stack and Material-UI for a fully responsive user interface. The platform offers essential e-commerce functionalities like product search, detailed product pages, cart management, and a streamlined checkout process, ensuring a user-friendly experience and robust backend integration.",
    banner: "/images/projects/ecom.png",
    links: [
      {
        name: "Website",
        link: "https://deepanshu-bhatt-amazekart.netlify.app/"
      },
      {
        name: "Github",
        link: "https://github.com/xAn-x/E-Com-Website"
      }
    ]
  },
  {
    name: "Movie-Streaming Platform",
    description: "A dynamic movie streaming platform developed using Next.js for optimal performance. It features real-time movie retrieval through the TMDB API, providing users with up-to-date content. Tailwind CSS was used to create a sleek, modern user interface, and NextAuth ensures secure user authentication. The platform offers an immersive movie-watching experience with smooth navigation and personalized recommendations.",
    banner: "/images/projects/movieFlix.png",
    links: [
      {
        name: "Website",
        link: "https://deepanshu-bhatt-movie-flix.vercel.app/"
      },
      {
        name: "Github",
        link: "https://github.com/xAn-x/Movie-Flix"
      }
    ]
  },
  {
    name: "Notes-On-Go",
    description: "An advanced task management application built with React, designed for productivity and user convenience. Users can efficiently manage their tasks by adding, deleting, and prioritizing them with ease. The responsive design ensures a seamless experience across all devices, and the intuitive interface enhances user engagement. This project highlights React's powerful capabilities in building interactive, dynamic applications.",
    banner: "/images/projects/notesOnGo.png",
    links: [
      {
        name: "Website",
        link: "https://deepanshu-bhatt-notes-on-go.netlify.app/"
      },
      {
        name: "Github",
        link: "https://github.com/xAn-x/Notes-on-go"
      }
    ]
  }
];


module.exports = {
  deep_learning_projects,
  web_dev_projects,
};
