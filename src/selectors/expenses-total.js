const selectExpensesTotal = expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((sum, value) => sum + value, 0); // Adding up total expenses
};

export default selectExpensesTotal;