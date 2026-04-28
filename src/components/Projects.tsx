import { useApp } from '../context/AppContext'
import { projects } from '../data'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

export function Projects() {
  const { t } = useApp()

  return (
    <section id="projetos" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              translations={t.projects}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
