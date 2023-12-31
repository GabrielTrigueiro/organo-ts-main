import hexToRgba from "hex-to-rgba";

import { ITime } from "../../shared/interfaces/ITime";
import Colaborador from "../Colaborador";
import { IColaborador } from "../../shared/interfaces/IColaborador";
import "./Time.css";

interface TimeProps {
  time: ITime;
  colaboradores: IColaborador[];
  aoFavoritar: (id: string) => void;
  aoDeletar: (id: string) => void;
  mudarCor: (cor: string, id: string) => void;
}

const Time = ({
  time,
  colaboradores,
  aoDeletar,
  aoFavoritar,
  mudarCor,
}: TimeProps) => {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundImage: "url(/imagens/fundo.png)",
        backgroundColor: hexToRgba(time.cor, "0.6"),
      }}
    >
      <input
        type="color"
        className="input-cor"
        value={time.cor}
        //muda cor de fundo
        onChange={(evento) => mudarCor(evento.target.value, time.id)}
      />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.id}
            aoDeletar={aoDeletar}
            aoFavoritar={aoFavoritar}
            colaborador={colaborador}
            mudarCor={mudarCor}
            cor={time.cor}
          />
        ))}
      </div>
    </section>
  ) : null;
};

export default Time;
