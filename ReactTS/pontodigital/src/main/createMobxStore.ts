import { Stores } from '../types';
import Authenticate from '../stores/Authenticate';

export default function createMobxStores(): Stores {
    return {
        authenticate: new Authenticate(),
    };
}