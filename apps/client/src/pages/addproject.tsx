import axios from "axios";
import { useRouter } from "next/router";
import { AddProjectPage } from "ui/AddProjectPage"
function NewProject()
{
    const router = useRouter();
    return <div>
        <AddProjectPage
        onAddNewProject={async(ownername, reponame)=>{
            await axios.post("/api/issues",{
                    owner: ownername,
                    repo: reponame
                })
                router.push("/issues");
        }}></AddProjectPage>
    </div>
}

export default NewProject;
