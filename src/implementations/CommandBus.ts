import { ICommandHandler } from '@/interfaces/ICommandHandler'

export class CommandBus {
    private readonly handlers: { [key: string]: ICommandHandler } = {}

    addHandler(
        commandName: string,
        commandHandler: ICommandHandler
    ): void {
        this.handlers[commandName] = commandHandler
    }

    async handle(command: object): Promise<void> {
        const commandName = command.constructor.name
        const commandHandler = this.handlers[commandName]

        if (commandHandler === undefined) {
            throw new Error(`"${commandName}" not found in handlers`)
        }

        return await commandHandler.handle(command)
    }
}
