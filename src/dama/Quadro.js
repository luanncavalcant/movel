import React from 'react';
import './Quadro.css';

class Quadro extends React.Component {
    render() {

        const colorSquare = (x, y) => {
            let color = "";

            if (x % 2 === 0) {
                color = (y % 2 !== 0 ? "painted" : "")
            } else {
                color = (y % 2 === 0 ? "painted" : "")
            }

            return color;
        }

        const ficha = (n) => {
            let fix = "";

            if (n === 1) {
                fix = <div className="disk team-a"></div>
            }
            else if (n === 2) {
                fix = <div className="disk team-b"></div>
            }

            return fix;
        }

        return (
            <div className={"square " + colorSquare(this.props.x, this.props.y)} x={this.props.x} y ={this.props.y}>{ficha(this.props.n)}</div>
        );
    }
}

export default Quadro;