import * as React from "react";
import { QuestionList, QuestionShow, QuestionCreate, QuestionEdit } from "./team_questions";
import { ChallengesList, ChallengesShow,ChallengesCreate,ChallengesEdit } from "./challenges";
import { SettingsList, SettingsShow,SettingsCreate,SettingsEdit } from "./settings";
// import { CommentList, CommentShow, CommentCreate, CommentEdit } from "./comments";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  FirebaseRealTimeSaga
} from "react-admin-firebase";
// import CommentIcon from '@material-ui/icons/Comment';
import CustomLoginPage from './CustomLoginPage';

import { firebaseConfig as config } from './FIREBASE_CONFIG';

const options = {
  logging: true,
  // rootRef: 'team_questions',
}
const dataProvider = FirebaseDataProvider(config, options);
// console.log("----------->",dataProvider);
const authProvider = FirebaseAuthProvider(config, options);
// const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={CustomLoginPage} 
        dataProvider= {dataProvider}
        authProvider={authProvider}
        // customSagas={[firebaseRealtime]}
        >
        <Resource
          name="team_questions"
          list={QuestionList}
          show={QuestionShow}
          create={QuestionCreate}
          edit={QuestionEdit}
        />
        <Resource
          name="challenges"
          list={ChallengesList}
          show={ChallengesShow}
          create={ChallengesCreate}
          edit={ChallengesEdit}
        />
        <Resource
          name="settings"
          list={SettingsList}
          show={SettingsShow}
          create={SettingsCreate}
          edit={SettingsEdit}
        />
      </Admin>
    );
  }
}

export default App;
