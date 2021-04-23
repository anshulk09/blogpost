import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Users extends Component{
    constructor(props){
        super(props)
        this.state = {
            usersData : {},
            searchItem : ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            (data)=>{
                this.setState({usersData : data.data})
            }
        )
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({searchItem : e.target.value},
            ()=>{console.log(this.state.searchItem)}
            )
    }

    render(){
        return (
            <div>
            <div className='divSearchInput'>
                <label>Search</label>
                <input type="text" value={this.state.searchItem} placeholder='Search' onChange={this.handleChange}></input>
            </div>
            <div className='divTable'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.state.usersData).length ? this.state.usersData.map((item, key)=>{
                            return (
                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td><Link to={`/user/${item.id}`}>{item.name}</Link></td>
                                </tr>
                            )
                        }) : null}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default Users;