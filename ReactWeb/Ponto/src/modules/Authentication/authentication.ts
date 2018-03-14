// Libraries 
import { observable, computed, runInAction, reaction, action } from 'mobx'
import {Observable} from 'rxjs/Rx'
import * as qs from 'qs';
import { isEmpty } from 'lodash';

// Components
import { http } from '../../util';

interface FetchAuthenticationPayload {
    username: string,
    password: string
}

interface AuthenticationParams {
    accessToken: string;
}

interface AuthenticationResult {
    accessToken: string;
}

const INITIAL = {
    accessToken: '',
}

function doFetch({...payload}: FetchAuthenticationPayload) {
    return http.post('/authenticate', qs.stringify({
        ...payload
    })).then(r => r.data as AuthenticationResult); 
}

function fetchAuthentication(payload: FetchAuthenticationPayload) {
    return Observable.defer(() => doFetch(payload))
        .toPromise();
}

class Authentication {
    @observable private authentication: AuthenticationParams = INITIAL;

    getFromLocalStorage(): AuthenticationParams | null {
        return JSON.parse(localStorage.getItem("TOKEN_AUTHENTICATION") || 'null');
    }

    saveToLocalStorage() {
        localStorage.setItem("TOKEN_AUTHENTICATION", JSON.stringify(this.authentication));
    }

    onAccesTokenChange(accessToken: string) {
        const bearer = accessToken ? `Bearer ${accessToken}` : undefined;
        http.defaults.headers = {
            ...http.defaults.headers,
            Authorization: bearer
        };
    }
    constructor(){
        const auth = this.getFromLocalStorage();
        if (auth) {
            runInAction(() => {
                this.authentication = {...auth};
            });
        }
        reaction(() => this.authentication, () => {
            this.saveToLocalStorage();
        }, { compareStructural: true})
        reaction(() => this.authentication.accessToken, this.onAccesTokenChange, { fireImmediately: true });
         
    }
    
    @computed get isAuthenticated(): boolean {
        return !isEmpty(this.accessToken);
    }

    @computed get accessToken() {
        return this.authentication.accessToken;
    }
    
    authenticate(authenticationPayload: FetchAuthenticationPayload){
        const loginAttempt = async () => {
            let authentication: AuthenticationParams;
            try {
                const auth: AuthenticationResult = await fetchAuthentication(authenticationPayload);
                console.log(auth)
                authentication = {
                    accessToken: auth.accessToken,
                }
            } catch (error) {
                //TODO
            }
            
            runInAction(() => {
                this.authentication = authentication;
            });
        };

        return loginAttempt();
    }

    @action
    reset() {
        this.authentication = INITIAL;
    }
}

export {Authentication}