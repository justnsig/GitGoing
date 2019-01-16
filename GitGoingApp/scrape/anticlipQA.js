//Handles the Q & A that anticlippy will be subjected to in the final route
import fire from '../db/fire';

export const askClip = (question, ignore) => {
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
                    return "repo";
                case "branch":
                case "version":
                    return "branch: git checkout -b 'name of branch'";
                default:
                    break;
            }
            //get data for match
            break;
          case "change":
          case "switch":
          case "alternate":
            return "Change Branch: : git checkout 'name of branch'";
            //get data for match
          case "remove":
          case "delete":
          case "destroy":
            switch(qArray[i+1]){
                case "repository":
                case "repo":
                case "folder":
                    return "repo";
                case "branch":
                case "version":
                    return "branch checkout";
                default:
                    break;
            }
            //get data for match
            //break;
          case "reset":
          case "back":
          case "previous":
            //get data for match
            return "Reset";
          case "add":
          case "commit":
          case "push":
          case "upload":
            //get data for match
            return "Add, Commit, Push";
          case "download":
          case "pull":
          case "grab":
            //get data for match
            return "Pull from Repo";
          default:
            break;
            //default
        }
      }
    }
    return "Go Fish";
  }
