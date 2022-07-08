import{_ as e,o as n,c as r,a}from"./app.6944330c.js";const t={},i=a('<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h1><h2 id="\u542F\u52A8\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5BB9\u5668" aria-hidden="true">#</a> \u542F\u52A8\u5BB9\u5668</h2><p>docker run --name nginx-test -p 8080:80 -d nginx</p><ul><li><p><strong>--name nginx-test</strong>\uFF1A\u5BB9\u5668\u540D\u79F0\u3002</p></li><li><p><strong>-p 8080:80</strong>\uFF1A \u7AEF\u53E3\u8FDB\u884C\u6620\u5C04\uFF0C\u5C06\u672C\u5730 8080 \u7AEF\u53E3\u6620\u5C04\u5230\u5BB9\u5668\u5185\u90E8\u7684 80 \u7AEF\u53E3\u3002</p></li><li><p><strong>-d nginx</strong>\uFF1A \u8BBE\u7F6E\u5BB9\u5668\u5728\u5728\u540E\u53F0\u4E00\u76F4\u8FD0\u884C\u3002</p><p>1.\u8FDB\u5165 docker \u7EC8\u7AEF\u53D1\u73B0\u4F1A\u53D1\u73B0 vi \u6216\u8005 vim \u547D\u4EE4\u6CA1\u6709\u2F64\uFF0Capt-get update \u540E apt-get install vim</p></li></ul><p>\u4FEE\u6539 nginx \u914D\u7F6E cd /etc/nginx</p><p>vim nginx.conf</p><h4 id="\u67E5\u770B\u6620\u5C04\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6620\u5C04\u7AEF\u53E3" aria-hidden="true">#</a> \u67E5\u770B\u6620\u5C04\u7AEF\u53E3</h4><p>1.\u5217\u8868 docker ps 2.\u67E5\u770B\u67D0\u4E00\u4E2A docker port xx(id)</p>',8),d=[i];function o(c,s){return n(),r("div",null,d)}var h=e(t,[["render",o],["__file","docker.html.vue"]]);export{h as default};
