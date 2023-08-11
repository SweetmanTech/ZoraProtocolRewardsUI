import { useMemo } from "react"

const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) => {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options: any = useMemo(() => {
    const newOptions = new Set()
    preFilteredRows.forEach((row) => {
      newOptions.add(row.values[id])
    })
    return [...Array.from(newOptions.values())]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <label className="flex items-baseline gap-x-2">
      <span className="w-full text-gray-700">{render("Header")}: </span>
      <select
        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default SelectColumnFilter
