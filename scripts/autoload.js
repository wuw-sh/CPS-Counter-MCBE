export function autoload() {
    const start = Date.now();
    import('./cps_module/index.js').then(() => {
        console.warn(`§7Plugin §8( §eCPS §fCounter §8) §7has been loaded in §a${Date.now() - start} §bms`);
    }).catch((err) => {
        console.warn(`§7Loading error from plugin §8( §eCPS §fCounter §8)§7: §c` + err + err.stack);
    });
}
