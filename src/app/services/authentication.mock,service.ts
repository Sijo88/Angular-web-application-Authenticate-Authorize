import { Userlogin } from '../models/User';
import { AuthenticationService } from "./authentication.service";

export class AuthenticationServiceMock extends AuthenticationService {
        mockCurrentUser: Userlogin = {
        userName:"sijo",
        password:"1234",
        role:"admin",
        token:"xyz"
    };
    public get CurrentUserValue():Userlogin{
        return this.mockCurrentUser;
    }
  }