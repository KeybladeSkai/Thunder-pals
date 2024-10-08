import "../../styles/Auth.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setUser } from "../../context/authSlice";
const Login = ({ setChangeUp }) => {
  const dispatch = useDispatch();
  const [userEmail, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate("/");
  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUserPwd = (e) => {
    setPwd(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    setLoading(true);
    signInWithEmailAndPassword(auth, userEmail, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(
          setUser({
            _id: user.id,
            userName: user.displayName,
            userImage: user.photoURL,
            userToken: user.accessToken,
          })
        );
        toast.success("login Successful");
        setTimeout(() => {
          setLoading(false);
        }, 2000);

        navigateTo("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setLoading(false);
        if (errorCode === "auth/invalid-email") {
          toast.error("invalid email");
        } else if (errorCode === "auth/invalid-credential") {
          toast.error("invalid password");
        }
      });
  };
  return (
    <div className="a-right">
      <form onSubmit={handleSubmit} className="form-container">
        <h1 className="font-bold text-4xl mb-2 text-black">Login</h1>
        <div>
          <input
            value={userEmail}
            type="text"
            className="outline-none p-[15px] border-[1px] border-black  text-black rounded-full"
            placeholder="Email"
            onChange={handleUserEmail}
          />
        </div>
        <div>
          <input
            value={pwd}
            type="password"
            className="outline-none p-[15px] border-[1px] border-black text-black rounded-full"
            placeholder="Password"
            onChange={handleUserPwd}
          />
        </div>
        <button className="button-auth rounded-full">
          {!loading ? (
            "Sign in"
          ) : (
            <ThreeCircles
              visible={true}
              height="30"
              width="30"
              color="#fff"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </button>
        <span className="flex gap-2 text-black mt-3">
          <p>Already have an account? </p>
          <a
            className="opacity-80 text-blue-600"
            href="#"
            onClick={setChangeUp}
          >
            Sign up
          </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
