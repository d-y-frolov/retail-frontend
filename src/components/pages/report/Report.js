import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import * as Actions from '../../../redux/actions-report';
import * as RequestStatusActions from '../../../redux/actions-request-status';
import { Chart } from 'react-charts';
import {normalizeSum,normalizeStringSum,normalizeQuantity, normalizeStringQuantity} from '../../../utils/utilFunctions';
function getData(chartData){
    const data = [...chartData];
    return data.map(d=>{return {x:d.stringDate,y:d.sum}});
} 

function MyChart(chartData) {
    const data = [
        {
          label: 'Series 1', 
          data:getData(chartData) 
        }
      ]
   
    const axes = [
        { primary: true, type: 'ordinal', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ]
   
    return (
        <Chart data={data} axes={axes} />
    )
  }




const Report=()=>{
    const dispatch = useDispatch();
    const salesChartData = useSelector(state=>state.report.sales);
    const groupSalesData = useSelector(state=>state.report.groupSales);
    const requestStatus = useSelector(state=>state.requestStatus);
    const from = useSelector(state=>state.report.from);
    const to = useSelector(state=>state.report.to);
    useEffect(()=>{dispatch(Actions.getSalesReportData(from,to)); dispatch(Actions.getGroupSalesReportData(from,to));},[])
    return  <div style={{marginTop:"20px"}}>
        <h3 style={{margin:"10px 0",backgroundColor:"navy",color:"white"}}>Sales report</h3>
        <label >From <input type = "date" onChange={(e)=>dispatch(Actions.setDateFrom(e.target.value))} value={from}/></label>
        <label > to <input type = "date" onChange={(e)=>dispatch(Actions.setDateTo(e.target.value))} value={to}/></label>
        <button onClick={()=>{dispatch(Actions.getSalesReportData(from,to)); dispatch(Actions.getGroupSalesReportData(from,to));}}>Report</button>
        {

requestStatus.requestStatus===RequestStatusActions.REQUEST_SENT ? 
<div style={{display:"flex", width: '80vw',height: '30vh', justifyContent:"center", alignItems:"center"}}>
  <CircularProgress />
</div>
:
requestStatus.requestStatus===RequestStatusActions.REQUEST_FAILED ?
<div style={{display:"flex", width: '80vw',height: '30vh', justifyContent:"center", alignItems:"center"}}>
   <span>{requestStatus.infoString}</span>
</div>
:
          <div style={{width: '80vw',height: '30vh'}}>
             { MyChart(salesChartData)}
          </div>
        }
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
