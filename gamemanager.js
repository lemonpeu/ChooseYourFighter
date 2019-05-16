let GameManager = {
     setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
     },
     resetPlayer: function(classType) {
        switch(classType) {
            case "Happy-cato":
                player = new Player(classType, 400, 110, 150, 300);
                break;
            case "hate-cato":
                player = new Player(classType, 300, 130, 100, 180);
                break;
            case "help-cato":
                player = new Player(classType, 250, 120, 200, 400);
                break;
            case "fighter":
                player = new Player(classType, 500, 200, 80, 250);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="fighters/' + 
        classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' +
        classType + '</h3><p class="health-player">Health: ' + player.health + 
        '</p><p>Strength: ' + player.strength + 
        '</p><p>Speed: ' + player.speed + '</p><p>Hyperactivity: ' + player.hyperactivity + '</p></div>';
     },
     setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Misión: Encontrar enemigos.</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Buscá un enemigo</a>';
        getArena.style.visibility = "visible";
        // Se visibiliza arena
     },
     setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // Se crea enemigo
        let enemy00 = new Enemy("Doggo", 390, 100, 200, 250);
        let enemy01 = new Enemy("AngryBird", 230, 80, 150, 120);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        console.log(chooseRandomEnemy);
        switch (chooseRandomEnemy) {
            case 0:
            enemy = enemy00;
                break;
            case 1:
            enemy = enemy01;
            break; 
        }
        getHeader.innerHTML = '<p>Attack!</p>';
        //PlayerMoves.calcAttack objeto que va a calcular el mov del player.
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '"class="img-avatar"><div><h3>' +
                            enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health +
                            '</p><p>Strength: ' + enemy.strength + '</p><p>Speed: ' + enemy.speed + 
                            
                            '</p><p>Hyperactivity: ' + enemy.hyperactivity + '</p></div>';
        
     } 
}