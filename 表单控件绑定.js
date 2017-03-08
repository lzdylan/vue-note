/**
 * Created by war3_2 on 2017/3/6.
 */
/*
 v-model实现双向数据绑定：
 1、text数据双向绑定：所有input中type定义的元素【CheckBox，Radio除外】
 2、Checkbox数据双向绑定：如果没有设置value则会选择所有的CheckBox，因为CheckBox的默认值是on
 3、Radio数据双向绑定：Radio有会将相同name属性的Radio分为一组
 4、Select数据双向绑定
 注：表单控件中，text 类型的数据双向绑定所涉及的表单控件如 text、number、range……等都是通过 value 来传递控件所包含的信息，
 双向绑定所绑定的其实就是控件的 value 属性。
 而 checkbox、radio 以及 select 就不同了，就控件而言，checkbox 和 radio 控件通过 checked 属性来表示控件的状态，select 控件
 通过 option 子元素的 selected 属性来表示控件的状态，从表单层面来讲，需要结合 value 和 checked / selected 属性才能获取这三
 种表单控件的完整状态，也就是说，value 属性是这三种表单控件状态的一部分。
 ----------------------------------------------------------------------------------------------------------------------
 绑定value：
 单个CheckBox绑定：   <input type="checkbox" v-model="toggle" v-bind:true-value="a" v-bind:true-value="b"/>
 多个CheckBox绑定：   <input type="checkbox" v-model="insurances" v-bind:value="insuranceltem"/>
 注：  <input type="radio" v-model="pick" v-bind:value="a"/>   当选中时vm.pick === vm.a
 <select v-model="selected">
 <option v-bind:value="{number:123}">123</option>
 </select>
 当选中时  typeof vm.selected -> object    vm.selected.number -> 123
 ----------------------------------------------------------------------------------------------------------------------
 参数特性：
 lazy：只针对type=text是改变input事件到change事件
 number：在数据更新处理时将数据自动转换为数值
 debounce：事件节流，在对用户事件进行处理时会进行debounce延迟，单位是毫秒
 注：所有的表单元素只有type=text是在input事件中更新数据的，而其他表单元素都是在change事件中更新数据的。因此lazy只用于text
 */