import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  label: string;
  required: boolean;
  valor: string;
  itens: string[];
  selecionarTime: (a: string) => void;
}

const ListaSuspensa = ({
  itens,
  label,
  required,
  valor,
  selecionarTime,
}: ListaSuspensaProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const novoTime = event.target.value;
    selecionarTime(novoTime);
  };

  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select onChange={handleSelectChange} required={required} value={valor}>
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
