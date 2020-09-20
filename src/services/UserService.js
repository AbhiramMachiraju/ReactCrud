import axios from 'axios'

const BASE_URL ="http://localhost:5500/DearFriendRest";
const headers = {  
                        "Content-type": "application/json",
                        'Access-Control-Allow-Credentials' : true,
                        'Access-Control-Allow-Headers':'*/*',
                        'Access-Control-Allow-Origin' : '*', 
                        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
};
 
class UserService {


       getAllUser()
      {
          return axios.get(BASE_URL+"/getAllUser")

      }

      saveOrUpdateUser(jsonUserObj)
      {
            
          return axios.post(BASE_URL+"/createUserss",jsonUserObj)

      }

    //   forUpdate ucan use PUT

      getEmployeebyId(id)
      { 
        return axios.get(BASE_URL+"/getUserById/"+id)
      }
      
      getDeletebyId(id)
      {
        return axios.delete(BASE_URL+"/deleteUserById/"+id)
      }

     
    
    }



export default new UserService()