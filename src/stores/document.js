import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // chứa toàn bộ state của ứng dụng
        result: 0
    },
    mutations: {
        //Store là nơi component chỉ có thể đọc dữ liệu và không thể thay đổi trạng thái một cách trực tiếp
        // . Để thay đổi trạng thái thì Mutations sẽ đảm nhiệm chức năng này, đây là nơi duy nhất có thể thay đổi state.
    },
    getters: {
        // Getters là tập hợp các hàm dùng để filter state ra  được output
    },
    actions: {
        //Action cũng tương tự như mutation, tuy nhiên có một vài điểm khác biệt, thay vì thay đổi trạng thái, action commit các thay đổi. Action có thể chứa các hoạt động không đồng bộ.
        // ,là nơi thể hiện bussiness logic. Nó là nơi gọi API, save vào database, thực hiện các commit (gọi mutation) để thay đổi state…

        //Ngược lại với mutation, action lại là asynchronous. Đơn giản là bởi vì các action có thể không có logic liên quan đến nhau.
    },
    modules: {

    }
});