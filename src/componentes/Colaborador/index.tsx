import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "./Colaborador.css";
import { IColaborador } from "../../shared/interfaces/IColaborador";

interface TimeFunctionProps {
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
  mudarCor: (cor: string, id: string) => void;
  colaborador: IColaborador;
  cor: string;
}

const Colaborador = ({ ...time }: TimeFunctionProps) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => time.aoDeletar(time.colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: `${time.cor}` }}>
        <img src={time.colaborador.imagem} alt={time.colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{time.colaborador.nome}</h4>
        <h5>{time.colaborador.cargo}</h5>
        <div
          className="favoritar"
          onClick={() => time.aoFavoritar(time.colaborador.id)}
        >
          {time.colaborador.favorito ? (
            <AiFillHeart
              style={{ cursor: "pointer" }}
              size={27}
              color="#ff0000"
            />
          ) : (
            <AiOutlineHeart style={{ cursor: "pointer" }} size={27} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
