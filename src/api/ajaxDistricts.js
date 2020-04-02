export default class AjaxDistricts {
	constructor(client) {
		this.client = client;
	}

	list(filter) {
		return this.client.get('/districts', filter);
	}

}
