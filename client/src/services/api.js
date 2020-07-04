import axios from "axios";

export const signup = (email, password) => {
  return axios.post('/api/signup', { email, password })
    .then(response => response.data)
}

export const login = (email, password) => {
  return axios.post('/api/login', { email, password })
    .then(response => response.data)
}

export const logout = () => {
  return axios.post('/api/logout', {})
    .then(response => response.data)
}

export const profileEdit = (email,instagramID,firstName,lastName,birthday,country,city,weight,height) => {
  return axios.put('/api/profile-edit', {email,instagramID,firstName,lastName,birthday,country,city,weight,height})
    .then(response => response.data)
}

// Cloudinary

// export default {
//   service,
 
//   handleUpload (theFile) {
//     // console.log('file in service: ', theFile)
//     return service.post('/upload', theFile)
//       .then(res => res.data)
//       .catch(errorHandler);
//   },
 
//   saveNewThing (newThing) {
//     // console.log('new thing is: ', newThing)
//     return service.post('/things/create', newThing)
//       .then(res => res.data)
//       .catch(errorHandler);
//   }
// }
