import { Component } from 'react';
import Report from './report';

let Dashboard = class Dashboard extends Component {
    displayName: 'Dashboard'

    render() {
        console.log(this.props.report);

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

export default Dashboard;
