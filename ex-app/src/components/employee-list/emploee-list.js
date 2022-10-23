import EmployeeListItem from "../employee-list-item/employee-list-item";
import './employee-list.css';

const EmployeeList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeeListItem name='John C.' salary={800}/>
      <EmployeeListItem name='Alex M.' salary={3000}/>
      <EmployeeListItem name='Sara K.' salary={5000}/>
    </ul>
  )
}

export default EmployeeList;