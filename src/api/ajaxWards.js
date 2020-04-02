export default class AjaxWards {
	constructor(client) {
		this.client = client;
	}

	list() {
		return this.client.get('/wards');
	}
}
