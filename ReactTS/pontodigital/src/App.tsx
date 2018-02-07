import * as React from 'react'
import { observer, inject } from 'mobx-react';
import Teste from '../src/stores/Test';

type InnerState = {
    cont: number;
}

type InnerProps = {
    teste: Teste
}

@inject('teste')
@observer
export class App extends React.Component<InnerProps, InnerState>{

    constructor(props: InnerProps){
        super(props);
        this.state = {
            cont: 0
        }
    }
    
    render() {
        return(
            <div>
                <div>{this.props.teste.cont}</div>
                <button onClick={() => this.props.teste.more()} />
            </div>
        )
    }
}

export default App;