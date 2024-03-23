import imgQr from '../../assets/img/qr-code.png'

export const SeeQr = () => {
  return (
    <div className="container container-align main-content">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h2>4550 - Eren Jaeger</h2>
        </div>
      </div>
      <div className="row">
        <div className="text-center">
          <img src={imgQr} width="512" className="rounded" alt="..." />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-4"></div>
        <div className="col d-flex justify-content-center">
          <input type="button" className="btn btn-success btn-lg" value="Descargar" />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  )
}
