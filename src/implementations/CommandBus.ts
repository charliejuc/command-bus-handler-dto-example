import { ICommandHandler } from '@/interfaces/ICommandHandler'

export class CommandBus {
    private handlers: { [key: string]: ICommandHandler } = {}

    addHandler(commandName: string, handler: ICommandHandler): void {
        this.handlers[commandName] = handler
    }

    async handle(command: object): Promise<void> {
        const handlerName = command.constructor.name
        const handlerClass = this.handlers[handlerName]

        if (handlerClass === undefined) {
            throw new Error(
                `handlerClass "${handlerName}" is undefined on CommandBus`
            )
        }

        await handlerClass.handle(command)
    }
}
