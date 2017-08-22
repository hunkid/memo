采用create-react-app搭建的react备忘录项目。      
参考并重构了[此项目](https://github.com/damonare/memos)      
变化于更加注重基础组件的复用      

主要技术架构：React、Redux、React-router      

运行方式：
git clone git@github.com:damonare/memos.git     
npm install 
npm run start      

操作方式：
- 新建事项
    在输入框新增事项，并回车或点击“添加”按钮
- 新建->正在进行
    选中事项前的Checkbox按钮
- 正在进行->新建
    取消事项前的Checkbox按钮选中状态
- 正在进行<->已完成
    点击事项文字