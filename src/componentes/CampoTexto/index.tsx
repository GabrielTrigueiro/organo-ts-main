import React from "react";

import "./CampoTexto.css";

interface CampoTextoProps {
  placeHolder: string;
  label: string;
  valor: string;
  required?: true;
  aoAlterado: (e: string) => void;
  tipo?: "text" | "password" | "date" | "email" | "number" | "color";
}

const CampoTexto = ({
  tipo = "text",
  aoAlterado,
  label,
  placeHolder,
  valor,
  required,
}: CampoTextoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${tipo}`}>
      <label>{label}</label>
      <input
        type={tipo}
        value={valor}
        onChange={aoDigitado}
        required={required}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default CampoTexto;
