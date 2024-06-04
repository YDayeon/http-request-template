const getButton = document.querySelector("#get-button")
const postButton = document.querySelector("#post-button")

const API_URL = "https://reqres.in/api"
const GET_API_PATH = "/users"
const POST_API_PATH = "/register"

const sendHTTPRequest = async (method, path, body) => {
  const url = API_URL+path
  const response = await fetch(url, {
    method,
    headers: body && {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
  const json = await response.json()
  if (response.status >= 400) {
    const ERROR_MSG = "something went wrong"
    let error = new Error(ERROR_MSG)
    error.data = json
    throw error
  } 

  return json
}

const getData = async () => {
  const data = await sendHTTPRequest("GET", GET_API_PATH)
  console.log(data)
}
const postData = async () => {
  try {
    const body = {
      email: "eveggg.holt@reqres.in",
      password: "pistol"
    }
    const data = await sendHTTPRequest("POST", POST_API_PATH, body)
    console.log(data)
  } catch (error) {
    console.log("error ===>", error.data)
  }
  
}

getButton.addEventListener("click", getData)
postButton.addEventListener("click", postData)