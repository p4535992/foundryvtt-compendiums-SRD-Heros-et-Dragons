//Hook couleur compendium

import { compendiumColor } from "./scripts/compendiums.js";

export const MODULE_ID = "srd-heros-et-dragons";

/*-- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -
 ----------------INIT--------------------
 -- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -*/
Hooks.once("init", function () {
    // createLDM(); // .........en attente ....

    //---------déclaration des settings
    game.settings.register("srd-heros-et-dragons", "HDcompendiumColor", {
        name: "couleur des compendium H&D et DD5",
        hint: "affiche les compendium H&D en vert, DD5 en rouge",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
        onChange: () => window.location.reload(),
    });
});

//--------------------------------------
//----setting compendiums
//--------------------------------------
// Hooks.on("renderSidebarTab", function() {
//     if (game.settings.get('srd-heros-et-dragons', 'HDcompendiumColor')) {
//         compendiumColor();
//     }
// });

Hooks.once("ready", async () => {
    if (game.settings.get("srd-heros-et-dragons", "HDcompendiumColor")) {
        compendiumColor();
    }
});
