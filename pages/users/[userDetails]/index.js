import { getAllUsersList, getUserDetails } from "@/utils";

export async function getStaticProps(context) {
    console.log(context);
    const details = await getUserDetails(context.params.userDetails);
    return {
        props: {
            userDetailsData: details
        }
    }
}

export async function getStaticPaths() {

    const allUsers = await getAllUsersList()
    const createdUsersPath = allUsers.map(user => ({
        params: {
            userDetails: user.id.toString()
        }
    }))
    return {
        paths: createdUsersPath,
        fallback: false
    }
}
export default function userDetails(props) {
    console.log(props);
    const { userDetailsData } = props;
    const { address, email, firstName, lastName, image, university } = userDetailsData;
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: '30px' }}>
            <h1>User Details</h1>
            <div style={{ border: '1px solid', gap: '10px', display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: '10px' }}>
                <img src={image} alt="" />
                <p>{`${firstName} ${lastName}`}</p>
                <p>{email}</p>
                <p>{address && address.city}</p>
                <p> {university} </p>
            </div>
        </div>
    )
}