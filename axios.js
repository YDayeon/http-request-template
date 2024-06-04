const getButton = document.querySelector("#get-button")
const postButton = document.querySelector("#post-button")
// const axios = require("axios")

const API_URL = "https://reqres.in/api"
const GET_API_PATH = "/users"
const POST_API_PATH = "/register"

const getData = () => {
  axios.get(API_URL + GET_API_PATH)
    .then(res => res.json())
    .then(res => console.log(res))
}
const postData = () => {
  const body = {
    email: "eve.holt@reqres.in",
    // password: "pistol"
  }
  axios.post(API_URL + POST_API_PATH, body)
    .then(res => console.log(res))
    .catch(error => {
      console.error("error ===>", error)
    })
}

getButton.addEventListener("click", getData)
postButton.addEventListener("click", postData)