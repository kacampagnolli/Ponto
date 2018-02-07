import { observable, action } from 'mobx';

export default class Test {
    @observable cont: number = 0;

    @action
    more = () => {
        this.cont = this.cont + 1;
    }

}

