import Vue from 'vue'
const _this = Vue

export default {
    state: {
        productList: [],
        product: {
            categoryId: "0",
            name: "",
            subtitle: "",
            stair: "",
            price: 0,
            status: 1,
            stock: 0,
            detail: ''
        }
    },
    mutations: {
        getProductInfo(state, params) {
            _this.prototype.Network.getProduct(params, res => {
                let list = res.data.data.list;
                list.forEach(e => {
                    e.name = e.name + "-----" + e.subtitle;
                    if (e.status == 1) {
                        e.status = "在售";
                    } else {
                        e.status = "已下架";
                    }
                });
                state.productList = list
            });
        },
        getProductSearch(state, params) {
            _this.prototype.Network.getProductSearch(params, res => {
                let list = res.data.data.list;
                list.forEach(e => {
                    e.name = e.name + "-----" + e.subtitle;
                    if (e.status == 1) {
                        e.status = "在售";
                    } else {
                        e.status = "已下架";
                    }
                });
                state.productList = list
            })
        },

        getAddProduct(state, params) {
            _this.prototype.Network.getAddProduct(params)
                .then(res => {
                    console.log(res)
                })
        },
        setProduct(state, params) {
            _this.prototype.Network.setProduct(params)
                .then(res => {
                    console.log(res)
                })
        },
        getPageProduct(state, value) {
            state.product = {
                categoryId: value.categoryId,
                name: value.name,
                subtitle: value.subtitle,
                stair: "",
                price: value.price,
                status: value.status,
                stock: 0,
                img: value.imageHost + value.mainImage,
                detail: '无'
            }
        }
    },
    actions: {
    },
}