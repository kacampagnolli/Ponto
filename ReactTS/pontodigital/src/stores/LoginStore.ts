import { observable, action, computed } from 'mobx';

export enum Status {
    None = 'None',
    Loading = 'Loading',
    Loaded = 'Loaded',
    Error = 'Error',
}

export default class LoginStore {
    @observable _username: string = '';
    @observable _password: string = '';
    @observable _status: Status = Status.None;

    constructor(){
    
    }

    @action onchangeUsername = (username: string): void => {
        this._username = username;
    }

    @action onchangePassword = (password: string): void => {
        this._password = password;
    }

    @action changeStatus = (status: Status): void => {
        this._status = status;
        
    } 

    @computed get username(): string {
        return this._username;
    }

    @computed get status(): Status {
        return this._status;
    }

    @computed get password(): string {
        return this._password;
    }
}