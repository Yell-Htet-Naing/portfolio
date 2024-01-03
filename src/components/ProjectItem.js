import React from 'react'

const ProjectItem = ({event}) => {
  return (
    <article>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </article>
  );
}

export default ProjectItem;