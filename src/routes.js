
import React from 'react';
import { Route, Link , IndexRoute} from 'react-router';

import Main from './components/Main';
import YoutubeWidget from './components/widgets/youtube/YoutubeWidget';
import CalenderWidget from './components/widgets/calender/calender';
// import TvWidget from './components/widgets/tv/tv';
import TvWidget from './components/widgets/tv/tv';
// import singleShow from './components/widgets/tv/singleShow';


export default (
  <Route path='/' component={Main}>
    <Route path='/test' component={YoutubeWidget}/>
    <Route path='/cal' component={CalenderWidget}/>
    <Route path='/tv' component={TvWidget}/>
  </Route>
)
