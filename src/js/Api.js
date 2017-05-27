class ApiService {

	constructor(system) {
		this.system = system
		this.tokenKey = ""
		this.sessionKey = ""
		this.user_id = 0
	}

	signIn(_login, _password) {
		let api = this
		let data = {
			login: _login,
			password: _password
		}
		let callback = function(data) {
			if (data != null) {
				api.sessionKey = data.session
				api.user_id = data.user_id
				if (api.sessionKey !== null && api.user_id != 0) {
					api.system.setCookie("sessionKey", api.sessionKey)
					api.system.setCookie("user_id", api.user_id)
					window.location.replace("/");
				}
			}
		}
		this.pushRequest("users", "auth", data, callback)
	}

	pushRequest(apiFunction, apiMethod, inputData, callbackFunction) {
		if (apiFunction !== null && apiMethod !== null && callbackFunction !== null) {
			let data = (inputData === null) ? "" : "=" + JSON.stringify(inputData)
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					let answer = JSON.parse(this.responseText)
					if (answer.status === "success") {
						if (answer.response.method_status === "success") {
							callbackFunction(answer.response.data)
							return
						}
					}
					callbackFunction(null)
					return
				}
			}
			xhttp.open("GET", this.system.API_SERVER_URL + "?" + apiFunction + "." + apiMethod + data, true);
			xhttp.send();
		}
	}
}

export default ApiService;
