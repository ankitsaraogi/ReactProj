import React from 'react';
import Lists from './ListContainer';
import { connect } from 'react-redux';
//import SubmitButton from './SubmitButtonContainer';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';


const App = ({ noOfListItems, totalTimeSpent = 0, jobs }) => {
    return (
        <div>
            <PageTitle title="Find a Job" />
            <Lists items={jobs.availableIds} />
            <Footer data={totalTimeSpent} />
            { /*<SubmitButton data={jobs} /> */ }
        </div>
    )
}

const getTotalTimeSpent = (jobs, vehicles, cities) => {
    const ids = Object.keys(jobs);
    let time = 0;
    ids.forEach((id) => {
        if (jobs[id]["vehicle"])
            time += cities[jobs[id]["city"]]["distance"] / vehicles[jobs[id]["vehicle"]]["speed"]
    })  
    return time;
}

const mapStateToProps = ({ jobs, vehicles, cities }) => {
    return (
        {
            noOfListItems : jobs.noOfListItems ? jobs.noOfListItems : 0,
            totalTimeSpent: getTotalTimeSpent(jobs.byId, vehicles.byName, cities.byName),
            jobs
        }
    )
}

export default connect(
    mapStateToProps
  )(App);