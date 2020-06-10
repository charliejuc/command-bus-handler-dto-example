export class RandomLogCommand {
    private readonly _begin: string

    constructor(begin: string) {
        this._begin = begin
    }

    public get begin(): string {
        return this._begin
    }
}
