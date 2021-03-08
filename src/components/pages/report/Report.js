import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../../../redux/actions-report';
import { Chart } from 'react-charts';
import {normalizeSum,normalizeStringSum,normalizeQuantity, normalizeStringQuantity} from '../../../utils/utilFunctions';
function getData(chartData){
    // const data = [{"stringDate":"2021-02-16","sum":121733.15},{"stringDate":"2021-02-17","sum":10499.81},{"stringDate":"2021-02-18","sum":15635.64},{"stringDate":"2021-02-19","sum":483.96},{"stringDate":"2021-02-21","sum":819.26},{"stringDate":"2021-02-22","sum":778.31},{"stringDate":"2021-02-24","sum":-4956.08},{"stringDate":"2021-02-25","sum":189.98}];
    const data = [...chartData];
    return data.map(d=>{return {x:d.stringDate,y:d.sum}});
} 

function MyChart(chartData) {
    console.log(chartData)
    const data = /*React.useMemo(
      () => */[
        {
          label: 'Series 1', 
        //   data: [{ x: "2011-01-12", y: 11 }, { x: "2011-02-15", y: 10 }, { x: "2011-03-12", y: 9 }]
          data:getData(chartData) 
        }/*,
        {
          label: 'Series 2',
          data: [{ x: "2011-01-12", y: 10 }, { x: "2011-02-12", y: 11 }, { x: "2011-03-12", y: 5 }]
        },
        {
          label: 'Series 3',
          data: [{ x: "2011-01-12", y: 19 }, { x: "2011-02-12", y: 10 }, { x: "2011-03-12", y: 10 }]
        }*/
      ]/*,
      []
    )*/
   
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'ordinal', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
   
    return (
      <div
        style={{
          width: '80vw',
          height: '30vh'
        }}
      >
        <Chart data={data} axes={axes} />
        {/* <Chart data={chartData} axes={axes} /> */}
      </div>
    )
  }




const Report=()=>{
    const dispatch = useDispatch();
    const salesChartData = useSelector(state=>state.report.sales);
    const groupSalesData = useSelector(state=>state.report.groupSales);
    const from = useSelector(state=>state.report.from);
    const to = useSelector(state=>state.report.to);
    useEffect(()=>{dispatch(Actions.getSalesReportData(from,to)); dispatch(Actions.getGroupSalesReportData(from,to));},[])
    return<div style={{marginTop:"20px"}}>
        <h3 style={{margin:"10px 0",backgroundColor:"navy",color:"white"}}>Sales report</h3>
        <label >From <input type = "date" onChange={(e)=>dispatch(Actions.setDateFrom(e.target.value))} value={from}/></label>
        <label > to <input type = "date" onChange={(e)=>dispatch(Actions.setDateTo(e.target.value))} value={to}/></label>
        <button onClick={()=>{dispatch(Actions.getSalesReportData(from,to)); dispatch(Actions.getGroupSalesReportData(from,to));}}>Report</button>
        {MyChart(salesChartData)}
        {console.log(salesChartData)}
        <h3 style={{margin:"10px 0",backgroundColor:"navy",color:"white"}}>
            TOTAL : 
            {normalizeStringSum(groupSalesData.map(gr=>gr.data.map(d=>d.sum).reduce((p,c)=>p+c, 0)).reduce((p,c)=>p+c, 0))}
        </h3>
        <ol>
        {
            groupSalesData.map((gr, i)=>(
                <li key={i}>
                    {gr.groupName}. <b>({normalizeStringSum(gr.data.map(d=>d.sum).reduce((p,c)=>p+c, 0))})</b>
                    <ul>
                        {gr.data.map((d,i)=><li key={gr.groupId+i}><span>{d.stringDate}</span> &nbsp;&nbsp; <span style={{color:"darkgreen"}}>{normalizeStringSum(d.sum)}</span></li>)}
                    </ul>
                </li>
            ))
        }
        </ol>
    </div>
}

export default Report;
