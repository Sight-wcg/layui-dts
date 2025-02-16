declare namespace Layui{
       // https://www.layui.com/doc/modules/laytpl.html
    /**
     * 模板引擎
     */
    interface Laytpl {
      /**
       * @param tpl 模板原始字符
       * @param [options] 属性配置项，局部配置
       * - options.open 标签符前缀
       * - options.close 标签符后缀
       */
      (tpl: string, options?: { open?: string; close?: string }): TplObject;

      /**
       * 重新定义分隔符 <br/>&nbsp;
       * 如果模版默认的 {{ }} 分隔符与你的其它模板（一般是服务端模板）存在冲突，你也可以重新定义分隔符：
       * @param [option]  例如：{open: '<%',close: '%>'}
       */
      config(option?: { open?: string; close?: string }): void;
  }

  interface TplObject {
      tpl: string;

      /**
       * 执行解析,不常用，推荐render
       * @param [tpl]  模板串
       * @param [data]  数据
       */
      parse(tpl: string, data: object): string;

      /**
       * 执行解析
       * @param [data]  数据
       * @param [callback]  解析后的回调，即可通过回调中参数也可通过render返回值获取解析后结果串
       */
      render(data: object, callback?: (str: string) => any): string;
  }
}