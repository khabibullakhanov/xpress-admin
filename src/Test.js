var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('newDate', '{"name":"Test222","price":"12345","cost":"12345","season":"test","size":"XXL, XL","forWhom":"test","quantity":"12","discaunt":"0","about":"lorem ipsum"}');
data.append('deleteImg', '["http://localhost:5000/xpress_01666894330500.jpg","http://localhost:5000/xpress_11666894330511.jpg"]');
data.append('imgData', '["http://localhost:5000/xpress_01666894330500.jpg","http://localhost:5000/xpress_11666894330511.jpg"]');
data.append('img', fs.createReadStream('/D:/Oybek Abdujabbborov/DCIM/8K FOTO/45945-tsvetyi_vesna_vetka.jpg'));
data.append('img', fs.createReadStream('/D:/Oybek Abdujabbborov/DCIM/8K FOTO/47158-podsnezhniki_zima_sneg_gory_fon.jpg'));
data.append('img', fs.createReadStream('/D:/Oybek Abdujabbborov/DCIM/8K FOTO/53128-cvetenie_vetka_belye_cvety.jpg'));

var config = {
  method: 'post',
  url: 'http://localhost:5000/api/product/update/1',
  headers: { 
    'Content-Type': 'multipart/form-data', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});