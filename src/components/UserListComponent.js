import React, { Component }from 'react'
import UserService from '../services/UserService'
import Alert from 'react-bootstrap/Alert'
import { Redirect } from 'react-router-dom'
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader'
import { useLocation } from "react-router-dom";


 class UserListComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoading: true,
            allUsers:[],
            message: null
             
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.refreshRetriveData =this.refreshRetriveData.bind(this);
    } 

    componentDidMount()
    {
        this.refreshRetriveData()     
        
         if(this.props.location.state !== '')
         {
             this.setState({message:'Successfully Created'})
         }
    }

      
    addUser()
    {
        this.props.history.push('/addOrUpdate_User/:id')
    }

    deleteUser(id)
    {
        
  
           UserService.getDeletebyId(id).then( (response) => {
            this.setState({ message: `Deleted data with ID: ${id} Successful` })
            this.refreshRetriveData()
         })
         .catch(error =>{
                      console.log(error)
                                

         })
    }

    editUser(id)
    {
        this.props.history.push(`/addOrUpdate_User/${id}`);
    }


    refreshRetriveData() {
        UserService.getAllUser().then( (response) =>
        {
            this.setState({allUsers : response.data,isLoading: false})

        } )          
    }


        render() {
                
            return (
                <div>
                    <h2 className="text-center">Users-List</h2><div>

                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                   

                        {this.state.isLoading ? (<div id="loadingDiv"> 
                               
                                            <LoadingOverlay
                                                active={this.state.isLoading}
                                                spinner={<BounceLoader />}
                                                >
                                               <h2>Please Wait...........</h2>
                                            </LoadingOverlay>
            </div>) : ("") }        
                         

                        
                      </div>   
                    <div className="row">
                           <button  style={{margin:"15px"}}className="btn btn-primary" onClick={this.addUser}>Add User</button>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>UserName</th>
                                    <th>Area</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {
                                        this.state.allUsers.map(
                                           user =>
                                        <tr id ={user.id}>
                                            <td>{user.userId}</td>
                                            <td>{user.area}</td>
                                            <td>{user.email}</td>
                                            <td>

                                                <button onClick ={() => this.editUser(user.id)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft:"10px"}} onClick ={() => this.deleteUser(user.id)} className="btn btn-danger">Delete</button>

                                            </td>
                                        </tr>
    
    
    
                                           
                                        )
    
                                 }
                            </tbody>
    
    
    
                        </table>
    
    
    
                    </div>
                    
                </div>
            )
        }
    }

export default UserListComponent
