import { getAllUsersList } from "@/utils";
import { useRouter } from "next/router";
import { render } from "react-dom"


export async function getStaticProps() {
    const result = await getAllUsersList()
    return {
        props: {
            listOfUsers: result
        }
    }
}
export default function User(props) {
    console.log(props);
    const { listOfUsers } = props;
    const router = useRouter();
    function handleNavigateToDetailsPage(id) {
        router.push(`/users/${id}`)
    }
    return (
        <div style={{ margin: '50px' }}>
            <h1>Users Page</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: '10px' }}>
                {
                    listOfUsers.map(item =>
                        <div onClick={() => handleNavigateToDetailsPage(item.id)}
                            style={{ border: '1px solid', padding: '1rem', cursor: 'pointer' }} key={item.id}>
                            <img src={item.image} alt="" />
                            <p>{`${item.firstName} ${item.lastName}`}</p>
                            <p>{item.address && item.address.city}</p>
                        </div>)
                }
            </div>
        </div>
    )
}