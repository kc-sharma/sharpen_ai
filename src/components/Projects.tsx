import { useEffect, useState } from "react";
import "./Projects.css";
import Image from './background.png'
export default function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "plac holder2?",
      id: "what to do",
      imageUrl: Image,
      order: 0,
      currentPosition: 0,
      previousPosition: -1,
      tryIt:
        "https://chrome.google.com/webstore/detail/syncit/cjaoelofecdipdkihihjgpndanncpmfe",
      tryItColor: "#d8328e",
      tryItTextInvert: true,
      readMore: "",
      github: "",
      about:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem",
      screenshots: [],
    },
    {
      name: "How It Works?",
      id: "howitwork",
      imageUrl:
        Image,
      order: 1,
      currentPosition: 1,
      previousPosition: -1,
      tryIt: "https://trackyourday.netlify.app/",
      tryItColor: "#f6adbe",
      tryItTextInvert: false,
      readMore: "",
      github: "https://github.com/tk-kushal/daily-report",
      about:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem",
      screenshots: [],
    },

    {
      name: "Common Questions",
      id: "commonques",
      imageUrl: Image,
      order: 2,
      currentPosition: 2,
      previousPosition: -1,
      tryIt: "https://tk-kushal.github.io/The-Great-Sage/",
      tryItColor: "#a0c0ff",
      tryItTextInvert: false,
      readMore: "",
      github: "https://github.com/tk-kushal/The-Great-Sage",
      about:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem",
      screenshots: [],
    },
    {
      name: "Trusted & Secure",
      id: "trusetedsecure",
      imageUrl: Image,
      order: 3,
      currentPosition: 3,
      previousPosition: -1,
      tryIt: "https://quizzical321.netlify.app/",
      tryItColor: "#ff6dac",
      tryItTextInvert: false,
      readMore: "",
      github: "https://github.com/tk-kushal/quizzical",
      about:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem",
      screenshots: [],
    },
    {
      name: "What Does it Do",
      id: "whatdoesit",
      imageUrl: Image,
      order: 4,
      currentPosition: 4,
      previousPosition: -1,
      tryIt: "https://tk-kushal.github.io/R_Shadows/",
      tryItColor: "rgb(248, 172, 50)",
      tryItTextInvert: false,
      readMore: "",
      github: "https://github.com/tk-kushal/R_Shadows",
      about:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem",
      screenshots: [],
    },
    {
      name: "plac holder",
      id: "whattodo",
      imageUrl: Image,
      order: 5,
      currentPosition: 5,
      previousPosition: -1,
      tryIt: "https://tk-kushal.github.io/R_Shadows/",
      tryItColor: "rgb(248, 172, 50)",
      tryItTextInvert: false,
      readMore: "",
      github: "https://github.com/tk-kushal/R_Shadows",
      about:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem",
      screenshots: [],
    },

  ]);
  const [styles, setStyles] = useState({});
  // const [selected, setSelected] = useState("");
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Get the part after the #
    if (hash) {
      // Only update if not first project
      projects.forEach((project) => {
        if (project.id == hash) {
          setTimeout(() => {
            nextCard(project.currentPosition);
          }, 1000);
        }
      });
    }
  }, []);

  function nextCard(n = 1) {
    let tempProjects = window.structuredClone(projects);
    for (let i = 0; i < projects.length; i++) {
      tempProjects[i].currentPosition = decrement(
        projects[i].currentPosition,
        projects.length,
        n
      );
      tempProjects[i].previousPosition = projects[i].currentPosition;
      if (tempProjects[i].currentPosition == 0) {
        // setSelected(tempProjects[i].name);
        window.location.hash = tempProjects[i].id;
      }
    }
    setProjects(tempProjects);
  }
  const projectsDom = projects.map((project) => {
    return (
      <Project
        key={project.order}
        properties={project}
        setStyles={setStyles}
        styles={styles}
        nextCard={nextCard}
      />
    );
  });
  return (
    <div className="projects">
      <div className="projectsContainer">{projectsDom}</div>
    </div>
  );
}
// function increment(n: number, length: number) {
//   return (n + 1) % length;
// }
function decrement(n: number, length: number, decrement: number) {
  let decrementedValue = n - decrement;
  if (decrementedValue < 0) {
    return length + decrementedValue;
  } else {
    return decrementedValue;
  }
}

function Project({
  properties,
  setStyles,
  styles,
  nextCard,
}: {
  properties: project;
  setStyles: Function;
  styles: Styles;
  nextCard: Function;
}) {
  useEffect(() => {
    let width = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--projectWidth")
        .split("px")[0]
    );
    let position =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--cardsPosition")
        .split("vw")[0] + "%";
    

    if (properties.currentPosition == 0) {
      setStyles((styles: Styles) => {
        return {
          ...styles,
          [properties.order]: { ...styles[properties.order], zIndex: 1 },
        };
      });
    }
    if (properties.currentPosition == 1 && properties.previousPosition == 0) {
      setStyles((styles: Styles) => {
        return {
          ...styles,
          [properties.order]: { ...styles[properties.order], zIndex: 3 },
        };
      });
    }
    if (properties.currentPosition == 2 && properties.previousPosition == 1) {
      setStyles((styles: Styles) => {
        return {
          ...styles,
          [properties.order]: { ...styles[properties.order], zIndex: 4 },
        };
      });
    }
    if (properties.currentPosition != 1 && properties.previousPosition == 0) {
      setStyles((styles: Styles) => {
        return {
          ...styles,
          [properties.order]: {
            ...styles[properties.order],
            zIndex: 0,
            opacity: 0,
          },
        };
      });
    }

    //for setting correct zindex of all cards
    setTimeout(() => {
      setStyles((styles: Styles) => {
        return {
          ...styles,
          [properties.order]: {
            ...styles[properties.order],
            zIndex: `${
              properties.currentPosition == 1
                ? "3"
                : properties.currentPosition == 0
                ? "1"
                : "4"
            }`,
            opacity: 1,
          },
        };
      });
    }, 800);

    //for setting position of the elements
    setTimeout(() => {
      setStyles((styles: Styles) => {
        if (properties.currentPosition == 0) {
          console.log(properties.currentPosition);
          console.log(properties.id);
          console.log(styles[properties.order]);
        }
        return {
          ...styles,
          [properties.order]: {
            ...styles[properties.order],
          left: `${
              properties.currentPosition == 0
                ? "50%"
                : `calc(15% + ${
                    (properties.currentPosition - 1) * (width + 20)
                  }px)`
            }`,
            transform: `translateX(${
              properties.currentPosition == 0 ? "-50%" : "0"
            })`, 
          },
        };
      });
    }, (50 + 50 * properties.currentPosition));
  }, [properties.currentPosition]);

  let projectClasses = "project ";
  let titleClasses = "projectTitle-small";
  let lineClasses = "line ";
  let aboutClasses = "about";
  if (properties.currentPosition == 0) {
    projectClasses += " projectExpanded";
    titleClasses += " projectTitle-expanded";
    lineClasses += " lineExpanded";
    aboutClasses += " aboutExpanded";

  }

  return (
    <div
      className={projectClasses}
      style={styles[properties.order]}
      onClick={() => nextCard(properties.currentPosition)}
    >
      <div className="projectContentContainer">
        <div className={titleClasses}>{properties.name}</div>
        <div className="content">
          <div className={lineClasses}></div>
          <div className={aboutClasses}>
            {properties.screenshots.length ? <ImageSlider images={[]} /> : ""}
            {properties.about}
          </div>
        </div>
      </div>

      <img src={properties.imageUrl} alt="" />
    </div>
  );
}

function ImageSlider({ images }: { images: string[] }) {
  const [selected, setSelected] = useState(0);
  const [imagesDom, setImagesDom] = useState(() => {
    return images.map((image, index) => {
      return (
        <div
          onClick={() => {
            setSelected(index);
          }}
          className={"imageContainer-slider "}
        >
          <img src={image} alt="" />
        </div>
      );
    });
  });
  useEffect(() => {
    setImagesDom(() => {
      console.count("called");
      return images.map((image, index) => {
        return (
          <div
            onClick={() => {
              setSelected(index);
            }}
            className={
              "imageContainer-slider " +
              (index == selected ? "imageContainerMax-slider" : "")
            }
          >
            <img src={image} alt="" />
          </div>
        );
      });
    });
  }, [selected]);
  return <div className="imageSlider">{imagesDom}</div>;
}
interface project {
  name: string;
  id: string;
  imageUrl: string;
  order: number;
  currentPosition: number;
  previousPosition: number;
  tryIt: string;
  tryItColor: string;
  tryItTextInvert: boolean;
  readMore: string;
  github: string;
  about: string;
  screenshots: string[];
}
interface Styles {
  [style: number]: React.CSSProperties;
}
