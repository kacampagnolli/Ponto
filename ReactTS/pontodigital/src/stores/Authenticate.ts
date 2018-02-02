commitimport * as qs from 'qs';
import { observable, action, computed } from 'mobx';

export interface Response  {
    message: string
    token: string
}

export interface Error {
    location: string
    param: string
    msg: string
}

export default class Authenticate {
    @observable isAuthenticate: boolean = false
    @observable private _loading: boolean;
    @observable private _token: string;
    @observable private _error: true;
    @observable private _errorMesage: Error[] = [];

    @computed
    get loading() {
        return this._loading;
    } 

    @computed
    get error() {
        return this._error;
    }

    @action
    login = (username: string, password: string) => {
        this._loading = true
        var body = {nome: username, senha: password};
        fetch("http://192.168.1.2:3000/public/login", {
          method: "POST",
          mode: 'no-cors',
          body: qs.stringify(body),
          headers : {
              'Content-Type' : 'application/x-www-form-urlencoded'
          }
        }).then(
            action((response) => {
                const res = response as Response;
                this.isAuthenticate = true;
                this._token = res.token;
                console.log(res.token);
            }),
            action(error => {
                const err = error as Error[];
                this._errorMesage = err;
                this._error = true;
            })  
        ).then(action(() => this._loading = false))
    }
}