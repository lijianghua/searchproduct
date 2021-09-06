import React from "react";

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const name = this.props.stocked ?
            this.props.name :
            <span style={{color: 'red'}}>
        {this.props.name}
      </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}

export default ProductRow;