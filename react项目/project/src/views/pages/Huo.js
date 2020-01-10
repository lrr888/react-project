import React, { Component } from 'react'
import Echarts from 'echarts'

export default class Huo extends Component {
  render() {
    return (
      <div id="app" style={{width:"900px",height:"600px"}}>
        
      </div>
    )
  }
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = Echarts.init(document.getElementById('app'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
}
