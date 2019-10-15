import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import ProjectByCategory from './ProjectByCategory';

class Category extends Component {
    constructor(props) {
        super(props);
            this.state = {  
                redirect: false
            };
            // this.handleClick = this.handleClick.bind(this);
    }

    columNames = [
        {
            id: 1,
            Name:'Metal',
        },
        {           
            id: 2,
            Name:'Wood',
        },
        {
            id: 3,
            Name:'Glass',
        },
        {
            id: 4,
            Name:'Plastic',
         },
         {
            id: 5,
            Name:'Carton',
         },
         {
            id: 6,
            Name:'Paper',
         },
         {
            id: 7,
            Name:'Concret',
        },
         {
             id: 8,
             Name:'Special Material',
         },
         {
             id: 9,
             Name:'Factory Material',
         },
         {
             id: 10,
             Name:'Carbon'
         }
    ];
    
    handleClick(index) {
    }

  render() {
    
    const projects = this.props.projects || [];

    return (
        <div>
            <ul>
                {this.columNames.map( item => {
                return <li key={item.id}>
                            <Link to={{ 
                                pathname: '/categories/' + item.id,
                                id: item.id
                            }}>
                                {item.Name}
                            </Link>
                        </li>
                })}
            </ul>
            {/* const url = this.props.match.url; */}
            <Route path={`/categories/:id`} render={
                (props) => <ProjectByCategory  {...projects.filter(project => project.userId === props.location.id)}/>
            }/>
        </div>
    );
  }
}

export default Category;