export class Shape{
    private _x : number;
    private _y : number;

    contructor(x : number , y : number){
        this._x = x;
        this._y = y;
    }

    get y(){
        return this._y;
    }

    set y(y : number){
        this._y = y;
    }

    get x(){
        return this._x;
    }

    set x(x : number){
        this._x = x;
    }

    toString() : String {
        return "x: ${this._x}, y : ${this._y}";
    }
}