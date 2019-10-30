class Auth {
    constructor(){
        this.state=false
    }
    authState(){
        return this.state;
    }
    authLogin(){
        this.state=true;
    }
    authLogout(){
        this.state=false;
    }
}
export  default Auth;