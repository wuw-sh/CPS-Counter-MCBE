import { world } from "mojang-minecraft";
import { CPS } from "../index.js";
world.events.blockPlace.subscribe(data => CPS.clickRight(data.player));
