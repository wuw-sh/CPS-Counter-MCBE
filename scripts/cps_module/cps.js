const cps = new Map();
export class CPS {
    static get get() {
        return cps;
    }
    static runCPS(pl, cb) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        let getCPS_L = (_b = (_a = cps.get(pl.name)) === null || _a === void 0 ? void 0 : _a.cpsArr.L) !== null && _b !== void 0 ? _b : [];
        let getCPS_R = (_d = (_c = cps.get(pl.name)) === null || _c === void 0 ? void 0 : _c.cpsArr.R) !== null && _d !== void 0 ? _d : [];
        const now = Date.now();
        const cpsFilter = (cpsArr) => {
            return cpsArr.filter(t => now - t < 1000);
        };
        getCPS_L = cpsFilter(getCPS_L);
        getCPS_L.push(now);
        getCPS_R = cpsFilter(getCPS_R);
        getCPS_R.push(now);
        const cpsL = getCPS_L.length - 1;
        const cpsR = getCPS_R.length - 1;
        cps.set(pl.name, {
            cpsArr: { L: (_f = (_e = cps.get(pl.name)) === null || _e === void 0 ? void 0 : _e.cpsArr.L) !== null && _f !== void 0 ? _f : [], R: (_h = (_g = cps.get(pl.name)) === null || _g === void 0 ? void 0 : _g.cpsArr.R) !== null && _h !== void 0 ? _h : [] },
            cps: { L: cpsL, R: cpsR }
        });
        cb(pl);
        if (cpsL === 0 && cpsR === 0) {
            CPS.get.delete(pl.name);
        }
        else if (cpsL === 0) {
            CPS.get.set(pl.name, { cpsArr: { L: [], R: (_k = (_j = CPS.get.get(pl.name)) === null || _j === void 0 ? void 0 : _j.cpsArr.R) !== null && _k !== void 0 ? _k : [] }, cps: { L: 0, R: 0 } });
        }
        else if (cpsR === 0) {
            CPS.get.set(pl.name, { cpsArr: { L: (_m = (_l = CPS.get.get(pl.name)) === null || _l === void 0 ? void 0 : _l.cpsArr.L) !== null && _m !== void 0 ? _m : [], R: [] }, cps: { L: 0, R: 0 } });
        }
    }
    static getLeft(pl) {
        return cps.get(pl.name).cps.L;
    }
    static getRight(pl) {
        return cps.get(pl.name).cps.R;
    }
    static clickLeft(pl) {
        var _a;
        if (!cps.get(pl.name)) {
            cps.set(pl.name, { cpsArr: { L: [], R: [] }, cps: { L: null, R: null } });
        }
        (_a = cps.get(pl.name)) === null || _a === void 0 ? void 0 : _a.cpsArr.L.push(new Date().getTime());
    }
    static clickRight(pl) {
        var _a;
        if (!cps.get(pl.name)) {
            cps.set(pl.name, { cpsArr: { L: [], R: [] }, cps: { L: null, R: null } });
        }
        (_a = cps.get(pl.name)) === null || _a === void 0 ? void 0 : _a.cpsArr.R.push(new Date().getTime());
    }
}
