customProperties:"formComponent:false,\
methods:{\
onShowMethodID:{\
arguments:null,\
parameters:null\
}\
}",
dataSource:"db:/example_data/customers",
encapsulation:60,
extendsID:"3AE349C1-1A51-4F45-8D39-5587E652B20B",
items:[
{
location:"34,94",
size:"405,20",
text:"a valuelist with customers related to the above selected country",
transparent:true,
typeid:7,
uuid:"147C5FC1-2D9E-4055-9872-EE60DD3E5B61"
},
{
location:"44,32",
size:"232,20",
text:"Select a country from the value list",
transparent:true,
typeid:7,
uuid:"2C1415C8-8055-4049-A032-0BE3E628A3FC"
},
{
dataProviderID:"scopes.demoValuelist.xcountry",
displayType:2,
editable:false,
location:"331,32",
size:"264,20",
typeid:4,
uuid:"67B47E81-2BA4-47C3-95FF-044E0E1D2940",
valuelistID:"3CB5A0D6-DCE2-4DF2-84A4-3F333D8A8E7E"
},
{
anchors:15,
dataProviderID:"selected_customer",
displayType:11,
editable:false,
location:"34,119",
size:"561,315",
typeid:4,
uuid:"E67F9600-2811-421A-8663-E34541385C3E",
valuelistID:"44290AD2-386C-4FE3-BB35-01911985BC42"
},
{
extendsID:"CCD8084B-3484-41E7-8FBA-CBF44DD9BF67",
height:480,
typeid:19,
uuid:"F79F845C-675C-4EE5-8EB2-006A7418F3E9"
}
],
name:"relatedValuelist",
onShowMethodID:"8126C5F9-C651-4BA4-9795-51DB44C11218",
showInMenu:true,
typeid:3,
uuid:"0A2ECD45-4062-4F35-9A0F-2E825D8AB4FE"