import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/emploee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';
import './app.css';

function App () {

  const data = [
    {name: 'John C.', salary: 800, increase: false, id: 1,},
    {name: 'Alex M.', salary: 3000, increase: true, id: 2,},
    {name: 'Sara K.', salary: 5000, increase: false, id: 3,},
  ]
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeeList data={data}/>
      <EmployeeAddForm/>
    </div>
  )
}

export default App;