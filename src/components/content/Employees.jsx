import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQrcode} from "@fortawesome/free-solid-svg-icons"

export const Employees = () => {
  return (
    <div className="container container-align main-content">
      <div className="row mb-1">
        <div className="col">
          Número de elementos
        </div>

      </div>
      <div className="row mb-3">
        <div className="col-1">
          <select className="form-select" name="numeroElementos" id="numeroElementos">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="col"></div>
        <div className="col-3">
          <input type="text" className="form-control" placeholder="Buscar..." />
        </div>

      </div>
      <div className="row mb-1">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="text-center ancho-1" scope="col">Número de empleado</th>
              <th className="text-center ancho-3" scope="col">Nombre</th>
              <th className="text-center ancho-1" scope="col">QR</th>
              <th className="text-center ancho-1" scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-center" scope="row">1</th>
              <td>Roberto Reyes</td>
              <td className="text-center"><button className="btn btn-success"><FontAwesomeIcon icon={faQrcode} /></button></td>
              <td className="text-center"><input type="checkbox" /></td>
            </tr>
            <tr>
              <th className="text-center" scope="row">2</th>
              <td>Mikasa Ackerman</td>
              <td className="text-center"><button className="btn btn-success"><FontAwesomeIcon icon={faQrcode} /></button></td>
              <td className="text-center"><input type="checkbox" /></td>
            </tr>
            <tr>
              <th className="text-center" scope="row">3</th>
              <td>Eren Jaeger</td>
              <td className="text-center"><button className="btn btn-success"><FontAwesomeIcon icon={faQrcode} /></button></td>
              <td className="text-center"><input type="checkbox" /></td>
            </tr>
            <tr>
              <th className="text-center" scope="row">4</th>
              <td>Sasha Braus</td>
              <td className="text-center"><button className="btn btn-success"><FontAwesomeIcon icon={faQrcode} /></button></td>
              <td className="text-center"><input type="checkbox" /></td>
            </tr>
            <tr>
              <th className="text-center" scope="row">5</th>
              <td>Armin Arlert</td>
              <td className="text-center"><button className="btn btn-success"><FontAwesomeIcon icon={faQrcode} /></button></td>
              <td className="text-center"><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-3">
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className="col-1">
          <input type="button" className="btn btn-success" value="Subir" />
        </div>
        <div className="col d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-4">
          <div className="col d-flex justify-content-end">
            <input type="button" className="btn btn-danger" value="Eliminar selección" />
          </div>
        </div>
      </div>
      <div className="row mb-1">
        <div className="col">
          Seleccione plantilla Excel (.xlsx, .xls)
        </div>
      </div>
    </div>
  )
}
