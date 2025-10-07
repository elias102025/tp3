import { useState } from "react";

function SubirImagen() {
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState("");

  const manejarArchivo = (e) => {
    const archivo = e.target.files[0];

    if (!archivo) return;

    if (!archivo.type.startsWith("image/")) {
      setError("El archivo debe ser una imagen");
      setImagen(null);
      return;
    }

    setError("");
    const lector = new FileReader();
    lector.onload = () => setImagen(lector.result);
    lector.readAsDataURL(archivo);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Subir una imagen</h2>
      <input type="file" accept="image/*" onChange={manejarArchivo} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {imagen && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={imagen}
            alt="Vista previa"
            style={{ maxWidth: "300px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
}

export default SubirImagen;
