import{_ as t,r as l,o as i,c as p,d as n,b as e,e as s,a as o}from"./app.6944330c.js";const c={},d=n("h1",{id:"mysql",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mysql","aria-hidden":"true"},"#"),s(" mySql")],-1),r=n("h2",{id:"\u4E0B\u8F7D\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E0B\u8F7D\u5B89\u88C5","aria-hidden":"true"},"#"),s(" \u4E0B\u8F7D\u5B89\u88C5")],-1),u={href:"https://www.cnblogs.com/yinzhengjie/p/10125609.html",target:"_blank",rel:"noopener noreferrer"},k=s("\u6587\u7AE0"),v=s("1."),m={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},b=s("\u4E0B\u8F7D\u5730\u5740"),h=s("\u3001"),y={href:"https://mirrors.ustc.edu.cn/mysql-ftp/Downloads/",target:"_blank",rel:"noopener noreferrer"},_=s("\u4E2D\u79D1\u5927\u955C\u50CF"),w=n("p",null,"2.\u9009\u62E9\u7248\u672C\u4E0B\u8F7D",-1),g=n("p",null,"3.\u8DF3\u8FC7\u767B\u5F55",-1),E=n("p",null,"4.\u5B89\u88C5\u5305\u5B89\u88C5\uFF08\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u6709\u521D\u59CB\u5BC6\u7801\u8BB0\u6216\u8005\u81EA\u5DF1\u8F93\u5165\u5BC6\u7801\uFF09\uFF0C 12345678",-1),f=s("5."),q={href:"https://macwk.com/soft/navicat-premium",target:"_blank",rel:"noopener noreferrer"},N=s("\u56FE\u5F62\u5316\u5DE5\u5177"),S=s("6."),x={href:"https://www.yiibai.com/mysql/sample-database.html",target:"_blank",rel:"noopener noreferrer"},I=s("\u5B66\u4E60\u6559\u7A0B"),T=s("7."),A={href:"https://wenku.baidu.com/view/59e774567cd5360cba1aa8114431b90d6c85893f.html",target:"_blank",rel:"noopener noreferrer"},R=s("\u5B89\u88C5\u540E\u7EC8\u7AEF\u73AF\u5883\u53D8\u91CF\u95EE\u9898"),H=o(`<h2 id="\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5" aria-hidden="true">#</a> \u94FE\u63A5</h2><p>\u670D\u52A1\u5668\u94FE\u63A5\u5916\u7F51\u6570\u636E\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u547D\u4EE4\uFF1A</span>
mysql -h <span class="token function">hostname</span> -u username -p


<span class="token comment"># \u5E38\u89C4\uFF1A </span>
<span class="token comment"># hostname\uFF1A\u66FF\u6362\u4E3A\u76EE\u6807 MySQL \u6570\u636E\u5E93\u5B9E\u4F8B\u7684\u5916\u7F51\u5730\u5740</span>
<span class="token comment"># port\uFF1A\u66FF\u6362\u4E3A\u5916\u7F51\u7AEF\u53E3\u53F7</span>
<span class="token comment"># username\uFF1A\u66FF\u6362\u4E3A\u5916\u7F51\u8FDE\u63A5\u7528\u6237\u540D</span>

<span class="token comment"># \u4F8B\u5B50</span>

mysql -h bj-cdb-bt5sq8g0.sql.tencentcdb.com -P <span class="token number">60187</span> -u jazh -p

<span class="token comment"># \u5982\u679C\u662F\u7528navicat premium\u7B49\u5DE5\u5177\u9700\u8981\u5148ssh\u767B\u5F55\u670D\u52A1\u5668\u7136\u540E\u5728\u94FE\u63A5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><br><h2 id="\u6253\u6B7B\u4E5F\u8981\u8BB0\u4F4F\u6CD5\u5219" tabindex="-1"><a class="header-anchor" href="#\u6253\u6B7B\u4E5F\u8981\u8BB0\u4F4F\u6CD5\u5219" aria-hidden="true">#</a> \u6253\u6B7B\u4E5F\u8981\u8BB0\u4F4F\u6CD5\u5219</h2><ul><li>SELECT col,col,col \u627E\u4EC0\u4E48\uFF1F</li><li>FROM table \u4ECE\u54EA\u627E\uFF1F</li><li>WHERE col \u6761\u4EF6 \u6761\u4EF6\u662F\u5565\uFF1F</li><li>order by \u6392\u5E8F\u3002 order by year asc/desc ,\u5E74\u4EFD\u5347\u5E8F/\u964D\u5E8F</li><li>group by \u5206\u7EC4\u3002</li><li>having \u5206\u7EC4\u540E\u5728\u7B5B\u9009\u7684\u6761\u4EF6\u53EF\u4EE5\u8BA1\u7B97</li><li>limit \u9009\u53D6\u90E8\u5206\u7ED3\u679C\u7684\u957F\u5EA6</li><li>offset \u4ECE\u54EA\u5F00\u59CB\u9009\u7ED3\u679C</li></ul><h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h2><blockquote><p>select\u4E4B\u540E\u662F\u9017\u53F7\u5206\u9694\u5217\u6216\u661F\u53F7(*)\u7684\u5217\u8868\uFF0C\u8868\u793A\u8981\u8FD4\u56DE\u6240\u6709\u5217\u3002</p></blockquote><ul><li>count \u8BA1\u6570</li><li>min \u6700\u5C0F\u7684</li><li>max \u6700\u5927\u7684</li><li>sum \u6C42\u548C</li><li>avg \u5E73\u5747\u6570</li></ul><h2 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> where</h2><blockquote><p>WHERE\u5B50\u53E5\u5141\u8BB8\u6839\u636E\u6307\u5B9A\u7684\u8FC7\u6EE4\u8868\u8FBE\u5F0F\u6216\u6761\u4EF6\u6765\u6307\u5B9A\u8981\u9009\u62E9\u7684\u884C\u3002</p></blockquote><h3 id="\u64CD\u4F5C\u7B26-\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7B26-\u6570\u5B57" aria-hidden="true">#</a> \u64CD\u4F5C\u7B26\uFF1A\u6570\u5B57</h3><ul><li>=, !=, &lt; &lt;=, &gt;, &gt;= \u6BD4\u8F83</li><li>BETWEEN ... AND ... \u5728\u4E24\u4E2A\u6570\u4E4B\u95F4</li><li>NOT BETWEEN \u2026 AND \u2026 \u4E0D\u5728\u4E24\u4E2A\u6570\u4E4B\u95F4</li><li>IN (\u2026) \u5728\u4E00\u4E2A\u5217\u8868</li><li>NOT IN(...) \u4E0D\u5728\u4E00\u4E2A\u5217\u8868</li></ul><h3 id="\u64CD\u4F5C\u7B26-\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7B26-\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u64CD\u4F5C\u7B26\uFF1A\u5B57\u7B26\u4E32</h3><ul><li>= \u7B49\u4E8E</li><li>!= \u4E0D\u7B49\u4E8E</li><li>like \u6CA1\u6709\u901A\u914D\u7B26\u7684\u65F6\u5019\u548C=\u4E00\u6837</li><li>% % \u548C like \u4E00\u8D77\u7528\uFF0C LIKE &quot;%AT%&quot; \u4EE3\u8868\u5339\u914D at-\u540E\u662F\u4EFB\u610F\u5B57\u7B26\u7684\u5B57\u7B26\u4E32</li><li>_ _ \u548C like \u4E00\u8D77\u7528\uFF0C LIKE &quot;AN_&quot; \u4EE3\u8868\u5339\u914D-\u5E76\u4E14\u540E\u9762\u6709\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26</li><li>IN (\u2026) \u5728\u4E00\u4E2A\u5217\u8868</li><li>NOT IN(...) \u4E0D\u5728\u4E00\u4E2A\u5217\u8868</li></ul><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">#cms</span>
<span class="token keyword">select</span>
    attrs<span class="token punctuation">[</span><span class="token string">&#39;spot_id&#39;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> spotId<span class="token punctuation">,</span>
    get_json_object<span class="token punctuation">(</span>attrs<span class="token punctuation">[</span><span class="token string">&#39;biz_content&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;$.campaignUnitId&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> campaignUnitId<span class="token punctuation">,</span>
    pt<span class="token punctuation">,</span>
    <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span><span class="token punctuation">(</span>cip<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> uv<span class="token punctuation">,</span>
    <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">as</span> pv
<span class="token keyword">from</span>
    htw_dw<span class="token punctuation">.</span>dwd_htm_log_event_web_di
<span class="token keyword">where</span>
    <span class="token string">&#39;2021-05-01&#39;</span> <span class="token operator">&lt;=</span> pt <span class="token operator">and</span> pt <span class="token operator">&lt;=</span> <span class="token string">&#39;2021-05-04&#39;</span>
    <span class="token operator">and</span> eventid <span class="token operator">=</span> <span class="token string">&#39;phpub_cms_view_sw&#39;</span>
    <span class="token operator">and</span> attrs<span class="token punctuation">[</span><span class="token string">&#39;spot_id&#39;</span><span class="token punctuation">]</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;bh-h5-all-campaign-panel&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">and</span> get_json_object<span class="token punctuation">(</span>attrs<span class="token punctuation">[</span><span class="token string">&#39;biz_content&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;$.campaignUnitId&#39;</span><span class="token punctuation">)</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;94161&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">group</span> <span class="token keyword">by</span>
    attrs<span class="token punctuation">[</span><span class="token string">&#39;spot_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    pt<span class="token punctuation">,</span>
    get_json_object<span class="token punctuation">(</span>attrs<span class="token punctuation">[</span><span class="token string">&#39;biz_content&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;$.campaignUnitId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 

<span class="token comment"># \u5C0F\u7A0B\u5E8F</span>
<span class="token keyword">select</span>
    eventid<span class="token punctuation">,</span>
    attrs<span class="token punctuation">[</span><span class="token string">&#39;is_havecar&#39;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> is_havecar<span class="token punctuation">,</span>
    <span class="token function">count</span><span class="token punctuation">(</span>attrs<span class="token punctuation">[</span><span class="token string">&#39;is_havecar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">as</span> num
<span class="token keyword">from</span>
    htw_dw<span class="token punctuation">.</span>dwd_htm_log_event_mp_di
<span class="token keyword">where</span>
    pt <span class="token operator">&gt;=</span> <span class="token string">&#39;2021-02-07&#39;</span> <span class="token operator">and</span> pt <span class="token operator">&lt;=</span> <span class="token string">&#39;2021-02-07&#39;</span>
    <span class="token operator">and</span> eventid <span class="token operator">=</span> <span class="token string">&#39;qj_wx_homepage_searchbike_ck&#39;</span>
<span class="token keyword">group</span> <span class="token keyword">by</span>
    eventid<span class="token punctuation">,</span>
    attrs<span class="token punctuation">[</span><span class="token string">&#39;is_havecar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>



<span class="token comment"># \u67E5\u8BE2\u6761\u4EF6\u91CC</span>
<span class="token keyword">select</span>
    Name
<span class="token keyword">from</span>
    Employee <span class="token keyword">as</span> a
<span class="token keyword">where</span>
    Salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
        <span class="token keyword">SELECT</span>
            Salary
        <span class="token keyword">FROM</span>
            Employee
        <span class="token keyword">WHERE</span>
            Id <span class="token operator">=</span> a<span class="token punctuation">.</span>Managerid
    <span class="token punctuation">)</span>
 
<span class="token comment"># \u6216\u8005</span>
<span class="token keyword">SELECT</span>
    E1<span class="token punctuation">.</span>Name <span class="token keyword">AS</span> Employee
<span class="token keyword">FROM</span>  
    Employee <span class="token keyword">as</span> E1<span class="token punctuation">,</span>Employee <span class="token keyword">as</span> E2
<span class="token keyword">WHERE</span>
    E1<span class="token punctuation">.</span>ManagerId <span class="token operator">=</span> E2<span class="token punctuation">.</span>Id
    <span class="token operator">AND</span> E1<span class="token punctuation">.</span>Salary <span class="token operator">&gt;</span> E2<span class="token punctuation">.</span>Salary<span class="token punctuation">;</span>



<span class="token comment"># ifnull,\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u5982\u679C\u662Fnull\u5219\u8FD4\u56DE\u7B2C\u4E8C\u4E2A\u53C2\u6570</span>
<span class="token keyword">select</span> ifnull<span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token keyword">distinct</span> Salary <span class="token keyword">as</span> SecondHighestSalary
    <span class="token keyword">from</span> Employee
    <span class="token keyword">order</span> <span class="token keyword">by</span> Salary <span class="token keyword">desc</span>
    <span class="token keyword">limit</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token boolean">null</span>
<span class="token punctuation">)</span> <span class="token keyword">as</span> SecondHighestSalary



<span class="token comment"># \u67E5\u627E\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1</span>
<span class="token comment"># having, \u5728\u6570\u636E\u5206\u7EC4\u4E4B\u540E\u518D\u6B21\u7B5B\u9009</span>
<span class="token keyword">select</span>
    Email
<span class="token keyword">from</span>
    Person
<span class="token keyword">group</span> <span class="token keyword">by</span>
    Email
<span class="token keyword">having</span>
    <span class="token function">count</span><span class="token punctuation">(</span>Email<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><h3 id="from\u8DDFselect\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#from\u8DDFselect\u64CD\u4F5C" aria-hidden="true">#</a> from\u8DDFselect\u64CD\u4F5C\uFF1A</h3><blockquote><p>\u89E3\u91CA\uFF1Afrom\u5B57\u6BB5\u540E\u8DDF\u8868\uFF0C\u53EF\u4EE5\u5148\u7528select \u7B5B\u51FA\u6765\u4E00\u4E2A\u8868\u7136\u540E\u5728\u7528\uFF0C\u4F8B,\u5148\u7528grade\u548Cclass\u5B57\u6BB5\u6392\u5E8F\u4E4B\u540E\u5728\u76F4\u63A5\u5C55\u793AgradeName\u548CclassName\uFF1A</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	gradeName <span class="token keyword">AS</span> <span class="token string">&#39;\u5E74\u7EA7&#39;</span><span class="token punctuation">,</span>
	className <span class="token keyword">AS</span> <span class="token string">&#39;\u73ED\u7EA7&#39;</span><span class="token punctuation">,</span>
	_count <span class="token keyword">AS</span> <span class="token string">&#39;\u6570\u91CF&#39;</span>
<span class="token keyword">FROM</span>
	<span class="token punctuation">(</span>
        <span class="token keyword">SELECT</span> 
            gradeName<span class="token punctuation">,</span> 
            className<span class="token punctuation">,</span> 
            <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> _count<span class="token punctuation">,</span> 
            grade<span class="token punctuation">,</span> 
            class 
        <span class="token keyword">FROM</span> 
            students 
        <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> gradeName<span class="token punctuation">,</span> 
            grade<span class="token punctuation">,</span> 
            className<span class="token punctuation">,</span> 
            class 
        <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> grade<span class="token punctuation">,</span> class 
    <span class="token punctuation">)</span> <span class="token keyword">AS</span> tables1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><h3 id="\u81EA\u5B9A\u4E49\u5217-case" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5217-case" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5217 + CASE</h3><blockquote><p>\u89E3\u91CA\uFF1Aselect\u4E2D\uFF0C\u7528 value as &#39;title&#39;\u7684\u65B9\u5F0F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E00\u4E2A\u5217\uFF0C\u540C\u65F6value\u53EF\u4EE5\u7528case\u6765\u9AD8\u4E00map</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	grade<span class="token punctuation">,</span>
	<span class="token punctuation">(</span> 
		<span class="token keyword">CASE</span> grade 
			<span class="token keyword">WHEN</span> <span class="token string">&#39;1&#39;</span> <span class="token keyword">THEN</span> <span class="token string">&#39;\u9AD8\u4E00&#39;</span> 
			<span class="token keyword">WHEN</span> <span class="token string">&#39;2&#39;</span> <span class="token keyword">THEN</span> <span class="token string">&#39;\u9AD8\u4E8C&#39;</span> 
			<span class="token keyword">WHEN</span> <span class="token string">&#39;3&#39;</span> <span class="token keyword">THEN</span> <span class="token string">&#39;\u9AD8\u4E09&#39;</span> 
		<span class="token keyword">END</span> 
	<span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">&#39;\u5E74\u7EA7&#39;</span> <span class="token punctuation">,</span>
	<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token string">&#39;\u4EBA\u6570&#39;</span>
<span class="token keyword">FROM</span>
	students
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	grade<span class="token punctuation">,</span>
	<span class="token string">&#39;\u5E74\u7EA7&#39;</span><span class="token punctuation">,</span>
	<span class="token string">&#39;\u4EBA\u6570&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function O(L,j){const a=l("ExternalLinkIcon");return i(),p("div",null,[d,r,n("p",null,[n("a",u,[k,e(a)])]),n("p",null,[v,n("a",m,[b,e(a)]),h,n("a",y,[_,e(a)])]),w,g,E,n("p",null,[f,n("a",q,[N,e(a)])]),n("p",null,[S,n("a",x,[I,e(a)])]),n("p",null,[T,n("a",A,[R,e(a)])]),H])}var M=t(c,[["render",O],["__file","mySql.html.vue"]]);export{M as default};
