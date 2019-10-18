import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (e)=>{
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post)
    }
    
    render() {
        return (
            <div>
                <h1>Create new post</h1>
                <form>
                    <label>Tilte</label>
                    <br/>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <br/>
                    <label>Body</label>
                    <br/>
                    <textarea col="4" name="body" value={this.state.body} onChange={this.handleChange}></textarea>
                    <br/>
                    <button onClick={this.handleClick}>Create</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);