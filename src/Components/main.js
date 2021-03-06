import React, {Component, Fragment} from "react";
// import ReactDOM from 'react-dom';
// import { Link } from "react-router-dom";
import {saveData} from "../Services/api-service";
import {connect} from "react-redux";
import {addNewTip} from "../Actions/TodoListActions"

class Main extends Component {

    state = {
        "Tip": ""
    }
    getTip = (event) => {
        this.setState({
            Tip: event.target.value
        })
    }
    addNewTip = (event) => {
        event.preventDefault();
        const { Tip } = this.state;
        // let Created = Date.now();
        // const Id = uuidv4();
        const newTip = { Tip };
        const { List } = this.props;
        addNewTip(List);
        List.push (newTip);
        saveData(List);
        this.setState({
            isRedirect: true
        })

    }

render(){
    return(
    <Fragment>
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-12">
                         <div className="card px-3">
                            <div className="card-body">
                                <h4 className="card-title">React Todo list</h4>
                                    <div className="add-items d-flex"> <input type="text" className="form-control todo-list-input" onSubmit={this.addNewTip} placeholder="What do you need to do today?"></input> <button className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> </div>
                                        <div className="list-wrapper">
                                            <ul className="d-flex flex-column-reverse todo-list">
                                                <li>
                                                    <div className="form-check"> <label className="form-check-label"> <input class="checkbox" type="checkbox"></input> For what reason would it be advisable. <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                                </li>
                                                <li className="completed">
                                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" checked=""></input> For what reason would it be advisable for me to think. <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                                </li>
                                                <li>
                                                    <div className="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"></input> it be advisable for me to think about business content? <i className="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                                </li>
                                                <li>
                                                    <div className="form-check"> <label class="form-check-label"> <input className="checkbox" type="checkbox"></input> Print Statements all <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                                </li>
                                                <li className="completed">
                                                <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" checked=""></input> Call Rampbo <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                                </li>
                                                <li>
                                                <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox"></input> Print bills <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
    )
}
}

const mapStateToProps = ({ TodoListReducer }) => {
    const { List } = TodoListReducer;
    return { List }
}
const mapDispatchToProps = {
    addNewTip
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
// export default connect() (Main);
