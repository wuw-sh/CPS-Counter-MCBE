import { CPS } from "./index.js";
export function display(pl) {
    const cpsL = CPS.getLeft(pl);
    const cpsR = CPS.getRight(pl);
    pl.runCommand('title @s actionbar §eCPS§7: §f' + cpsL + ' §7| §f' + cpsR);
    pl.nameTag = `${pl.name}\n§eCPS§7: §f${cpsL !== null && cpsL !== void 0 ? cpsL : 0} §7| §f${cpsR !== null && cpsR !== void 0 ? cpsR : 0}`;
}
