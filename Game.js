const GameState = Object.freeze({
    START:   Symbol("start"),
    WELCOMING:   Symbol("welcoming"),
    CHOOSE:  Symbol("choose"),
    ROUND1: Symbol("round1"),
    ROUND2: Symbol("round2"),
    ROUND3: Symbol("round3"),
    ROUND4: Symbol("round4"),
    ROUND5:   Symbol("round5"),
    ROUND6:   Symbol("round6"),
    WON: Symbol("won"),
    LOST: Symbol("lost"),
    GAMERESULT: Symbol("gameresult"),
    BATTLEEND: Symbol("battleend"),
});

export default class Game{
    constructor(){
        this.stateCur = GameState.START;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){

            case GameState.START:
                sReply = "Hello Pokemon Trainer. My name is Ash. Today I will battle you and your pokemons. Are You Ready For the Battle? (yes/no)";
                this.stateCur = GameState.WELCOMING;
            break;

            case GameState.WELCOMING:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Great! Please Choose which pokemon you want to battle with. ('quilava' or 'pikachu')";
                    this.stateCur = GameState.CHOOSE;
                }else if(sInput.toLowerCase().match("no")){
                    sReply ="See you next time";
                    this.stateCur = GameState.START;
                }else{
                    sReply ="You seemed to have entered something incorrect";
                }
            break;

            case GameState.CHOOSE:
                if(sInput.toLowerCase().match("quilava")){
                    sReply = "Great! Quilava is a fire type pokemon. Are you ready to battle? Electabuzz COME OUT! Choose your attack move('tackle' , 'flamethrower' , 'inferno')";
                    this.stateCur = GameState.ROUND1;
                }else if(sInput.toLowerCase().match("pikachu")){
                    sReply ="Great! Pikachu is an electric type pokemon. Are you ready to battle? Jolteon COME OUT! Choose your attack move('quick attack' , 'volt charge' , 'thunderbolt')";
                    this.stateCur = GameState.ROUND2;
                }else{
                    sReply ="You seemed to have entered the wrong pokemon name";
                }
            break;

            case GameState.ROUND1:

                if(sInput.toLowerCase().match("tackle")){
                    sReply = "Is that all you got? Electabuzz Dogde and counter with thunderbolt! Your pokemon recieved a lot of damage... Make your next move ('tackle' , 'flamethrower' , 'inferno')";
                    this.stateCur = GameState.ROUND3;
                }else if(sInput.toLowerCase().match("flamethrower")){
                    sReply ="OH NO Electabuzz lost half of his life points.  Electabuzz use Thunder Shock. Your pokemon recieved a lot of damage... Make your next move ('tackle' , 'flamethrower' , 'inferno')";
                    this.stateCur = GameState.ROUND3;
                }else if(sInput.toLowerCase().match("inferno")){
                    sReply ="OH NO Electabuzz is completely paralysed and cannot move and lost most of his life points. Make your next move ('tackle' , 'flamethrower' , 'inferno')";
                    this.stateCur = GameState.ROUND3;
                }else{
                    sReply ="You seemed to have entered the wrong pokemon attack";
                }
            break;

            case GameState.ROUND2:
                if(sInput.toLowerCase().match("quick attack")){
                    sReply = "Is that all you got? Jolteon Dogde and counter with thunderbolt! Pikachu recieved a lot of damage... Make your next move ('quick attack' , 'volt charge' , 'thunderbolt')";
                    this.stateCur = GameState.ROUND4;
                }else if(sInput.toLowerCase().match("volt charge")){
                    sReply ="OH NO Jolteon lost half of his life points. Electabuzz use Thunder Shock. Pikachu recieved a lot of damage... Make your next move ('quick attack' , 'volt charge' , 'thunderbolt')";
                    this.stateCur = GameState.ROUND4;
                }else if(sInput.toLowerCase().match("thunderbolt")){
                    sReply ="OH NO Jolteon is completely paralysed and cannot move and lost most of his life points. Make your next move ('quick attack' , 'volt charge' , 'thunderbolt')";
                    this.stateCur = GameState.ROUND4;
                }else{
                    sReply ="You seemed to have entered the wrong pokemon attack";
                }
            break;

            case GameState.ROUND3:
                if(sInput.toLowerCase().match("tackle")){
                    sReply = "Electabuzz attack with thunderbolt! Your pokemon fainted! You were a tough match but I managed to beat you at the end! Train more and we shall battle again! You want a rematch? (yes/no)";
                    this.stateCur = GameState.GAMERESULT;
                }else if(sInput.toLowerCase().match("flamethrower")){
                    sReply ="OH NO Electabuzz Fainted! Your pokemon is very strong You may have won for now but I will soon take my revenge. You want a rematch? (yes/no)";
                    this.stateCur = GameState.GAMERESULT;
                }else if(sInput.toLowerCase().match("inferno")){
                    sReply ="Electabuzz use Thunder Shock at Quilava. Both pokemons have lost almost all of their life points. Make your next move ('tackle' , 'flamethrower' , 'inferno')";
                    this.stateCur = GameState.ROUND5;
                }else{
                    sReply ="You seemed to have entered the wrong pokemon attack";
                }
            break;

            case GameState.ROUND4:
                if(sInput.toLowerCase().match("quick attack")){
                    sReply = "Jolteon attack with thunderbolt! Pikachu fainted! You were a tough match but I managed to beat you at the end! Train more and we shall battle again! You want a rematch? (yes/no)";
                    this.stateCur = GameState.GAMERESULT;
                }else if(sInput.toLowerCase().match("volt charge")){
                    sReply ="OH NO Jolteon Fainted! Pikachu is very strong. You may have won for now but I will soon take my revenge. You want a rematch? (yes/no)";
                    this.stateCur = GameState.GAMERESULT;
                }else if(sInput.toLowerCase().match("thunderbolt")){
                    sReply ="Jolteon is no longer paralysed. Jolteon use Thunder Shock at Pikachu. Both pokemons have lost almost all of their life points. Make your next move ('quick attack' , 'volt charge' , 'thunderbolt')";
                    this.stateCur = GameState.ROUND6;
                }else{
                    sReply ="You seemed to have entered the wrong pokemon attack";
                }
            break;

            case GameState.ROUND5:
                if(sInput.toLowerCase().match("tackle")){
                    sReply = "Electabuzz attack with thunderbolt! Quilava fainted! You were a tough match but I managed to beat you at the end! Train more and we shall battle again! You want a rematch? (yes/no)";
                    this.stateCur = GameState.GAMERESULT;
                }else if(sInput.toLowerCase().match("flamethrower")){
                    sReply ="OH NO Electabuzz Fainted! Quilava is very strong. You may have won for now but I will soon take my revenge. You want a rematch? (yes/no)";
                    this.stateCur = GameState.GAMERESULT;
                }else if(sInput.toLowerCase().match("inferno")){
                    sReply ="Electabuzz Dogde and Use Beam Ray at Quilava. Quilava fainted! You were a tough match but I managed to beat you at the end! Train more and we shall battle again! You want a rematch? (yes/no)";
                    this.stateCur = GameState.GAMERESULT;
                }else{
                    sReply ="You seemed to have entered the wrong pokemon attack";
                }
            break;

            case GameState.ROUND6:
                if(sInput.toLowerCase().match("quick attack")){
                    sReply = "Jolteon attack with thunderbolt! Pikachu fainted! You were a tough match but I managed to beat you at the end! Train more and we shall battle again! You want a rematch? (yes/no)";
                    this.stateCur = GameState.GAMERESULT;
                }else if(sInput.toLowerCase().match("volt charge")){
                    sReply ="OH NO Jolteon Fainted! Pikachu is very strong. You may have won for now but I will soon take my revenge. You want a rematch? (yes/no)";
                    this.stateCur = GameState.GAMERESULT;
                }else if(sInput.toLowerCase().match("thunderbolt")){
                    sReply ="Jolteon Fainted! Pikachu is very strong! You may have won for now but I will soon take my revenge. You want a rematch? (yes/no)";
                    this.stateCur = GameState.GAMERESULT;
                }else{
                    sReply ="You seemed to have entered the wrong pokemon attack";
                }
            break;

            case GameState.GAMERESULT:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You might want to delete the chat to avoid too much text. Press any key to continue...";
                    this.stateCur = GameState.START;
    
                }else if (sInput.toLowerCase().match("no")){
                    sReply = "Until next time!";
                    this.stateCur.START;
                }else{
                    sReply = "You might have choosen something else";
                }
            break;
        }
        return([sReply]);
    }
}




