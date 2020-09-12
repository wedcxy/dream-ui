## dream-ui 设计文档

- dr-card  卡片

  参数：

  | 参数名称        | 说明                             | 默认值   | 可选值   | 类型    |
  | --------------- | -------------------------------- | -------- | -------- | ------- |
  | header          | 通过指定slot的name,插入特定的DOM |          |          |         |
  | show            | 设置阴影显示                     | true     | ————     | boolean |
  | borderColor     | 自定义背景边框颜色               | #fff     | rgb,rgba | string  |
  | entiretyColor   | 设置整体字体颜色                 | \#303133 |          | string  |
| backgroundColor | 设置card背景颜色                 | #fff     |          | string  |
  
  header参数:
  
  | 参数名称    | 说明         | 默认值   | 可选值 | 类型    |
  | ----------- | ------------ | -------- | ------ | ------- |
  | titleCenter | 标题是否居中 | false    | __     | boolean |
  | titleColor  | 标题样式     | \#303133 | —      | string  |
  
  代码：
  
  ```vue
  // titleColor参数用于控制header的标题颜色，titleCenter参数用于控制header的展示位置
  <dr-card  titleColor="#85c1e9" titleCenter="true"> 
      <div slot="header" >
         <dr-icon icon="shibai2"></dr-icon>
         标题
       </div>
      <div>
        主体内容
      </div>
    </dr-card>
  ```
  
  
  
- dr-button 按钮

  参数：

  | 参数名称 | 说明     | 默认值  | 可选值                                               | 类型    |
  | -------- | -------- | ------- | ---------------------------------------------------- | ------- |
  | type     | 按钮样式 | default | default / primary  /success / info /warning / danger | string  |
  | size     | 按钮尺寸 | default | medium / small / mini                                | string  |
  | round    | 是否圆形 | false   | ___                                                  | boolean |
  
代码：
  
```vue
  <dr-button type="primary" size="small"></dr-button>
  ```
  

  
- dr-icon icon图标

  参数：

  | 参数名称 | 说明           | 默认值 | 可选值 | 类型   |
  | -------- | -------------- | ------ | ------ | ------ |
  | icon     | icon图标的名称 | __     | __     | string |

  代码例子：

  ```vue
  <dr-icon icon="jiandu"></dr-icon>
  ```



- dr-link 文字链接

  参数：

  | 参数名称  | 说明           | 默认值  | 可选值                                      | 类型    |
  | --------- | -------------- | ------- | ------------------------------------------- | ------- |
  | type      | 类型           | default | primary / success / warning / danger / info | string  |
  | disabled  | 是否禁用状态   | false   | ——————                                      | boolean |
  | icon      | 图标名称       | ————    | ——————                                      | string  |
  | underline | 是否下划线     | true    | ____                                        | boolean |
  | href      | 原生 href 属性 | __      | __                                          | string  |

  代码：

  ```vue
  <dr-link type="success" icon="jiandu">文字链接</dr-link>
  ```

