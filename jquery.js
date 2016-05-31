function refresh() {
$.ajax({
    url: "index.html", // Ton fichier ou se trouve ton chat
    success:
        function(retour){
        $('xivelyContent').html(retour); // rafraichi toute ta DIV "bien sur il lui faut un id "
    }
});
 
}
 
setInterval(refresh(), 10000) // Répète la fonction toutes les 10 sec
