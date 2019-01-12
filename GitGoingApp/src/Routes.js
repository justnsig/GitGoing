import React from 'react'
import { Router, Scene, Drawer } from 'react-native-router-flux'
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
import DrawerItems from './DrawerItems'


const Routes = () => (
   <Router>
      <Scene key = "root">
      <Drawer drawerPosition={'right'} contentComponent={DrawerItems}>
         <Scene key = "home" component = {Home} title = "GitGoing" initial = {true} />
         <Scene key = "gitInit" component = {GitInit} title = "Git Init"/>
         <Scene key = "gitAdd" component = {GitAdd} title = "Git Add" />
         <Scene key = "gitCommit" component = {GitCommit} title = "Git Commit" />
         <Scene key = "gitStatus" component = {GitStatus} title = "Git Status" />
         <Scene key = "gitReset" component = {GitReset} title = "Git Reset" />
         <Scene key = "gitStash" component = {GitStash} title = "Git Stash" />
         <Scene key = "gitPush" component = {GitPush} title = "Git Push" />
         <Scene key = "gitClone" component = {GitClone} title = "Git Clone" />
         <Scene key = "gitPull" component = {GitPull} title = "Git Pull" />  
      </Drawer>
      </Scene>
   </Router>
)
export default Routes