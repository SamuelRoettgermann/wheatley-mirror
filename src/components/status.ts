import * as Discord from "discord.js";

import { strict as assert } from "assert";

import { BotComponent } from "../bot-component.js";
import { Wheatley } from "../wheatley.js";


export class Status extends BotComponent {
    constructor(wheatley: Wheatley) {
        super(wheatley);
    }

    override async on_ready() {
        this.wheatley.client.user?.setActivity({
            name: "C & C++",
            type: Discord.ActivityType.Playing
        });
    }
}
