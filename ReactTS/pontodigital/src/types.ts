import Authenticate from './stores/Authenticate';
import Teste from  './stores/Test';

export type ExperimentName = 'app1';

export const experimentNames: ExperimentName[] = [
    'app1'
];

export interface Stores {
    authenticate: Authenticate,
    teste: Teste,
}

export type CardType = {
    title?: String,
    subtitle?: String,
    element?: JSX.Element,
    styles?: React.CSSProperties
    textStyles?: React.CSSProperties
};

export interface Stores {
    authenticate: Authenticate;
}