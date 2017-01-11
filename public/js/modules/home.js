define(['player'], function(player) {

	return {
		init: function () {

			var _player = new player('#player');

			_player.changeFile({
				'src': 'http://www.w3schools.com/html/mov_bbb.mp4'
			})

			console.log(_player);

		}
	}
});