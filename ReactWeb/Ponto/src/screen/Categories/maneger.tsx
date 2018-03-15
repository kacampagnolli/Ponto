// Libraries
import * as React from 'react';
import {match} from 'react-router';

interface ManagerProps {
    match: match<{ id: string }>;
}

class Maneger extends React.Component<ManagerProps>{
    render() {
        const { match } = this.props;
        return (
            <div>
                Categorias
                {match.params.id ? ` ${match.params.id} editar/deletar` : " novo"}
            </div>
        );
    }
} 

export { Maneger }
