import { Store } from 'flummox';

export default class ReportStore extends Store {

    constructor(flux) {
        super();

        const reportActionIds = flux.getActionIds('reports');
        this.register(reportActionIds.createReport, this.handleNewReport);

        // TODO: load via button
        this.state = {
            reports: [{
                left: 50,
                top: 100,
                title: 'Report 1'
            }, {
                left: 150,
                top: 300,
                title: 'Report 2'
            }, {
                left: 400,
                top: 20,
                title: 'Report 3'
            }]
        };
    }

    handleNewReport(report) {
        this.setState({
            reports: this.state.reports.concat([report])
        });
    }
}
