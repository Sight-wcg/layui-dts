declare namespace Layui {
  interface DropDownOptionData {
    /**
     * 菜单标题
     */
    title?: string;
    /**
     * 菜单 ID。用户菜单项唯一索引
     */
    id?: string | number;
    /**
     * 菜单项的超链接地址。若填写，点击菜单将直接发生跳转。
     */
    href?: string;
    /**
     * 菜单项是否禁用状态
     * @default false
     * @since 2.8.0
     */
    disabled?: boolean;
    /**
     * 菜单项超链接的打开方式，需 href 填写才生效。 <br/>&nbsp;
     * 一般可设为 _blank 或 _self 等 默认：_self
     */
    target?: string;
    /**
     * 菜单项的类型,normal（默认） ,group（垂直菜单组） <br/>&nbsp;
     *   parent（横向父子菜单） ,-（分割线） 默认：normal 或 不填
     */
    type?: string;
    /**
     * 子级菜单数据项。参数同父级，可无限嵌套。  默认：[]
     */
    child?: DropDownOptionData[];
    /**
     * 自定义当前菜单项模板，优先级高于全局设定的 templet。详见下文。
     */
    templet?: string;

    [index: string]: any;
  }

  interface DropDownOption {
    /**
     * 绑定触发组件的元素。必填项
     */
    elem: string | HTMLElement | JQuery;
    /**
     * 菜单列数据项，其参数详见下文。必填项  也可用content支持模板
     */
    data?: DropDownOptionData[];
    /**
     * 给当前实例设置个唯一标识
     */
    id?: string;
    /**
     * 触发组件的事件类型。支持所有事件，如：click/hover/mousedown/contextmenu 等 默认：click
     */
    trigger?: string;
    /**
     * 是否初始即显示组件面板 默认：false
     */
    show?: boolean;
    /**
     * 下拉面板相对绑定元素的水平对齐方式（支持: left/center/right） v2.6.8 新增 默认：left
     */
    align?: 'left' | 'center' | 'right';
    /**
     * 是否允许菜单组展开收缩 默认：true
     */
    isAllowSpread?: boolean;
    /**
     * 是否初始展开子菜单 默认：true
     */
    isSpreadItem?: boolean;
    /**
     * 延迟关闭的毫秒数。当 trigger 为 hover 时才生效 默认：300
     * 自 2.9.2 支持数组类型
     */
    delay?: number | Array<number>;
    /**
     * 自定义组件的样式类名
     */
    className?: string;
    /**
     * 设置组件的 style 属性，从而定义新的样式
     */
    style?: string;
    /**
     * 设置弹出时的遮罩。支持以下方式赋值：
     * - 若值为 `number` 类型，则表示为遮罩透明度，如: `shade: 0.3`
     * - 若值为 Array 类型，则可同时设置透明度和背景色，如: `shade: [0.3, '#000']`
     * @default 0
     * @since 2.8.0
     */
    shade?: number | (string | number)[];
    /**
     * 全局定义菜单的列表模板，添加任意 html 字符，模版将被 laytpl 组件所转义，<br/>&nbsp;
     *  因此可通过 {{ d.title }} 的方式得到当前菜单配置的数据。<br/>&nbsp;
     *   详见 https:// www.layui.com/doc/modules/dropdown.html#templet
     * @example
     * ```
     * // 2.8.0 支持函数类型
     * templet: function(d){
     *   return '<i class="layui-icon layui-icon-tips"></i> ' + d.title;
     * }
     * ```
     */
    templet?: string | ((d: object) => string);
    /**
     * 自定义组件内容，从而替代默认的菜单结构
     */
    content?: string;

    /**
     * 设置触发点击事件的菜单范围。支持以下可选值：
     * - `all`: 即代表父子菜单均可触发事件
     * - 默认无需设置，即父级菜单不触发事件
     * @since 2.8.0
     */
    clickScope?: string;

    /**
     * 自定义 data 数据源中常用的字段名称
     * @since 2.8.15
     */
    customName?: { [T in keyof DropDownOptionData]: string };

    /**
     * 是否开启手风琴动画
     * @default false
     * @since 2.8.18
     */
    accordion?: boolean;

    /**
     * 点击触发元素时是否关闭面板
     * @default true
     * @since 2.9.18
     */
    closeOnClick?: boolean;

    /**
     * 组件成功弹出后的回调，并返回两个参数
     * @param [elemPanel]  弹出的面板
     * @param [elem]  点击的面板
     */
    ready?(elemPanel: JQuery, elem: JQuery): void;

    /**
     * 菜单项被点击时的回调，并返回两个参数
     *
     * 若返回 false，则点击选项可不关闭面板（2.8.0）
     * e 事件对象 2.9.18+
     */
    click?(data: any, othis: JQuery, e: Event): void | boolean;
    /**
     * 面板关闭后的回调函数
     * @param elem 当前组件绑定的目标元素对象
     * @since 2.9.7
     */
    close?(elem: JQuery): void;
    /**
     * 点击 dropdown 外部时的回调函数，返回 `false` 可阻止关闭
     * @param e 事件对象
     * @since 2.9.18
     */
    onClickOutside?(e: Event): boolean | void;
  }

  /**
   * reload时是用，全部可选
   */
  type DropDownOptionForReload = Partial<DropDownOption>;
  /**
   * 全部必有项 用于查看
   */
  type DropDownOptionForRead = Required<DropDownOption>;

  interface DropDownModule {
    config: DropDownOptionForRead;

    reload(options?: DropDownOptionForReload | object): void;

    /**
     * 打开面板
     * @since 2.9.8
     */
    open(): void;

    /**
     * 关闭面板
     * @since 2.8.0
     */
    close(): void;
  }

  interface DropDown {
    config: { [index: string]: any };
    index: number;

    set(options: DropDownOption): DropDown;

    /**
     * 给dropdown绑定事件，当前只有click  即event类似:click(id|filter)
     * @param [event]  事件名 如： click(id|filter)  括号内是.layui-menu的id=""或者lay-filter=""
     * @param [callback]  回调中的参数是  <li lay-options="{id: 101}">中lay-options的值 字符串用''
     */
    on(event: string, callback: (this: HTMLElement, obj: any) => any): any;

    /**
     * 重载实例
     * @param [id]  id参数为render>options中的id，如果render时未指定id则从1开始。
     * @param [options]  全部基础参数
     */
    reload(id: string, options: DropDownOptionForReload): DropDownModule;

    /**
     * 仅数据或内容重载
     * @param [id]  id参数为render>options中的id，如果render时未指定id则从1开始。
     * @param [options]  全部基础参数
     * @since 2.8.0
     */
    reloadData(id: string, options: DropDownOptionForReload): DropDownModule;

    /**
     * 核心入口
     */
    render(options: DropDownOption): DropDownModule;

    /**
     * 关闭面板
     * @param id 组件渲染时定义的 id 属性值
     * @since 2.8.0
     */
    close(id: string): DropDownModule;
    /**
     * 打开面板
     * @param id 组件渲染时定义的 id 属性值
     * @since 2.9.8
     */
    open(id: string): DropDownModule;
  }
}
