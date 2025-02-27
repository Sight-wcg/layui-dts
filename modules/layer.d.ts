declare namespace Layui {
  /**
   * 第一个按钮回调即yes回调
   * @param index 当前层索引参数
   * @param layero 当前层的jqDOM
   */
  type LayerCallbackYes = (index: number, layero: JQuery) => boolean | Promise<boolean> | JQueryDeferred<boolean> | void;
  /**
   * 层关闭的回调,如果不想关闭，return false即可
   * @param index 当前层索引参数
   * @param layero 当前层的DOM对象
   */
  type LayerCallbackCancel = (index: number, layero: JQuery) => boolean | void;
  type LayerCallbackEnd = () => void;
  type LayerCallbackFull = (layero: JQuery) => void;
  type LayerCallbackMin = (layero: JQuery, index: number) => void;
  type LayerCallbackRestore = (layero: JQuery) => void;
  /**
   * 输入层
   * @param value 输入的值
   * @param index 当前层实例的索引
   * @param layero 当前层的jqDOM
   */
  type LayerCallbackPrompt = (value: string, index: number, layero: JQuery) => void;
  // https://www.layui.com/doc/modules/layer.html#base
  /**
   * 弹层组件
   */
  interface LayerOptions {
    /**
     * 基本层类型    ，layer提供了5种层类型。可传入的值有：    <br/>&nbsp;
     *   0（默认信息框）,1（页面层）,    <br/>&nbsp;
     *   2（iframe层）,3（加载层）,4（tips层）。    <br/>&nbsp;
     *   若你采用layer.open({type: 1})方式调用，则type为必填项（信息框除外）
     */

    type?: 0 | 1 | 2 | 3 | 4;
    /**
     * 标题，不想显示标题栏可以title: false
     * @example
     * title :'我是标题'
     * title: ['文本', 'font-size:18px;']  // 给文本指定style样式
     */
    title?: string | boolean | string[];
    /**
     * 内容
     * @default ''
     */
    content?: string | HTMLElement | JQuery | string[];
    /**
     * 样式类名，允许你传入layer内置的样式class名，还可以传入您自定义的class名
     * @default    ''
     * @example
     * skin: 'demo-class' // 自定义
     * skin:'layui-layer-lan' // 内置深蓝主题
     * skin: 'layui-layer-molv' // 内置墨绿主题
     * skin: 'layui-layer-win10' // 内置 Windows 10 风格主题，2.8.0
     */
    skin?: string;
    /**
     * 宽高
     * @default 'auto'
     * @example
     * area: '500px'  // 高会自适应
     * area: ['500px', '300px'] // 指定宽高
     */
    area?: string | string[];
    // https://www.layui.com/doc/modules/layer.html#offset
    /**
     * 坐标
     * @default  'auto' // 即垂直水平居中
     * @example
     * offset: '100px'  // 只定义top坐标，水平保持居中
     * offset: ['100px', '50px'] // 同时定义top、left坐标
     * offset: 't'	// 快捷设置顶部坐标
     * offset: 'r'	// 快捷设置右边缘坐标
     * offset: 'b'	// 快捷设置底部坐标
     * offset: 'l'	// 快捷设置左边缘坐标
     * offset: 'lt'	// 快捷设置左上角
     * offset: 'lb'	// 快捷设置左下角
     * offset: 'rt'	// 快捷设置右上角
     * offset: 'rb'	// 快捷设置右下角
     */
    offset?: number | string | string[];
    /**
     * 图标  <br/>&nbsp;
     * 当type为0(即信息框)可以传入0-6启用图标  <br/>&nbsp;
     * 当type为3(即加载层)可以传入0-2启用图标
     *  @default  -1  // 不显示图标
     *  @example
     *  type:0,icon: 0  //0(!),1(√)，2(x),3(?),4(锁),5(cry)，6(smile), 其他数字同0
     *  type:3,icon:0  //0(3个点)，1（慢圈），2(慢快圈) ，其他数字同0
     */
    icon?: number;
    // https://www.layui.com/doc/modules/layer.html#btn
    /**
     * 按钮 <br/>&nbsp;
     * 信息框模式时(type:0)，btn默认是一个确认按钮，其它层类型则默认不显示，加载层和tips层则无效 <br/>&nbsp;
     *  可以定义更多按钮，比如：btn: ['按钮1', '按钮2', '按钮3', …]，按钮1的回调是yes， <br/>&nbsp;
     *   而从按钮2开始，则回调为btn2: function(){}，以此类推。
     *   @default '确认'
     *   @example
     *   type:0,btn: '我知道了'
     *   type:0,btn: ['yes','btn2'] // 第一个对应yes回调，后边对应btn2,btn3回调
     */
    btn?: string | string[];

    /**
     * 按钮排列  默认：r    <br/>&nbsp;
     * @default 'r'
     * @example
     *  btnAlign: 'l' // 按钮左对齐
     *  btnAlign: 'c' // 按钮居中对齐
     *  btnAlign: 'r' //  按钮右对齐。默认值，不用设置
     */
    btnAlign?: string;
    /**
     * 右上角的关闭按钮  默认：1    <br/>&nbsp;
     *  layer提供了两种风格的关闭按钮，可通过配置1和2来展示，如果不显示，则closeBtn: 0
     *  @default 1
     *  @example
     *  closeBtn: 0 // 隐藏右上角的关闭按钮
     *  closeBtn: 1  //  x
     *  closeBtn: 2  //  O+x
     */
    closeBtn?: string | boolean | number;
    /**
     * 遮罩
     * @default 0.3 // 0.3透明度的黑色背景（'#000'）
     * @example
     * shade: 0  // 不显示遮罩
     * shade: [0.8, '#393D49'] // 指定透明度和遮罩颜色
     */
    shade?: string | boolean | number | [number, string];
    /**
     * 是否点击遮罩关闭
     * @default false
     */
    shadeClose?: boolean;
    /**
     *  自动关闭所需毫秒
     *  @default 0
     *  @example
     *  time: 5000 // 即代表5秒后自动关闭
     */
    time?: number;
    /**
     * 用于控制弹层唯一标识 <br/>&nbsp;
     * 设置该值后，不管是什么类型的层，都只允许同时弹出一个。一般用于页面层和iframe层模式
     * @default ''
     */
    id?: string;
    // https://www.layui.com/doc/modules/layer.html#anim
    /**
     * 弹出动画     <br/>&nbsp;
     *   目前anim可支持的动画类型有0-6 如果不想显示动画，设置 anim: -1 即可<br>&nbsp;
     *   2.8.0 新增四个方向动画
     *   @default 0
     *   @example
     *   anim: -1 // 不显示动画
     *   anim: 0 // 平滑放大。默认
     *   anim: 1 // 从上掉落
     *   anim: 2 // 从最底部往上滑入
     *   anim: 3 // 从左滑入
     *   anim: 4 // 从左翻滚
     *   anim: 5 // 渐显
     *   anim: 6 // 抖动
     *   anim: 'slideDown' // 从上往下
     *   anim: 'slideLeft' // 从右往左
     *   anim: 'slideUp' // 从下往上
     *   anim: 'slideRight' // 从左往右
     */
    anim?: number;
    /**
     * 关闭动画
     * @default true
     */
    isOutAnim?: boolean;
    /**
     * 最大最小化  <br/>&nbsp;
     *   该参数值对type:1和type:2有效,需要显示配置maxmin: true即可
     *   @default false // 默认不显示最大小化按钮
     *   @example
     *   type:1,maxmin:true
     *   type:2,maxmin:true
     */
    maxmin?: boolean;
    /**
     * 固定 ，即鼠标滚动时，层是否固定在可视区域
     * @default true // 默认固定在可视区域显示
     * @example
     * fixed: false // 不固定
     */
    fixed?: boolean;
    /**
     * 是否允许拉伸 ,该参数对loading(type:3)、tips(type:4)层无效
     * @default true // 允许拉伸,在弹层右下角拖动来拉伸尺寸
     */
    resize?: boolean;

    /**
     * 监听窗口拉伸动作
     * @default null
     */
    resizing?(layero: JQuery): any;

    /**
     * 是否允许浏览器出现滚动条
     * @default true
     */
    scrollbar?: boolean;
    /**
     * 最大宽度 ,只有当area: 'auto'时，maxWidth的设定才有效。
     * @default 360
     * @example
     * area: 'auto',maxWidth: 800
     */
    maxWidth?: number;
    /**
     * 层叠顺序
     * @default 19891014
     */
    zIndex?: number;
    /**
     * 触发拖动的元素
     * @default '.layui-layer-title'
     */
    move?: string | boolean | HTMLElement;
    /**
     * 固定1，不能修改
     */
    readonly moveType?: boolean;
    /**
     * 是否允许拖拽到窗口外
     * @default false
     *
     */
    moveOut?: boolean;
    /**
     *  拖动完毕后的回调方法
     *  @default null
     */
    moveEnd?: null | ((layero: JQuery) => any);
    /**
     * tips方向和颜色
     * @default 2  // 箭头在右边，黑色
     * @example
     * tips: 1    //箭头在上
     * tips: 2    //箭头在右
     * tips: 3    //箭头在下
     * tips: 4    //箭头在左
     * layui.layer.tips('提示内容','#abc',{tips:1})
     * layui.layer.tips('提示内容','#abc',{tips:[1, 'red']})  // 指定颜色
     * layui.layer.tips('提示内容','#abc',{tips:[1, '#f00']})
     * layui.layer.tips('提示内容','#abc',{tips:[1, 'rgb(255,0,0)']})
     */
    tips?: number | [number, string];
    /**
     * 是否允许多个tips ，true则允许多个意味着不会销毁之前的tips层
     * @default false  // 同一时刻只有一个提示框
     */
    tipsMore?: boolean;
    /**
     * 层弹出后的成功回调方法
     * @param layero 弹层的最外层元素的 jQuery 对象
     * @param index 弹层的索引值
     * @param that 弹层内部原型链中的 this, 当前弹层实例对象（2.8.0）
     */
    success?(layero?: JQuery, index?: number, that?: any): void;
    /**
     * 确定按钮回调方法
     */
    yes?: LayerCallbackYes;

    /**
     * 可以定义更多按钮，比如：btn: ['按钮1', '按钮2', '按钮3', …]，按钮1的回调是yes， <br/>&nbsp;
     * 而从按钮2开始，则回调为btn2: function(){}，以此类推。
     */
    btn2?: LayerCallbackYes;
    btn3?: LayerCallbackYes;
    btn4?: LayerCallbackYes;
    btn5?: LayerCallbackYes;
    btn6?: LayerCallbackYes;
    btn7?: LayerCallbackYes;
    btn8?: LayerCallbackYes;
    btn9?: LayerCallbackYes;

    /**
     * 右上角关闭按钮触发的回调
     */
    cancel?: LayerCallbackCancel;
    /**
     * 层销毁后触发的回调
     */
    end?: LayerCallbackEnd;
    /**
     * 最大化后触发的回调
     */
    full?: LayerCallbackFull;
    /**
     * 最小化后触发的回调
     */
    min?: LayerCallbackMin;
    /**
     * 还原后触发的回调
     */
    restore?: LayerCallbackRestore;
    /**
     * 最小化后是否默认堆叠在左下角 默认：true
     * @since 2.6
     */
    minStack?: boolean;
    /**
     * 是否移除弹层触发元素的焦点，避免按回车键时重复弹出
     * @default true
     * @since 2.8.0
     */
    removeFocus?: boolean;
    /**
     * 关闭弹层时设置为隐藏，须与 id 属性同时使用
     * @default false
     * @since 2.8.3
     */
    hideOnClose?: boolean;
    /**
     * 异步按钮。开启之后，除 `layer.prompt` 的按钮外，
     * 按钮回调的返回值将支持 `boolean | Promise<boolean> | JQueryDeferred<boolean>` 类型，
     * 返回 `false` 或 `Promise.reject` 时阻止关闭。
     * 注意，此时 `yes` 和 `btn1`(两者等效) 回调的默认行为发生了变化，即由触发时不关闭弹层变为关闭弹层。
     * @since 2.9.13
     */
    btnAsync?: boolean;

    /**
     * 弹层被关闭前的回调函数。如果返回 false 或者 Promise.reject，将会取消关闭操作
     * @param layero 弹层元素的 jQuery 对象
     * @param index 弹层索引
     * @since 2.9.11
     */
    beforeEnd?(layero: JQuery, index: number): boolean | JQueryDeferred<boolean> | Promise<boolean>;
  }

  /**
   * 配置layer层的基础参数
   * @example
   * ```javascript
   * layui.layer.config({
   *    anim: 1, // 默认动画风格
   *    skin: 'layui-layer-molv', // 默认皮肤
   *    extend: 'myskin/style.css', // 样式位置
   *    //...
   * });
   * ```
   */
  interface LayerConfigOptions extends LayerOptions {
    /**
     * layer.js所在的目录，可以是绝对目录，也可以是相对目录
     * @example
     * path: '/res/layer/'
     */
    path?: string;
    /**
     * 要加载的拓展css皮肤  <br/>&nbsp;
     * 如果是独立版的layer，则将 myskin 存放在 ./skin 目录下   <br/>&nbsp;
     * 如果是layui中使用layer，则将 myskin 存放在 ./css/modules/layer 目录下
     * @example
     * extend: 'myskin/style.css'
     */
    extend?: string[] | string;
  }

  /**
   * 输入框的参数对象
   * @example ```javascript
   * layui.layer.prompt({
   *    formType: 2, // 输入框类型，支持0（文本）默认1（密码）2（多行文本）
   *    value: '初始值', // 初始时的值，默认空字符
   *    maxlength: 140, // 可输入文本的最大长度，默认500
   *    title: '请输入值',
   *    area: ['800px', '350px'], // 自定义文本域宽高
   *  },(value, index, elem) => {
   *     layui.layer.alert(value); // 得到value
   *     layui.layer.close(index);
   *   },
   * );
   * ```
   */
  interface LayerPromptOptions extends LayerOptions {
    /**
     * 输入框类型，支持0（文本）默认1（密码）2（多行文本）
     * @example
     * formType: 0 // 文本
     * formType: 1 // 密码
     * formType: 2 // 多行文本
     */
    formType?: number;
    /**
     * 初始时的值
     * @default ''
     */
    value?: string;
    /**
     * 可输入文本的最大长度
     * @default 500
     */
    maxlength?: number;
    /**
     * 自定义文本域宽高
     * @example
     * ['800px', '350px']
     */
    area?: string[];
    /**
     * 输入框内容为空时的占位符
     * @since 2.8.0
     */
    placeholder?: string;
  }

  interface LayerTabOptions extends LayerOptions {
    tab: Array<{ title: string; content: string }>;
  }

  interface LayerPhotosOptions extends LayerOptions {
    /**
     * json或者选择器 用于构造img
     */
    photos?: LayerPhotosData | string | JQuery;

    /**
     * 切换图片时触发
     * @param pic 当前图片的一些信息
     * @param layero 当前元素
     */
    tab?(pic: LayerPhotosDataItem, layero: JQuery): void;
    /**
       * 是否隐藏图片底部栏
       * @default false
       * @since 2.8.0
       * @deprecated 2.8.16 已移除，请使用 @link{LayerPhotosOptions.footer}

       */
    hideFooter?: boolean;
    /**
     * 是否显示顶部工具栏
     * @default true
     * @since 2.8.16
     */
    toolbar?: boolean;
    /**
     * 是否隐藏底部栏
     * @default false
     * @since 2.8.16
     */
    footer?: boolean;
  }

  interface LayerPhotosData {
    /**
     * 相册标题
     */
    title?: string;
    /**
     * 相册id
     * @example
     * id: 123
     */
    id?: number;
    /**
     * 初始显示的图片序号
     * @default 0
     */
    start?: number;
    /**
     * 相册包含的图片，数组格式
     * @example ```javascript
     * "data": [{
     *     "alt": "图片名",
     *     "pid": 666, //图片id
     *     "src": "", //原图地址
     *     "thumb": "" //缩略图地址
     * }]
     * ```
     */
    data?: LayerPhotosDataItem[];
  }

  interface LayerPhotosDataItem {
    /**
     * 图片名
     */
    alt?: string;
    /**
     * 图片id
     */
    pid?: number;
    /**
     * 原图地址
     */
    src?: string;
    /**
     * 缩略图地址
     */
    thumb?: string;
  }

  /**
   * 弹层组件
   */
  interface Layer {
    ie: boolean;
    index: number;
    path: string;
    v: string;
    zIndex: number;

    // https://www.layui.com/doc/modules/layer.html#layer.config
    /**
     * 初始化全局配置
     * @param options  基础参数
     * @param fn  无用
     */
    config(options: LayerConfigOptions, fn?: any): void;

    /**
     * 执行初始化，就绪后执行回调参数    <br/>&nbsp;
     * ready(path: string, callback: () => void): void; //兼容旧版？    <br/>&nbsp;
     * 初始化就绪 (CSS完成的回调),当你在页面一打开就要执行弹层时可放入回调中
     * @param callback 就绪后回调
     */
    ready(callback: () => void): void;

    /**
     * 原始核心方法
     * @param options  基础参数
     */
    open(options?: LayerOptions): number;

    /**
     * 普通信息框
     * @param content 内容
     * @param options 基础参数
     * @param yes  点击确定后的回调
     */
    alert(content?: any, options?: LayerOptions, yes?: LayerCallbackYes): number;

    // 源码中会第三个参数代替第二个。单独定义一个方法。
    /**
     * 普通信息框
     * @param content 内容
     * @param yes  点击确定后的回调
     */
    alert(content: any, yes: LayerCallbackYes): number;

    /**
     * 询问框
     * @param content  提示内容
     * @param options  参数
     * @param yes  确认回调
     * @param cancel  右上角关闭按钮触发的回调
     * @example ```javascript
     * layer.confirm('is not?', {
     *    icon: 3,
     *    title: '提示',
     *    cancel: (index, layero) => {
     *        console.log("点击了右上角关闭");
     *        //return false  //点击右上角叉号不能关闭
     *    }
     * }, (index, layero) => {
     *    console.log("点击了下边的第一个按钮'确定'");
     *    layer.close(index);//需要手动关闭
     * }, (index, layero) => {
     *    console.log("点击了下边的第二个按钮'取消'");
     *    //return false // 点击取消不能关闭
     * });
     * ```
     */
    confirm(content?: any, options?: LayerOptions, yes?: LayerCallbackYes, cancel?: LayerCallbackCancel): number;

    /**
     * 询问框
     * @param content   提示内容
     * @param yes   确认回调
     * @param cancel    右上角关闭按钮触发的回调
     * @example ```javascript
     * layer.confirm('is not?', (index,layero) => {
     *   // do something
     *    layer.close(index);
     * },(index,layero)=>{
     *   return false // 返回false则取消关闭
     * });
     * ```
     */
    confirm(content: any, yes: LayerCallbackYes, cancel?: LayerCallbackCancel): number;

    // https://www.layui.com/doc/modules/layer.html#layer.msg
    /**
     * 提示框
     * @param content 提示内容
     * @param options 参数
     * @param end 自动关闭后的回调
     */
    msg(content?: string, options?: LayerOptions, end?: LayerCallbackEnd): number;

    // https://www.layui.com/doc/modules/layer.html#layer.load
    /**
     *  提示框
     * @param content 提示内容
     * @param end 自动关闭后的回调
     */
    msg(content: string, end?: LayerCallbackEnd): number;

    /**
     * 加载层
     * @param icon  可用：0,1,2
     * @param options 参数
     */
    load(icon?: number, options?: LayerOptions): number;

    /**
     * 加载层
     * @param options 参数
     */
    load(options: LayerOptions): number;

    // https://www.layui.com/doc/modules/layer.html#layer.tips
    /**
     *  tips层
     * @param content 显示的内容
     * @param follow  在那里显示
     * @param options 参数
     */
    tips(content?: string, follow?: string | HTMLElement | JQuery, options?: LayerOptions): number;

    /**
     * 关闭指定层
     * @param index 层索引
     * @param callback 关闭后的回调
     */
    close(index: number, callback?: () => any): void;

    /**
     * 关闭所有层
     * @param type 只想关闭某个类型的层,不传则关闭全部
     */
    /**
     * 闭所有层
     * @param type 只想关闭某个类型(dialog,page,iframe,loading,tips)的层,不传则关闭全部
     * @param callback  关闭所有层后执行回调
     */
    closeAll(type?: 'dialog' | 'page' | 'iframe' | 'loading' | 'tips', callback?: () => any): void;

    /**
     *
     * @param callback  关闭所有层后执行回调
     */
    closeAll(callback: () => any): void;

    /**
     * 关闭最近一次打开的层
     * @param type 弹层的类型
     * @param callback 关闭后执行的回调(2.9.0)
     * @since 2.8.0
     */
    closeLast(type?: 'dialog' | 'page' | 'iframe' | 'loading' | 'tips', callback?: AnyFn): void;

    /**
     * 重新定义层的样式
     * @param index  层索引
     * @param options 参数
     * @param limit  影响宽度和高度
     */
    style(index: number, options: { [key: string]: string | number }, limit?: boolean): void;

    /**
     * 改变层的标题
     * @param title 新标题
     * @param index  层索引
     */
    title(title: string, index: number): void;

    /**
     * 获取iframe页的DOM
     * @param selector
     * @param index
     */
    getChildFrame(selector: string | HTMLElement | JQuery, index: number): JQuery;

    /**
     * 获取特定iframe层的索引
     * @param windowName  即window.name
     */
    getFrameIndex(windowName: string): number;

    /**
     * 指定iframe层自适应
     * @param index  层索引
     */
    iframeAuto(index: number): void;

    /**
     * 重置特定iframe url <br/>&nbsp;
     *   如：layer.iframeSrc(index, 'http://sentsin.com')
     * @param index 层索引
     * @param url
     */
    iframeSrc(index: number, url: string): void;

    /**
     * 置顶当前窗口
     * @param layero
     */
    setTop(layero: JQuery): void;

    /**
     * 手工执行最大化
     * @param index 层索引
     */
    full(index: number): void;

    /**
     * 手工执行最小化
     * @param index 层索引
     */
    min(index: number): void;

    /**
     * 手工执行还原
     * @param index 层索引
     */
    restore(index: number): void;

    /**
     * 输入层
     * @param options 参数
     * @param yes 点击确定的回调，用该参数而不是用options的yes
     */
    prompt(options?: LayerPromptOptions, yes?: LayerCallbackPrompt): number;

    /**
     * 输入层
     * @param yes 点击确定的回调
     */
    prompt(yes: LayerCallbackPrompt): number;

    /**
     * tab层
     * @param options  参数，一般配置area和tab
     */
    tab(options?: LayerTabOptions): number;

    /**
     * 相册层
     * @param options 参数
     */
    photos(options?: LayerPhotosOptions): number;
  }
}
