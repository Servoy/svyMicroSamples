customProperties:"formComponent:false,\
methods:{\
onShowMethodID:{\
arguments:null,\
parameters:null\
}\
}",
dataSource:"db:/servoy_training/customers",
encapsulation:60,
extendsID:"1046CC5D-E653-4F9C-B8B9-E3FCDA83A211",
items:[
{
anchors:15,
items:[
{
containsFormID:"6A743972-00AD-49C0-93CA-6C33D813E091",
location:"160,30",
relationName:"splitpanels_customers_to_orders.splitpanels_orders_to_order_details",
text:"Order Details",
typeid:15,
uuid:"27160F81-E358-43A7-A9AF-F46E72D8BB0D"
},
{
containsFormID:"89EB86CA-66B5-4368-8785-2B32C7EDCC3A",
location:"0,30",
text:"Customers",
typeid:15,
uuid:"4BA171C4-C009-4D73-9CC6-F248E496A287"
},
{
containsFormID:"451BDB91-2E9E-4552-863D-A8ADDC0937D3",
location:"80,30",
relationName:"splitpanels_customers_to_orders",
text:"Orders",
typeid:15,
uuid:"5AEDBF1E-CDE3-4F05-BA97-5013C171B2EB"
},
{
containsFormID:"34EF4319-B973-4420-81CE-540E4DF771EE",
location:"240,30",
relationName:"splitpanels_customers_to_orders.splitpanels_orders_to_order_details.order_details_to_products_basic_components",
text:"Product",
typeid:15,
uuid:"6D166334-44A8-4280-8CA1-830619221B14"
}
],
location:"0,0",
name:"accordion",
size:"480,480",
tabOrientation:-4,
transparent:true,
typeid:16,
uuid:"72B207B0-8661-474E-97F9-78A84E7EF3B9"
},
{
extendsID:"CCD8084B-3484-41E7-8FBA-CBF44DD9BF67",
height:480,
typeid:19,
uuid:"93AFD8BE-3848-4AAB-9AC9-167B4632B6F3"
}
],
name:"accordionPanel",
onShowMethodID:"E7C2B6CF-8EC3-4E2B-9FD3-25A5EFA68D05",
scrollbars:4,
showInMenu:true,
typeid:3,
uuid:"AF3FB3BC-2AA6-45A3-9CA7-B020F774783C"