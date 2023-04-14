import Base from "ts-modular-bot-file-design";
import { Dependency } from "ts-modular-bot-types";
import Events from "ts-modular-bot-addon-events-types";
import DiscordClient from "ts-modular-bot-addon-discord_client-types";
declare abstract class BaseApp extends Base {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    static Events: typeof Events;
    static DiscordClient: typeof DiscordClient;
    abstract init(): Promise<void>;
    getDependencies(): Dependency[];
}
export default BaseApp;
