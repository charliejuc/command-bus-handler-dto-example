import 'source-map-support/register'
import 'module-alias/register'
import { CommandBus } from './implementations/CommandBus'
import { RandomLogCommand } from './implementations/commands/RandomLogCommand'
import { RandomLogCommandHandler } from './implementations/commands-handlers/RandomLogCommandHandler'

const bus = new CommandBus()

bus.addHandler(RandomLogCommand.name, new RandomLogCommandHandler())

console.log(bus)

bus.handle(new RandomLogCommand('terminal_life')).catch(console.error)
