export default class AjaxProvinces {
	constructor(client) {
		this.client = client;
	}

	list() {
		return this.client.get('/provinces');
	}
}
