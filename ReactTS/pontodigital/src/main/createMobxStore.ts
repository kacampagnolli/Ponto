import { Stores } from '../types';
import LoginStore from '../stores/LoginStore';

export default function createMobxStores(): Stores {
    return {
        loginStore: new LoginStore(),
    };
}