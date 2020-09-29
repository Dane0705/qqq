var data =[
    {
    orderNumber:'C1200801298',
    orderDate:'2020/8/12',
    orderPayment:'刷卡',
    orderTotalDollars:'$599元',
    orderSituation:'已付款',
    orderRecipient:'鄭岳洋',
    orderPhone:'0912344537',
    orderAddress:'桃園市1234556576',
    orderInfo:'ABC1233454454',
    orderDelivery:'已到貨',
    orderCancel:'-',
    orderProduct:[{

        0:'https://www.sanjing3c.com.tw/data/sp_images/202009/QNBLG004A-SP1.jpg',
        1:'http://www.sanjing3c.com.tw/data/images/202004/QMSI747GFA.jpg',
        2:'http://www.sanjing3c.com.tw/data/images/201412/HDTS2TBC.jpg',
        3:'http://www.sanjing3c.com.tw/data/images/201704/HDTS2TBD.jpg'
        }
    ],
    orderProName:[{
        0:'[ TP-LINK ]Archer C20 AC750 無線雙頻路由器V4',
        1:'Modern 14 A10M-830TW14吋窄邊框輕薄創作者筆電',
        2:'2T SJ25H3B 軍規防震硬碟 USB3.0',
        3:'1TB 薄型行動硬碟 TS1TSJ25M3G'
        }
    ],
    orderCount:[{0:'2',1:'2',2:'3',3:'4'}],
    orderDollars:['$200元','$2800元','$1200元','$600元']
    },
    {
    orderNumber:'C1200801293',
    orderDate:'2020/8/05',
    orderPayment:'付現',
    orderDollars:'$788元',
    orderSituation:'已付款',
    orderRecipient:'鄭oo',
    orderPhone:'0912344547',
    orderAddress:'桃園市1234556576',
    orderInfo:'ABC1233454454',
    orderDelivery:'未到貨',
    orderCancel:'-',
    orderProduct:'http://www.sanjing3c.com.tw/data/images/202002/QCGA4537.jpg',
    orderProName:'[ TP-LINK ]Archer C20 AC750 無線雙頻路由器V4',
    orderCount:'1'
    },
    {
    orderNumber:'C8888888888',
    orderDate:'2020/7/11',
    orderPayment:'刷卡',
    orderDollars:'$599元',
    orderSituation:'已付款',
    orderRecipient:'鄭xx',
    orderPhone:'0912344557',
    orderAddress:'桃園市1dfdfdf6576',
    orderInfo:'ABC1233454454',
    orderDelivery:'已到貨',
    orderCancel:'-',
    orderProduct:'http://www.sanjing3c.com.tw/data/images/201808/CBAS68.jpg',
    orderProName:'[ TP-LINK ]Archer C20 AC750 無線雙頻路由器V4',
    orderCount:'2'
}]

let soildTable = document.getElementById('soild-table');
let foo = soildTable.children;

Array.from(foo).forEach(e=>{
    e.addEventListener('click',modalFun,false);
})

console.log(data[0].orderProduct);

function modalFun(e){
    let str='';
    let modalTable= document.getElementById('modal-table');
    for(let i = 0; i<data.length;i++){
        if(this.firstElementChild.textContent == data[i].orderNumber){
            str +=`
                <tbody>
                    <tr>
                        <td style="border-top: none;">訂單編號</td>
                        <td style="width: 230px;border-top: none">${data[i].orderNumber}</td>
                    </tr>
                    <tr>
                        <td>訂購日期</td>
                        <td>${data[i].orderDate}</td>
                    </tr>
                    <tr>
                        <td>付款方式</td>
                        <td>${data[i].orderPayment}</td>
                    </tr>
                    <tr>
                        <td>訂購金額</td>
                        <td>${data[i].orderTotalDollars}</td>
                    </tr>
                    <tr>
                        <td>訂單狀態</td>
                        <td>${data[i].orderSituation}</td>
                    </tr>
                    <tr>
                        <td>收件人</td>
                        <td>${data[i].orderRecipient}</td>
                    </tr>
                    <tr>
                        <td>收件人電話</td>
                        <td>${data[i].orderPhone}</td>
                    </tr>
                    <tr>
                        <td>收件人地址</td>
                        <td>${data[i].orderAddress}</td>
                    </tr>
                    <tr>
                        <td>發票資訊</td>
                        <td>${data[i].orderInfo}</td>
                    </tr>
                    <tr>
                        <td>貨運狀態</td>
                        <td>${data[i].orderDelivery}</td>
                    </tr>
                    <tr>
                        <td>取消/退貨</td>
                        <td>${data[i].orderCancel}</td>
                    </tr>
                    <td>
                        商品資訊:
                    </td>
                    <td></td>
                    <tr>
                        <td class="border-0">
                            <img src="${data[i].orderProduct}" alt="">              
                        </td>
                        <td class="border-0">
                            <p class="m-0 countbox" style="height:120px">
                            ${data[i].orderProName}
                                <span class="countPrice">數量 : ${data[i].orderCount}總價 : ${data[i].orderDollars}</span>
                            </p>
                        </td>
                    </tr>
                </tbody> 
            `
        }
        modalTable.innerHTML=str;
    }
}
{/* <tr>
<td class="border-0">
    <img src="${data[i].orderProduct[0]}" alt="">
    <img src="${data[i].orderProduct[1]}" alt="">                 
    <img src="${data[i].orderProduct[2]}" alt="">                 
    <img src="${data[i].orderProduct[3]}" alt="">                 
</td>
<td class="border-0">
    <p class="m-0 countbox" style="height:120px">
    ${data[i].orderProName[0]}
        <span class="countPrice">數量 : ${data[i].orderCount[0]}總價 : ${data[i].orderDollars[0]}</span>
    </p>
    <p class="m-0 countbox" style="height:120px">
    ${data[i].orderProName[1]}
        <span class="countPrice">數量 : ${data[i].orderCount[1]}總價 : ${data[i].orderDollars[1]}</span>
    </p>
    <p class="m-0 countbox" style="height:120px">
    ${data[i].orderProName[2]}
        <span class="countPrice">數量 : ${data[i].orderCount[2]}總價 : ${data[i].orderDollars[2]}</span>
    </p>
    <p class="m-0 countbox" style="height:120px">
    ${data[i].orderProName[3]}
        <span class="countPrice">數量 : ${data[i].orderCount[3]}總價 : ${data[i].orderDollars[3]}</span>
    </p>   
</td>
</tr> */}