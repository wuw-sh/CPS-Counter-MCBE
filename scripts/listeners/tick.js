import { world } from "mojang-minecraft";
import { CPS, display } from "./index.js";
world.events.tick.subscribe(() => {
    [...world.getPlayers()].map(pl => {
        CPS.runCPS(pl, (pl1) => display(pl1));
    });
});
