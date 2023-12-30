# Tours

加载一个 Tours 列表，用户可以移除某个 Tour，点击按钮阅读更多 Tour 的详细信息，或者重新加载所有 Tours。

## Flow of Application

1. `App.jsx` 从 API 中获取数据（fetch data），用 `useState` 将获取的数据存储到 `tours` 状态变量中，作为 prop 传递给 `Tours` 组件。
2. `Tours`组件 遍历数据数组，为数组中的每一个元素加载 `Tour` 组件。
3. 每一个 `Tour` 组件都有一个 `remove tour` 按钮和一个 `read more` 按钮。
4. 当 `remove tour` 按钮被点击时，`Tour`组件更新状态变量，将被点击的 `tour` 移出 `tours` 数组。 
5. 当 `read more` 按钮被点击时，`Tour` 组件更新状态变量，Toggle `read more` 按钮，有条件地加载完整的 description。
6. 当 `re-fetch` 按钮被点击时，`Tour` 组件重新从 API 中加载数据，更新状态变量。

## Steps
1. Render Tours
2. Remove Tour
3. Read More
4. Re-fetch Tours