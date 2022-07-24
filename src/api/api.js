import axios from "axios";
import { ApiConfig } from "../config/ApiConfig";


export function api(path, method, body){

    const fullPath = ApiConfig.baseUrl + path

  return new Promise((resolve) => {
      
      const requestData = {
          method: method,
          url: fullPath,
          data: JSON.stringify(body),
        //   headers: {
        //       'Content-Type': 'application/json',
        //       'Authorization': getToken(role)            }

          headers: {
            'Content-Type': 'application/json'
          }
      };

      axios(requestData)
      .then(res => responseHandler(res, resolve))
      .catch(async err => {
 
          const response = {
              status: 'error',
              data: err
          };

          return resolve(response);
      });
  });
  
}

export function apiToken(path, method, body){

    const fullPath = ApiConfig.baseUrl + path

    return new Promise((resolve) => {
      
      const requestData = {
          method: method,
          url: fullPath,
          data: JSON.stringify(body),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': getToken()            
          }
      };

      axios(requestData)
      .then(res => responseHandler(res, resolve))
      .catch(async err => {
 
          const response = {
              status: 'error',
              data: err
          };

          return resolve(response);
      });
  });
  
}

export function login({email, password}) {

    return new Promise((resolve) => {
        
      const params = new URLSearchParams()
      params.append('username', email);
      params.append('password', password);
  
      const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        
        axios.post("http://localhost:8080/api/login", params, config)
          .then((res) => {
  
            if(res.status < 200 || res.status >= 300){
  
              const response = {
                  status: 'error',
                  data: res.data
              };
      console.log("Odgovor")
              return resolve(response);
          }
          
          if(res.data.statusCode < 0){
              const response = {
                  status: 'ok',
                  data: res.data
              };
      
              return resolve(response);
          }
      
          const response = {
              status: 'ok',
              data: res.data
          };

          localStorage.setItem('access_token', res.data.access_token);
          localStorage.setItem('refresh_token', res.data.refresh_token);


          return resolve(response);
  
          })
    });
  }

  export function apiFile(path, name, file, role) {

    return new Promise((resolve) => {
        const formData = new FormData();
        formData.append(name, file);

        const requestData = {
            method: 'post',
            url: path,
            baseURL: ApiConfig.API_URL,
            data: formData,
            // headers: {
            //     'Content-Type': 'multipart/form-data',
            //     'Authorization': getToken(role),
            // },
        };

        axios(requestData)
        .then(res => responseHandler(res, resolve))
        .catch(async err => {
            if (err.response.status === 401) {
                const newToken = await refreshToken(role);
    
                if (!newToken) {
                    const response = {
                        status: 'login',
                        data: null,
                    };
            
                    return resolve(response);
                }
    
                saveToken(newToken, role);
    
                requestData.headers['Authorization'] = getToken(role);
    
                return await repeatRequest(requestData, resolve);
            }

            const response = {
                status: 'error',
                data: err
            };

            resolve(response);
        });
    });
}




async function responseHandler(res, resolve){

    if(res.status < 200 || res.status >= 300){

        const response = {
            status: 'error',
            data: res.data
        };

        return resolve(response);
    }
    
    if(res.data.statusCode < 0){
        const response = {
            status: 'ok',
            data: res.data
        };

        return resolve(response);
    }

    const response = {
        status: 'ok',
        data: res.data
    };

    return resolve(response)
}



async function repeatRequest(requestData, resolve){

    axios(requestData).then(res =>{
        if(res.status === 401){
            const response = {
                status: 'login',
                data: null
            }
            return resolve(response);
        }

        const response = {
            status: 'ok',
            data: res
        }

        return resolve(response);
    }).catch(err => {
        const response = {
            status: 'error',
            data: err
        }
        return resolve(response);
    })
}

function refreshToken(token) {
  return token;
}

function saveToken(token){

}

function getToken(){
    console.log(localStorage.getItem("access_token"));
  return "Bearer " + localStorage.getItem("access_token");
}