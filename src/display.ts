import {Player} from "mojang-minecraft";
import {CPS} from "./index.js";

export function display(pl: Player) {
    const cpsL = CPS.getLeft(pl)
    const cpsR = CPS.getRight(pl)
    pl.runCommand('title @s actionbar §eCPS§7: §f' + cpsL + ' §7| §f' + cpsR)
    pl.nameTag = `${pl.name}\n§eCPS§7: §f${cpsL ?? 0} §7| §f${cpsR ?? 0}`
}