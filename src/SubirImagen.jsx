// src/SubirImagen.jsx
import { useState } from "react";

const SubirImagen = () => {
  const [imagen, setImagen] = useState(null);

  const handleChange = (e) => {
    setImagen(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h2>Subir Imagen</h2>
      <input type="file" onChange={handleChange} accept="image/*" />
      {imagen && <img src={imagen} alt="Preview" style={{ width: "300px" }} />}
    </div>
  );
};

export default SubirImagen;
