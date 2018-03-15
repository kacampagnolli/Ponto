// Libraries
import * as React from 'react';
import { withRouter, Switch, Route, RouteComponentProps} from 'react-router';

// Component 
import { Maneger } from './maneger'
import { List } from './list'

type UserComponentProps = {
    
} & RouteComponentProps<{}>;

class CategoriesComponent extends React.Component<UserComponentProps>{
    render() {
        const { match } = this.props;
        return (
            <div>
                <Switch>
                    <Route path={`${match.url}`} exact component={List}/> 
                    <Route path={`${match.url}/cadastrar`} exact component={Maneger} />
                    <Route path={`${match.url}/:id`} exact component={Maneger} />
                </Switch>

            </div>
        );
    }
} 

const Categories = withRouter(CategoriesComponent as any)

export {Categories}
