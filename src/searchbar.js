import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.filterTextChangedHandler = this.filterTextChangedHandler.bind(this);
        this.inStockChangedHandler = this.inStockChangedHandler.bind(this);
    }
    filterTextChangedHandler(e){
        this.props.filterTextChanged(e.target.value);
    }
    inStockChangedHandler(e){
        this.props.inStockChanged(e.target.checked);
    }
    render(){
        return (
            <div>
                <input
                       type="text"
                       placeholder="Search..."
                       value = {this.props.filterText}
                       onChange={this.filterTextChangedHandler}
                />
                <p>
                    <input type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.inStockChangedHandler}/>
                    {' '}
                    Only show products in stock
                </p>

            </div>
        )
    }
}

export default SearchBar;