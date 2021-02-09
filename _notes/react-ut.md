

## Test points
1. 测试默认状态 snapshot
对于container组件，检查子组件的props
对于Presentational组件，检查其Element上的text，value

2. 测试交互 simulate event， 检查state，prop是否正确修改， function是否被调用

3. jest.func()
  check function is called and the prameters passed to the function
```
  exptect(props.onChange).toHaveBeenCalledWith(1)
```  



## Commnd
```
  npm test -t <filename>
```