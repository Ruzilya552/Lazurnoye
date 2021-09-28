"use strict";function slidersArrowAnimate(s,i){function e(){$(this).siblings().addClass("small")}function r(){$(this).siblings().removeClass("small")}var o=$("html");o.hasClass("no-touchevents")?(s.add(i).on("mouseenter",function(){e.call(this)}),s.add(i).on("mouseleave",function(){r.call(this)})):(s.add(i).on("touchstart",function(){e.call(this)}),s.add(i).on("touchend touchcancel",function(){r.call(this)}))}$(".js-slider-gallery").length&&$(".js-slider-gallery").each(function(){function s(s){o=r.find("[data-id="+s+"]");var i=r.find('[data-id="0"]')[0].offsetWidth;o.length&&r.css("transform","translateY(-"+i*s+"px)")}var i=$(this),e=i.parent().find(".js-slider-dots"),r=void 0,o=void 0;i.on("init reinit",function(){r=e.find(".gallery-dots"),s(0)}),i.slick({slidesToShow:1,slidesToScroll:1,dots:!0,focusOnSelect:!1,infinite:!0,mobileFirst:!0,arrows:!1,rows:0,asNavFor:".js-slider-descriptions",touchMove:!1,swipe:!1,initialSlide:0,appendDots:e,dotsClass:"gallery-dots",responsive:[{breakpoint:767,settings:{fade:!0}}]}),i.on("beforeChange",function(i,e,r,o){s(o)})}),$(".js-slider-descriptions").length&&$(".js-slider-descriptions").each(function(){function s(){var s=e.find(".slick-slide"),i=0;s.each(function(){var s=0;$(this).children().each(function(){s+=$(this).outerHeight(!0)}),s>i&&(i=s)}),s.height(i)}function i(){$(".js-slider-gallery").addClass("animate"),setTimeout(function(){$(".js-slider-gallery").removeClass("animate")},510)}var e=$(this),r=e.parent().find(".js-slider-arrow-prev"),o=e.parent().find(".js-slider-arrow-next"),n=e.parent().find(".js-description-dots");e.on("beforeChange",function(s,i,e,r){n.removeClass("active"),n.filter('[data-slide="'+r+'"]').addClass("active")}),$(".js-slider-descriptions").slick({slidesToShow:1,slidesToScroll:1,dots:!1,focusOnSelect:!1,infinite:!0,mobileFirst:!0,arrows:!0,prevArrow:r,nextArrow:o,vertical:!0,rows:0,asNavFor:".js-slider-gallery",touchMove:!1,swipe:!1,initialSlide:0}),$(window).on("load",function(){s(),e.slick("slickGoTo",0,!0)}),$(window).on("resize",s),n.on("click",function(){var s=$(this).data("slide");e.slick("slickGoTo",s,!1),i()}),r.add(o).on("click",function(s){i()}),slidersArrowAnimate(r,o)}),$(".js-photo-card-slider").each(function(){var s=$(this),i=s.parent().find(".js-slider-arrow-prev"),e=s.parent().find(".js-slider-arrow-next");s.slick({slidesToShow:1,slidesToScroll:1,dots:!1,focusOnSelect:!1,infinite:!0,mobileFirst:!0,arrows:!0,prevArrow:i,nextArrow:e,rows:2,slidesPerRow:1,initialSlide:0,responsive:[{breakpoint:767,settings:{rows:1,slidesPerRow:1,slidesToShow:2}},{breakpoint:1439,settings:{rows:1,slidesPerRow:1,slidesToShow:3}},{breakpoint:1679,settings:{rows:1,slidesPerRow:1,slidesToShow:4}}]}),slidersArrowAnimate(i,e)}),$(".js-trainer-slider").each(function(){var s=$(this),i=s.parent().find(".js-slider-arrow-prev"),e=s.parent().find(".js-slider-arrow-next");s.slick({slidesToShow:1,slidesToScroll:1,dots:!1,focusOnSelect:!1,infinite:!0,mobileFirst:!0,arrows:!0,prevArrow:i,nextArrow:e,rows:3,slidesPerRow:1,initialSlide:0,responsive:[{breakpoint:767,settings:{rows:1,slidesPerRow:1,slidesToShow:3}},{breakpoint:1023,settings:{rows:1,slidesPerRow:1,slidesToShow:4}}]}),slidersArrowAnimate(i,e)}),$(".js-gallery-slider").each(function(){var s=$(this),i=s.parent().find(".js-slider-arrow-prev"),e=s.parent().find(".js-slider-arrow-next");s.slick({slidesToShow:1,slidesToScroll:1,dots:!1,focusOnSelect:!1,infinite:!0,mobileFirst:!0,arrows:!0,prevArrow:i,nextArrow:e,rows:0,initialSlide:0}),slidersArrowAnimate(i,e)}),$(".js-news-slider").each(function(){var s=$(this),i=s.parent().find(".js-slider-arrow-prev"),e=s.parent().find(".js-slider-arrow-next");s.slick({slidesToShow:1,slidesToScroll:1,dots:!1,focusOnSelect:!1,infinite:!0,mobileFirst:!0,arrows:!0,prevArrow:i,nextArrow:e,rows:1,slidesPerRow:1,initialSlide:0}).on("beforeChange",function(i,e,r,o){var n=s.siblings(".b-news-cards__arrows").find(".js-current-slide");n.text(o+1)}),slidersArrowAnimate(i,e)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpYWxzL3NsaWRlcnMuanMiXSwibmFtZXMiOlsic2xpZGVyc0Fycm93QW5pbWF0ZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImFycm93Wm9vbUluIiwiJCIsInRoaXMiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwiYXJyb3dab29tT3V0IiwicmVtb3ZlQ2xhc3MiLCJodG1sIiwiaGFzQ2xhc3MiLCJhZGQiLCJvbiIsImNhbGwiLCJsZW5ndGgiLCJlYWNoIiwic2Nyb2xsRG90cyIsIm5leHRTbGlkZSIsImFjdGl2ZURvdCIsImRvdHMiLCJmaW5kIiwidG9wIiwib2Zmc2V0V2lkdGgiLCJjc3MiLCIkc2xpZGVyIiwiZG90c1dyYXAiLCJwYXJlbnQiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwibW9iaWxlRmlyc3QiLCJhcnJvd3MiLCJyb3dzIiwiYXNOYXZGb3IiLCJ0b3VjaE1vdmUiLCJzd2lwZSIsImluaXRpYWxTbGlkZSIsImFwcGVuZERvdHMiLCJkb3RzQ2xhc3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZmFkZSIsImV2ZW50IiwiY3VycmVudFNsaWRlIiwib3B0aW1pemVTbGlkZXNIZWlnaHQiLCIkc2xpZGVzIiwibWF4SGVpZ2h0Iiwic2xpZGVIZWlnaHQiLCJjaGlsZHJlbiIsIm91dGVySGVpZ2h0IiwiaGVpZ2h0IiwiY2lyY2xlQW5pbWF0ZSIsInNldFRpbWVvdXQiLCIkZG90cyIsImZpbHRlciIsInZlcnRpY2FsIiwid2luZG93IiwiZGF0YSIsImUiLCJzbGlkZXNQZXJSb3ciLCIkbnVtIiwidGV4dCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFFQSxTQUFTQSxxQkFBb0JDLEVBQVdDLEdBR3RDLFFBQVNDLEtBQ1BDLEVBQUVDLE1BQU1DLFdBQVdDLFNBQVMsU0FHOUIsUUFBU0MsS0FDUEosRUFBRUMsTUFBTUMsV0FBV0csWUFBWSxTQVBq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Q040QixhQUFjLEVBQ2RsQyxhQUFjLE9BSXBCN0Isb0JBQW9CQyxFQUFXQyxLQUVqQ0UsRUFBRSxzQkFBc0JZLEtBQUssV0FDM0IsR0FBSVMsR0FBVXJCLEVBQUVDLE1BQ1pKLEVBQVl3QixFQUFRRSxTQUFTTixLQUFLLHlCQUNsQ25CLEVBQVl1QixFQUFRRSxTQUFTTixLQUFLLHdCQUN0Q0ksR0FBUUcsT0FDTkMsYUFBYyxFQUNkQyxlQUFnQixFQUNoQlYsTUFBTSxFQUNOVyxlQUFlLEVBQ2ZDLFVBQVUsRUFDVkMsYUFBYSxFQUNiQyxRQUFRLEVBQ1JqQyxVQUFXQSxFQUNYQyxVQUFXQSxFQUNYaUMsS0FBTSxFQUNOSSxhQUFjLElBRWhCdkMsb0JBQW9CQyxFQUFXQyxLQUVqQ0UsRUFBRSxtQkFBbUJZLEtBQUssV0FDeEIsR0FBSVMsR0FBVXJCLEVBQUVDLE1BQ1pKLEVBQVl3QixFQUFRRSxTQUFTTixLQUFLLHlCQUNsQ25CLEVBQVl1QixFQUFRRSxTQUFTTixLQUFLLHdCQUN0Q0ksR0FBUUcsT0FDTkMsYUFBYyxFQUNkQyxlQUFnQixFQUNoQlYsTUFBTSxFQUNOVyxlQUFlLEVBQ2ZDLFVBQVUsRUFDVkMsYUFBYSxFQUNiQyxRQUFRLEVBQ1JqQyxVQUFXQSxFQUNYQyxVQUFXQSxFQUNYaUMsS0FBTSxFQUNONEIsYUFBYyxFQUNkeEIsYUFBYyxJQUNiMUIsR0FBRyxlQUFnQixTQUFVaUMsRUFBT2xCLEVBQU9tQixFQUFjN0IsR0FDMUQsR0FBSThDLEdBQU92QyxFQUFRbkIsU0FBUyx5QkFBeUJlLEtBQUssb0JBQzFEMkMsR0FBS0MsS0FBSy9DLEVBQVksS0FFeEJsQixvQkFBb0JDLEVBQVdDIiwiZmlsZSI6InBhcnRpYWxzL3NsaWRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gc2xpZGVyc0Fycm93QW5pbWF0ZShwcmV2QXJyb3csIG5leHRBcnJvdykge1xuICB2YXIgaHRtbCA9ICQoJ2h0bWwnKTtcblxuICBmdW5jdGlvbiBhcnJvd1pvb21JbigpIHtcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCkuYWRkQ2xhc3MoJ3NtYWxsJyk7XG4gIH1cblxuICBmdW5jdGlvbiBhcnJvd1pvb21PdXQoKSB7XG4gICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbWFsbCcpO1xuICB9XG5cbiAgaWYgKGh0bWwuaGFzQ2xhc3MoJ25vLXRvdWNoZXZlbnRzJykpIHtcbiAgICBwcmV2QXJyb3cuYWRkKG5leHRBcnJvdykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcnJvd1pvb21Jbi5jYWxsKHRoaXMpO1xuICAgIH0pO1xuICAgIHByZXZBcnJvdy5hZGQobmV4dEFycm93KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFycm93Wm9vbU91dC5jYWxsKHRoaXMpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHByZXZBcnJvdy5hZGQobmV4dEFycm93KS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFycm93Wm9vbUluLmNhbGwodGhpcyk7XG4gICAgfSk7XG4gICAgcHJldkFycm93LmFkZChuZXh0QXJyb3cpLm9uKCd0b3VjaGVuZCB0b3VjaGNhbmNlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFycm93Wm9vbU91dC5jYWxsKHRoaXMpO1xuICAgIH0pO1xuICB9XG59XG5cbmlmICgkKCcuanMtc2xpZGVyLWdhbGxlcnknKS5sZW5ndGgpIHtcbiAgJCgnLmpzLXNsaWRlci1nYWxsZXJ5JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzbGlkZXIgPSAkKHRoaXMpO1xuICAgIHZhciBkb3RzV3JhcCA9ICRzbGlkZXIucGFyZW50KCkuZmluZCgnLmpzLXNsaWRlci1kb3RzJyk7XG4gICAgdmFyIGRvdHMgPSB2b2lkIDA7XG4gICAgdmFyIGFjdGl2ZURvdCA9IHZvaWQgMDtcblxuICAgIGZ1bmN0aW9uIHNjcm9sbERvdHMobmV4dFNsaWRlKSB7XG4gICAgICBhY3RpdmVEb3QgPSBkb3RzLmZpbmQoXCJbZGF0YS1pZD1cIiArIG5leHRTbGlkZSArIFwiXVwiKTtcbiAgICAgIHZhciB0b3AgPSBkb3RzLmZpbmQoJ1tkYXRhLWlkPVwiMFwiXScpWzBdLm9mZnNldFdpZHRoO1xuXG4gICAgICBpZiAoYWN0aXZlRG90Lmxlbmd0aCkge1xuICAgICAgICBkb3RzLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoLScgKyB0b3AgKiBuZXh0U2xpZGUgKyAncHgpJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHNsaWRlci5vbignaW5pdCByZWluaXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb3RzID0gZG90c1dyYXAuZmluZCgnLmdhbGxlcnktZG90cycpO1xuICAgICAgc2Nyb2xsRG90cygwKTtcbiAgICB9KTtcbiAgICAkc2xpZGVyLnNsaWNrKHtcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICByb3dzOiAwLFxuICAgICAgYXNOYXZGb3I6ICcuanMtc2xpZGVyLWRlc2NyaXB0aW9ucycsXG4gICAgICB0b3VjaE1vdmU6IGZhbHNlLFxuICAgICAgc3dpcGU6IGZhbHNlLFxuICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgYXBwZW5kRG90czogZG90c1dyYXAsXG4gICAgICBkb3RzQ2xhc3M6ICdnYWxsZXJ5LWRvdHMnLFxuICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGZhZGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9KTtcbiAgICAkc2xpZGVyLm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuICAgICAgc2Nyb2xsRG90cyhuZXh0U2xpZGUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuaWYgKCQoJy5qcy1zbGlkZXItZGVzY3JpcHRpb25zJykubGVuZ3RoKSB7XG4gICQoJy5qcy1zbGlkZXItZGVzY3JpcHRpb25zJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzbGlkZXIgPSAkKHRoaXMpO1xuICAgIHZhciBwcmV2QXJyb3cgPSAkc2xpZGVyLnBhcmVudCgpLmZpbmQoJy5qcy1zbGlkZXItYXJyb3ctcHJldicpO1xuICAgIHZhciBuZXh0QXJyb3cgPSAkc2xpZGVyLnBhcmVudCgpLmZpbmQoJy5qcy1zbGlkZXItYXJyb3ctbmV4dCcpO1xuICAgIHZhciAkZG90cyA9ICRzbGlkZXIucGFyZW50KCkuZmluZCgnLmpzLWRlc2NyaXB0aW9uLWRvdHMnKTtcblxuICAgIGZ1bmN0aW9uIG9wdGltaXplU2xpZGVzSGVpZ2h0KCkge1xuICAgICAgdmFyICRzbGlkZXMgPSAkc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuICAgICAgdmFyIG1heEhlaWdodCA9IDA7XG4gICAgICAkc2xpZGVzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2xpZGVIZWlnaHQgPSAwO1xuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2xpZGVIZWlnaHQgPSBzbGlkZUhlaWdodCArICQodGhpcykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzbGlkZUhlaWdodCA+IG1heEhlaWdodCkge1xuICAgICAgICAgIG1heEhlaWdodCA9IHNsaWRlSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICRzbGlkZXMuaGVpZ2h0KG1heEhlaWdodCk7XG4gICAgfSAvLyBmdW5jdGlvbiBnYWxsZXJ5RG90c0FuaW1hdGUgKGUpIHtcbiAgICAvLyAgICAgbGV0IG5leHRTbGlkZTtcbiAgICAvLyAgICAgbGV0IGdhbGxlcnlkb3RzID0gJCgnLmpzLXNsaWRlci1nYWxsZXJ5JykucGFyZW50KCkuZmluZCgnLmdhbGxlcnktZG90cycpO1xuICAgIC8vICAgICAkKCcuanMtc2xpZGVyLWdhbGxlcnkgLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgLy8gICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2xpY2stYWN0aXZlJykpIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoJChlLmRlbGVnYXRlVGFyZ2V0KS5oYXNDbGFzcygnanMtc2xpZGVyLWFycm93LW5leHQnKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSBpICsgMTtcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSBpIC0gMTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG5leHRTbGlkZSwgJChnYWxsZXJ5ZG90cy5maW5kKCdsaScpW25leHRTbGlkZV0pLnBvc2l0aW9uKCkudG9wKVxuICAgIC8vICAgICBnYWxsZXJ5ZG90cy5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKC0nICsgJChnYWxsZXJ5ZG90cy5maW5kKCdsaScpW25leHRTbGlkZV0pLnBvc2l0aW9uKCkudG9wICsgJ3B4KScpXG4gICAgLy8gfVxuXG5cbiAgICBmdW5jdGlvbiBjaXJjbGVBbmltYXRlKCkge1xuICAgICAgJCgnLmpzLXNsaWRlci1nYWxsZXJ5JykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuanMtc2xpZGVyLWdhbGxlcnknKS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgfSwgNTEwKTtcbiAgICB9XG5cbiAgICAkc2xpZGVyLm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuICAgICAgJGRvdHMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJGRvdHMuZmlsdGVyKCdbZGF0YS1zbGlkZT1cIicgKyBuZXh0U2xpZGUgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgICQoJy5qcy1zbGlkZXItZGVzY3JpcHRpb25zJykuc2xpY2soe1xuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBkb3RzOiBmYWxzZSxcbiAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgIHByZXZBcnJvdzogcHJldkFycm93LFxuICAgICAgbmV4dEFycm93OiBuZXh0QXJyb3csXG4gICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgIHJvd3M6IDAsXG4gICAgICBhc05hdkZvcjogJy5qcy1zbGlkZXItZ2FsbGVyeScsXG4gICAgICB0b3VjaE1vdmU6IGZhbHNlLFxuICAgICAgc3dpcGU6IGZhbHNlLFxuICAgICAgaW5pdGlhbFNsaWRlOiAwXG4gICAgfSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgb3B0aW1pemVTbGlkZXNIZWlnaHQoKTtcbiAgICAgICRzbGlkZXIuc2xpY2soJ3NsaWNrR29UbycsIDAsIHRydWUpO1xuICAgIH0pO1xuICAgICQod2luZG93KS5vbigncmVzaXplJywgb3B0aW1pemVTbGlkZXNIZWlnaHQpO1xuICAgICRkb3RzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuZXh0U2xpZGUgPSAkKHRoaXMpLmRhdGEoJ3NsaWRlJyk7XG4gICAgICAkc2xpZGVyLnNsaWNrKCdzbGlja0dvVG8nLCBuZXh0U2xpZGUsIGZhbHNlKTtcbiAgICAgIGNpcmNsZUFuaW1hdGUoKTtcbiAgICB9KTtcbiAgICBwcmV2QXJyb3cuYWRkKG5leHRBcnJvdykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIGdhbGxlcnlEb3RzQW5pbWF0ZShlKTtcbiAgICAgIGNpcmNsZUFuaW1hdGUoKTtcbiAgICB9KTtcbiAgICBzbGlkZXJzQXJyb3dBbmltYXRlKHByZXZBcnJvdywgbmV4dEFycm93KTtcbiAgfSk7XG59XG5cbiQoJy5qcy1waG90by1jYXJkLXNsaWRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICB2YXIgJHNsaWRlciA9ICQodGhpcyk7XG4gIHZhciBwcmV2QXJyb3cgPSAkc2xpZGVyLnBhcmVudCgpLmZpbmQoJy5qcy1zbGlkZXItYXJyb3ctcHJldicpO1xuICB2YXIgbmV4dEFycm93ID0gJHNsaWRlci5wYXJlbnQoKS5maW5kKCcuanMtc2xpZGVyLWFycm93LW5leHQnKTtcbiAgJHNsaWRlci5zbGljayh7XG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgIGFycm93czogdHJ1ZSxcbiAgICBwcmV2QXJyb3c6IHByZXZBcnJvdyxcbiAgICBuZXh0QXJyb3c6IG5leHRBcnJvdyxcbiAgICByb3dzOiAyLFxuICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHJvd3M6IDEsXG4gICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgYnJlYWtwb2ludDogMTQzOSxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHJvd3M6IDEsXG4gICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgYnJlYWtwb2ludDogMTY3OSxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHJvd3M6IDEsXG4gICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0XG4gICAgICB9XG4gICAgfV1cbiAgfSk7XG4gIHNsaWRlcnNBcnJvd0FuaW1hdGUocHJldkFycm93LCBuZXh0QXJyb3cpO1xufSk7XG4kKCcuanMtdHJhaW5lci1zbGlkZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgdmFyICRzbGlkZXIgPSAkKHRoaXMpO1xuICB2YXIgcHJldkFycm93ID0gJHNsaWRlci5wYXJlbnQoKS5maW5kKCcuanMtc2xpZGVyLWFycm93LXByZXYnKTtcbiAgdmFyIG5leHRBcnJvdyA9ICRzbGlkZXIucGFyZW50KCkuZmluZCgnLmpzLXNsaWRlci1hcnJvdy1uZXh0Jyk7XG4gICRzbGlkZXIuc2xpY2soe1xuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgcHJldkFycm93OiBwcmV2QXJyb3csXG4gICAgbmV4dEFycm93OiBuZXh0QXJyb3csXG4gICAgcm93czogMyxcbiAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICByb3dzOiAxLFxuICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDEwMjMsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICByb3dzOiAxLFxuICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNFxuICAgICAgfVxuICAgIH1dXG4gIH0pO1xuICBzbGlkZXJzQXJyb3dBbmltYXRlKHByZXZBcnJvdywgbmV4dEFycm93KTtcbn0pO1xuJCgnLmpzLWdhbGxlcnktc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gIHZhciAkc2xpZGVyID0gJCh0aGlzKTtcbiAgdmFyIHByZXZBcnJvdyA9ICRzbGlkZXIucGFyZW50KCkuZmluZCgnLmpzLXNsaWRlci1hcnJvdy1wcmV2Jyk7XG4gIHZhciBuZXh0QXJyb3cgPSAkc2xpZGVyLnBhcmVudCgpLmZpbmQoJy5qcy1zbGlkZXItYXJyb3ctbmV4dCcpO1xuICAkc2xpZGVyLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgZG90czogZmFsc2UsXG4gICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgYXJyb3dzOiB0cnVlLFxuICAgIHByZXZBcnJvdzogcHJldkFycm93LFxuICAgIG5leHRBcnJvdzogbmV4dEFycm93LFxuICAgIHJvd3M6IDAsXG4gICAgaW5pdGlhbFNsaWRlOiAwXG4gIH0pO1xuICBzbGlkZXJzQXJyb3dBbmltYXRlKHByZXZBcnJvdywgbmV4dEFycm93KTtcbn0pO1xuJCgnLmpzLW5ld3Mtc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gIHZhciAkc2xpZGVyID0gJCh0aGlzKTtcbiAgdmFyIHByZXZBcnJvdyA9ICRzbGlkZXIucGFyZW50KCkuZmluZCgnLmpzLXNsaWRlci1hcnJvdy1wcmV2Jyk7XG4gIHZhciBuZXh0QXJyb3cgPSAkc2xpZGVyLnBhcmVudCgpLmZpbmQoJy5qcy1zbGlkZXItYXJyb3ctbmV4dCcpO1xuICAkc2xpZGVyLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgZG90czogZmFsc2UsXG4gICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgYXJyb3dzOiB0cnVlLFxuICAgIHByZXZBcnJvdzogcHJldkFycm93LFxuICAgIG5leHRBcnJvdzogbmV4dEFycm93LFxuICAgIHJvd3M6IDEsXG4gICAgc2xpZGVzUGVyUm93OiAxLFxuICAgIGluaXRpYWxTbGlkZTogMFxuICB9KS5vbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICB2YXIgJG51bSA9ICRzbGlkZXIuc2libGluZ3MoJy5iLW5ld3MtY2FyZHNfX2Fycm93cycpLmZpbmQoJy5qcy1jdXJyZW50LXNsaWRlJyk7XG4gICAgJG51bS50ZXh0KG5leHRTbGlkZSArIDEpO1xuICB9KTtcbiAgc2xpZGVyc0Fycm93QW5pbWF0ZShwcmV2QXJyb3csIG5leHRBcnJvdyk7XG59KTsiXX0=
