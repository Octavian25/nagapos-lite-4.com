(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1071:function(e,t,a){"use strict";a.r(t);var l=a(19),n=a(20),r=a(50),o=a(22),c=a(21),i=a(0),s=a.n(i),g=a(38),u=a(287),m=a(288),E=a(24),d=a(7),p=a(90),h=a(126),b=a(58),k=a.n(b),A=a(11),f=a(102),_=(a(207),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new f.default("l","mm",[297,210])),a=[],l=30,n=0,r=0,o=0,c=0,i=0,s=Object(d.j)().alamat_toko.length;t.setFontSize(15),t.text("LAPORAN PENJUALAN MARKETPLACE",14,15),t.setFontSize(20),t.text(Object(d.j)().nama_toko,200,15),t.setFontSize(8),s>20&&t.text(Object(d.j)().alamat_toko.slice(0,48),200,20),s>50&&t.text(Object(d.j)().alamat_toko.slice(48,90),200,25),t.setFontSize(10),t.setProperties({title:"LAPORAN PENJUALAN MARKETPLACE"}),t.text("PERIODE : ".concat(0===Object(d.l)("tgl_laporan").length?null:JSON.parse(Object(d.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.l)("tgl_laporan")).tgl_akhir),14,25);e.forEach(function(e,t){var l=[e.no_faktur_jual,e.nama_customer,e.kode_dept,e.nama_barang,{content:e.berat.toFixed(2),styles:{halign:"right",textColor:"#000"}},{content:parseInt(e.ongkos).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:parseInt(e.harga_jual).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:parseInt(e.harga_total).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:e.kode_marketplace,styles:{halign:"right",textColor:"#000"}}];i+=parseInt(e.harga_jual),c+=parseInt(e.ongkos),n+=parseFloat(e.berat),r+=parseInt(e.harga_total),a.push(l)}),o+=e.length;var g=[{content:"Total Transaksi Penjualan : ".concat(o),colSpan:4,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(n.toFixed(2)),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(c.toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(i.toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(r).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];a.push(g);var u=[{content:"Printed By ".concat(JSON.parse(Object(d.l)("userdata")).user_id," / ").concat(Object(d.i)()),colSpan:13,styles:{fontStyle:"italic",textColor:"#000"}}];a.push(u),t.autoTable({head:[[{content:"NO FJ"},{content:"NAMA MEMBER"},{content:"KODE JENIS"},{content:"NAMA BARANG"},{content:"BERAT",styles:{halign:"right"}},{content:"Ongkos",styles:{halign:"right"}},{content:"HARGA JUAL",styles:{halign:"right"}},{content:"HARGA TOTAL",styles:{halign:"right"}},{content:"MARKETPLACE",styles:{halign:"right"}}]],body:a,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"},tableLineColor:[255,255,255],tableLineWidth:1}),l=t.autoTableEndPosY()+3,a=[];var m=t.internal.getNumberOfPages(),E=t.internal.pageSize.width,p=t.internal.pageSize.height;t.setFontSize(10);for(var h=1;h<m+1;h++){var b=E/2,k=p-10;t.setPage(h),t.text("".concat(h," of ").concat(m),b,k,{align:"center"})}t.save("LAPORAN PENJUALAN MARKETPLACE.pdf")}),S=a(125),O=a.n(S),x=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"render",value:function(){var e=0,t=0,a=0,l=0,n=0;return this.props.data.forEach(function(t,r){t.stock_on_hand,t.berat_atribut,e+=t.berat,a+=t.harga_jual,n+=t.ongkos,l+=t.harga_total,t.harga_gram,t.harga_atribut,t.berat_selisih}),t+=this.props.data.length,s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Penjualan Marketplace",sheet:"Laporan Penjualan Marketplace",buttonText:"Export Exel"}),s.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"7",style:{textAlign:"center"}}," ","LAPORAN TRANSAKSI PENJUALAN"," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"7"}," Periode ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"7"}," ",0===Object(d.l)("tgl_laporan").length?null:JSON.parse(Object(d.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.l)("tgl_laporan")).tgl_akhir," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"7"}," TOKO :  ",Object(d.j)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"7"}," ALAMAT :  ",Object(d.j)().alamat_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"7"})),s.a.createElement("tr",null,s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO FJ"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA MEMBER"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE JENIS"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"ONGKOS"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA JUAL"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA TOTAL"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"MARLETPLACE"))),s.a.createElement("tbody",null,this.props.data.map(function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,e.no_faktur_jual),s.a.createElement("td",null,e.nama_customer),s.a.createElement("td",null,e.kode_dept),s.a.createElement("td",null,e.nama_barang),s.a.createElement("td",{style:{textAlign:"right"}},e.berat.toFixed(2)),s.a.createElement("td",{style:{textAlign:"right"}},"\xa0",e.ongkos.toLocaleString("kr-KO")),s.a.createElement("td",{style:{textAlign:"right"}},"\xa0",e.harga_jual.toLocaleString("kr-KO")),s.a.createElement("td",{style:{textAlign:"right"}},"\xa0",e.harga_total.toLocaleString("kr-KO")),s.a.createElement("td",{style:{textAlign:"right"}},"\xa0",e.kode_marketplace))})),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"4",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Total Transaksi Penjualan : ",t),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},e.toFixed(2)),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",n.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",a.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",l.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}})))))}}]),a}(i.Component),y=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={date:new Date,type_laporan:"SEMUA",databarang:[],columns:[{dataField:"no_faktur_jual",text:"No FJ",footerAttrs:{colSpan:"4"},footer:function(e,t,a,l){return s.a.createElement("div",null,"Total Barang : ",n.props.LaporanDataPenjualan.length," ")}},{dataField:"nama_customer",text:"Nama Member"},{dataField:"kode_dept",text:"Kode Jenis"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",headerClasses:"text-right",footer:function(e,t,a,l){return s.a.createElement("div",{className:"text-right"},e.reduce(function(e,t){return e+t},0).toFixed(2))},formatter:function(e){return s.a.createElement("div",{className:"text-right"},e.toFixed(2))}},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",footer:function(e,t,a,l){return s.a.createElement("div",{className:"text-right"},e.reduce(function(e,t){return e+t},0).toLocaleString("kr-KO"))},formatter:function(e){return s.a.createElement("div",{className:"text-right"},e.toLocaleString("kr-KO"))}},{dataField:"harga_jual",text:"Harga Jual",headerClasses:"text-right",footer:function(e,t,a,l){return s.a.createElement("div",{className:"text-right"},e.reduce(function(e,t){return e+t},0).toLocaleString("kr-KO"))},formatter:function(e,t){return s.a.createElement("div",{className:"text-right"},e.toLocaleString("kr-KO"))}},{dataField:"harga_total",text:"Harga Total",headerClasses:"text-right",footer:function(e,t,a,l){return s.a.createElement("div",{className:"text-right"},e.reduce(function(e,t){return e+t},0).toLocaleString("kr-KO"))},formatter:function(e){return s.a.createElement("div",{className:"text-right"},e.toLocaleString("kr-KO"))}},{dataField:"kode_marketplace",text:"Marketplace"}]},n.setStartDate=n.setStartDate.bind(Object(r.a)(n)),n.setLastDate=n.setLastDate.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.change("type","SEMUA"),this.props.change("marketplace","SEMUA"),this.props.change("kode_group","ALL"),this.props.change("jenis_group","ALL"),this.props.dispatch(Object(A.v)()),this.props.dispatch(Object(A.tb)())}},{key:"exportPdf",value:function(){_(this.props.LaporanDataPenjualan,this.state.type_laporan)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"typeLaporan",value:function(e){"SEMUA"===e?this.setState({type_laporan:"SEMUA"}):this.setState({type_laporan:"SELISIH"})}},{key:"render",value:function(){var e=this,t=[{value:"ALL",name:"SEMUA"}];this.props.GetDataGroup.forEach(function(e){var a={name:e.kode_group,value:e.kode_group};t.push(a)});var a=[{value:"SEMUA",name:"SEMUA"}];this.props.getDataMarketplace.forEach(function(e){var t={value:e.kode_marketplace,name:e.kode_marketplace+" - "+e.nama_marketplace};a.push(t)});var l={renderer:function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},"Berat Awal : ",Object(d.f)(e.berat_awal,3)," ",s.a.createElement("br",null),"Berat Selisih : ",Object(d.f)(e.berat_selisih,3)," ",s.a.createElement("br",null),"Nama Atribut : ",e.nama_atribut," ",s.a.createElement("br",null),"Berat Atribut : ",e.berat_atribut," ",s.a.createElement("br",null),"Harga Atribut : ",e.harga_atribut.toLocaleString("kr-KO")," ",s.a.createElement("br",null),"Ongkos : ",e.ongkos.toLocaleString("kr-KO")," ",s.a.createElement("br",null),"Harga/Gram : ",e.harga_gram.toLocaleString("kr-KO")," ",s.a.createElement("br",null),"Nama Member : ",e.nama_customer," ",s.a.createElement("br",null))))},showExpandColumn:!0,expandByColumnOnly:!0};return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(u.a,{name:"tgl_awal",component:E.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(u.a,{name:"tgl_akhir",component:E.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(u.a,{id:"marketplace",label:"Marketplace",name:"marketplace",options:a,placeholder:"Silahkan Pilih Marketplace",component:E.f})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(u.a,{name:"kode_group",component:E.f,options:t,onChange:function(t){return e.setState({kode_group:t})},label:"Kode Group",placeholder:"Pilih Kode Group"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(u.a,{name:"jenis_group",component:E.f,options:[{value:"ALL",name:"SEMUA"},{value:"MUDA",name:"MUDA"},{value:"TUA",name:"TUA"}],label:"Jenis Group",placeholder:"Pilih Jenis Group"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"\xa0"),s.a.createElement("br",null),s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:"col-12"},s.a.createElement(p.a,{keyField:"kode_barcode",data:this.props.export?this.props.LaporanDataPenjualan:[],columns:this.state.columns,empty:!0,textEmpty:"Data Laporan Transaksi Penjualan Kosong",expandRow:l})),s.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("button",{type:"button",onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(x,{data:this.props.LaporanDataPenjualan}))))),this.props.isLoading?s.a.createElement(k.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(i.Component);y=Object(m.a)({form:"HeadLaporanPenjualanMkc",enableReinitialize:!0,validate:h.a})(y);t.default=Object(g.b)(function(e){return{getDataMarketplace:e.datamaster.getDataMarketplace,GetDataGroup:e.datamaster.GetDataGroup,initialValues:{tgl_awal:Object(d.h)(),tgl_akhir:Object(d.h)()}}})(y)}}]);
//# sourceMappingURL=94.9e42e73f.chunk.js.map