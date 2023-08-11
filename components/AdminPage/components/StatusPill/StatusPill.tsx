import { classNames } from "../../../../shared/Utils"

const StatusPill = ({ value }) => {
  const status = value ? value.toLowerCase() : "unknown"

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("pending") ? "bg-yellow-100 text-yellow-700" : null,
        status.startsWith("accepted") ? "bg-green-100 text-green-700" : null,
        status.startsWith("rejected") ? "bg-red-100 text-red-700" : null,
      )}
    >
      {status}
    </span>
  )
}

export default StatusPill
