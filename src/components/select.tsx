interface Props {
  title: string;
  options: (string | undefined)[];
  setSelected?: any;
}

export default function Select({ title, options, setSelected }: Props) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <select className="select select-bordered" onChange={setSelected}>
        <option key="selectAll">Todos</option>
        {options?.map((option, id) => (
          <option key={id}>{option}</option>
        ))}
      </select>
    </label>
  );
}
