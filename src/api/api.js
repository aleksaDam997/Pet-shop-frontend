import axios from "axios";
import { ApiConfig } from "../config/ApiConfig";


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
  
            console.log(res);
            console.log(res.data);
  
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

          return resolve(response);
  
          })
          .catch((err) => {
            console.log(err);
          })
    });
  }