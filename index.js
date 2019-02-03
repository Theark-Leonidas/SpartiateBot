const  Discord  =  require ( ' discord.js ' );
const  bot  =  new  Discord.Client ();
const  cfg  require ('./ index . json '); // une garder en version desktop
 jeton  const =  processus . env . jeton  // a garder en version heroku
préf  préfixe  = ( " $ " );

bot . on ( ' prêt ' , fonction () {
    console . log ( " Je suis prêt à être utilisé. " )
    bot . utilisateur . setActivity ( ' rien ' ). catch ( erreur console . )
});

bot . sur ( ' guildMemberAdd ' , membre  => {
    membre . createDM (). alors ( canal  => {
         canal de retour . send ( ' Bienvenue sur le serveur '  +  membre . displayName )
        console . log ( ` $ { membre . Sélectionnez } à rejoind le serveur. ` )
    }). catch ( erreur console . )
});

const  ban  =  require ( ' ./kick et ban / ban ' );


bot . on ( ' message ' , fonction ( message ) {
    if ( ban . match (message)) {
         interdiction de retour . action (message)
    }
});


bot . on ( ' message ' , msg  => {
    if ( msg . content  ===  " bonjour " ) {
        msg . réponse ( " Heureux de te revoir parmis nous. " )
    }
    if ( msg . content . match ( / salut / i )) {
            msg . répondre ( ' Je suis d \' accord avec toi. ' )
    }
    si ( msg . contenu  === préfixe +  " site " ) {
        msg . canal . envoyer ( " https://www.youtube.com/user/routierman " )
        console . log ( " Une personne a demandé pour aller sur ton site. " )
    }

});

bot . connexion ( cfg . jeton ); // une garder en version desktop
bot . login (jeton); // a garder en version heroku