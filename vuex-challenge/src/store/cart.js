export default {
    namespaced: true,
    //* Data variabel
    state() {
        return {
            qty: 0,
            total: 0,
            items: [],
        }
    },

    //* Logic Business
    mutations: {
        addProductToCart(state, payload) {
            const productData = payload
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === productData.id
            )

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                }

                state.items.push(newItem)
            }

            state.qty++
            state.total += productData.price
        },

        removeProductFromCart(state, payload) {
            const prodId = payload.productId
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            )

            const prodData = state.items[productInCartIndex]

            state.items.splice(productInCartIndex, 1)
            state.qty -= prodData.qty
            state.total -= prodData.price * prodData.qty
        },
    },

    //* Action based on mutations
    actions: {
        addToCart(context, payload) {
            context.commit("addProductToCart", payload)
        },
        removeFromCart(context, payload) {
            context.commit("removeProductFromCart", payload)
        },
    },

    //* Get custom data
    getters: {
        products(state) {
            return state.items
        },
        cartTotal(state) {
            return state.total
        },
        quantity(state) {
            return state.qty
        },
    },
}
