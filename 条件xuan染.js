/**
 * Created by war3_2 on 2017/3/6.
 */
/*
条件xuan染：
v-if / v-show:
    v-if：局部xuan染、切换消耗高、适用于条件变动不频繁
    v-show：始终xuan染，css控制、初始消耗高、适用于条件变动频繁
----------------------------------------------------------------------------------------------------------------------
注1：
    1、多于一个元素的 v-if 需要使用 <template>
    2、v-show 不支持 <template>
    3、v-else 必须紧跟在 v-if/v-show 指令后面
    4、组件条件下不能使用 <v-else>
----------------------------------------------------------------------------------------------------------------------
注2：1、<template> 元素是 HTML5 中引入的新元素，天然具有 display:none 的样式且无法改变，因此v-if 指令使用 <template> 元素包
装时，编译结果仅使用其所包装的内容而不保留 <template> 元素（脱壳）。
   2、v-show 指令通过 display 样式来控制元素是否显示，若使用 <template> 元素包装，编译时同样需要经过“脱壳”的过程，无法实现
   一个父级元素设置多个子元素的 display 样式，因此不能使用 <template> 元素包装多个元素，若希望能在条件变化时单独设置多个元素
   的 display 样式，则会带来较大的实现复杂度。当希望控制多个元素显示/隐藏时，要么使用非 <template>（如 <div> ）元素进行包装，
   并消除使用该包装元素对结构、样式带来的影响，要么分别对每个元素应用 v-show 指令，或者在切换性能消耗可接受的条件下，改为使用
    v-if 指令。
----------------------------------------------------------------------------------------------------------------------

*/