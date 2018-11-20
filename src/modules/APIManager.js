const remoteURL = "http://localhost:5002"

class APIManager {
  constructor(props){
    this.name = props

  }

  get(id) {
    return fetch(`${remoteURL}/${this.name}/${id}`).then(data => data.json())
  }

  all() {
    return fetch(`${remoteURL}/${this.name}`).then(data => data.json())
  }

  delete(id){
    return fetch (`${remoteURL}/${this.name}/${id}`, {method: "DELETE"}).then(data => data.json()
    )}

}

export default APIManager