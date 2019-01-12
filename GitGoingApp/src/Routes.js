import React from 'react'
import { Router, Scene, Drawer } from 'react-native-router-flux'
import Home from './Home'
import GitInit from './GitInit'
import GitClone from './GitClone'
import GitStatus from './GitStatus'
import GitPull from './GitPull'
import GitAdd from './GitAdd'
import GitStash from './GitStash'
import GitCommit from './GitCommit'
import GitReset from './GitReset'
import GitPush from './GitPush'
import DrawerItems from './DrawerItems'


const Routes = () => (
   <Router>
      <Scene key = "root">
      <Drawer hideNavBar ={ true } drawerPosition={'right'} contentComponent={DrawerItems}>
         <Scene key = "home" component = {Home} title = "GitGoing" initial = {true} />
         <Scene key = "gitInit" component = {GitInit} title = "Git Init"/>
         <Scene key = "gitClone" component = {GitClone} title = "Git Clone" />
         <Scene key = "gitStatus" component = {GitStatus} title = "Git Status" />
         <Scene key = "gitPull" component = {GitPull} title = "Git Pull" />  
         <Scene key = "gitAdd" component = {GitAdd} title = "Git Add" />
         <Scene key = "gitStash" component = {GitStash} title = "Git Stash" />
         <Scene key = "gitCommit" component = {GitCommit} title = "Git Commit" />
         <Scene key = "gitReset" component = {GitReset} title = "Git Reset" />
         <Scene key = "gitPush" component = {GitPush} title = "Git Push" />
      </Drawer>
      </Scene>
   </Router>
)
export default Routes