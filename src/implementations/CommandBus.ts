import { ICommandHandler } from '@/interfaces/ICommandHandler'
export class CommandBus implements ICommandHandler {
    private readonly handlers: { [key: string]: ICommandHandler } = {}

    addHandler(
        commandName: string,
        commandHandler: ICommandHandler
    ): void {
        this.handlers[commandName] = commandHandler
    }

    async handle(object: object): Promise<void> {
        const commandName = object.constructor.name
        const handler = this.handlers[commandName]

        if (handler === undefined) {
            throw new Error(
                `handler for command ${commandName} not found`
            )
        }

        return await handler.handle(object)
    }
}
