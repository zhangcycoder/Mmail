import vue from 'vue';
const _this = vue

export default {
    state: {
        order: {},
        list: [],
        options: [{ value: "按单号查询", label: "按单号查询" }],
        show: true,
        text: [{ a: "查看", label: '操作' }],
        titleArr: [
            { label: "订单号", prop: "orderNo" },
            { label: "收件人", prop: "receiverName" },
            { label: "订单状态", prop: "statusDesc" },
            { label: "订单总价", prop: "payment" },
            { label: "创建时间", prop: "createTime" }
        ],
        params: {
            pageSize: 10,
            pageNum: 1
        }
    },
    mutations: {
        getOrderInfo(state) {
            _this.prototype.Network.getOrderList(this.params)
                .then(res => {
                    state.list = res.data.data.list;
                });
        },
        getOrderDetail(state) {
            _this.prototype.Network.getOrderDetail(state.order.orderNo)
                .then(res => {
                    console.log(res)
                })
        },
        getOrder(state, params) {
            state.order = params
        }
    }
}