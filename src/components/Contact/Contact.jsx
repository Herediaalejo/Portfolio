import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactContainer} id="contact">
      <h1 className={styles.title}>Contáctame</h1>
      <p className={styles.description}>
        Si estás interesado en contratar mis servicios, no dudes en ponerte en
        contacto conmigo a través de este formulario o mediante mis redes
        sociales. Estoy disponible en todo momento.
      </p>
      <form
        className={styles.form}
        action="https://formspree.io/f/myzgakwv"
        method="POST"
      >
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Nombre
          </label>
          <input type="text" id="name" name="Nombre" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="Correo Electrónico"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Mensaje
          </label>
          <textarea id="message" className={styles.textarea} name="Mensaje" />
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
