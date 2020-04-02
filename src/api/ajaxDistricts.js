export default class AjaxDistricts {
	constructor(client) {
		this.client = client;
	}

	list() {
		return this.client.get('/districts');
	}
}
