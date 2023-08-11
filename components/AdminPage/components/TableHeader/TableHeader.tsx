import { SortDownIcon, SortIcon, SortUpIcon } from "../../../../shared/Icons"

const TableHeader = ({ headerGroups }) => (
  <thead className="bg-gray-50">
    {headerGroups.map((headerGroup) => (
      <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th
            key={column}
            scope="col"
            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            {...column.getHeaderProps(column.getSortByToggleProps())}
          >
            {column.render("Header")}

            {column.isSorted && column.isSortedDesc && (
              <SortDownIcon className="w-4 h-4 text-gray-400" />
            )}
            {column.isSorted && !column.isSortedDesc && (
              <SortUpIcon className="w-4 h-4 text-gray-400" />
            )}
            {!column.isSorted && (
              <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
            )}
          </th>
        ))}
      </tr>
    ))}
  </thead>
)

export default TableHeader
