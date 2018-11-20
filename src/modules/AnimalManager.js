import APIManager from "./APIManager"

class AnimalManager extends APIManager {

  getAnimal(id) {
    return this.get(id)
  }

  getAll() {
    return this.all()
  }

  removeAndList(id){
    return this.delete(id).then(() => this.all())
  }
}

export default new AnimalManager("animals")




// const remoteURL = "http://localhost:5002"

// export default {
//   get(category, id) {
//     return fetch(`${remoteURL}/${category}/${id}`).then(data => data.json())
//   },

//   getAll() {
//     return fetch(`${remoteURL}/animals`).then(e => e.json())
//   },
//   removeAndList(id) {
//     return fetch(`http://localhost:5002/animals/${id}`, {
//       method: "DELETE"
//     })
//       .then(e => e.json())
//       .then(() => fetch(`http://localhost:5002/animals`))
//       .then(e => e.json())
//   }
// }
