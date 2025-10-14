import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .send(
        "service_dyv2vb7",      // 👈 tu Service ID
        "template_6gi641f",     // 👈 tu Template ID
        form,
        "b1M8qeyR8zAKjDuqf"     // 👈 tu Public Key
      )
      .then(() => {
        setStatus("Correo enviado correctamente ✅");
        setForm({ from_name: "", from_email: "", message: "" });
      })
      .catch(() => setStatus("Error al enviar el correo ❌"));
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Tu nombre"
          value={form.from_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Tu correo"
          value={form.from_email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contacto;
