define(function(require, exports, module){return function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="row"><div class="col-lg-12 main-title-box"><div class="title-h3">' +((__t = (projinfo.name)) == null ? '' : __t) +'</div><div class="title-h5">by ' +((__t = (projinfo.fname)) == null ? '' : __t) +'</div></div></div><div class="row"><div class="col-lg-10 col-lg-offset-1"><div class="row"><div class="col-lg-8"><div class="main-info-box"><img src="' +((__t = (projinfo.img)) == null ? '' : __t) +'" alt=""><div class="pro-ject"><div><span class="sprite sprite-tag"></span>';_.each(projclass,function(ite,ind){;if(ite.id == projinfo.cid){;__p += '<span style="padding-right: 30px;" data-cid="' +((__t = (projinfo.cid)) == null ? '' : __t) +'">' +((__t = (ite.name)) == null ? '' : __t) +'</span>';};});__p += '<span class="sprite sprite-tv"></span><span>卫视推荐</span></div></div><p class="info-words">' +((__t = (projinfo.desc)) == null ? '' : __t) +'</p></div></div><div class="col-lg-4"><div class="main-info-left"><div class="info-number">' +((__t = (projinfo.dnum)) == null ? '' : __t) +'</div><div class="info-name">支持者</div><div class="info-number">￥' +((__t = (projinfo.dprice)) == null ? '' : __t) +'</div><div class="info-name">支持金额 <span>总金额￥' +((__t = (projinfo.totalprice)) == null ? '' : __t) +'</span></div><div class="info-number">' +((__t = (projinfo.rday)) == null ? '' : __t) +'</div>';if(projinfo.rday > 0){;__p += '<div class="info-name">剩余天数</div>';}else if( projinfo.totalprice > projinfo.dprice){;__p += '<div class="info-name">剩余天数<span style="color:#cecece">&nbsp;&nbsp;众筹失败</span></div>';}else{;__p += '<div class="info-name">剩余天数<span style="color:#73a688">&nbsp;&nbsp;已成功</span></div>';};__p += '<div class="btn-group clearfix">';if(projinfo.rday <= 0){;__p += '<span class="btn-support disabled">已结束</span>';}else{;__p += '<span class="btn-support">支持项目</span>';};__p += '<span class="sprite sprite-tv"></span><span>分享到圈子</span></div><div class="info-declare">该项目必须在 <span style="color: red">' +((__t = (projinfo.onlinetime)) == null ? '' : __t) +'</span> 完成￥' +((__t = (projinfo.totalprice)) == null ? '' : __t) +'，才募集成功开始项目。</div><div class="info-creater clearfix"><div class="creater-box"><div class="creater-title">' +((__t = (projinfo.fname)) == null ? '' : __t) +'</div><div class="creater-contact"><a class="blue" href="javascript:;">他的主页</a><a class="blue" href="javascript:;">联系他</a></div></div><img class="headimg" src="' +((__t = (projinfo.fimg)) == null ? '' : __t) +'" alt=""></div></div></div></div></div></div>';}return __p}});