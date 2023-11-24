import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userEmailState, userState } from "store";
import { LandingPage } from "ui/LandingPage";

export default function Home() {
  const userStateValue = useRecoilValue(userEmailState);
  const router = useRouter();
  const setUserState = useSetRecoilState(userState);
  return (
    <>
      <LandingPage
      userState={userStateValue}
      onBrowseClickParent={()=>{
        router.push("/issues");
      }}
      onSigninParent={()=>{
        router.push("/signin");
      }}
      onSignoutParent={()=>{
        localStorage.setItem("token", "");
          setUserState({
            isLoading: false,
            userEmail: null
          });
          router.push("/");
      }}
      onSignupParent={()=>{
        router.push("/signup");
      }}></LandingPage>
    </>
  )
}
