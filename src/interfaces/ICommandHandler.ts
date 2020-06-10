export interface ICommandHandler {
    handle(object: object): Promise<void>
}
