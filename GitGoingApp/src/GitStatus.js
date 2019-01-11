import React from 'react'
import { TouchableOpacity, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const GitStatus = () => {
   const goToReset = () => {
      Actions.gitReset()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} >
         <Text style= {{fontSize: 30}}>Git Status</Text>
         <Text>This shows a list of all new or modified files. If you need to make a change there are options.</Text>
         <Button 
         onPress = {goToReset}
         title= "Git Reset"
         />
      </TouchableOpacity>
   )
}
export default GitStatus