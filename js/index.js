$(function(){
    //toggling
    $("#one").click(function(){
        $("#two").slideToggle();
    });
    $("#three").click(function(){
        $("#four").slideToggle();
    });
    $("#five").click(function(){
        $("#six").slideToggle();
    });
    $("#sevenn").click(function(){
        $("#eightt").slideToggle();
    });

    //data from CustomerFile.json
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'json/CustomerFile.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == 200) {
            var data = JSON.parse(xobj.responseText);
            var twodata = '';
            for(var i = 0;i<data.customers.length;i++){
                twodata += '<div class="row" style="padding: 10px 0;">'+
                    '<div class="col-md-1 col-sm-12 col-xs-12" style="cursor: pointer" onclick="op('+ i +');" title="View Customer Information"><span class="glyphicon glyphicon-eye-open"></span></div>'+
                    '<div class="col-md-1 col-sm-12 col-xs-12">'+data.customers[i].compId+'</div>'+
                    '<div class="col-md-2 col-sm-12 col-xs-12"><strong>'+data.customers[i].compName+'</strong></div>'+
                    '<div class="col-md-2 col-sm-12 col-xs-12" title="View Location On Map" style="cursor: pointer" onclick="maps('+
                    data.customers[i].Latitude+
                    ','+
                    data.customers[i].Longitude+');">'+
                    data.customers[i].CompAddr+
                    '</div>'+
                    '<div class="col-md-2 col-sm-12 col-xs-12"><strong>'+data.customers[i].compContact[0].compPhone+'</strong></div>'+
                    '<div class="col-md-2 col-sm-12 col-xs-12"><em><a href="mailto:'+data.customers[i].compContact[0].compEmail+'" target="_top">'+data.customers[i].compContact[0].compEmail+'</a></em></div>'+
                    '<div class="col-md-2 col-sm-12 col-xs-12">';
                for(var j = 0; j<data.customers[i].invoice.length;j++){
                    var hhhh = data.customers[i].invoice[j].invNum-1;
                            twodata += '<a href="inv.html?inv='+hhhh+'">Invoice:#' + data.customers[i].invoice[j].invNum + '</a><br>';
                }
                    twodata += '</div></div><hr>';
            }
            document.getElementById('d').innerHTML = twodata;
        }
    };
    xobj.send(null);

    //data from Invoice.json
    var xob = new XMLHttpRequest();
    xob.overrideMimeType("application/json");
    xob.open('GET', 'json/Invoice.json', true);
    xob.onreadystatechange = function() {
        if (xob.readyState == 4 && xob.status == 200) {
            var dataa = JSON.parse(xob.responseText);
            var twodataa = '';
            for(var i = 0;i<dataa.invoices.length;i++){
                twodataa += '<div class="row" style="padding: 10px 0;">'+
                            '<div class="col-md-1 col-sm-12 col-xs-12" style="cursor: pointer" onclick="inc('+ i +');" title="View Invoice"><span class="glyphicon glyphicon-eye-open"></span></div>'+
                            '<div class="col-md-2 col-sm-12 col-xs-12">Invoice:#'+dataa.invoices[i].invNum+'</div>'+
                            '<div class="col-md-2 col-sm-12 col-xs-12">Date:'+dataa.invoices[i].invDate+'</div>'+
                            '<div class="col-md-2 col-sm-12 col-xs-12">CustomerId:'+dataa.invoices[i].compId+'</div>'+
                            '<div class="col-md-2 col-sm-12 col-xs-12">Invoice Amount: $'+dataa.invoices[i].invAmt+'</div>'+
                            '<div class="col-md-3 col-sm-12 col-xs-12">';
                for(var x=0;x<dataa.invoices[i].products.length;x++){
                    twodataa += '<div style="text-align: center"><strong>ProductID:'+
                                dataa.invoices[i].products[x].prodId + '</strong>&nbsp;<em>Quantity:'+
                                dataa.invoices[i].products[x].qty + '<em></em></div>';
                }
                twodataa += '</div></div><hr>';
            }
            document.getElementById('dd').innerHTML = twodataa;
        }
    };
    xob.send(null);

    //data from Product.json
    var xobb = new XMLHttpRequest();
    xobb.overrideMimeType("application/json");
    xobb.open('GET', 'json/Product.json', true);
    xobb.onreadystatechange = function() {
        if (xobb.readyState == 4 && xobb.status == 200) {
            var dat = JSON.parse(xobb.responseText);
            var twodat = '';
            for(var i = 0;i<dat.products.length;i++){
                twodat += '<div class="row" style="padding: 10px 0;">'+
                    '<div class="col-md-1 col-sm-12 col-xs-12" style="cursor: pointer" onclick="prod('+ i +');" title="View Product"><span class="glyphicon glyphicon-eye-open"></span></div>'+
                    '<div class="col-md-1 col-sm-12 col-xs-12">Product Id:#'+dat.products[i].prodId+'</div>'+
                    '<div class="col-md-8 col-sm-12 col-xs-12">Description:<strong>'+dat.products[i].prodDesc+'</strong></div>'+
                    '<div class="col-md-2 col-sm-12 col-xs-12"><em>Cost:<strong>$'+dat.products[i].prodAmt+'</strong></em></div>'+
                    '</div><hr>';
            }
            document.getElementById('ddd').innerHTML = twodat;
        }
    };
    xobb.send(null);

    //data from CustomerFile.json and Invoice.json
    var xobjn = new XMLHttpRequest();
    xobjn.overrideMimeType("application/json");
    xobjn.open('GET', 'json/CustomerFile.json', true);
    xobjn.onreadystatechange = function() {
        if (xobjn.readyState == 4 && xobjn.status == 200) {
            var datax = JSON.parse(xobjn.responseText);
            var twodatax = '';
            for(var i = 0;i<datax.customers.length;i++){
                twodatax += '<div class="row" style="padding: 10px 0;">'+
                    '<div class="col-md-2 col-sm-12 col-xs-12">'+datax.customers[i].compId+'</div>'+
                    '<div class="col-md-2 col-sm-12 col-xs-12"><strong>'+datax.customers[i].compName+'</strong></div>'+
                    '<div class="col-md-2 col-sm-12 col-xs-12" title="View Location On Map" style="cursor: pointer" onclick="maps('+
                    datax.customers[i].Latitude+
                    ','+
                    datax.customers[i].Longitude+');">'+
                    datax.customers[i].CompAddr+
                    '</div>';

                for(var j = 0; j<datax.customers[i].invoice.length;j++){
                    var hhh = datax.customers[i].invoice[j].invNum-1;
                    twodatax += '<div class="col-md-2 col-sm-12 col-xs-12"><a href="inv.html?inv='+hhh+'">Invoice:#' + datax.customers[i].invoice[j].invNum + '</a></div>';
                }
                twodatax += '</div><hr>';
            }
            document.getElementById('dddd').innerHTML = twodatax;
        }
    };
    xobjn.send(null);

});

function maps(lat,long){
    window.location.assign('maps.html?latitude='+lat+"&longitute="+long);
}

function op(i) {
    window.location.assign('cust.html?user='+i);
}

function inc(a) {
    window.location.assign('inv.html?inv='+a);
}

function prod(f) {
    window.location.assign('prod.html?pr='+f);
}