import { Link } from "react-router-dom";

function Reports() {
  return (
    <div className="reports">
{/* <button onClick={() => history.push('/reports')}>Reports</button>   //tu zaimplementuje sie przenoszenie do widoku charts// */}
    <Link to="/reports">reports</Link> 
       </div>
  );
}

export default Reports;
