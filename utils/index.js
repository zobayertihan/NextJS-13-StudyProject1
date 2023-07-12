export async function getAllUsersList() {
    const apiResponse = await fetch('https://dummyjson.com/users')
    const result = await apiResponse.json()

    return result && result.users && result.users.length > 0 ? result.users : []
}

export async function getUserDetails(id) {
    const apiResponse = await fetch(`https://dummyjson.com/users/${id}`)
    const result = await apiResponse.json()

    return result;
}

export async function getListOfCartItems() {
    const apiResponse = await fetch('https://dummyjson.com/cart')
    const result = await apiResponse.json()

    return result && result.carts && result.carts.length > 0 ? result.carts : [];

}

export async function getCartDetailsById(id) {
    const apiResponse = await fetch(`https://dummyjson.com/cart/${id}`)
    const result = await apiResponse.json()

    return result;
}