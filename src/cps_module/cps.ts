import {Player} from "mojang-minecraft";

const cps = new Map<string, { cpsArr: { L: number[], R: number[] }, cps: { L: number, R: number } }>()

export class CPS {
    static get get() {
        return cps
    }

    static runCPS<PL extends Player>(pl: PL, cb: (pl: PL) => void) {
        let getCPS_L = cps.get(pl.name)?.cpsArr.L ?? []
        let getCPS_R = cps.get(pl.name)?.cpsArr.R ?? []
        const now = Date.now()
        const cpsFilter = (cpsArr: number[]) => {
            return cpsArr.filter(t => now - t < 1000)
        }
        getCPS_L = cpsFilter(getCPS_L)
        getCPS_L.push(now)
        getCPS_R = cpsFilter(getCPS_R)
        getCPS_R.push(now)
        const cpsL = getCPS_L.length - 1
        const cpsR = getCPS_R.length - 1
        cps.set(pl.name, {
            cpsArr: {L: cps.get(pl.name)?.cpsArr.L ?? [], R: cps.get(pl.name)?.cpsArr.R ?? []},
            cps: {L: cpsL, R: cpsR}
        })
        cb(pl)
        if (cpsL === 0 && cpsR === 0) {
            CPS.get.delete(pl.name)
        } else if (cpsL === 0) {
            CPS.get.set(pl.name, {cpsArr: {L: [], R: CPS.get.get(pl.name)?.cpsArr.R ?? []}, cps: {L: 0, R: 0}})
        } else if (cpsR === 0) {
            CPS.get.set(pl.name, {cpsArr: {L: CPS.get.get(pl.name)?.cpsArr.L ?? [], R: []}, cps: {L: 0, R: 0}})
        }
    }

    static getLeft(pl: Player): number {
        return cps.get(pl.name).cps.L
    }

    static getRight(pl: Player): number {
        return cps.get(pl.name).cps.R
    }

    static clickLeft(pl: Player) {
        if (!cps.get(pl.name)) {
            cps.set(pl.name, {cpsArr: {L: [], R: []}, cps: {L: null, R: null}});
        }
        cps.get(pl.name)?.cpsArr.L!.push(new Date().getTime());
    }

    static clickRight(pl: Player) {
        if (!cps.get(pl.name)) {
            cps.set(pl.name, {cpsArr: {L: [], R: []}, cps: {L: null, R: null}})
        }
        cps.get(pl.name)?.cpsArr.R!.push(new Date().getTime());
    }
}
