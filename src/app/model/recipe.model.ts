export class Recipe {
    private _name: string;
    private _description: string;
    private _imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this._name = name;
        this._description = description;
        this._imagePath = imagePath;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get imagePath(): string {
        return this._imagePath
    }

    set name(name: string) {
        this._name = name;
    }

    set description(description: string) {
        this._description = description;
    }

    set imagePath(imagePath: string) {
        this._imagePath = imagePath;
    }

}
