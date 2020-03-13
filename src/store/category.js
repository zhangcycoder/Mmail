import Vue from 'vue'
const _this = Vue

export default {
    state: {
        categoryList: [],
        categoryChildrenList: [],

        list: [],
        titleArr: [
            { prop: "id", label: "品类ID" },
            { prop: "name", label: "品类名称" }
        ],
        show: [{ a: "修改名称", b: "查看其子品类", label: "操作" }]
    },

    mutations: {
        getCategoryList(state) {
            _this.prototype.Network.getCategory(res => {
                state.categoryList = res.data.data
            })
        },
        getCategoryChildren(state, params) {
            _this.prototype.Network.getCategoryChildrenList(params, res => {
                state.categoryChildrenList = res.data.data
            })
        },
        setCategoryName(state, params) {
            _this.prototype.Network.setCategoryName(params, res => {
                console.log(res);
            })
        },
        getCategory(state) {
            _this.prototype.Network.getCategory(res => {
                state.list = res.data.data;
            });
            state.show = [{ a: "修改名称", b: "查看其子品类", label: "操作" }]

        },
        getChildren(state, params) {
            _this.prototype.Network.getCategoryChildrenList(params, res => {
                state.list = res.data.data
            });
            state.show = [{ a: "修改名称", label: "操作" }]

        },
        setAddCategory(state,params){
            _this.prototype.Network.setAddCategory(params,res=>{

                if(res.data.data=='添加品类成功'){
                    alert(res.data.data)
                }
            })
        }
    },

}