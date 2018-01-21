import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import Dropdown from '../components/Dropdown';
import RadioGroup from '../components/RadioGroup';
import * as Actions from '../actions/index';

class ListItemContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showVehicles: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRadioSelection = this.handleRadioSelection.bind(this);
    }

    handleChange(event) {
        const target = event.target,
              value = target.value;

        this.setState({showVehicles: true}); 
        this.props.actions.citySelected(value, this.props.id)     
    }

    handleRadioSelection(event) {
        const target = event.target,
              value = target.value;

        this.props.actions.vehicleSelected(value, this.props.id)
    }

    render() {
        return(
            <div>
                <Dropdown 
                    options={this.props.selectedCity ? [...[this.props.selectedCity], ...this.props.options] : this.props.options} 
                    id={this.props.id}
                    onChangeHadler={this.handleChange}
                    value={this.props.selectedCity} 
                />
                <RadioGroup 
                    group={this.props.groups}
                    groupsByName={this.props.groupsByName} 
                    show={this.state.showVehicles}
                    id={this.props.id}
                    onChangeHadler={this.handleRadioSelection}
                    selectedVehicle={this.props.selectedVehicle}
                />
            </div>
        )
    }
}

const getVehiclesForSelectedCity = (distance, availableVehicles, vehiclesById) => {
    const keys = Object.keys(vehiclesById);
    const newObj = {};
    keys.forEach((vehicle) => {
        newObj[vehicle] = {...vehiclesById[vehicle], ...{"total_no" : distance > vehiclesById[vehicle]["max_distance"] ? 0 : vehiclesById[vehicle]["total_no"]}}
    });
    return newObj;
}

const mapStateToProps = ({ cities, vehicles, jobs }, otherProps) => {
    const selectedCity = jobs.byId[otherProps["id"]] ? jobs.byId[otherProps["id"]]["city"] : undefined
    const vehiclesForSelectedCity = selectedCity ? getVehiclesForSelectedCity(cities.byName[selectedCity]["distance"], vehicles.availableVehicles, vehicles.byName) : undefined;
    return ({
        options: cities.availableCities,
        groups: vehicles.availableVehicles,
        groupsByName: vehiclesForSelectedCity ? vehiclesForSelectedCity : vehicles.byName,
        selectedCity: jobs.byId[otherProps["id"]] ? jobs.byId[otherProps["id"]]["city"] : undefined,
        selectedVehicle: jobs.byId[otherProps["id"]] ? jobs.byId[otherProps["id"]]["vehicle"] : undefined,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        actions: bindActionCreators(Actions, dispatch)
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListItemContainer)