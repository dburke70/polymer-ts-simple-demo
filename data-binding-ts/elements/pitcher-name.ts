
@component('pitcher-name')
class PitcherName extends polymer.Base
{
	@property({ type: String, value: '', notify: true, reflectToAttribute: true }) private firstName: string;
	@property({ type: String, value: '', notify: true, reflectToAttribute: true }) private lastName: string;
}

PitcherName.register();

