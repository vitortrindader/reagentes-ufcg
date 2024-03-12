function Table({ source }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-[1100px] divide-y  divide-gray-200">
        {/* head */}
        <thead className="bg-azulClaroDemais">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
            ></th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
            >
              Data
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
            >
              Centro
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
            >
              Laboratório
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
            >
              Reagente
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
            >
              Usuário
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
            >
              Quantidade
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {source.map((linha, idx) => {
            return (
              <tr
                key={`linha-${idx}`}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {idx + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {linha.data}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {linha.centro}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {linha.lab}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {linha.reagente}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {linha.usuario}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                  {linha.quantidade}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
