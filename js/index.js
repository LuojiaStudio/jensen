
//当前页面的标签筛选集
var tag = [];
var url_next = '';
var url_base = 'http://api.whusu.com.cn/article/';


//打开投稿modal
$('#contribute-btn').click(function () {
    $('#contribute-model').modal('show');
});



//打开筛选modal
$('#select-btn').click(function () {
    $('#select-model').modal('show');
});

//确定筛选条件
$('#select-submit').click(function () {

    tag = [];

    var j = 0;

    for( var i = 0; i < 40; i++){
        //console.log(i);
        j = i + 14;
        item = {
            num:$('#s' + j).val(),
            name:$('#s' + j).attr('data-name'),
        }
        if($('#s' + j ).is(':checked' )){
            tag.push(item);
            console.log(tag);
        }
    }
    select(tag);
});

//TODO:删除标签
// $('#divider').on('click','.close-tab', function () {
//
//     console.log(this);
// });






//开始搜索
$('#search-btn').click(function () {

    var title = $('#search-input').val();

    var url_search = url_base + '?title=' + title;

    $('#news-container').empty();

    getArticleList(url_search);
    tag = [];
    addTab(tag);

});


//筛选
function select(tag) {

    var url_select = '';
    for( var i = 0; i < tag.length; i++) {

        if(i === 0){
            url_select += '?category=' + tag[i].num;
        }
        else {
            url_select += '&category=' + tag[i].num;
        }
    }

    $('#news-container').empty();

    getArticleList(url_base + url_select);
    addTab(tag);
    //console.log(tag);
}


//添加分割线标签
function addTab(tag) {
    $('#divider').empty();
    for( var i = 0; i < tag.length; i++) {
        $('#divider').append("<a class=\"ui blue tag label\" data-name=\"" + tag[i].num + "\">" + tag[i].name + "</a>")
    }
}


//页面初始化
function init() {
    var data = {};
    getArticleList(url_base);
    getTaginit("http://api.whusu.com.cn/category/");
}



//获取文章列表
function getArticleList(url) {

    $.get(
        url,
        function (back_data) {
            console.log(back_data);
            url_next = back_data.next;
            for( i = 0; i < back_data.results.length; i++) {
                //console.log(i);
                $('#news-container').append(
                    "<div class=\"four wide column news-col\">"
                    + "<div class=\"ui link card\" id=\"" + back_data.results[i].id + "\" onclick='getArticleDetail(" + back_data.results[i].id + ")'>"
                    + "<div class=\"image\">"
                    + "<img src=\""+ back_data.results[i].cover +"\">"
                    + "</div>"
                    + "<div class=\"content\">"
                    + "<div class=\"header\">" + back_data.results[i].title + "</div>"
                    + "<div class=\"meta\">"
                    + "<a>" + getTag(back_data.results[i].category) + "</a>"
                    + "</div>"
                    + "<div class=\"description\">" + back_data.results[i].introduction + "</div>"
                    + "</div>"
                    + "<div class=\"extra content\">"
                    + "<span class=\"right floated\">" + getTime(back_data.results[i].create_time) + "</span>"
                    + "<span>阅读 " + back_data.results[i].views + "</span>"
                    + "</div></div></div>"
                )
            }

        }
    )
}


//加载更多
$('#more').click(function () {
    if (url_next === null) {
        alert('没有啦');
    }
    $.get(
        url_next,
        function (back_data) {
            url_next = back_data.next;
            console.log(back_data);
            for( i = 0; i < back_data.results.length; i++) {
                //console.log(i);
                $('#news-container').append(
                    "<div class=\"four wide column\">"
                    + "<div class=\"ui link card\" id=\"" + back_data.results[i].id + "\" onclick='getArticleDetail(" + back_data.results[i].id + ")'>"
                    + "<div class=\"image\">"
                    + "<img src=\""+ back_data.results[i].cover +"\">"
                    + "</div>"
                    + "<div class=\"content\">"
                    + "<div class=\"header\">" + back_data.results[i].title + "</div>"
                    + "<div class=\"meta\">"
                    + "<a>" + getTag(back_data.results[i].category) + "</a>"
                    + "</div>"
                    + "<div class=\"description\">" + back_data.results[i].introduction + "</div>"
                    + "</div>"
                    + "<div class=\"extra content\">"
                    + "<span class=\"right floated\">" + getTime(back_data.results[i].create_time) + "</span>"
                    + "<span>阅读 " + back_data.results[i].views + "</span>"
                    + "</div></div></div>"
                )
            }

        }
    )
});



//分割时间
function getTime(time) {
    console.log(time);
    console.log(time.split("T", 1)[0]);
    return time.split("T", 1)[0]
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

    var url = "http://api.whusu.com.cn/article/" + id + "/";

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

function getTaginit(url) {


    $.get(url,function (data) {
        console.log(data);
        for( var i = 0; i < 8;i++) {
            $('#select-content').append(
                '<div class="ui checkbox">'
                + '<input type="checkbox" name="example" value="' + data.results[i].id + '" id="s' + data.results[i].id + '" data-name="'+ data.results[i].name +'">'
                + '<label>' + data.results[i].name + ' </label>'
                + '</div>'
            );
            if (i === 7) {
                $('#select-content').append('<br>');
            }
        }
            if(data.next == null) {
                return;
            }
            else getTaginit(data.next);

    })
}

init();


















































