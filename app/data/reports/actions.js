import { Actions } from 'flummox';
import Promise from 'bluebird';

export default class ReportActions extends Actions {
    handleNewReport(report) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve.bind(this, report), 2000);
        });
    }
}
