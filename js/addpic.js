/**
 * Created by Jsceoz on 2016/10/11.
 */
//var co = require('co');
//var OSS = require('ali-oss');


var client = new OSS.Wrapper({
    region: 'oss-cn-qingdao',
    accessKeyId: 'LTAI73ZjdVlqmMUx',
    accessKeySecret: 'Pqwo3P15hEV2PR8EncWFBucq2M8GVv',
    bucket: 'whusu'
});



client.list({
    'max-keys': 10
}).then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
});

//
// $.ajax({
//     url : 'http://127.0.0.1:8000/article/',
//     type : 'PUT',
//     data: new FormData($('#uploadForm')[0]),
//        beforeSend : function(req) {
//            req.setRequestHeader('Authorization', 'OSS FReRn5dYELSk2eKTYPjgAaZXsZcFje');
//        }
// }).done(function (data) {
//     console.log(data);
// });


var el =  document.getElementById('file');

var timestamp = Date.parse(new Date());


if(el) {
        el.addEventListener('change', function (e) {
        var file = e.target.files[0];
        var storeAs = '/news_pic/'+timestamp+'.jpg';
        console.log(file.name + ' => ' + storeAs);
        client.multipartUpload(storeAs, file).then(function (result) {
            console.log(result);
        }).catch(function (err) {
            console.log(err);
        });

        var path = 'http://oss.whusu.com.cn/'+storeAs;

        $('.path').empty();
        $('.path').append(
            '图片地址：'+path
        );

    });

}
