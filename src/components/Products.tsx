import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [values, setValues] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  return (
    <div className='px-4 sm:px-6  lg:px-8 py-8 w-full h-full max-w-9xl mx-auto bg-gray-200'>
    <div className="flex items-center justify-between">
        <h3>Product</h3>
        <Link to="/products/create-product">
          <button className="bg-middle-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            CREATE A PRODUCT
          </button>
        </Link>
      </div>
      <div className="">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
