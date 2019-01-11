import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home'
import GitInit from './GitInit'
import GitAdd from './GitAdd'
import GitCommit from './GitCommit'
import GitStatus from './GitStatus'
import GitReset from './GitReset'
import GitStash from './GitStash'
import GitPush from './GitPush'
import GitClone from './GitClone'
import GitPull from './GitPull'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "GitGoing" initial = {true} />
         <Scene key = "gitInit" component = {GitInit} title = "GitInit" />
         <Scene key = "gitAdd" component = {GitAdd} title = "GitAdd" />
         <Scene key = "gitCommit" component = {GitCommit} title = "GitCommit" />
         <Scene key = "gitStatus" component = {GitStatus} title = "GitStatus" />
         <Scene key = "gitReset" component = {GitReset} title = "GitReset" />
         <Scene key = "gitStash" component = {GitStash} title = "GitStash" />
         <Scene key = "gitPush" component = {GitPush} title = "GitPush" />
         <Scene key = "gitClone" component = {GitClone} title = "GitClone" />
         <Scene key = "gitPull" component = {GitPull} title = "GitPull" />
      </Scene>
   </Router>
)
export default Routes