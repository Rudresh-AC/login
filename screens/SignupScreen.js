import { useState } from "react";
import { useDispatch } from "react-redux";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../utill/auth";
import { Alert } from "react-native";
import { authenticate } from "../store/auth-slice";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const result = await createUser(email, password);
      console.log("token=", result.idToken);
      console.log("result=", result);
      dispatch(authenticate(result.idToken));
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user. Please check your input and try again."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
