declare namespace Layui{
  interface RateOption {
    /**
     * 指向容器选择器
     */
    elem?: string | HTMLElement | JQuery;
    /**
     * 评分组件中具体星星的个数。<br/>&nbsp;
     * 个数当然是整数啦，残缺的星星很可怜的，所以设置了小数点的组件我们会默认向下取整
     */
    length?: number;
    /**
     * 评分的初始值 默认：0
     */
    value?: number;
    /**
     * 主题颜色。<br/>&nbsp;
     */
    /**
     * 默认的组件颜色是#FFB800，你可以根据自身喜好来更改组件的颜色，以适用不同场景
     */
    theme?: string;
    /**
     * 设定组件是否可以选择半星 默认：false
     */
    half?: boolean;
    /**
     * 是否显示评分对应的内容 默认：false
     */
    text?: boolean;
    /**
     * 是否只读，即只用于展示而不可点 默认：false
     */
    readonly?: boolean;

    /**
     * 自定义文本的回调
     * @param [value]
     */
    setText?(value: number): void;

    choose?(value: number): void;
}

// https://www.layui.com/doc/modules/rate.html
/**
 *  评分组件
 */
interface Rate {
    config: { [index: string]: any };
    index: number;

    /**
     *
     * @param [event]
     * @param [callback]
     */
    on(event: string, callback: (obj: any) => any): any;

    /**
     * 核心方法
     * @param [option] 基础参数
     */
    render(option: RateOption): Rate;

    /**
     * 设置全局参数
     * @param [options] 基础参数
     */
    set(options?: RateOption): Rate;
}
}