import { APIEmbed, EmbedBuilder, GuildChannel, Message, ThreadChannel, User, ButtonInteraction, CommandInteraction, StringSelectMenuInteraction, ChannelSelectMenuInteraction, MentionableSelectMenuInteraction, RoleSelectMenuInteraction, UserSelectMenuInteraction, ModalSubmitInteraction } from "discord.js";
import BaseApp from "./BaseApp.js";
import { IMessageData, IMessageEditData } from "./Types/Message.js";
declare class App extends BaseApp {
    constructor();
    init(): Promise<void>;
    private convert;
    send(location: GuildChannel | Message | User | CommandInteraction | ThreadChannel | ButtonInteraction | StringSelectMenuInteraction | RoleSelectMenuInteraction | ChannelSelectMenuInteraction | UserSelectMenuInteraction | MentionableSelectMenuInteraction | ModalSubmitInteraction, embed: EmbedBuilder | (APIEmbed & {
        content?: string;
    }) | null, { ephemeral, followUp, paging, components, attachments, content, }: IMessageData): Promise<Message<boolean> | null>;
    edit(location: Message | CommandInteraction | ButtonInteraction | StringSelectMenuInteraction | RoleSelectMenuInteraction | ChannelSelectMenuInteraction | UserSelectMenuInteraction | MentionableSelectMenuInteraction | ModalSubmitInteraction, embed: EmbedBuilder | (APIEmbed & {
        content?: string;
    }) | null, { paging, components, attachments, content }: IMessageEditData): Promise<void>;
}
export default App;
