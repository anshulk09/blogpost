import React, {Component} from 'react';
import axios from 'axios';

class Blogpost extends Component{
    constructor(props){
        super(props)
        this.state={
            postsData : {}
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts?userId='+this.props.match.params.id)
            .then((data)=>{
                this.setState({postsData : data.data})
            })
    }

    render(){
        return (
            <div className='divPostTable'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.state.postsData).length ? this.state.postsData.map((item, key)=>{
                            return (
                                <tr key={key}>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        }) : null}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Blogpost;