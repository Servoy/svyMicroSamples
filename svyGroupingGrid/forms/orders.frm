customProperties:"formComponent:false",
dataSource:"db:/example_data/orders",
encapsulation:60,
items:[
{
height:480,
partType:5,
typeid:19,
uuid:"1EF015E8-85F0-4DB7-9E7C-F1281BAC4593"
},
{
anchors:15,
json:{
anchors:15,
columns:[
{
dataprovider:"orderid",
dp:"orderid",
headerTitle:"Order",
isPK:true,
svyUUID:"50578E3E-0248-4EB7-95AE-B20B8379C334",
visible:true
},
{
dataprovider:"customerid",
datasource:"db:/example_data/orders",
dp:"customerid",
headerTitle:"Customer",
relationname:"orders_to_orders$customerid",
svyUUID:"8CBA2DFE-AAA7-42C4-8BED-E3C9F99CDB90",
visible:true
},
{
dataprovider:"shipcity",
datasource:"db:/example_data/orders",
dp:"shipcity",
headerTitle:"Ship City",
isPK:false,
relationname:"orders_to_orders$shipcity",
svyUUID:"66F280C0-CC1E-4BB5-AF0A-232D2DEBED7E",
visible:true
}
],
location:{
x:250,
y:26
},
myFoundset:{
foundsetSelector:""
},
numRows:100,
onGroupChanged:"27E21902-4B7D-44EE-8DE9-CB6E583B7B0B",
onNodeExpanded:"B6E2E5AC-4C45-4DB3-A071-F484A3611140",
size:{
height:354,
width:360
}
},
location:"250,26",
name:"uigridfilter_1",
size:"360,354",
typeName:"uigridfilter-uigridfilter",
typeid:47,
uuid:"A7262CD7-7F65-4E24-930B-4CCCD1471F9D"
}
],
name:"orders",
onShowMethodID:"CB540D95-0A2D-4131-AEBE-92390538DBA7",
showInMenu:true,
typeid:3,
uuid:"9578C59D-21CA-45FF-B09F-37AE51733A01"