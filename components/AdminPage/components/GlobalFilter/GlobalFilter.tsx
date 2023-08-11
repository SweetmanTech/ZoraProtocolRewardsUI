import { useState } from "react"
import { useAsyncDebounce } from "../../../../hooks/useAsyncDebounce"

const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter, rows }) => {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((v: string) => {
    setGlobalFilter(v || undefined)
  }, 200)

  return (
    <label className="flex items-baseline w-1/2 gap-x-2">
      <span className="text-gray-700">Search: </span>
      <input
        type="text"
        className="block w-1/2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`${rows.length || count} records...`}
      />
    </label>
  )
}

export default GlobalFilter
