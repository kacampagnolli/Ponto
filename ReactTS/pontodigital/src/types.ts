import Authenticate from './stores/Authenticate';

export type ExperimentName = 'app1';

export const experimentNames: ExperimentName[] = [
    'app1'
];

export interface Stores {

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