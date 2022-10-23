import './employee-list-item.css';

const EmployeeListItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
    <span className="list-group-item-label">{props.name}</span>
    <input type="text" className="list-group-item-input" defaultValue={props.salary + '$'}/>
    <div className="d-flex justify-content-center align-items-center">
      <button className="btn-cookie btn-sm" type="button">
        <i className="fas fa-cookie"></i>
      </button>
      <button className="btn-trash btn-sm" type="button">
        <i className="fas fa-trash"></i>
      </button>
      <i className="fas fa-star"></i>
    </div>
    </li>
  )
}

export default EmployeeListItem;