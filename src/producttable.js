import React from "react";
import ProductCategoryRow from "./productcategoryrow";
import ProductRow from "./productrow";

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const rows = [];
        let lastCategory =null;

        this.props.products.forEach(
            product=>{
                if (product.name.indexOf(this.props.filterText)===-1) return;
                if (this.props.inStockOnly && !product.stocked) return;

                if (product.category !== lastCategory) {
                    rows.push(
                        <ProductCategoryRow category={product.category}  key={product.category}/>
                    )
                }
                rows.push(
                    <ProductRow name={product.name} price={product.price} stocked={product.stocked} />
                )
                lastCategory = product.category;
            }
        );

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
}

export default ProductTable;