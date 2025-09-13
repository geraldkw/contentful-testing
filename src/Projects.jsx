import useFetchProjects from './fetchProjects';

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    <section className='projects'>
      <h2>Loading...</h2>
    </section>;
  } else {
    return (
      <section className='projects'>
        <div className='projects-center'>
          {projects.map((project) => {
            const { id, img, url, title } = project;
            return (
              <a
                href={url}
                className='project'
                target='_blank'
                rel='noreferrer'
              >
                <img src={img} alt={title} className='img' />
                <h5>{title}</h5>
              </a>
            );
          })}
        </div>
      </section>
    );
  }
};
export default Projects;
