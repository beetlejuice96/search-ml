const CardComponent = ({title,img,addItem}) => {
    const agregarAlCarrito = (name) => {
        addItem(name)
    }
    
    return(
        <div className="card col-4">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onClick={() =>{agregarAlCarrito(title)}}className="btn btn-primary">agregar al carrito</button>
        </div>
      </div>
    )
}

export default CardComponent;