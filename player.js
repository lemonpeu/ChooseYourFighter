let player;

function Player(classType, health, strength, speed, hyperactivity) {
    this.classType = classType;
    this.health = health;
    this.strength = strength; 
    this.speed = speed;
    this.hyperactivity = hyperactivity;
}

let PlayerMoves = {
    calcAttack: function() {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        // Ataque del jugador
     let playerAttack = function() {
        let calcBaseDamage;
        if (player.hyperactivity > 0) {
            calcBaseDamage = player.strength * player.hyperactivity / 1000;
        } else {
            calcBaseDamage = player.strength * player.speed / 1000;
        }
 
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutDamage = calcBaseDamage + offsetDamage;
        // Number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.speed / 10) / 2) + 1;
        let attackValues = [calcOutDamage, numberOfHits];
        return attackValues;
    }
    // enemy attacks
     let enemyAttack = function() {
     let calcBaseDamage;
     if (enemy.hyperactivity > 0) {
         calcBaseDamage = enemy.strength * enemy.hyperactivity / 1000;
     } else {
         calcBaseDamage = enemy.strength * enemy.speed / 1000;
     }
 
     let offsetDamage = Math.floor(Math.random() * Math.floor(10));
     let calcOutDamage = calcBaseDamage + offsetDamage;
     // Number of hits
     let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.speed / 10) / 2) + 1;
     let attackValues = [calcOutDamage, numberOfHits];
     return attackValues;
     }
     //Obtiene vida del enemigo y del jugador para actualizarla
     let getPlayerHealth = document.querySelector(".health-player");
     let getEnemyHealth = document.querySelector(".health-enemy");
     // Inicia el ataque depende de la rapidez del enemigo o jugador
     if (getPlayerSpeed >= getEnemySpeed) {
         let playerAttackValues = playerAttack();
         let  totalDamage = playerAttackValues[0] * playerAttackValues[1];
         enemy.health = enemy.health - totalDamage;
         alert(`Dolió por ${playerAttackValues[0]} y arañaste ${playerAttackValues[1]} veces`);
         if (enemy.health <= 0) {
            alert("Ganaste!");
            // Para que no aparezca en negativo
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
         } else {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            // Ataca el enemigo
            let enemyAttackValues = enemyAttack();
            let  totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
         player.health = player.health - totalDamage;
         alert(`Te dolió por ${enemyAttackValues[0]} y pegaron ${enemyAttackValues[1]} veces`);
         if (player.health <= 0) {
            alert("Perdiste :(");
            // Para que no aparezca en negativo
            getPlayerHealth.innerHTML = 'Health: 0';
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }
         }
 
     } else if (getEnemySpeed >= getEnemySpeed) {
        let enemyAttackValues = enemyAttack();
        let  totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert(`Te dolió por ${enemyAttackValues[0]} y te pegaron ${enemyAttackValues[1]} veces`);
        if (player.health <= 0) {
           alert("Perdiste :( ");
           // Para que no aparezca en negativo
           getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
           getPlayerHealth.innerHTML = 'Health: 0';
        } else {
           getPlayerHealth.innerHTML = 'Health: ' + player.health;
           // Ataca el jugador
           let playerAttackValues = playerAttack();
           let  totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert(`Dolió por ${playerAttackValues[0]} y arañaste ${playerAttackValues[1]} veces`);
        if (enemy.health <= 0) {
           alert("Ganaste");
           // Para que no aparezca en negativo
           getEnemyrHealth.innerHTML = 'Health: 0';
           getPlayerHealth.innerHTML = 'Health: ' + player.health;
           } else {
               getEnemyHealth.innerHTML = 'Health: ' + player.health;
           }
        }

    }
    }
      
 }