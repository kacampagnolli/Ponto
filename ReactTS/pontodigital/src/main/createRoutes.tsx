import * as React from 'react';
import { ExperimentName } from '../types';
import Login from '../scenes/Login'; 

import { Route } from 'react-router';

//experimentNames
//{experimentNames.map((name: ExperimentName): JSX.Element => {
  //  return <Route key={name} path={'/' + name} component={getExperimentPage(name)}/>;
  //  })}

export default function createRoutes(): JSX.Element {
    return (
        <div style={{height: '100%', width: '100%'}}>
            <Route exact={true} path="/" component={Login}/>
           
        </div>
    );
}     

export function getExperimentPage(name: ExperimentName): React.ComponentClass<any> {
    switch (name) {
        
      default: throw new Error(`Unknown experiment name "${name}"`);
    }
}