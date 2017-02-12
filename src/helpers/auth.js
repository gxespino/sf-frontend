import { base } from '../config/constants'

export function auth (email, pw) {
  return base.createUser({
    email: user.email,
    uid: user.uid
  }, {})
    .then(saveUser)
    .catch((error) => console.log('Oops', error))
}

export function logout () {
  return base.unauth()
}

export function login (email, pw) {
  return base.authWithPassword({
    email: email,
    password: pw
  }, {})
}

export function saveUser (user) {
  return base.post(`users/${user.uid}/info`, {
    data: {
      email: user.email,
      uid: user.uid
    },
    then(error) {
      if(!error) {
        return user
      }
    }
  })
}
