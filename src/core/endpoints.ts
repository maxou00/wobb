
let sample = {
    address:{
        name:"Dhruv Upadhyay",
        city:"Ghaziabad",
        address:"C-624 Gaur Homes",
        state:"U.P",
        zipCode:201013
    },
    items:[
        {
            itemName:"Story Reel",
            amount:1000,
            quantity:2
        }
    ],
    campaignName:"Plum Barter Campaign",
    fundAccountId:"fa_HLm5tSGpCb3pop",
    hsnCode:"123223",
    gstDescription:"Business Gst",
    date:1615881845236
}


export function fetchInvoiceUrl(invoiceData: any = sample) {
    return fetch(
        "https://api.wobb.ai/api/v2/invoice/getBrandInvoice",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(invoiceData)
        }
    )
    .then((d) => d.text())
}