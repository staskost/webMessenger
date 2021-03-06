import React, { Component } from 'react';

/**
 * 
 * @property {Number} props.count - number of total items
 * @property {Array} props.options - array with available 'items per page' options e.g. [5, 10, 25]
 * @property {Number} props.activeOption - indicates selected value for 'items per page' option
 * @property {Function} props.handle - function to set items per page option
 */
class PaginationHeader extends Component {
    render() {
        return (
            <div className="container">
                <div className="row px-3">
                    <small className="text-muted">{this.props.count} results</small>
                    <div className="dropdown ml-auto">
                        <button className="btn btn-outline-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Items Per Page
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {this.props.options.map((option, index) => {
                                return <ItemsPerPageOption key={index} option={option} activeOption={this.props.activeOption} setOption={this.props.handle} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function ItemsPerPageOption(props) {
    if (props.activeOption !== props.option)
        return (<a className="dropdown-item" href="#" onClick={() => props.setOption(props.option)}>{props.option}</a>)
    else
        return (
            <a className="dropdown-item disabled" href="#" tabIndex="-1" aria-disabled="true">{props.option}</a>
        );
}

export default PaginationHeader;