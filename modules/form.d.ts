declare namespace Layui {
  interface LayFormData {
    /**
     * 被执行事件的元素DOM对象，一般为button对象  ,可能是input select button等不能用HTMLElement
     */
    elem: any;
    /**
     * 得到美化后的DOM对象=$(selector)
     */
    othis: JQuery;
    /**
     * DOM对象值
     */
    value: string;
    /**
     * 被执行提交的form对象，一般在存在form标签时才会返回
     */
    form: HTMLFormElement;
    /**
     * 当前容器的全部表单字段，名值对形式：{name: value}
     */
    field: any;
  }

  interface LayFormVerifyConfig {
    [index: string]: ((value: string, item: HTMLElement) => any) | [RegExp, string];
  }

  // https://www.layui.com/doc/element/form.html
  // https://www.layui.com/doc/modules/form.html
  /**
   * 表单 - 页面元素
   */
  interface Form {
    config: {
      autocomplete: any;
      /**
       * form内置的验证
       */
      verify: {
        /**
         * 日期验证 date[0]是正则,date[1]是验证失败的提示（"日期格式不正确"）
         */
        date: [RegExp, string];
        /**
         * 邮箱验证 email[0]是正则,email[1]是验证失败的提示（"邮箱格式不正确"）
         */
        email: [RegExp, string];
        /**
         * 身份证号验证 identity[0]是正则,identity[1]是验证失败的提示（ 请输入正确的身份证号"）
         */
        identity: [RegExp, string];
        /**
         * 验证数字，如果参数不是数字则返回"只能填写数字"，是数字则无返回值  <br/>&nbsp;
         *   bug：当0,"0"会提示不是数字
         * @param [arg] 参数 比如 1,"1",-1
         */
        number: (arg: any) => string | null;
        /**
         * 手机号验证 phone[0]是正则,phone[1]是验证失败的提示（"请输入正确的手机号"）
         */
        phone: [RegExp, string];
        /**
         * 空值验证 required[0]是正则,required[1]是为空的提示（"必填项不能为空"）
         */
        required: [RegExp, string];
        /**
         * url验证 url[0]是正则,url[1]是验证失败的提示（"链接格式不正确"）
         */
        url: [RegExp, string];
        [index: string]: [RegExp, string] | ((...arg: any) => any);
      };
    };

    /**
     * 取值，取出所有子元素是input,select,textarea且有name的表单值
     * @param [filter]  class=""lay-filter=""中的值
     * @param [itemForm]  表单field子元素的父容器，没有则是第一个.layui-form作为父元素。实例：$(".layui-form")，
     */
    getValue(filter: string, itemForm?: JQuery): { [index: string]: string };

    /**
     * 表单field元素回调事件 （每个表单都有一个默认事件）
     * @param [event]   类似： select(x)|checkbox(x)|switch(x)|radio(x)|submit(x) x为field上的lay-filter="x"
     * @param [callback] 回调函数
     */
    on(event: string, callback: (data: LayFormData) => any): any;

    /**
     * 更新渲染,对动态插入的元素渲染
     * @param [type] 可选：'select' | 'checkbox' | 'radio' | null
     * @param [filter] lay-filter
     */
    render(type?: 'select' | 'checkbox' | 'radio' | null, filter?: string): Form;

    /**
     * 允许指定表单元素的 jQuery 对象，从而完成定向渲染。且支持两种方式的指向：
     * - 若 jQuery 对象指向表单域容器（class="layui-form"），则渲染该表单域中的所有表单项(2.8.0)
     * - 若 jQuery 对象指向的不是表单域容器，则只对该对象进行渲染
     * @example
     * ```
     * // 定向渲染（一般当表单存在动态生成时，进行渲染）
     * // 传入需要渲染的相应表单元素的 jQuery 对象
     * form.render($('#form-id')); // 渲染 id="form-id" 的表单域中的所有表单项
     * form.render($('#select-id')); // 仅渲染 id="select-id" 的表单项
     * ```
     * @param [obj] 表单元素的 jQuery 对象
     * @since 2.7.0
     */
    render(obj?: JQuery): Form;

    /**
     * 提交方法，可以实现在任意位置对指定表单的主动提交
     * @param filter 表单域容器的 lay-filter 属性值
     * @param [callback] 执行提交事件后的回调函数
     * @since 2.7.0
     */
    submit(filter: string, callback?: (data: LayFormData) => any): any;

    /**
     * 触发指定表单项的验证。验证通过，返回 true，否则返回 false
     * @param elem 元素选择器或 jQuery 对象
     * @since 2.7.0
     */
    validate(elem: string | Jquery): boolean;

    /**
     * 表单赋值 / 取值
     * @param [filter]  .layui-form 上的lay-filter=""值
     * @param [obj] 要设置的值
     */
    val(filter: string, obj?: object): any;

    /**
     * 维护表单验证
     * @param [config] 验证参数
     */
    verify(config: LayFormVerifyConfig): Form;
    /**
     * 设置验证规则中是否同时包含必填
     * @since 2.8.11
     * @deprecated 2.8.17 已移除
     */
    verIncludeRequired: boolean;
  }
}
