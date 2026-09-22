function Card({item}){
  return(
<li key={item.id} className="card">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div className="card-thumb">{
                item.image
                ? <img src={item.image} alt={item.title}/>
                : <span>{item.title}</span>}
                </div>
              <div className="card-body">
                <span className="card-cat">{item.category}</span>
                <h3 className="card-title">{item.title}</h3>
              </div>
              </a>
            </li>
  )
}

export default Card