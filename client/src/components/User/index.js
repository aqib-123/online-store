import React, { Component } from 'react';
import UserLayout from '../../hoc/user';
import MyButton from '../utils/button';

class UserDashboard extends Component {
    

        componentWillReceiveProps(){
            console.log('componentWillReceiveProps');
        }
    
    componentWillUnmount(){
        console.log('unmount');
    }

    render() {
        return (
            <UserLayout>
            <div>
                
                <div className="user_nfo_panel">
                    <h1>User information</h1>
                    <div>
                        <span>{this.props.user.userData.name}</span> 
                        <span>{this.props.user.userData.lastname}</span> 
                        <span>{this.props.user.userData.email}</span> 
                 
                    </div>
                    <MyButton
                        type="default"
                        title="Edit account info"
                        linkTo="/user/user_profile"
                    />
                </div>

                <div className="user_nfo_panel">
                    <h1>History purchases</h1>
                    <div className="user_product_block_wrapper">
                            history
                    </div>            
                </div>
                
            </div>
        </UserLayout>
        );
    }
}

export default UserDashboard;
