import '../styles/Technology.css'

function Technology() {
    return (
        <section id="technology">
            <h2>Tech Stack</h2>

            <div className="tech-category">
                <h3>Backend</h3>

                <ul>
                    <li>
                        <img
                            src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
                            alt="Java"
                        />
                    </li>

                    <li>
                        <img
                            src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                            alt="Node.js"
                        />
                    </li>

                    <li>
                        <img
                            src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
                            alt="Express.js"
                        />
                    </li>
                </ul>
            </div>

            <div className="tech-category">
                <h3>Frontend</h3>

                <ul>
                    <li>
                        <img
                            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                            alt="React"
                        />
                    </li>
                </ul>
            </div>

            <div className="tech-category">
                <h3>Base de datos</h3>

                <ul>
                    <li>
                        <img
                            src="https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white"
                            alt="SQL Server"
                        />
                    </li>

                    <li>
                        <img
                            src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                            alt="MongoDB"
                        />
                    </li>
                </ul>
            </div>

            <div className="tech-category">
                <h3>APIs y arquitectura</h3>

                <ul className="text-list">
                    <li>APIs REST</li>
                    <li>RESTful</li>
                    <li>JSON</li>
                    <li>Arquitectura MVC</li>
                    <li>Principios SOLID</li>
                </ul>
            </div>

            <div className="tech-category">
                <h3>Herramientas</h3>

                <ul>
                    <li>
                        <img
                            src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
                            alt="Postman"
                        />
                    </li>

                    <li>
                        <img
                            src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                            alt="GitHub"
                        />
                    </li>

                    <li>
                        <img
                            src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white"
                            alt="Jira"
                        />
                    </li>

                    <li>
                        <img
                            src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                            alt="Figma"
                        />
                    </li>
                </ul>
            </div>

            <div className="tech-category">
                <h3>Metodologías</h3>

                <ul className="text-list">
                    <li>Scrum</li>
                    <li>Trabajo colaborativo</li>
                    <li>Control de versiones</li>
                </ul>
            </div>
        </section>
    )
}

export default Technology