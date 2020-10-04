import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject,Observable} from 'rxjs';
import {Userlogin} from '../models/User'
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({providedIn : 'root'})
export class AuthenticationService{
    private currentUserSubject: BehaviorSubject<Userlogin>;
    public currentUser: Observable<Userlogin>;
    private baseUrl : string
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Userlogin>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.baseUrl = environment.baseUrl;
    }
    public get CurrentUserValue():Userlogin{
        return this.currentUserSubject.value;
    }
    login(UserName,Password){
        return this.http.post<any>(`${this.baseUrl}/UserLogin`,{UserName,Password})
        .pipe(map(Userlogin =>{
            localStorage.setItem('currentUser',JSON.stringify(Userlogin));
            this.currentUserSubject.next(Userlogin);
            return Userlogin;
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

}

