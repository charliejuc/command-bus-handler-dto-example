import { ICommandHandler } from '@/interfaces/ICommandHandler'
import { RandomLogCommand } from '../commands/RandomLogCommand'

export class RandomLogCommandHandler implements ICommandHandler {
    async handle(randomLogCommand: RandomLogCommand): Promise<void> {
        const begin = randomLogCommand.begin
        const randomString = Math.random().toString(32).slice(2)

        return await new Promise((resolve) => {
            setTimeout(() => {
                console.log(`${begin}_${randomString}`)
                resolve()
            }, 100)
        })
    }
}
