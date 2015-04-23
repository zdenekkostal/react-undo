require('./styles/app');

import Dashboard from './components/dashboard';
import FluxComponent from 'flummox/component';
import AppFlux from './data/flux';

const flux = new AppFlux();

React.render(
    <FluxComponent flux={flux}>
        <FluxComponent connectToStores={['reports']}>
            <Dashboard />
        </FluxComponent>
    </FluxComponent>,
    document.getElementById('app')
);

if (DEBUG) {
    console.log('dev');
} else {
    console.log('production');
}
