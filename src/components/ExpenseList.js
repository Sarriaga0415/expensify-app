import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';



const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id}{...expense}/>
    })}
    <ExpenseListItem />
  </div>
);

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };


//argument is providing info about what we want to connect - ie a subset
export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;