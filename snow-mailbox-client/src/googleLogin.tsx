import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginButton = () => {
  const clientId =
    "705147682536-svudhbtvg80n9d11nbnt6pirgkfrtjq1.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res: any) => {
            const decoded = jwtDecode(res.credential);
          }}
          onError={() => console.log("err")}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
