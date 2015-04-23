require('./styles/app');

import Dashboard from './components/dashboard';

React.render(
    <Dashboard />,
    document.getElementById('app')
);

if (DEBUG) {
    console.log('dev');
} else {
    console.log('production');
}
