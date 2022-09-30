import React from "react";
import masala from "../image/masala.png";
import cells from "../image/cells.jpeg";
import danceClass from "../image/dance-class.jpg";
import plugin from "../image/plugin.png";

const Projects = [
  {
    id: 1,
    title: "AllCells",
    url: "https://allcells.com/",
    thumbnailUrl: cells,
    description:
      "A Website that providing the highest quality cells for biomedical researchers. We have created a plugin for it and created customize configuration product, add to cart, checkout functionality for products. We have used Advanced technology like Vue.",
    tags: "Website Plugin Development & design | Wordpress | Vue | API",
  },
  {
    id: 2,
    title: "Strabuono",
    url: "https://www.strabuono.it/gb/",
    thumbnailUrl: masala,
    description:
      "A website that serve food online. It is based on italian food. It is an eocommerce site.",
    tags: "Design | Develope| Wordpress | Wocommerce",
  },
  {
    id: 3,
    title: "dakodasdanceacademy",
    url: "https://www.dakodasdanceacademy.com/",
    thumbnailUrl: danceClass,
    description:
      "Providing dance classes to the central london community for the last 10 years. We have worked on design and development and build a beautiful website.",
    tags: "Website Development & design",
  },
  {
    id: 4,
    title: "Willowtree",
    url: "https://willowtree.je/arrange-a-cremation/",
    thumbnailUrl: plugin,
    description:
      "Willowtree is online store. We have created a custom configration page. we have build a wordpress plugin and we have used advanced tool VUE JS for FrontEND and Backend both.",
    tags: "Website Plugin Development & design | Wordpress | Vue | API",
  },
  {
    id: 5,
    title: "Hrhintonline",
    url: "https://www.hrhintonline.lt/",
    thumbnailUrl: "https://placeimg.com/640/480/nature",
    description:
      "Wordpress website that include the customer login/registration and having plans as well. ",
    tags: "Website Development | design | wordpress",
  },
  {
    id: 6,
    title: "Accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://placeimg.com/640/480/people",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    tags: "Website Development & design",
  },
  {
    id: 7,
    title: "Officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://placeimg.com/640/480/sepia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    tags: "Website Development & design",
  },
  {
    id: 8,
    title: "Aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://placeimg.com/640/480/love",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    tags: "Website Development & design",
  },
  {
    id: 9,
    title: "Qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://placeimg.com/640/480/arch",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    tags: "Website Development & design",
  },
];

function ProjectList() {
  return (
    <div className="projectList" id="projects">
      {Projects.map((item) => {
        return (
          <div className="project" id={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="tags">{item.tags}</p>
            <div className="projectImage">
              <img src={item.thumbnailUrl} alt="Abundance and Health" />
            </div>
            <div className="links">
              <a href={item.url} className="live_url" target="_blank">
                Live Site
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
