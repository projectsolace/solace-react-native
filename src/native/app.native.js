import React from "react";
import { Platform } from 'react-native';
import {Scene, Router} from "react-native-router-flux";
import Login from './screens/Login.native';
import Signup from './screens/Signup.native';
import Homepage from './screens/Homepage.native';
import QuestionsModal from './screens/QuestionsModal.native';
import CompleteProfile from './screens/CompleteProfile.native';
import { Provider } from 'react-redux';
import store from './store.native';

// Charts data
import Charts from './screens/chartScreens/Charts.native';
import IntroToCharts from './screens/chartScreens/IntroToCharts.native';
import LatestDataChart from './screens/chartScreens/LatestDataChart.native';
import WeeklyAverageChart from './screens/chartScreens/WeeklyAverageChart.native';
import MonthlyAverageChart from './screens/chartScreens/MonthlyAverageChart.native';
import AllTimeAverageChart from './screens/chartScreens/AllTimeAverageChart.native';
import WeeklyTotalChart from './screens/chartScreens/WeeklyTotalChart.native';
import MonthlyTotalChart from './screens/chartScreens/MonthlyTotalChart.native';
import AllTimeTotalChart from './screens/chartScreens/AllTimeTotalChart.native';
import customDimensions from './customDimensions';

export default class App extends React.Component {

  render () {
    return (
      <Provider store={ store }>
        <Router>
          <Scene key="root">
            <Scene key="entryPoint" component={Login} hideNavBar />
            <Scene key="signup" component={Signup} getPanHandlers={customDimensions} title="Signup"/>
            <Scene key="completeProfile" component={CompleteProfile} initial title="CompleteProfile" hideNavBar />
            <Scene key="homepage" component={Homepage} title="Homepage" panHandlers={null} hideNavBar/>
            <Scene key="charts" component={Charts} title="Charts" hideNavBar  />
            <Scene key="intro" component={IntroToCharts} title="IntroToCharts" direction="vertical" hideNavBar />
            <Scene key="latestData" component={LatestDataChart} title="LatestDataChart" direction="vertical" hideNavBar />
            <Scene key="weeklyAverage" component={WeeklyAverageChart} title="WeeklyAverageChart" direction="vertical" hideNavBar />
            <Scene key="monthlyAverage" component={MonthlyAverageChart} title="MonthlyAverageChart" direction="vertical" hideNavBar />
            <Scene key="allTimeAverage" component={AllTimeAverageChart} title="AllTimeAverageChart" direction="vertical" hideNavBar />
            <Scene key="weeklyTotal" component={WeeklyTotalChart} title="WeeklyTotalChart" direction="vertical" hideNavBar />
            <Scene key="monthlyTotal" component={MonthlyTotalChart} title="MonthlyTotalChart" direction="vertical" hideNavBar />
            <Scene key="allTimeTotal" component={AllTimeTotalChart} title="AllTimeTotalChart" direction="vertical" hideNavBar />
            <Scene key="questionModal" component={QuestionsModal} title="Modal" direction = "vertical" hideNavBar />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
