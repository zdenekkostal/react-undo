import { Flux } from 'flummox';

import ReportActions from './reports/actions';
import ReportsStore from './reports/store';

export default class AppFlux extends Flux {
    constructor() {
        super();

        this.createActions('reports', ReportActions);

        // The extra argument(s) are passed to the MessageStore constructor
        this.createStore('reports', ReportsStore, this);
    }
}
