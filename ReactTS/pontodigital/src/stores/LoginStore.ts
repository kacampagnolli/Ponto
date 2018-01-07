import { observable, action } from 'mobx';

export default class LoginStore {
    @observable username: string = '';
    @observable password: string = '';
    @observable loading: boolean = false;

    @action onchangeUsername = (username: string): void => {
        this.username = username;
    }

    @action onchangePassword = (password: string): void => {
        this.password = password;
    }

    @action setLoading = (): void => {
        this.loading = !this.loading;
    } 

}