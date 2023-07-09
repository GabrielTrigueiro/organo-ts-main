import { ReactElement } from "react";
import React from "react";

import "./Botao.css";

interface BotaoProps {
  children: React.ReactNode;
}

const Botao = (props: BotaoProps) => {
  return <button className="botao">{props.children}</button>;
};

export default Botao;
