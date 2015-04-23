import { Component } from 'react';
import Report from './report';

let Dashboard = class Dashboard extends Component {
    displayName: 'Dashboard'

    render() {
        const reports = this.props.reports.map((report) => {
            return (
                <Report {...report} />
            );
        });

        return (
            <div className="dashboard">
                {reports}
            </div>
        );
    }
};

Dashboard.defaultProps = {
    reports: [{
        left: 50,
        top: 100,
        title: 'Report 1'
    }, {
        left: 150,
        top: 300,
        title: 'Report 2'
    }]
};

export default Dashboard;
