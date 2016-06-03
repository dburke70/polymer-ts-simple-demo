@component('game-on')
class GameOn extends polymer.Base
{
	@property({ type: String, value: '', notify: false, reflectToAttribute: true }) private gameDate: string;
	@property({ type: String, value: 'Homer' }) private pitcherFirstName: string;
	@property({ type: String, value: 'Bailey' }) private pitcherLastName: string;
	@property({ type: Number, value: 0}) private inning: number;

	@computed() pitcherFullName(pitcherFirstName, pitcherLastName) {
		return pitcherFirstName + ' ' + pitcherLastName;
	}

	@listen('nameBtn.tap')
	changeLastName(event) {
		var index = this.pitcherLastName.indexOf(' - Changed');
		if (index === -1) {
			this.pitcherLastName += ' - Changed';
		} else {
			this.pitcherLastName = this.pitcherLastName.substring(0, index);
		}
	}

	// Lifecycle callbacks
	created() {
		console.log(this.localName + ' created called - Called when the element has been created, but before property values are set and local DOM is initialized.');
	}
	ready() {
		console.log(this.localName + ' ready called - Called after property values are set and local DOM is initialized.');
	}
	attached() {
		console.log(this.localName + ' attached called - Called after the element is attached to the document.');
	}
	detached() {
		console.log(this.localName + ' detached called - Called after the element is detached from the document.');
	}
	attributeChanged() {
		console.log(this.localName + ' attributeChanged called - Called when one of the elements attributes is changed.');
	}
}

GameOn.register();