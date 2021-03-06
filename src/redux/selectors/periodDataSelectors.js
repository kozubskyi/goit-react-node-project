import { createSelector } from '@reduxjs/toolkit';
import { getActiveCategory } from './activeCategorySelector';
export const getIncomeTotal = state => state?.periodData?.incomes?.total;
export const getExpenseTotal = state => state?.periodData?.expenses?.total;
export const getPeriodData = state => state.periodData;

export const getDataForDiagram = createSelector(
  [getActiveCategory, getPeriodData],
  (category, periodData) => {
    const categoryData = periodData?.incomes?.incomesData[category]
      ? periodData.incomes.incomesData[category]
      : periodData?.expenses?.expensesData[category];
    if (categoryData) {
      const categoryDataKeys = Object.keys(categoryData).filter(el => el !== 'total');
      const formatedCategoryData = categoryDataKeys.map(category => ({
        name: category,
        data: categoryData[category],
      }));
      return formatedCategoryData.sort((a, b) => b.data - a.data);
    }
  },
);
