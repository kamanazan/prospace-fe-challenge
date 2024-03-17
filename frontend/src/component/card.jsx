const DataCard = ({ title, data, onDelete }) => {
  
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{title}</span>
        <button onClick={onDelete}>X</button>
      </div>
      {Object.keys(data).map((k) => {
        return (
          <div className="card-field" key={`${title}-${k}`}>
            <span><b>{k}</b></span>
            <span>{data[k]}</span>
          </div>
        )
      })}
    </div>
  )
}

export default DataCard
