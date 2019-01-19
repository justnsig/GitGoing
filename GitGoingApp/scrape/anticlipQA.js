//Handles the Q & A that anticlippy will be subjected to in the final route
import fire from '../db/fire';

export const askClip = (question, ignore) => {

  state = ({
    response: ''
  })
  
    let clean = question.replace(/[^\w\s]/gi, '');
    let qArray = clean.toLowerCase().split(' ');
    qArray.splice(qArray.indexOf('a'), 1);
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
            switch(qArray[i+1]){
                case "repository":
                case "repo":
                case "folder":
                    return {...state, response: "Create New Repo: git init" };
                case "branch":
                case "version":
                    return {...state, response: "Create New Branch: git checkout -b 'name of branch'" };
                default:
                    break;
            }
            //get data for match
            
          case "change":
          case "switch":
          case "alternate":
            return { ...state, response: "Change Branch: : git checkout 'name of branch'" };
            //get data for match
          case "remove":
          case "delete":
          case "destroy":
            switch(qArray[i+1]){
                case "repository":
                case "repo":
                case "folder":
                    return { ...state, response: "Delete Repo: git rm -r 'folder-name'" };
                case "branch":
                case "version":
                    return {...state, response: "Delete Branch: git branch -d 'branch name'" };
                default:
                    break;
            }
            //get data for match
            //break;
          case "reset":
          case "back":
          case "previous":
            //get data for match
            return { ...state, response: "Reset to before most recent add or commit: git reset" };
          case "add":
          case "commit":
          case "push":
          case "upload":
            //get data for match
            return { ...state, response: "Add, Commit, Push: git add, git commit -m 'message', git push" };
          case "download":
          case "pull":
          case "grab":
            //get data for match
            return { ...state, response: "Pull from Repo: git pull" };
          default:
            break;
            //default
        }
      }
    }
    return {...state, response: "Looks like we could not find what you were looking for. Please try again."};
  }
