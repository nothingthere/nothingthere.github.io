jQuery.fn.slider=function(e){function i(e){var i="+="+-e*n;r.animate({left:i},"slow",function(){var e=parseFloat(r.css("left"));e==-n*(d-1)&&r.css("left",-n),0==e&&r.css("left",-n*(d-2)),a&&1!=f&&w.eq(f).trigger("inView")})}function s(){f==d-1&&(f=1),0==f&&(f=d-2),h.eq(f-1).addClass("on").siblings().removeClass("on")}var t=$(this);if(t.length<=1)return t;e=e||{};var n=e.width,l=e.height,d=this.length+2,a=jQuery.fn.lazyload&&e.lazyload||!1;n&&l||console.error("没有提供滑块的宽度或高度"),html={outer:'<div class="slide"><div class="slide-list"></div></div>',prev:"<span class='slide-prev'>prev</span>",next:"<span class='slide-next'>next</span>",btns:"<ul class='slide-btns'>"};for(var o=0;o<this.length;o++)html.btns+="<li>"+o+"1</li>";html.btns+="</ul>",t.wrapAll(html.outer).addClass("slide-item");var r=t.parent(),c=r.parent(),f=1,p={slide:{height:l,overflow:"hidden",position:"relative",width:n},slideList:{width:n,height:l,position:"absolute",left:-n,top:0},slideItem:{width:n,position:"absolute",top:0},jumpTop:{top:l/2-12}};t.eq(0).clone(!0).appendTo(r),t.eq(-1).clone(!0).prependTo(r),c.append(html.prev+html.next+html.btns).css(p.slide),r.css(p.slideList).find(".slide-item").css(p.slideItem).each(function(e,i){$(i).css("left",e*n)});var h=c.find(".slide-btns > li"),u=c.find(".slide-prev"),v=c.find(".slide-next"),m=c.find(".slide-item"),g=m.eq(1),w=m.slice(2).add(m.eq(0));return u.add(v).css(p.jumpTop),s(),u.click(function(e){r.is(":animated")||(e.preventDefault(),f-=1,s(),i(-1))}),v.click(function(e){r.is(":animated")||(e.preventDefault(),f+=1,s(),i(1))}),u.add(v).mouseenter(function(e){$(this).addClass("on")}).mouseleave(function(e){$(this).removeClass("on")}),h.click(function(e){if(!r.is(":animated")){e.preventDefault();var t=$(this).index(),n=t+1-f;f+=n,s(),i(n)}}),a&&(g.add(w).initLazy(),g.find("img").lazyload({effect:"fadeIn",threshold:200}),w.bind("inView",function(e){console.log("invew"),w.find("img").lazyload({effect:"show"})})),t};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5zbGlkZXIuanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiZm4iLCJzbGlkZXIiLCJvcHRpb25zIiwiZ28iLCJzdGVwIiwib2Zmc2V0Iiwid2lkdGgiLCJzbGlkZUxpc3QiLCJhbmltYXRlIiwibGVmdCIsIm5ld0xlZnQiLCJwYXJzZUZsb2F0IiwiY3NzIiwiaXRlbXNOdW0iLCJsYXp5bG9hZCIsImN1cnJlbnRJbmRleCIsInJlc3RHcm91cCIsImVxIiwidHJpZ2dlciIsInNob3dCdXR0b24iLCJidG5zIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwiJHRoaXMiLCIkIiwidGhpcyIsImxlbmd0aCIsImhlaWdodCIsImNvbnNvbGUiLCJlcnJvciIsImh0bWwiLCJvdXRlciIsInByZXYiLCJuZXh0IiwiaSIsIndyYXBBbGwiLCJwYXJlbnQiLCJzbGlkZSIsInN0eWxlcyIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0b3AiLCJzbGlkZUl0ZW0iLCJqdW1wVG9wIiwiY2xvbmUiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImFwcGVuZCIsImZpbmQiLCJlYWNoIiwiaW5kZXgiLCJlbCIsInNsaWRlSXRlbXMiLCJmaXJzdEdyb3VwIiwic2xpY2UiLCJhZGQiLCJjbGljayIsImV2ZW50IiwiaXMiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiaW5pdExhenkiLCJlZmZlY3QiLCJ0aHJlc2hvbGQiLCJiaW5kIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFpQkFBLE9BQU9DLEdBQUdDLE9BQVMsU0FBU0MsR0F5RnhCLFFBQVNDLEdBQUdDLEdBQ1IsR0FBSUMsR0FBUyxNQUFTRCxFQUFPRSxDQUU3QkMsR0FBVUMsU0FBVUMsS0FBTUosR0FBVSxPQUFRLFdBSXhDLEdBQUlLLEdBQVVDLFdBQVdKLEVBQVVLLElBQUksUUFDbkNGLEtBQVlKLEdBQVNPLEVBQVcsSUFDaENOLEVBQVVLLElBQUksUUFBU04sR0FHWixHQUFYSSxHQUNBSCxFQUFVSyxJQUFJLFFBQVNOLEdBQVNPLEVBQVcsSUFHNUNDLEdBQTRCLEdBQWhCQyxHQUNYQyxFQUFVQyxHQUFHRixHQUFjRyxRQUFRLFlBTy9DLFFBQVNDLEtBRURKLEdBQWdCRixFQUFXLElBQzNCRSxFQUFlLEdBR0MsR0FBaEJBLElBQ0FBLEVBQWVGLEVBQVcsR0FFOUJPLEVBQUtILEdBQUdGLEVBQWUsR0FBR00sU0FBUyxNQUFNQyxXQUFXQyxZQUFZLE1BekhwRSxHQUFJQyxHQUFRQyxFQUFFQyxLQUVkLElBQUlGLEVBQU1HLFFBQVUsRUFDaEIsTUFBT0gsRUFDWHRCLEdBQVVBLEtBRVYsSUFBSUksR0FBUUosRUFBUUksTUFDaEJzQixFQUFTMUIsRUFBUTBCLE9BQ2pCZixFQUFXYSxLQUFLQyxPQUFTLEVBQ3pCYixFQUFZZixPQUFPQyxHQUFHYyxVQUFZWixFQUFRWSxXQUFhLENBT3REUixJQUFVc0IsR0FDWEMsUUFBUUMsTUFBTSxnQkFHbEJDLE1BQ0lDLE1BQU8sMERBQ1BDLEtBQU0sdUNBQ05DLEtBQU0sdUNBQ05kLEtBQU0sMEJBSVYsS0FBSyxHQUFJZSxHQUFJLEVBQUdBLEVBQUlULEtBQUtDLE9BQVFRLElBQzdCSixLQUFLWCxNQUFTLE9BQVNlLEVBQUksUUFFL0JKLE1BQUtYLE1BQVEsUUFFYkksRUFBTVksUUFBUUwsS0FBS0MsT0FBT1gsU0FBUyxhQUNuQyxJQUFJZCxHQUFZaUIsRUFBTWEsU0FDbEJDLEVBQVEvQixFQUFVOEIsU0FFbEJ0QixFQUFlLEVBRWZ3QixHQUNJRCxPQUVJVixPQUFRQSxFQUNSWSxTQUFVLFNBQ1ZDLFNBQVUsV0FDVm5DLE1BQU9BLEdBRVhDLFdBQ0lELE1BQU9BLEVBQ1BzQixPQUFRQSxFQUNSYSxTQUFVLFdBQ1ZoQyxNQUFPSCxFQUNQb0MsSUFBSyxHQUVUQyxXQUNJckMsTUFBT0EsRUFDUG1DLFNBQVUsV0FDVkMsSUFBSyxHQUVURSxTQUNJRixJQUFLZCxFQUFTLEVBQUksSUFHOUJKLEdBQU1QLEdBQUcsR0FBRzRCLE9BQU0sR0FBTUMsU0FBU3ZDLEdBQ2pDaUIsRUFBTVAsR0FBRyxJQUFJNEIsT0FBTSxHQUFNRSxVQUFVeEMsR0FFbkMrQixFQUFNVSxPQUFPakIsS0FBS0UsS0FBT0YsS0FBS0csS0FBT0gsS0FBS1gsTUFBTVIsSUFBSTJCLEVBQU9ELE9BQzNEL0IsRUFBVUssSUFBSTJCLEVBQU9oQyxXQUNoQjBDLEtBQUssZUFDTHJDLElBQUkyQixFQUFPSSxXQUNYTyxLQUFLLFNBQVNDLEVBQU9DLEdBQ2xCM0IsRUFBRTJCLEdBQUl4QyxJQUFJLE9BQVF1QyxFQUFRN0MsSUFHbEMsSUFBSWMsR0FBT2tCLEVBQU1XLEtBQUssb0JBQ2xCaEIsRUFBT0ssRUFBTVcsS0FBSyxlQUNsQmYsRUFBT0ksRUFBTVcsS0FBSyxlQUNsQkksRUFBYWYsRUFBTVcsS0FBSyxlQUV4QkssRUFBYUQsRUFBV3BDLEdBQUcsR0FFM0JELEVBQVlxQyxFQUFXRSxNQUFNLEdBQUdDLElBQUlILEVBQVdwQyxHQUFHLEdBeUd0RCxPQXRHQWdCLEdBQUt1QixJQUFJdEIsR0FBTXRCLElBQUkyQixFQUFPSyxTQXdDMUJ6QixJQUdBYyxFQUFLd0IsTUFBTSxTQUFTQyxHQUNabkQsRUFBVW9ELEdBQUcsZUFFakJELEVBQU1FLGlCQUNON0MsR0FBZ0IsRUFDaEJJLElBQ0FoQixFQUFHLE9BRVArQixFQUFLdUIsTUFBTSxTQUFTQyxHQUNabkQsRUFBVW9ELEdBQUcsZUFFakJELEVBQU1FLGlCQUNON0MsR0FBZ0IsRUFDaEJJLElBQ0FoQixFQUFHLE1BR1A4QixFQUFLdUIsSUFBSXRCLEdBQ0oyQixXQUFXLFNBQVNILEdBQ2pCakMsRUFBRUMsTUFBTUwsU0FBUyxRQUVwQnlDLFdBQVcsU0FBU0osR0FDakJqQyxFQUFFQyxNQUFNSCxZQUFZLFFBSTVCSCxFQUFLcUMsTUFBTSxTQUFTQyxHQUNoQixJQUFJbkQsRUFBVW9ELEdBQUcsYUFBakIsQ0FFQUQsRUFBTUUsZ0JBRU4sSUFBSXpCLEdBQUlWLEVBQUVDLE1BQU15QixRQUNaL0MsRUFBUStCLEVBQUksRUFBS3BCLENBQ3JCQSxJQUFnQlgsRUFDaEJlLElBQ0FoQixFQUFHQyxNQUlIVSxJQUtBd0MsRUFBV0UsSUFBSXhDLEdBQVcrQyxXQUcxQlQsRUFBV0wsS0FBSyxPQUFPbkMsVUFBV2tELE9BQVEsU0FBVUMsVUFBVyxNQUUvRGpELEVBQVVrRCxLQUFLLFNBQVUsU0FBU1IsR0FDOUI3QixRQUFRc0MsSUFBSSxTQUNabkQsRUFBVWlDLEtBQUssT0FBT25DLFVBQVdrRCxPQUFRLFlBUTFDeEMiLCJmaWxlIjoianF1ZXJ5LnNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIOawtOW5s+aXoOe8nea7muWKqOaPkuS7tlxuLy8g5Y6f55CGOlxuLy8gICAgIOWwhumcgOimgea7muWKqOeahOWFg+e0oOWFi+mahuacgOWJjeacgOWQjuS4pOS4qlxuLy8gICAgIOWkluWMheijueS4pOWxgiwuc2xpZGUgLnNsaWRlLWxpc3Rcbi8vICAgICAuc2xpZGU655u45a+55a6a5L2NXG4vLyAgICAgLnNsaWRlLWxpc3Tnu53lr7nlrprkvY0sdG9wIDAsIGxlZnQgLea7muWKqOWFg+e0oOWuveW6plxuLy8gICAgIOmcgOimgea7muWKqOeahOWFg+e0oOe7neWvueWumuS9jeWIsC5zbGlkZS1saXN0LOawtOW5s+aOkuWIl+WcqOWFtuS4rVxuLy8gICAgIOmAmui/h+WKqOeUu+aUueWPmC5zbGlkZS1saXN055qEbGVmdOWAvOWunueOsOaXoOe8nea7muWKqFxuLy8gICAgIC5zbGlkZSxzbGlkZS1saXN055qE5qC35byP6YCa6L+HanPliJ3lp4vljJbml7borr7nva7lrozmiJAsIOagt+W8j+ihqOiuvue9ri5zbGlkZS1wcmV2IC5zbGlkZS1uZXh0IC5zbGlkZS1idG5zIOeahOagt+W8j1xuLy8gICAgIOaJgOmcgOa7muWKqOWFg+e0oOS4quaVsOWkp+S6jjHkuKrml7bmiY3lrp7njrBcbi8vYnVnOiDkuI3og73oh6rliqjojrflj5bpnIDopoHmu5rliqjlhYPntKDnmoTpq5jluqYs6ZyA6KaB5omL5Yqo6K6+572ub3B0aW9uc1xuLy8g5Y+C5pWwOiBvcHRpb25zW3dpZHRoLCBoZWlnaHQsIGJ0bkhlaWdodF1cbi8vIHdpZHRoOiDpnIDopoHmu5rliqjlhYPntKDnmoTlrr3luqZcbi8vIGhlaWdodDog6ZyA6KaB5rua5Yqo5YWD57Sg55qE6auY5bqmXG4vLyBidG5zSGVpZ2h0OiDkuLrmlL7nva7kuIvmlrnmjInpkq7miYDpnIDopoHnmoTpq5jluqZcbi8vIOivtOaYjjrpnIDopoHmiYvliqjorr7nva7pq5jluqblkozlrr3luqZcblxualF1ZXJ5LmZuLnNsaWRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgIC8vIOWmguaenOWFg+e0oOS4jei2szLkuKrkuI3ov5vooYzmraTmk43kvZxcbiAgICBpZiAoJHRoaXMubGVuZ3RoIDw9IDEpXG4gICAgICAgIHJldHVybiAkdGhpcztcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAvLyDov5jkvJrlhYvpmobpppbkvY3kuKTkuKrljp/lrZAs5omA5LulKzJcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCxcbiAgICAgICAgaXRlbXNOdW0gPSB0aGlzLmxlbmd0aCArIDIsXG4gICAgICAgIGxhenlsb2FkID0gKGpRdWVyeS5mbi5sYXp5bG9hZCAmJiBvcHRpb25zLmxhenlsb2FkKSB8fCBmYWxzZTtcblxuICAgIC8vIHZhciBfb2xkRGlzcGxheSA9IHRoaXMuY3NzKFwiZGlzcGxheVwiKTtcbiAgICAvLyBoZWlnaHQgPSB0aGlzLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAvLyB3aWR0aCA9IHRoaXMuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpLm91dGVyV2lkdGgodHJ1ZSlcbiAgICAvLyB0aGlzLmNzcyhcImRpc3BsYXlcIiwgX29sZERpc3BsYXkpO1xuICAgIC8vIOWmguaenOayoeacieaPkOS+m+mrmOW6puWSjOWuveW6puaKpemUmVxuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi5rKh5pyJ5o+Q5L6b5ruR5Z2X55qE5a695bqm5oiW6auY5bqmXCIpXG4gICAgfVxuICAgIC8vIOWinua3u+eahGh0bWxcbiAgICBodG1sID0ge1xuICAgICAgICBvdXRlcjogJzxkaXYgY2xhc3M9XCJzbGlkZVwiPjxkaXYgY2xhc3M9XCJzbGlkZS1saXN0XCI+PC9kaXY+PC9kaXY+JyxcbiAgICAgICAgcHJldjogXCI8c3BhbiBjbGFzcz0nc2xpZGUtcHJldic+cHJldjwvc3Bhbj5cIixcbiAgICAgICAgbmV4dDogXCI8c3BhbiBjbGFzcz0nc2xpZGUtbmV4dCc+bmV4dDwvc3Bhbj5cIixcbiAgICAgICAgYnRuczogXCI8dWwgY2xhc3M9J3NsaWRlLWJ0bnMnPlwiXG4gICAgfTtcblxuICAgIC8vIOWIneWni+WMlmJ0biBodG1sXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGh0bWwuYnRucyArPSAoXCI8bGk+XCIgKyBpICsgMSArIFwiPC9saT5cIik7XG4gICAgfVxuICAgIGh0bWwuYnRucyArPSBcIjwvdWw+XCI7XG4gICAgLy8g5bCG5YWL6ZqG55qE5Lik5Liq5YWD57Sg5Yqg5LiK5Y67XG4gICAgJHRoaXMud3JhcEFsbChodG1sLm91dGVyKS5hZGRDbGFzcyhcInNsaWRlLWl0ZW1cIik7XG4gICAgdmFyIHNsaWRlTGlzdCA9ICR0aGlzLnBhcmVudCgpLFxuICAgICAgICBzbGlkZSA9IHNsaWRlTGlzdC5wYXJlbnQoKSxcbiAgICAgICAgLy8g5b2T5YmN5Y+v6KeBaXRlbeeahOe0ouW8lVxuICAgICAgICBjdXJyZW50SW5kZXggPSAxLFxuICAgICAgICAvLyAuc2xpZGXlkowuc2xpZGUtbGlzdOeahOagt+W8j1xuICAgICAgICBzdHlsZXMgPSB7XG4gICAgICAgICAgICBzbGlkZToge1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNsaWRlTGlzdDoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IC13aWR0aCxcbiAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbGlkZUl0ZW06IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBqdW1wVG9wOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBoZWlnaHQgLyAyIC0gMTJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAkdGhpcy5lcSgwKS5jbG9uZSh0cnVlKS5hcHBlbmRUbyhzbGlkZUxpc3QpO1xuICAgICR0aGlzLmVxKC0xKS5jbG9uZSh0cnVlKS5wcmVwZW5kVG8oc2xpZGVMaXN0KTtcbiAgICAvLyDorr7nva4uc2xpZGUsIC5zbGlkZS1saXN0LCBzbGlkZS1jaGlsZOeahOagt+W8j1xuICAgIHNsaWRlLmFwcGVuZChodG1sLnByZXYgKyBodG1sLm5leHQgKyBodG1sLmJ0bnMpLmNzcyhzdHlsZXMuc2xpZGUpO1xuICAgIHNsaWRlTGlzdC5jc3Moc3R5bGVzLnNsaWRlTGlzdClcbiAgICAgICAgLmZpbmQoXCIuc2xpZGUtaXRlbVwiKVxuICAgICAgICAuY3NzKHN0eWxlcy5zbGlkZUl0ZW0pXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICAgICAgJChlbCkuY3NzKFwibGVmdFwiLCBpbmRleCAqIHdpZHRoKVxuICAgICAgICB9KTtcblxuICAgIHZhciBidG5zID0gc2xpZGUuZmluZChcIi5zbGlkZS1idG5zID4gbGlcIiksXG4gICAgICAgIHByZXYgPSBzbGlkZS5maW5kKFwiLnNsaWRlLXByZXZcIiksXG4gICAgICAgIG5leHQgPSBzbGlkZS5maW5kKFwiLnNsaWRlLW5leHRcIiksXG4gICAgICAgIHNsaWRlSXRlbXMgPSBzbGlkZS5maW5kKFwiLnNsaWRlLWl0ZW1cIiksXG4gICAgICAgIC8vIOeUqOS6jmxhenlsb2Fk55qE5YiG57uEXG4gICAgICAgIGZpcnN0R3JvdXAgPSBzbGlkZUl0ZW1zLmVxKDEpLFxuICAgICAgICAvLyDmgI7moLfkuLrkuI3lj6/op4HliqDkuIpsYXp5bG9hZD8/Pz9cbiAgICAgICAgcmVzdEdyb3VwID0gc2xpZGVJdGVtcy5zbGljZSgyKS5hZGQoc2xpZGVJdGVtcy5lcSgwKSk7XG5cbiAgICAvLyDorr7nva7nv7vpobXmjInpkq7nmoTnm7jlr7npq5jluqZcbiAgICBwcmV2LmFkZChuZXh0KS5jc3Moc3R5bGVzLmp1bXBUb3ApO1xuICAgIC8vIOWIneWni+WMluWujOaIkC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIOaguOW/g+WHveaVsCznp7vliqjlhYPntKAsc3RlcOS4uuenu+WKqOeahOagvOaVsCzmraPmlbDkuLrlkJHlj7Pnp7vliqgs6LSf5pWw5Li65ZCR5bem56e75YqoXG4gICAgZnVuY3Rpb24gZ28oc3RlcCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gXCIrPVwiICsgKC1zdGVwICogd2lkdGgpO1xuXG4gICAgICAgIHNsaWRlTGlzdC5hbmltYXRlKHsgbGVmdDogb2Zmc2V0IH0sIFwic2xvd1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy8g5ruR5Yqo5Yiw5pyA5YmN5ZKM5pyA5ZCO5pe2LOaUueWPmOWFg+e0oOS9jee9rizmrLrpqpfop4bop4lcbiAgICAgICAgICAgIC8vIOacgOWQjuaXtlxuICAgICAgICAgICAgdmFyIG5ld0xlZnQgPSBwYXJzZUZsb2F0KHNsaWRlTGlzdC5jc3MoXCJsZWZ0XCIpKTtcbiAgICAgICAgICAgIGlmIChuZXdMZWZ0ID09IC13aWR0aCAqIChpdGVtc051bSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVMaXN0LmNzcyhcImxlZnRcIiwgLXdpZHRoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5pyA5YmN5pe2XG4gICAgICAgICAgICBpZiAobmV3TGVmdCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVMaXN0LmNzcyhcImxlZnRcIiwgLXdpZHRoICogKGl0ZW1zTnVtIC0gMikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGxhenlsb2FkICYmIGN1cnJlbnRJbmRleCAhPSAxKXtcbiAgICAgICAgICAgICAgICByZXN0R3JvdXAuZXEoY3VycmVudEluZGV4KS50cmlnZ2VyKCdpblZpZXcnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIOaUueWPmOaMiemSruagt+W8jyznlLFjdXJyZW50SW5kZXjlhrPlrppcbiAgICBmdW5jdGlvbiBzaG93QnV0dG9uKCkge1xuICAgICAgICAvLyDmnIDlkI7ml7ZcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PSBpdGVtc051bSAtIDEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IDFcbiAgICAgICAgfVxuICAgICAgICAvLyDmnIDliY3ml7ZcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpdGVtc051bSAtIDI7XG4gICAgICAgIH1cbiAgICAgICAgYnRucy5lcShjdXJyZW50SW5kZXggLSAxKS5hZGRDbGFzcygnb24nKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvbicpO1xuXG4gICAgfVxuICAgIHNob3dCdXR0b24oKTtcblxuICAgIC8vIOe/u+mhteeCueWHu+aXtueahOS6i+S7tlxuICAgIHByZXYuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHNsaWRlTGlzdC5pcyhcIjphbmltYXRlZFwiKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgIHNob3dCdXR0b24oKTtcbiAgICAgICAgZ28oLTEpO1xuICAgIH0pO1xuICAgIG5leHQuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHNsaWRlTGlzdC5pcyhcIjphbmltYXRlZFwiKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3VycmVudEluZGV4ICs9IDE7XG4gICAgICAgIHNob3dCdXR0b24oKTtcbiAgICAgICAgZ28oMSk7XG4gICAgfSk7XG5cbiAgICBwcmV2LmFkZChuZXh0KVxuICAgICAgICAubW91c2VlbnRlcihmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm9uXCIpXG4gICAgICAgIH0pXG4gICAgICAgIC5tb3VzZWxlYXZlKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvbicpXG4gICAgICAgIH0pO1xuXG4gICAgLy8g54K55Ye75oyJ6ZKu5pe26Ze05pe25ruR5Yqo5LqL5Lu2XG4gICAgYnRucy5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoc2xpZGVMaXN0LmlzKFwiOmFuaW1hdGVkXCIpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyDooqvngrnlh7vnmoTmjInpkq7miYDlnKjnmoTntKLlvJVcbiAgICAgICAgdmFyIGkgPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgIHZhciBzdGVwID0gKGkgKyAxKSAtIGN1cnJlbnRJbmRleDtcbiAgICAgICAgY3VycmVudEluZGV4ICs9IHN0ZXA7XG4gICAgICAgIHNob3dCdXR0b24oKTtcbiAgICAgICAgZ28oc3RlcCk7XG4gICAgfSk7XG5cbiAgICAvLyDliqDlhaVsYXp5bG9hZOWKn+iDvVxuICAgIGlmIChsYXp5bG9hZCkge1xuICAgICAgICAvLyB2YXIgaW1hZ2VzID0gdGFyZ2V0LmZpbmQoXCJpbWdcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZpcnN0R3JvdXAuaHRtbCgpLCByZXN0R3JvdXAubGVuZ3RoKVxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW6ZyA6KaB5bu26L+f5Yqg6L2955qE5Zu+54mHXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzbGlkZUl0ZW1zKVxuICAgICAgICBmaXJzdEdyb3VwLmFkZChyZXN0R3JvdXApLmluaXRMYXp5KCk7XG5cbiAgICAgICAgLy8g5bu26L+f5Yqg6L2956ys5LiA57uE5YWD57SgXG4gICAgICAgIGZpcnN0R3JvdXAuZmluZChcImltZ1wiKS5sYXp5bG9hZCh7IGVmZmVjdDogXCJmYWRlSW5cIiwgdGhyZXNob2xkOiAyMDAgfSk7XG4gICAgICAgIC8vIOW7tui/n+WKoOi9veS4jeWPr+ingeWFg+e0oFxuICAgICAgICByZXN0R3JvdXAuYmluZCgnaW5WaWV3JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW52ZXdcIilcbiAgICAgICAgICAgIHJlc3RHcm91cC5maW5kKFwiaW1nXCIpLmxhenlsb2FkKHsgZWZmZWN0OiBcInNob3dcIiB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgICByZXR1cm4gJHRoaXM7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
