// Libraries
import * as React from 'react';
import { observable, runInAction } from 'mobx';
import { observer } from 'mobx-react';

// Material-ui
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';

interface AsyncComponentProps {
  moduleProvider: any
}

@observer
class AsyncComponent extends React.Component<AsyncComponentProps> {
  @observable public Component: React.ComponentType;

   async componentWillMount() {
     const component = await this.props.moduleProvider()
     runInAction(() => {
       this.Component = component;
     })     
   }

  render() {
    // TODO @leobronza arrumar CircularProgress
    return (
      <div>

        {this.Component ? <this.Component /> : <CircularProgress style={{ color: purple[500] }} thickness={7} />}
      </div>
    );
  }
};

export {AsyncComponent}