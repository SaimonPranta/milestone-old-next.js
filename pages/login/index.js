import { setCookie } from "cookies-next";
import Nav from "../../components/Header/Nav";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter()
    const handleLogin = () => {
      setCookie("isUserLogIn", true);
      router.push("/dashboard");
    };
    return (
      <div>
        <div>
          <Nav />
          <button onClick={handleLogin}>Click to Login </button>
        </div>
      </div>
    );
};

export default Index;