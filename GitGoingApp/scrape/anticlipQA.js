//Handles the Q & A that anticlippy will be subjected to in the final route
import fire from '../db/fire';

createSwitch = (array, count) => {
  console.log(`array: ${array}  Count: ${count}`)
  console.log(array)
  switch(array[(count+1)]){
    case "repository":
    case "repo":
    case "folder":
        return "Create New Repo: git init" ;
    case "branch":
    case "version":
        return "Create New Branch: git checkout -b 'name of branch'" ;
    default:
        return 'create mistake';
};
}

destroySwitch = (array, count) => {
  console.log(`array: ${array}  Count: ${count}`)
  switch(array[(count+1)]){
    case "repository":
    case "repo":
    case "folder":
        return "Delete Repo: git rm -r 'folder-name'" ;
    case "branch":
    case "version":
        return "Delete Branch: git branch -d 'branch name'" ;
    default:
        return "delete mistake";
}
};

export const askClip = (question, ignore) => {
    //question = question.concat("extra")
    let clean = question.replace(/[^\w\s]/gi, '');
    let qArray = clean.toLowerCase().split(' ');
    for(let w=0; w<qArray.length; w++){
      if(qArray[w] === 'a'){
        qArray.splice(qArray.indexOf('a'), 1);
      }
    };
    console.log(qArray);
    for(i=0; i<qArray.length; i++){
      if(qArray[i] === ignore){
        //Move through to switch if word isn't on ignore list
        //If it is on list then skip index and go to next word
        break;
      }else{
        switch(qArray[i]){
          case "new":
          case "make":
          case "create":
            if(qArray[i+1] === 'new'){
              i++
            }
              switch(qArray[(i+1)]){
                case "repository":
                case "repo":
                case "folder":
                    return "Create New Repo: git init" ;
                case "branch":
                case "version":
                    return "Create New Branch: git checkout -b 'name of branch'" ;
                default:
                    return 'Not understanding, make sure your grammer is correct and try again...';
          };
            //get data for match
          case "change":
          case "switch":
          case "alternate":
            return "Change Branch: git checkout 'name of branch'" ;
            //get data for match
          case "remove":
          case "delete":
          case "destroy":
          if(qArray[i+1] === 'new'){
            i++
          }
            switch(qArray[(i+1)]){
              case "repository":
              case "repo":
              case "folder":
                  return "Delete Repo: git rm -r 'folder-name'" ;
              case "branch":
              case "version":
                  return "Delete Branch: git branch -d 'branch name'" ;
              default:
                  return "Not catching your drift buddy, please try again...";
          }
            //get data for match
            //break;
          case "reset":
          case "back":
          case "previous":
            //get data for match
            return "Reset to before most recent add or commit: git reset" ;
          case "add":
          case "commit":
          case "push":
          case "upload":
            //get data for match
            return "Add, Commit, Push: git add, git commit -m 'message', git push" ;
          case "download":
          case "pull":
          case "grab":
            //get data for match
            return "Pull from Repo: git pull" ;
          default:
            break;
            //default
        }
      }
    }
    return "Looks like we could not find what you were looking for. Please try again.";
  }
