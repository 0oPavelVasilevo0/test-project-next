import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="login-container">
            <SignIn />
        </div>
    )
}