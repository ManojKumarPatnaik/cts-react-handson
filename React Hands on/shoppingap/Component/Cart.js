import React from "react";

export class Cart extends React.Component {
  render() {
    return (
      <div>
        <table
          style={{
            color: "green",
            textAlign: "center",
            border: "1px solid lightgrey",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <tr>
            <th style={{ border: "1px solid lightgrey" }}>Name</th>
            <th style={{ border: "1px solid lightgrey" }}>Price</th>
          </tr>
          {this.props.item.map((item) => {
            return (
              <tr>
                <td style={{ border: "1px solid lightgrey" }}>
                  {item.itemname}
                </td>
                <td style={{ border: "1px solid lightgrey" }}>{item.price}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}