export interface ICommandHandler {
    handle(command: object): Promise<void>
}
