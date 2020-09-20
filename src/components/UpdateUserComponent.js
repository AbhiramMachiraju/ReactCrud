import React, { Component } from 'react'
import UserService from '../services/UserService'

 class UpdateUserComponent extends Component {
         constructor(props) {
             super(props)
         
             this.state = {
                  id: this.props.match.params.id,
                  userId :'',
                  password :'',
                  email :'',
                  area : ''
             }
             this.myChangeHandler =this.myChangeHandler.bind(this)
             this.UpdateUser =this.UpdateUser.bind(this)
             this.cancelUser =this.cancelUser.bind(this)
         }


         componentDidMount()
         {
            UserService.getEmployeebyId(this.state.id).then( (response) =>
            {
                this.setState({

                    userId : response.data.userId,
                    password : response.data.password,
                    email : response.data.email,
                    area :  response.data.area
                });

            } )

         }
         

         myChangeHandler = (e) =>{   this.setState({ [e.target.name] : e.target.value  })  }      
         cancelUser =(e) =>{   this.props.history.push('/Users') }
         UpdateUser =(e) =>{  e.preventDefault();
             
            let UserObject = this.state
            UserService.saveOrUpdateUser(UserObject).then(res => this.props.history.push('/Users'))
        
        }


    render() {
        return (
            <div>
               <div className="container">

                      <div className="row">
                          <div className="card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Update User</h3>
                             <div className="card-body">
                                 <form>
                                        <div className ="form-group">
                                          <label>UserName:</label>
                                           <input className="form-control" name="userId"  value={this.state.userId} onChange={this.myChangeHandler}/> 
                                          </div> 

                                          <div className ="form-group">
                                          <label>Password:</label>
                                           <input type="password" className="form-control" name="password"  value={this.state.password} onChange={this.myChangeHandler}/> 
                                          </div> 

                                          <div className ="form-group">
                                          <label>Area:</label>
                                           <input className="form-control" name="area"  value={this.state.area} onChange={this.myChangeHandler}/> 
                                          </div> 

                                          <div className ="form-group">
                                          <label>Email:</label>
                                           <input className="form-control" name="email"  value={this.state.email} onChange={this.myChangeHandler}/> 
                                          </div> 

                                         <button className="btn btn-success" onClick={this.UpdateUser}>SUBMIT</button>
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

export default UpdateUserComponent
