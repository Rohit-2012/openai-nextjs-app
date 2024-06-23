import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

const MemberProfile = async () => {
    const user = await currentUser()
    // const {userID} = auth()
    return (
        <div className="px-4 flex items-center gap-2">
            <UserButton afterSignOutUrl="/" />
            <p>{ user.emailAddresses[0].emailAddress}</p>
        </div>
    );
}

export default MemberProfile;