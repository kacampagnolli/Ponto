import { Stores } from '../types';
import Authenticate from '../stores/Authenticate';
import Teste from '../stores/Test';

export default function createMobxStores(): Stores {
    return {
        authenticate: new Authenticate(),
        teste: new Teste()
    };
}