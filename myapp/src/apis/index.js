import axios from 'axios'

axios.defaults.baseURL('http://localhost:5000/users')

export const getUserApi=async ()=>{
    return axios.get('/users')
}
export const getUserByIdApi=async (id)=>{
    return axios.get(`/users${id}`)
}
export const createUserApi=async (user)=>{
    return axios.post(`/users`,user)
}
export const updateUserApi=async (user)=>{
    return axios.put(`/users ${user.id}`,user)
}
export const deleteUserByIdApi=async (id)=>{
    return axios.delete(`/users/${user,id}`)
}