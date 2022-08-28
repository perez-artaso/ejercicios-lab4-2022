export class User {
    
    private name;
    private pass;

    constructor (_name: string = "", _pass: string = "") {
        this.name = _name;
        this.pass = _pass;
    }

    public SetPass (_pass: string) {
        this.pass = _pass;
    }

    public SetName (_name: string) {
        this.name = _name;
    }

    public GetPass () {
        return this.pass;
    }

    public GetName () {
        return this.name;
    }

}
