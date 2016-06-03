@component('team-scores')
class TeamScores extends polymer.Base {
	@property({ type: Number, value: 0, notify: true }) private inning: number;
	@property({ type: Number, value: 0 }) private awayScore: number;
	@property({ type: Number, value: 0 }) private homeScore: number;
	private interval: number;

	@observe("inning")
	inningChanged(newValue, oldValue) {
		if (newValue === 10) {
			this.stopGame();
			this.startGame();
			// this.fire("stop-game");
			// this.fire("start-game");
		}
	}

	@listen("start-game")
	startGame() {
		this.inning = 0;

		this.interval = setInterval(this.updateScores.bind(this), 3000);
	}

	@listen("stop-game")
	stopGame() {
		clearInterval(this.interval);
	}

	updateScores() {
		this.inning++;
		this.awayScore = (this.inning * 2);
		this.homeScore = (this.inning * 3);
	}
	
	// Lifecycle callbacks
	ready() {
		this.startGame();
		// this.fire("start-game");
	}
}

TeamScores.register();