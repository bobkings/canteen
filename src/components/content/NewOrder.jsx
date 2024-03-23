import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencil} from "@fortawesome/free-solid-svg-icons"

export const NewOrder = () => {
  return (
    <div className="container container-align main-content">
      <div className="row mb-3">
        <div className="col d-flex justify-content-center">
          <h2>Número de empleado</h2>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4"></div>
        <div className="col d-flex justify-content-center">
          <input className="form-control" type="text" />
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row mb-5">
        <div className="col-4"></div>
        <div className="col d-flex justify-content-center">
          <input type="button" className="btn btn-success btn-lg" value="Buscar" />
        </div>
        <div className="col-4"></div>
      </div>

      <div className="row mb-3">
        <h4>Ultimos pedidos</h4>
      </div>

      <div className="row mb-1">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="text-center ancho-4" scope="col">Número de empleado</th>
              <th className="text-center" scope="col">Nombre</th>
              <th className="text-center" scope="col">Especial</th>
              <th className="text-center" scope="col">Para llevar</th>
              <th className="text-center" scope="col">Fecha</th>
              <th className="text-center" scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-center" scope="row">5</th>
              <td>Roberto Reyes</td>
              <td className="text-center">No</td>
              <td className="text-center">Si</td>
              <td className="text-center">24/02/2024 13:44</td>
              <td className="text-center"><button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} /></button></td>
            </tr>
            <tr>
              <th className="text-center" scope="row">4</th>
              <td>Eren Jaeger</td>
              <td className="text-center">No</td>
              <td className="text-center">Si</td>
              <td className="text-center">24/02/2024 13:44</td>
              <td className="text-center"><button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} /></button></td>
            </tr>
            <tr>
              <th className="text-center" scope="row">3</th>
              <td>Mikasa Ackerman</td>
              <td className="text-center">No</td>
              <td className="text-center">Si</td>
              <td className="text-center">24/02/2024 13:44</td>
              <td className="text-center"><button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} /></button></td>
            </tr>
            <tr>
              <th className="text-center" scope="row">2</th>
              <td>Armin Arlert</td>
              <td className="text-center">No</td>
              <td className="text-center">Si</td>
              <td className="text-center">24/02/2024 13:44</td>
              <td className="text-center"><button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} /></button></td>
            </tr>
            <tr>
              <th className="text-center" scope="row">1</th>
              <td>Sasha Braus</td>
              <td className="text-center">No</td>
              <td className="text-center">Si</td>
              <td className="text-center">24/02/2024 13:44</td>
              <td className="text-center"><button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} /></button></td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  )
}
