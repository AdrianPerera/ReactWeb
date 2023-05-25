import {Component} from "react";
import {connect} from "react-redux";
import {updateUser} from "./actions/user-actions";
import {bindActionCreators} from "redux";

class App extends Component {
    constructor(props) {
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);
    }


    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value);
    }


    render() {
        // console.log(this.props)
        return (
            <div>
                <h2>something</h2>
                <div>
                    <p>Name</p>
                    <input onChange={this.onUpdateUser}/>
                    <p>
                        {this.props.userPlus}
                    </p>
                </div>
                <div>
                    <button onClick={() => {
                    }}>updateProduct
                    </button>

                    <div>
                    </div>
                </div>

            </div>

        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        user: state.user,
        userPlus: `${state.user} ${ownProps.aRandomProp}`
    }
};

const mapActionsToProps = (dispatch, props) => {
    console.log("mapActionsToProps" ,props)
    return bindActionCreators({
        onUpdateUser: updateUser
    }, dispatch);
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) =>{
    console.log(propsFromState, propsFromDispatch, ownProps);
    return {}
}

export default connect(mapStateToProps, mapActionsToProps,mergeProps)(App);