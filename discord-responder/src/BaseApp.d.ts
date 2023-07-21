import Base from "ada-file-design";
import { Dependency } from "ada-types";
import Events from "ada-events-types";
import DiscordClient from "ada-discordclient-types";
declare abstract class BaseApp extends Base {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    static Events: typeof Events;
    getEvents(): import("ada-events-types/events/src/App").default;
    static DiscordClient: typeof DiscordClient;
    getDiscordClient(): import("ada-discordclient-types/discord-client/src/App").default;
    abstract init(): Promise<void>;
    getDependencies(): Dependency[];
}
export default BaseApp;
