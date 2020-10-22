export const filluserProducts = (products) => ({
    type: "FETCH_PRODUCTS",
    productlist : products
})

export const addproducts = (product) => ({
    type: "ADD_PRODUCT",
    newproduct : product
})

export const modifyProducts = (product) => ({
    type: "MODIFY_PRODUCT",
    newproduct : product
})