import React, { Component } from 'react'
import Alert from 'react-bootstrap/esm/Alert'
import UserService from '../services/UserService'



 class AddUserComponent extends Component {
         constructor(props) {
             super(props)
         
             this.state = { 
                  userId :'',
                  password :'',
                  email :'',
                  area : '',
                  nullCheck :false
             }
             this.myChangeHandler =this.myChangeHandler.bind(this)
             this.saveOrUpdateUser =this.saveOrUpdateUser.bind(this)
             this.cancelUser =this.cancelUser.bind(this)
            //  this.nullCheck =this.nullCheck.bind(this)
         }
         

         myChangeHandler = (e) =>{   this.setState({ [e.target.name] : e.target.value  })  }      
         cancelUser =(e) =>{   this.props.history.push('/Users') }
         saveOrUpdateUser =(e) =>{  e.preventDefault();
             
            let UserObject = this.state
            if(this.state.nullCheck){
                  Alert("Fields cannot be empty");
            }
            else{
            UserService.saveOrUpdateUser(UserObject).then(res => this.props.history.push('/Users',"SUCCESS")).catch(error => alert("error"))
            }
        
        }

        // nullCheck =(e) =>
        // {
        //     if(e.target.value === null || e.target.value === '')
        //     {
        //         this.setState({nullCheck:true})
        //     }
           

        // }


        componentDidMount()
         {

             if(this.props.match.params.id ===-1){return  }
             else{ //EditTime
                      
                    
                    UserService.getEmployeebyId(this.props.match.params.id).then( (response) =>
                    {
                        this.setState({
                            id:response.data.id,
                            userId : response.data.userId,
                            password : response.data.password,
                            email : response.data.email,
                            area :  response.data.area
                        });

                    } )

                }
        }


    render() {
        return (
            <div>
               <div className="container">

                      <div className="row">
                          <div className="card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Add User</h3> 
                             <div className="card-body">
                                 <form>
                                        <div className ="form-group">
                                          <label>UserName:</label>
                                           <input className="form-control" name="userId"  value={this.state.userId} onChange={this.myChangeHandler}/> 
                                          </div> 

                                          <div className ="form-group">
                                          <label>Password:</label>
                                           <input type="password" className="form-control" name="password"  value={this.state.password} onChange={this.myChangeHandler} onBlur={this.nullCheck}/> 
                                          </div> 

                                          <div className ="form-group">
                                          <label>Area:</label>
                                           <input className="form-control" name="area"  value={this.state.area} onChange={this.myChangeHandler} onBlur={this.nullCheck}/> 
                                          </div> 

                                          <div className ="form-group">
                                          <label>Email:</label>
                                           <input className="form-control" name="email"  value={this.state.email} onChange={this.myChangeHandler} onBlur={this.nullCheck}/> 
                                          </div> 

                                         <button className="btn btn-success" onClick={this.saveOrUpdateUser}>SUBMIT</button>
                                         <button className="btn btn-danger" onClick={this.cancelUser} style={{marginLeft:"10px"}}>CANCEL</button>

                                 </form>
                             </div>
                             

                          </div>
                      </div>


               </div>
            </div>
        )
    }
}

export default AddUserComponent
