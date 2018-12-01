/**
 * created by shuke on 2018424
 * v0.2
 */

//获取元素方法  $$()
function $$(ele) {
    //正则替换所有的空格
    ele=ele.replace(/\s/g,"")
    //获取第一个非空格的字符
    var tmp=ele.charAt(0)
//        console.log(ele,tmp)
    //对第一个字符判断
    if(tmp=="#"){
        //获取相应元素
        var resdata=document.getElementById(ele.substring(1,ele.length))
        // console.log("传入的是ID",resdata)

    }else if(tmp=="."){
        var resdata=document.getElementsByClassName(ele.substring(1,ele.length))
        // console.log("传入的是CLASS",resdata)
    }else {
        var resdata=document.getElementsByTagName(ele)
        // console.log("传入的是元素",resdata)
    }
    return resdata;
}
//给表格动态添加行列 newtable(表格,行,列)
function newtable(tid,rows,cols) {
    //querySelector 表示 选择 第一个元素（#id,.class,elemnt）
    //querySelectorAll 表示获取的是一个元素组 == getElementsByClassName
    var omytable=document.querySelector(tid)
    omytable.innerHTML=""
    for(var i=0;i<rows;i++){
        var tr=omytable.insertRow()
        for(var j=0;j<cols;j++){
            var td=tr.insertCell()
            td.innerHTML=i+1+"行，"+(j+1)+"列"
        }
    }
}