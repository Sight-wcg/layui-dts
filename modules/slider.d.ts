declare namespace Layui{
  interface SliderOption {
    /**
     * 指向容器选择器
     */
    elem?: string | HTMLElement | JQuery;
    /**
     * 滑块类型，可选值有：default（水平滑块）、vertical（垂直滑块） 默认：default
     */
    type?: 'default' | 'vertical';
    /**
     * 滑动条最小值，正整数，默认： 0
     */
    min?: number;
    /**
     * 滑动条最大值 默认：100
     */
    max?: number;
    /**
     * 是否开启滑块的范围拖拽，若设为 true，则滑块将出现两个可拖拽的环 默认：false
     */
    range?: boolean;
    /**
     * 滑块初始值，默认为数字，若开启了滑块为范围拖拽（即 range: true），则需赋值数组，    <br/>&nbsp;
     *   表示开始和结尾的区间，如：value: [30, 60]
     */
    value?: number | number[];
    /**
     * 拖动的步长 默认：1
     */
    step?: number;
    /**
     * 是否显示间断点 默认：false
     */
    showstep?: boolean;
    /**
     * 是否显示文字提示 默认：true
     */
    tips?: boolean;
    /**
     * 是否显示输入框（注意：若 range 参数为 true 则强制无效）    <br/>&nbsp;
     */
    /**
     *  点击输入框的上下按钮，以及输入任意数字后回车或失去焦点，均可动态改变滑块 默认：false
     */
    input?: boolean;
    /**
     * 滑动条高度，需配合 type:"vertical" 参数使用 默认：200
     */
    height?: number;
    /**
     * 是否将滑块禁用拖拽 默认：false
     */
    disabled?: boolean;
    /**
     * 主题颜色，以便用在不同的主题风格下 默认：#009688
     */
    theme?: string;

    /**
     * 是否始终显示提示文本
     * @since 2.9.6
     */
    tipsAlways?: boolean;

    /**
     * 自定义提示文本
     * @param value 滑块为范围模式是数组，否则是数字
     */
    setTips?(value: number | number[]): string;

    /**
     * 数值改变的回调    <br/>&nbsp;
     * @param value 滑块为范围模式是数组，否则是数字
     */
    change?(value: number | number[]): void;
    /**
     * 滑块拖拽完毕的回调函数，滑块拖动过程中不会触发
     * @param value 滑块当前值
     * @since 2.8.0
     */
    done?(value: number | number[]): void;
}

// https://www.layui.com/doc/modules/slider.html
/**
 * 滑块
 */
interface Slider {
    config: { [index: string]: any };
    index: number;

    /**
     * 设置滑块的全局参数
     * @param options 基础参数
     */
    set(options?: SliderOption): Slider;

    // bug to fix
    on(event: string, callback: (obj: any) => any): any;

    /**
     * 核心方法
     * @param option 参数
     */
    render(option: SliderOption): {
        config: SliderOption;
        /**
         * 改变指定滑块实例的数值
         * @param value
         * @param index 若滑块开启了范围（range: true） 则index需要0和1
         */
        setValue(value: any, index?: number): void;
    };

    // setValue(value1: number, value2?: number): void;
}
}