/**
 * Created by war3_2 on 2017/3/7.
 */
/*
事件绑定：
    1、使用v-on绑定事件【例如：v-on:click】
注：通过methods申明的方法会将this绑定到实例自身，并且十分稳定，不会被用户重新赋值，而在data中申明的方法是可以重新赋值的
    2、使用内联语句：事件处理器限制为一个语句，可以直接使用字面量数据、VUE实例数据【不需要加this】或v-for中的临时变量。
                    内联语句事件对象使用$event传递
事件修饰符：  例如：v-on:click.prevent="submit"
    1、prevent：阻止默认动作
    2、stop：阻止冒泡
    3、capture：采用捕获模式而不是冒泡模式
    4、self：限制只接受自身触发的事件
按键修饰符：

*/