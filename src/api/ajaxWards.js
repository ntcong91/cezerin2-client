export default class AjaxWards {
	constructor(client) {
		this.client = client;
	}

	list(filter) {
		return this.client.get('/wards', filter);
    }
}
