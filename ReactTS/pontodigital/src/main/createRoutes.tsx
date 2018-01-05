import * as React from 'react';
import App1 from '../scenes/App1';
import { experimentNames, ExperimentName } from '../types';
import Login from '../scenes/Login'; 

import { Route } from 'react-router';

export default function createRoutes(): JSX.Element {
    return (
        <div style={{height: '100%', width: '100%'}}>
            <Route exact={true} path="/" component={Login}/>
            {experimentNames.map((name: ExperimentName): JSX.Element => {
            return <Route key={name} path={'/' + name} component={getExperimentPage(name)}/>;
            })}
        </div>
    );
}     

export function getExperimentPage(name: ExperimentName): React.ComponentClass<any> {
    switch (name) {
      case 'app1': return App1;
      default: throw new Error(`Unknown experiment name "${name}"`);
    }
}