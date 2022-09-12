import { world } from "mojang-minecraft";
import { CPS } from "./index.js";
world.events.playerLeave.subscribe(data => CPS.get.delete(data.playerName));
