import '../styles/Experience.css'

function Experience() {
    return (
        <section id="experience">
            <h2>Experiencia</h2>

            <div className="experience-list">
                <article>
                    <h3>Desarrollador Fullstack</h3>
                    <span>Jefatura de Gabinete de Ministros - Presidencia de la Nación | Junio 2026 - Actualidad</span>

                    <ul>
                        <li>Desarrollo y mantenimiento de aplicaciones web full stack utilizando Node.js, Express y React.</li>
                        <li>Maquetado e implementación de interfaces con HTML, CSS y Tailwind CSS.</li>
                        <li>Modelado y gestión de bases de datos en PostgreSQL utilizando Drizzle como ORM.</li>
                        <li>Control de versiones y trabajo colaborativo mediante GitLab.</li>
                    </ul>
                </article>

                <article>
                    <h3>Desarrollador Fullstack</h3>
                    <span>Trucker Talent | Marzo 2026 - Abril 2026</span>

                    <ul>
                        <li>Desarrollo y mantenimiento de aplicaciones web utilizando Node.js, TypeScript, React y Next.js.</li>
                        <li>Implementación de funcionalidades tanto en frontend como en backend siguiendo los requerimientos del proyecto.</li>
                        <li>Participación en el desarrollo de APIs y componentes reutilizables.</li>
                        <li>Colaboración con el equipo de desarrollo utilizando Git y metodologías ágiles.</li>
                        <li>Resolución de incidencias y adaptación a nuevas tecnologías y herramientas durante el desarrollo del proyecto.</li>
                    </ul>
                </article>

                <article>
                    <h3>Desarrollador Flutter</h3>
                    <span>Hospital de Tigre | Marzo 2025 - Julio 2025</span>

                    <ul>
                        <li>Análisis funcional y relevamiento de requerimientos junto al equipo.</li>
                        <li>Definición del MVP y planificación del desarrollo de la aplicación móvil.</li>
                        <li>Desarrollo de la aplicación utilizando Flutter y Dart.</li>
                        <li>Diseño de interfaces y prototipos en Figma.</li>
                        <li>Trabajo colaborativo bajo metodología Scrum, utilizando GitHub y Firebase.</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Experience