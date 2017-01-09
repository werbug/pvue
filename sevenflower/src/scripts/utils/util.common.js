var common = {
  render: function (str) {
    var body = document.body;
    body.innerHTML = str + body.innerHTML;
  },

  isAllLoaded(scope, cb) {
      var t_img; // 定时器
      var isLoad = true; // 控制变量

      // 判断图片加载状况，加载完成后回调
      return isImgLoad(cb);

      // 判断图片加载的函数
      function isImgLoad(callback) {
          // 查找所有图片，迭代处理
          $(scope).find('img').each(function() {
              // 找到为0就将isLoad设为false，并退出each
              if (this.height === 0) {
                  isLoad = false;
                  return false;
              }
          });
          // 为true，没有发现为0的。加载完毕
          if (isLoad) {
              clearTimeout(t_img); // 清除定时器
              // 回调函数
              callback();
          // 为false，因为找到了没有加载完成的图，将调用定时器递归
          } else {
              isLoad = true;
              t_img = setTimeout(function() {
                  isImgLoad(callback); // 递归扫描
              }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
          }
      }
  },

  scroll: function (that) {
    var myScroll = new IScroll('#index-scroll', {
        probeType: 3,
        mouseWheel: true
    });

    var scrollHeight = 35;
    $('.head.hide').removeClass('hide');
    $('.foot.hide').removeClass('hide');
    myScroll.scrollBy(0, -scrollHeight);

    var head = $('.head img'),
        topImgHasClass = head.hasClass('up');
    var foot = $('.foot img'),
        bottomImgHasClass = head.hasClass('down');
    myScroll.on('scroll', function () {
        var y = this.y,
            maxY = this.maxScrollY - y;
        if (y >= 0) {
            !topImgHasClass && head.addClass('up');
            return '';
        }
        if (maxY >= 0) {
            !bottomImgHasClass && foot.addClass('down');
            return '';
        }
    });

    myScroll.on('scrollEnd', function () {
        if (this.y >= -scrollHeight && this.y < 0) {
            myScroll.scrollTo(0, -scrollHeight);
            head.removeClass('up');
        } else if (this.y >= 0) {
            head.attr('src', '/images/ajax-loader.gif');
            //TODO ajax下拉刷新数据

            setTimeout(function () {
                myScroll.scrollTo(0, -scrollHeight);
                head.removeClass('up');
                head.attr('src', '/images/arrow.png');
            }, 100);
        }

        var maxY = this.maxScrollY - this.y;
        if (maxY > -scrollHeight && maxY < 0) {
            var self = this;
            myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
            foot.removeClass('down')
        } else if (maxY >= 0) {
            foot.attr('src', '/images/ajax-loader.gif');
            //TODO ajax上拉加载数据
            var self = this;

            fetch('/api/more')
            .then(response => response.json())
            .then(res => {
              that.list = that.list.concat(res);

              myScroll.refresh();

              //myScroll.scrollTo(0, self.y + scrollHeight);
              myScroll.scrollTo(0, self.maxScrollY - 60);

              foot.removeClass('down');
              foot.attr('src', '/images/arrow.png');
            })
        }
    })
  },//scroll end
  mySwiper:	function (id){
		var id = new Swiper('#'+id, {
			autoplay: 5000,//可选选项，自动滑动
			initialSlide :0,//初始索引
			direction : 'horizontal',//滑动方向水平|垂直vertical
			speed:300,//滑动速度，滑动开始到结束的时间
			autoplayDisableOnInteraction : false,//手滑后自动播放不停止
			autoplayStopOnLast : false,//如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
			grabCursor : true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
			setWrapperSize :true,//开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到
			virtualTranslate : false,//true：Swiper不会移动
			roundLengths : true,//true将slide的宽和高取整(四舍五入)以防止某些分辨率的屏幕上文字或边界(border)模糊。
			autoHeight: true,//true时，wrapper和container会随着当前slide的高度而发生变化
		    pagination : '.swiper-pagination',//分页
		    paginationHide :false,//true隐藏分页器
		    paginationType : 'bullets',//分页器样式类型:‘bullets’  圆点（默认）‘fraction’  分式 ‘progress’  进度条‘custom’ 自定义
		    paginationClickable :true,//true时，点击分页器的指示点分页器会控制Swiper切换
			lazyLoading : true,//true开启图片延迟加载
			lazyLoadingInPrevNext : true,//将延迟加载应用到最接近的slide的图片（前一个和后一个slide）。
			lazyLoadingInPrevNextAmount : 2,//默认为1，提前1个slide加载图片，例如切换到第三个slide时加载第四个slide里面的图片。
			loop : true,//循环
			freeMode : false
		})//Swiper end

	}//mySwiper end
}//common end

module.exports = common;
