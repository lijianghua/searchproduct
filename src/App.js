import SearchBar from "./searchbar";
import ProductTable from "./producttable";
import React from "react";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            filterText:"",
            inStockOnly:false,
        }
        this.products = [
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
        ];
        this.filterTextChangedHandler= this.filterTextChangedHandler.bind(this);
        this.inStockChangedHandler = this.inStockChangedHandler.bind(this);
    }
    inStockChangedHandler(inStockOnly){
        this.setState({
            inStockOnly:inStockOnly,
        });
    }
    filterTextChangedHandler(filterText){
        this.setState({
            filterText:filterText,
        });
    }
     render(){
         return (
             <div className="App">
                 <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} inStockChanged={this.inStockChangedHandler} filterTextChanged={this.filterTextChangedHandler}/>
                 <ProductTable products={this.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
             </div>
         );
     }

}

export default App;
