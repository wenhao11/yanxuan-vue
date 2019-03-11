# 实战项目-严选-Vue

## day1 
	- 基础环境搭建(vue脚手架, git管理)
	- rem适配, width/10, meta标签缩放0.5
	- 底部路由搭建, 新建路由组件

## day2
  - 首页相关
    - 头部滚动条, js动态计算ul宽度, 使用better-scroll实现滚动效果, 默认有橡皮筋回弹效果, 通过bounceTime配置回弹时间
    
    - 关于动态撑开滚动条宽度， 可以使用js动态计算ul宽度， 但是rem适配情况下比较麻烦， 使用弹性布局 + white-space: nowrap使宽度自适应
    
    - 使用flex会使子元素的float 、 clear 和 vertical-align 属性失效
  
## day3
  - swiper遇到的坑
    - 实现自定义分页器, 配置分页器type类型为:custom(自定义), renderCustom()    
    
    - 坑坑坑坑坑!!! 在vue中分类器样式无法更改
    - 问题原因: 网上搜索到的答案是: 启用CSS具名scoped以后，你的swiper分页样式就失效了！因为分页是在mouted里创建的，此时创建的DOM，vue是不会帮你把上面加上scoped自定义属性的！
    - 解决方案: 
       a. 去掉scoped
       b. 在<style lang="xxx" scoped><style>下面再加一个不带scoped的style标签,将自定义的样式写在这个标签内, 就可以生效了   

## day4
  - 关于文本省略号问题
    - 文字并没有充满第二行就显示省略号, js加工处理, 超出多少字后添加省略号
    
  - 同一个组件使用多个swiper, 注意命名不要相同
  
  - stylus带分号还可能报错...
  
  - v-for遍历, 如一个数组内有八项内容, 想遍历前六项, 可以通过v-if(index < 6)来进行控制  
  
  - better-scroll初次打开页面无法显示: watch + nextTick()
  
  - 小bug:
    - 问题: 一个组件内有better-scroll创建的实例对象BScroll, 但是这个组件需要复用, 此时如果BScroll的标签名如果是确定的话, 整个页面就只会生成一个BScroll实例对象, 导致只有一个可以正常滑动
    - 解决办法: 给BScroll实例兑现设置动态类名
    - code: new BScroll(`.goodsGrid-wrapper-${String.fromCharCode(97 + index)}`, {scrollX: true})
    - 作用: 根据变化的index通过ASCII确定动态类名
  
  - 关于float和inline-block
      - inline-block元素沿着默认的基线对齐。浮动元素紧贴顶部。你可以通过vertical属性设置这个默认基线
    
## day5
  - 分类
    - query参数获取商品id, 设置二级路由
  
## day6
  - css3 图片的模糊效果             filter:blur(2px);

## day7 
  - 报错: Duplicate keys detected: '1'. This may cause an update error
  - 解决办法: 
    1.删除整行代码 <th v-for="value in tableColumn" :key="value"></th>
    2.将  <th v-for="value in tableColumn" :key="value"></th> 修改为 <th v-for="value in tableColumn" :key="value + '-label'"></th>
    
  - 使用计算属性, 计算人数, k,w为单位
 
## day8
  - css相关
    - 3d效果的轮播, 使用swiper   effect
    - 瀑布流效果 
      两种解决方案
        - 多列布局
        - flex布局(需要先处理一下数据)
      - 瀑布流数据切换
        - 请求数据, 会把原来的数据覆盖, 根据type值来判断是否覆盖
  - 关于上拉加载的问题
    - better-scroll实现, 配置pullUpLoad属性,函数节流
    - vuex管理状态, 上拉加载的数据,不可以直接赋值.需要追加数据, 扩展运算符进行追加
  - 图片过多, 懒加载, 引入vue-lazyload
  
  - 前端表单验证 (slot复用界面)      
  - 搜索, 函数防抖
    
