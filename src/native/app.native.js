import React from "react";
import {Scene, Router} from "react-native-router-flux";
import Login from './screens/Login.native';
import Signup from './screens/Signup.native';
import Homepage from './screens/Homepage.native';
import QuestionsModal from './screens/QuestionsModal.native';
import { Provider } from 'react-redux';
import store from './store.native';

// Charts data
import Charts from './screens/chartScreens/Charts.native';
import LatestDataChart from './screens/chartScreens/LatestDataChart.native';
import WeeklyAverageChart from './screens/chartScreens/WeeklyAverageChart.native';
import MonthlyAverageChart from './screens/chartScreens/MonthlyAverageChart.native';
import AllTimeAverageChart from './screens/chartScreens/AllTimeAverageChart.native';
import WeeklyTotalChart from './screens/chartScreens/WeeklyTotalChart.native';
import MonthlyTotalChart from './screens/chartScreens/MonthlyTotalChart.native';
import AllTimeTotalChart from './screens/chartScreens/AllTimeTotalChart.native';

export default class App extends React.Component {
  render () {
    return (
      <Provider store={ store }>
        <Router>
          <Scene key="root">
            <Scene key="entryPoint" component={Login} hideNavBar initial />
            <Scene key="signup" component={Signup} title="Signup"/>
            <Scene key="homepage" component={Homepage} title="Homepage"/>
            <Scene key="charts" component={Charts} hideNavBar title="Charts" />
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
