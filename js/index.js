
//事件监听


//打开筛选modal
$('#select-btn').click(function () {
    $('#select-model').modal('show');
});

//确定筛选条件
$('#select-submit').click(function () {

    var tag = [];

    for( var i = 0; i < 3; i++){

        if($('#s' + i).attr("checked")){
            tag.push($('#s' + i).val()); 
        }

    }
    
    var data = {
        tag:tag
    };

    $('#news-container').empty();

    getArticleList(data);
});

//开始搜索
$('#search-btn').click(function () {

    var search_data = {
        title:$('#search-input').val()
    };

    $('#news-container').empty();

    getArticleList(search_data);

});


//页面初始化
function init() {
    var data = {};
    getArticleList(data);
}



//获取文章列表
function getArticleList(data) {

    // if(tag.length === 0){
    //     $.get("http://127.0.0.1:8000/article/", function(data){
    //         console.log(data);
    //
    //         for( i = 0; i < 8; i++) {
    //             $('#news-container').append(
    //                 "<div class=\"four wide column\">"
    //                 + "<div class=\"ui link card\" id=\"" + data.results[i].id + "\" onclick='getArticleDetail(" + data.results[i].id + ")'>"
    //                 + "<div class=\"image\">"
    //                 + "<img src=\"img/1.jpg\">"
    //                 + "</div>"
    //                 + "<div class=\"content\">"
    //                 + "<div class=\"header\">" + data.results[i].title + "</div>"
    //                 + "<div class=\"meta\">"
    //                 + "<a>" + getTag(data.results[i].category) + "</a>"
    //                 + "</div>"
    //                 + "<div class=\"description\">" + data.results[i].introduction + "</div>"
    //                 + "</div>"
    //                 + "<div class=\"extra content\">"
    //                 + "<span class=\"right floated\">" + "2016-11-16" + "</span>"
    //                 + "<span>阅读 " + data.results[i].views + "</span>"
    //                 + "</div></div></div>"
    //             )
    //         }
    //     })
    // }
    // else {
    //     $.get("http://127.0.0.1:8000/article/", function (data) {
    //
    //         for( i = 0; i < 10; i++) {
    //             if()
    //         }
    //     })
    // }

    url = 'http://127.0.0.1:8000/article/';

    $.get(
        url,
        data,
        function (back_data) {
            console.log(back_data);
            for( i = 0; i < back_data.results.length; i++) {
                console.log(i);
                $('#news-container').append(
                    "<div class=\"four wide column\">"
                    + "<div class=\"ui link card\" id=\"" + back_data.results[i].id + "\" onclick='getArticleDetail(" + back_data.results[i].id + ")'>"
                    + "<div class=\"image\">"
                    + "<img src=\"img/1.jpg\">"
                    + "</div>"
                    + "<div class=\"content\">"
                    + "<div class=\"header\">" + back_data.results[i].title + "</div>"
                    + "<div class=\"meta\">"
                    + "<a>" + getTag(back_data.results[i].category) + "</a>"
                    + "</div>"
                    + "<div class=\"description\">" + back_data.results[i].introduction + "</div>"
                    + "</div>"
                    + "<div class=\"extra content\">"
                    + "<span class=\"right floated\">" + "2016-11-16" + "</span>"
                    + "<span>阅读 " + back_data.results[i].views + "</span>"
                    + "</div></div></div>"
                )
            }

        }
    )
}


//拼接标签字段
function getTag(item) {
    var tag = '';
    for(var i = 0; i < item.length; i++) {
        if(i===0){
            tag = item[i];
        }
        else {
            tag += '/' + item[i];
        }
    }
    return tag;
}

var a = [];


//获取文章详情
function getArticleDetail(id) {

    var url = "http://127.0.0.1:8000/article/" + id + "/";

    $.get(url,function (data) {

        $('#news-title').empty();
        $('#news-author').empty();
        $('#news-editor').empty();
        $('#news-photographer').empty();
        $('#content').empty();
        $('#likes').empty();

        $('#news-title').append(data.title);
        $('#news-author').append(data.author);
        $('#news-editor').append(data.editor);
        $('#news-photographer').append(data.photographer);
        $('#content').append(data.content);
        $('#likes').append(data.likes);

    });

    $('#detail-model').modal('show');


}

init();