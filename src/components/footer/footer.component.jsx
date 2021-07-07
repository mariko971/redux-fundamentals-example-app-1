import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { colorFilterChanged, colorFilterRemoved } from '../../features/filters/filtersSlice';

import './footer.styles.css';

const Footer = ()=>{
    const dispatch = useDispatch();
    const completedTodos = useSelector(state=>{
        const done = state.todos.filter(todo=>!todo.completed)
        return done.length;
      })

      const completeAll =()=> dispatch({type:'todos/allCompleted'})
      const clearAll = ()=> dispatch({type:'todos/completedCleared'}) 
      const filterActive = ()=> dispatch({type:'filters/statusFilterChanged', payload:'Active'})
      const filterCompleted = ()=> dispatch({type:'filters/statusFilterChanged', payload:'Completed'})
      const filterAll = ()=> dispatch({type:'filters/statusFilterChanged', payload:'All'})
      const filterColor = (e)=>{
        if(e.target.checked){
        return dispatch(colorFilterChanged(e.target.value))
      }
        return dispatch(colorFilterRemoved(e.target.value))
      }
    

    return (
      <div className="footer">
        <div className="actions">
          <h5>ACTIONS</h5>
          <button className="ActionBtn" onClick={completeAll}>
            Mark All Completed
          </button>
          <button className="ActionBtn" onClick={clearAll}>
            Clear Completed
          </button>
        </div>
        <div className="remainingTodos">
          <h5>Remaining Todos</h5>
          <p>{completedTodos} items left</p>
        </div>
        <div className="statusFilters">
          <h5>STATUS</h5>
          <button className="statusBtn" onClick={filterAll}>
            All
          </button>
          <button className="statusBtn" onClick={filterActive}>
            Active
          </button>
          <button className="statusBtn" onClick={filterCompleted}>
            Completed
          </button>
        </div>
        <div className="colorFilters">
          <h5>Filter by Color</h5>
          <div className="filter">
            <input type="checkbox" value='Green'  onChange={filterColor}/>
            <span className="box green"></span>
            <p>Green</p>
          </div>
          <div className="filter">
            <input type="checkbox" value='Blue' onChange={filterColor}/>
            <span className="box blue"></span>
            <p>Blue</p>
          </div>
          <div className="filter">
            <input type="checkbox" value='Orange' onChange={filterColor}/>
            <span className="box orange"></span>
            <p>Orange</p>
          </div>
          <div className="filter">
            <input type="checkbox" value='Purple' onChange={filterColor}/>
            <span className="box purple"></span>
            <p>Purple</p>
          </div>
          <div className="filter">
            <input type="checkbox" value='Red' onChange={filterColor}/>
            <span className="box red"></span>
            <p>Red</p>
          </div>
        </div>
      </div>
    )
}

export  default Footer;