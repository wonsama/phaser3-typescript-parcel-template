import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('game')
	}

	preload()
  {
    this.load.image('background', 'house/bg_repeat_340x640.png')
  }

  create()
  {
    this.add.image(0, 0, 'background').setOrigin(0, 0)  
  }
}
