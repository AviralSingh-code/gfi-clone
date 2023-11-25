import axios from "axios";
import { useRouter } from "next/navigation";
import { userState } from "store";
import { useSetRecoilState } from "recoil";
import { Signin } from "ui/Signin";
export default function LoginPage()
{
    const router = useRouter();
    const setUserState = useSetRecoilState(userState);
    return <div>
        <Signin onClick={async (username, password) => {
            const respone = await axios.post("/api/user/signin",{},{
                headers:{
                    "Content-Type": "application/json",
                    "username": username,
                    "password": password
                }
            });
            let data = respone.data;
            if(!data.token)
            {
                router.push('/oopsSignin');
            }
            else{
                localStorage.setItem("token", data.token);
                setUserState({
                    isLoading: false,
                    userEmail: username
                });
                router.push("/");
            }
        }}></Signin>
    </div>
}