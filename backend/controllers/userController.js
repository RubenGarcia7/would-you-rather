import { users } from '../data/users.js'

export const getUsers = async(req, res) => {
  res.json(users)
}
