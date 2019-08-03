import {wxHttp} from '@/utils/wxHttp';
 const publicUrl = 'http://192.168.3.206/';

// 微信登录
const wxLogin =  'mini/miniUser/wxLogin';

//根据店铺标识查找店铺商品分类
const selectTypeByStoreId = "mini/type/selectTypeByStoreId";

//根据商品分类查找商品
const queryGoodsByTypeId = "mini/goods/queryGoodsByTypeId";

const calculateFee = "mini/wxPay/calculateFee";

const creatOder = "mini/wxPay/creatOder";

const paySuccess = "mini/order/paySuccess";

const userOrder = "mini/order/userOrder";

const queryGoldOfStore = "mini/gameRecord/queryGoldOfStore";

const queryStoreInfo = "mini/store/queryStoreInfo";


module.exports = {
    wxLogin,
    selectTypeByStoreId,
    queryGoodsByTypeId,
    calculateFee,
    creatOder,
    paySuccess,
    userOrder,
    queryGoldOfStore,queryStoreInfo
}
