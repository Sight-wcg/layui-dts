declare namespace Layui {
  interface ColorPickerOption {
    /**
     * 指向容器选择器
     */
    elem: string | HTMLElement | JQuery;
    /**
     *    默认颜色，不管你是使用 hex、rgb 还是 rgba 的格式输入，最终会以指定的格式显示。
     */
    color?: string;
    /**
     * 颜色显示/输入格式，可选值： hex、rgb  <br/>&nbsp;
     * 若在 rgb 格式下开启了透明度，格式会自动变成 rgba。在没有输入颜色的前提下，组件会默认为 #000 也就是黑色。
     */
    format?: 'hex' | 'rgb' | 'rgba';
    /**
     * 是否开启透明度，若不开启，则不会显示透明框。<br/>&nbsp;
     * 开启了透明度选项时，当你的默认颜色为 hex 或 rgb 格式，组件会默认加上值为 1 的透明度。<br/>&nbsp;
     * 相同的，当你没有开启透明度，却以 rgba 格式设置默认颜色时，组件会默认没有透明度。<br/>&nbsp;
     * 注意：该参数必须配合 rgba 颜色值使用
     */
    alpha?: boolean;
    /**
     * 预定义颜色是否开启
     */
    predefine?: boolean;
    /**
     * 预定义颜色，此参数需配合 predefine: true 使用。
     */
    colors?: string[];
    /**
     * 下拉框大小，可以选择：lg、sm、xs。
     */
    size?: 'lg' | 'sm' | 'xs';

    /**
     * 颜色被改变的回调
     */
    change?(this: ColorPickerOption, color: string): void;

    /**
     * 颜色选择后的回调
     */
    done?(this: ColorPickerOption, color: string): void;

    /**
     * 取消颜色选择的回调函数
     * @param [value] 当前颜色值
     * @since 2.8.0
     */
    cancel?(color?: string): void;
    /**
     * 颜色选择面板被关闭触发的回调函数
     * @param [value] 当前颜色值
     * @since 2.8.0
     */
    close?(color?: string): void;
  }

  // https://www.layui.com/doc/modules/colorpicker.html
  /**
   * 颜色选择器
   */
  interface ColorPicker {
    config: { [index: string]: any };
    index: number;

    render(option: ColorPickerOption): ColorPicker;

    set(option: ColorPickerOption): ColorPicker;

    /**
     * 绑定切换事件
     * @param [event] 事件名
     * @param [callback] 回调函数
     */
    on(event: string, callback: (this: Layui, params: any) => any): any;
  }
}
