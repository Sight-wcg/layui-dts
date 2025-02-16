declare namespace Layui {
  interface TableColumnOption {
    checkbox?: boolean;
    /**
     * 设定字段名。非常重要，且是表格数据列的唯一标识,若没有则用索引
     */
    field?: string;
    /**
     * 设定标题名称
     */
    title?: string;
    /**
     * 设置列的字段标题。该属性在筛选列和导出场景中优先级高于 {@link TableColumnOption.title|title} 属性
     * @since 2.8.0
     */
    fieldTitle?: string;
    /**
     * 设定列宽，若不填写，则自动分配；若填写，则支持值为：数字、百分比。    <br/>&nbsp;
     *   请结合实际情况，对不同列做不同设定。
     */
    width?: string | number;
    /**
     * 局部定义当前常规单元格的最小宽度（默认：60），    <br/>&nbsp;
     *   一般用于列宽自动分配的情况。其优先级高于基础参数中的 cellMinWidth
     */
    minWidth?: number;
    /**
     * 设置当前列的最大宽度。其优先级高于基础属性中的 {@link TableOption.cellMaxWidth|cellMaxWidth}
     * @since 2.8.0
     */
    maxWidth?: number;
    /**
     * 设定列类型,可选有： 默认：normal
     */
    type?: 'normal' | 'checkbox' | 'radio' | 'space' | 'numbers';
    /**
     * 是否全选状态（默认：false）。必须复选框列开启后才有效，
     *   如果设置 true，则表示复选框默认全部选中。
     */
    LAY_CHECKED?: boolean;
    /**
     * 固定列。可选值有：left（固定在左）、right（固定在右）。一旦设定，对应的列将会被固定在左或右，不随滚动条而滚动。    <br/>&nbsp;
     *   注意：如果是固定在左，该列必须放在表头最前面；如果是固定在右，该列必须放在表头最后面。    <br/>&nbsp;
     *    非"right"就是left
     */
    fixed?: 'left' | 'right';
    /**
     * 是否初始隐藏列，默认：false
     */
    hide?: boolean;
    /**
     * 是否开启该列的自动合计功能，默认：false。   <br>&nbsp;
     *  1、parseData中包含totalRow可以映射自定字段    <br>&nbsp;
     *  2、从 layui 2.6.3 开始，如果 totalRow 为一个 string 类型，则可解析为合计行的动态模板    <br>&nbsp;
     *     实例：totalRow: '{{ d.TOTAL_NUMS }} 单位'  或 '{{ parseInt(d.TOTAL_NUMS) }}'
     */

    totalRow?: boolean | { score: number | string; experience: string } | string;
    /**
     * 用于显示自定义的合计文本
     */
    totalRowText?: string;
    /**
     * 是否允许排序（默认：false）。   <br>&nbsp;
     * 如果设置 true，则在对应的表头显示排序icon，从而对列开启排序功能
     */
    sort?: boolean;
    /**
     * 是否禁用拖拽列宽（默认：false）。默认情况下会根据列类型（type）来决定是否禁用，如复选框列，会自动禁用。    <br/>&nbsp;
     *   而其它普通列，默认允许拖拽列宽，当然你也可以设置 true 来禁用该功能。
     */
    unresize?: boolean;
    /**
     * 是否对当前列进行内容编码（转义 html），优先级大于基础属性中的 {@link TableOption.escape | escape}
     * @default true
     * @since 2.7.5
     */
    escape?: boolean;
    /**
     * 单元格编辑类型（默认不开启）目前只支持：text（输入框）
     * - edit: `text` 单行输入模式
     * - edit: `textarea` 多行输入模式（2.7.0）
     * - edit: () => 'text' （2.7.5）
     */
    edit?: 'text' | 'textarea' | string | boolean | ((d?: TableColumnOptionForTemplet) => 'text' | 'textarea');
    /**
     * 自定义单元格点击事件名，以便在 tool 事件中完成对该单元格的业务处理，    <br/>&nbsp;
     *   比如：table.on('tool(tableFilter)', function(obj){obj.event=''})
     */
    event?: string;
    /**
     * 自定义单元格样式。即传入 CSS 样式,实例："background-color: #5FB878; color: #fff";
     */
    style?: string;
    /**
     * 单元格排列方式。可选值有：left（默认）、center（居中）、right（居右）
     */
    align?: 'left' | 'center' | 'right';
    /**
     * 单元格所占列数（默认：1）。一般用于多级表头
     */
    colspan?: number;
    /**
     * 单元格所占行数（默认：1）。一般用于多级表头
     */
    rowspan?: number;
    /**
     * 自定义列模板，模板遵循 laytpl 语法    <br/>&nbsp;
     *   回调参数d从v2.6.8新增 LAY_COL 字段，可得到当前列的表头配置信息
     *   laytpl:https://www.layui.com/doc/modules/laytpl.html
     */
    templet?: string | ((d?: TableColumnOptionForTemplet) => string);
    /**
     * 用于表格导出时的内容输出，当 `templet` 较复杂时建议使用，将优先以对应表头的 `exportTemplet` 的返回内容为导出结果
     * @example
     * ```
     * exportTemplet: function(d, obj){
     *   // 当前 td
     *   var td = obj.td(this.field);
     *   // 返回 select 选中值
     *   return td.find('select').val();
     * }
     * ```
     * @since 2.6.9
     */
    exportTemplate?: string | ((d?: TableColumnOptionForTemplet, obj?: { td?: (field: TableColumnOption['field']) => JQuery }) => string);
    /**
     * 绑定工具条模板。可在每行对应的列中出现一些自定义的操作性按钮    <br/>&nbsp;
     *  dom选择器，例如#toolbar
     */
    toolbar?: string;
    /**
     * 导出时忽略该列。支持以下可选值：
     * - true: 忽略导出
     * - false: 强制导出，对所有列适用
     * - null: 只对常规列导出（默认）
     * @since 2.8.3
     */
    ignoreExport?: boolean | null;

    /**
     * 设置单元格展开后宽度
     * @since 2.8.15
     */
    expandedWidth?: number;

    /**
     * 设置当前表头单元格展开方式，优先级高于 cellExpandedMode
     * 默认多行展开
     * @since 2.8.17
     */
    expandedMode?: 'tips';
  }

  /**
   * table 的templet回调参数格式 <br/>&nbsp;
   *  tips:templet回调中可以使用 d.xx  xx为任意参数 <br/>&nbsp;
   *  2.8.0 序号: `LAY_INDEX` → `LAY_NUM`；下标: `LAY_TABLE_INDEX` → `LAY_INDEX`
   */
  interface TableColumnOptionForTemplet {
    LAY_COL: TableColumnOptionForTempletCol;
    /**
     * 序号
     * @since 2.8.0
     */
    LAY_NUM: number;
    /**
     * 下标
     */
    LAY_INDEX: number;
    /**
     * 下标
     * @deprecated 2.8.0 移除，改为 `LAY_INDEX`
     */
    LAY_TABLE_INDEX: number;
    /**
     * @since 2.7.1
     */
    LAY_DISABLED: boolean;
    /**
     * 该属性不存在，只是提示你：你可以用d.xxx 使用当前行中的任意数据属性。
     */
    '你可以用 d.xx 来使用当前行的其他属性': never;
    [index: string]: any;
  }

  /**
   * table的templet回调中 d.LAY_COL的格式定义
   */
  interface TableColumnOptionForTempletCol extends Required<TableColumnOption> {
    HAS_PARENT: boolean;
    PARENT_COL_INDEX: number;
    key: string;
    parentKey: string;
  }

  /**
   * 用于修改request参数名
   */
  interface TableRequestRename {
    /**
     * 页码的参数名称，默认：page
     */
    pageName?: string;
    /**
     * 每页数据量的参数名，默认：limit
     */
    limitName?: string;
  }

  /**
   * 用于修改Response参数名
   */
  interface TableResponseRename {
    /**
     * 规定数据状态的字段名称，默认：code
     */
    statusName?: string;
    /**
     * 规定成功的状态码，默认：0
     */
    statusCode?: number;
    /**
     * 规定状态信息的字段名称，默认：msg
     */
    msgName?: string;
    /**
     * 规定数据总数的字段名称，默认：count
     */
    countName?: string;
    /**
     * 规定数据列表的字段名称，默认：data
     */
    dataName?: string;
  }

  /* 服务端返回数据不固定
    interface TableOriginResponse {
        status: number;
        message: string;
        total: number;
        data: any;
        [propName: string]: any;
    }
*/
  /**
   * 响应
   */
  interface TableResponse {
    code?: number;
    msg?: string;
    count?: number;
    data?: any;

    [propName: string]: any;
  }

  interface TableRendered {
    config: TableOption;

    reload(options: TableOption, deep?: boolean): void;

    /**
     * @since 2.7.0
     */
    reloadData(options: TableOption, deep?: boolean): void;

    setColsWidth(): void;

    resize(): void;
  }

  // https://www.layui.com/doc/modules/table.html#options
  /**
   * 基础参数
   */
  interface TableOption {
    /**
     * 指定原始 table 容器的选择器或 DOM，方法渲染方式必填
     */
    elem?: string | HTMLElement | JQuery;
    /**
     * 单元格编辑的事件触发方式
     * @since 2.7.0
     */
    editTrigger?: 'click' | 'dbclick';
    /**
     * 设置表头。值是一个二维数组。方法渲染方式必填 ,1维是表头集合，二维是列集合    <br/>&nbsp;
     * https://www.layui.com/doc/modules/table.html#cols
     */
    cols?: TableColumnOption[][];
    /**
     * 定义表格行样式，如每行的高度等各种样式
     * @example lineStyle: 'height: 95px;'
     * @since 2.7.0
     */
    lineStyle?: string;
    /**
     * 表格主容器追加 css 类名，以便更好地扩展表格样式
     * @since 2.7.0
     */
    className?: string;
    /**
     * 给当前表格主容器直接设定 css 样式，样式值只会对所在容器有效，不会影响其他表格实例
     * @example css: '.layui-table-page{text-align: right;}'
     * @since 2.7.0
     */
    css?: string;
    /**
     * 接口地址    <br/>&nbsp;
     *   默认会自动传递两个参数：?page=1&limit=30（该参数可通过 request 自定义）    <br/>&nbsp;
     *    page 代表当前页码、limit 代表每页数据量
     */
    url?: string | null;
    /**
     * 开启分页区域的自定义模板，用法同 toolbar 属性
     * @since 2.7.0
     */
    pagebar?: string;
    /**
     * 开启表格头部工具栏区域，该参数支持四种类型值：   <br>&nbsp;
     *  toolbar: '#toolbarDemo' // 指向自定义工具栏模板选择器  <br>&nbsp;
     *  toolbar: '<div>xxx</div>' // 直接传入工具栏模板字符  <br>&nbsp;
     *  toolbar: true // 仅开启工具栏，不显示左侧模板   <br>&nbsp;
     *  toolbar: 'default' // 让工具栏左侧显示默认的内置模板
     */
    toolbar?: string | HTMLElement | boolean;
    /**
     * 该参数可自由配置头部工具栏右侧的图标按钮 内置3个：    <br>&nbsp;
     * filter: 显示筛选图标，  <br>&nbsp;
     * exports: 显示导出图标， <br>&nbsp;
     * print: 显示打印图标
     */
    defaultToolbar?: Array<
      'filter' | 'exports' | 'print' | string | { title?: string; layEvent?: string; icon?: string } | { name?: string; layEvent?: string; icon?: string; onClick?: (obj?: object) => void }
    >;
    /**
     * 设定容器宽度(超出容器会自动出现横向滚动条),默认宽度是跟随它的父元素铺满
     */
    width?: number | string;
    /**
     * 设置表格容器高度，默认自适应
     * - `height: 315` 设置固定高度
     * - `height: 'full-30'` 设置自适应高度。这是一个特定的语法格式：full 表示铺满；后面的数字表示当前 table 之外的元素占用的高度，如：表格头部到页面最顶部加表格底部距离页面最底部的“距离和”
     * - `height: '#id-30'` 设置相对父元素的高度自适应，其中 #id 即父元素的 ID 选择器，其计算原理和上述 full 相同（2.8.0）
     * - `height: () => $(window).height() - otherHeight` 设置动态高度（2.9.1）
     */
    height?: number | string | (() => number);
    /**
     * 设置表格容器的最大高度，设置该属性后，height 属性将被认定为默认的自适应值
     * @since 2.8.0
     */
    maxHeight?: number;
    /**
     * 全局定义所有常规单元格的最小宽度（默认：60）
     */
    cellMinWidth?: number;
    /**
     * 设置所有普通单元格的最大宽度。其优先级低于表头属性中的 {@link TableColumnOption.maxWidth|maxWidth}
     * @since 2.8.0
     */
    cellMaxWidth?: number;
    /**
     * 设置重载数据或切换分页时的滚动条位置状态
     * - `fixed` 重载数据时，保持滚动条位置不变
     * - `reset` 重载数据时，滚动条位置恢复置顶
     * - `default`  默认方式，无需设置。即重载数据或切换分页时，纵向滚动条置顶，横向滚动条位置不变
     * @since 2.7.3
     */
    scrollPos?: 'fixed' | 'reset ' | 'default ';

    /**
     * 数据渲染之前的回调函数
     * @param options 各项基础参数
     * @since 2.7.3
     */
    before?(options?: TableOption): void;

    /**
     * 数据渲染完的回调。你可以借此做一些其它的操作
     * @param [res] 1、如果是异步请求数据方式，res即为你接口返回的信息。<br/>&nbsp;
     *             2、如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
     * @param [curr] 得到当前页码
     * @param [count] 得到数据总量
     * @param origin - 区分重载和重新渲染数据
     */
    done?(res: any, curr: number, count: number, origin?: string): void;

    /**
     *  数据请求失败的回调，返回两个参数：错误对象、内容
     * @param [e]  错误对象 ,是jqXHR对象（对XHR扩展），不同jquery版本其格式不同
     * @param [msg]  内容  比如 "error"
     */
    error?(e: any, msg: any): void;

    /**
     * 直接赋值数据。既适用于只展示一页数据，也非常适用于对一段已知数据进行多页展示。
     */
    data?: any[];
    /**
     * 是否开启 xss 字符过滤（默认 true，2.6.11 之前默认为 false）
     */
    escape?: boolean;
    /**
     * 是否开启合计行区域
     */
    totalRow?: boolean;
    /**
     * 开启分页（默认：false）,PageOptions时排除jump和elem
     */
    page?: boolean | PageOptions;
    /**
     * 每页显示的条数（默认 10）。值需对应 limits 参数的选项。    <br/>&nbsp;
     *  注意：优先级低于 page 参数中的 limit 参数
     */
    limit?: number;
    /**
     * 每页条数的选择项，默认：[10,20,30,40,50,60,70,80,90]。    <br/>&nbsp;
     * 注意：优先级低于 page 参数中的 limits 参数
     */
    limits?: number[];
    /**
     * 是否显示加载条（默认 true）。若为 false，则在切换分页时，不会出现加载条。    <br/>&nbsp;
     * 该参数只适用于 url 参数开启的方式
     * - 若值为 `string` 类型 2.9.10+，表示自定义加载模板，此时可添加任意动画元素
     * @example
     * ```
     * loading: '<i class="layui-icon layui-icon-loading-1 layui-anim layui-anim-rotate layui-anim-loop"></i>'
     * ```
     */
    loading?: boolean | string;
    /**
     * 定义 table 的大标题（在文件导出等地方会用到）
     */
    title?: string;
    /**
     * 自定义文本，如空数据时的异常提示等。
     */
    text?: { none: string };
    /**
     * 默认 true，即直接由 table 组件在前端自动处理排序。    <br/>&nbsp;
     * 若为 false，则需自主排序，即由服务端返回排序好的数据
     */
    autoSort?: boolean;
    /**
     * 初始排序状态。    <br/>&nbsp;
     * 用于在数据表格渲染完毕时，默认按某个字段排序。
     */
    initSort?: { field: string; type?: 'null' | 'desc' | 'asc' };
    /**
     * 设定容器唯一 id。id 是对表格的数据操作方法上是必要的传递条件，它是表格容器的索引
     */
    id?: string;
    /**
     * 用于设定表格风格
     */
    skin?: 'line' | 'row' | 'nob';
    /**
     * 若不开启隔行背景，不设置该参数即可
     */
    even?: boolean;
    /**
     * 用于设定表格尺寸，若使用默认尺寸不设置该属性即可
     */
    size?: 'sm' | 'lg';
    /**
     * 异接口http请求类型，默认：get
     */
    method?: string;
    /**
     * 接口的其它参数。如：where: {token: 'sasasas', id: 123}
     */
    where?: object | null;
    /**
     * 发送到服务端的内容编码类型。    <br/>&nbsp;
     * 如果你要发送 json 内容，可以设置：contentType: 'application/json'
     */
    contentType?: string;
    /**
     * 请求的数据类型，默认 json
     * @since 2.7.3
     */
    dataType?: string;
    /**
     * 设置当 `dataType: 'jsonp'` 时的回调函数名
     * @since 2.7.3
     */
    jsonpCallback?: string;
    /**
     * 接口的请求头。如：headers: {token: 'sasasas'}
     */
    headers?: object;

    /**
     * 数据格式解析的回调函数，用于将返回的任意数据格式解析成 table 组件规定的数据格式。
     * @param [res] 服务端返回的数据
     */
    parseData?(res: any): TableResponse;

    /**
     * 用于对分页请求的参数：page、limit重新设定名称，如果无需自定义请求参数，可不加该参数 <br/>&nbsp;
     *  通过parseData也可映射不同名称
     */
    request?: TableRequestRename;
    /**
     * 可以借助 response 重新设定本地识别响应字段名，如果无需自定义数据响应名称，可不加该参数  <br/>&nbsp;
     *   当默认支持的名称和服务端不一致可以通过本方式或者parseData来对应
     */
    response?: TableResponseRename;
    /**
     * 用于设置所有单元格默认展开方式，可选值有：
     * - tips 悬浮展开方式
     * - default 多行展开方式（默认）
     * @since 2.8.17
     */
    cellExpandedMode?: 'tips';
    /**
     * 用于设置所有单元格默认展开后的宽度。当 cellExpandedMode 属性为默认值时有效。
     * @default 60
     * @since 2.8.17
     */
    cellExpandedWidth?: number;
    /**
     * 数据接口请求完成后执行，无论成功还是失败均会触发
     * @param xhr 是jqXHR对象（对XHR扩展），不同jquery版本其格式不同
     * @param ts
     * @since 2.8.18
     */
    complete?(xhr: any, ts: any): void;
  }

  /**
   * 设置行选中时的可选属性
   * @since 2.8.0
   */
  interface TableSetRowCheckedOption {
    /**
     * 选中方式
     * @default 'checkbox''
     */
    type?: 'checkbox' | 'radio';
    /**
     * 选中行的下标。即数据的所在数组下标（0 开头）。可设置 `all` 表示全选
     * 数组类型 2.9.1+
     */
    index: string | number | Array<string | number> | 'all';
    /**
     * 选中状态值。 若为 `false` 可取消选中。
     * @default true
     */
    checked?: boolean;
    /**
     * 是否仅设置样式状态。若为 `true` 则只标注选中样式，不对数据中的 `LAY_CHECKED` 属性赋值。
     * @default false
     * @deprecated 2.8.7 已删除
     */
    selectedStyle?: boolean;
  }

  // ------------以下TableOn 开头interface，在调用地方使用----------
  interface TableOnCommon {
    /**
     * 当前行元素的 jQUery 对象
     */
    tr: JQuery;
    /**
     * 对应的表格实例配置项
     * @since 2.8.0
     */
    config: Required<TableOption>;
    /**
     * 当前操作的行数据
     */
    data: object;
    /**
     * 当前行缓存数据，包含特定字段
     * @since 2.8.8
     */
    dataCache: object;
    /**
     * 当前行索引
     */
    index: number | string;
    /**
     * 删除当前行
     */
    del(): void;
    /**
     * 更新当前行
     * @param fields 要更新的列字段对象
     * @param [related] 更新其他包含自定义模板并可能存在关联的列视图(2.7.4)
     */
    update(fields: Record<string, any>, related?: boolean | ((field: string, index: string | number) => void)): void;
    /**
     * 设置行选中状态
     */
    setRowChecked(opts: TableSetRowCheckedOption): void;
  }
  /**
   * 点击table中checkbox后回调参数的类型
   */
  interface TableOnCheckbox extends TableOnCommon {
    /**
     * 当前选中状态
     */
    checked: true;
    /**
     * 若触发的是全选，则为：all；若触发的是单选，则为：one
     */
    type: 'all' | 'one';
    /**
     * 获取当前列的配置信息
     * @since 2.8.3
     */
    getCol(): TableColumnOption;
  }

  /**
   * Table 单选事件
   */
  interface TableOnRadio extends TableOnCommon {
    /**
     * 当前选中状态
     */
    checked: true;
    /**
     * 获取当前列的配置信息
     * @since 2.8.3
     */
    getCol(): TableColumnOption;
  }

  /**
   * 点击尾部分页栏自定义模板后回调参数的类型
   * @since 2.7.0
   */
  interface TableOnPagebar {
    config: TableOption;
    event: string;
  }

  /**
   * 点击table上边工具栏后回调参数的类型
   */
  interface TableOnToolbar {
    config: TableOption;
    event: string;
  }

  /**
   * 点击table中工具列后回调参数的类型
   */
  interface TableOnTool extends TableOnCommon {
    /**
     * lay-event 属性值
     */
    event: string;
    /**
     * 获取当前列的配置信息
     * @since 2.8.3
     */
    getCol(): TableColumnOption;
  }

  /**
   * 双击table中工具列后回调参数的类型
   * @since 2.7.0
   */
  interface TableOnToolDouble extends TableOnCommon {
    /**
     * lay-event 属性值
     */
    event: string;
    /**
     * 获取当前列的配置信息
     * @since 2.8.3
     */
    getCol(): TableColumnOption;
  }

  /**
   * 点击table中行后回调参数的类型
   */
  interface TableOnRow extends TableOnCommon {
    /**
     * jQuery 事件对象
     */
    e: Event;
  }

  /**
   * 双击table中行后回调参数的类型
   */
  interface TableOnRowDouble extends TableOnCommon {
    /**
     * jQuery 事件对象
     */
    e: Event;
  }

  /**
   * 点击table中单元格编辑后回调参数的类型
   */
  interface TableOnEdit extends TableOnCommon {
    /**
     * 字段名
     */
    field: string;
    /**
     * 当前单元格元素的 jQuery 对象
     */
    td: JQuery;
    /**
     * 当前单元格的值
     */
    value: string;
    /**
     * 字段修改前的旧值
     * @since 2.8.0
     */
    oldValue: string;
    /**
     * 重新编辑
     * @since 2.8.0
     */
    reedit(): void;
    /**
     * 获取当前列表头配置信息
     * @since 2.8.0
     */
    getCol(): TableColumnOption;
  }

  /**
   * 点击table中列标题排序后回调参数的类型
   */
  interface TableOnSort {
    field: string;
    type: string;
  }

  /**
   * 列拖拽宽度后的事件
   * @since 2.8.0
   */
  interface TableOnColResized {
    /**
     * 获取当前列属性配置项
     */
    col: TableColumnOption;
    /**
     * 获取当前表格基础属性配置项
     */
    config: TableOption;
  }

  /**
   * 列筛选（显示或隐藏）后的事件
   * @since 2.8.0
   */
  interface TableOnColToggled {
    col: TableColumnOption;
    config: TableOption;
  }

  /**
   * 行右键菜单事件，需设置属性 `defaultContextmenu:false` 才生效
   * @since 2.8.0
   */
  interface TableOnRowContextmenu extends TableOnCommon {
    /**
     * jQuery 事件对象
     */
    e: Event;
  }

  /**
   * 表头自定义元素工具事件，点击表头单元格中带有 lay-event 属性的自定义元素触发
   * @since 2.8.8
   */
  interface TableOnColTool {
    /**
     * 获取当前列属性配置项
     */
    col: TableColumnOption;
    /**
     * 获取当前表格基础属性配置项
     */
    config: TableOption;
    /**
     * 获得自定义元素对应的 lay-event 属性值
     */
    event: string;
  }

  type TableFilter = string;
  type TableEventMap = {
    toolbar(this: HTMLElement, obj: TableOnToolbar): void;
    sort: (this: HTMLElement, obj: TableOnSort) => void;
    /**
     *
     * @param this
     * @param obj
     * @since 2.8.8
     */
    colTool(this: HTMLElement, obj: TableOnColTool): void;
    /**
     *
     * @param this
     * @param obj
     * @since 2.8.0
     */
    colResized(this: HTMLElement, obj: TableOnColResized): void;
    /**
     *
     * @param this
     * @param obj
     * @since 2.8.0
     */
    colToggled(this: HTMLElement, obj: TableOnColToggled): void;
    row(this: HTMLTableRowElement, obj: TableOnRow): void;
    rowDouble(this: HTMLTableRowElement, obj: TableOnRowDouble): void;
    /**
     *
     * @param this
     * @param obj
     * @since 2.8.0
     */
    rowContextmenu(this: HTMLTableRowElement, obj: TableOnRowContextmenu): void;
    edit(this: HTMLTableCellElement, obj: TableOnEdit): void;
    tool(this: HTMLElement, obj: TableOnTool): void;
    /**
     *
     * @param this
     * @param obj
     * @since 2.7.0
     */
    toolDouble(this: HTMLElement, obj: TableOnToolDouble): void;
    checkbox(this: HTMLInputElement, obj: TableOnCheckbox): void;
    radio(this: HTMLInputElement, obj: TableOnRadio): void;
    /**
     *
     * @param this
     * @param obj
     * @since 2.7.0
     */
    pagebar(this: HTMLElement, obj: TableOnPagebar): void;
  };

  // https://www.layui.com/doc/element/table.html
  // https://www.layui.com/doc/modules/table.html
  /**
   * 表格 - 页面元素
   */
  interface Table {
    cache: object;

    /**
     * 获取表格选中行（。id 即为 id 参数对应的值
     * @param [id]
     */
    checkStatus(id: string): { data: []; isAll: boolean };

    /**
     * 清除临时Key (即：LAY_CHECKED和LAY_TABLE_INDEX)
     * @param [data]
     */
    clearCacheKey(data: object): object;

    config: {
      checkName: 'LAY_CHECKED'; // 是否选中状态的字段名
      //indexName: 'LAY_TABLE_INDEX'; // 初始下标索引名，用于恢复排序，2.8.0 改为 LAY_INDEX
      indexName: 'LAY_INDEX'; // 初始下标索引名，用于恢复排序
    };

    /**
     * 遍历表头
     * @param [id]  table参数中的id，无id则数字
     * @param [callback]  回调
     * @param [cols]
     */
    eachCols(id: string, callback?: AnyFn, cols?: Array<Array<Required<TableColumnOption>>>): void;

    /**
     * 导出自定数据到文件
     * @param [id]  table的id用于找到title当做下载文件名
     * @param [data]  手动指定数据
     * @param [type] 默认csv
     */
    // exportFile(id: string, data: any[], type?: string): void;
    // exportFile(colName: any[], data: any[], type?: string): void;
    /**
     *  导出table中数据到文件
     * @param [id]  table选项中的id，指定id后则下载的文件名为table中title <br/>&nbsp;
     *              若传入数组则是导出的文件的列标题colName
     * @param [data]  传入数据则导出的是该数据，不传则用id从table找数据
     * @param [type]   默认csv
     */
    exportFile(id: string | any[], data?: any[] | null, type?: string): void;

    /**
     * 导出对应 table 的数据或任意自定义数据
     * @param id table 渲染时的 id 或 要导出的数据表头（当 id 为 array 类型时）
     * @param [data] 要导出的自定义数据
     * @param [opts] 导出数据时的属性可选项，支持：type, title(2.7.0)
     */
    exportFile(id: string | any[], data?: any[] | null, opts?: { type?: 'csv' | 'xls'; title?: string }): void;

    /**
     * 获取表格当前页的所有行数据
     * @param [id]  table参数中的id，无id则数字
     */
    getData(id: string): any[];

    index: number;

    /**
     * 初始化
     * @param [filter]  lay-filter设定的值
     * @param [option] 各项基础参数
     */
    init(filter: string, option?: TableOption): object;

    /**
     * 绑定事件
     * <br/>&nbsp;  类型对应： （就是 TableOn+事件类型，无需记忆）
     * <br/>&nbsp;  checkbox   -> TableOnCheckbox
     * <br/>&nbsp;  pagebar   -> TableOnPagebar（2.7.0）
     * <br/>&nbsp;  toolbar    -> TableOnToolbar
     * <br/>&nbsp;  tool       -> TableOnTool
     * <br/>&nbsp;  toolDouble -> TableOnToolDouble（2.7.0）
     * <br/>&nbsp;  row        -> TableOnRow
     * <br/>&nbsp;  rowDouble        -> TableOnRowDouble
     * <br/>&nbsp;  edit-      -> TableOnEdit
     * <br/>&nbsp;  sort       ->  TableOnSort
     * <br/>&nbsp;  colResized       ->  TableOnColResized（2.8.0）
     * <br/>&nbsp;  colToggled       ->  TableOnColToggled（2.8.0）
     * <br/>&nbsp;  rowContextmenu       ->  TableOnRowContextmenu （2.8.0）
     * @param event eventTypeString(filter)
     * @param callback 事件回调参数
     */
    on<K extends keyof TableEventMap>(event: `${K}(${TableFilter})`, callback: TableEventMap[K]): void;
    on<K extends keyof TableEventMap>(event: K, callback: TableEventMap[K]): void;
    on<K extends string>(event: `${K}(${TableFilter})`, callback: AnyFn): void;

    /**
     * 表格重载
     * @param [id] table的id，唯一实例标识
     * @param [option] 基础参数
     * @param [deep]  true则深度复制
     */
    reload(id: string, option?: TableOption, deep?: boolean): void;

    /**
     * 表格重载数据
     * @param [id] table的id，唯一实例标识
     * @param [option] 基础参数
     * @param [deep]  true则深度复制
     * @since 2.7.0
     */
    reloadData(id: string, option?: TableOption, deep?: boolean): void;

    /**
     * 核心入口
     * @param [option] 基础参数
     */
    render(option: TableOption): TableRendered;
    /**
     * 用于重新渲染数据，一般在修改 table.cache 后使用
     * @param id - table 渲染时的 id 属性值
     * @since 2.8.6
     */
    renderData(id: string): void;

    /**
     * 重置表格尺寸结构
     * @param [id]  如果指定表格唯一 id，则只执行该 id 对应的表格实例
     */
    resize(id: string): void;

    /**
     * 设置table全局项
     * @param [option] 基础参数
     */
    set(option?: TableOption): Table;

    /**
     * 设置行选中状态
     * @param id table 渲染时的 id 属性值
     * @param [option]
     * @since 2.8.0
     */
    setRowChecked(id: string, option?: TableSetRowCheckedOption): void;
    /**
     * 获取指定 id 对应的表格实例配置项
     * @param id table 渲染时的 id 属性值
     * @since 2.8.0
     */
    getOptions(id: string): TableOption;
    /**
     * 设置列显示或隐藏
     * @param id table 渲染时的 id 属性值
     * @param cols 设置列（表头）显示或隐藏状态
     * @since 2.8.0
     */
    hideCol(id: string, cols: boolean | { field: TableColumnOption['field']; hide: boolean } | Array<{ field: TableColumnOption['field']; hide: boolean }>): void;
    /**
     * 更新指定行数据
     * @param id table 渲染时的 `id` 属性值
     * @param opts 更新指定行时的可选属性
     * @since 2.9.6
     */
    updateRow(id: string, opts: { index: number; data: object | Array<object> }, related?: (field: string, index: number) => boolean): void;
  }
}
