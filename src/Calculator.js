import "./Calculator.css";

export default function Calculator() {
   return (
      <div className="Calculator">
         <div className="card">
            <h1>Calculator</h1>
            <div type="text" className="display">
               0
            </div>
            <input type="text" className="expression" />
            <div className="operators">
               <button className="operator btn btn-info">+</button>
               <button className="operator btn btn-info">-</button>
               <button className="operator btn btn-info">*</button>
               <button className="operator btn btn-info">/</button>
            </div>
            <button className="equal-sign operator btn btn-default" value="=">
               =
            </button>
         </div>
      </div>
   );
}
