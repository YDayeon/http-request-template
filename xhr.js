const getButton = document.querySelector("#get-button")
const postButton = document.querySelector("#post-button")

const API_URL = "https://reqres.in/api"
const GET_API_PATH = "/users"
const POST_API_PATH = "/register"

const sendHTTPRequest = (method, path, body) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
  
    xhr.open(method, API_URL + path)
    
    xhr.responseType = "json"

    if (method === "POST") {
      xhr.setRequestHeader("Content-Type", "application/json")
    }

    xhr.onload = () => {
      if(xhr.status === 200)
        resolve(xhr.response)
      reject("something went wrong")
    }

    xhr.onerror = () => {
      reject("something went wrong")
    }

    xhr.send(JSON.stringify(body))
  })

 return promise
}

const getData =  async () => {
  const response = await sendHTTPRequest("GET", GET_API_PATH)
  console.log(response)
}

const postData = async () => {
  try {
    const body = {
      email: "eve.holt@reqres.in",
      password: "pistol"
    }
    const response = await sendHTTPRequest("POST", POST_API_PATH, body)
    console.log(response)
  } catch (error) {
    console.log("error===>", error)
  }
  
}

getButton.addEventListener("click", getData)
postButton.addEventListener("click", postData)