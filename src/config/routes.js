/* eslint-disable react/jsx-key */
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

// common page
const Map = lazy(() => import('../pages/Map'))

// Field officer pages
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Projects = lazy(() => import('../pages/Projects'))
const Agents = lazy(() => import('../pages/Agents'))
const Incidences = lazy(() => import('../pages/Incidences'))
const MyAccount = lazy(() => import ('../pages/MyAccount'))
const SignIn = lazy(() => import('../pages/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp'))
const AgentProfile = lazy(() => import('../pages/Agents/AgentProfile'))

const routes = [
  <Route path="/signin" exact component={SignIn} />,
  <Route path="/dashboard" exact component={Dashboard} />,
  <Route path="/my_account" exact component={MyAccount} />,
  <Route path="/map" exact component={Map} />,
  <Route path="/projects" exact component={Projects} />,
  <Route path="/agents" exact component={Agents} />,
  <Route path="/agents/me" exact component={AgentProfile} />,
  <Route path="/incidences" exact component={Incidences} />,
  <Route
      path="/"
      exact
      component={SignIn}
    />,
  <Route
    path="/signup"
    exact
    component={SignUp}
  />,
































  



  // <Route path="/about" exact component={About} />,
  // <AuthorizedRoute path="/dashboard" exact component={Dashboard} />,
  // <AuthorizedRoute path="/firebase_paths" exact component={FirebasePaths} />,
  // <AuthorizedRoute path="/firebase_lists" exact component={FirebaseLists} />,
  // <AuthorizedRoute path="/firebase_docs" exact component={FirebaseDocs} />,
  // <AuthorizedRoute path="/firebase_cols" exact component={FirebaseCols} />,
  // <AuthorizedRoute path="/admin" exact component={Admin} />,
  // <AuthorizedRoute path="/companies" exact component={Companies} />,
  // <AuthorizedRoute path="/companies/:uid" exact component={Company} />,
  // <AuthorizedRoute path="/create_company" exact component={Company} />,
  // <AuthorizedRoute path="/tasks" exact component={Tasks} />,
  // <AuthorizedRoute path="/tasks/:uid" exact component={Task} />,
  // <AuthorizedRoute path="/create_task" exact component={Task} />,
  // <AuthorizedRoute path="/posts" exact component={Posts} />,
  // <AuthorizedRoute path="/create_post" exact component={Post} />,
  // <AuthorizedRoute
  //   path="/firebase_messaging"
  //   exact
  //   component={FirebaseMessaging}
  // />,
  // <AuthorizedRoute
  //   path="/firebase_storage"
  //   exact
  //   component={FirebaseStorage}
  // />,
]

export default routes
