import axios from "axios";
import { AddProjectPage } from "ui/AddProjectPage"
function NewProject()
{
    return <div>
        <AddProjectPage
        onAddNewProject={async(ownername, reponame)=>{
            await axios.post("/api/issues",{
                    owner: ownername,
                    repo: reponame
                })
        }}></AddProjectPage>
    </div>
}

export default NewProject;
