export class User {
    constructor(
        public id:string,
        private _token:string
    ){}

    get token(){
        return this._token;
    }
}