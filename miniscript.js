"use strict"
/**
 * miniscript is a library that help create minitel page using words.
 * (as in a language)
 * @file miniscript.js
 * @author Jambonbill
 * @version 1.0
 */

/*
===============================================================================
                           Les codes "controles" (<32).
===============================================================================

* Codes C0:

+-------------+-----+---------------------------------------------------------+
! 00 (Ctrl-@) ! NUL ! Filtre. Caractere de bourrage.                  !
! 01 (Ctrl-A) ! SOH ! Filtre. Debut RAMs, ROM.                    !
! 02 (Ctrl-B) !     ! Filtre.                             !
! 03 (Ctrl-C) !     ! Filtre.                             !
! 04 (Ctrl-D) ! EOT ! Filtre. Fin RAMs, ROM.                      !
! 05 (Ctrl-E) ! ENQ ! Renvoie la RAM 1. (M1).                     !
! 06 (Ctrl-F) !     ! Filtre.                             !
! 07 (Ctrl-G) ! BEL ! Buzzer (Bip).                       !
! 08 (Ctrl-H) ! BS  ! Curseur gauche.                         !
! 09 (Ctrl-I) ! HT  ! Curseur droit (TAB).                    !
! 0A (Ctrl-J) ! LF  ! Curseur bas.                        !
! 0B (Ctrl-K) ! VT  ! Curseur haut.                       !
! 0C (Ctrl-L) ! FF  ! Effacement de l'ecran et Home.                  !
! 0D (Ctrl-M) ! CR  ! Retour chariot (colonne 1).                 !
! 0E (Ctrl-N) ! SO  ! Passage dans le jeu semi-graphique (G1).            !
! 0F (Ctrl-O) ! SI  ! Retour au jeu normal (G0).                  !
! 10 (Ctrl-P) ! DLE ! Filtre. Caractere de transparence (M10).            !
! 11 (Ctrl-Q) ! Con ! Curseur on.                         !
! 12 (Ctrl-R) ! Rep ! Repetition du dernier caractere: n+64. Maximum: 64 fois.!
! 13 (Ctrl-S) ! Sep ! Filtre le caractere suivant aussi (Separateur).         !
! 14 (Ctrl-T) ! Coff! Curseur off.                        !
! 15 (Ctrl-U) ! NACK! Filtre.                             !
! 16 (Ctrl-V) ! SYN ! Non-documente. Idem que 19 (Ctrl-Y).            !
! 17 (Ctrl-W) !     ! Filtre.                             !
! 18 (Ctrl-X) ! CAN ! Cancel. Efface la fin de la ligne.              !
! 19 (Ctrl-Y) ! SS2 ! Introduit un caractere G2 (accents, signes speciaux...).!
! 1A (Ctrl-Z) ! SUB ! Caractere d'erreur (? a l'envers si M1/M10, DEL sinon). !
! 1B (Ctrl-[) ! ESC ! Introduit une sequence escape.                  !
! 1C (Ctrl-\) !     ! Filtre.                             !
! 1D (Ctrl-]) ! SS3 ! Filtre le caractere suivant aussi (M1B).            !
! 1E (Ctrl-^) ! RS  ! Home (1ere ligne, 1ere colonne).                !
! 1F (Ctrl-_) ! US  ! Posititionnement curseur: Pl+64 Pc+64 ou Pl sur 2digits.!
+-------------+-----+---------------------------------------------------------+

 */

//a bunch of chainable methods for easy minitel scripting
// https://www.goto10.fr/minitel/videotex/
const miniscript=function(){
    console.log("miniscript v0.11");
    return {
        str:'',
        data:[],
        beep:function(){
            //Buzzer (Bip)
            this.put(0x07);
        },
        bgColor:function(n){
            let color=0x57;
            switch(n){
                case "red":color=0x51;break;
                case "green":color=0x52;break;
                case "yellow":color=0x53;break;
                case "blue":color=0x54;break;
                case "pink":color=0x55;break;
                case "cyan":color=0x56;break;
                case "white":color=0x57;break;
            }
            this.data.push(0x1B);//set BG color
            this.data.push(color);//colorindex
            return this;

        },

        blink:function(b){
            //this.put(0x48);
            this.put(0x1B);
            this.put(72);//¯\_(ツ)_/¯
            /*
            if(b==false){
                this.put(0x17);
            }else{
                this.put(0x48);
            }
            */
            return this;
        },
        /*
        blinkOff:function(){
            return this;
        },
        */

        clearScreen:function(){
            this.put(0x0C);
            return this;
        },

        clearScreenStart:function(){
            //
            return this;
        },

        clearScreenEnd:function(){
            //
            return this;
        },

        clearLine:function(){
            //
            return this;
        },

        clearEol:function(){
            //
            return this;
        },

        nl:function(){//Retour chariot (colonne 1).
            this.put(0x0D);
            return this;
        },

        br:function(){//<br />
            this.put([0x0A,0x0D]);
            //this.put(0x13);
            return this;
        },

        clearStatus:function(){
            this.put(0x17);
            return this;
        },

        clearEol:function(){
            this.put(0x17);
            return this;
        },

        color:function(n){
            let color=0x47;
            switch(n){
                case "red":color=0x41;break;
                case "green":color=0x42;break;
                case "yellow":color=0x43;break;
                case "blue":color=0x44;break;
                case "pink":color=0x45;break;
                case "cyan":color=0x46;break;
                case "white":color=0x47;break;
            }
            //black ->0x40
            //red ->0x41
            //green ->0x42
            //yellow ->0x43
            //blue ->0x44
            //pink ->0x45
            //cyan ->0x46
            //white ->0x47
            this.data.push(0x1B);//set FG color
            this.data.push(color);//colorindex
            return this;
        },

        cursor:function(b){//curson ON
            if(b==true){
                this.put(0x11);
            }else{
                this.put(0x14);
            }
            return this;
        },
        /*
        delay:function(ticks){
            return this;
        },
        */
        gfx:function(){//switch to gfx mode
            this.put(0x0E);//Mode semi-graphique
            //this.put(gfxdata);
            return this;
        },
        home:function(){
            //Home (1ere ligne, 1ere colonne).
            this.put(0x1E);
            return this;
        },
        invert:function(b){
            if(b===false){
                this.put([0x1B,0x5C]);
            }else{
                this.put([0x1B,0x5D]);//inverse
            }
            return this;
        },

        locate:function(x,y){//move cursor to given location
            this.data.push(0x1F);//move to
            this.data.push(0x40+y%25);//y first
            this.data.push(0x40+x%40);//x
            return this;
        },
        left:function(){
            //Curseur gauche
            this.put(0x08);
            return this;
        },
        up:function(){
            //Curseur haut
            this.put(0x0B);
            return this;
        },
        down:function(){
            this.put(0x0A);
            return this;
        },
        put:function(b){
            if(typeof b=="object"){
                //todo
                for(let i in b){
                    this.data.push(b[i]);
                }
            }else{
                this.data.push(b);
            }
            return this;
        },
        repeat:function(n){//Repetition du dernier caractere: n+64. Maximum: 64 fois.!
            this.put([0x12,n%64]);
            return this;
        },
        right:function(){
            //Curseur droit (TAB).
            this.put(0x09)
            return this;
        },
        sizeNormal:function(){
            this.put([0x1B,0x4C]);
            return this;
        },
        sizeDoubleHeight:function(){
            this.put([0x1B,0x4D]);
            return this;
        },
        sizeDoubleWidth:function(){
            this.put([0x1B,0x4E]);
            return this;
        },

        sizeDouble:function(){
            this.put([0x1B,0x4F]);
            return this;
        },

        write:function(str){
            // Add a Ascii string
            // I should make sure its lmited to printables
            for(let i in str){
                //this.data.push(str.charCodeAt(i));
                this.put(str.charCodeAt(i));
            }
            return this;
        },
        btoa:function(){
            return btoa(this.data);
        }
    }
}