const DataCard = ({ title, data }) => {
  
  return (
    <div className="card">
      <span className="card-title">{title}</span>
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
