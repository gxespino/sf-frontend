import { base } from '../config/constants'

export function logout() {
  return base.unauth()
}

export function login(email, pw) {
  return base.authWithPassword({
    email: email,
    password: pw,
  }, {})
}

export function saveUser(error, user, fullName, company) {
  return base.post(`users/${user.uid}`, {
    data: {
      email: user.email,
      uid: user.uid,
      fullName: fullName,
      company: company,
    },
    then(error) {
      if(!error) {
        return user
      }
    }
  })
}

export function auth(email, password, fullName, company) {
  return base.createUser({
    email: email,
    password: password,
  }, function(error, user) {
    if(!error) {
      saveUser(error, user, fullName, company)
    }
  })
}
