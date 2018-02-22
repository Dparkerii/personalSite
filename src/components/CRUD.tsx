import * as React from 'react';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';
import Read from './Read';

export interface CRUDProps {
    action: string;
}

export default class CRUD extends React.Component<CRUDProps, {}> {
    constructor(props: CRUDProps) {
        super(props);
    }
    render() {
        return(
            <div>
                {this.handler(this.props.action)}
            </div>
        );
    }
    public handler(action: string) {
        switch (action) {
            case 'Delete':
                return(<Delete/>);
            case 'Update':
                return(<Update/>);
            case 'Create':
                return(<Create/>);
            case 'Read':
                return(<Read/>);
            default:
                return(<Update/>);
                
        }
    }

    // private updatePost() {
    //     fetch('http://localhost:8000/api/v1/posts', {
    //         method: 'PUT',
    //         headers: {},
    //         body: {
                
    //         }
    //     })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(body => {
    //         return body;
    //     });
    // }

    // private readPost() {
    //     let contents = fetch('http://localhost:8000/api/v1/posts', {
    //         method: 'GET',
    //         headers: {},
    //         body: {

    //         }
    //     })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(body => {
    //         console.log(body);
    //         return body;
    //     });
    //     return contents;
    // }

}
