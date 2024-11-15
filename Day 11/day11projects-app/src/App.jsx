import ConditionalRender from "./ConditionalRender";
import ControlledForm from "./ControlledForm";
import DataBinding from "./DataBinding";
import List_demo from "./List_Demo";
import UnControlledForm from "./UncontrolledForm";

function App()

{

return (


<>
<ConditionalRender  isLoggedIn={false} />
< hr />
<DataBinding />
<hr />
<h1>List and Key Demo</h1>
<List_demo />
<hr />
<ControlledForm />
<hr />
<UnControlledForm />


</>

)


}

export default App;