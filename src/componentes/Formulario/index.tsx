import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Formulario.css";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";

interface FormularioProps {
  cadastrarTime: (novoTime: ITime) => void;
  cadastrarColab: (colab: IColaborador) => void;
  times: string[];
}

const Formulario = ({
  cadastrarTime,
  times,
  cadastrarColab,
}: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState("");

  const [novoTime, setNovoTime] = useState("");
  const [corNovoTime, setCorNovoTime] = useState("");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    cadastrarColab({
      nome,
      cargo,
      imagem,
      time,
      data,
      favorito: false,
      id: uuidv4(),
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    setData("");
  };

  const mudarTime = (novoTime: string) => {
    setTime(novoTime);
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeHolder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          required={true}
          label="Cargo"
          placeHolder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeHolder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          tipo="date"
          label="Data de entrada no time"
          placeHolder=""
          valor={data}
          aoAlterado={(valor) => setData(valor)}
        />
        <ListaSuspensa
          required={true}
          label="Time"
          itens={times}
          valor={time}
          selecionarTime={mudarTime}
        />
        <section style={{ textAlign: "center", margin: "1pc" }}>
          <Botao>Criar Card</Botao>
        </section>
      </form>

      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ id: uuidv4(), cor: corNovoTime, nome: novoTime });
          setNovoTime("");
          setCorNovoTime("");
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <CampoTexto
          required
          label="Nome"
          placeHolder="Digite o nome do time"
          valor={novoTime}
          aoAlterado={(valor) => setNovoTime(valor)}
        />
        <CampoTexto
          required
          tipo="color"
          label="Cor"
          placeHolder="Digite a cor do time"
          valor={corNovoTime}
          aoAlterado={(valor) => setCorNovoTime(valor)}
        />
        <section style={{ textAlign: "center", margin: "1pc" }}>
          <Botao> Criar novo time </Botao>
        </section>
      </form>
    </section>
  );
};

export default Formulario;
