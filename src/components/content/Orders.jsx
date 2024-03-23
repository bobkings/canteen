import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencil} from "@fortawesome/free-solid-svg-icons"

export const Orders = () => {
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
            <th className="text-center"  scope="row">5</th>
            <td>Roberto Reyes</td>
            <td className="text-center">No</td>
            <td className="text-center">Si</td>
            <td className="text-center">24/02/2024 13:44</td>
            <td className="text-center"><button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} /></button></td>                                    
          </tr>
          <tr>
            <th className="text-center"  scope="row">4</th>
            <td>Eren Jaeger</td>
            <td className="text-center">No</td>
            <td className="text-center">Si</td>
            <td className="text-center">24/02/2024 13:44</td>
            <td className="text-center"><button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} /></button></td>                                    
          </tr>
          <tr>
            <th className="text-center"  scope="row">3</th>
            <td>Mikasa Ackerman</td>
            <td className="text-center">No</td>
            <td className="text-center">Si</td>
            <td className="text-center">24/02/2024 13:44</td>
            <td className="text-center"><button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} /></button></td>                                    
          </tr>
          <tr>
            <th className="text-center"  scope="row">2</th>
            <td>Armin Arlert</td>
            <td className="text-center">No</td>
            <td className="text-center">Si</td>
            <td className="text-center">24/02/2024 13:44</td>
            <td className="text-center"><button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} /></button></td>                                    
          </tr>
          <tr>
            <th className="text-center"  scope="row">1</th>
            <td>Sasha Braus</td>
            <td className="text-center">No</td>
            <td className="text-center">Si</td>
            <td className="text-center">24/02/2024 13:44</td>
            <td className="text-center"><button className="btn btn-primary"><FontAwesomeIcon icon={faPencil} /></button></td>                                    
          </tr>                                        
        </tbody>
      </table>
    </div>
    <div className="row">

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

    </div>


  </div>
  )
}
