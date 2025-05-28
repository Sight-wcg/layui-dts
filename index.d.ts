// Type definitions for layui-src 2.9.26
// Project: https://github.com/layui/layui/releases/tag/v2.9.25
// Definitions by: javabitar <https://github.com/javabitar>
// Definitions by: sight <https://github.com/Sight-wcg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.7

/// <reference types="jquery" />
/// <reference path="modules/carousel.d.ts" />
/// <reference path="modules/code.d.ts" />
/// <reference path="modules/colorpicker.d.ts" />
/// <reference path="modules/dropdown.d.ts" />
/// <reference path="modules/element.d.ts" />
/// <reference path="modules/flow.d.ts" />
/// <reference path="modules/form.d.ts" />
/// <reference path="modules/lay.d.ts" />
/// <reference path="modules/laydate.d.ts" />
/// <reference path="modules/layedit.d.ts" />
/// <reference path="modules/layer.d.ts" />
/// <reference path="modules/laypage.d.ts" />
/// <reference path="modules/laytpl.d.ts" />
/// <reference path="modules/rate.d.ts" />
/// <reference path="modules/slider.d.ts" />
/// <reference path="modules/table.d.ts" />
/// <reference path="modules/transfer.d.ts" />
/// <reference path="modules/tree.d.ts" />
/// <reference path="modules/treeTable.d.ts" />
/// <reference path="modules/upload.d.ts" />
/// <reference path="modules/util.d.ts" />
/// <reference path="Layui.d.ts" />
/// <reference path="misc.d.ts" />

declare const layui: Layui;
declare const lay: Layui.LayStatic;
declare const layer: Layui.Layer;
/**
 * 动态加载等特殊场景设置 layui 目录
 * @since 2.6.6
 */
declare const LAYUI_GLOBAL: { dir: string };

interface Window {
  layui: Layui;
  lay: Layui.LayStatic;
  layer: Layui.Layer;
  /**
   * 动态加载等特殊场景设置 layui 目录
   * @since 2.6.6
   */
  LAYUI_GLOBAL: { dir: string };
}
