import {
    creaPersoApp
} from './appCrea.js';



Hooks.on("renderActorSheet5e", (app, html, data) => {

    //-----crée l'app de suivi en fonction des data de la fiche de perso: 
    let crea = new creaPersoApp(data)
    if (data.isCharacter && data.owner) {
        if (document.getElementById('HDcrea') === null) {
            //création du bouton
            let bar = html[0].firstElementChild;
            let butonCrea = document.createElement("a")
            butonCrea.innerHTML = '<i class="fas fa-cog"></i>création de perso';
            butonCrea.id = "HDcrea";
            butonCrea.style.marginRight="20px";
        
            //
            butonCrea.addEventListener("click", () => {
                crea.render(true);
            }, false);
            //----ajout du bouton pour ouvrir le suivi

            bar.prepend(butonCrea);

        }
    }
});