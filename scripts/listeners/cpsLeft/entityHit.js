import { Player, world } from "mojang-minecraft";
import { CPS } from "../index.js";
world.events.entityHit.subscribe(data => {
    const pl = data.entity;
    if (!(pl instanceof Player))
        return;
    CPS.clickLeft(pl);
});
