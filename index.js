import fetch from 'node-fetch'

const baseUrl = "https://collectionapi.metmuseum.org/public/collection/v1"

const makeRequest = function() {
	fetch(`${baseUrl}/search?q=horse`)
	  .then(function(response) {
	    return response.json()
	  }).then(function(json) {
	    console.log(json)
	  }).catch(function(error) {
	    console.error(error)
	  })
}

makeRequest()