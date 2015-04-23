import { Component } from 'react';

let Report = class Report extends Component {
    displayName: 'Report'

    render() {
        var styles = {
            left: this.props.left,
            top: this.props.top
        };

        return (
            <div className="report" style={styles}>
                <input value={this.props.title} />
            </div>
        );
    }
};

export default Report;
