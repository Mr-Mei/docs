import{_ as d,r,o as i,c as o,a as t,b as n,d as e,e as a}from"./app-f810b466.js";const l={},p=a('<h1 id="css基础" tabindex="-1"><a class="header-anchor" href="#css基础" aria-hidden="true">#</a> CSS基础</h1><h2 id="_1、css简介" tabindex="-1"><a class="header-anchor" href="#_1、css简介" aria-hidden="true">#</a> 1、CSS简介</h2><h3 id="_1-1、css是什么" tabindex="-1"><a class="header-anchor" href="#_1-1、css是什么" aria-hidden="true">#</a> 1.1、CSS是什么？</h3><ul><li>CSS指的是层叠样式表（Cascading Style Sheets）</li><li>CSS描述了如何在屏幕、纸张或其他媒体上显示HTML元素</li><li>CSS节省了大量工作。它可以同时控制多张网页布局。</li></ul><h3 id="_1-2、css引入方式" tabindex="-1"><a class="header-anchor" href="#_1-2、css引入方式" aria-hidden="true">#</a> 1.2、CSS引入方式</h3><table><thead><tr><th>引入方式</th><th>书写位置</th><th>作用范围</th><th>使用场景</th></tr></thead><tbody><tr><td>内嵌式</td><td>CSS写在style标签中。style标签通常放在head中</td><td>当前页面</td><td>小案例</td></tr><tr><td>外联式</td><td>CSS写在单独的CSS文件中，通过link标签引入</td><td>多个页面</td><td>项目中</td></tr><tr><td>行内式</td><td>CSS写在标签的style属性中</td><td>当前标签</td><td>配合js使用</td></tr></tbody></table><h2 id="_2、css选择器" tabindex="-1"><a class="header-anchor" href="#_2、css选择器" aria-hidden="true">#</a> 2、CSS选择器</h2><h3 id="_2-1、css基础选择器" tabindex="-1"><a class="header-anchor" href="#_2-1、css基础选择器" aria-hidden="true">#</a> 2.1、CSS基础选择器</h3><h4 id="_2-1-1-id选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-1-id选择器" aria-hidden="true">#</a> 2.1.1 ID选择器</h4><ul><li><strong>结构</strong>：<strong>#id属性值</strong> { css属性名: 属性值; }</li><li><strong>作用</strong>：通过id属性值，找到页面中带有这个id属性值的标签，设置样式</li></ul><p><strong>注意点：</strong></p><ol><li>所有标签上都有id属性</li><li>id属性值类似于身份证号码，在一个页面中是唯一的，不可重复的</li><li>一个标签上只能有一个id属性值</li><li>一个id选择器只能选中一个标签</li></ol><h4 id="_2-1-2-类选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-2-类选择器" aria-hidden="true">#</a> 2.1.2 类选择器</h4><ul><li><strong>结构</strong>：<strong>.class</strong> { css属性名: 属性值; }</li><li><strong>作用</strong>：通过类名，找到页面中所有带有这个类名的标签，设置样式</li></ul><p><strong>注意点：</strong></p><ol><li>所有标签上都有class属性，class属性的属性值成为类名</li><li>类名可以由数字、字母、下划线、中划线组成，但不能以数字或中划线开头</li><li>一个标签可以同时有多个类名，类名之前以空格隔开</li><li>类名可以重复，一个类选择器可以同时选中多个标签</li></ol><h4 id="_2-1-3-通配符选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-3-通配符选择器" aria-hidden="true">#</a> 2.1.3 通配符选择器</h4><ul><li><strong>结构</strong>：<code>*</code> { css属性名: 属性值; }</li><li><strong>作用</strong>：找到页面中所有的标签，设置样式</li></ul><p>**注意点：**默认去除浏览器自带属性margin和padding</p><h4 id="_2-1-4-标签选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-4-标签选择器" aria-hidden="true">#</a> 2.1.4 标签选择器</h4><ul><li><strong>结构</strong>：标签名 { css属性名: 属性值; }</li><li><strong>作用</strong>：通过标签名，找到页面中所有这类标签，设置样式</li></ul><p><strong>注意点：</strong></p><ol><li>标签选择器选择的是一类标签，而不是单独某一个</li><li>标签选择器无论嵌套关系有多深，都能找到对应的标签</li></ol><h4 id="_2-1-5-属性选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-5-属性选择器" aria-hidden="true">#</a> 2.1.5 属性选择器</h4><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>[attribute]</td><td>选择多有带 attribute 属性的元素</td></tr><tr><td>[attribute=value]</td><td>选择 attribute=value的所有元素</td></tr><tr><td>[attribute~=value]</td><td>选择 attribute属性包含单词 value的所有元素</td></tr><tr><td>[attribute^=value]</td><td>选择其attribute属性值以value开头的所有元素</td></tr><tr><td>[attribute$=value]</td><td>选择其attribute属性值以 value结束的所有元素</td></tr><tr><td>[attribute*=value]</td><td>选择其attribute属性中包含value子串的每个元素</td></tr></tbody></table><ul><li><strong>结构</strong>：标签名 { css属性名: 属性值; }</li><li><strong>作用</strong>：通过标签名，找到页面中所有这类标签，设置样式</li></ul><p>​ <strong>注意点：</strong></p><ol><li>标签选择器选择的是一类标签，而不是单独某一个</li><li>标签选择器无论嵌套关系有多深，都能找到对应的标签</li></ol><h3 id="_2-2、组合选择器" tabindex="-1"><a class="header-anchor" href="#_2-2、组合选择器" aria-hidden="true">#</a> 2.2、组合选择器</h3><table><thead><tr><th>选择器</th><th>作用</th><th>格式</th><th>示例</th></tr></thead><tbody><tr><td>后代选择器</td><td>找后代</td><td>选择器之间通过空格分隔</td><td>.father .son { css }</td></tr><tr><td>子代选择器</td><td>找儿子</td><td>选择器之间通过 &gt;分隔</td><td>.father &gt; .son { css }</td></tr><tr><td>并集选择器</td><td>找到多类元素</td><td>选择器之间通过,分隔</td><td>div,p,span { css }</td></tr><tr><td>交集选择器</td><td>找同时满足多个选择器的元素</td><td>选择器之间紧挨着</td><td>p.red { css }</td></tr><tr><td>兄弟选择器</td><td>匹配p标签后的所有span元素</td><td>选择器之间通过 ~ 分隔</td><td>p ~ span</td></tr><tr><td>相邻选择器</td><td>匹配p标签的第一个span元素</td><td>选择器之间通过 + 分隔</td><td>p + span</td></tr></tbody></table>',30),c={id:"_2-3、伪类选择器",tabindex:"-1"},h=t("a",{class:"header-anchor",href:"#_2-3、伪类选择器","aria-hidden":"true"},"#",-1),u={href:"https://so.csdn.net/so/search?q=%E4%BC%AA%E7%B1%BB&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},g=a('<p><strong>伪类</strong>：将特殊的效果添加到特定的选择器上，不会产生新元素</p><table><thead><tr><th>选择器</th><th>功能描述</th></tr></thead><tbody><tr><td>E:first-child</td><td>作为父元素的第一个子元素的元素E</td></tr><tr><td>E:last-child</td><td>作为父元素的最后一个子元素的元素E</td></tr><tr><td>E:nth-child(n)</td><td>作为父元素的第n个子元素E</td></tr><tr><td>E:nth-last-child(n)</td><td>选择父元素的倒数第n个子元素</td></tr><tr><td>E:first-of-type</td><td>选择父元素内具有指定类型的第一个E元素</td></tr><tr><td>E:last-of-type</td><td>选择父元素内具有指定类型的最后一个元素</td></tr><tr><td>E:nth-of-type(n)</td><td>选择父元素内具有指定类型的第n个E元素</td></tr><tr><td>E:nth-last-of-type</td><td>选择父元素内具有指定类型的倒数第n个E元素</td></tr><tr><td>E:root</td><td>选择匹配元素E所在文档的根元素，也就是html</td></tr><tr><td>E:only-child</td><td>选择父元素只包含一个子元素，且该子元素匹配E元素</td></tr><tr><td>E:only-of-type</td><td>选择父元素只包含一个同类型的子元素，且该子元素匹配E元素</td></tr><tr><td>E:empty</td><td>选择没有子元素的元素，且该元素也不包含任何文本节点</td></tr><tr><td>E:link</td><td>选择所有未被访问的链接</td></tr><tr><td>E:active</td><td>选择活动状态的a链接元素</td></tr><tr><td>E:visited</td><td>选择已经访问过的元素</td></tr><tr><td>E:hover</td><td>选择鼠标悬停状态的元素</td></tr><tr><td>E:checked</td><td>选择<input type="checkbox" checked>的元素</td></tr></tbody></table>',2),b={id:"_2-4、伪元素选择器",tabindex:"-1"},k=t("a",{class:"header-anchor",href:"#_2-4、伪元素选择器","aria-hidden":"true"},"#",-1),v={href:"https://so.csdn.net/so/search?q=%E4%BC%AA%E5%85%83%E7%B4%A0&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},_=a('<p><strong>伪元素</strong>：在内容元素的前后插入额外的元素或样式，这些元素不在html文档中生成，只在外部可见。</p><table><thead><tr><th>选择器</th><th>功能描述</th></tr></thead><tbody><tr><td>::before</td><td>创建一个伪元素放在选中元素前</td></tr><tr><td>::after</td><td>创建一个伪元素放在选中元素后</td></tr><tr><td>::first-letter</td><td>选各种元素第一行第一个字母</td></tr><tr><td>::first-line</td><td>选中元素的第一行</td></tr><tr><td>::selection</td><td>选中鼠标点击拖动选中的高亮部分</td></tr></tbody></table><h3 id="_2-5、伪类和伪元素区别" tabindex="-1"><a class="header-anchor" href="#_2-5、伪类和伪元素区别" aria-hidden="true">#</a> 2.5、伪类和伪元素区别</h3><ol><li>伪元素只能在选择器中出现一次，而且只在末尾出现</li><li>伪类只设置样式，不会创建新元素。而伪元素会创建新元素</li><li>伪类的效果可以通过添加实际的类来实现；伪元素也可以通过添加元素来实现</li></ol><h2 id="_3、字体和文本样式" tabindex="-1"><a class="header-anchor" href="#_3、字体和文本样式" aria-hidden="true">#</a> 3、字体和文本样式</h2><h3 id="_3-1、字体样式" tabindex="-1"><a class="header-anchor" href="#_3-1、字体样式" aria-hidden="true">#</a> 3.1、字体样式</h3><table><thead><tr><th>属性名</th><th>样式</th><th>属性值</th></tr></thead><tbody><tr><td>font-size</td><td>字体大小</td><td>数字+px</td></tr><tr><td>font-weight</td><td>字体粗细</td><td>正常：normal或数字400; 加粗：bold或数字700</td></tr><tr><td>font-style</td><td>是否倾斜</td><td>正常（默认值）：normal; 倾斜：italic</td></tr><tr><td>font-family</td><td>字体系列</td><td>sans-serif（无衬线字体）; serif（衬线字体）; monospace（等宽字体）</td></tr><tr><td>font</td><td>字体连写</td><td>style weight size family</td></tr></tbody></table><h3 id="_3-2、文本样式" tabindex="-1"><a class="header-anchor" href="#_3-2、文本样式" aria-hidden="true">#</a> 3.2、文本样式</h3><table><thead><tr><th>属性名</th><th>样式</th><th>属性值</th></tr></thead><tbody><tr><td>text-indent</td><td>文本缩进</td><td>数字+px; 数字+em（推荐：1em = 当前标签的font-size的大小）</td></tr><tr><td>text-align</td><td>对齐方式</td><td>left: 左对齐; center: 居中对齐; right: 右对齐</td></tr><tr><td>text-decoration</td><td>文本修饰</td><td>underline: 下划线; line-through: 删除线; overline: 上划线; none: 无装饰线</td></tr><tr><td>line-height</td><td>文本行高</td><td>数字+px; 倍数（当前标签font-size的倍数）</td></tr></tbody></table><h2 id="_4、背景相关属性" tabindex="-1"><a class="header-anchor" href="#_4、背景相关属性" aria-hidden="true">#</a> 4、背景相关属性</h2><h3 id="_4-1、背景颜色" tabindex="-1"><a class="header-anchor" href="#_4-1、背景颜色" aria-hidden="true">#</a> 4.1、背景颜色</h3><p><strong>属性名</strong>：background-color</p><p><strong>属性值</strong>：</p><table><thead><tr><th>颜色取值</th><th>示例</th></tr></thead><tbody><tr><td>关键字</td><td>red、green、yellow等</td></tr><tr><td>rgb表示法</td><td>rgb(255,255,255)</td></tr><tr><td>rgba表示法</td><td>rgba(255,255,255,1)</td></tr><tr><td>十六进制</td><td>#ffffff;</td></tr></tbody></table><p><strong>注意点：</strong></p><ul><li>背景颜色默认值是透明的：rgba(0,0,0,0)或transparent</li><li>背景颜色不会影响盒子大小，一般在布局中使用，方便看清盒子大小和位置</li></ul><h3 id="_4-2、背景图片" tabindex="-1"><a class="header-anchor" href="#_4-2、背景图片" aria-hidden="true">#</a> 4.2、背景图片</h3><p><strong>属性名</strong>：background-image</p><p><strong>属性值</strong>：background-image: url(‘图片的路径’)</p><p><strong>注意点：</strong></p><ul><li>背景图片默认实在水平和垂直方向平铺的</li><li>背景图片仅仅是指给盒子起到装饰效果，类似于背景不能撑开盒子</li></ul><h3 id="_4-3、背景平铺" tabindex="-1"><a class="header-anchor" href="#_4-3、背景平铺" aria-hidden="true">#</a> 4.3、背景平铺</h3>',22),f=t("strong",null,"属性名",-1),x={href:"https://so.csdn.net/so/search?q=background-repeat&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m=a(`<p><strong>属性值</strong>：</p><table><thead><tr><th>取值</th><th>效果</th></tr></thead><tbody><tr><td>repeat</td><td>（默认值）水平和垂直方向都平铺</td></tr><tr><td>no-repeat</td><td>不平铺</td></tr><tr><td>repeat-x</td><td>沿水平方向（x轴）平铺</td></tr><tr><td>repeat-y</td><td>沿垂直方向（y轴）平铺</td></tr></tbody></table><h3 id="_4-4、背景位置" tabindex="-1"><a class="header-anchor" href="#_4-4、背景位置" aria-hidden="true">#</a> 4.4、背景位置</h3><p><strong>属性名</strong>：background-position</p><p><strong>属性值</strong>：background-position: 水平方向位置 垂直方向位置</p><h3 id="_4-5、img标签和背景图片的区别" tabindex="-1"><a class="header-anchor" href="#_4-5、img标签和背景图片的区别" aria-hidden="true">#</a> 4.5、img标签和背景图片的区别</h3><ul><li>img标签是一个标签，不设置宽高默认会以原来尺寸显示</li><li>背景图片只是装饰的CSS样式，不能撑开元素的宽高</li></ul><h2 id="_5、元素的显示模式" tabindex="-1"><a class="header-anchor" href="#_5、元素的显示模式" aria-hidden="true">#</a> 5、元素的显示模式</h2><h3 id="_5-1、块级元素" tabindex="-1"><a class="header-anchor" href="#_5-1、块级元素" aria-hidden="true">#</a> 5.1、块级元素</h3><p><strong>属性</strong>：display: <strong>block</strong><strong>特点</strong>：</p><ol><li>独占一行（一行只能显示一个）</li><li>宽度默认是父元素的宽度，高度默认由内容撑开</li><li>可以设置宽高</li></ol><p><strong>代表标签</strong>：</p><ul><li>div、p、h系列、ul、li、dl、dt、dd、form、header、nav、footer等</li></ul><h3 id="_5-2、行内元素" tabindex="-1"><a class="header-anchor" href="#_5-2、行内元素" aria-hidden="true">#</a> 5.2、行内元素</h3><p><strong>属性</strong>：display: <strong>inline</strong><strong>特点</strong>：</p><ol><li>一行可以显示多个</li><li>宽度和高度默认由内容撑开</li><li>不可以设置宽高</li></ol><p><strong>代表标签</strong>：</p><ul><li>a、span、b、u、i、s、strong、ins、em、del等</li></ul><h3 id="_5-3、行内块元素" tabindex="-1"><a class="header-anchor" href="#_5-3、行内块元素" aria-hidden="true">#</a> 5.3、行内块元素</h3><p><strong>属性</strong>：display: <strong>inline-block</strong><strong>特点</strong>：</p><ol><li>一行可以显示多个</li><li>可以设置宽高</li></ol><p><strong>代表标签</strong>：</p><ul><li>input、textarea、button、select等</li><li>特殊情况：<strong>img</strong>标签有行内块元素特点，但在谷歌浏览器中显示的是inline</li></ul><h2 id="_6、css三大特性" tabindex="-1"><a class="header-anchor" href="#_6、css三大特性" aria-hidden="true">#</a> 6、CSS三大特性</h2><h3 id="_6-1、继承性" tabindex="-1"><a class="header-anchor" href="#_6-1、继承性" aria-hidden="true">#</a> 6.1、继承性</h3><p><strong>特点</strong>：子元素有默认继承父元素样式的特点（子承父业）</p><p><strong>继承属性</strong>：</p><ol><li>color</li><li>font-style、font-weight、font-size、font-family</li><li>text-indent、text-align</li><li>line-height</li></ol><p><strong>应用场景</strong>：</p><ol><li>可以直接给ul设置list-style:none属性，从而去除列表默认的小圆点样式</li><li>直接给body标签设置统一的font-size，从而统一不同浏览器默认文字大小</li></ol><p><strong>继承失效情况</strong>：被浏览器默认样式给覆盖了</p><h3 id="_6-2、层叠性" tabindex="-1"><a class="header-anchor" href="#_6-2、层叠性" aria-hidden="true">#</a> 6.2、层叠性</h3><p><strong>特性</strong>：</p><ol><li>给同一个标签设置不同的样式 -&gt; 此时样式会层叠叠加 -&gt; 会共同作用在标签上</li><li>给同一个标签设置相同的样式 -&gt; 此时样式会层叠覆盖 -&gt; 最终写在最后的样式会生效</li><li>当样式冲突时，只有当选择器优先级相同时，才能通过层叠性判断</li></ol><h4 id="_6-3、优先级" tabindex="-1"><a class="header-anchor" href="#_6-3、优先级" aria-hidden="true">#</a> 6.3、优先级</h4><table><thead><tr><th>选择器</th><th>示例</th><th>权重值</th></tr></thead><tbody><tr><td>!important</td><td>background-color: #fff !important;</td><td>正无穷</td></tr><tr><td>内联选择器</td><td>样式作用元素<span style="color:#333;"></span></td><td>1000</td></tr><tr><td>ID选择器</td><td>#id</td><td>100</td></tr><tr><td>类选择器、属性选择器、伪类选择器</td><td>.class</td><td>10</td></tr><tr><td>标签选择器、伪元素选择器</td><td>div、p</td><td>1</td></tr><tr><td>通配符选择器</td><td>*</td><td>0</td></tr><tr><td>继承属性</td><td><div style="color:#333;"><span>样式作用元素</span></div></td><td>-1</td></tr></tbody></table><p><strong>说明</strong></p><ol><li>权重值是256进制的</li><li>同一行的选择器权重值相加，权重值高的样式生效，如果权重值相同，后面写的覆盖前面</li><li>不是同一行的直接找按权重值相加计算，权重值高的样式生效</li></ol><h2 id="_7、盒子模型" tabindex="-1"><a class="header-anchor" href="#_7、盒子模型" aria-hidden="true">#</a> 7、盒子模型</h2><h3 id="_7-1、盒子模型介绍" tabindex="-1"><a class="header-anchor" href="#_7-1、盒子模型介绍" aria-hidden="true">#</a> 7.1、盒子模型介绍</h3><p><strong>盒子的概念</strong>：</p><ol><li>页面中的每一个标签都可以看做是一个<strong>盒子</strong>；通过盒子的视角，可以更方便的进行布局</li><li>浏览器在渲染网页时会将网页中的元素看做是一个个的矩形区域，我们也形象称之为盒子</li></ol><p><strong>盒子模型</strong>：CSS中规定盒子分别由：<strong>内容区域（content）</strong>、<strong>内边距区域（padding）</strong>、<strong>边框区域（border）</strong>、**外边距区域（margin）**构成</p><h4 id="_7-1-1-内容的宽度和高度" tabindex="-1"><a class="header-anchor" href="#_7-1-1-内容的宽度和高度" aria-hidden="true">#</a> 7.1.1 内容的宽度和高度</h4><p><strong>作用</strong>：利用 <strong>width</strong> 和 <strong>height</strong> 属性默认设置是盒子 <strong>内容区域</strong> 的大小</p><p><strong>属性</strong>：width / height</p><p><strong>常见取值</strong>：数字 + px</p><h4 id="_7-1-2-边框-border" tabindex="-1"><a class="header-anchor" href="#_7-1-2-边框-border" aria-hidden="true">#</a> 7.1.2 边框 (border)</h4><p><strong>作用</strong>：设置边框粗细、边框样式、边框颜色效果</p><p><strong>属性</strong>：</p><table><thead><tr><th>作用</th><th>属性名</th><th>属性值</th></tr></thead><tbody><tr><td>边框粗细</td><td>border-width</td><td>数字 + px</td></tr><tr><td>边框样式</td><td>border-style</td><td>实线 <code>solid</code>、虚线 <code>dashed</code>、点线 <code>dotted</code></td></tr><tr><td>边框颜色</td><td>border-color</td><td>颜色取值</td></tr></tbody></table><p><strong>边框连写形式</strong>：边框粗细 边框样式 边框颜色</p><p><strong>例如</strong>：border: 1px solid #333;</p><p><strong>单方向设置</strong>：border-方位名词: 1px solid red;</p><h4 id="_7-1-3-内边距-padding" tabindex="-1"><a class="header-anchor" href="#_7-1-3-内边距-padding" aria-hidden="true">#</a> 7.1.3 内边距 (padding)</h4><p><strong>作用</strong>：设置<strong>边框</strong>与<strong>内容区域</strong>之间的距离</p><p><strong>属性名</strong>：padding</p><p><strong>常见取值</strong>：</p><table><thead><tr><th>取值</th><th>示例</th><th>含义</th></tr></thead><tbody><tr><td>一个值</td><td>padding: 10px;</td><td>上下左右都设置为10px</td></tr><tr><td>两个值</td><td>padding: 10px 20px;</td><td>上下设置为10px、左右设置为20px</td></tr><tr><td>三个值</td><td>padding: 10px 20px 30px</td><td>上设置为10px、左右设置为20px、下设置为30px</td></tr><tr><td>四个值</td><td>padding: 10px 20px 30px 40px</td><td>上设置为10px、右设置为20px、下设置为30px、左设置为40px</td></tr></tbody></table><p><strong>单方向设置</strong>：padding-方位名词: 10px;</p><h4 id="_7-1-4-外边距-margin" tabindex="-1"><a class="header-anchor" href="#_7-1-4-外边距-margin" aria-hidden="true">#</a> 7.1.4 外边距 (margin)</h4><p><strong>作用</strong>：设置边框以外，盒子与盒子之间的距离</p><p><strong>属性名</strong>：margin</p><p><strong>常见取值</strong>：</p><table><thead><tr><th>取值</th><th>示例</th><th>含义</th></tr></thead><tbody><tr><td>一个值</td><td>margin: 10px;</td><td>上下左右都设置为10px</td></tr><tr><td>两个值</td><td>margin: 10px 20px;</td><td>上下设置为10px、左右设置为20px</td></tr><tr><td>三个值</td><td>margin: 10px 20px 30px</td><td>上设置为10px、左右设置为20px、下设置为30px</td></tr><tr><td>四个值</td><td>margin: 10px 20px 30px 40px</td><td>上设置为10px、右设置为20px、下设置为30px、左设置为40px</td></tr></tbody></table><p><strong>单方向设置</strong>：margin-方位名词: 10px;</p><h4 id="_7-1-5-盒子实际大小计算公式" tabindex="-1"><a class="header-anchor" href="#_7-1-5-盒子实际大小计算公式" aria-hidden="true">#</a> 7.1.5 盒子实际大小计算公式</h4><ul><li>盒子宽度 = 左边框 + 左padding + 内容宽度 + 右padding + 右边框</li><li>盒子高度 = 上边框 + 上padding + 内容宽度 + 下padding + 下边框</li></ul><p>​ <strong>问题</strong>：当盒子被border和padding撑大后，如何解决？</p><ol><li>手动内减：手动计算多余大小，在内容中减去</li><li>自动内减：给盒子设置属性 box-sizing: border-box;</li></ol><h4 id="_7-1-6-相邻盒子之间margin计算规则" tabindex="-1"><a class="header-anchor" href="#_7-1-6-相邻盒子之间margin计算规则" aria-hidden="true">#</a> 7.1.6 相邻盒子之间margin计算规则</h4><ol><li><strong>水平方向</strong>的盒子，两者距离为margin之和</li><li><strong>垂直方向</strong>的盒子，两者距离为margin的最大值</li></ol><h4 id="_7-1-7-塌陷现象" tabindex="-1"><a class="header-anchor" href="#_7-1-7-塌陷现象" aria-hidden="true">#</a> 7.1.7 塌陷现象</h4><p><strong>场景</strong>：互相嵌套和块级元素，子元素的magin-top会作用在父元素上</p><p><strong>结果</strong>：导致父元素一起往下移动，引起父元素塌陷</p><p><strong>解决方式</strong>：</p><ol><li>给父元素设置border-top或者padding-top（分割父子元素的margin-top）</li><li>给父元素设置overflow: hidden;</li><li>转换成行内块级元素 display: inline-block;</li><li>设置浮动 float: left;</li><li>添加伪类</li></ol><p><strong>常用清除浮动和父元素塌陷伪类</strong>：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::before,
.clearfix::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、-标准流" tabindex="-1"><a class="header-anchor" href="#_8、-标准流" aria-hidden="true">#</a> 8、 标准流</h2><p><strong>标准流</strong>：又称<strong>文档流</strong>，是浏览器在渲染元素时默认采用的一套排版规则，规定了该以何种方式排列元素</p><p><strong>排版规则</strong>：</p><ol><li><strong>块级元素</strong>：从上到下，<strong>垂直布局</strong>，独占一行</li><li><strong>行内元素</strong> 或 <strong>行内块元素</strong>：从左到右，<strong>水平布局</strong>，空间不够自动换行</li></ol><h2 id="_9、-浮动" tabindex="-1"><a class="header-anchor" href="#_9、-浮动" aria-hidden="true">#</a> 9、 浮动</h2><h3 id="_9-1、浮动的特点" tabindex="-1"><a class="header-anchor" href="#_9-1、浮动的特点" aria-hidden="true">#</a> 9.1、浮动的特点</h3><ol><li>浮动元素会脱离标准流（简称：脱标），在标准流中不占位置</li><li>浮动元素比标准流高半个级别，可以覆盖标准流中的元素</li><li>浮动找浮动，下一个浮动元素会在上一个浮动元素后面左右浮动</li><li>浮动元素会受到上面块级元素边界的影响</li><li>浮动元素有特殊的显示效果</li></ol><ul><li>一行可以显示多个</li><li>可以设置宽高</li></ul><p>**注意点：**浮动元素不能通过父元素设置text-align:center;或本身设置margin: 0 auto;让浮动元素本身水平居中</p><h3 id="_9-2、浮动的作用" tabindex="-1"><a class="header-anchor" href="#_9-2、浮动的作用" aria-hidden="true">#</a> 9.2、浮动的作用</h3><ol><li>图文环绕</li><li>网页布局，让垂直布局的盒子变成水平布局</li></ol><h3 id="_9-3、浮动的代码" tabindex="-1"><a class="header-anchor" href="#_9-3、浮动的代码" aria-hidden="true">#</a> 9.3、浮动的代码</h3><p><strong>属性</strong>：<strong>float</strong></p><ol><li>左浮动： float: left;</li><li>右浮动： float: right;</li></ol><h3 id="_9-4、浮动带来的影响" tabindex="-1"><a class="header-anchor" href="#_9-4、浮动带来的影响" aria-hidden="true">#</a> 9.4、浮动带来的影响</h3><p><strong>影响</strong>：子元素设置浮动，此时子元素脱离标准流无法撑开父元素，会影响页面其他元素的布局</p><h3 id="_9-5、清除浮动的方法" tabindex="-1"><a class="header-anchor" href="#_9-5、清除浮动的方法" aria-hidden="true">#</a> 9.5、清除浮动的方法</h3><ol><li>直接设置父元素高度</li></ol><ul><li>优点：简单直接，方便</li><li>缺点：有些元素无固定高度，无法设置高度</li></ul><p>​ 2. 在父元素内容的最后添加一个块级元素，并给块级元素添加属性 <strong>clear: both;</strong></p><ul><li>缺点：会在页面中添加额外的标签，会让页面结构变得复杂难以阅读</li></ul><p>​ 3. 单伪元素清除法</p><p><strong>基本写法</strong>：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>补充写法</strong>：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token comment">/* 在网页中看不到伪元素 */</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>优点</strong>：直接给标签添加类即可清除浮动</li></ul><ol start="4"><li>双伪元素清除法</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::before,
.clearfix::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
	<span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>优点</strong>：直接给标签添加类即可清除浮动</li></ul><ol start="5"><li>给父元素设置<strong>overflow: hidden;</strong></li></ol><ul><li><strong>优点</strong>：简单直接，方便</li></ul><h2 id="_10、-bfc" tabindex="-1"><a class="header-anchor" href="#_10、-bfc" aria-hidden="true">#</a> 10、 BFC</h2><h3 id="_10-1、bfc介绍" tabindex="-1"><a class="header-anchor" href="#_10-1、bfc介绍" aria-hidden="true">#</a> 10.1、BFC介绍</h3><ul><li>块格式化上下文（Block Formatting Context）是web页面的可视CSS渲染的一部分，是块盒子的布局过程中发生的区域，也是浮动元素与其他元素交互的区域。</li></ul><h3 id="_10-2、创建bfc的方法" tabindex="-1"><a class="header-anchor" href="#_10-2、创建bfc的方法" aria-hidden="true">#</a> 10.2、创建BFC的方法</h3><ol><li>html标签是BFC盒子</li><li>浮动元素是BFC盒子</li><li>行内元素是BFC盒子</li><li>overflow属性值不为visible是BFC盒子</li><li>position: absolute或fixed</li></ol><h3 id="_10-3、bfc盒子特点" tabindex="-1"><a class="header-anchor" href="#_10-3、bfc盒子特点" aria-hidden="true">#</a> 10.3、BFC盒子特点</h3><ol><li>BFC盒子会默认包裹住内部子元素（标准流、浮动流）-&gt; 应用场景：清除浮动</li><li>BFC盒子本身与子元素之间不存在margin的塌陷现象 -&gt; 应用场景：解决margin的塌陷</li></ol><h2 id="_11、定位" tabindex="-1"><a class="header-anchor" href="#_11、定位" aria-hidden="true">#</a> 11、定位</h2><h3 id="_11-1、定位的应用场景" tabindex="-1"><a class="header-anchor" href="#_11-1、定位的应用场景" aria-hidden="true">#</a> 11.1、定位的应用场景</h3><ol><li>可以解决盒子与盒子之间的层叠问题</li></ol><ul><li>定位之后的元素层级最高，可以层叠在其他盒子之上</li></ul><ol start="2"><li>可以让盒子始终固定在屏幕中的某个位置</li></ol><h3 id="_11-2、使用定位的步骤" tabindex="-1"><a class="header-anchor" href="#_11-2、使用定位的步骤" aria-hidden="true">#</a> 11.2、使用定位的步骤</h3><h4 id="_11-2-1-设置定位方式" tabindex="-1"><a class="header-anchor" href="#_11-2-1-设置定位方式" aria-hidden="true">#</a> 11.2.1 设置定位方式</h4><p><strong>属性名</strong>：position</p><p><strong>定位方式</strong>：</p><table><thead><tr><th>定位方式</th><th>属性值</th><th>相对于谁移动</th><th>是否占位置</th></tr></thead><tbody><tr><td>静态定位</td><td>static</td><td>不能通过方位属性移动</td><td>占位置</td></tr><tr><td>相对定位</td><td>relative</td><td>相对于自己原来的位置</td><td>占位置</td></tr><tr><td>绝对定位</td><td>absolute</td><td>相对于最近的且有定位的祖先元素移动</td><td>不占位置（脱标）</td></tr><tr><td>固定定位</td><td>fixed</td><td>相对于浏览器可视区域</td><td>不占位置（脱标）</td></tr></tbody></table><h4 id="_11-2-2-设置偏移值" tabindex="-1"><a class="header-anchor" href="#_11-2-2-设置偏移值" aria-hidden="true">#</a> 11.2.2 设置偏移值</h4><ul><li>偏移值设置分为两个方向，水平和垂直方向各选一个使用即可</li><li>选取的原则为就近原则</li></ul><table><thead><tr><th>方向</th><th>属性名</th><th>属性值</th><th>含义</th></tr></thead><tbody><tr><td>水平</td><td>left</td><td>数字+px</td><td>距离左边的距离</td></tr><tr><td>水平</td><td>right</td><td>数字+px</td><td>距离右边的距离</td></tr><tr><td>垂直</td><td>top</td><td>数字+px</td><td>距离上边的距离</td></tr><tr><td>垂直</td><td>bottom</td><td>数字+px</td><td>距离下边的距离</td></tr></tbody></table><h3 id="_11-3、定位方式" tabindex="-1"><a class="header-anchor" href="#_11-3、定位方式" aria-hidden="true">#</a> 11.3、定位方式</h3><h4 id="_11-3-1-静态定位" tabindex="-1"><a class="header-anchor" href="#_11-3-1-静态定位" aria-hidden="true">#</a> 11.3.1 静态定位</h4><p><strong>介绍</strong>：静态定位是默认值，就是标准流，不能通过方位属性进行移动 <strong>代码</strong>：position: static;</p><h4 id="_11-3-2-相对定位" tabindex="-1"><a class="header-anchor" href="#_11-3-2-相对定位" aria-hidden="true">#</a> 11.3.2 相对定位</h4><p><strong>介绍</strong>：相对于之前的位置进行位移 <strong>代码</strong>：position: relative; <strong>特点</strong>：</p><ol><li>需要配合方位属性实现移动</li><li>相对于原来的位置进行移动</li><li>在页面中占位置,没有脱离标准流</li></ol><p><strong>应用场景</strong>：</p><ol><li>配合绝对定位（子绝父相）</li><li>小范围移动</li></ol><h4 id="_11-3-3-绝对定位" tabindex="-1"><a class="header-anchor" href="#_11-3-3-绝对定位" aria-hidden="true">#</a> 11.3.3 绝对定位</h4><p><strong>介绍</strong>：相对于之前的位置进行位移 <strong>代码</strong>：position: absolute; <strong>特点</strong>：</p><ol><li>需要配合方位属性实现移动</li><li>默认相对于浏览器可视区域进行移动</li><li>在页面中不占位置,脱离标准流</li><li>相对于<strong>最近的有定位</strong>（非static）的祖先元素进行移动</li></ol><p><strong>应用场景</strong>：</p><ol><li>配合相对定位（子绝父相）</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>水平垂直居中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
         <span class="token comment">/* 相对于浏览器可视区域进行移动 */</span>
         <span class="token selector">.father</span> <span class="token punctuation">{</span>
             <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
             <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
             <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
             <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
             <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
             <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
             <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token comment">/* 相对于最近的有定位（非static）的祖先元素进行移动 */</span>
         <span class="token selector">.son</span> <span class="token punctuation">{</span>
             <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
             <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
             <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
             <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
             <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
             <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
             <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>father<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-3-3-固定定位" tabindex="-1"><a class="header-anchor" href="#_11-3-3-固定定位" aria-hidden="true">#</a> 11.3.3 固定定位</h4><p><strong>介绍</strong>：相对于浏览器进行定位 <strong>代码</strong>：position: fixed; <strong>特点</strong>：</p><ol><li>需要配合方位属性实现移动</li><li>相对于浏览器可视区域进行移动</li><li>在页面中不占位置,脱离标准流</li><li>相对于<strong>最近的有定位</strong>（非static）的祖先元素进行移动</li></ol><p><strong>应用场景</strong>：</p><ol><li>让盒子固定在屏幕中的某个位置</li></ol><h2 id="_12、元素层级-z-index" tabindex="-1"><a class="header-anchor" href="#_12、元素层级-z-index" aria-hidden="true">#</a> 12、元素层级（z-index）</h2><h3 id="_12-1、-元素层级关系" tabindex="-1"><a class="header-anchor" href="#_12-1、-元素层级关系" aria-hidden="true">#</a> 12.1、 元素层级关系</h3><ol><li>不同布局方式的层级关系</li></ol><ul><li>标准流 &lt; 浮动 &lt; 定位</li></ul><ol><li>不同定位之间的层级关系</li></ol><ul><li>相对、绝对、固定默认层级相同</li><li>在HTML中写在下面的元素层级更高，会覆盖上面的元素</li></ul><h3 id="_12-2、-改变层级的方式" tabindex="-1"><a class="header-anchor" href="#_12-2、-改变层级的方式" aria-hidden="true">#</a> 12.2、 改变层级的方式</h3><ul><li>给元素添加属性<strong>z-index</strong>;属性值越大，层级越高</li></ul><h2 id="_13、-装饰" tabindex="-1"><a class="header-anchor" href="#_13、-装饰" aria-hidden="true">#</a> 13、 装饰</h2><h3 id="_13-1、-基线" tabindex="-1"><a class="header-anchor" href="#_13-1、-基线" aria-hidden="true">#</a> 13.1、 基线</h3><p><strong>介绍</strong>：浏览器文字类型元素排版中存在用于对齐的基线（baseline）</p><h3 id="_13-2、-文字对齐" tabindex="-1"><a class="header-anchor" href="#_13-2、-文字对齐" aria-hidden="true">#</a> 13.2、 文字对齐</h3><p><strong>属性名</strong>：vertical-align <strong>属性值</strong>：</p><table><thead><tr><th>属性值</th><th>效果</th></tr></thead><tbody><tr><td>baseline</td><td>默认，基线对齐</td></tr><tr><td>top</td><td>顶部对齐</td></tr><tr><td>middle</td><td>中部对齐</td></tr><tr><td>bottom</td><td>底部对齐</td></tr></tbody></table><p><strong>应用场景</strong>：</p><ol><li>解决文本框和表单按钮无法对齐问题、</li><li>解决input和img无法对齐问题</li><li>解决div中的文本框无法贴顶问题</li><li>解决div不设置高度时，img标签下会存在额外间隙问题</li><li>使用line-height让img标签垂直居中问题</li></ol><h3 id="_13-3、-光标类型" tabindex="-1"><a class="header-anchor" href="#_13-3、-光标类型" aria-hidden="true">#</a> 13.3、 光标类型</h3><p><strong>介绍</strong>：设置鼠标光标在元素上时显示的样式 <strong>属性名</strong>：cursor <strong>属性值</strong>：</p><table><thead><tr><th>属性值</th><th>效果</th></tr></thead><tbody><tr><td>default</td><td>默认值，通常是箭头</td></tr><tr><td>pointer</td><td>小手效果，提示用户可以点击</td></tr><tr><td>text</td><td>工字型，提示用户可以选择文字</td></tr><tr><td>move</td><td>十字光标，提示用户可以移动</td></tr></tbody></table><h3 id="_13-4、边框圆角" tabindex="-1"><a class="header-anchor" href="#_13-4、边框圆角" aria-hidden="true">#</a> 13.4、边框圆角</h3><p><strong>介绍</strong>：让盒子四角变得圆润，增加页面细节，提高用户体验 <strong>属性名</strong>：border-radius <strong>取值</strong>：数字+px、百分比</p><h3 id="_13-5、-overflow" tabindex="-1"><a class="header-anchor" href="#_13-5、-overflow" aria-hidden="true">#</a> 13.5、 overflow</h3><p><strong>介绍</strong>：控制溢出部分的显示效果</p><table><thead><tr><th>属性值</th><th>效果</th></tr></thead><tbody><tr><td>visible</td><td>默认值，溢出部分可见</td></tr><tr><td>hidden</td><td>溢出部分隐藏</td></tr><tr><td>scroll</td><td>无论是否溢出，都显示滚动条</td></tr><tr><td>auto</td><td>根据是否溢出，自动显示或隐藏滚动条</td></tr></tbody></table><h3 id="_13-6、元素隐藏" tabindex="-1"><a class="header-anchor" href="#_13-6、元素隐藏" aria-hidden="true">#</a> 13.6、元素隐藏</h3><p><strong>介绍</strong>：让元素本身在浏览器中不可见</p><p><strong>属性</strong>：</p><ol><li>visibility: hidden;</li><li>display: none;</li></ol><p><strong>区别</strong>：</p><ol><li>visibility: hidden;隐藏元素本身，并且在网页中占位置</li><li>display: none;隐藏元素本身，并且在网页中不占位置</li></ol><h3 id="_13-7、元素透明度" tabindex="-1"><a class="header-anchor" href="#_13-7、元素透明度" aria-hidden="true">#</a> 13.7、元素透明度</h3><p><strong>介绍</strong>：让元素整体（包括内容）一起变透明 <strong>属性名</strong>：opacity <strong>属性值</strong>：0 ~ 1之间的数字</p><ul><li>1：表示完全不透明</li><li>0：表示完全透明</li></ul>`,183);function y(S,C){const s=r("ExternalLinkIcon");return i(),o("div",null,[p,t("h3",c,[h,n(" 2.3、"),t("a",u,[n("伪类"),e(s)]),n("选择器")]),g,t("h3",b,[k,n(" 2.4、"),t("a",v,[n("伪元素"),e(s)]),n("选择器")]),_,t("p",null,[f,n("："),t("a",x,[n("background-repeat"),e(s)])]),m])}const q=d(l,[["render",y],["__file","CSS基础.html.vue"]]);export{q as default};
