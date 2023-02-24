# Les codes "controles" (<32)
====

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
