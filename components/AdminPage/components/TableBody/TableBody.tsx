const TableBody = ({ getTableBodyProps, page, prepareRow }) => (
  <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
    {page.map((row) => {
      prepareRow(row)
      return (
        <tr key={row} {...row.getRowProps()}>
          {row.cells.map((cell) => (
            <td key={cell} className="px-6 py-4" {...cell.getCellProps()}>
              {cell.render("Cell")}
            </td>
          ))}
        </tr>
      )
    })}
  </tbody>
)
export default TableBody
