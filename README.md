# Game of Life (Angular Project)

My implementation of John Conway's [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life "Game of Life").

This project was made with [Angular CLI](https://github.com/angular/angular-cli "Angular CLI") version 13.3.4.

![Game of Life (Angular Project)](https://i.ibb.co/XJ9gwyj/gol.jpg "Game of Life (Angular Project)")

## Structure

- The topmost section just shows the title and a pair of gifs;
- The central area is a **40x40** interactive board that gets updated as the game progresses;
- the lowest part hosts controls and a generation counter:
 - "**Avvia/Pausa**" starts and pauses the game;
 - "**Random**" stops the game, resets the counter, clears the board and fills it with randomnly generated cells;
 - "**Clear**" stops the game and resets the counter;
 - "**Lento/Normale/Veloce**" (Slow, Normal, Fast) adjusts game speed (can also be used while the game is running).

### Builds

See [Releases](https://github.com/Montblanc0/gol/releases) to download an Angular build. [[MIRROR]](https://mega.nz/file/rCQnUQDb#piuN6jQW4b0mX5L5GaTT9OZW2RKXG1BXwy0mBX37q0M)

A native Windows application is also available in [another repository](https://github.com/Montblanc0/gol-tauri).

### Instructions

This game follows the [original rules](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules) but also adds a "Pac-Man Effect" on every border.

You can draw your original generation by clicking on any box to toggle the alive/dead state while the board is clear and the game is not running.


Board interaction is **disabled** while the game is running.

Pause the game to edit the current generation and start it again to continue.

The game doesn't stop by itself when the board is clear or the game comes to a stall.

### Credits

Icons: [Alien icons by Freepik - Flaticon](https://www.flaticon.com/free-icons/alien)