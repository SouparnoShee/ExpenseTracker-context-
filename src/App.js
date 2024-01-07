import Budget from "./components/budget";
import ExpenseForm from "./components/expenseform";
import ExpenseList from "./components/expenselist";
import ExpenseTotal from "./components/expensetotal";
import Remaining from "./components/remaining";
import { AppProvider } from "./context/AppContext";
import "./sass/styles.scss"


// TODO: Insert the Context API inside the expense project , Learn and apply as well as take notes

// * Adding budget onclick functinality
// * Adding all the data to local storage
// * Write and note the imp concepts

function App() {
  return (

    <AppProvider>
      <div className="App">

        <h1 className="heading">Welcome to my budget app</h1>
        <div className="header">

          <Budget />
          <Remaining />
          <ExpenseTotal />
        </div>
        <div className="expenselist-wrapper">
          <ExpenseList />
        </div>
        <div className="add-expense-section">
          <h1>Add Expenses</h1>
          <div className="expense-form">
            <ExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
