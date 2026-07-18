import '../styles/ContactNetworks.css'

function ContactNetworks() {
    return (
        <section id="contact-networks">
            <h2>Contacto / Redes</h2>

            <p>¿Tenés una propuesta o querés charlar? Escribime por cualquiera de estos medios.</p>

            <div className="contact-links">
                <a
                    className="contact-link"
                    href="https://www.linkedin.com/in/mariano-hasan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                    </svg>
                    LinkedIn
                </a>

                <a
                    className="contact-link"
                    href="https://github.com/Mariano18014"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.44 9.44 0 0 1 5 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                    </svg>
                    GitHub
                </a>

                <a className="contact-link" href="mailto:hasanmariano27@gmail.com">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13zm2.1.5 6.9 5.6 6.9-5.6H5.1zM19 7.4l-6.6 5.36a1.5 1.5 0 0 1-1.88 0L4 7.4V18h15V7.4z" />
                    </svg>
                    hasanmariano27@gmail.com
                </a>
            </div>
        </section>
    )
}

export default ContactNetworks