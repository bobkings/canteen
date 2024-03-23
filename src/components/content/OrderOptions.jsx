export const OrderOptions = () => {
  return (
    <div className="container container-align-order main-content">
      <div className="row mb-5">
        <div className="col d-flex justify-content-center">
          <h2>4550 - Eren Jaeger</h2>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col form-check checkbox-lg">
          <input className="form-check-input" type="checkbox" value="" id="especial" />
          <label htmlFor="especial"><h4>Especial</h4></label>
        </div>
        <div className="col form-check checkbox-lg">
          <input className="form-check-input" type="checkbox" value="" id="paraLlevar" />
          <label htmlFor="paraLlevar"><h4>Para llevar</h4></label>
        </div>
        <div className="col form-check checkbox-lg">
          <input className="form-check-input" type="checkbox" value="" id="refresco" />
          <label htmlFor="refresco"><h4>Refresco</h4></label>
        </div>

      </div>
      <div className="row mb-5">
        <div className="col-4"></div>
        <div className="col d-flex justify-content-center">
          <input type="button" className="btn btn-success btn-lg" value="Guardar" />
        </div>
        <div className="col-4"></div>
      </div>






    </div>
  )
}
