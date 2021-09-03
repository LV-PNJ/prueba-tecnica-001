import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const Table = ({ producto }) => {

  if (producto !== undefined && producto.length!==0) {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">price</th>
              <th scope="col">category</th>
              <th scope="col">image</th>
            </tr>
          </thead>
          <tbody>
            {producto["data"]["data"].map((a) => {
              return (
                <tr>{console.log([a.id])}
                  <td>{a["id"]}</td>
                  <td>{a["title"]}</td>
                  <td>{a["price"]}</td>
                  <td>{a["category"]}</td>
                  <td><img alt="" style={{width:"45px", height:"45px"}}title="" src={a["image"]}/></td>
                </tr>
              );
            })}
          </tbody>
          
        </table>
      </div>
    );
  } else {
    return <>Espere, por favor</>;
  }
};

export default Table;
