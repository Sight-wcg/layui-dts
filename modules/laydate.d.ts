declare namespace Layui{
  interface DateParam {
    year?: number;
    month?: number;
    date?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

interface DateOption {
    /**
     * 绑定的元素 ，选择的值会填充该元素
     */
    elem: string | HTMLElement | JQuery;
    /**
     * 控件选择类型
     */
    type?: 'year' | 'month' | 'date' | 'time' | 'datetime';
    /**
     * 开启左右面板范围选择
     */
    range?: string | boolean | any[];
    /**
     * 是否开启日期范围选择时的区间联动标注模式，该模式必须开启 range 属性后生效。日期范围默认采用的是左右面板独立选择模式，设置该属性后，将采用左右面板联动选择模式
     * @default false
     * @since 2.8.0
     */
    rangeLinked?: boolean;
    /**
     * 是否开启全面板，即日期和时间显示在同一面板。 当 `type: 'datetime'` 且未设置 `range` 属性时生效
     * @default false
     * @since 2.8.0
     */
    fullPanel?: boolean;
    /**
     * 自定义格式 默认值：yyyy-MM-dd  实例： 'yyyy年MM月dd日'    <br/>&nbsp;
     *    yyyy    年份，至少四位数。如果不足四位，则前面补零    <br/>&nbsp;
     *    y    年份，不限制位数，即不管年份多少位，前面均不补零    <br/>&nbsp;
     *    MM    月份，至少两位数。如果不足两位，则前面补零。    <br/>&nbsp;
     *    M    月份，允许一位数。    <br/>&nbsp;
     *    dd    日期，至少两位数。如果不足两位，则前面补零。    <br/>&nbsp;
     *    d    日期，允许一位数。    <br/>&nbsp;
     *    HH    小时，至少两位数。如果不足两位，则前面补零。    <br/>&nbsp;
     *    H    小时，允许一位数。    <br/>&nbsp;
     *    mm    分钟，至少两位数。如果不足两位，则前面补零。    <br/>&nbsp;
     *    m    分钟，允许一位数。    <br/>&nbsp;
     *    ss    秒数，至少两位数。如果不足两位，则前面补零。    <br/>&nbsp;
     *    s    秒数，允许一位数。    <br/>&nbsp;
     */

    format?: string;
    /**
     * 标注节假日及补班日，值是一个二维数组
     * @example
     * ```
     * holidays: [
     *  // 2023 年的节假日
     *  ['2023-1-1','2023-1-2','2023-1-3'],
     *  // 2023 年的补班日
     *  ['2023-1-28','2023-1-29']
     * ]
     * ```
     * @since 2.7.3
     * @since 2.9.9 支持函数类型
     */
    holidays?: string[][] | ((ymd: {year:number; month: number; date: number}, render: (val: string | string[][]) => void) => void);
    /**
     * 初始值  ""|new Date()|20180115
     */
    value?: string | Date | number;
    /**
     * 初始值填充 默认值：true    <br/>&nbsp;
     */
    /**
     *   用于控制是否自动向元素填充初始值（需配合 value 参数使用）
     */
    isInitValue?: boolean;
    /**
     * 开启面板左侧的快捷选择栏，
     * 其中 `value` 支持以下类型：
     * - 若为 `string` 类型，必须和 `format` 设置的格式对应
     * - 若为 `Date` 对象类型，则可通过操作 `new Date()` 来对选项值进行相应的返回计算
     * - 若为 `Array` 类型，则数组成员可填写开始日期和结束日期
     * - 若为 `Function` 类型，返回值同上 2.8.16
     * @example
     * ```
     * shortcuts: [
     *   {
     *     text: "某一天", // 快捷选项文本
     *     value: '2023-05-01' // 快捷选项值， string 类型必须和 format 设置的格式对应
     *   },
     *   {
     *     text: "今天",
     *     value: Date.now() // Date 类型
     *   },
     *   {
     *     text: "明天",
     *     value: function(){
     *       var now = new Date();
     *       now.setDate(now.getDate() + 1);
     *       return now;
     *     }()
     *   },
     *   {
     *     text: "未来一年",
     *     value: function(){  // 数组类型可指定时间范围
     *       var now = new Date();
     *       now.setFullYear(now.getFullYear() + 1);
     *       return [new Date(), now]; 
     *     }
     *   },
     * ]
     * ```
     * @since 2.8.0
     */
    shortcuts?: {text: string, value: string | Date | Date[] | (() => string | Date | Date[])}[];
    /**
     * 设置起始周。 支持 0-6 的数字，0 即代表从周日开始
     * @default 0
     * @since 2.7.0
     */
    weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    /**
     * 是否开启选择值预览    <br/>&nbsp;
     *   用于控制是否显示当前结果的预览（type 为 datetime 时不开启）
     */
    isPreview?: boolean;
    /**
     * 最小范围内的日期时间值    <br/>&nbsp;
     *  1.如果值为字符类型，则：年月日必须用 -（中划线）分割、时分秒必须用 :（半角冒号）号分割。这里并非遵循 format 设定的格式    <br/>&nbsp;
     *  2.如果值为整数类型，且数字＜86400000，则数字代表天数，如：min: -7，即代表最小日期在7天前，正数代表若干天后    <br/>&nbsp;
     *  3.如果值为整数类型，且数字 ≥ 86400000，则数字代表时间戳，如：max: 4073558400000，即代表最大日期在：公元3000年1月1日
     */

    min?: string | number;
    /**
     * 最大范围内的日期时间值    <br/>&nbsp;
     *  1.如果值为字符类型，则：年月日必须用 -（中划线）分割、时分秒必须用 :（半角冒号）号分割。这里并非遵循 format 设定的格式    <br/>&nbsp;
     *  2.如果值为整数类型，且数字＜86400000，则数字代表天数，如：min: -7，即代表最小日期在7天前，正数代表若干天后    <br/>&nbsp;
     *  3.如果值为整数类型，且数字 ≥ 86400000，则数字代表时间戳，如：max: 4073558400000，即代表最大日期在：公元3000年1月1日
     */

    max?: string | number;
    /**
     * 自定义弹出控件的事件  默认值：focus，如果绑定的元素非输入框，则默认事件为：click
     */
    trigger?: string;
    /**
     *  默认显示  默认值：false
     */
    show?: boolean;
    /**
     * 阻止关闭事件冒泡
     */
    closeStop?: string;
    /**
     * 定位方式
     */
    position?: 'abolute' | 'fixed' | 'static';
    /**
     * 层叠顺序 ,如果 position 参数设为 static 时，该参数无效。
     */
    zIndex?: number;
    /**
     * 开启弹出日期面板时的遮罩
     * - 若为 number 类型，则表示遮罩透明度。如 `shade: 0.5`
     * - 若为 Array 类型，则可设置遮罩颜色和透明度，如：`shade: [0.5, '#000']`
     * @since 2.8.0
     */
    shade?: number | (string | number)[];
    /**
     *  是否显示底部栏
     */
    showBottom?: boolean;
    /**
     * 工具按钮   默认值：['clear', 'now', 'confirm']
     */
    btns?: Array<'clear' | 'now' | 'confirm'>;
    /**
     * 是否在选中目标值时即自动确认
     * 开启 range 时，该参数无效
     * @default true
     * @since 2.8.0
     */
    autoConfirm?: boolean;
    /**
     * 语言 内置了两种语言版本：cn（中文版）、en（国际版，即英文版） ，默认值：cn
     */
    lang?: 'cn' | 'en';
    /**
     * 主题 ，默认值：default
     * @example
     * ```
     * theme: '#FF5722' // 自定义主题
     * theme: 'molv' // 内置墨绿色主题
     * theme: 'grid' // 内置格子主题
     * theme: 'circle' // 内置圆圈高亮主题（2.8.0）
     * theme: ['grid', '#FF5722'] // 格子主题+自定义颜色，顺序无关，自定义颜色优先级更高（2.8.0）
     * theme: ['#FF5722', '#FF5723'] // 定义主色和辅色 （2.8.4）
     * ```
     */
    theme?: string | 'default' | 'molv' | 'grid' | 'circle' | Array<string | 'molv' | 'grid' | 'circle'>;
    /**
     * 是否显示公历节日  默认值：false
     */
    calendar?: boolean;
    /**
     * 标注重要日子  实例:{'0-0-31':'月末'} 比如2月bug
     * @since 2.9.9 支持函数类型
     */
    mark?: { [key: string]: string } | ((ymd: {year:number; month: number; date: number}, render: ((val: object) => void) | string) => void);

    eventElem?: string | HTMLElement | JQuery;

    /**
     * 仅用于格式化日期显示的格式，不影响日期值
     * @param value 日期字符串
     * @since 2.9.9
     */
    formatToDisplay?(value: string): string;
    /**
     * 设置不可选取的日期
     * @param date 当前的日期对象
     * @param type 面板类型，'start'|'end'
     * @return 返回值为 true 的日期会被禁用
     * @since 2.9.8
     */
    disabledDate?(date: Date, type?: 'start' | 'end'): boolean;
    /**
     * 设置不可选取的时间
     * @param date 当前的日期对象
     * @param type 面板类型，'start'|'end'
     * @return  数组中指定的时间会被禁用
     * @since 2.9.8
     */
    disabledTime?(date: Date, type?: 'start' | 'end'): { hours?(): number[]; minutes?(hour?: number): number[]; seconds?(hour?: number, minute?: number): number[]};

    /**
     * 自定义单元格内容
     * @param ymd 当前单元格日期对象
     * @param render 渲染函数
     * @param info 上下文信息，type 表示面板模式
     * @since 2.9.9
     */
    cellRender?(ymd: {year:number; month: number; date: number}, render: (val: string | HTMLElement | JQuery) => void, info: {type: 'year' | 'month' | 'date'}): void;
    /**
     * 控件初始打开的回调
     * @param [date] 基础参数
     */
    ready?(dateParam: DateParam): void;

    /**
     * 日期时间被切换后的回调   this to test and elem
     * @param [value] 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
     * @param [date] 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
     * @param [endDate] 开启范围选择（range: true）才会返回。对象成员同上date
     */
    change?(this: Required<DateOption>, value: string, date: DateParam, endDate: DateParam): void;

    /**
     * 控件选择完毕后的回调
     * @param [value] 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
     * @param [date] 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
     * @param [endDate] 开启范围选择（range: true）才会返回。对象成员同上date
     */
    done?(value: string, date: DateParam, endDate: DateParam): void;
    /**
     * 点击底部栏「确定」按钮时的回调函数
     * @param [value] 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
     * @param [date] 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
     * @param [endDate] 开启范围选择（range: true）才会返回。对象成员同上date
     * @since 2.8.0
     */
    onConfirm?(value: string, date: DateParam, endDate: DateParam): void;
    /**
     * 点击底部栏「现在」按钮时的回调函数
     * @param [value] 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
     * @param [date] 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
     * @param [endDate] 开启范围选择（range: true）才会返回。对象成员同上date
     * @since 2.8.0
     */
    onNow?(value: string, date: DateParam, endDate: DateParam): void;
    /**
     * 点击底部栏「清空」按钮时的回调函数
     * @param [value] 得到日期生成的值，如：2017-08-18 范围："2021-07-06 - 2021-08-09"
     * @param [date] 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
     * @param [endDate] 开启范围选择（range: true）才会返回。对象成员同上date
     * @since 2.8.0
     */
    onClear?(value: string, date: DateParam, endDate: DateParam): void;
    /**
     * 组件面板被完全关闭（移除）后触发的回调
     * @param [this] 组件实例
     * @since 2.7.4
     */
    close?(this: any): void;
}

/**
 * 日期和时间组件
 */
interface Laydate {
    /**
     * 核心方法
     * @param [options]  基础参数
     */
    render(options: DateOption): { config: DateOption; hint: (content: string) => void };

    /**
     * 设置全局参数
     * @param [options]
     */
    set(options?: DateOption): Laydate;

    /**
     * 配置基础路径    <br/>&nbsp;
     *  如果你不是采用 layui 或者普通 script 标签方式加载的 laydate.js，    <br/>&nbsp;
     *  而是采用 requirejs 等其它方式引用 laydate，    <br/>&nbsp;
     *  那么你需要设置基础路径，以便 laydate.css 完成加载。
     */

    path: string;

    /**
     * 在指定的日期面板弹出一个提示层
     * @param id 组件渲染时定义的 id 属性值
     * @param [option] 弹出提示选项
     * - option.content 提示内容
     * - option.ms 提示层自动消失所需的毫秒数
     * @since 2.8.0
     */
    hint(id: string, option?: {content: string, ms: number}): void;

    /**
     * 获取 laydate 对应 id 的实例
     * @param [id] 组件渲染时定义的 id 属性值
     * @since 2.8.0
     */
    getInst(id?: string): Laydate;

    /**
     * 解除实例绑定 
     * @remark 对目标元素对应的实例的完全解除，即触发元素事件时，不再执行组件渲染
     * @param [id] 组件渲染时定义的 id 属性值
     * @since 2.8.0
     */
    unbind(id?: string): void;

    /**
     * 关闭日期面板
     * @param [id] 组件渲染时定义的 id 属性值。 若 id 参数不填，则关闭当前打开的日期面板
     * @since 2.7.5
     */
    close(id?: string): Laydate;

    /**
     * 获取指定年月的最后一天
     * @param [month]  month默认为当前月
     * @param [year]  year默认为当前年
     */
    getEndDate(month?: number, year?: number): number;
}
}